import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "wouter";
import { ShieldAlert, BookOpen, ExternalLink, Scale, CheckCircle2, AlertTriangle, Lock, FileText, Search } from "lucide-react";

export default function SafetyAndTrust() {
  usePageMeta(
    "Safety & Trust | CovertCare Principles and Limitations",
    "Read CovertCare's approach to clinical governance, data minimization, threat modelling, residual risk, research integrity, and responsible deployment."
  );

  const commitments = [
    {
      title: "Data minimization",
      desc: "Collect only what the approved care pathway requires. No default collection of names, precise locations, or identifiers unless the clinical protocol specifically requires them."
    },
    {
      title: "Purpose limitation",
      desc: "Case data will not be repurposed for advertising, product profiling, model training, or secondary research without explicit host agreement."
    },
    {
      title: "Clinical accountability",
      desc: "A legitimate host organization defines clinical responsibility, service scope, and the governance framework before any live case is accepted."
    },
    {
      title: "Transparent limitations",
      desc: "The system will state clearly, in writing, what it cannot protect against — before any partner commits to deployment."
    },
    {
      title: "Context-specific threat modelling",
      desc: "No single architecture is assumed safe across all operating environments. Each partner context requires its own threat model before deployment."
    },
    {
      title: "Independent assessment",
      desc: "Security, clinical, legal, ethics, and community review will be sought before live use. CovertCare will not self-certify safety."
    },
    {
      title: "Responsible disclosure",
      desc: "A documented process for vulnerability reporting will be established before public release. No bug-bounty promises without the capacity to fulfill them."
    },
    {
      title: "Safe shutdown",
      desc: "An exit and data-deletion plan will be defined before launch. Partners and beneficiaries will not be abandoned mid-operation."
    }
  ];

  const threatCategories = [
    {
      title: "Lost or seized device",
      desc: "A beneficiary's or intermediary's device may be lost, stolen, or confiscated. The system must minimise what is accessible on-device without authentication."
    },
    {
      title: "Compromised account",
      desc: "Credentials may be guessed, phished, or coerced. The system must limit what any single account can access and support rapid revocation."
    },
    {
      title: "Malicious participant",
      desc: "An intermediary or clinician may act in bad faith. Role-based access, audit trails, and host oversight reduce but cannot eliminate this risk."
    },
    {
      title: "Network observation",
      desc: "Traffic patterns and metadata may be observable by network operators even when content is encrypted. Connection timing can be revealing."
    },
    {
      title: "Vulnerable dependency",
      desc: "Third-party libraries, infrastructure providers, and operating systems carry their own vulnerabilities that propagate into the application."
    },
    {
      title: "Coercion",
      desc: "A person may be physically compelled to unlock a device or reveal credentials. Deniable access or emergency wipe options may help but cannot fully address this."
    },
    {
      title: "Unsafe notification",
      desc: "Push notifications may display sensitive content on a locked screen or be intercepted by device management software."
    },
    {
      title: "Unauthorized forwarding",
      desc: "A received message can be forwarded or screenshotted. The system cannot prevent this once content is displayed."
    },
    {
      title: "Data retention",
      desc: "Records retained longer than needed increase exposure. Host retention policies must balance clinical obligation with data-minimization principles."
    },
    {
      title: "Service outage",
      desc: "Loss of connectivity or service availability in a time-sensitive case could cause harm. Partners must have offline escalation paths."
    },
    {
      title: "Incorrect routing",
      desc: "A case routed to the wrong clinician or team due to a configuration error may result in a missed or delayed response."
    },
    {
      title: "Emergency misuse",
      desc: "The system is not designed for acute emergencies. Misuse as an emergency channel could cause harm if response expectations are not met."
    }
  ];

  const residualRisks = [
    "Targeted device compromise (spyware)",
    "Screenshot or optical capture of displayed content",
    "Traffic timing and metadata analysis",
    "Coercion of a participant",
    "Clinical misdiagnosis due to limited information",
    "Failure of physical referral pathways",
    "Host organization compromise or misuse",
    "Intermediary error, negligence, or misconduct",
    "Vulnerabilities in cloud infrastructure providers",
    "Zero-day exploits in dependencies",
    "Social engineering of clinical or technical staff",
    "Legal compulsion in the host jurisdiction",
    "Physical surveillance of participants",
    "Third-party service exposure",
    "Malicious or poorly maintained forks of open-source code"
  ];

  const clinicalSafety = [
    { title: "Narrow scope", desc: "Only consultation and referral within an agreed clinical scope. Not emergency triage, controlled substance prescribing, or autonomous diagnosis." },
    { title: "Qualified clinicians only", desc: "All reviewing clinicians must be verified, credentialed, and operating under the host organization's framework." },
    { title: "No automated diagnosis", desc: "Algorithmic tools will not produce clinical dispositions. Human clinical judgment is required for every case response." },
    { title: "Clear emergency limitation", desc: "Intake will surface red-flag indicators requiring physical escalation. The system will explicitly instruct referral to physical care when appropriate." },
    { title: "Approved disposition categories", desc: "Clinicians select from a defined disposition set (e.g., self-care guidance, urgent physical referral, out of scope). Free-form ad-hoc responses are not the primary channel." },
    { title: "Quality review", desc: "Host clinical leads review a sample of cases against the agreed scope and escalation protocol." },
    { title: "Incident reporting", desc: "A mechanism for intermediaries to flag clinical or safety concerns will be defined before live use." },
    { title: "Stop criteria", desc: "Pilot stop criteria are defined in advance. Deployment halts if clinical safety, data protection, or safeguarding conditions are breached." }
  ];

  const sources = [
    {
      org: "WHO",
      title: "Attacks on Health Care",
      desc: "Documents attacks on health facilities, workers, and transport in conflict settings — the primary driver of care disruption the relay addresses.",
      url: "https://www.who.int/activities/stopping-attacks-on-health-care"
    },
    {
      org: "WHO",
      title: "Consolidated Telemedicine Implementation Guide",
      desc: "Clinical and governance requirements for remote consultation models, informing the care relay's design constraints.",
      url: "https://www.who.int/publications/i/item/9789240059184"
    },
    {
      org: "WHO",
      title: "Public Health Situation Analysis: Sudan Conflict",
      desc: "A recent field-level documentation of health system disruption in an active conflict — illustrating the operating environment.",
      url: "https://cdn.who.int/media/docs/default-source/documents/emergency-care/phsa-sudan-conflict-and-complex-emergency.pdf"
    },
    {
      org: "WHO/Europe",
      title: "Cybersecurity in Digital Health (2025)",
      desc: "Risk landscape and security requirements for digital health infrastructure — directly relevant to the system's technical threat model.",
      url: "https://www.who.int/europe/news/item/26-03-2025-who-europe-launches-guide-to-strengthen-cybersecurity-in-digital-health"
    },
    {
      org: "UNHCR",
      title: "Global Trends 2025",
      desc: "Forced displacement data establishing the scale of the population facing disrupted care access.",
      url: "https://www.unhcr.org/global-trends"
    },
    {
      org: "ICRC",
      title: "Handbook on Data Protection in Humanitarian Action",
      desc: "Standards for responsible data collection, minimization, and protection in humanitarian contexts — the governance baseline.",
      url: "https://www.icrc.org/en/data-protection-humanitarian-action-handbook"
    },
    {
      org: "ICRC",
      title: "Digital Health Framework",
      desc: "ICRC's framework for leveraging digital health innovations responsibly in humanitarian settings.",
      url: "https://www.icrc.org/en/publication/4749-digital-health-framework-leveraging-digital-health-innovations-and-intelligence"
    },
    {
      org: "MSF",
      title: "Telemedicine Programme",
      desc: "An institutional model for remote clinical expertise in humanitarian settings — demonstrating the approach is operationally credible.",
      url: "https://www.doctorswithoutborders.ca/telemedicine/"
    },
    {
      org: "PubMed Central",
      title: "TeleHelp Ukraine",
      desc: "A documented telemedicine deployment in an active conflict — evidence that remote consultation is feasible in disrupted settings.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11505576/"
    },
    {
      org: "Tella",
      title: "Security and Privacy Documentation",
      desc: "A field-tested approach to high-risk data capture protection, including threat modelling for at-risk users — a relevant design reference.",
      url: "https://tella-app.org/security-and-privacy/"
    },
    {
      org: "Hikma Health",
      title: "Our Solution",
      desc: "An existing community health workflow tool for refugee and displaced settings — a tool CovertCare is designed to complement, not duplicate.",
      url: "https://hikmahealth.org/our-solution"
    },
    {
      org: "Medic",
      title: "Community Health Toolkit",
      desc: "Field-validated community health worker software — another existing layer the care relay is designed to integrate alongside.",
      url: "https://medic.org/stories/transforming-community-health-in-uganda-the-journey-of-the-electronic-community-health-information-system/"
    },
    {
      org: "Signal",
      title: "Sealed Sender and Metadata Reduction",
      desc: "Technical documentation of metadata reduction in encrypted transit — relevant to the relay's secure communication layer.",
      url: "https://signal.org/blog/sealed-sender/"
    },
    {
      org: "NIST",
      title: "SP 800-63C — Federation and Assertions",
      desc: "Identity and authentication standards used to inform role verification and access control design.",
      url: "https://pages.nist.gov/800-63-4/sp800-63c.html"
    }
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Hero */}
      <section className="bg-background pt-16 pb-20 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4 block">
            Responsible development
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
            No absolute security claim. No live use without accountable governance.
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
            High-risk medical communication cannot be made risk-free. CovertCare's responsibility is to identify risks honestly, collect less data, use established components, define decision ownership, test before deployment, and stop when residual risk is unacceptable.
          </p>
        </div>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-24">

          {/* Core Commitments */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold font-serif">Core Commitments</h2>
            </div>
            <p className="text-muted-foreground mb-8 border-b border-border pb-6">
              These commitments apply before any live deployment. They are not aspirations — they are conditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commitments.map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-sm p-5 shadow-sm">
                  <h3 className="font-semibold text-sm text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Threat Model Categories */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold font-serif">Threat Model Categories</h2>
            </div>
            <p className="text-muted-foreground mb-8 border-b border-border pb-6">
              A comprehensive threat model is required before any live use. These are the baseline categories addressed during pilot design. The full model is partner-specific and will not be published in tactical detail on a public website.
            </p>
            <div className="space-y-4">
              {threatCategories.map((threat, i) => (
                <div key={i} className="flex gap-4 p-4 bg-card border border-border rounded-sm">
                  <span className="text-xs font-mono text-muted-foreground w-6 pt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{threat.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{threat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Residual Risks */}
          <div className="bg-red-50/60 dark:bg-red-950/10 border border-red-200 dark:border-red-900/30 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-2 text-destructive dark:text-red-400">
              <ShieldAlert className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold font-serif">Residual Risks</h2>
            </div>
            <p className="text-sm text-foreground/80 dark:text-red-300 mb-6 border-b border-red-200 dark:border-red-900/30 pb-4">
              Even a well-governed system may not prevent the following. These risks are disclosed in advance — not as disclaimers of responsibility, but as conditions partners must understand before committing to deployment.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-destructive/90 dark:text-red-400">
              {residualRisks.map((risk, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="font-bold mt-0.5 shrink-0">•</span>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Safety */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Scale className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold font-serif">Clinical Safety</h2>
            </div>
            <p className="text-muted-foreground mb-8 border-b border-border pb-6">
              Clinical safety is not a feature — it is the precondition for operating. The following requirements apply to any deployment.
            </p>
            <div className="space-y-4">
              {clinicalSafety.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-sm shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data and Retention */}
          <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold font-serif">Data and Retention</h2>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              "Self-destructing messages" is a feature, not a governance framework. CovertCare relies on host-defined retention policies enforced at the database level — not on client-side deletion that can be bypassed.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Every host must balance four competing obligations: minimum records consistent with clinical safety, professional and legal documentation requirements, privacy and data-minimization principles, and the ability to delete identifying linkage data when the care pathway closes. No platform can resolve this balance on behalf of a host organization.
            </p>
          </div>

          {/* Research Integrity */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Search className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold font-serif">Research Integrity</h2>
            </div>
            <p className="text-muted-foreground mb-8 border-b border-border pb-6">
              This website distinguishes between what is verified, what is claimed by the founder, what is hypothesized, and what remains unknown. No hypothesis is presented as an outcome.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Verified context",
                  color: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-400",
                  examples: "WHO, UNHCR, ICRC data on care disruption and displacement; documented operating tools (Tella, Medic, Signal); published clinical standards."
                },
                {
                  label: "Founder-provided facts",
                  color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30 text-blue-800 dark:text-blue-400",
                  examples: "Direct observations informing the problem statement. Not independently verified on this website. Field relationships are not disclosed without permission."
                },
                {
                  label: "Hypotheses",
                  color: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30 text-amber-800 dark:text-amber-400",
                  examples: "That a minimum-data relay reduces exposure risk. That an 8-week structured pilot can determine feasibility. That clinical volunteers would operate under this model."
                },
                {
                  label: "Targets and unknowns",
                  color: "bg-muted border-border text-foreground/70",
                  examples: "Pilot metrics, adoption rates, clinical quality benchmarks. None of these have been measured. They are pilot design goals, not results."
                }
              ].map((item, i) => (
                <div key={i} className={`border rounded-sm p-5 ${item.color}`}>
                  <h3 className="font-semibold text-sm mb-2">{item.label}</h3>
                  <p className="text-xs leading-relaxed opacity-90">{item.examples}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Sources */}
          <div id="evidence">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold font-serif">Research Sources</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-2 border-b border-border pb-6">
              The following public documents establish context for the problem space. They do not imply endorsement of, partnership with, or evaluation of CovertCare.
            </p>
            <div className="space-y-3 mt-6">
              {sources.map((source, i) => (
                <div key={i} className="group bg-card border border-border rounded-sm hover:border-primary/50 transition-colors">
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4">
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded shrink-0 mt-0.5">{source.org}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-primary group-hover:underline underline-offset-2 mb-1">{source.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{source.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-0.5" />
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/research" className="text-sm font-medium text-primary hover:underline underline-offset-4 inline-flex items-center gap-1">
                View full research index and context documentation →
              </Link>
            </div>
          </div>

          {/* Reporting a Concern */}
          <div className="bg-muted/50 border border-border p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold font-serif">Reporting a Security or Safety Concern</h2>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-6">
              Until a formal vulnerability disclosure program is established, security and safety inquiries should be directed to the team via the contact page. CovertCare will not publish a PGP key, bug-bounty program, audit result, or response SLA until the infrastructure and capacity to honor them are in place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Submit a security inquiry
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-sm border border-input bg-background px-6 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Join the advisory circle
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
