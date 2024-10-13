"use client";

import React from "react";
import { TimeProvider } from "../hooks/useTimeContext";

export default function TimeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TimeProvider>{children}</TimeProvider>;
}
