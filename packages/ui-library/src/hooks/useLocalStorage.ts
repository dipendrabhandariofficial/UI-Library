import { useSyncExternalStore, useCallback, useRef } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  // 1. Safe reader
  const readFromLocalStorage = (key: string, defaultValue: T): T => {
    if (typeof window === "undefined") return defaultValue;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  // Cache ref
  const cachedValue = useRef<T>(readFromLocalStorage(key, initialValue));

  // 2. Subscribe fn for useSyncExternalStore
  const subscribe = useCallback(
    (callback: () => void) => {
      const handler = (event: StorageEvent) => {
        if (event.key && event.key !== key) return;
        callback();
      };

      window.addEventListener("storage", handler);
      return () => window.removeEventListener("storage", handler);
    },
    [key]
  );

  // 3. Snapshot getter
  const getSnapshot = useCallback((): T => {
    const latest = readFromLocalStorage(key, initialValue);

    // Update only if changed
    if (JSON.stringify(latest) !== JSON.stringify(cachedValue.current)) {
      cachedValue.current = latest;
    }

    return cachedValue.current;
  }, [key, initialValue]);

  // 4. External store hook
  const value = useSyncExternalStore<T>(subscribe, getSnapshot);

  // 5. Write helpers
  const setValue = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      const valueToStore =
        typeof newValue === "function"
          ? (newValue as (prev: T) => T)(value)
          : newValue;

      localStorage.setItem(key, JSON.stringify(valueToStore));
      cachedValue.current = valueToStore;

      window.dispatchEvent(new StorageEvent("storage", { key }));
    },
    [key, value]
  );

  const addValue = useCallback(
    (newValue: any) => {
      let updatedValue: any;

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
