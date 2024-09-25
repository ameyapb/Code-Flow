import React from 'react'
import {Box} from '@chakra-ui/react'
import CodeEditor from './components/CodeEditor'
import { Footer } from './components/Footer'

function App() {
   
  return <Box
            minH="100vh" 
            bg='#0f0a19' 
            color='grey.500' 
            px={6} 
            py={6} 
            display="flex" 
            flexDirection="column"
            >
              <Box flex="1">
                <CodeEditor />
              </Box>
              
              <Footer />
          </Box>
}

export default App
