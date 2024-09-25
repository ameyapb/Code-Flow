import { Box, Button, Text } from "@chakra-ui/react"
import React from "react"

export const Output = () => {
    return (
        <Box w='50%'>
            <Text mb={2} fontSize='lg'>
                output
            </Text>
            <Button 
                variant='outline'
                colorScheme="green"
                mb={4}
            >
                Run Code
            </Button>
            <Box
                height='75vh'
                p={2}
                border='1px solid'
                borderRadius={4}
                borderColor="#333"
            >test</Box>


        </Box>
    )
}