"use client";

import { ArweaveWalletKit } from "@arweave-wallet-kit/react";

interface ArweaveWalletProviderProps {
  children: React.ReactNode;
}

export function ArweaveWalletProvider({ children }: ArweaveWalletProviderProps) {
  return (
    <ArweaveWalletKit
      config={{
        permissions: ["ACCESS_ADDRESS", "ACCESS_PUBLIC_KEY", "SIGN_TRANSACTION", "SIGNATURE"],
        strategies: [],
      }}
      theme={{
        displayTheme: "dark",
        radius: "minimal",
        accent: { r: 118, g: 123, b: 255 },
        titleHighlight: { r: 118, g: 123, b: 255 },
      }}
    >
      {children}
    </ArweaveWalletKit>
  );
}