import { type ClientSchema, a, defineData } from "@aws-amplify/backend"
import { submitContact } from "../functions/submit-contact/resource"

const schema = a.schema({
  submitContact: a
    .query()
    .arguments({
      name: a.string(),
    })
    .returns(a.string())
    .handler(a.handler.function(submitContact)),
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
})