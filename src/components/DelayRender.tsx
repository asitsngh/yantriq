import { useEffect, useState } from 'react';
import SkeletonPage from './SkeletonPage';

export default function DelayRender({
  children,
  delay = 3000,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (loading) return <SkeletonPage />;
  return <>{children}</>;
}