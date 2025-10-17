import { PortfolioEditor } from '@/components/portfolio-editor';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="w-full h-screen bg-background" />}>
        <PortfolioEditor />
      </Suspense>
    </main>
  );
}
