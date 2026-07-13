import { usePageMeta } from "@/hooks/use-page-meta";
import { ShieldAlert, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PartnerInquiryForm } from "@/components/forms/PartnerInquiryForm";
import { AdvisorInterestForm } from "@/components/forms/AdvisorInterestForm";
import { GeneralContactForm } from "@/components/forms/GeneralContactForm";

export default function Contact() {
  usePageMeta("Contact CovertCare | Institutional and Expert Inquiries", "Contact CovertCare about host partnership, pilot sponsorship, accelerator support, research, or qualified expert advisory work.");

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-background pt-16 pb-12 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4 block">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
            Institutional and professional inquiries only
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Use this page to discuss a host partnership, pilot sponsorship, accelerator opportunity, research collaboration, expert advisory role, media inquiry, or general organizational question.
          </p>

          <div className="bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-900/30 p-4 rounded text-destructive dark:text-red-400 text-sm font-medium flex gap-3 items-start">
            <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
            <p>
              <strong>Do not submit patient details, symptoms, medical records, injury images, incident evidence, precise locations, political information, or urgent requests. This is not a medical or emergency channel.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8 p-3 bg-muted rounded-sm border border-border/50">
            <Info className="w-4 h-4 shrink-0" />
            The team reviews inquiries according to relevance and capacity. No emergency, medical, or time-critical response is available through this website.
          </div>

          <Tabs defaultValue="partner" className="w-full">
            <TabsList className="w-full justify-start h-auto flex-wrap bg-transparent border-b border-border rounded-none p-0 mb-8 gap-6">
              <TabsTrigger 
                value="partner" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3 data-[state=active]:shadow-none text-base"
              >
                Host / Design Partner
              </TabsTrigger>
              <TabsTrigger 
                value="advisor"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3 data-[state=active]:shadow-none text-base"
              >
                Expert Advisory
              </TabsTrigger>
              <TabsTrigger 
                value="general"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3 data-[state=active]:shadow-none text-base"
              >
                General Contact
              </TabsTrigger>
            </TabsList>
            
            <div className="bg-card border border-border rounded-lg shadow-sm p-6 sm:p-8">
              <TabsContent value="partner" className="mt-0 outline-none">
                <PartnerInquiryForm />
              </TabsContent>
              <TabsContent value="advisor" className="mt-0 outline-none">
                <AdvisorInterestForm />
              </TabsContent>
              <TabsContent value="general" className="mt-0 outline-none">
                <GeneralContactForm />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
