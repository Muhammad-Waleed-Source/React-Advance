import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";
import fs from "node:fs/promises";

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      resolve(users)
    }, 2000)
  );

  return (
    <main>
      <Suspense fallback="Loading users...">
        <UsePromiseDemo usersPromise={fetchUsersPromise} />
      </Suspense>
    </main>
  );
}
