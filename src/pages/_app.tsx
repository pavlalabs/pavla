import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { canto } from "wagmi/chains";
import { Layout } from "@/components/Layout";
import { useCallback, useEffect, useState } from "react";
const ethers = require("ethers");

export let cantoProvider = new ethers.providers.JsonRpcProvider(
  "https://canto.slingshot.finance"
);

export default function App({ Component, pageProps }: AppProps) {
  const chains = [canto];
  const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID!;

  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: projectId }),
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
      projectId,
      version: "1",
      appName: "Pavla",
      chains,
    }),
    provider,
  });

  const ethereumClient = new EthereumClient(wagmiClient, chains);

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
