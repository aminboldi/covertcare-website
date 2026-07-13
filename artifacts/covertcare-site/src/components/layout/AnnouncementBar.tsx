import { useState, useEffect } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("covertcare-announcement-dismissed");
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("covertcare-announcement-dismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-secondary text-secondary-foreground px-4 py-2.5 sm:px-6 lg:px-8 relative z-50">
      <div className="container mx-auto max-w-7xl pr-8 text-center text-sm font-medium">
        <span className="hidden sm:inline">CovertCare is in pilot design. We are seeking one humanitarian or refugee-health host partner and qualified expert advisors. </span>
        <span className="sm:hidden block mb-1">Pilot-design stage &mdash; seeking host and expert partners. </span>
        <Link href="/pilot" className="underline underline-offset-2 hover:text-primary transition-colors whitespace-nowrap">
          Explore the pilot
        </Link>
      </div>
      <button 
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary-foreground/10 rounded-sm transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
