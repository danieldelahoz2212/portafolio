// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import vercelAdapter from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
  
    output: "server",
    adapter: vercelAdapter(),
  });