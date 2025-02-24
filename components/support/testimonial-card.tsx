import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import Image from 'next/image'

const defaultContent = "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."


export type Platform = "google"

export type TestimonialCardType = {
  platform: Platform
  content?: string,
  author?: string,
  pfpPath?: string,
  pfpType?: "image" | "icon"
}

const googleIcon = (
  <Image
    src="/Google.svg"
    alt="Google"
    width="117"
    height="32"
  />
);

const platformIcons: Record<TestimonialCardType["platform"], React.ReactNode> = {
  google: googleIcon
}

export default function TestimonialCard({
  platform,
  content = defaultContent,
  author = "Author Name",
  pfpPath = "/person-icon.svg"
}: TestimonialCardType) {
  const pfp = (
    <Image
      src={pfpPath}
      alt="Profile Picture"
      width={24}
      height={24}
    />
  )
  
  return (
    <Flex
      gap="16px"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      flex="1"
      position="relative"
      border="1px SOLID rgba(232,236,240,1)"
      padding={{base: "10px 10px 10px 10px", small: "23px 23px 23px 23px"}}
      backgroundColor="rgba(255,255,255,1)"
    >
      <Flex
        gap="8px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        //boxShadow="-8px -4px 32px rgba(0, 0, 0, 0.07999999821186066)"
        //borderRadius="16px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
      >
        <Flex
          gap="32px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
        >
          <Flex
            gap="0"
            direction="row"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{"minX":0,"minY":0,"width":56,"height":56}}
              paths={[{"d":"M26.2089 3.60489 C26.9443 2.12477 29.0557 2.12478 29.7911 3.60489 L35.7971 15.6929 C36.0883 16.279 36.6479 16.6856 37.2953 16.7814 L50.6477 18.7581 C52.2826 19.0001 52.935 21.0082 51.7546 22.1649 L42.1142 31.6124 C41.6467 32.0705 41.433 32.7283 41.5419 33.3736 L43.7881 46.6833 C44.0632 48.313 42.355 49.554 40.8901 48.7888 L28.926 42.5397 C28.3458 42.2366 27.6542 42.2366 27.074 42.5396 L15.11 48.7888 C13.645 49.554 11.9368 48.313 12.2119 46.6833 L14.4581 33.3736 C14.567 32.7283 14.3533 32.0705 13.8858 31.6124 L4.24539 22.1649 C3.06497 21.0081 3.71743 19.0001 5.35235 18.7581 L18.7047 16.7814 C19.3521 16.6856 19.9117 16.279 20.2029 15.6929 L26.2089 3.60489 Z","fill":"rgba(254,165,0,1)","fillRule":"nonzero"}]}
              display="block"
              //position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
            />
            <Icon
              width="56px"
              height="56px"
              viewBox={{"minX":0,"minY":0,"width":56,"height":56}}
              paths={[{"d":"M26.2089 3.60489 C26.9443 2.12477 29.0557 2.12478 29.7911 3.60489 L35.7971 15.6929 C36.0883 16.279 36.6479 16.6856 37.2953 16.7814 L50.6477 18.7581 C52.2826 19.0001 52.935 21.0082 51.7546 22.1649 L42.1142 31.6124 C41.6467 32.0705 41.433 32.7283 41.5419 33.3736 L43.7881 46.6833 C44.0632 48.313 42.355 49.554 40.8901 48.7888 L28.926 42.5397 C28.3458 42.2366 27.6542 42.2366 27.074 42.5396 L15.11 48.7888 C13.645 49.554 11.9368 48.313 12.2119 46.6833 L14.4581 33.3736 C14.567 32.7283 14.3533 32.0705 13.8858 31.6124 L4.24539 22.1649 C3.06497 21.0081 3.71743 19.0001 5.35235 18.7581 L18.7047 16.7814 C19.3521 16.6856 19.9117 16.279 20.2029 15.6929 L26.2089 3.60489 Z","fill":"rgba(254,165,0,1)","fillRule":"nonzero"}]}
              display="block"
              //position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
            />
            <Icon
              width="56px"
              height="56px"
              viewBox={{"minX":0,"minY":0,"width":56,"height":56}}
              paths={[{"d":"M26.2089 3.60489 C26.9443 2.12477 29.0557 2.12478 29.7911 3.60489 L35.7971 15.6929 C36.0883 16.279 36.6479 16.6856 37.2953 16.7814 L50.6477 18.7581 C52.2826 19.0001 52.935 21.0082 51.7546 22.1649 L42.1142 31.6124 C41.6467 32.0705 41.433 32.7283 41.5419 33.3736 L43.7881 46.6833 C44.0632 48.313 42.355 49.554 40.8901 48.7888 L28.926 42.5397 C28.3458 42.2366 27.6542 42.2366 27.074 42.5396 L15.11 48.7888 C13.645 49.554 11.9368 48.313 12.2119 46.6833 L14.4581 33.3736 C14.567 32.7283 14.3533 32.0705 13.8858 31.6124 L4.24539 22.1649 C3.06497 21.0081 3.71743 19.0001 5.35235 18.7581 L18.7047 16.7814 C19.3521 16.6856 19.9117 16.279 20.2029 15.6929 L26.2089 3.60489 Z","fill":"rgba(254,165,0,1)","fillRule":"nonzero"}]}
              display="block"
              //position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
            />
            <Icon
              width="56px"
              height="56px"
              viewBox={{"minX":0,"minY":0,"width":56,"height":56}}
              paths={[{"d":"M26.2089 3.60489 C26.9443 2.12477 29.0557 2.12478 29.7911 3.60489 L35.7971 15.6929 C36.0883 16.279 36.6479 16.6856 37.2953 16.7814 L50.6477 18.7581 C52.2826 19.0001 52.935 21.0082 51.7546 22.1649 L42.1142 31.6124 C41.6467 32.0705 41.433 32.7283 41.5419 33.3736 L43.7881 46.6833 C44.0632 48.313 42.355 49.554 40.8901 48.7888 L28.926 42.5397 C28.3458 42.2366 27.6542 42.2366 27.074 42.5396 L15.11 48.7888 C13.645 49.554 11.9368 48.313 12.2119 46.6833 L14.4581 33.3736 C14.567 32.7283 14.3533 32.0705 13.8858 31.6124 L4.24539 22.1649 C3.06497 21.0081 3.71743 19.0001 5.35235 18.7581 L18.7047 16.7814 C19.3521 16.6856 19.9117 16.279 20.2029 15.6929 L26.2089 3.60489 Z","fill":"rgba(254,165,0,1)","fillRule":"nonzero"}]}
              display="block"
              //position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
            />
            <Icon
              width="56px"
              height="56px"
              viewBox={{"minX":0,"minY":0,"width":56,"height":56}}
              paths={[{"d":"M26.2089 3.60489 C26.9443 2.12477 29.0557 2.12478 29.7911 3.60489 L35.7971 15.6929 C36.0883 16.279 36.6479 16.6856 37.2953 16.7814 L50.6477 18.7581 C52.2826 19.0001 52.935 21.0082 51.7546 22.1649 L42.1142 31.6124 C41.6467 32.0705 41.433 32.7283 41.5419 33.3736 L43.7881 46.6833 C44.0632 48.313 42.355 49.554 40.8901 48.7888 L28.926 42.5397 C28.3458 42.2366 27.6542 42.2366 27.074 42.5396 L15.11 48.7888 C13.645 49.554 11.9368 48.313 12.2119 46.6833 L14.4581 33.3736 C14.567 32.7283 14.3533 32.0705 13.8858 31.6124 L4.24539 22.1649 C3.06497 21.0081 3.71743 19.0001 5.35235 18.7581 L18.7047 16.7814 C19.3521 16.6856 19.9117 16.279 20.2029 15.6929 L26.2089 3.60489 Z","fill":"rgba(254,165,0,1)","fillRule":"nonzero"}]}
              display="block"
              //position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
            />
          </Flex>
        </Flex>
        {platformIcons[platform]}
        <Text
          //fontFamily="Roboto"
          fontSize="20px"
          fontWeight="700"
          color="rgba(66,133,244,1)"
          lineHeight="22px"
          textAlign="center"
          display="block"
          shrink="0"
          position="relative"
          whiteSpace="pre-wrap"
        >
          Customer Reviews
        </Text>
      </Flex>
      <Text
        //fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(33,39,42,1)"
        lineHeight="25.19999885559082px"
        textAlign="center"
        display="block"
        shrink="1"
        //alignSelf="stretch"
        position="relative"
        //whiteSpace="pre-wrap"
      >
        {"“" + content + "”"}
      </Text>
      <Flex
        gap="10px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="1"
        //alignSelf="stretch"
        position="relative"
      >
        <Flex
          gap="16px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
        >
          <Flex
            gap="10px"
            direction="row"
            width="48px"
            height="48px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="100px"
            backgroundColor="rgba(242,244,248,1)"
          >
            <Flex
              width="24px"
              height="24px"
              overflow="hidden"
              shrink="0"
              position="relative"
            >
            {pfp}
            </Flex>
          </Flex>
          
          <Flex
            gap="0"
            direction="column"
            //width="144px"
            //height="26px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
          >
            <Text
              //fontFamily="Roboto"
              fontSize="24px"
              fontWeight="700"
              color="rgba(33,39,42,1)"
              lineHeight="26.400001525878906px"
              textAlign="center"
              display="block"
              shrink="0"
              //alignSelf="stretch"
              position="relative"
              //whiteSpace="pre-wrap"
            >
              {author}
            </Text>
          </Flex>

        </Flex>
      </Flex>
    </Flex>
  )
}