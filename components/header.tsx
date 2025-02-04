import { Flex, Image, Text } from '@aws-amplify/ui-react';
import MenuItem from './menu-item';
import Link from 'next/link';

interface HeaderProps {

}

export default function Header({

}: HeaderProps) {

  return (
    <Flex
      gap="24px"
      direction="row"
      width="100%"
      maxWidth='1440px'
      height="58px"
      justifyContent="flex-start"
      alignItems="center"
      shrink="0"
      position="sticky"
      // borderBottom="1px SOLID rgba(232,236,240,1)"
      padding="4px 79px 4px 79px"
      backgroundColor="rgba(191,25,72,1)"
      style={{ 
        borderBottom: "1px solid rgba(232,236,240,1)",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo Image */}
      <Flex
        gap="10px"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
      >
        
        <Link href="/">
          <Image
            width="135px"
            height="48px"
            display="block"
            shrink="0"
            position="relative"
            objectFit="cover"
            alt="Logo Image"
            src='/SGI-Logo-Horiz.png'
          />
        </Link>
      </Flex>
      
      <Flex
        gap="16px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
      >
        <MenuItem
          gap="8px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="12px 8px 12px 8px"
          href="/"
        >
          <Text
            ////fontFamily="Roboto"
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
            Home
          </Text>
        </MenuItem>
        <MenuItem
          gap="8px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="12px 8px 12px 8px"
          href="/services"
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
            Services
          </Text>
        </MenuItem>
        <MenuItem
          gap="8px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="12px 8px 12px 8px"
          href="/company"
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
            Company
          </Text>
        </MenuItem>
        <MenuItem
          gap="8px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="12px 8px 12px 8px"
          href="/contact"
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
            Contact
          </Text>
        </MenuItem>
      </Flex>
    </Flex>
  );
}