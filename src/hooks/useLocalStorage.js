import { useSyncExternalStore, useCallback, useRef } from "react";

export default function useLocalStorage(key, initialValue) {
  // A ref to cache the current parsed value
  const cachedValue = useRef(readFromLocalStorage(key, initialValue));

  // 🔹 1. Function to read safely from localStorage
  function readFromLocalStorage(key, defaultValue) {
    if (typeof window === "undefined") return defaultValue;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  // 🔹 2. Define subscribe function — React calls this to listen for updates
  const subscribe = useCallback((callback) => {
    const handler = (event) => {
      if (event.key && event.key !== key) return;
      // When storage changes (same or other tab), call the callback
      callback();
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [key]);

  // 🔹 3. Define getSnapshot (cached)
  const getSnapshot = useCallback(() => {
    const latest = readFromLocalStorage(key, initialValue);

    // Only update cached ref if data actually changed
    if (JSON.stringify(latest) !== JSON.stringify(cachedValue.current)) {
      cachedValue.current = latest;
    }

    return cachedValue.current;
  }, [key, initialValue]);

  // 🔹 4. Subscribe to storage using React’s external store API
  const value = useSyncExternalStore(subscribe, getSnapshot);

  // 🔹 5. Writer helpers
  const setValue = useCallback(
    (newValue) => {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;

      localStorage.setItem(key, JSON.stringify(valueToStore));
      cachedValue.current = valueToStore;

      // Force sync in same tab (custom StorageEvent)
      window.dispatchEvent(new StorageEvent("storage", { key }));
    },
    [key, value]
  );

  const addValue = useCallback(
    (newValue) => {
      let updatedValue;
      if (Array.isArray(value)) updatedValue = [...value, newValue];
      else if (typeof value === "object" && value !== null)
        updatedValue = { ...value, ...newValue };
      else updatedValue = newValue;

      localStorage.setItem(key, JSON.stringify(updatedValue));
      cachedValue.current = updatedValue;

      window.dispatchEvent(new StorageEvent("storage", { key }));
    },
    [key, value]
  );

  const removeItem = useCallback(() => {
    localStorage.removeItem(key);
    cachedValue.current = initialValue;
    window.dispatchEvent(new StorageEvent("storage", { key }));
  }, [key, initialValue]);

  const clearStorage = useCallback(() => {
    localStorage.clear();
    cachedValue.current = initialValue;
    window.dispatchEvent(new StorageEvent("storage", { key }));
  }, [initialValue]);

  return { value, setValue, addValue, removeItem, clearStorage };
}
