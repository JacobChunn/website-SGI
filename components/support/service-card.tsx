// ServiceCard.tsx
import { Flex, Text } from '@aws-amplify/ui-react';
import { ReactNode } from 'react';

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Flex
      gap="16px"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      grow="1"
      shrink="1"
      basis="0"
      position="relative"
      padding="0px 16px 0px 16px"
    >
      {/* <Flex width="96px" height="96px" shrink="0" position="relative"> */}
        {icon}
      {/* </Flex> */}
      <Text
        fontSize="32px"
        fontWeight="700"
        color="rgba(33,39,42,1)"
        lineHeight="35.20000076293945px"
        textAlign="center"
        display="block"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        whiteSpace="pre-wrap"
      >
        {title}
      </Text>
      <Text
        fontSize="18px"
        fontWeight="400"
        //maxWidth="320px"
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
  );
}
