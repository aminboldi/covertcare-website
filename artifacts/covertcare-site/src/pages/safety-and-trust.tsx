import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "wouter";
import { ShieldAlert, BookOpen, ExternalLink, Scale, CheckCircle2 } from "lucide-react";

export default function SafetyAndTrust() {
  usePageMeta(
    "Safety & Trust | CovertCare Principles and Limitations",
    "Read CovertCare's approach to clinical governance, data minimization, threat modelling, residual risk, research integrity, and responsible deployment."
  );

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-background pt-16 pb-20 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4 block">
            Responsible development
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
            No absolute security claim. No live use without accountable governance.
          </h1>
        </div>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-20">
          
          {/* Core Commitments */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-6 border-b border-border pb-4">Core Commitments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "No patient-data monetization",
                "No advertising or trackers",
                "No secondary research use by default",
                "No custom cryptography in the first pilot",
                "No public operational map",
                "No claim of perfect anonymity",
                "No deployment without host governance",
                "Independent review before higher-risk deployment"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm p-4 bg-card border border-border rounded-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Threat Model Categories */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-6 border-b border-border pb-4">Threat Model Categories</h2>
            <p className="text-foreground/80 mb-6">
              A comprehensive threat model is required before any live use. The baseline categories addressed during pilot design include:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "Device confiscation",
                "Network surveillance",
                "Account takeover",
                "Data breach (host)",
                "Metadata analysis",
                "Shoulder surfing",
                "Coerced disclosure",
                "Insider threat",
                "Malicious intermediary",
                "Supply chain attack",
                "Denial of service",
                "Legal compulsion"
              ].map((threat, i) => (
                <div key={i} className="text-xs font-mono bg-muted text-muted-foreground p-3 rounded-sm border border-border text-center flex items-center justify-center">
                  {threat}
                </div>
              ))}
            </div>
          </div>

          {/* Residual Risks */}
          <div className="bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-900/30 p-8 rounded-lg text-destructive dark:text-red-400">
            <h2 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" /> Residual Risks
            </h2>
            <p className="text-sm mb-6 text-foreground/80 dark:text-red-300">
              CovertCare cannot eliminate all risks. The following known residual risks must be accepted and managed by the host organization:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[
                "Targeted device compromise (spyware)",
                "Traffic timing analysis",
                "Clinical misdiagnosis due to limited data",
                "Failure of referral pathways",
                "Host organization compromise",
                "Intermediary error or negligence",
                "Cloud infrastructure vulnerabilities",
                "Zero-day exploits",
                "Social engineering of clinicians",
                "Legal compulsion in host jurisdiction",
                "Physical risks to intermediaries"
              ].map((risk, i) => (
                <li key={i} className="flex gap-2">
                  <span className="font-bold">•</span> {risk}
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Safety */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-6 border-b border-border pb-4 flex items-center gap-2">
              <Scale className="w-6 h-6 text-primary" /> Clinical Safety
            </h2>
            <ul className="space-y-4 text-sm text-foreground/80">
              <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Governance: Only verified clinicians operating under a host organization's liability framework.</li>
              <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Scope: No prescribing of controlled substances or emergency trauma triage in V1.</li>
              <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Red Flags: Structured intake forces declaration of high-risk symptoms requiring immediate physical escalation.</li>
              <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Disposition: Mandatory clear outcome (e.g., "Out of scope", "Requires physical visit").</li>
            </ul>
          </div>

          {/* Data and retention */}
          <div className="bg-card p-6 border border-border shadow-sm rounded-sm">
            <h3 className="font-bold mb-4">Data and Retention</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Self-destructing messages are a feature, not governance. CovertCare relies on host-defined retention policies enforced at the database level. Clinical records must be maintained according to host medical-legal requirements, but identifying linkage data should be minimized or purged as soon as the care pathway closes.
            </p>
          </div>

          {/* Research Sources */}
          <div id="evidence">
            <h2 className="text-2xl font-bold font-serif mb-6 border-b border-border pb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" /> Research Sources
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              The following public documents establish context for the problem space. They do not imply endorsement of CovertCare.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "WHO: Attacks on Health Care",
                  desc: "Documenting the disruption of physical care access in conflict zones.",
                  url: "https://www.who.int/activities/stopping-attacks-on-health-care"
                },
                {
                  title: "WHO Telemedicine Guide",
                  desc: "Consolidated guidelines for remote clinical consultation.",
                  url: "https://www.who.int/publications/i/item/9789240059184"
                },
                {
                  title: "WHO/Europe Digital Health Cybersecurity",
                  desc: "Guide to strengthening cybersecurity in digital health infrastructure.",
                  url: "https://www.who.int/europe/news/item/26-03-2025-who-europe-launches-guide-to-strengthen-cybersecurity-in-digital-health"
                },
                {
                  title: "UNHCR Global Trends",
                  desc: "Statistics on forced displacement driving care discontinuity.",
                  url: "https://www.unhcr.org/global-trends"
                },
                {
                  title: "ICRC Handbook on Data Protection",
                  desc: "Standards for data protection in humanitarian action.",
                  url: "https://www.icrc.org/en/data-protection-humanitarian-action-handbook"
                },
                {
                  title: "MSF Telemedicine",
                  desc: "Demonstrating institutional remote expertise models.",
                  url: "https://www.doctorswithoutborders.ca/telemedicine/"
                },
                {
                  title: "Tella Security and Privacy",
                  desc: "Documented approach to high-risk data capture protection.",
                  url: "https://tella-app.org/security-and-privacy/"
                },
                {
                  title: "Signal Sealed Sender",
                  desc: "Technical approach to metadata reduction in transit.",
                  url: "https://signal.org/blog/sealed-sender/"
                },
                {
                  title: "NIST SP 800-63C",
                  desc: "Digital identity guidelines and federation.",
                  url: "https://pages.nist.gov/800-63-4/sp800-63c.html"
                }
              ].map((source, i) => (
                <div key={i} className="group p-4 bg-background border border-border rounded-sm hover:border-primary/50 transition-colors">
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-sm text-primary group-hover:underline underline-offset-2">{source.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{source.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-muted/50 rounded-sm border border-border text-sm flex gap-3 text-muted-foreground">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Security reporting:</strong> Inquiries regarding security architecture or vulnerability reporting will be directed to <code className="text-xs bg-background px-1 rounded">security@covertcare.org</code> once infrastructure is deployed.
              </span>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Contribute relevant expertise
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
