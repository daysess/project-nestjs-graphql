import { defineConfig } from "prisma/config";

export default defineConfig({
  migrations: {
    // Prisma Migrate usa essa URL
    databaseUrl: process.env.DATABASE_URL,
  },
});
