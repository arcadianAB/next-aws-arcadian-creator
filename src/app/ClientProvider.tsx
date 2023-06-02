"use client";

import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import InitLoadingScreen from "@/comps/loading/InitLoadingScreen";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [isLoading]);

  return (
    <>
      {/* {isLoading && isHome && <InitLoadingScreen />} */}
      {children}
    </>
  );
};

export default ClientProvider;
