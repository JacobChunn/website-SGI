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
    {/* Top Section | Contact Us */}
    <Flex
      gap="24px"
      justifyContent="flex-start"
      alignItems="center"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      direction={{base:"column", small:"column", medium:"column", large:"column", xl:"row"}}
      padding="20px"
    >
      {/* <Flex
        gap="16px"
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
      > */}
        {/* Contact Text Container */}
        <Flex
          //height="139px"
          //overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          direction="column"
          gap="0px"
        >
          <Text
            fontSize="42px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            //lineHeight="46.20000076293945px"
            textAlign={{base:"center", small:"center", medium:"center", large:"center", xl:"left"}}
            display="block"
            //width="817px"
            //height="52px"
            //position="absolute"
            // top="36px"
            // left="14px"
            // whiteSpace="pre-wrap"
            alignSelf="start"
          >
            Let's Bring Your Vision to Life!
          </Text>
          <Text
            //fontFamily="Roboto"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            //lineHeight="22px"
            textAlign={{base:"center", small:"center", medium:"center", large:"center", xl:"left"}}
            display="block"
            //width="329px"
            //height="30px"
            //position="absolute"
            //top="88px"
            //left="14px"
            //whiteSpace="pre-wrap"
          >
            Contact Us for a Free Quote Today!
          </Text>
        </Flex>

        {/* Contact Button */}
        <Link href="/contact" passHref legacyBehavior>
          <Button
            variation="primary"
            as='a'
            //alignSelf={{base:"center", small:"center", medium:"center", large:"center", xl:"start"}}
            alignSelf="center"
          >
            Contact Us
          </Button>
        </Link>

      {/* </Flex> */}
    </Flex>

    {/* Separator 1 */}
    <View
      height="1px"
      display="block"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      backgroundColor="rgba(193,199,205,1)"
    />

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