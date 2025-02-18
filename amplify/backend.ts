import { defineBackend } from "@aws-amplify/backend"
import { submitContact } from "./functions/submit-contact/resource";

const backend = defineBackend({
  submitContact,
});