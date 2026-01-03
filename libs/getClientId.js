export function getClientId() {
  if (typeof window === "undefined") return null; // SSR safe
  let id = localStorage.getItem("clientId");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("clientId", id);
  }
  return id;
}
