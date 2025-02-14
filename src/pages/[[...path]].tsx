import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"

import {
  Makeswift,
  Page as MakeswiftPage,
  PageProps,
} from "@makeswift/runtime/next"

import { client } from "@/makeswift/client"

export const getStaticPaths = (async () => {
  const pages = await client.getPages()

  return {
    paths: pages.data.map((page) => ({
      params: {
        path: page.path.split("/").filter((segment) => segment !== ""),
      },
    })),
    fallback: "blocking",
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params, previewData }) => {
  if (params == null) return { notFound: true }

  const path = Array.isArray(params.path) ? "/" + params.path.join("/") : "/"

  const snapshot = await client.getPageSnapshot(path, {
    siteVersion: Makeswift.getSiteVersion(previewData),
  })

  if (snapshot == null) return { notFound: true }

  return { props: { snapshot } }
}) satisfies GetStaticProps<PageProps>

export default function Page({
  snapshot,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MakeswiftPage snapshot={snapshot} />
}
