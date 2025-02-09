"use client"
import { Text } from "@aws-amplify/ui-react"

import { useState, useEffect } from "react";

const FooterContactText = () => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(window.innerWidth > 1299);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1149);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Text
      fontSize="42px"
      fontWeight="700"
      color="rgba(255,255,255,1)"
      lineHeight="46.20000076293945px"
      textAlign="left"
      display="block"
      width="817px"
      height="52px"
      position="absolute"
      top="36px"
      left="14px"
      whiteSpace="pre-wrap"
    >
      {"Still Have Questions?" + (isWideScreen ? " We're here to help!" : "")}
    </Text>
  );
};

export default FooterContactText;
