import { HONEYPOT_FIELD } from '../../lib/netlifyForms'

interface Props {
  formName: string
}

/**
 * Hidden fields every Netlify form needs: "form-name" (so the static HTML and
 * the fetch submission map to the same form) and an off-screen honeypot.
 */
export default function NetlifyFormFields({ formName }: Props): React.JSX.Element {
  return (
    <>
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden" aria-hidden="true">
        <label>
          Leave this empty: <input name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
        </label>
      </p>
    </>
  )
}
