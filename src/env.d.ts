/// <reference types="astro/client" />

/* Vite's `?url` imports (the font preloads in Base.astro) resolve to the
   asset's final URL. `astro/client` covers plain asset imports but not the
   query-suffixed form, so the editor needs this declared. */
declare module '*?url' {
  const url: string;
  export default url;
}
