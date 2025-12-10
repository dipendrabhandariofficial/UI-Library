import { useEffect, useRef, useState, useCallback } from "react";

interface UseIntersectionObserverOptions {
  target?: React.RefObject<Element | null> | null;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
  debug?: boolean;
  onEnter?: (entry: IntersectionObserverEntry) => void;
  onLeave?: (entry: IntersectionObserverEntry) => void;
}

const useIntersectionObserver = ({
  target,
  root = null,
  rootMargin = "0px",
  threshold = 0.7,
  once = false,
  debug = false,
  onEnter = () => {},
  onLeave = () => {},
}: UseIntersectionObserverOptions) => {
  const ref = target || useRef<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleEnter = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (debug) console.log("Element entered viewport", entry.target);
      onEnter(entry);
    },
    [debug, onEnter]
  );

  const handleLeave = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (debug) console.log("Element left viewport", entry.target);
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

        if (once && entry.isIntersecting) {
          observerRef.current?.unobserve(entry.target);
        }
      },
      { root: observerRoot, rootMargin, threshold }
    );

    observerRef.current.observe(element);

    return () => {
      if (!observerRef.current) return;
      observerRef.current.unobserve(element);
      observerRef.current.disconnect();
    };
  }, [ref, root, rootMargin, threshold, once, handleEnter, handleLeave]);

  return {
    ref,
    isIntersecting,
    observe: () => {
      const element = ref.current;
      if (element) observerRef.current?.observe(element);
    },
    unobserve: () => {
      const element = ref.current;
      if (element) observerRef.current?.unobserve(element);
    },
  };
};

export default useIntersectionObserver;
