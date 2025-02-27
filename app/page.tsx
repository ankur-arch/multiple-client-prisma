import { contentDBPrismaClient } from "@/lib/content-db";
import { userDBPrismaClient } from "@/lib/user-db";

export default async function Home() {
  const user = await userDBPrismaClient.user.findFirst();
  const content = await contentDBPrismaClient.notes.findFirst();

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">Multi-DB Showcase</h1>
          <p className="mt-4 text-xl text-gray-600">
            Data fetched from two distinct databases, styled in a modern, minimal design.
          </p>
        </header>

        <section className="mb-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            User Data
          </h2>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">
            {JSON.stringify(user, null, 2)}
          </pre>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Content Data
          </h2>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">
            {JSON.stringify(content, null, 2)}
          </pre>
        </section>
      </div>
    </main>
  );
}
