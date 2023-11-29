import { defineConfig } from 'astro/config';

// https://astro.build/config
import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()]
});