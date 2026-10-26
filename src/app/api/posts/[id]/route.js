import { FieldValue } from "firebase-admin/firestore";

import { getDb } from "../../../../../libs/firebaseAdmin";
import { getPostBySlug } from "../../../../../utils/fetchPosts";

export const dynamic = "force-dynamic";

const ACTIONS = {
  view: "viewCount",
  like: "likeCount",
};

function toCounts(snap) {
  const data = snap.exists ? snap.data() : {};
  return { viewCount: data.viewCount ?? 0, likeCount: data.likeCount ?? 0 };
}

export async function GET(request, { params }) {
  const { id } = await params;
  if (!getPostBySlug(id)) {
    return Response.json({ error: "Post not found" }, { status: 404 });
  }

  try {
    const snap = await getDb().collection("posts").doc(id).get();
    return Response.json(toCounts(snap));
  } catch (err) {
    console.error("GET /api/posts:", err.message);
    return Response.json({ error: "Could not load counts" }, { status: 500 });
  }
}

// Body: { "action": "view" | "like" } — increments that counter and returns the new counts
export async function POST(request, { params }) {
  const { id } = await params;
  if (!getPostBySlug(id)) {
    return Response.json({ error: "Post not found" }, { status: 404 });
  }

  const { action } = await request.json().catch(() => ({}));
  const field = ACTIONS[action];
  if (!field) {
    return Response.json({ error: "Invalid action" }, { status: 400 });
  }

  try {
    const postRef = getDb().collection("posts").doc(id);
    await postRef.set({ [field]: FieldValue.increment(1) }, { merge: true });
    return Response.json(toCounts(await postRef.get()));
  } catch (err) {
    console.error("POST /api/posts:", err.message);
    return Response.json({ error: "Could not update count" }, { status: 500 });
  }
}
