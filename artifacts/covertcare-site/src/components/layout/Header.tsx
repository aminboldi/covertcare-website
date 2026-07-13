import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Solution", href: "/solution" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Pilot", href: "/pilot" },
    { label: "Safety & trust", href: "/safety-and-trust" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="font-serif font-semibold text-xl tracking-tight text-primary">CovertCare</span>
            </Link>
            <span className="hidden sm:inline-flex items-center rounded-sm bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
              Concept / pilot design
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Discuss a pilot
            </Link>
          </nav>

          <button 
            className="md:hidden inline-flex items-center justify-center p-2 rounded-sm text-foreground hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — absolute so it anchors directly below the sticky header
           regardless of whether the announcement bar is visible */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 z-50 bg-background overflow-y-auto border-t shadow-lg"
          style={{ maxHeight: "calc(100dvh - 4rem)" }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/privacy"
                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link 
                href="/terms"
                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms
              </Link>
            </nav>
            <div className="pt-4">
              <Link 
                href="/contact"
                className="inline-flex w-full h-12 items-center justify-center rounded-sm bg-primary px-4 py-2 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                onClick={() => setMobileMenuOpen(false)}
              >
                Discuss a pilot
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
