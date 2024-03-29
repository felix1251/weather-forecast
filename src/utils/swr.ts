export const swrStorageProvider = (): Map<any, any> => {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem("appCache") || "[]"));

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener("beforeunload", () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem("appCache", appCache);
  });

  // We still use the map for write & read for performance.
  return map;
};
