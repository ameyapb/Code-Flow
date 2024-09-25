import React from "react";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Wrap, WrapItem, Avatar, Flex} from "@chakra-ui/react"
import avatarImageCat from '../images/bossCat.png'

export const NavBar = () => {
    return (
        <Box 
            bg="#1b1d22"
            w="100%" 
            p={2} 
            color="white" 
            opacity={0.9} 
            position="fixed" 
            top={0} 
            left={0} 
            zIndex={1}
            boxShadow='dark-lg'
            > 
            <Flex ml={2} mb={4} justifyContent="space-between" alignItems="center">
                <Breadcrumb spacing='12px' separator=' > '>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>About</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Source Code</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Wrap>
                    <WrapItem>
                        <Avatar size='md' name='Boss Dan' src={avatarImageCat} />
                    </WrapItem>
                </Wrap>
            </Flex>
        </Box>
        
    )
}

export default NavBar