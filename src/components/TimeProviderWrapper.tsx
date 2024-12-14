"use client";

import React, { useState, useEffect } from "react";
import { TimeProvider } from "../hooks/useTimeContext";

export default function TimeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-main text-alt flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return <TimeProvider>{children}</TimeProvider>;
}
