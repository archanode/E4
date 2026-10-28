// Netlify Forms submission helper.
//
// Netlify detects forms at deploy time by scanning the prerendered HTML for
// <form data-netlify="true" name="...">. Only fields that exist in that static
// markup are stored, so every field we send must also appear in the HTML.
// Submissions are a urlencoded POST to "/" that includes "form-name".

export type FormStatus = 'idle' | 'sending' | 'success' | 'error'

/** Name of the hidden honeypot field; Netlify silently drops submissions that fill it. */
export const HONEYPOT_FIELD = 'bot-field'

export async function submitNetlifyForm(formName: string, fields: Record<string, string>): Promise<boolean> {
  const body = new URLSearchParams({ 'form-name': formName, ...fields }).toString()
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    return response.ok
  } catch {
    return false
  }
}

/** Collects every named field of a form element as strings (files are ignored). */
export function formFields(form: HTMLFormElement): Record<string, string> {
  const fields: Record<string, string> = {}
  new FormData(form).forEach((value, key) => {
    if (typeof value === 'string' && key !== 'form-name') fields[key] = value
  })
  return fields
}
