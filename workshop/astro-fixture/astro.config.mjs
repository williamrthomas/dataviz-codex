import { defineConfig } from 'astro/config';

// A disposable compatibility fixture; the actual devshare keeps its own config.
export default defineConfig({
  output: 'static',
  base: process.env.CODEX_FIXTURE_BASE || '/',
  outDir: process.env.CODEX_FIXTURE_BASE ? './dist-prefix' : './dist',
});
