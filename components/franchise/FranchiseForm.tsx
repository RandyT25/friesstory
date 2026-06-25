"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { franchiseSchema, FranchiseFormValues } from "@/lib/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const budgetOptions = [
  { value: "under-30k", label: "Under USD 30,000" },
  { value: "30k-60k", label: "USD 30,000 – 60,000" },
  { value: "60k-100k", label: "USD 60,000 – 100,000" },
  { value: "100k-200k", label: "USD 100,000 – 200,000" },
  { value: "200k-plus", label: "USD 200,000+" },
  { value: "to-discuss", label: "Prefer to discuss" },
];

export function FranchiseForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FranchiseFormValues>({
    resolver: zodResolver(franchiseSchema),
    defaultValues: { name: "", email: "", phone: "", country: "", city: "", investmentBudget: "to-discuss", message: "" },
  });

  async function onSubmit(values: FranchiseFormValues) {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Franchise inquiry:", values);
    setSubmitted(true);
    toast.success("Application received. We'll be in touch within 48 hours.");
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <CheckCircle className="w-14 h-14 text-gold" />
        <h3 className="font-display text-2xl font-bold text-cream">Application Received.</h3>
        <p className="text-cream/60 max-w-sm">
          We review every application personally. Expect a reply within 48 business hours from our partnerships team.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cream/70">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} className="bg-charcoal border-white/15 text-cream placeholder:text-cream/30 focus:border-gold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cream/70">Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} className="bg-charcoal border-white/15 text-cream placeholder:text-cream/30 focus:border-gold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cream/70">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+62 xxx xxxx xxxx" {...field} className="bg-charcoal border-white/15 text-cream placeholder:text-cream/30 focus:border-gold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cream/70">City</FormLabel>
                <FormControl>
                  <Input placeholder="Your target city" {...field} className="bg-charcoal border-white/15 text-cream placeholder:text-cream/30 focus:border-gold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cream/70">Country</FormLabel>
                <FormControl>
                  <Input placeholder="Indonesia, Singapore, Australia…" {...field} className="bg-charcoal border-white/15 text-cream placeholder:text-cream/30 focus:border-gold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="investmentBudget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cream/70">Investment Budget</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-charcoal border-white/15 text-cream focus:border-gold">
                      <SelectValue placeholder="Select a range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-charcoal-mid border-white/15">
                    {budgetOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value} className="text-cream focus:bg-white/10 focus:text-cream">
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-cream/70">Tell Us About Yourself (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Background, why you're interested, questions you have…"
                  rows={4}
                  {...field}
                  className="bg-charcoal border-white/15 text-cream placeholder:text-cream/30 focus:border-gold resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Honeypot */}
        <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full py-4 bg-gold hover:bg-gold-light text-charcoal font-bold tracking-widest uppercase text-sm rounded inline-flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 hover:shadow-lg hover:shadow-gold/20"
        >
          {form.formState.isSubmitting ? "Submitting…" : (
            <>Submit Application <ArrowRight className="w-4 h-4" /></>
          )}
        </button>

        <p className="text-cream/30 text-xs text-center">
          We review every application personally. No automated responses.
        </p>
      </form>
    </Form>
  );
}
