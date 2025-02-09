import { Flex, Text, Image } from '@aws-amplify/ui-react';

interface ServiceSectionProps {
  contentSide: "left" | "right";
  title: string;
  description: string;
  imgPath: string;
  bgCol: "light" | "med" | "dark";
}

const bgColMap: { [key: string]: string } = {
  light: "#FFFFFF",
  med: "#F2F4F8",
  dark: "#E8ECF0",
};

export default function ServiceSection({
  contentSide,
  title,
  description,
  imgPath,
  bgCol
}: ServiceSectionProps) {

  const dir = contentSide == "left" ? "row" : "row-reverse"

  return (
  <Flex
    gap="80px"
    direction={{base: "column", small: "column", medium:"column", large: dir}}
    width="100%"
    justifyContent="flex-start"
    alignItems="stretch"
    position="relative"
    padding="80px 80px 80px 80px"
    backgroundColor={bgColMap[bgCol]}
  >
  
    {/* Text Container */}
    <Flex
      gap="48px"
      direction="column"
      justifyContent="flex-start"
      //alignItems="flex-start"
      flex="1"
      //shrink="1"
      //grow="1"
      //basis="0"
      alignSelf="stretch"
      position="relative"
      padding="32px 0px 32px 0px"
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
        alignSelf="center"
        position="relative"
        whiteSpace="pre-wrap"
      >
        {title}
      </Text>
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
    </Flex>

    <Image
      src={imgPath}
      width="511px"
      height="233px"
      //flex="1"
      alignSelf="center"
      shrink="1"
      //grow="1"
      objectFit="cover"
      alt=""
    />

  </Flex>
  )
}