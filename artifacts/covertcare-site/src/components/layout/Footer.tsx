import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="font-serif font-semibold text-2xl tracking-tight mb-4 text-white">CovertCare</h2>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
              CovertCare is developing a partner-operated, privacy-preserving care relay for trained field intermediaries and qualified clinicians in high-risk, low-connectivity settings. The project is currently in pilot design and does not provide medical advice or emergency services.
            </p>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-white mb-2">Explore</h3>
              <Link href="/solution" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Solution</Link>
              <Link href="/how-it-works" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">How it works</Link>
              <Link href="/pilot" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Pilot</Link>
              <Link href="/safety-and-trust" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Safety & trust</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-white mb-2">Organization</h3>
              <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Contact</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-white mb-2">Legal</h3>
              <Link href="/privacy" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Terms</Link>
              <Link href="/terms" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Medical and pilot-stage disclaimer</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col gap-6 text-xs text-primary-foreground/60 leading-relaxed">
          <p>
            CovertCare is a proposed public-interest digital-health initiative in pilot design. This website is informational only. It does not provide medical advice, emergency response, diagnosis, treatment, prescribing, patient intake, or access to clinicians. Do not submit medical, patient, incident, or precise-location information through this website. In an emergency, use the appropriate locally available emergency or health service where it is safe and possible to do so.
          </p>
          <p>
            Third-party names and trademarks referenced for research or comparison belong to their respective owners. Their mention does not imply partnership, endorsement, or integration.
          </p>
          <p>
            &copy; {new Date().getFullYear()} CovertCare Concept. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
