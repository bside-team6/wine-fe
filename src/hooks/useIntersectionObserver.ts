import { useEffect } from 'react';

export interface useIntersectionObserverOptions {
  target: React.RefObject<HTMLElement>;
  onIntersect(): void;
  enabled?: boolean;
}

const useIntersectionObserver = ({
  target,
  onIntersect,
  enabled = true,
}: useIntersectionObserverOptions) => {
  useEffect(() => {
    const el = target.current;
    if (el && enabled) {
      const observer = new IntersectionObserver((entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, [target, enabled, onIntersect]);
};

export default useIntersectionObserver;
