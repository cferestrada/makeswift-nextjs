import { MakeswiftApiHandler } from "@makeswift/runtime/next/server"
import { strict } from "assert"

import { runtime } from "@/makeswift/runtime"

strict(process.env.MAKESWIFT_SITE_API_KEY, "MAKESWIFT_SITE_API_KEY is required")

export default MakeswiftApiHandler(process.env.MAKESWIFT_SITE_API_KEY, {
  runtime,
})