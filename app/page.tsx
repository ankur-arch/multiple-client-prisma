import { contentDBPrismaClient } from "@/lib/content-db"
import { userDBPrismaClient } from "@/lib/user-db"

export default async function Home() {

  const user = await userDBPrismaClient.user.findFirst()
  const content = await contentDBPrismaClient.notes.findFirst()

  return <>
    From user DB: {JSON.stringify(user)}
    From user DB: {JSON.stringify(content)}
  </>
}
