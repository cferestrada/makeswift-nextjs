import { Style } from "@makeswift/runtime/controls"

import { runtime } from "./runtime"

function HelloWorld(props: any) {
  return <p {...props}>Hello, world!</p>
}

runtime.registerComponent(HelloWorld, {
  type: "hello-world",
  label: "Custom / Hello, world!",
  props: {
    className: Style(),
  },
})