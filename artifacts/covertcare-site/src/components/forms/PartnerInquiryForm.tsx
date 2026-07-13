import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitPartnerInquiry } from "@workspace/api-client-react";
import { PartnerInquiryInputInquiryType, PartnerInquiryInputHasClinicalOwner, PartnerInquiryInputHasIntermediaries, PartnerInquiryInputHasReferralPathway, PartnerInquiryInputCaseVolumeBand, PartnerInquiryInputFundingStatus } from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(1, "Name is required").max(200),
  workEmail: z.string().email("Valid email is required").max(254),
  organization: z.string().min(1, "Organization is required").max(300),
  role: z.string().min(1, "Role is required").max(200),
  organizationType: z.string().min(1, "Organization type is required").max(200),
  country: z.string().min(1, "Country is required").max(100),
  organizationWebsite: z.string().max(500).optional().nullable(),
  inquiryType: z.nativeEnum(PartnerInquiryInputInquiryType),
  workflowChallenge: z.string().min(10, "Please provide more detail").max(2000),
  hasClinicalOwner: z.nativeEnum(PartnerInquiryInputHasClinicalOwner),
  hasIntermediaries: z.nativeEnum(PartnerInquiryInputHasIntermediaries),
  hasReferralPathway: z.nativeEnum(PartnerInquiryInputHasReferralPathway),
  caseVolumeBand: z.nativeEnum(PartnerInquiryInputCaseVolumeBand),
  preferredNextStep: z.string().min(1, "Preferred next step is required").max(500),
  linkedinProfile: z.string().max(500).optional().nullable(),
  publicProgramPage: z.string().max(500).optional().nullable(),
  targetPilotTiming: z.string().max(200).optional().nullable(),
  fundingStatus: z.nativeEnum(PartnerInquiryInputFundingStatus).optional().nullable(),
  howHeardAbout: z.string().max(500).optional().nullable(),
  consentGiven: z.literal(true, { errorMap: () => ({ message: "You must consent to data processing" }) }),
  noSensitiveDataConfirmed: z.literal(true, { errorMap: () => ({ message: "You must confirm no sensitive data is included" }) }),
  honeypot: z.string().max(0, "Bot trap").optional()
});

