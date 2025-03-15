"use client"; // Ensure this is added

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router"; // Import the useRouter hook

export default function Dashboard() {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }); 
  };

  if (!session) {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}!</h1>
      <img src={session.user?.image ?? ""} alt="User Avatar" width={50} height={50} />
      <p>Email: {session.user?.email}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
