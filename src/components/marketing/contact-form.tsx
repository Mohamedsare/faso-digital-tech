"use client";

import { useActionState } from "react";

import {
  initialContactState,
  submitContactRequest,
} from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-sm text-red-600">{message}</p>;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactRequest,
    initialContactState,
  );

  return (
    <form action={formAction} className="space-y-5 rounded-[32px] border border-black/5 bg-white p-6 shadow-panel sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="name">
            Nom
          </label>
          <Input id="name" name="name" placeholder="Votre nom" />
          <FieldError message={state.fieldErrors?.name?.[0]} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="company">
            Entreprise
          </label>
          <Input id="company" name="company" placeholder="Nom de l'entreprise" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="email">
            Email
          </label>
          <Input id="email" name="email" type="email" placeholder="vous@entreprise.com" />
          <FieldError message={state.fieldErrors?.email?.[0]} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="phone">
            Telephone
          </label>
          <Input id="phone" name="phone" placeholder="+212 ..." />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="projectType">
            Type de projet
          </label>
          <select
            id="projectType"
            name="projectType"
            className="flex h-12 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          >
            <option value="">Selectionnez</option>
            <option value="saas">SaaS</option>
            <option value="cybersecurite">Cybersecurite</option>
            <option value="ia">Intelligence artificielle</option>
            <option value="mobile">Mobile</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="budget">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            className="flex h-12 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          >
            <option value="">Selectionnez</option>
            <option value="starter">&lt; 10k EUR</option>
            <option value="growth">10k - 50k EUR</option>
            <option value="scale">50k - 100k EUR</option>
            <option value="enterprise">&gt; 100k EUR</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Contexte, objectif, delai, contraintes, stack souhaite..."
        />
        <FieldError message={state.fieldErrors?.message?.[0]} />
      </div>

      {state.message ? (
        <p
          className={`rounded-2xl px-4 py-3 text-sm ${
            state.status === "success"
              ? "bg-success/10 text-success"
              : "bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "Envoi en cours..." : "Envoyer la demande"}
      </Button>
    </form>
  );
}

