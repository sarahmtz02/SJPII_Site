interface ImportMetaEnv {
  /** URL that receives the site's form submissions as JSON (contacto, oración, donativos). */
  readonly PUBLIC_FORMS_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
