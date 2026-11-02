// Client-side helpers shared by the site's forms (contacto, oración, donativos).

export const isEmail = (v: string) => /\S+@\S+\.\S+/.test(v);

/** Shows (or clears) the error message under a DS Input field, restoring its hint when cleared. */
export function setFieldError(form: HTMLFormElement, name: string, message?: string) {
  const input = form.elements.namedItem(name) as HTMLElement | null;
  const field = input?.closest('.field');
  if (!input || !field) return;
  const msg = field.querySelector<HTMLElement>('.field__msg');
  field.classList.toggle('is-invalid', !!message);
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
  if (msg) msg.textContent = message ?? msg.dataset.hint ?? '';
}

export const value = (form: HTMLFormElement, name: string) =>
  ((form.elements.namedItem(name) as HTMLInputElement | null)?.value ?? '').trim();

/**
 * Sends a form submission as JSON to PUBLIC_FORMS_ENDPOINT (e.g. Formspree, Getform or a
 * serverless function). Without that variable nothing leaves the browser: the submission is
 * only logged, so the confirmation screens can still be reviewed.
 */
export async function sendForm(form: string, data: Record<string, unknown>): Promise<void> {
  const endpoint = import.meta.env.PUBLIC_FORMS_ENDPOINT;
  if (!endpoint) {
    console.warn(`[forms] PUBLIC_FORMS_ENDPOINT no está configurado; "${form}" no se envió.`, data);
    return;
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ formulario: form, ...data }),
  });
  if (!res.ok) throw new Error(`Envío fallido (${res.status})`);
}
