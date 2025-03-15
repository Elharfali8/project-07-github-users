"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { ThemToggle } from "./ThemeToggle";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="p-4  shadow-lg      ">
          <div className="flex justify-between items-center  m-container main-container">
          <h1 className="text-xl lg:text-2xl font-semibold">GitHub Users</h1>
      {session ? (
        <div className="flex items-center gap-4">
                  <img src={session.user?.image ?? ""} alt="Profile" className="w-8 h-8 rounded-full" />
                  <ThemToggle />
                  <button onClick={() => signOut()} className="p-2 destructive-btn font-medium cursor-pointer rounded">Logout</button>
                  
        </div>
      ) : (
                  <div className="flex items-center gap-4">
                      <ThemToggle />
                      <button onClick={() => signIn("github")} className="p-2 primary-btn rounded font-medium cursor-pointer">Login with GitHub</button>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
