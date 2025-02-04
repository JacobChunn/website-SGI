"use client"
import { Text, TextProps } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";

interface DynamicTextProps extends TextProps {
  sizes: [number, string][]; // Array of tuples: [screen width, font size]
  children: React.ReactNode;
}

const DynamicText = ({ sizes, children, ...props }: DynamicTextProps) => {
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
  const getFontSize = () => {
    let fontSize = "16px"; // Default font size
    
    for (let [width, size] of sizes) {
      if (windowWidth >= width) {
        fontSize = size;
      } else {
        break;
      }
    }
    return fontSize;
  };

  return (
    <Text
      fontSize={getFontSize()}
      //lineHeight={}
      {...props}
    >
      {children}
    </Text>
  );
};

export default DynamicText;