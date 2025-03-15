"use client"; // Ensure this is added

import CardArticle from "@/components/CardArticle";
import SearchContainer from "@/components/SearchContainer";
import { stats } from "@/utils/stats";
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
    <main className="min-h-[100vh-72px] ">
      {/* <h1>Welcome, {session.user?.name}!</h1>
      <img src={session.user?.image ?? ""} alt="User Avatar" width={50} height={50} />
      <p>Email: {session.user?.email}</p>
      <button onClick={handleSignOut}>Sign Out</button> */}
      <div className="m-container main-container py-12 lg:py-20">
        <SearchContainer />
        <div className="my-4 lg:my-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((state) => {
            return <CardArticle key={state.id} {...state} />
          })}
        </div>
      </div>
    </main>
  );
}
