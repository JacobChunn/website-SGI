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
import SectionTitle from '../section-title';

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
      <SectionTitle
        title="Want a FREE quote?"
        subtitle="We are happy to provide information for whatever your construction needs may be."
      />

      {/* Form container */}
      <ContactForm/>

    </Flex>
  )
}