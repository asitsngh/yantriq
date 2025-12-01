import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, hover }: { children: React.ReactNode; hover?: boolean }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 p-6 bg-white transition-all ${
        hover ? 'group hover:shadow-lg hover:border-gray-300' : ''
      }`}
    >
      {children}
    </div>
  );
}
