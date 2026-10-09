import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.{ts,tsx,mjs}'],
    server: {
      deps: {
        // Preserve Zod's named exports when Vitest runs under Bun.
        inline: ['zod'],
      },
    },
  },
});
