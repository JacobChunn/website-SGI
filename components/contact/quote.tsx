import { Flex, Text, View, Icon, TextField, SelectField, TextAreaField, CheckboxField, Button, Image } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import Link from 'next/link';
import outputs from "@/amplify_outputs.json";
import { useState } from 'react';
import { contactText, ContactTextType } from '@/app/actions/contact-text';
import ContactForm from '../contact-form';

Amplify.configure(outputs, {
  ssr: true // required when using Amplify with Next.js
});

export default function Quote() {

  return (
    <Flex
      gap="48px"
      direction={{ base: "column-reverse", small: "column-reverse", medium: "column-reverse", large: "column-reverse", xl: "row" }}
      width="100%"
      height="100%"
      //maxWidth="1440px"
      justifyContent="flex-start"
      //alignItems="center"
      position="relative"
      padding={{ base: "80px 20px 80px 20px", small: "80px 0px 80px 0px", medium: "80px 80px 80px 80px" }}
      backgroundColor="rgba(255,255,255,1)"
    >
      {/* Location Container */}
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        position="relative"
      //display="inline-block"
      >
        <Flex
          width="500px"
          height="500px"
          position="relative"
        >
          <Image
            width="500px"
            height="500px"
            src="/contact/location.png"
            alt=''
            alignSelf="center"
            objectFit="cover"
          />
          <Flex
            position="absolute"
            direction="column"
            gap="2px"
            top="10px"
            left="10px"
            backgroundColor="rgba(255, 255, 255, 1)"
            padding="14px"
          >
            <Text
              //fontFamily="Roboto"
              fontSize="14px"
              fontWeight="700"
              color="rgba(33,39,42,1)"
              textAlign="left"
              display="block"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              whiteSpace="pre-wrap"
            >
              Stellar Investment Group
            </Text>
            <Text
              //fontFamily="Roboto"
              fontSize="14px"
              fontWeight="400"
              color="rgba(33,39,42,1)"
              textAlign="left"
              display="block"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              whiteSpace="pre-wrap"
            >
              5156 Old Franklin Rd<br />
              Grand Blanc, MI 48439
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Form & Title Container */}
      <Flex
        direction="column"
        alignItems="center"
        width="100%"
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
              Get In Touch
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
            No matter the concern, we are here to help you.
          </Text>
        </Flex>

        {/* Form container */}
        <ContactForm />
      </Flex>

    </Flex>
  )
}