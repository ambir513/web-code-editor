import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import React from "react";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/auth/sign-in" });
        }}
      >
        <Button>Sign out</Button>
      </form>
    </div>
  );
}
