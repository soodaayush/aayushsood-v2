import "server-only";

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { initializeFirestore } from "firebase-admin/firestore";

let db;

// Initialized lazily so builds don't need Firebase credentials
export function getDb() {
  if (db) return db;

  const app =
    getApps()[0] ??
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Env vars store the key's newlines as literal "\n"
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });

  // REST instead of gRPC — much faster cold starts on serverless functions
  db = initializeFirestore(app, { preferRest: true });
  return db;
}
