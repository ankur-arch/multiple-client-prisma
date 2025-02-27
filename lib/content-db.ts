// lib/prisma.ts
import { PrismaClient } from "../postgres-content-db-prisma/prisma-content-db-generated-types";

const getPrisma = () => new PrismaClient();

const globalForContentDBPrismaClient = global as unknown as {
  contentDBPrismaClient: ReturnType<typeof getPrisma>;
};

export const contentDBPrismaClient =
  globalForContentDBPrismaClient.contentDBPrismaClient || getPrisma();

if (process.env.NODE_ENV !== "production")
  globalForContentDBPrismaClient.contentDBPrismaClient = contentDBPrismaClient;
