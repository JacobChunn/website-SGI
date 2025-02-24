import { Flex, Text } from '@aws-amplify/ui-react';


export type SectionTitleType = {
  title: string,
  subtitle?: string
}

export default function SectionTitle({
  title,
  subtitle
}: SectionTitleType) {

  return (
    <Flex
      gap="48px"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      padding="20px"
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
        {title}
      </Text>
      {subtitle ?
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
          {subtitle}
        </Text>
        : null
      }
    </Flex>
  )
}