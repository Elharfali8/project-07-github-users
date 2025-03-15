'use client'
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";

const Providers = ({
    children,
  }: {
    children: ReactNode;
  }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null; 
    }
  
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <SessionProvider>
          {children}
      </SessionProvider>
      </ThemeProvider>
  )
}

export default Providers