// WhatWeCanDo.tsx
import { Flex, Text, Icon } from '@aws-amplify/ui-react';
import ServiceCard from '@/components/support/service-card';
import Link from 'next/link';

export default function WhatWeCanDo() {
  return (
    <Flex
      gap="64px"
      direction="column"
      width="100%"
      //maxWidth="1440px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="80px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
    >
      {/* Title */}
      <Flex
        gap="48px"
        direction="column"
        width="100%"
        //maxWidth="1280px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
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
            What We Can Do For You
          </Text>
        </Flex>
      </Flex>

      {/* First two cards container */}
      <Flex
        gap="48px"
        direction={{base: "column", small: "column", medium: "column", large: "row"}}
        //width="1000px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
      >
        {/* 1st card */}
        <ServiceCard
          icon={
            <Icon
              width="96px"
              height="96px"
              viewBox={{ minX: 0, minY: 0, width: 96, height: 96 }}
              paths={[
                {
                  d: "M12 84V78H20V18C20 16.4 20.6 15 21.8 13.8C23 12.6 24.4 12 26 12H70C71.6 12 73 12.6 74.2 13.8C75.4 15 76 16.4 76 18V78H84V84H12ZM70 78V18H26V78H70ZM56.7 51.1C57.6633 51.1 58.4707 50.7743 59.122 50.123C59.774 49.471 60.1 48.6633 60.1 47.7C60.1 46.7367 59.774 45.929 59.122 45.277C58.4707 44.6257 57.6633 44.3 56.7 44.3C55.7367 44.3 54.9293 44.6257 54.278 45.277C53.626 45.929 53.3 46.7367 53.3 47.7C53.3 48.6633 53.626 49.471 54.278 50.123C54.9293 50.7743 55.7367 51.1 56.7 51.1Z",
                  fillRule: "nonzero",
                  fill: "rgba(191,25,72,1)",
                },
              ]}
            />
          }
          title="Windows, Doors, Roofing, and Siding"
          description="Upgrade your home's curb appeal and energy efficiency with our expert window, door, roofing, and siding solutions. We deliver fast, affordable installations to ensure your home looks great and stays protected."
        />

        {/* 2nd card */}
        <ServiceCard
          icon={
            <Icon
              width="96px"
              height="96px"
              viewBox={{ minX: 0, minY: 0, width: 96, height: 96 }}
              paths={[
                {
                  d: "M16 80V46H8V40H23C21.0753 40 19.4273 39.3147 18.056 37.944C16.6853 36.5727 16 34.9247 16 33V16H39V33C39 34.9247 38.3147 36.5727 36.944 37.944C35.5733 39.3147 33.9253 40 32 40H68V27C68 25.5833 67.5227 24.3957 66.568 23.437C65.6127 22.479 64.4293 22 63.018 22C61.606 22 60.4167 22.5 59.45 23.5C58.4833 24.5 58.0333 25.6667 58.1 27H52C52.0667 23.9333 53.1637 21.3333 55.291 19.2C57.4183 17.0667 60.0017 16 63.041 16C66.0803 16 68.6667 17.0693 70.8 19.208C72.9333 21.3473 74 23.9447 74 27V40H88V46H80V80H16ZM22 34H33V22H22V34ZM22 74H45V46H22V74ZM51 74H74V46H51V74Z",
                  fillRule: "nonzero",
                  fill: "rgba(191,25,72,1)",
                },
              ]}
            />
          }
          title="Kitchen and Bath Remodeling"
          description="Transform your space with our custom kitchen and bathroom remodeling services. From design to completion, we create modern, functional spaces tailored to your style and budget."
        />
      </Flex>

      {/* Last two cards container */}
      <Flex
        gap="48px"
        direction={{base: "column", small: "column", medium: "column", large: "row"}}
        //width="1000px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
      >
        {/* 3rd card */}
        <ServiceCard
          icon={
            <Icon
              width="96px"
              height="96px"
              viewBox={{ minX: 0, minY: 0, width: 96, height: 96 }}
              paths={[
                {
                  d: "M58 51H76V45H58V51ZM58 39H76V33H58V39ZM20 64H52V62.1C52 59.3 50.5834 57.0167 47.75 55.25C44.9167 53.4833 41 52.6 36 52.6C31 52.6 27.0834 53.4833 24.25 55.25C21.4167 57.0167 20 59.3 20 62.1V64ZM35.992 46.6C37.9974 46.6 39.7167 45.886 41.15 44.458C42.5834 43.03 43.3 41.3133 43.3 39.308C43.3 37.3027 42.586 35.5833 41.158 34.15C39.73 32.7167 38.0134 32 36.008 32C34.0027 32 32.2834 32.714 30.85 34.142C29.4167 35.57 28.7 37.2867 28.7 39.292C28.7 41.2973 29.414 43.0167 30.842 44.45C32.27 45.8833 33.9867 46.6 35.992 46.6ZM14 80C12.4 80 11 79.4 9.80003 78.2C8.60003 77 8.00003 75.6 8.00003 74V22C8.00003 20.4 8.60003 19 9.80003 17.8C11 16.6 12.4 16 14 16H82C83.6 16 85 16.6 86.2 17.8C87.4 19 88 20.4 88 22V74C88 75.6 87.4 77 86.2 78.2C85 79.4 83.6 80 82 80H14ZM14 74H82V22H14V74Z",
                  fillRule: "nonzero",
                  fill: "rgba(191,25,72,1)",
                },
              ]}
            />
          }
          title="Licensed Residential Builder"
          description="As a licensed residential builder in Michigan, we\'re equipped to handle your construction needs with precision and compliance. From structural updates to FHA-required fixes, you can trust us to get the job done right."
        />

        {/* 4th card */}
        <ServiceCard
          icon={
            <Icon
              width="96px"
              height="96px"
              viewBox={{ minX: 0, minY: 0, width: 96, height: 96 }}
              paths={[
                {
                  d: "M60 80C51.0667 80 43.5 76.9 37.3 70.7C31.1 64.5 28 56.9333 28 48C28 39.0667 31.1 31.5 37.3 25.3C43.5 19.1 51.0667 16 60 16C68.9333 16 76.5 19.1 82.7 25.3C88.9 31.5 92 39.0667 92 48C92 56.9333 88.9 64.5 82.7 70.7C76.5 76.9 68.9333 80 60 80ZM59.976 74C67.192 74 73.3333 71.4747 78.4 66.424C83.4667 61.3727 86 55.2393 86 48.024C86 40.808 83.4747 34.6667 78.424 29.6C73.3727 24.5333 67.2393 22 60.024 22C52.808 22 46.6667 24.5253 41.6 29.576C36.5333 34.6273 34 40.7607 34 47.976C34 55.192 36.5253 61.3333 41.576 66.4C46.6273 71.4667 52.7607 74 59.976 74ZM70.2 62.3L74.4 58.1L63 46.7V32H57V49.2L70.2 62.3ZM8 35V29H24V35H8ZM4 51V45H24V51H4ZM8 67V61H24V67H8Z",
                  fillRule: "nonzero",
                  fill: "rgba(191,25,72,1)",
                },
              ]}
            />
          }
          title="Quick Fixes for Closings"
          description="Are you a Realtor and need to close a deal fast? We specialize in quick, affordable repairs to keep your closing on track. Whether it's windows, siding, or other construction needs, we\'re here to help realtors and homeowners move forward."
        />
      </Flex>
    </Flex>
  );
}
