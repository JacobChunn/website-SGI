import { Flex, Text, Icon, Accordion } from '@aws-amplify/ui-react';

export default function Questions() {
  return (
  <Flex
    gap="64px"
    direction="column"
    width="100%"
    //maxWidth="1440px"
    justifyContent="flex-start"
    alignItems="center"
    position="relative"
    padding={{base: "80px 10px 80px 10px", small: "80px 80px 80px 80px"}}
    backgroundColor="rgba(242,244,248,1)"
  >
    {/* Title */}
    <Flex
      gap="48px"
      direction="column"
      width="100%"
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
          Frequently Asked Questions
        </Text>
      </Flex>
    </Flex>

    {/* Accordion */}
    <Accordion allowMultiple
      items={[
        {
          trigger: 'What types of construction services do you provide?',
          value: 'construction_services',
          content: 'We specialize in windows, doors, roofing, vinyl siding, kitchens, baths, and finished basements. Additionally, we offer quick, affordable solutions for FHA or bank-required repairs to help keep closings on track.'
        },
        {
          trigger: 'Are you a licensed contractor?',
          value: 'licensed_contractor',
          content: 'Yes! We are a licensed residential builder in the state of Michigan, qualified to handle all types of construction projects. You can count on us for compliant and professional work.'
        },
        {
          trigger: 'How quickly can you complete a project?',
          value: 'project_completion',
          content: 'We pride ourselves on fast turnaround times, especially for urgent needs like closing-related repairs. Depending on the scope of the project, we\'ll work with you to meet your deadlines without compromising quality.'
        },
        {
          trigger: 'Do you offer free quotes?',
          value: 'free_quotes',
          content: 'Absolutely! Contact us today for a no-obligation free quote. We\'ll assess your project and provide a detailed estimate tailored to your needs.'
        },
        {
          trigger: 'What if my project involves a bank or FHA compliance issue?',
          value: 'bank_fha_compliance',
          content: 'We specialize in completing repairs required by banks or FHA inspectors to ensure your closing isn\'t delayed. Whether it\'s windows, brickwork, or other fixes, we\'ll get the job done quickly and affordably.'
        },
        {
          trigger: 'Do you work with insurance companies for repairs following storm damage, water intrusion, fire damage, or mold issues?',
          value: 'insurance_repairs',
          content: 'Yes, we specialize in handling insurance claims for damages caused by storms, water, fire, and mold. Our experienced team works directly with your insurance provider to ensure that all necessary repairs are completed efficiently and to the highest standards, alleviating the stress of navigating the claims process.'
        },
        {
          trigger: 'Do you offer financing options?',
          value: 'financing',
          content: 'We understand that managing a large construction project can be a significant investment. That\'s why we offer flexible financing solutions that allow you to pay over a series of installments, so you don\'t have to compromise on quality while staying within your budget.'
        }
      ]}
      width="100%"
    />
    {/* <Flex
      gap="16px"
      direction="column"
      width="900px"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      position="relative"
    >
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(232,236,240,1)"
        padding="15px 15px 15px 15px"
        backgroundColor="rgba(255,255,255,1)"
      >
        <Flex
          gap="0"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="20px"
            fontWeight="700"
            color="rgba(33,39,42,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            What types of construction services do you provide?
          </Text>

            <Icon
              width="24px"
              height="24px"
              //viewBox={{"minX":0,"minY":0,"width":14,"height":2}}
              paths={[{"d":"M 1 0 L 13 0 C 13.265216499567032 1.3877787807814457e-16 13.519570216536522 0.1053568571805954 13.707106590270996 0.2928932309150696 C 13.89464296400547 0.48042960464954376 14 0.7347835004329681 14 1 C 14 1.2652164995670319 13.89464296400547 1.519570454955101 13.707106590270996 1.7071068286895752 C 13.519570216536522 1.8946432024240494 13.265216499567032 1.9999999999999998 13 2 L 1 2 C 0.7347835004329681 1.9999999999999998 0.48042960464954376 1.8946432024240494 0.2928932309150696 1.7071068286895752 C 0.1053568571805954 1.519570454955101 1.457167719820518e-16 1.2652164995670319 0 1 C 4.85722573273506e-17 0.7347835004329681 0.1053568571805954 0.48042960464954376 0.2928932309150696 0.2928932309150696 C 0.48042960464954376 0.1053568571805954 0.7347835004329681 3.0531133177191805e-16 1 5.551115123125783e-17 L 1 0 Z","fillRule":"nonzero"},{"d":"M1 0 L13 0 C13.2652 1.38778e-16 13.5196 0.105357 13.7071 0.292893 C13.8946 0.48043 14 0.734784 14 1 C14 1.26522 13.8946 1.51957 13.7071 1.70711 C13.5196 1.89464 13.2652 2 13 2 L1 2 C0.734784 2 0.48043 1.89464 0.292893 1.70711 C0.105357 1.51957 1.45717e-16 1.26522 0 1 C4.85723e-17 0.734784 0.105357 0.48043 0.292893 0.292893 C0.48043 0.105357 0.734784 3.05311e-16 1 5.55112e-17 L1 0 Z","fill":"rgba(33,39,42,1)","fillRule":"nonzero"}]}
              display="block"
              position="absolute"
              top="45.83%"
              bottom="45.83%"
              left="20.83%"
              right="20.83%"
            />

        </Flex>
        <Flex
          gap="0"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="16px"
            fontWeight="400"
            color="rgba(33,39,42,1)"
            lineHeight="22.399999618530273px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            We specialize in windows, doors, roofing, vinyl siding, kitchens, baths, and finished basements. Additionally, we offer quick, affordable solutions for FHA or bank-required repairs to help keep closings on track.
          </Text>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(232,236,240,1)"
        padding="15px 15px 15px 15px"
        backgroundColor="rgba(255,255,255,1)"
      >
        <Flex
          gap="0"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="20px"
            fontWeight="700"
            color="rgba(33,39,42,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Are you a licensed contractor?
          </Text>
          <Flex
            width="24px"
            height="24px"
            overflow="hidden"
            shrink="0"
            position="relative"
          >
            <Icon
              width="14px"
              height="2px"
              viewBox={{"minX":0,"minY":0,"width":14,"height":2}}
              paths={[{"d":"M 1 0 L 13 0 C 13.265216499567032 1.3877787807814457e-16 13.519570216536522 0.1053568571805954 13.707106590270996 0.2928932309150696 C 13.89464296400547 0.48042960464954376 14 0.7347835004329681 14 1 C 14 1.2652164995670319 13.89464296400547 1.519570454955101 13.707106590270996 1.7071068286895752 C 13.519570216536522 1.8946432024240494 13.265216499567032 1.9999999999999998 13 2 L 1 2 C 0.7347835004329681 1.9999999999999998 0.48042960464954376 1.8946432024240494 0.2928932309150696 1.7071068286895752 C 0.1053568571805954 1.519570454955101 1.457167719820518e-16 1.2652164995670319 0 1 C 4.85722573273506e-17 0.7347835004329681 0.1053568571805954 0.48042960464954376 0.2928932309150696 0.2928932309150696 C 0.48042960464954376 0.1053568571805954 0.7347835004329681 3.0531133177191805e-16 1 5.551115123125783e-17 L 1 0 Z","fillRule":"nonzero"},{"d":"M1 0 L13 0 C13.2652 1.38778e-16 13.5196 0.105357 13.7071 0.292893 C13.8946 0.48043 14 0.734784 14 1 C14 1.26522 13.8946 1.51957 13.7071 1.70711 C13.5196 1.89464 13.2652 2 13 2 L1 2 C0.734784 2 0.48043 1.89464 0.292893 1.70711 C0.105357 1.51957 1.45717e-16 1.26522 0 1 C4.85723e-17 0.734784 0.105357 0.48043 0.292893 0.292893 C0.48043 0.105357 0.734784 3.05311e-16 1 5.55112e-17 L1 0 Z","fill":"rgba(33,39,42,1)","fillRule":"nonzero"}]}
              display="block"
              position="absolute"
              top="45.83%"
              bottom="45.83%"
              left="20.83%"
              right="20.83%"
            />
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="16px"
            fontWeight="400"
            color="rgba(33,39,42,1)"
            lineHeight="22.399999618530273px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Yes! We are a licensed residential builder in the state of Michigan, qualified to handle all types of construction projects except plumbing and electrical. You can count on us for compliant and professional work.
          </Text>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(232,236,240,1)"
        padding="15px 15px 15px 15px"
        backgroundColor="rgba(255,255,255,1)"
      >
        <Flex
          gap="0"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="20px"
            fontWeight="700"
            color="rgba(33,39,42,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            How quickly can you complete a project?
          </Text>
          <Flex
            width="24px"
            height="24px"
            overflow="hidden"
            shrink="0"
            position="relative"
          >
            <Icon
              width="14px"
              height="2px"
              viewBox={{"minX":0,"minY":0,"width":14,"height":2}}
              paths={[{"d":"M 1 0 L 13 0 C 13.265216499567032 1.3877787807814457e-16 13.519570216536522 0.1053568571805954 13.707106590270996 0.2928932309150696 C 13.89464296400547 0.48042960464954376 14 0.7347835004329681 14 1 C 14 1.2652164995670319 13.89464296400547 1.519570454955101 13.707106590270996 1.7071068286895752 C 13.519570216536522 1.8946432024240494 13.265216499567032 1.9999999999999998 13 2 L 1 2 C 0.7347835004329681 1.9999999999999998 0.48042960464954376 1.8946432024240494 0.2928932309150696 1.7071068286895752 C 0.1053568571805954 1.519570454955101 1.457167719820518e-16 1.2652164995670319 0 1 C 4.85722573273506e-17 0.7347835004329681 0.1053568571805954 0.48042960464954376 0.2928932309150696 0.2928932309150696 C 0.48042960464954376 0.1053568571805954 0.7347835004329681 3.0531133177191805e-16 1 5.551115123125783e-17 L 1 0 Z","fillRule":"nonzero"},{"d":"M1 0 L13 0 C13.2652 1.38778e-16 13.5196 0.105357 13.7071 0.292893 C13.8946 0.48043 14 0.734784 14 1 C14 1.26522 13.8946 1.51957 13.7071 1.70711 C13.5196 1.89464 13.2652 2 13 2 L1 2 C0.734784 2 0.48043 1.89464 0.292893 1.70711 C0.105357 1.51957 1.45717e-16 1.26522 0 1 C4.85723e-17 0.734784 0.105357 0.48043 0.292893 0.292893 C0.48043 0.105357 0.734784 3.05311e-16 1 5.55112e-17 L1 0 Z","fill":"rgba(33,39,42,1)","fillRule":"nonzero"}]}
              display="block"
              position="absolute"
              top="45.83%"
              bottom="45.83%"
              left="20.83%"
              right="20.83%"
            />
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="16px"
            fontWeight="400"
            color="rgba(33,39,42,1)"
            lineHeight="22.399999618530273px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            We pride ourselves on fast turnaround times, especially for urgent needs like closing-related repairs. Depending on the scope of the project, we\'ll work with you to meet your deadlines without compromising quality.
          </Text>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(232,236,240,1)"
        padding="15px 15px 15px 15px"
        backgroundColor="rgba(255,255,255,1)"
      >
        <Flex
          gap="0"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="20px"
            fontWeight="700"
            color="rgba(33,39,42,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Do you offer free quotes?
          </Text>
          <Flex
            width="24px"
            height="24px"
            overflow="hidden"
            shrink="0"
            position="relative"
          >
            <Icon
              width="14px"
              height="2px"
              viewBox={{"minX":0,"minY":0,"width":14,"height":2}}
              paths={[{"d":"M 1 0 L 13 0 C 13.265216499567032 1.3877787807814457e-16 13.519570216536522 0.1053568571805954 13.707106590270996 0.2928932309150696 C 13.89464296400547 0.48042960464954376 14 0.7347835004329681 14 1 C 14 1.2652164995670319 13.89464296400547 1.519570454955101 13.707106590270996 1.7071068286895752 C 13.519570216536522 1.8946432024240494 13.265216499567032 1.9999999999999998 13 2 L 1 2 C 0.7347835004329681 1.9999999999999998 0.48042960464954376 1.8946432024240494 0.2928932309150696 1.7071068286895752 C 0.1053568571805954 1.519570454955101 1.457167719820518e-16 1.2652164995670319 0 1 C 4.85722573273506e-17 0.7347835004329681 0.1053568571805954 0.48042960464954376 0.2928932309150696 0.2928932309150696 C 0.48042960464954376 0.1053568571805954 0.7347835004329681 3.0531133177191805e-16 1 5.551115123125783e-17 L 1 0 Z","fillRule":"nonzero"},{"d":"M1 0 L13 0 C13.2652 1.38778e-16 13.5196 0.105357 13.7071 0.292893 C13.8946 0.48043 14 0.734784 14 1 C14 1.26522 13.8946 1.51957 13.7071 1.70711 C13.5196 1.89464 13.2652 2 13 2 L1 2 C0.734784 2 0.48043 1.89464 0.292893 1.70711 C0.105357 1.51957 1.45717e-16 1.26522 0 1 C4.85723e-17 0.734784 0.105357 0.48043 0.292893 0.292893 C0.48043 0.105357 0.734784 3.05311e-16 1 5.55112e-17 L1 0 Z","fill":"rgba(33,39,42,1)","fillRule":"nonzero"}]}
              display="block"
              position="absolute"
              top="45.83%"
              bottom="45.83%"
              left="20.83%"
              right="20.83%"
            />
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="16px"
            fontWeight="400"
            color="rgba(33,39,42,1)"
            lineHeight="22.399999618530273px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Absolutely! Contact us today for a no-obligation free quote. We'll assess your project and provide a detailed estimate tailored to your needs.
          </Text>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(232,236,240,1)"
        padding="15px 15px 15px 15px"
        backgroundColor="rgba(255,255,255,1)"
      >
        <Flex
          gap="0"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="20px"
            fontWeight="700"
            color="rgba(33,39,42,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            What if my project involves a bank or FHA compliance issue?
          </Text>
          <Flex
            width="24px"
            height="24px"
            overflow="hidden"
            shrink="0"
            position="relative"
          >
            <Icon
              width="14px"
              height="2px"
              viewBox={{"minX":0,"minY":0,"width":14,"height":2}}
              paths={[{"d":"M 1 0 L 13 0 C 13.265216499567032 1.3877787807814457e-16 13.519570216536522 0.1053568571805954 13.707106590270996 0.2928932309150696 C 13.89464296400547 0.48042960464954376 14 0.7347835004329681 14 1 C 14 1.2652164995670319 13.89464296400547 1.519570454955101 13.707106590270996 1.7071068286895752 C 13.519570216536522 1.8946432024240494 13.265216499567032 1.9999999999999998 13 2 L 1 2 C 0.7347835004329681 1.9999999999999998 0.48042960464954376 1.8946432024240494 0.2928932309150696 1.7071068286895752 C 0.1053568571805954 1.519570454955101 1.457167719820518e-16 1.2652164995670319 0 1 C 4.85722573273506e-17 0.7347835004329681 0.1053568571805954 0.48042960464954376 0.2928932309150696 0.2928932309150696 C 0.48042960464954376 0.1053568571805954 0.7347835004329681 3.0531133177191805e-16 1 5.551115123125783e-17 L 1 0 Z","fillRule":"nonzero"},{"d":"M1 0 L13 0 C13.2652 1.38778e-16 13.5196 0.105357 13.7071 0.292893 C13.8946 0.48043 14 0.734784 14 1 C14 1.26522 13.8946 1.51957 13.7071 1.70711 C13.5196 1.89464 13.2652 2 13 2 L1 2 C0.734784 2 0.48043 1.89464 0.292893 1.70711 C0.105357 1.51957 1.45717e-16 1.26522 0 1 C4.85723e-17 0.734784 0.105357 0.48043 0.292893 0.292893 C0.48043 0.105357 0.734784 3.05311e-16 1 5.55112e-17 L1 0 Z","fill":"rgba(33,39,42,1)","fillRule":"nonzero"}]}
              display="block"
              position="absolute"
              top="45.83%"
              bottom="45.83%"
              left="20.83%"
              right="20.83%"
            />
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            //fontFamily="Roboto"
            fontSize="16px"
            fontWeight="400"
            color="rgba(33,39,42,1)"
            lineHeight="22.399999618530273px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            We specialize in completing repairs required by banks or FHA inspectors to ensure your closing isn\'t delayed. Whether it\'s windows, brickwork, or other fixes, we\'ll get the job done quickly and affordably.
          </Text>
        </Flex>
      </Flex>
    </Flex> */}
  </Flex>
  )
}