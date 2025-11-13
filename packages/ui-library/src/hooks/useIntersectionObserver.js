import { useEffect, useRef, useState, useCallback } from "react";

/**
 * useIntersectionObserver
 *
 * Observe element visibility within viewport or scrollable container.
 *
 * @param {Object} options
 * @param {React.RefObject} [options.target] - Optional external ref to observe.
 * @param {Element|null} [options.root] - Viewport element, defaults to parent.
 * @param {string} [options.rootMargin="0px"] - Margin around the root.
 * @param {number|number[]} [options.threshold=0.1] - Intersection ratio (0–1).
 * @param {boolean} [options.once=false] - If true, disconnect after first intersection.
 * @param {boolean} [options.debug=false] - Log intersection events in console.
 * @param {Function} [options.onEnter] - Called when element enters viewport.
 * @param {Function} [options.onLeave] - Called when element leaves viewport.
 *
 * @returns {Object} { ref, isIntersecting, observe, unobserve }
 */
const useIntersectionObserver=({
  target = null,
  root = null,
  rootMargin = "0px",
  threshold = 0.7,
  once = false,
  debug = false,
  onEnter = () => {},
  onLeave = () => {},
} = {}) => {
  const ref = target || useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef(null);

  const handleEnter = useCallback(
    (entry) => {
      if (debug) console.log(" Element entered viewport", entry.target);
      onEnter(entry);
    },
    [debug, onEnter]
  );

  const handleLeave = useCallback(
    (entry) => {
      if (debug) console.log(" Element left viewport", entry.target);
      onLeave(entry);
    },
    [debug, onLeave]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observerRoot = root || element.parentElement || null;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        entry.isIntersecting ? handleEnter(entry) : handleLeave(entry);

        if (once && entry.isIntersecting) observerRef.current?.unobserve(entry.target);
      },
      { root: observerRoot, rootMargin, threshold }
    );

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.unobserve(element);
      observerRef.current?.disconnect();
    };
  }, [ref, root, rootMargin, threshold, once, handleEnter, handleLeave]);

  return {
    ref,
    isIntersecting,
    observe: () => observerRef.current?.observe(ref.current),
    unobserve: () => observerRef.current?.unobserve(ref.current),
  };
};

export default useIntersectionObserver;
