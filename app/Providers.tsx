'use client'
import { store } from "@/store";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";
import {Provider} from 'react-redux'

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
    <Provider store={store}>

    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <SessionProvider>
          {children}
      </SessionProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default Providers