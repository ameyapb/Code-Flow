import { Box } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import {Editor} from "@monaco-editor/react"
import { LanguageSelector } from './LanguageSelector.jsx'

const CodeEditor = () => {
    const editorRef = useRef("")
    const [value, setValue] = useState('')

    const onMount = (editor) => {
        editorRef.current = editor
        editor.focus()
    }

    return (
        <Box>
            <LanguageSelector />
            <Editor
                theme="vs-dark"
                height="75vh" 
                defaultLanguage="javascript" 
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