import { Button, Flex, Text } from '@aws-amplify/ui-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <Flex
      gap="80px"
      direction="row"
      width="100%"
      maxWidth="1440px"
      margin="0 0"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      //padding="160px 80px 80px 80px"
      padding="20% 10% 10% 10%"
      //backgroundColor={"#00a400"}
      backgroundImage="url('/home_hero.jfif')" // set your image path here
      style={{ 
        backgroundSize: "cover",   // pass custom CSS via style prop
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // the tint color (50% black)
        backgroundBlendMode: "multiply"         // blends the tint with the image
      }}
    >
      {/* inner content */}
      <Flex
        gap="48px"
        direction="column"
        width="100%"
        maxWidth="1280px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        //padding="150px 0px 150px 0px"
        //backgroundColor={"#FF0000"}
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
            // fontFamily="Roboto, sans-serif"
            //fontSize="54px"
            
            fontSize={{base: "12px", small: "16px", medium: "32", large: "54px"}}
            // sizes = {[
            //   [0, "24px"],
            //   [640, "28px"],
            //   [845, "36px"],
            //   [1000, "54px"],
            //   // [1000, "54px"],
            // ]
            // }
            fontWeight="700"
            color="rgba(255,255,255,1)"
            //lineHeight="59.4px"
            textAlign="center"
            display="block"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Quick, Affordable Remodeling Solutions for Homeowners and Realtors
          </Text>
          <Text
            //fontFamily="Roboto"
            fontSize="42px"
            fontWeight="700"
            color="rgba(242,244,248,1)"
            lineHeight="46.2px"
            textAlign="center"
            display="block"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Get Your FREE Quote Today!
          </Text>

          <Link href="/contact" passHref legacyBehavior>
            <Button
              variation='primary'
              as='a'
            >
              Get In Touch
            </Button>
          </Link>

        </Flex>
      </Flex>
    </Flex>
  );
}
