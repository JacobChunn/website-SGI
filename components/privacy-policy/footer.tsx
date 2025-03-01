import { Button, Flex, Text, View } from '@aws-amplify/ui-react';
import Image from 'next/image'
import Link from 'next/link';
import FooterContactText from '../support/footer-contact-text';

export default function Footer() {
  return (
  <Flex
    gap="48px"
    direction="column"
    width="100%"
    justifyContent="center"
    alignItems="flex-start"
    position="relative"
    padding={{base: "48px 20px 48px 10px", small: "48px 20px 48px 20px", medium: "48px 80px 48px 80px"}}
    backgroundImage="linear-gradient(180deg, rgba(77,83,88,1), rgba(153,153,153,1))"
  >

    {/* Middle Section */}
    <Flex
      direction={{base: "column", small: "row"}}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      shrink="0"
      position="relative"
    >
      <Image
        src="/SGI-Logo-New.png"
        width="173"
        height="171"
        alt="The Stellar Group Logo"
      />
      <Flex
        gap="10px"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
      >
        <Flex
          gap="8px"
          direction="row"
          height="24px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="center"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="18px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="19.80000114440918px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            The Stellar Group
          </Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          alignSelf="center"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="16px"
            fontWeight="500"
            color="rgba(255,255,255,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            5156 Old Franklin Rd
          </Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          alignSelf="center"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="16px"
            fontWeight="500"
            color="rgba(255,255,255,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Grand Blanc, MI 48439
          </Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          height="26px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          alignSelf="center"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="18px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="19.80000114440918px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Daryl Brooks
          </Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          alignSelf="center"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="16px"
            fontWeight="500"
            color="rgba(255,255,255,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Principal
          </Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          alignSelf="center"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="16px"
            fontWeight="500"
            color="rgba(255,255,255,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            (248) 670-7076
          </Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          alignSelf="center"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="16px"
            fontWeight="500"
            color="rgba(255,255,255,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            sgidaryl@gmail.com
          </Text>
        </Flex>
      </Flex>
    </Flex>

    {/* Separator 2 */}
    <View
      height="1px"
      display="block"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      backgroundColor="rgba(193,199,205,1)"
    />

    {/* Bottom section */}
    <Flex
      gap="48px"
      direction={{base: "column-reverse", small: "column-reverse", medium: "row"}}
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      alignSelf="stretch"
      position="relative"
    >
      <Text
        //fontFamily="Roboto"
        fontSize="14px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="19.600000381469727px"
        textAlign={{base: "center", small: "left"}}
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
        alignSelf="center"
      >
        The Stellar Group @ 2025. All rights reserved.
      </Text>
      <Flex
        gap="16px"
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        alignSelf="center"
      >
        <Link
          href="/privacy-policy"
          style={{
            textDecoration: "none"
          }}
        >
          <Flex
            gap="8px"
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="12px 8px 12px 8px"
          >
            <Text
              //fontFamily="Roboto"
              fontSize="16px"
              fontWeight="500"
              color="rgba(255,255,255,1)"
              lineHeight="16px"
              textAlign="left"
              display="block"
              shrink="0"
              position="relative"
              whiteSpace="pre-wrap"
            >
              Privacy Policy
            </Text>
          </Flex>
        </Link>

      </Flex>
    </Flex>
  </Flex>
  )
}