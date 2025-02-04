"use client"
import { FlexProps, Flex } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";

interface DynamicFlexProps extends FlexProps {
  sizes: [number, string][]; // Array of tuples: [screen width, padding]
  children: React.ReactNode;
}

const DynamicFlex = ({ sizes, children, ...props }: DynamicFlexProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine the appropriate font size based on screen width
  const getSize = () => {
    let size = "0px"; // Default font size
    
    for (let [width, padding] of sizes) {
      if (windowWidth >= width) {
        size = padding;
      } else {
        break;
      }
    }
    return size;
  };

  return (
    <Flex
      padding={getSize()}
      //lineHeight={}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default DynamicFlex;