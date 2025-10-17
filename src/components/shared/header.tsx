import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Download } from 'lucide-react';

export function Header() {
  const handleDownload = () => {
    // In a real app, this would trigger a PDF generation and download.
    // For this demo, we can just print the window.
    window.print();
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6 print:hidden">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <h1 className="text-xl font-semibold">ProFolio Editor</h1>
      </div>
      <Button onClick={handleDownload}>
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </Button>
    </header>
  );
}
