// WhatWeCanDo.tsx
import { Flex, Text, Icon } from '@aws-amplify/ui-react';
import ServiceCard from '@/components/support/service-card';
import Link from 'next/link';

export default function WhoWeAre() {
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
          gap="24px"
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
            Who We Are
          </Text>
          <Text
            fontSize="18px"
            fontWeight="400"
            color="rgba(33,39,42,1)"
            //lineHeight="46.20000076293945px"
            textAlign="center"
            display="block"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            whiteSpace="pre-wrap"
          >
            At The Stellar Group, we specialize in delivering top-notch construction services to homeowners and realtors throughout Michigan. Proudly licensed since 1988, our team is dedicated to turning your vision into reality with fast, reliable, and affordable solutions—from upgrading windows and doors to transforming kitchens, baths, and more.
          </Text>
        </Flex>
      </Flex>

      {/* First two cards container */}
      <Flex
        gap="64px"
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
                  d: "M58 51.0001H76V45.0001H58V51.0001ZM58 39.0001H76V33.0001H58V39.0001ZM20 64.0001H52V62.1001C52 59.3001 50.5833 57.0167 47.75 55.2501C44.9167 53.4834 41 52.6001 36 52.6001C31 52.6001 27.0833 53.4834 24.25 55.2501C21.4167 57.0167 20 59.3001 20 62.1001V64.0001ZM35.992 46.6001C37.9973 46.6001 39.7167 45.8861 41.15 44.4581C42.5833 43.0301 43.3 41.3134 43.3 39.3081C43.3 37.3027 42.586 35.5834 41.158 34.1501C39.73 32.7167 38.0133 32.0001 36.008 32.0001C34.0027 32.0001 32.2833 32.7141 30.85 34.1421C29.4167 35.5701 28.7 37.2867 28.7 39.2921C28.7 41.2974 29.414 43.0167 30.842 44.4501C32.27 45.8834 33.9867 46.6001 35.992 46.6001ZM14 80.0001C12.4 80.0001 11 79.4001 9.8 78.2001C8.6 77.0001 8 75.6001 8 74.0001V22.0001C8 20.4001 8.6 19.0001 9.8 17.8001C11 16.6001 12.4 16.0001 14 16.0001H82C83.6 16.0001 85 16.6001 86.2 17.8001C87.4 19.0001 88 20.4001 88 22.0001V74.0001C88 75.6001 87.4 77.0001 86.2 78.2001C85 79.4001 83.6 80.0001 82 80.0001H14ZM14 74.0001H82V22.0001H14V74.0001Z",
                  fillRule: "nonzero",
                  fill: "rgba(191,25,72,1)",
                },
              ]}
            />
          }
          title="Licensed and Trusted Professionals"
          description="As a licensed residential builder in Michigan, we bring extensive expertise and professionalism to every project. You can trust us to deliver results that meet the highest industry standards, whether you're tackling a renovation, repair, or a brand-new build."
        />

        {/* 2nd card */}
        <ServiceCard
          icon={
            <Icon
              width="96px"
              height="96px"
              alignSelf="center"
              viewBox={{ minX: 0, minY: 0, width: 96, height: 96 }}
              paths={[
                {
                  d: "M29.8 84V78H45V63.2C41.4 62.4667 38.2 60.9167 35.4 58.55C32.6 56.1833 30.6667 53.2333 29.6 49.7C24.6667 49.1667 20.5 47.1667 17.1 43.7C13.7 40.2333 12 36.0667 12 31.2V26.8C12 25.1333 12.5833 23.7167 13.75 22.55C14.9167 21.3833 16.3333 20.8 18 20.8H28.4V12H67.6V20.8H78C79.6667 20.8 81.0833 21.3833 82.25 22.55C83.4167 23.7167 84 25.1333 84 26.8V31.2C84 36.0667 82.3 40.2333 78.9 43.7C75.5 47.1667 71.3333 49.1667 66.4 49.7C65.3333 53.2333 63.4 56.1833 60.6 58.55C57.8 60.9167 54.6 62.4667 51 63.2V78H66.2V84H29.8ZM28.4 43.4V26.8H18V31.2C18 34.2 18.9833 36.8167 20.95 39.05C22.9167 41.2833 25.4 42.7333 28.4 43.4ZM48 57.5C51.8 57.5 55.0167 56.1667 57.65 53.5C60.2833 50.8333 61.6 47.6 61.6 43.8V18H34.4V43.8C34.4 47.6 35.7167 50.8333 38.35 53.5C40.9833 56.1667 44.2 57.5 48 57.5ZM67.6 43.4C70.6 42.7333 73.0833 41.2833 75.05 39.05C77.0167 36.8167 78 34.2 78 31.2V26.8H67.6V43.4Z",
                  fillRule: "nonzero",
                  fill: "rgba(191,25,72,1)",
                },
              ]}
            />
          }
          title="What Sets Us Apart"
          description="What sets us apart is our ability to handle urgent, quick-fix repairs required for real estate closings, ensuring your projects stay on track. We specialize in fast, affordable construction solutions that cater to both homeowners and realtors, helping you meet deadlines and compliance requirements without sacrificing quality."
        />
      </Flex>

      {/* Last two cards container */}
      <Flex
        gap="64px"
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
                  d: "M47.5 82.0001C47.8333 82.0001 48.2167 81.9168 48.65 81.7501C49.0833 81.5834 49.4333 81.3668 49.7 81.1001L83.4 47.3001C84.2667 46.4334 84.9167 45.4444 85.35 44.3331C85.7833 43.2224 86 42.1114 86 41.0001C86 39.8668 85.7833 38.7334 85.35 37.6001C84.9167 36.4668 84.2667 35.4668 83.4 34.6001L65.4 16.6001C64.5333 15.7334 63.5333 15.0834 62.4 14.6501C61.2667 14.2168 60.1333 14.0001 59 14.0001C57.8887 14.0001 56.7777 14.2168 55.667 14.6501C54.5557 15.0834 53.5667 15.7334 52.7 16.6001L50.9 18.4001L59 26.6001C59.8667 27.5334 60.6333 28.6168 61.3 29.8501C61.9667 31.0834 62.3 32.4334 62.3 33.9001C62.3 36.4334 61.3167 38.6668 59.35 40.6001C57.3833 42.5334 55.1333 43.5001 52.6 43.5001C50.9333 43.5001 49.55 43.2501 48.45 42.7501C47.35 42.2501 46.3437 41.5388 45.431 40.6161L38.1 33.3001L20 51.4001C19.6667 51.7334 19.4333 52.0844 19.3 52.4531C19.1667 52.8211 19.1 53.2158 19.1 53.6371C19.1 54.4791 19.3833 55.1834 19.95 55.7501C20.5167 56.3168 21.2223 56.6001 22.067 56.6001C22.489 56.6001 22.8833 56.5001 23.25 56.3001C23.6167 56.1001 23.9333 55.8668 24.2 55.6001L38 41.8001L42.2 46.0001L28.5 59.7001C28.1667 60.0334 27.9333 60.4001 27.8 60.8001C27.6667 61.2001 27.6 61.6001 27.6 62.0001C27.6 62.8001 27.9 63.5001 28.5 64.1001C29.1 64.7001 29.8 65.0001 30.6 65.0001C31 65.0001 31.3833 64.9168 31.75 64.7501C32.1167 64.5834 32.4333 64.3668 32.7 64.1001L46.5 50.3001L50.7 54.5001L37 68.2001C36.7333 68.4668 36.5167 68.8111 36.35 69.2331C36.1833 69.6558 36.1 70.0781 36.1 70.5001C36.1 71.3001 36.4 72.0001 37 72.6001C37.6 73.2001 38.3 73.5001 39.1 73.5001C39.5 73.5001 39.8667 73.4334 40.2 73.3001C40.5333 73.1668 40.8667 72.9334 41.2 72.6001L55 58.8001L59.2 63.0001L45.4 76.8001C45.0667 77.1334 44.8333 77.5001 44.7 77.9001C44.5667 78.3001 44.5 78.6668 44.5 79.0001C44.5 79.9334 44.7667 80.6668 45.3 81.2001C45.8333 81.7334 46.5667 82.0001 47.5 82.0001ZM47.506 88.0001C45.302 88.0001 43.3333 87.1834 41.6 85.5501C39.8667 83.9168 38.8333 81.8961 38.5 79.4881C36.2333 79.1628 34.3333 78.2334 32.8 76.7001C31.2667 75.1668 30.3333 73.2668 30 71.0001C27.7333 70.6668 25.85 69.7168 24.35 68.1501C22.85 66.5834 21.9333 64.7001 21.6 62.5001C19.1333 62.1668 17.1 61.1668 15.5 59.5001C13.9 57.8334 13.1 55.8334 13.1 53.5001C13.1 52.3668 13.324 51.2318 13.772 50.0951C14.2207 48.9584 14.8633 47.9601 15.7 47.1001L38.1 24.7001L49.1 35.7001C49.6333 36.2334 50.211 36.6501 50.833 36.9501C51.4557 37.2501 52.078 37.4001 52.7 37.4001C53.5667 37.4001 54.3833 37.0168 55.15 36.2501C55.9167 35.4834 56.3 34.6618 56.3 33.7851C56.3 33.3951 56.1833 32.9501 55.95 32.4501C55.7167 31.9501 55.3333 31.4334 54.8 30.9001L40.5 16.6001C39.6333 15.7334 38.6333 15.0834 37.5 14.6501C36.3667 14.2168 35.2333 14.0001 34.1 14.0001C32.9887 14.0001 31.8777 14.2168 30.767 14.6501C29.6557 15.0834 28.6687 15.7288 27.806 16.5861L12.6 31.8001C11.6667 32.7334 11.0167 33.7168 10.65 34.7501C10.2833 35.7834 10.0667 36.9501 10 38.2501C9.93333 39.5501 10.1833 40.8168 10.75 42.0501C11.3167 43.2834 12 44.4001 12.8 45.4001L8.5 49.7001C7.16667 48.2334 6.08333 46.4668 5.25 44.4001C4.41667 42.3334 4 40.2334 4 38.1001C4 36.1001 4.38333 34.1834 5.15 32.3501C5.91667 30.5168 7 28.9001 8.4 27.5001L23.5 12.4001C24.9667 10.9334 26.6263 9.8501 28.479 9.1501C30.3323 8.4501 32.2323 8.1001 34.179 8.1001C36.1263 8.1001 38.0167 8.4501 39.85 9.1501C41.6833 9.8501 43.3333 10.9334 44.8 12.4001L46.6 14.2001L48.4 12.4001C49.8667 10.9334 51.5263 9.8501 53.379 9.1501C55.2323 8.4501 57.1323 8.1001 59.079 8.1001C61.0263 8.1001 62.9167 8.4501 64.75 9.1501C66.5833 9.8501 68.2333 10.9334 69.7 12.4001L87.6 30.3001C89.0667 31.7668 90.1667 33.4344 90.9 35.3031C91.6333 37.1724 92 39.0724 92 41.0031C92 42.9344 91.6333 44.8168 90.9 46.6501C90.1667 48.4834 89.0667 50.1334 87.6 51.6001L53.9 85.3001C53.0333 86.1668 52.049 86.8334 50.947 87.3001C49.845 87.7668 48.698 88.0001 47.506 88.0001Z",
                  fillRule: "nonzero",
                  fill: "rgba(191,25,72,1)",
                },
              ]}
            />
          }
          title="Our Commitment to You"
          description="Our commitment to customer satisfaction means we always prioritize clear communication, top-quality workmanship, and timely completion of every project. Whether you're a homeowner looking to upgrade your space or a realtor needing fast repairs to close a deal, we're here to make the construction process stress-free and straightforward."
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
                  d: "M76.8 83.9999L51.7 58.8999L57.4 53.1999L82.5 78.2999L76.8 83.9999ZM18.7 83.9999L13 78.2999L42 49.2999L31.3 38.5999L29 40.8999L24.6 36.4999V44.9999L22.2 47.3999L10 35.1999L12.4 32.7999H21L16.2 27.9999L29.3 14.8999C30.4333 13.7666 31.6667 12.9999 33 12.5999C34.3333 12.1999 35.8 11.9999 37.4 11.9999C39 11.9999 40.4667 12.2832 41.8 12.8499C43.1333 13.4166 44.3667 14.2666 45.5 15.3999L34.8 26.0999L39.6 30.8999L37.2 33.2999L47.6 43.6999L59.8 31.4999C59.2667 30.6332 58.85 29.6332 58.55 28.4999C58.25 27.3666 58.1 26.1666 58.1 24.8999C58.1 21.3666 59.3833 18.3166 61.95 15.7499C64.5167 13.1832 67.5667 11.8999 71.1 11.8999C72.1 11.8999 72.95 11.9999 73.65 12.1999C74.35 12.3999 74.9333 12.6666 75.4 12.9999L66.9 21.4999L74.4 28.9999L82.9 20.4999C83.2333 21.0332 83.5167 21.6832 83.75 22.4499C83.9833 23.2166 84.1 24.0999 84.1 25.0999C84.1 28.6332 82.8167 31.6832 80.25 34.2499C77.6833 36.8166 74.6333 38.0999 71.1 38.0999C69.9 38.0999 68.8667 38.0166 68 37.8499C67.1333 37.6832 66.3333 37.4332 65.6 37.0999L18.7 83.9999Z",
                  fillRule: "nonzero",
                  fill: "rgba(191,25,72,1)",
                },
              ]}
            />
          }
          title="Our Expertise and Experience"
          description="With years of experience, we've handled projects of all sizes, from modern kitchen makeovers to quick fixes for closings. Our skilled team uses the latest techniques and materials to deliver high-quality results. When you work with us, you're choosing a partner who values excellence and attention to detail."
        />
      </Flex>
    </Flex>
  );
}
