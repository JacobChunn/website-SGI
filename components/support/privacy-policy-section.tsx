import { Flex, Text, Image } from '@aws-amplify/ui-react';
import Link from 'next/link';

interface PrivacyPolicySectionProps {
  title: string;
  description: string;
  bgCol: "light" | "med" | "dark";
  linkText?: null | string
  linkDest?: null | string
}

const bgColMap: { [key: string]: string } = {
  light: "#FFFFFF",
  med: "#F2F4F8",
  dark: "#E8ECF0",
};

export default function PrivacyPolicySection({
  title,
  description,
  bgCol,
  linkText = null,
  linkDest = null,
}: PrivacyPolicySectionProps) {


  return (
  <Flex
    gap="48px"
    direction="column"
    width="100%"
    justifyContent="flex-start"
    alignItems="stretch"
    position="relative"
    padding="80px 80px 80px 80px"
    backgroundColor={bgColMap[bgCol]}
  >
    <Text
      //fontFamily="Roboto"
      fontSize={{base: "24px", small: "28px", medium: "28px", large: "54px"}}
      fontWeight="700"
      color="rgba(33,39,42,1)"
      textAlign="center"
      display="block"
      shrink="0"
      alignSelf="center"
      position="relative"
      whiteSpace="pre-wrap"
    >
      {title}
    </Text>
    <Flex
      direction="column"
      gap="0px"
      width="100%"
      alignItems="stretch"
      justifyContent="flex-start"
      position="relative"
      whiteSpace="pre-wrap"
    >
      <Text
        //fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(33,39,42,1)"
        lineHeight="25.19999885559082px"
        textAlign="center"
        display="block"
        shrink="0"
        alignSelf="center"
        position="relative"
        //whiteSpace="pre-wrap"
      >
        {description}
      </Text>
      {linkText && linkDest ? <Link
        href={linkDest}
      >
        <Text
          //fontFamily="Roboto"
          fontSize="18px"
          fontWeight="400"
          color="rgba(33,39,42,1)"
          lineHeight="25.19999885559082px"
          textAlign="center"
          display="block"
          shrink="0"
          alignSelf="center"
          position="relative"
        >
          {linkText}
        </Text>
      </Link> : null}
    </Flex>
  </Flex>
  )
}