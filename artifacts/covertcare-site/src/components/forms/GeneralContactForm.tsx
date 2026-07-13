import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitGeneralContact } from "@workspace/api-client-react";
import { GeneralContactInputInquiryType } from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  workEmail: z.string().email("Valid email is required").max(254),
  organization: z.string().max(300).optional().nullable(),
  inquiryType: z.nativeEnum(GeneralContactInputInquiryType),
  message: z.string().min(10, "Message is too short").max(2000),
  consentGiven: z.literal(true, { errorMap: () => ({ message: "Consent required" }) }),
  noSensitiveDataConfirmed: z.literal(true, { errorMap: () => ({ message: "Confirmation required" }) }),
  honeypot: z.string().max(0).optional()
});

export function GeneralContactForm() {
  const [success, setSuccess] = useState(false);
  const submitMutation = useSubmitGeneralContact();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", workEmail: "", organization: "", message: "", honeypot: ""
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
        <h3 className="text-2xl font-bold font-serif mb-4">Message Sent</h3>
        <p className="text-foreground/80 max-w-lg leading-relaxed">
          Thank you for reaching out. The team will review your inquiry and respond if appropriate.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {submitMutation.isError && (
          <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded flex gap-3 items-start mb-6">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-medium">Failed to send message. Please check the form and try again.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem><FormLabel>Name *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="workEmail" render={({ field }) => (
            <FormItem><FormLabel>Work email *</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="organization" render={({ field }) => (
            <FormItem><FormLabel>Organization (Optional)</FormLabel><FormControl><Input {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="inquiryType" render={({ field }) => (
            <FormItem>
              <FormLabel>Inquiry type *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger></FormControl>
                <SelectContent>
                  {Object.entries(GeneralContactInputInquiryType).map(([k, v]) => (
                    <SelectItem key={v} value={v}>{k.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem><FormLabel>Message *</FormLabel><FormControl><Textarea className="min-h-32" {...field} /></FormControl><FormMessage /></FormItem>
        )} />

        <div className="space-y-4 pt-6 border-t border-border/50">
          <FormField control={form.control} name="consentGiven" render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="space-y-1 leading-none"><FormLabel className="text-sm font-medium">I consent to use of this data to evaluate and respond to my inquiry.</FormLabel><FormMessage /></div></FormItem>
          )} />
          <FormField control={form.control} name="noSensitiveDataConfirmed" render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4 bg-muted/30"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="space-y-1 leading-none"><FormLabel className="text-sm font-medium">I confirm I have not included sensitive, patient, or confidential information.</FormLabel><FormMessage /></div></FormItem>
          )} />
        </div>
        
        <FormField control={form.control} name="honeypot" render={({ field }) => (
          <FormItem className="hidden" aria-hidden="true"><FormControl><Input {...field} tabIndex={-1} autoComplete="off" /></FormControl></FormItem>
        )} />

        <Button type="submit" disabled={submitMutation.isPending} className="w-full sm:w-auto h-12 px-8">
          {submitMutation.isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Send message"}
        </Button>
      </form>
    </Form>
  );
}