export function PartnerInquiryForm() {
  const [success, setSuccess] = useState(false);
  const submitMutation = useSubmitPartnerInquiry();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      organization: "",
      role: "",
      organizationType: "",
      country: "",
      organizationWebsite: "",
      workflowChallenge: "",
      preferredNextStep: "",
      linkedinProfile: "",
      publicProgramPage: "",
      targetPilotTiming: "",
      howHeardAbout: "",
      honeypot: "",
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    submitMutation.mutate({
      data: {
        ...values,
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
        <h3 className="text-2xl font-bold font-serif mb-4">Inquiry Received</h3>
        <p className="text-foreground/80 max-w-lg leading-relaxed">
          Your inquiry has been received. We will review host fit, governance capacity, and the proposed problem. Do not send patient or sensitive operational information in follow-up unless a formal, approved process is established.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="text-sm text-muted-foreground border-b border-border/50 pb-6 mb-6">
          <strong>Warning:</strong> Do not submit patient details, symptoms, medical records, injury descriptions, images, incident evidence, precise locations, political information, or urgent requests.
        </div>

        {submitMutation.isError && (
          <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-medium">We could not send the inquiry. Check the highlighted fields and try again. Do not paste sensitive information into another channel.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField control={form.control} name="fullName" render={({ field }) => (
            <FormItem><FormLabel>Full name *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="workEmail" render={({ field }) => (
            <FormItem><FormLabel>Work email *</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="organization" render={({ field }) => (
            <FormItem><FormLabel>Organization *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="role" render={({ field }) => (
            <FormItem><FormLabel>Role *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="organizationType" render={({ field }) => (
            <FormItem><FormLabel>Organization type *</FormLabel><FormControl><Input placeholder="e.g., NGO, Clinic" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="country" render={({ field }) => (
            <FormItem><FormLabel>Country/broad region *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="organizationWebsite" render={({ field }) => (
            <FormItem><FormLabel>Organization website</FormLabel><FormControl><Input {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="inquiryType" render={({ field }) => (
            <FormItem>
              <FormLabel>Inquiry type *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="discovery">Discovery program</SelectItem>
                  <SelectItem value="pilot">Pilot partnership</SelectItem>
                  <SelectItem value="institutional_partnership">Institutional partnership</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="workflowChallenge" render={({ field }) => (
          <FormItem>
            <FormLabel>Current workflow challenge *</FormLabel>
            <FormDescription>Describe the care coordination gap without identifying patients or sensitive locations.</FormDescription>
            <FormControl><Textarea className="min-h-32" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField control={form.control} name="hasClinicalOwner" render={({ field }) => (
            <FormItem>
              <FormLabel>Clinical owner? *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger></FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="in_discussion">In discussion</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="hasIntermediaries" render={({ field }) => (
            <FormItem>
              <FormLabel>Trained intermediaries? *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger></FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="in_discussion">In discussion</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="hasReferralPathway" render={({ field }) => (
            <FormItem>
              <FormLabel>Referral pathway? *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger></FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unclear">Unclear</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="caseVolumeBand" render={({ field }) => (
            <FormItem>
              <FormLabel>Case volume band *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl><SelectTrigger><SelectValue placeholder="Select volume" /></SelectTrigger></FormControl>
                <SelectContent>
                  <SelectItem value="fewer_than_10">Fewer than 10 / month</SelectItem>
                  <SelectItem value="10_to_49">10-49 / month</SelectItem>
                  <SelectItem value="50_to_199">50-199 / month</SelectItem>
                  <SelectItem value="200_plus">200+ / month</SelectItem>
                  <SelectItem value="unknown">Unknown</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="preferredNextStep" render={({ field }) => (
          <FormItem><FormLabel>Preferred next step *</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
        )} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border/50">
          <FormField control={form.control} name="linkedinProfile" render={({ field }) => (
            <FormItem><FormLabel>LinkedIn profile</FormLabel><FormControl><Input {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="publicProgramPage" render={({ field }) => (
            <FormItem><FormLabel>Public program page</FormLabel><FormControl><Input {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="targetPilotTiming" render={({ field }) => (
            <FormItem><FormLabel>Target pilot timing</FormLabel><FormControl><Input placeholder="e.g., Q3 2025" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="fundingStatus" render={({ field }) => (
            <FormItem>
              <FormLabel>Funding status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                <FormControl><SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger></FormControl>
                <SelectContent>
                  <SelectItem value="funded">Funded</SelectItem>
                  <SelectItem value="seeking_sponsor">Seeking sponsor</SelectItem>
                  <SelectItem value="internal_budget_possible">Internal budget possible</SelectItem>
                  <SelectItem value="unknown">Unknown</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="howHeardAbout" render={({ field }) => (
            <FormItem className="md:col-span-2"><FormLabel>How heard about CovertCare</FormLabel><FormControl><Input {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
          )} />
        </div>

        <div className="space-y-4 pt-6 border-t border-border/50">
          <FormField control={form.control} name="consentGiven" render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4">
              <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-medium">I consent to [legal entity] using the information I submit to evaluate and respond to this institutional inquiry. I understand that this public form is not approved for patient, medical, incident, precise-location, political, or confidential operational information.</FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )} />
          <FormField control={form.control} name="noSensitiveDataConfirmed" render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4 bg-muted/30">
              <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-medium">I confirm that I have not included patient, medical, incident, or precise-location information.</FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="honeypot" render={({ field }) => (
          <FormItem className="hidden" aria-hidden="true"><FormControl><Input {...field} tabIndex={-1} autoComplete="off" /></FormControl></FormItem>
        )} />

        <Button type="submit" disabled={submitMutation.isPending} className="w-full sm:w-auto h-12 px-8 text-base">
          {submitMutation.isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending inquiry...</> : "Submit institutional inquiry"}
        </Button>
      </form>
    </Form>
  );
}
