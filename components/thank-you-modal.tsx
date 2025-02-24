"use client"

import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Button, Flex, TextAreaField, TextField, Text } from '@aws-amplify/ui-react';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean,
  onClose: () => void,
  firstname: string,
}

export default function ThankYouModal({
  isOpen,
  onClose,
  firstname,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <Flex
        //className="modal-content"
        backgroundColor="rgb(255,255,255)"
        //width={{base: "calc(100vw - 200px)", small: "calc(100vw - 200px)", medium: "calc(100vw - 400px)"}}
        width={{base: "90%", small: "90%", medium: "60%", large: "60%"}}
        height="60%"
        boxShadow="10px 10px 20px rgba(0, 0, 0, 0.3)"
        //borderRadius="30px"
        direction="column"
        //border="2px solid"
        gap="0"
      >
        {/* Modal Header */}
        {/* <Flex
          justifyContent="right"
          padding="15px 15px 0 0"
          onClick={onClose}
          style={{ cursor: 'pointer' }}
        >
          <XMarkIcon width="30px" />
        </Flex> */}

        {/* Modal Body */}
        <Flex
          gap="16px"
          padding="10px"
          direction="column"
          justifyContent="center"
          alignSelf="center"
          alignItems="center"
          position="relative"
          flex="1"
        >
          <CheckCircleIcon width="100px" color='rgb(191,25,72)'/>
          <Text
            //fontFamily="Roboto"
            fontSize={{ base: "24px", small: "36px" }}
            fontWeight="700"
            color="rgb(0, 0, 0)"
            lineHeight="32px"
            textAlign="center"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          //textDecoration="underline"
          >
            Thank you, {firstname}!
          </Text>

          <Text
            //fontFamily="Roboto"
            fontSize={{ base: "16px", small: "20px" }}
            fontWeight="700"
            color="rgb(0, 0, 0)"
            lineHeight="32px"
            textAlign="center"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            We will get in touch shortly
          </Text>

          <Button
            variation='primary'
            width={150}
            alignSelf={'center'}
            onClick={onClose}
          >
            Close
          </Button>

        </Flex>

      </Flex>
    </div>
  );
};
