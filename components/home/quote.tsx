"use client"

import { Flex, Text, View, Icon, TextField, SelectField, TextAreaField, CheckboxField, Button } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import Link from 'next/link';
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import outputs from "@/amplify_outputs.json";
import { contactText, ContactTextType } from '@/app/actions/contact-text';
import "@/app/app.css"
import ThankYouModal from '../thank-you-modal';
import ContactForm from '../contact-form';

Amplify.configure(outputs, {
  ssr: true // required when using Amplify with Next.js
});

export default function Quote() {


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
      <ContactForm/>

    </Flex>
  )
}