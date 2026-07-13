import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "wouter";
import { ExternalLink, BookOpen, ShieldAlert, CheckCircle2, HelpCircle, AlertTriangle } from "lucide-react";

export default function Research() {
  usePageMeta(
    "Research & Context | CovertCare Evidence Library",
    "Authoritative sources, verified context, and openly stated unknowns informing CovertCare's design. What is established, what is hypothesized, and what remains unmeasured."
  );

  const categories = [
    {
      label: "Care disruption and displacement",
      description: "The humanitarian access gap that the care relay is designed to address.",
      sources: [
        {
          org: "WHO",
          title: "Stopping Attacks on Health Care",
          desc: "WHO's monitoring initiative documenting attacks on health facilities, workers, and transport in conflict settings. Establishes that physical care access is systematically disrupted in certain operating environments.",
          url: "https://www.who.int/activities/stopping-attacks-on-health-care",
          status: "verified"
        },
        {
          org: "WHO",
          title: "Public Health Situation Analysis: Sudan Conflict (2026)",
          desc: "Field-level documentation of health system disruption in an active conflict. Illustrates the operating environment — damaged facilities, displaced health workers, fragmented supply chains.",
          url: "https://cdn.who.int/media/docs/default-source/documents/emergency-care/phsa-sudan-conflict-and-complex-emergency.pdf",
          status: "verified"
        },
        {
          org: "UNHCR",
          title: "Global Trends 2025",
          desc: "Annual report on forced displacement. Establishes the scale of the population facing disrupted care access — over 100 million forcibly displaced people globally.",
          url: "https://www.unhcr.org/global-trends",
          status: "verified"
        }
      ]
    },
    {
      label: "Remote clinical consultation",
      description: "Evidence that remote consultation is operationally feasible in humanitarian and low-resource settings.",
      sources: [
        {
          org: "WHO",
          title: "Consolidated Telemedicine Implementation Guide",
          desc: "WHO's clinical and governance requirements for remote consultation. Defines what responsible telemedicine looks like — scope, safeguards, liability, and clinical workflow — informing the care relay's design constraints.",
          url: "https://www.who.int/publications/i/item/9789240059184",
          status: "verified"
        },
        {
          org: "MSF",
          title: "Telemedicine Programme",
          desc: "Médecins Sans Frontières' institutional model for providing remote clinical expertise in humanitarian settings. Demonstrates that the intermediary-to-clinician model is operationally credible at scale.",
          url: "https://www.doctorswithoutborders.ca/telemedicine/",
          status: "verified"
        },
        {
          org: "PubMed Central",
          title: "TeleHelp Ukraine",
          desc: "A documented telemedicine deployment in an active conflict. Evidence that remote consultation is practically feasible during active disruption, not only in stable post-crisis settings.",
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11505576/",
          status: "verified"
        }
      ]
    },
    {
      label: "Data protection in humanitarian action",
      description: "The governance and legal standards that inform the care relay's data-minimization design.",
      sources: [
        {
          org: "ICRC",
          title: "Handbook on Data Protection in Humanitarian Action",
          desc: "The International Committee of the Red Cross's standards for responsible data collection, minimization, and protection in humanitarian contexts. The governance baseline for any system handling beneficiary information.",
          url: "https://www.icrc.org/en/data-protection-humanitarian-action-handbook",
          status: "verified"
        },
        {
          org: "ICRC",
          title: "Digital Health Framework",
          desc: "ICRC's framework for leveraging digital health innovations responsibly. Addresses the tension between clinical utility and data protection in humanitarian digital health deployments.",
          url: "https://www.icrc.org/en/publication/4749-digital-health-framework-leveraging-digital-health-innovations-and-intelligence",
          status: "verified"
        }
      ]
    },
    {
      label: "Cybersecurity in digital health",
      description: "The technical risk landscape informing the care relay's security architecture.",
      sources: [
        {
          org: "WHO/Europe",
          title: "Cybersecurity in Digital Health (2025)",
          desc: "WHO Europe's guide to the risk landscape and security requirements for digital health infrastructure. Establishes that cybersecurity in health systems is a documented and growing risk — not a theoretical concern.",
          url: "https://www.who.int/europe/news/item/26-03-2025-who-europe-launches-guide-to-strengthen-cybersecurity-in-digital-health",
          status: "verified"
        },
        {
          org: "Signal",
          title: "Sealed Sender and Metadata Reduction",
          desc: "Technical documentation of Signal's approach to reducing metadata in encrypted transit. Relevant to the communication security layer and the limits of encryption as a privacy tool.",
          url: "https://signal.org/blog/sealed-sender/",
          status: "verified"
        },
        {
          org: "NIST",
          title: "SP 800-63C — Federation and Assertions",
          desc: "Digital identity and authentication standards. Used to inform role verification, federation, and access control design for the care relay's credentialing model.",
          url: "https://pages.nist.gov/800-63-4/sp800-63c.html",
          status: "verified"
        }
      ]
    },
    {
      label: "Existing tools and adjacent solutions",
      description: "Tools the care relay is designed to complement, not replace. Honest comparison is a design principle.",
      sources: [
        {
          org: "Tella",
          title: "Security and Privacy Documentation",
          desc: "Field-tested approach to high-risk data capture and protection, including threat modelling for at-risk users. A relevant design reference for how to communicate security honestly with non-technical users in high-risk environments.",
          url: "https://tella-app.org/security-and-privacy/",
          status: "verified"
        },
        {
          org: "Hikma Health",
          title: "Our Solution",
          desc: "A community health workflow tool for refugee and displaced settings. CovertCare's proposed consultation relay is designed to integrate alongside tools like Hikma, not to replace them.",
          url: "https://hikmahealth.org/our-solution",
          status: "verified"
        },
        {
          org: "Medic",
          title: "Community Health Toolkit — Uganda Case Study",
          desc: "Field-validated community health worker software used in low-resource settings. Another layer the care relay is designed to work alongside.",
          url: "https://medic.org/stories/transforming-community-health-in-uganda-the-journey-of-the-electronic-community-health-information-system/",
          status: "verified"
        }
      ]
    },
    {
      label: "Funding and humanitarian innovation programs",
      description: "Institutional pathways through which a responsible humanitarian digital health initiative could seek support.",
      sources: [
        {
          org: "UNHCR Innovation",
          title: "Accelerator Funding",
          desc: "UNHCR's innovation funding program for early-stage initiatives addressing forced displacement. A potential institutional alignment pathway — listed for transparency, not as a claimed relationship.",
          url: "https://www.unhcr.org/innovation/innovation-funding/accelerator-funding",
          status: "context"
        },
        {
          org: "WFP",
          title: "Humanitarian Innovation Accelerator",
          desc: "World Food Programme's accelerator program for humanitarian technology. Listed as context for the institutional funding landscape.",
          url: "https://innovation.wfp.org/HIA",
          status: "context"
        },
        {
          org: "UNICEF",
          title: "Office of Innovation — Venture Fund",
          desc: "UNICEF's fund for open-source technology addressing the needs of vulnerable children. Listed as context for the institutional funding landscape.",
          url: "https://www.unicef.org/innovation/venturefund",
          status: "context"
        },
        {
          org: "Elrha",
          title: "Humanitarian Innovation Fund",
          desc: "A fund specifically for early-stage humanitarian innovation with a research and evidence focus — closely aligned with CovertCare's pilot design philosophy.",
          url: "https://www.elrha.org/innovation",
          status: "context"
        },
        {
          org: "MIT Solve",
          title: "Challenges",
          desc: "MIT's open innovation marketplace. Listed as a potential pathway for visibility and partnership — not a claimed or applied-for relationship.",
          url: "https://solve.mit.edu/challenges",
          status: "context"
        }
      ]
    }
  ];

  const statusConfig = {
    verified: {
      label: "Verified source",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-800/30",
      icon: <CheckCircle2 className="w-3 h-3" />
    },
    context: {
      label: "Context only",
      color: "bg-muted text-muted-foreground border-border",
      icon: <HelpCircle className="w-3 h-3" />
    }
  };

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Hero */}
      <section className="bg-background pt-16 pb-20 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4 block">
            Evidence and context
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
            What is established, what is hypothesized, and what remains unmeasured
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mb-8">
            CovertCare is a concept-stage initiative. This page documents the authoritative sources that establish context for the problem — and is explicit about the line between verified evidence, founder observation, and hypothesis.
          </p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(statusConfig).map(([key, conf]) => (
              <span key={key} className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${conf.color}`}>
                {conf.icon} {conf.label}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-800/30">
              <AlertTriangle className="w-3 h-3" /> Hypothesis — not yet measured
            </span>
          </div>
        </div>
      </section>

      {/* What is and is not established */}
      <section className="py-12 bg-primary/5 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 rounded-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <h3 className="font-semibold text-sm text-emerald-800 dark:text-emerald-400">Established by sources</h3>
              </div>
              <ul className="text-xs text-emerald-800/80 dark:text-emerald-400/80 space-y-2">
                <li>• Health systems are disrupted in conflict and displacement settings</li>
                <li>• Forced displacement affects over 100 million people globally</li>
                <li>• Remote clinical consultation is operationally feasible</li>
                <li>• Data over-sharing in informal consultation is a documented risk</li>
                <li>• Cryptography protects transit but not governance or behavior</li>
              </ul>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 rounded-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <h3 className="font-semibold text-sm text-amber-800 dark:text-amber-400">Hypothesized — not yet measured</h3>
              </div>
              <ul className="text-xs text-amber-800/80 dark:text-amber-400/80 space-y-2">
                <li>• That a minimum-data relay reduces exposure for beneficiaries</li>
                <li>• That intermediaries would adopt a structured protocol</li>
                <li>• That clinical volunteers would operate under this governance model</li>
                <li>• That an 8-week pilot can determine feasibility</li>
                <li>• That the model is safe in a specific partner context</li>
              </ul>
            </div>
            <div className="bg-muted border border-border rounded-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-semibold text-sm text-foreground/70">Not yet known</h3>
              </div>
              <ul className="text-xs text-muted-foreground space-y-2">
                <li>• Clinical quality in a live deployment</li>
                <li>• Actual data minimization achieved in practice</li>
                <li>• Whether beneficiaries consider the model trustworthy</li>
                <li>• Legal and regulatory status in any jurisdiction</li>
                <li>• Operational security of any specific configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Source library */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-16">

          {categories.map((cat, ci) => (
            <div key={ci}>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold font-serif">{cat.label}</h2>
                </div>
                <p className="text-sm text-muted-foreground border-b border-border pb-4">{cat.description}</p>
              </div>
              <div className="space-y-3">
                {cat.sources.map((source, si) => {
                  const conf = statusConfig[source.status as keyof typeof statusConfig];
                  return (
                    <div key={si} className="group bg-card border border-border rounded-sm hover:border-primary/50 transition-colors">
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5">
                        <span className="text-xs font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded shrink-0 mt-0.5 whitespace-nowrap">{source.org}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <h3 className="font-semibold text-sm text-primary group-hover:underline underline-offset-2">{source.title}</h3>
                            <span className={`inline-flex items-center gap-1 text-xs font-medium px-1.5 py-0.5 rounded-full border ${conf.color}`}>
                              {conf.icon} {conf.label}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{source.desc}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-0.5" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Disclaimer */}
          <div className="bg-muted/50 border border-border p-6 rounded-sm text-sm text-muted-foreground leading-relaxed">
            <p className="font-medium text-foreground mb-2">Independence disclaimer</p>
            <p>
              Third-party names and trademarks referenced for research or comparison belong to their respective owners. Their mention does not imply partnership, endorsement, evaluation, or any formal relationship with CovertCare. CovertCare is independent from any named humanitarian, medical, public-sector, or technology organization unless a formal relationship is explicitly announced by both parties.
            </p>
          </div>

          <div className="text-center pt-8 border-t border-border space-y-4">
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              If you are a researcher, clinical advisor, or security expert who can contribute to a more rigorous evidence base, we want to hear from you.
            </p>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Offer expertise or challenge our evidence
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
