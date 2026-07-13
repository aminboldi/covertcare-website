import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "wouter";

export default function About() {
  usePageMeta(
    "About CovertCare | Mission, Team, and Principles",
    "Learn about CovertCare's public-interest mission, operating principles, required team capabilities, and governance approach."
  );

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-background pt-16 pb-20 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4 block">
            Public-interest digital health
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
            Designing a more disciplined path to clinical guidance in difficult settings
          </h1>
        </div>
      </section>

      {/* Field photo — community health worker */}
      <section className="relative overflow-hidden border-b border-border/40" style={{ height: "280px" }}>
        <img
          src="/images/context-chw.jpg"
          alt="Aisha, a community health worker in Galkacyo, Somalia"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/55 to-primary/10" />
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-right">
            <p className="text-white text-base font-medium max-w-xs ml-auto leading-relaxed" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.45)" }}>
              Community health workers are often the last link in the care chain
            </p>
          </div>
        </div>
        <p className="absolute bottom-3 left-4 text-white/50 text-xs" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>Photo: International Medical Corps / Somalia</p>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary text-primary-foreground p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold font-serif mb-4">Mission</h2>
              <p className="leading-relaxed">
                To help legitimate care and humanitarian organizations reduce unnecessary exposure while connecting trusted field intermediaries to qualified clinical guidance and referral.
              </p>
            </div>
            <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold font-serif mb-4 text-primary">Vision</h2>
              <p className="text-foreground/80 leading-relaxed">
                A world in which people facing disrupted care systems do not have to choose between seeking help and disclosing more personal information than the care pathway requires.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-serif mb-8 border-b border-border pb-4">10 Core Beliefs</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 list-decimal list-inside text-sm text-foreground/80 marker:text-primary marker:font-bold">
              {[
                "Medical access and privacy should be designed together.",
                "Clinical safety outranks product growth.",
                "\"Anonymous\" is not an acceptable substitute for a threat model.",
                "Existing humanitarian and privacy tools deserve honest comparison.",
                "A negative pilot result is useful.",
                "Affected communities should shape the workflow.",
                "The beneficiary's data is not a commercial asset.",
                "No public story is worth exposing a person or partner.",
                "Open source requires maintenance and governance, not only publication.",
                "The project should integrate rather than duplicate where possible."
              ].map((belief, i) => (
                <li key={i} className="pl-2 leading-relaxed">{belief}</li>
              ))}
            </ol>
          </div>

          <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold font-serif mb-6">Team & Roles</h2>
            
            <div className="mb-8 p-6 bg-muted rounded border border-border/50">
              <h3 className="font-semibold mb-2">Founder / Initiator</h3>
              <p className="text-sm text-muted-foreground italic">
                [Placeholder: Factual founder story explaining direct experience with the problem, relevant clinical/security/field expertise. Specific field relationships remain undisclosed without formal permission.]
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-primary mb-4 border-b border-border pb-2">Required Roles</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["Product & Program Lead", "Clinical Lead", "Security & Privacy Lead", "Field Partnerships Lead", "Advisors"].map((role, i) => (
                  <div key={i} className="text-sm p-3 bg-secondary/50 rounded-sm border border-border text-center">
                    {role}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm font-medium text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/20 p-3 rounded-sm border border-amber-200 dark:border-amber-900/30">
              We are currently recruiting an accountable clinical/security/field/legal/evaluation lead before live pilot activity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-serif mb-6 border-b border-border pb-4">Governance Intent</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-foreground/80">
              {[
                "Independent clinical oversight board",
                "Public threat model publication",
                "Non-profit or public-interest corporate structure",
                "Third-party security audits before scaling",
                "Strict limitations on law-enforcement data requests",
                "Transparent funding sources",
                "Adherence to humanitarian principles",
                "Clear end-of-life data destruction plans"
              ].map((req, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary font-bold">›</span> {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12 border-t border-border">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-sm border border-input bg-background px-8 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
              Join the advisory circle
            </Link>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Discuss institutional partnership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
