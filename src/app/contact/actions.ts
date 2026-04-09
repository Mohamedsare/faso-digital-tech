"use server";

import { z } from "zod";

import { createSupabaseServerClient } from "@/lib/supabase/server";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom est requis."),
  company: z.string().optional(),
  email: z.string().email("Adresse email invalide."),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20, "Merci de decrire le projet avec un peu plus de detail."),
});

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

export const initialContactState: ContactActionState = {
  status: "idle",
  message: "",
};

export async function submitContactRequest(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const payload = {
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    projectType: String(formData.get("projectType") ?? ""),
    budget: String(formData.get("budget") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Veuillez corriger les champs du formulaire.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return {
      status: "error",
      message:
        "Supabase n'est pas configure. Renseignez les variables d'environnement avant l'envoi.",
    };
  }

  const { error } = await supabase.from("contact_requests").insert({
    name: parsed.data.name,
    company: parsed.data.company || null,
    email: parsed.data.email,
    phone: parsed.data.phone || null,
    project_type: parsed.data.projectType || null,
    budget: parsed.data.budget || null,
    message: parsed.data.message,
  });

  if (error) {
    return {
      status: "error",
      message: "Impossible d'enregistrer la demande pour le moment.",
    };
  }

  return {
    status: "success",
    message: "Demande envoyee. Notre equipe revient vers vous sous 24h.",
  };
}

