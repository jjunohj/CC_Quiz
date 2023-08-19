import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Global styles={globalStyles}></Global>
      <Layout>
        <Component />
      </Layout>
    </>
  );
}
