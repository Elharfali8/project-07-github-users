"use client"; // Ensure this is added

import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect after component has mounted
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  if (session) {
    return <p>Redirecting...</p>;
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="grid place-items-center min-h-[calc(100vh-72px)] ">
        <div className="">
        <h1 className="text-center  text-3xl md:text-4xl lg:text-6xl  font-bold">Welcome to GitHub Users</h1>
        <p className="text-center mt-2 lg:mt-4 text-lg  lg:text-xl">Login with GitHub to view profiles & repositories.</p>
          </div>
      </div>
    </main>
  );
}
