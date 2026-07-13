import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitAdvisorInterest } from "@workspace/api-client-react";
import { AdvisorInterestInputInterestType } from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(1, "Name is required").max(200),
  professionalEmail: z.string().email("Valid email is required").max(254),
  currentRole: z.string().min(1, "Role is required").max(200),
  organization: z.string().min(1, "Organization is required").max(300),
  expertiseArea: z.string().min(1, "Expertise is required").max(200),
  country: z.string().min(1, "Country is required").max(100),
  experienceSummary: z.string().min(10, "Summary required").max(2000),
  professionalProfile: z.string().max(500).optional().nullable(),
  availabilityBand: z.string().min(1, "Availability required").max(200),
  interestType: z.nativeEnum(AdvisorInterestInputInterestType),
  conflictDisclosure: z.string().max(1000).optional(),
  consentGiven: z.literal(true, { errorMap: () => ({ message: "Consent required" }) }),
  noSensitiveDataConfirmed: z.literal(true, { errorMap: () => ({ message: "Confirmation required" }) }),
  honeypot: z.string().max(0).optional()
});

export function AdvisorInterestForm() {
  const [success, setSuccess] = useState(false);
  const submitMutation = useSubmitAdvisorInterest();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "", professionalEmail: "", currentRole: "", organization: "", 
      expertiseArea: "", country: "", experienceSummary: "", professionalProfile: "", 
      availabilityBand: "", conflictDisclosure: "", honeypot: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    submitMutation.mutate({
      data: {
        ...values,
        conflictDisclosure: values.conflictDisclosure || "",
        submittedAt: new Date().toISOString()
      }
    }, {
      onSuccess: () => setSuccess(true)
    });
  };

  if (success) {
    return (
      <div className="text-center py-12 flex flex-col items-center" aria-live="polite">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-serif mb-4">Interest Registered</h3>
        <p className="text-foreground/80 max-w-lg leading-relaxed">
          Thank you for offering your expertise. The team will review whether there is a defined advisory need and an appropriate governance structure.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="text-sm text-muted-foreground border-b border-border/50 pb-6 mb-6">
          <strong>Note:</strong> Submission does not create an advisory, clinical, employment, or volunteer relationship. Do not submit credentials, identity documents, patient information, or confidential case material through this form.
        </div>

        {submitMutation.isError && (
          <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-medium">Failed to submit. Please check fields.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField control={form.control} name="fullName" render={({ field }) => (
            <FormItem><FormLabel>Full name *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="professionalEmail" render={({ field }) => (
            <FormItem><FormLabel>Professional email *</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="currentRole" render={({ field }) => (
            <FormItem><FormLabel>Current role *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="organization" render={({ field }) => (
            <FormItem><FormLabel>Organization *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="country" render={({ field }) => (
            <FormItem><FormLabel>Country *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="expertiseArea" render={({ field }) => (
            <FormItem>
              <FormLabel>Expertise area *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger></FormControl>
                <SelectContent>
                  {["Clinical governance", "Humanitarian medicine", "Telemedicine", "Community health", "Safeguarding", "Medical ethics", "Privacy law", "Telemedicine law", "Mobile security", "Applied cryptography", "Threat modelling", "Secure software development", "Humanitarian data protection", "Program evaluation", "Health economics", "Grant strategy", "Affected-community representation"].map(opt => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="experienceSummary" render={({ field }) => (
          <FormItem><FormLabel>Short relevant-experience summary *</FormLabel><FormControl><Textarea className="min-h-32" {...field} /></FormControl><FormMessage /></FormItem>
        )} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField control={form.control} name="availabilityBand" render={({ field }) => (
            <FormItem><FormLabel>Availability band *</FormLabel><FormControl><Input placeholder="e.g., 2 hrs/week" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="interestType" render={({ field }) => (
            <FormItem>
              <FormLabel>Interest type *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger></FormControl>
                <SelectContent>
                  <SelectItem value="pro_bono_advisory">Pro bono advisory</SelectItem>
                  <SelectItem value="paid_advisory">Paid advisory</SelectItem>
                  <SelectItem value="research_collaboration">Research collaboration</SelectItem>
                  <SelectItem value="institutional_introduction">Institutional introduction</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
        </div>
        
        <FormField control={form.control} name="professionalProfile" render={({ field }) => (
          <FormItem><FormLabel>Professional profile/page (Optional)</FormLabel><FormControl><Input {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
        )} />

        <FormField control={form.control} name="conflictDisclosure" render={({ field }) => (
          <FormItem><FormLabel>Conflict of interest disclosure (Optional)</FormLabel><FormControl><Textarea {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
        )} />

        <div className="space-y-4 pt-6 border-t border-border/50">
          <FormField control={form.control} name="consentGiven" render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="space-y-1 leading-none"><FormLabel className="text-sm font-medium">I consent to use of this data to evaluate advisory interest.</FormLabel><FormMessage /></div></FormItem>
          )} />
          <FormField control={form.control} name="noSensitiveDataConfirmed" render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4 bg-muted/30"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="space-y-1 leading-none"><FormLabel className="text-sm font-medium">I confirm I have not included sensitive, patient, or confidential case material.</FormLabel><FormMessage /></div></FormItem>
          )} />
        </div>
        <FormField control={form.control} name="honeypot" render={({ field }) => (
          <FormItem className="hidden" aria-hidden="true"><FormControl><Input {...field} tabIndex={-1} autoComplete="off" /></FormControl></FormItem>
        )} />

        <Button type="submit" disabled={submitMutation.isPending} className="w-full sm:w-auto h-12 px-8">
          {submitMutation.isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit advisory interest"}
        </Button>
      </form>
    </Form>
  );
}
