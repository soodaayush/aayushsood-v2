"use client";

import { useEffect, useState } from "react";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth } from "../libs/firebaseConfig";

export function useAnonAuth() {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        await signInAnonymously(auth);
      }
    });

    return () => unsubscribe();
  }, []);

  return uid;
}
