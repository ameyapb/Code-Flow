import { Box, Text, MenuButton, Menu, Button, MenuList, MenuItem } from "@chakra-ui/react";
import {LANGUAGE_VERSIONS} from '../constants.js'
import React from "react";

const languages = Object.entries(LANGUAGE_VERSIONS)

export const LanguageSelector = ({language, onSelect}) => {
    return (
        <Box>
            <Text mb={2} fontSize='lg'>
                Language:
            </Text>
            <Menu>
                <MenuButton as={Button} >
                    {language}
                </MenuButton>
                <MenuList>
                    {
                        languages.map(([language, version]) => (
                            <MenuItem key={language} onClick={() => onSelect(language)}>
                                {language}
                                &nbsp;
                                <Text as="span" color='grey.600' fontSize="sm">
                                    {version}
                                </Text>
                            </MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </Box>
    )
}

export default LanguageSelector