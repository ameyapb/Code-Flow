import { Box, Text, Link, HStack } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box 
      bg="#1b1d22"
      color="white" 
      py={4} 
      px={8} 
      w="100%" 
      mt="auto"
      opacity={0.9}
      marginBottom="0"
      >
        <HStack justifyContent="space-between">
          
          <Text>© {new Date().getFullYear()} Ameya Patil. All rights reserved.</Text>

          <HStack spacing={4}>
            <Link href="https://github.com/yourusername" isExternal>
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/yourprofile" isExternal>
              LinkedIn
            </Link>
            <Link href="https://twitter.com/yourusername" isExternal>
              Twitter
            </Link>
          </HStack>
        </HStack>
    </Box>
  );
};

export default Footer;
