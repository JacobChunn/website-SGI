import type { Schema } from "../../data/resource"

export const handler: Schema["submitContact"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { name } = event.arguments
  // return typed from `.returns()`
  console.log("inside lambda!")
  return `Hello, ${name}!`
}