import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "wouter";
import { ShieldAlert, CheckCircle2, Lock } from "lucide-react";

export default function HowItWorks() {
  usePageMeta(
    "How CovertCare Works | Proposed Care Relay",
    "Understand the proposed partner governance, minimum-data intake, clinician routing, disposition, referral, retention, and limitations."
  );

  const steps = [
    { title: "Establish governance", desc: "The institutional host defines the clinical scope, geographic operating area, referral pathways, legal basis, and threat model." },
    { title: "Approve roles", desc: "The host verifies and credentials trained intermediaries and qualified clinicians, granting them specific minimal access rights." },
    { title: "Obtain consent", desc: "The intermediary secures informed consent from the beneficiary before collecting any information, explaining the limitations." },
    { title: "Submit a minimum case", desc: "The intermediary submits structured data: age band, symptom category, duration, red flags, and access constraints. No names or precise locations." },
    { title: "Route appropriately", desc: "A coordinator or predefined rule assigns the case to a credentialed clinician within an established service window." },
    { title: "Provide a disposition", desc: "The clinician requests specific clarification, recommends routine/urgent assessment, provides self-care guidance, or marks out-of-scope." },
    { title: "Support referral", desc: "The intermediary communicates the next step to the beneficiary using the pre-established trusted relationship." },
    { title: "Close and review", desc: "The case is marked closed, referral status is recorded, and identifying data is minimized or purged according to the host policy." }
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-background pt-16 pb-20 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4 block">
            Illustrative workflow
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
            Minimum necessary information, qualified review, clear next step
          </h1>
        </div>
      </section>

      {/* Field photo — rural clinic */}
      <section className="relative overflow-hidden border-b border-border/40" style={{ height: "280px" }}>
        <img
          src="/images/rural-clinic.jpg"
          alt="Healthcare workers administering vaccines at a rural community clinic"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-primary/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-white text-base font-medium max-w-xs leading-relaxed" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.45)" }}>
              Qualified care delivered through trained field intermediaries
            </p>
          </div>
        </div>
        <p className="absolute bottom-3 right-4 text-white/50 text-xs" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>Photo: Magnific / rural community clinic</p>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-serif mb-8 border-b border-border pb-4">8 Governance Steps</h2>
            <div className="space-y-6 relative">
              <div className="absolute left-6 top-6 bottom-6 w-px bg-border hidden sm:block"></div>
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 relative bg-card p-6 border border-border shadow-sm rounded-sm z-10 sm:ml-12">
                  <div className="hidden sm:flex absolute -left-12 top-1/2 -translate-y-1/2 w-6 h-px bg-border"></div>
                  <div className="hidden sm:flex absolute -left-18 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary items-center justify-center font-bold text-primary z-20">
                    {i + 1}
                  </div>
                  <div className="sm:hidden w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" /> What cryptography CAN do
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Protect data in transit</li>
                <li className="flex gap-3 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Enforce access controls</li>
                <li className="flex gap-3 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Secure storage layers</li>
              </ul>
            </div>

            <div className="bg-muted/50 border border-border p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold font-serif mb-6 flex items-center gap-2 text-destructive">
                <ShieldAlert className="w-5 h-5" /> What it CANNOT do
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="text-destructive font-bold">✗</span> Prove a self-reported wound is real</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="text-destructive font-bold">✗</span> Guarantee physical device safety</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="text-destructive font-bold">✗</span> Remove all network metadata</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="text-destructive font-bold">✗</span> Prevent screen captures</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="text-destructive font-bold">✗</span> Replace clinical governance</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="text-destructive font-bold">✗</span> Guarantee perfect anonymity</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 p-6 border border-primary/20 rounded-lg mb-16">
            <h3 className="font-bold text-primary mb-2">Why Zero-Knowledge Proofs are not Priority 0</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              There is no validated need in the first pilot for a custom ZK proof system. The immediate threat model demands strict data minimization, clear role governance, and established secure transit. Complex cryptography will not be introduced until foundational clinical and operational safety are proven using standard, heavily audited tools.
            </p>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <Link href="/pilot" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Review the pilot and its safety gates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
