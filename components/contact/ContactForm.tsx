"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "@/lib/validations";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact form:", values);
    toast.success("Message sent. We'll get back to you soon.");
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-cream/70">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} className="bg-charcoal border-white/15 text-cream placeholder:text-cream/30 focus:border-gold" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-cream/70">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} className="bg-charcoal border-white/15 text-cream placeholder:text-cream/30 focus:border-gold" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>
        <FormField control={form.control} name="subject" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-cream/70">Subject</FormLabel>
            <FormControl>
              <Input placeholder="What's this about?" {...field} className="bg-charcoal border-white/15 text-cream placeholder:text-cream/30 focus:border-gold" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-cream/70">Message</FormLabel>
            <FormControl>
              <Textarea rows={5} placeholder="Your message…" {...field} className="bg-charcoal border-white/15 text-cream placeholder:text-cream/30 focus:border-gold resize-none" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full py-3.5 bg-gold hover:bg-gold-light text-charcoal font-bold tracking-widest uppercase text-sm rounded inline-flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60"
        >
          {form.formState.isSubmitting ? "Sending…" : (<>Send Message <ArrowRight className="w-4 h-4" /></>)}
        </button>
      </form>
    </Form>
  );
}
