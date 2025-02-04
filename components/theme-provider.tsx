"use client"

import { ThemeProvider as AmplifyThemeProvider, Theme } from "@aws-amplify/ui-react"
import { ComponentProps } from "react";

type ThemeProviderProps = ComponentProps<typeof AmplifyThemeProvider>;

interface MyThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

const customTheme: Theme = {
  name: 'custom-theme',
  tokens: {
    components: {
      button: {
        color: { value: '#ffffff' },
        borderRadius: { value: '0px' },
        borderWidth: { value: '0px' },
        lineHeight: { value: '24px' },

        paddingBlockStart: { value: '16px' },
        paddingBlockEnd: { value: '16px' },
        paddingInlineStart: { value: '32px' },
        paddingInlineEnd: { value: '32px' },
        
        primary: {
          backgroundColor: { value: 'rgb(191,25,72)' },
          
          
          _hover: {
            backgroundColor: { value: 'rgb(153,20,57)' },
            //borderColor: { value: 'rgb(0,0,0)' },
          },

          _active: {
            backgroundColor: { value: 'rgb(110,15,42)' },
            //borderColor: { value: 'rgb(0,0,0)' },
            
          },
          
          _focus: {
            backgroundColor: { value: 'rgb(153,20,57)' },
            borderColor: { value: 'rgb(0,0,0)' },
            boxShadow: { value: 'rgb(0,0,0)' },
          },
        },
      },
    },
  },
}

export default function ThemeProvider({
  children,
  ...props
}: MyThemeProviderProps) {
  return <AmplifyThemeProvider theme={customTheme} {...props}>
    {children}
  </AmplifyThemeProvider>
}