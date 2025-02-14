import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ReactRuntimeProvider } from "@makeswift/runtime/next"

import { runtime } from "@/makeswift/runtime"
import "@/makeswift/components"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactRuntimeProvider runtime={runtime}>
      <Component {...pageProps} />
    </ReactRuntimeProvider>
  )
}
