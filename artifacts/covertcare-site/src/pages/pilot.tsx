import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "wouter";
import { CheckCircle2, XCircle, Info, ShieldAlert } from "lucide-react";

export default function Pilot() {
  usePageMeta(
    "CovertCare Pilot | Host and Design Partner Program",
    "Review the proposed eight-week discovery, simulation, and pilot-readiness program for suitable humanitarian and refugee-health organizations."
  );

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-background pt-16 pb-20 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4 block">
            A bounded first test
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
            Eight weeks to decide whether this care-relay model should proceed
          </h1>
        </div>
      </section>

      {/* Partnership photo */}
      <section className="relative overflow-hidden border-b border-border/40" style={{ height: "280px" }}>
        <img
          src="/images/partnership.jpg"
          alt="Medical Teams International and IOM mobile medical brigades operating in Ukraine"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/65 via-primary/20 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <p className="text-white/90 text-xl font-serif font-semibold max-w-sm leading-snug drop-shadow">
              Institutional partnership, bounded scope, measurable outcome
            </p>
          </div>
        </div>
        <p className="absolute bottom-3 right-4 text-white/40 text-xs">Photo: Medical Teams International / Ukraine</p>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          {/* Who Should / Should Not Apply */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-card border border-border p-6 sm:p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Who should apply
              </h2>
              <ul className="space-y-3">
                {[
                  "Legitimate health/humanitarian orgs",
                  "Existing trained field intermediaries",
                  "Credentialed clinical staff",
                  "Defined referral pathways",
                  "Capacity for legal/privacy review",
                  "Real care-coordination problem",
                  "Tolerance for pilot failure/pivot",
                  "Leadership clinical ownership"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted/50 border border-border p-6 sm:p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold font-serif mb-6 flex items-center gap-2 text-destructive">
                <XCircle className="w-5 h-5" /> Who should not apply
              </h2>
              <ul className="space-y-3">
                {[
                  "Individual volunteer doctors",
                  "Orgs seeking public patient portals",
                  "Orgs doing emergency trauma response",
                  "Groups without clinical credentials",
                  "Projects requiring AI diagnosis",
                  "Unfunded exploratory startups",
                  "Orgs prescribing controlled substances",
                  "Groups seeking perfect anonymity",
                  "Orgs with no physical referral option"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Give / Get */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold font-serif mb-8 border-b border-border pb-4">Partnership Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">What the partner receives</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Threat model analysis</li>
                  <li>• Workflow mapping</li>
                  <li>• Clinical protocol design support</li>
                  <li>• Security/privacy architecture review</li>
                  <li>• Prototype implementation</li>
                  <li>• Training materials</li>
                  <li>• Tabletop simulation</li>
                  <li>• Measurement framework</li>
                  <li>• Open-source licensing</li>
                  <li>• Technical support during pilot</li>
                  <li>• Clear exit strategy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">What CovertCare requests</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Clinical lead time commitment</li>
                  <li>• Privacy/security focal point access</li>
                  <li>• Intermediary user testing feedback</li>
                  <li>• Honest evaluation data</li>
                  <li>• Agreement to safety stop-conditions</li>
                  <li>• No unauthorized media/PR</li>
                  <li>• Transparency on referral limits</li>
                  <li>• Institutional backing for testing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 8 Week Plan Detailed */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold font-serif mb-8 border-b border-border pb-4">Proposed 8-Week Discovery Plan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { w: 1, title: "Workflow discovery", desc: "Map current ad-hoc clinical workflows and constraints." },
                { w: 2, title: "Scope and threat model", desc: "Define adversaries, assets, and acceptable risk limits." },
                { w: 3, title: "Prototype", desc: "Non-functional interface testing with intermediaries." },
                { w: 4, title: "Technical foundation", desc: "Deploy secure isolated environment and role controls." },
                { w: 5, title: "Simulation", desc: "Tabletop exercise with synthetic cases and incident response." },
                { w: 6, title: "Training and revision", desc: "Train participants; adjust based on simulation." },
                { w: 7, title: "Pilot-readiness decision", desc: "Formal Go/No-Go based on safety gates." },
                { w: 8, title: "Evaluation and decision", desc: "Initial bounded use (if approved) and measurement." }
              ].map((week) => (
                <div key={week.w} className="bg-card border border-border p-4 rounded-sm">
                  <div className="text-xs font-mono font-bold text-primary mb-1">WEEK {week.w}</div>
                  <h4 className="font-semibold text-sm mb-2">{week.title}</h4>
                  <p className="text-xs text-muted-foreground">{week.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="measurement" className="bg-card border border-border p-8 rounded-lg shadow-sm mb-16">
            <h2 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" /> Core Measurement Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Timeliness (response speed)",
                "Clinical completeness",
                "Data minimization vs baseline",
                "Referral closure rate",
                "Clinical/privacy incidents",
                "Provider burden (time)",
                "Repeat adoption rate",
                "Cost per completed case"
              ].map((m, i) => (
                <div key={i} className="text-sm font-medium p-3 bg-muted rounded-sm border border-border/50 text-center">
                  {m}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-900/30 p-8 rounded-lg mb-16 text-destructive dark:text-red-400">
            <h2 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" /> Stop Criteria
            </h2>
            <p className="text-sm mb-4 text-foreground/80 dark:text-red-300">
              The pilot will be terminated or paused if any of the following occur:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li>• Unacceptable clinical risk identified</li>
              <li>• Unmitigated data breach</li>
              <li>• Loss of host clinical governance</li>
              <li>• Unacceptable burden on clinicians</li>
              <li>• Tool weaponization detected</li>
              <li>• Zero clear next-steps possible</li>
              <li>• Intermediary safety compromised</li>
              <li>• Mutual decision to pivot</li>
            </ul>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              This form is for organizations considering a discovery or pilot partnership. Do not include patient details, symptoms, medical records, injury descriptions, incident evidence, precise locations, political information, or urgent requests.
            </p>
            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-sm bg-primary px-8 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Start an institutional pilot conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
