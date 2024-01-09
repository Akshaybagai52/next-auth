import React from "react";
import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      {JSON.stringify(session)}
      <form action={async () => {
        "use server"
        await signOut();
      }}>
        <button type="submit">
          sigout
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
