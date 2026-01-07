import { useEffect, useState } from 'react';
import SkeletonPage from './SkeletonPage';

type Props = {
  delay?: number;
};

export default function DelayedSkeleton({ delay = 500 }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return show ? <SkeletonPage /> : null;
}
