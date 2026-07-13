import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, ShieldAlert, CircleSlash, ArrowDownCircle, Info, FileWarning } from "lucide-react";
import { useState } from "react";

// Simplified animation wrapper
const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  usePageMeta(
    "CovertCare | Privacy-Preserving Humanitarian Care Coordination",
    "CovertCare is developing a partner-operated, minimal-data care relay for trained field intermediaries and qualified clinicians in high-risk, low-connectivity settings."
  );
  const shouldReduceMotion = useReducedMotion();

  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full pb-24">
      {/* S2 — Hero */}
      <section className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            <FadeUp>
              <div className="max-w-2xl">
                <span className="inline-block text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
                  Privacy-preserving humanitarian care coordination
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-primary leading-[1.1] mb-6">
                  Clinical guidance with less unnecessary exposure
                </h1>
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-8">
                  In some high-risk and disrupted settings, people can reach a trusted community intermediary but not the right clinician. CovertCare is developing a partner-operated, low-bandwidth care relay for structured consultation, qualified clinical review, and referral&mdash;while collecting as little identifying data as the care pathway allows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                    Discuss a safeguarded pilot
                  </Link>
                  <Link href="/how-it-works" className="inline-flex h-12 items-center justify-center rounded-sm border border-input bg-background px-8 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                    See how the model works
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground">
                    For institutions and qualified experts. This website does not accept medical cases or emergency requests.
                  </p>
                  <p className="text-sm font-medium text-primary/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Current stage: concept and pilot design
                  </p>
                </div>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2} className="relative flex justify-center lg:justify-end">
              {/* Care Relay Diagram */}
              <div className="w-full max-w-md border border-border/50 rounded-lg bg-card p-8 shadow-sm">
                <div className="text-xs font-mono text-muted-foreground uppercase mb-6 tracking-wider text-center">
                  Illustrative model
                </div>
                
                <div className="flex flex-col gap-6 relative">
                  {/* Vertical connecting line */}
                  <div className="absolute left-[1.625rem] top-8 bottom-8 w-px bg-border -z-10">
                    {!shouldReduceMotion && (
                      <motion.div 
                        className="w-full bg-primary"
                        animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center border-2 border-background shadow-sm z-10 shrink-0">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Beneficiary</h3>
                      <p className="text-xs text-muted-foreground mt-1">Minimum necessary data</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border-2 border-background shadow-sm z-10 shrink-0">
                      <span className="text-sm font-medium text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Trained Intermediary</h3>
                      <p className="text-xs text-muted-foreground mt-1">Partner-controlled roles</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border-2 border-background shadow-sm z-10 shrink-0">
                      <span className="text-sm font-medium text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Qualified Clinician</h3>
                      <p className="text-xs text-muted-foreground mt-1">Clear disposition</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center border-2 border-background shadow-sm z-10 shrink-0">
                      <span className="text-sm font-medium">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Appropriate Care</h3>
                      <p className="text-xs text-muted-foreground mt-1">Referral follow-up</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Photo strip — field context */}
      <section className="relative overflow-hidden border-b border-border/40" style={{ height: "340px" }}>
        <img
          src="/images/hero-chw.jpg"
          alt="Community health worker conducting a training session in Mogadishu, Somalia"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <p className="text-white/90 text-xl sm:text-2xl font-serif font-semibold max-w-md leading-snug drop-shadow">
              Where disrupted care systems meet trusted community relationships
            </p>
          </div>
        </div>
        <p className="absolute bottom-3 right-4 text-white/50 text-xs">Photo: International Medical Corps / Somalia</p>
      </section>

      {/* S3 — Context Shift */}
      <section className="py-20 lg:py-28 bg-secondary/30 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeUp>
            <div className="max-w-3xl mb-16">
              <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3 block">
                The access gap
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A phone connection is not the same as a safe care pathway</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Attacks on health care, forced displacement, damaged systems, low connectivity, and digital-health privacy risks can disrupt ordinary access to care. In these settings, a trusted intermediary may become the bridge between a person and a clinician&mdash;but the process often depends on personal contacts and fragmented messages.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Care disruption", desc: "Facilities and health workers may be inaccessible, overloaded, attacked, or constrained in specific conflicts and crises." },
              { title: "Informal coordination", desc: "Requests may pass through personal calls and group chats with no consistent intake, response status, or referral closure." },
              { title: "Sensitive information", desc: "Names, exact locations, images, and contextual details may be shared more broadly than the clinical decision requires." },
              { title: "Clinical uncertainty", desc: "A clinician may receive too little useful information, too much unrelated information, or no reliable way to follow up." }
            ].map((card, i) => (
              <FadeUp key={i} delay={i * 0.1} className="bg-card border border-border/50 p-6 rounded-sm shadow-sm">
                <h3 className="font-semibold text-lg mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <div className="bg-muted p-6 rounded-sm border border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex gap-4">
                <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
                  <strong>Evidence context:</strong> WHO, UNHCR, ICRC, and WHO/Europe document attacks on health care, forced displacement, humanitarian data-protection responsibilities, and digital-health cybersecurity risk. These sources establish context; they do not prove CovertCare's demand or impact.
                </p>
              </div>
              <Link href="/safety-and-trust#evidence" className="shrink-0 text-sm font-medium text-primary hover:underline underline-offset-4 flex items-center gap-1">
                Review evidence <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* S4 — The Problem */}
      <section className="py-20 lg:py-28 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeUp>
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3 block">
                The current workaround
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure messaging alone does not create a clinical workflow</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Encryption can protect message content, but a safe care pathway also needs minimum clinical information, verified roles, appropriate routing, clear responsibility, referral, and follow-up. Without those layers, the burden falls on individual relationships and improvised coordination.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp className="order-2 lg:order-1">
              <div className="bg-card border border-border rounded-sm p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-6 pb-4 border-b border-border">Current fragmented workflow</h3>
                <ol className="space-y-6 relative">
                  <div className="absolute left-3.5 top-2 bottom-2 w-px bg-border -z-10"></div>
                  {[
                    "A concern reaches a trusted intermediary.",
                    "The intermediary searches personal networks.",
                    "The same information is repeated across channels.",
                    "A clinician may receive incomplete or excessive detail.",
                    "The response may be delayed or ambiguous.",
                    "Referral completion remains unknown."
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold border border-background shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-sm text-foreground/90 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeUp>

            <div className="order-1 lg:order-2 space-y-6">
              <FadeUp delay={0.1}>
                <h3 className="font-serif text-2xl font-bold mb-8">Consequences of ad-hoc networks</h3>
              </FadeUp>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Delay", "Over-disclosure", "Incomplete assessment", "Unclear accountability", "No closure"].map((cons, i) => (
                  <FadeUp key={i} delay={0.1 + i * 0.1}>
                    <div className="flex items-center gap-3 p-4 bg-red-50/50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-sm text-destructive dark:text-red-400 font-medium text-sm">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      {cons}
                    </div>
                  </FadeUp>
                ))}
              </div>
              <FadeUp delay={0.6} className="mt-8">
                <Link href="/how-it-works" className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4">
                  See the proposed workflow <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* S5 — Key Insight */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <FadeUp className="lg:col-span-6">
              <span className="text-sm font-semibold tracking-wider text-primary-foreground/70 uppercase mb-3 block">
                The design principle
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Privacy is a care-pathway decision&mdash;not a promise of invisibility</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
                CovertCare will not claim "no trace," "no metadata," or perfect anonymity. Devices, networks, counterparties, software dependencies, and human behaviour can create residual risk. The proposed model begins with a more defensible commitment: collect less, define responsibility, use established security components, and make limitations visible.
              </p>
              <Link href="/safety-and-trust" className="inline-flex h-11 items-center justify-center rounded-sm bg-white text-primary px-6 text-sm font-medium shadow hover:bg-white/90 transition-colors">
                Read our safety and trust principles
              </Link>
            </FadeUp>

            <FadeUp className="lg:col-span-6 relative flex justify-center" delay={0.2}>
              {/* Layered rings visual */}
              <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-primary-foreground/10 rounded-full flex items-center justify-center">
                  <div className="absolute inset-4 border-2 border-primary-foreground/20 rounded-full flex items-center justify-center">
                    <div className="absolute inset-6 border-2 border-primary-foreground/30 rounded-full flex items-center justify-center bg-primary-foreground/5 backdrop-blur-sm">
                       <div className="absolute inset-8 border border-primary-foreground/40 rounded-full flex items-center justify-center bg-primary-foreground/10">
                          <ShieldAlert className="w-12 h-12 text-white/80" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 border-t border-primary-foreground/20 pt-16">
            {[
              { title: "Minimum necessary data", desc: "Do not request a name, ID, or precise location unless the approved pathway truly requires it." },
              { title: "Known roles, limited disclosure", desc: "The host verifies roles and grants only the access required for each task." },
              { title: "Clear clinical disposition", desc: "Each case ends with an approved next step, an escalation, or an explicit out-of-scope statement." },
              { title: "Threat-modelled deployment", desc: "Every implementation must define adversaries, assets, and residual risk." }
            ].map((principle, i) => (
              <FadeUp key={i} delay={0.3 + i * 0.1}>
                <h3 className="font-semibold text-white mb-2">{principle.title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{principle.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* S6 — Solution Overview */}
      <section className="py-20 lg:py-28 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeUp>
            <div className="max-w-3xl mb-16">
              <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3 block">
                The proposed solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A partner-operated care relay from trusted intermediary to qualified clinician</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                A legitimate health or humanitarian organization would control enrollment, clinical scope, referral pathways, record requirements, and incident response. CovertCare would provide the minimal-data intake, low-bandwidth routing, disposition, follow-up, training, and implementation layer.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-12">
              <FadeUp delay={0.1}>
                <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" /> What it includes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Partner-controlled enrollment",
                    "Structured minimum-data intake",
                    "Low-bandwidth asynchronous submission",
                    "Manual or rules-assisted routing",
                    "Qualified clinical review",
                    "Governed disposition",
                    "Referral and follow-up",
                    "Configurable retention",
                    "Quality and incident review"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp delay={0.2}>
                <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                  <CircleSlash className="w-5 h-5 text-destructive" /> What it excludes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Public anonymous doctor access",
                    "Emergency-response guarantees",
                    "AI diagnosis",
                    "Ungoverned prescribing",
                    "Public patient accounts",
                    "Covert logistics",
                    "Perfect anonymity claims"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp delay={0.3} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/solution" className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                  Explore the solution
                </Link>
                <Link href="/safety-and-trust" className="inline-flex h-11 items-center justify-center rounded-sm border border-input bg-background px-6 text-sm font-medium shadow-sm hover:bg-accent transition-colors">
                  Review the boundaries
                </Link>
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <FadeUp delay={0.4} className="bg-muted rounded-lg p-6 sm:p-8 border border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-amber-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1 font-mono z-20 shadow-sm">
                  Conceptual interfaces — not a live product
                </div>
                
                <div className="flex flex-col gap-6 relative z-10">
                  {/* Card 1 */}
                  <div className="bg-background border border-border rounded shadow-sm overflow-hidden">
                    <div className="bg-secondary px-4 py-2 border-b border-border flex justify-between items-center">
                      <span className="text-xs font-mono font-medium text-muted-foreground">Illustrative pilot intake</span>
                      <span className="text-xs font-mono font-bold text-primary">CC-014</span>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-5 border-b border-border/50 pb-5">
                        <div className="flex flex-col"><span className="text-[10px] text-muted-foreground uppercase">Age band</span><span className="text-sm font-medium">25–34</span></div>
                        <div className="flex flex-col"><span className="text-[10px] text-muted-foreground uppercase">Symptom</span><span className="text-sm font-medium">Respiratory</span></div>
                        <div className="flex flex-col"><span className="text-[10px] text-muted-foreground uppercase">Duration</span><span className="text-sm font-medium">5 days</span></div>
                        <div className="flex flex-col"><span className="text-[10px] text-muted-foreground uppercase">Red flags</span><span className="text-sm font-medium">None reported</span></div>
                        <div className="flex flex-col col-span-2"><span className="text-[10px] text-muted-foreground uppercase">Constraint</span><span className="text-sm font-medium">Travel currently difficult</span></div>
                        <div className="flex flex-col col-span-2"><span className="text-[10px] text-muted-foreground uppercase">Consent</span><span className="text-sm font-medium text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Recorded</span></div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {["Full name", "Government ID", "Precise address", "GPS"].map(field => (
                          <div key={field} className="px-2 py-1 bg-muted/50 rounded-sm text-xs text-muted-foreground line-through flex items-center gap-1 border border-border/50">
                            {field} <span className="text-destructive no-underline">✗</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-background border border-border rounded shadow-sm overflow-hidden ml-0 sm:ml-8">
                    <div className="bg-primary/5 px-4 py-2 border-b border-border flex justify-between items-center">
                      <span className="text-xs font-mono font-medium text-primary">Disposition response</span>
                      <span className="text-xs font-mono font-bold text-primary">CC-014</span>
                    </div>
                    <div className="p-4 sm:p-5 space-y-4">
                      <div>
                        <span className="text-[10px] text-muted-foreground uppercase block mb-1">Recommended Disposition</span>
                        <div className="text-sm font-medium p-3 bg-primary/5 border border-primary/20 rounded-sm text-primary">
                          Routine in-person assessment within an approved timeframe
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col"><span className="text-[10px] text-muted-foreground uppercase">Referral type</span><span className="text-sm font-medium">Community clinic</span></div>
                        <div className="flex flex-col"><span className="text-[10px] text-muted-foreground uppercase">Follow-up</span><span className="text-sm font-medium">Required</span></div>
                      </div>
                      <div className="bg-muted p-2 rounded border border-border/50 text-xs text-muted-foreground flex items-start gap-2">
                        <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        Service limitation: No diagnosis provided through this illustrative workflow.
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="bg-background border border-border rounded shadow-sm overflow-hidden ml-0 sm:ml-16">
                    <div className="bg-secondary px-4 py-2 border-b border-border">
                      <span className="text-xs font-mono font-medium text-muted-foreground">Illustrative follow-up</span>
                    </div>
                    <div className="p-4 sm:p-5 space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Referral option shared
                      </div>
                      <div>
                        <span className="text-[10px] text-muted-foreground uppercase block mb-2">Appointment status</span>
                        <div className="flex gap-2">
                          {["Unknown", "Planned", "Completed", "Unable"].map(status => (
                            <div key={status} className={`text-xs px-2 py-1 border rounded-sm ${status === 'Unknown' ? 'bg-primary text-white border-primary' : 'bg-background text-muted-foreground border-border'}`}>
                              {status}
                            </div>
                          ))}
                        </div>
                      </div>
                      <button disabled className="w-full py-2 bg-muted text-muted-foreground text-sm font-medium rounded-sm border border-border cursor-not-allowed opacity-50">
                        Close case
                      </button>
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mt-6 text-center max-w-lg mx-auto">
                  Disclaimer: These interfaces are explanatory prototypes. They do not process real cases, connect to clinicians, provide medical advice, or demonstrate a deployed product.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* S7 — How It Works */}
      <section className="py-20 lg:py-28 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <FadeUp>
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3 block">
              Illustrative pilot workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Minimum data in. Clearer next step out.</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16 relative">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-border -z-10"></div>
            
            {[
              { title: "Partner control", desc: "Host approves trained intermediaries and qualified clinicians under its governance." },
              { title: "Minimal case", desc: "Intermediary obtains consent and submits only approved age band, symptoms, and constraints." },
              { title: "Appropriate routing", desc: "Coordinator or rule sends the case to a suitable clinician during a defined window." },
              { title: "Governed disposition", desc: "Clinician requests detail, recommends assessment, escalates, or marks out of scope." },
              { title: "Referral & closure", desc: "Intermediary communicates the next step and records if referral was completed." }
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.1} className="flex flex-col items-center text-center relative group">
                <div className="w-12 h-12 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold text-lg mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors relative z-10">
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.5} className="flex flex-col items-center gap-4">
            <Link href="/how-it-works" className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              View the complete workflow
            </Link>
            <p className="text-xs text-muted-foreground">This workflow is proposed and subject to clinical, legal, ethical, and security review.</p>
          </FadeUp>
        </div>
      </section>

      {/* S8 — Illustrative Example */}
      <section className="py-20 lg:py-28 bg-background border-y border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <FadeUp className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3 block">
              A hypothetical scenario
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">From a fragmented request to a governed next step</h2>
            <div className="inline-block mt-4 text-xs font-mono bg-muted px-3 py-1 rounded text-muted-foreground border border-border">
              Illustrative scenario — not a patient result
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <FadeUp delay={0.1}>
              <div className="p-8 rounded-lg bg-card border border-border/60 shadow-sm h-full flex flex-col">
                <h3 className="font-serif text-xl font-bold mb-4 text-muted-foreground flex items-center gap-2">
                  <ArrowDownCircle className="w-5 h-5" /> Current Fragmented Flow
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6 flex-1">
                  A community health worker receives a request from an adult with several days of worsening symptoms and difficulty reaching a clinic. The worker asks personal contacts, repeats the story across messages, waits for replies, and receives no consistent referral status.
                </p>
                <div className="pt-6 border-t border-border/50 text-sm text-muted-foreground">
                  <strong>Outcome:</strong> Unpredictable latency, multiple copies of patient data, unknown closure.
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="p-8 rounded-lg bg-primary/5 border border-primary/20 shadow-sm h-full flex flex-col">
                <h3 className="font-serif text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Proposed Pilot Flow
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6 flex-1">
                  The worker obtains consent, creates a case code, completes a minimum-data form, receives a qualified disposition during staffed hours, shares the recommended next step, and records whether a referral option was used.
                </p>
                <div className="pt-6 border-t border-primary/10 text-sm text-foreground/80">
                  <strong className="text-primary block mb-2">What would be measured:</strong>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
                    <li>• Time to qualified response</li>
                    <li>• Number of handoffs</li>
                    <li>• Identifying fields collected</li>
                    <li>• Case completeness</li>
                    <li>• Referral closure</li>
                    <li>• Clinician burden</li>
                    <li className="col-span-2">• Safety and privacy events</li>
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.4} className="mt-12 text-center">
            <Link href="/pilot#measurement" className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4">
              See what the pilot will measure <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* S9 — Stakeholders */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeUp className="mb-16">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3 block">
              Designed for a care ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold max-w-3xl">The beneficiary, intermediary, clinician, host, and funder are not the same person</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { role: "Beneficiary", desc: "An adult who may need non-emergency clinical guidance or referral but should not have to disclose more personal information than necessary." },
              { role: "Trained intermediary", desc: "A community health worker, outreach nurse, humanitarian field worker, or refugee-led organization staff member who already has a legitimate relationship with the person." },
              { role: "Qualified clinician", desc: "A professional operating under the host's approved scope, credentialing, documentation, and escalation process." },
              { role: "Institutional host", desc: "A humanitarian, refugee-health, community-health, or clinical organization that owns governance and referral." },
              { role: "Funder or sponsor", desc: "A foundation, CSR program, public funder, university, accelerator, or institutional program that supports validation without receiving beneficiary data." }
            ].map((stakeholder, i) => (
              <FadeUp key={i} delay={i * 0.1} className="bg-card border border-border p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif font-bold text-lg mb-3 text-primary">{stakeholder.role}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stakeholder.desc}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.6} className="mt-12 text-center sm:text-left">
            <Link href="/pilot" className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Check whether your organization fits the pilot
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* S11 — Pilot Offer */}
      <section className="py-20 lg:py-28 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <FadeUp className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3 block">
              A bounded first test
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">One host. One geography. One clinical scope.</h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              The first engagement is not a public launch. It is an eight-week discovery, simulation, and pilot-readiness program with one appropriate host organization.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <FadeUp delay={0.1}>
              <h3 className="font-serif text-xl font-bold mb-6 border-b border-border pb-4">Proposed Participants</h3>
              <ul className="space-y-3">
                {[
                  "One institutional host",
                  "One clinical governance lead",
                  "One privacy or security focal point",
                  "Three to five trained intermediaries",
                  "Five to eight qualified clinicians",
                  "One coordinator",
                  "One defined referral pathway"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="text-primary font-bold">›</span> {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h3 className="font-serif text-xl font-bold mb-6 border-b border-border pb-4">Initial Exclusions</h3>
              <ul className="space-y-3">
                {[
                  "Emergency trauma",
                  "Prescribing",
                  "Minors",
                  "High-risk sensitive cases",
                  "Public self-registration",
                  "AI diagnosis"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-destructive font-bold">✗</span> {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="bg-card border border-border rounded-lg p-6 sm:p-8 mb-12 shadow-sm">
            <h3 className="font-serif text-xl font-bold mb-6 text-center">8-Week Timeline</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { w: 1, title: "Workflow discovery" },
                { w: 2, title: "Scope & threat model" },
                { w: 3, title: "Prototype" },
                { w: 4, title: "Technical foundation" },
                { w: 5, title: "Simulation" },
                { w: 6, title: "Training & revision" },
                { w: 7, title: "Pilot-readiness" },
                { w: 8, title: "Evaluation & decision" }
              ].map((week) => (
                <button
                  key={week.w}
                  onClick={() => setActiveWeek(activeWeek === week.w ? null : week.w)}
                  className={`p-4 rounded border text-left transition-all ${
                    activeWeek === week.w 
                      ? "bg-primary border-primary text-primary-foreground shadow-md" 
                      : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  <div className={`text-xs font-mono font-bold mb-2 ${activeWeek === week.w ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    WEEK {week.w}
                  </div>
                  <div className="text-sm font-medium leading-tight">
                    {week.title}
                  </div>
                </button>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.4} className="flex flex-col items-center gap-4 text-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Discuss a safeguarded pilot
              </Link>
              <Link href="/pilot" className="inline-flex h-12 items-center justify-center rounded-sm border border-input bg-background px-8 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                Read qualification criteria
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-2 max-w-md">
              Do not submit patient, medical, urgent, incident, or precise-location information.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* S12 — Evidence & Measurement */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeUp className="mb-16 max-w-3xl">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3 block">
              What must be proven
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The accelerator milestone is evidence—not scale</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              CovertCare does not yet have verified traction or impact. The proposed pilot is designed to replace assumptions with measurable evidence and to stop or pivot when the model is unsafe, unnecessary, or unsustainable.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { m: "Timeliness", desc: "Median time to qualified response during staffed windows" },
              { m: "Clinical completeness", desc: "Cases receiving a clear disposition" },
              { m: "Data minimization", desc: "Identifying fields collected compared with existing workflow" },
              { m: "Referral closure", desc: "Cases with a known next-step status" },
              { m: "Safety", desc: "Clinical and privacy incidents" },
              { m: "Provider burden", desc: "Time required per completed case" },
              { m: "Adoption", desc: "Repeat use by trained participants" },
              { m: "Sustainability", desc: "Cost per completed case and continuation decision" }
            ].map((metric, i) => (
              <FadeUp key={i} delay={i * 0.05} className="bg-card p-6 border border-border shadow-sm rounded-sm">
                <div className="text-[10px] font-bold font-mono tracking-widest text-primary/70 uppercase mb-2">Target</div>
                <h3 className="font-semibold text-lg mb-2">{metric.m}</h3>
                <p className="text-sm text-muted-foreground">{metric.desc}</p>
              </FadeUp>
            ))}
          </div>
          
          <FadeUp delay={0.5} className="bg-muted p-6 rounded-sm border border-border/50 max-w-4xl">
            <p className="text-sm text-foreground/80 leading-relaxed font-medium">
              <strong>Decision:</strong> A negative pilot result is useful. CovertCare may become a protocol, assessment service, integration layer, or research program rather than a standalone product.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* S13 — Safety and Trust */}
      <section className="py-20 lg:py-28 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <FadeUp className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3 block">
              No absolute security claims
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The project is designed around explicit limits and stop conditions</h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              High-risk health communication cannot be made risk-free. A live pilot would require context-specific threat modelling, clinical responsibility, informed consent, appropriate records, legal review, referral, security testing, incident response, and a clear exit plan.
            </p>
          </FadeUp>

          <div className="bg-card border border-border rounded-lg shadow-sm mb-12">
            <div className="p-6 sm:p-8 border-b border-border">
              <h3 className="font-serif text-2xl font-bold mb-6">Core Trust Commitments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "No patient-data monetization",
                  "No advertising",
                  "No secondary research use by default",
                  "No custom cryptography in the first pilot",
                  "No public operational map",
                  "No claim of perfect anonymity",
                  "No deployment without host governance",
                  "No live use before simulation",
                  "No product expansion outrunning clinical evidence",
                  "Independent review before higher-risk deployment"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm text-foreground/80 items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 sm:p-8 bg-muted/30">
              <h3 className="font-serif text-xl font-bold mb-6">Safety Gates Progression</h3>
              <div className="hidden md:flex justify-between items-center relative py-4">
                <div className="absolute left-0 right-0 h-1 bg-border top-1/2 -translate-y-1/2 z-0"></div>
                {["Problem evidence", "Clinical governance", "Threat model", "Legal review", "Simulation", "Limited use", "Evaluation", "Decision"].map((gate, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center gap-2 group">
                    <div className="w-4 h-4 rounded-full bg-background border-2 border-primary/50 group-hover:border-primary transition-colors"></div>
                    <span className="text-[10px] font-mono font-medium text-muted-foreground w-16 text-center leading-tight group-hover:text-primary transition-colors">{gate}</span>
                  </div>
                ))}
              </div>
              <div className="md:hidden">
                <ol className="space-y-4 relative border-l border-border ml-2 pl-4">
                  {["Problem evidence", "Clinical governance", "Threat model", "Legal and privacy review", "Simulation", "Limited supervised use", "Evaluation", "Continuation decision"].map((gate, i) => (
                    <li key={i} className="text-sm font-medium text-muted-foreground relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-background border border-primary/50"></div>
                      {gate}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <FadeUp delay={0.2} className="text-center">
            <Link href="/safety-and-trust" className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Read the full safety and trust model
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* S15 — FAQ */}
      <section className="py-20 lg:py-28 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Frequently Asked Questions</h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-card border border-border rounded-lg shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Does CovertCare provide medical help today?",
                    a: "No. CovertCare is in concept and pilot-design stage. This website does not accept medical cases or connect visitors with clinicians."
                  },
                  {
                    q: "Is CovertCare an emergency service?",
                    a: "No. It does not provide emergency response, diagnosis, treatment, prescribing, or guaranteed availability."
                  },
                  {
                    q: "Is the proposed system anonymous?",
                    a: "No system can guarantee anonymity. The proposed model aims to minimize unnecessary identifying data and reduce specific risks under a documented threat model."
                  },
                  {
                    q: "Why not use Signal?",
                    a: "Signal provides mature end-to-end encrypted messaging and deliberately reduces metadata. CovertCare's proposed value is the clinical and institutional workflow around communication: minimum-data intake, approved roles, routing, disposition, referral, and follow-up."
                  },
                  {
                    q: "Does CovertCare use zero-knowledge proofs?",
                    a: "Not in the first pilot. Privacy-preserving credentials may later help prove a clinician role or authorization without revealing unnecessary attributes. They cannot independently prove that a person has a real-world medical condition."
                  },
                  {
                    q: "Who can become a pilot partner?",
                    a: "A legitimate health or humanitarian organization with a real care-coordination problem, a clinical owner, trained intermediaries, a referral pathway, and the ability to participate in legal, safety, and security review."
                  },
                  {
                    q: "Can an individual volunteer doctor join?",
                    a: "The public website may collect advisor interest, but it must not enroll clinicians into a care network. Clinical participation would occur only through an approved host and credentialing process."
                  },
                  {
                    q: "Will the code be open source?",
                    a: "The recommended model includes an open-source core, subject to governance, security, operational-safety, licensing, and maintenance decisions. Do not describe code as open source until a real repository and license exist."
                  },
                  {
                    q: "What information can I submit through the website?",
                    a: "Only non-sensitive institutional or professional inquiry information. Do not submit patient details, symptoms, medical records, injury images, incident evidence, precise locations, political information, or urgent requests."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="px-6 border-b border-border/50 last:border-0">
                    <AccordionTrigger className="text-left font-semibold text-base py-5 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* S16 — Final CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeUp>
            <span className="text-sm font-semibold tracking-wider text-primary-foreground/70 uppercase mb-4 block">
              Build the evidence before building the network
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8 text-white leading-tight">
              Help test whether a minimal-data care relay can be safe, useful, and institutionally sustainable
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-10 max-w-2xl mx-auto">
              We are seeking one suitable host partner and qualified clinical, humanitarian, privacy, security, legal, and evaluation advisors for a bounded discovery and pilot-design program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-sm bg-white px-8 text-base font-medium text-primary shadow hover:bg-white/90 transition-colors">
                Discuss a safeguarded pilot
              </Link>
              <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-sm border-2 border-primary-foreground/20 bg-transparent px-8 text-base font-medium text-white shadow-sm hover:bg-primary-foreground/10 transition-colors">
                Join the advisory circle
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/60 max-w-md mx-auto flex items-center justify-center gap-2">
              <FileWarning className="w-4 h-4 shrink-0" /> Institutional and professional inquiries only. This is not a medical or emergency contact channel.
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
