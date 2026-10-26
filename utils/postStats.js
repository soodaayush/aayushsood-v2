// Client helpers for /api/posts/[id] — view/like counts stored in Firestore on the server

function storageKey(action, postId) {
  return `post-${action}:${postId}`;
}

// Whether this browser already viewed/liked the post (storage can be unavailable, e.g. private mode)
export function hasRecorded(action, postId) {
  try {
    return localStorage.getItem(storageKey(action, postId)) === "1";
  } catch {
    return false;
  }
}

function markRecorded(action, postId) {
  try {
    localStorage.setItem(storageKey(action, postId), "1");
  } catch {}
}

export async function getPostStats(postId) {
  const res = await fetch(`/api/posts/${postId}`);
  if (!res.ok) throw new Error(`Failed to load counts (${res.status})`);
  return res.json();
}

export async function recordPostAction(action, postId) {
  const res = await fetch(`/api/posts/${postId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action }),
  });
  if (!res.ok) throw new Error(`Failed to record ${action} (${res.status})`);
  markRecorded(action, postId);
  return res.json();
}
