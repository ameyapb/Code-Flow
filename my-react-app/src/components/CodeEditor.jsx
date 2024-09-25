import { Box } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import {Editor} from "@monaco-editor/react"
import { LanguageSelector } from './LanguageSelector.jsx'
import { CODE_SNIPPETS } from "../constants.js";

const CodeEditor = () => {
    const editorRef = useRef("")
    const [value, setValue] = useState("")
    const [language, setLanguage] = useState("JavaScript")

    const onMount = (editor) => {
        editorRef.current = editor
        editor.focus()
    }

    const onSelect = (language) => {
        setLanguage(language)
        setValue(
            CODE_SNIPPETS[language]
        )
    }

    return (
        <Box>
            <LanguageSelector language={language} onSelect={onSelect}/>
            <Editor
                theme="vs-dark"
                height="75vh" 
                language={language} 
                defaultValue="// some comment" 
                value={value}
                onChange={
                    (value) => setValue(value)
                }
                onMount={
                    onMount
                }
            />
        </Box>
    )
}

export default CodeEditor