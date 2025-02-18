"use client"

import { Flex, Text, View, Icon, TextField, SelectField, TextAreaField, CheckboxField, Button } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { Schema } from '@/amplify/data/resource'
import Link from 'next/link';
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs, {
  ssr: true // required when using Amplify with Next.js
});

const client = generateClient<Schema>()



type formStateType = {
  firstName: string;
  lastName: string,
  phone: string,
  email: string,
  userType: '' | 'Homeowner' | 'Realtor' | 'Other',
  situation: string,
  agreed: boolean,
}

export default function Quote() {

  const [formState, setFormState] = useState<formStateType>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    userType: '',
    situation: '',
    agreed: false,
  });

  const handleInputChange = (field: any) => (e: { target: any; }) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({ ...formState, [field]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      console.log("SUBMITTING START")
      // Using Amplify's API to call the backend endpoint
      const response = await client.queries.submitContact({
        name: "Amplify",
      })
      console.log('Lambda response:', response);
      // Optionally, clear the form or display a success message here
    } catch (error) {
      console.error('Error submitting contact:', error);
    }
    console.log("done")
  };

  return (
    <Flex
      gap="48px"
      direction="column"
      width="100%"
      //maxWidth="1440px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding={{ base: "80px 20px 80px 20px", small: "80px 0px 80px 0px", medium: "80px 80px 80px 80px" }}
      backgroundColor="rgba(255,255,255,1)"
    >
      {/* Title */}
      <Flex
        gap="48px"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
      >
        <Flex
          gap="8px"
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="42px"
            fontWeight="700"
            color="rgba(33,39,42,1)"
            lineHeight="46.20000076293945px"
            textAlign="center"
            display="block"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Want a FREE quote?
          </Text>
        </Flex>
        <Text
          //fontFamily="Roboto"
          fontSize="18px"
          fontWeight="400"
          color="rgba(33,39,42,1)"
          lineHeight="25.19999885559082px"
          textAlign="center"
          display="block"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          whiteSpace="pre-wrap"
        >
          We are happy to provide information for whatever your construction needs may be.
        </Text>
      </Flex>

      {/* Form container */}
      <Flex
        as='form'
        onSubmit={handleSubmit}
        gap="16px"
        direction="column"
        //height="619px"
        width={{ base: "300px", small: "450px" }}
        justifyContent="flex-start"
        alignItems="stretch"
        shrink="0"
        position="relative"
      >
        {/* First & Last name container */}
        <Flex
          gap="16px"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
        >
          {/* First name container */}
          <TextField
            label="First Name"
            placeholder="Enter first name..."
            isRequired={true}
            width="100%"
            height='76px'
            value={formState.firstName}
            onChange={handleInputChange('firstName')}
          />

          {/* Last name container */}
          <TextField
            label="Last Name"
            placeholder="Enter last name..."
            isRequired={true}
            width="100%"
            height='76px'
            value={formState.lastName}
            onChange={handleInputChange('lastName')}
          />
        </Flex>

        {/* Phone number */}
        <TextField
          label="Phone Number"
          placeholder="Enter phone number..."
          isRequired={true}
          width="100%"
          height="76px"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={15}
          value={formState.phone}
          onChange={handleInputChange('phone')}
          innerStartComponent={
            <Icon
              width="48px"
              height="48px"
              viewBox={{ "minX": -12, "minY": -16, "width": 48, "height": 48 }}
              paths={[{ "d": "M 16.950000762939453 18 C 14.8666672706604 18 12.808334112167358 17.545834064483643 10.77500057220459 16.637500762939453 C 8.741667032241821 15.729167461395264 6.891666531562805 14.441667199134827 5.224999904632568 12.77500057220459 C 3.5583332777023315 11.108333945274353 2.270833373069763 9.258333444595337 1.3625000715255737 7.224999904632568 C 0.4541667699813843 5.1916663646698 0 3.1333335638046265 0 1.0500000715255737 C 0 0.7500000596046448 0.10000000894069672 0.5000000149011612 0.30000001192092896 0.30000001192092896 C 0.5000000149011612 0.10000000894069672 0.7500000596046448 0 1.0500000715255737 0 L 5.099999904632568 0 C 5.333333238959312 0 5.541666567325592 0.07916665077209473 5.724999904632568 0.23749999701976776 C 5.908333241939545 0.3958333432674408 6.016666855663061 0.5833333283662796 6.050000190734863 0.800000011920929 L 6.700000286102295 4.300000190734863 C 6.733333621174097 4.56666687130928 6.725000191479921 4.791666567325592 6.675000190734863 4.974999904632568 C 6.625000189989805 5.158333241939545 6.53333343565464 5.316666945815086 6.400000095367432 5.450000286102295 L 3.9750001430511475 7.900000095367432 C 4.308333486318588 8.516666769981384 4.704166561365128 9.112500011920929 5.162499904632568 9.6875 C 5.620833247900009 10.262499988079071 6.125000178813934 10.816667020320892 6.675000190734863 11.350000381469727 C 7.191666841506958 11.866667032241821 7.73333352804184 12.345833718776703 8.300000190734863 12.787500381469727 C 8.866666853427887 13.22916704416275 9.466666996479034 13.633333325386047 10.100000381469727 14 L 12.449999809265137 11.65000057220459 C 12.599999815225601 11.500000566244125 12.795833706855774 11.387500002980232 13.037500381469727 11.3125 C 13.27916705608368 11.237499997019768 13.516666665673256 11.216666664928198 13.75 11.25 L 17.200000762939453 11.949999809265137 C 17.433334097266197 12.016666479408741 17.62499961256981 12.137500002980232 17.774999618530273 12.3125 C 17.924999624490738 12.487499997019768 18 12.68333388864994 18 12.90000057220459 L 18 16.950000762939453 C 18 17.250000774860382 17.900000765919685 17.50000075995922 17.700000762939453 17.700000762939453 C 17.50000075995922 17.900000765919685 17.250000774860382 18 16.950000762939453 18 Z M 3.0250000953674316 6 L 4.675000190734863 4.349999904632568 L 4.25 2 L 2.0250000953674316 2 C 2.108333431184292 2.6833333373069763 2.2249999940395355 3.35833340883255 2.375 4.025000095367432 C 2.5250000059604645 4.691666781902313 2.74166676402092 5.349999964237213 3.0250000953674316 6 Z M 11.975000381469727 14.949999809265137 C 12.625000417232513 15.233333140611649 13.287500560283661 15.45833332836628 13.96250057220459 15.625 C 14.637500584125519 15.79166667163372 15.316666662693024 15.899999808520079 16 15.949999809265137 L 16 13.75 L 13.65000057220459 13.27500057220459 L 11.975000381469727 14.949999809265137 Z", "fillRule": "nonzero" }, { "d": "M16.95 18 C14.8667 18 12.8083 17.5458 10.775 16.6375 C8.74167 15.7292 6.89167 14.4417 5.225 12.775 C3.55833 11.1083 2.27083 9.25833 1.3625 7.225 C0.454167 5.19167 0 3.13333 0 1.05 C0 0.75 0.1 0.5 0.3 0.3 C0.5 0.1 0.75 0 1.05 0 L5.1 0 C5.33333 0 5.54167 0.0791667 5.725 0.2375 C5.90833 0.395833 6.01667 0.583333 6.05 0.8 L6.7 4.3 C6.73333 4.56667 6.725 4.79167 6.675 4.975 C6.625 5.15833 6.53333 5.31667 6.4 5.45 L3.975 7.9 C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875 C5.62083 10.2625 6.125 10.8167 6.675 11.35 C7.19167 11.8667 7.73333 12.3458 8.3 12.7875 C8.86667 13.2292 9.46667 13.6333 10.1 14 L12.45 11.65 C12.6 11.5 12.7958 11.3875 13.0375 11.3125 C13.2792 11.2375 13.5167 11.2167 13.75 11.25 L17.2 11.95 C17.4333 12.0167 17.625 12.1375 17.775 12.3125 C17.925 12.4875 18 12.6833 18 12.9 L18 16.95 C18 17.25 17.9 17.5 17.7 17.7 C17.5 17.9 17.25 18 16.95 18 Z M3.025 6 L4.675 4.35 L4.25 2 L2.025 2 C2.10833 2.68333 2.225 3.35833 2.375 4.025 C2.525 4.69167 2.74167 5.35 3.025 6 Z M11.975 14.95 C12.625 15.2333 13.2875 15.4583 13.9625 15.625 C14.6375 15.7917 15.3167 15.9 16 15.95 L16 13.75 L13.65 13.275 L11.975 14.95 Z", "fill": "rgba(28,27,31,1)", "fillRule": "nonzero" }]}
            />
          }
        />

        {/* Email */}
        <TextField
          label="Email"
          placeholder="Enter email address..."
          isRequired={true}
          width="100%"
          height="76px"
          type="email"
          value={formState.email}
          onChange={handleInputChange('email')}
          innerStartComponent={
            <Icon
              width="48px"
              height="48px"
              viewBox={{ "minX": -12, "minY": -16, "width": 48, "height": 48 }}
              paths={[{ "d": "M 2 16 C 1.449999988079071 16 0.979166716337204 15.804167062044144 0.5875000357627869 15.412500381469727 C 0.19583335518836975 15.02083370089531 0 14.550000011920929 0 14 L 0 2 C 0 1.449999988079071 0.19583335518836975 0.979166716337204 0.5875000357627869 0.5875000357627869 C 0.979166716337204 0.19583335518836975 1.449999988079071 0 2 0 L 18 0 C 18.55000001192093 0 19.02083370089531 0.19583335518836975 19.412500381469727 0.5875000357627869 C 19.804167062044144 0.979166716337204 20 1.449999988079071 20 2 L 20 14 C 20 14.550000011920929 19.804167062044144 15.02083370089531 19.412500381469727 15.412500381469727 C 19.02083370089531 15.804167062044144 18.55000001192093 16 18 16 L 2 16 Z M 10 9 L 2 4 L 2 14 L 18 14 L 18 4 L 10 9 Z M 10 7 L 18 2 L 2 2 L 10 7 Z M 2 4 L 2 2 L 2 14 L 2 4 Z", "fillRule": "nonzero" }, { "d": "M2 16 C1.45 16 0.979167 15.8042 0.5875 15.4125 C0.195833 15.0208 0 14.55 0 14 L0 2 C0 1.45 0.195833 0.979167 0.5875 0.5875 C0.979167 0.195833 1.45 0 2 0 L18 0 C18.55 0 19.0208 0.195833 19.4125 0.5875 C19.8042 0.979167 20 1.45 20 2 L20 14 C20 14.55 19.8042 15.0208 19.4125 15.4125 C19.0208 15.8042 18.55 16 18 16 L2 16 Z M10 9 L2 4 L2 14 L18 14 L18 4 L10 9 Z M10 7 L18 2 L2 2 L10 7 Z M2 4 L2 2 L2 14 L2 4 Z", "fill": "rgba(28,27,31,1)", "fillRule": "nonzero" }]}
            />
          }
        />

        {/* You are a... */}
        <SelectField
          label="You are a..."
          //descriptiveText="Homeowner, Realtor, or other?"
          isRequired
          width="100%"
          //defaultValue=""
          value={formState.userType}
          onChange={handleInputChange('userType')}
        >
          <option value="" disabled>Homeowner, Realtor, or other...</option>
          <option value="homeowner">Homeowner</option>
          <option value="realtor">Realtor</option>
          <option value="other">Other</option>
        </SelectField>

        {/* Tell me about your situation */}
        <TextAreaField
          label="Tell me about your situation"
          placeholder="Write here..."
          rows={3}
          isRequired
          width="100%"
          value={formState.situation}
          onChange={handleInputChange('situation')}
        />

        {/* Checkbox + agreement text */}
        <CheckboxField
          label={(
            <div>
              I agree to be contacted by The Stellar Group via call, email, and text. To opt out, you can reply 'stop' at any time or click the unsubscribe link in the emails. Message and data rates may apply.
              <Link
                href="/privacy-policy"
                style={{
                  pointerEvents: "auto",
                }}
              >
                Privacy Policy
              </Link>
            </div>
          )}
          name="privacy"
          value="yes"
          width="100%"
          checked={formState.agreed}
          onChange={handleInputChange('agreed')}
        />

        {/* Send message button */}
        <Button
          variation='primary'
          width={250}
          alignSelf={'center'}
          type='submit'
        >
          Send My Message
        </Button>

      </Flex>

    </Flex>
  )
}