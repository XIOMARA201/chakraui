import React from 'react'
import { Box, Image, Flex, Spacer, HStack, Button } from '@chakra-ui/react'

export default function Header() {
  return (
    <div>
        <Flex align="center" p={4} color="white" position="relative">
           <HStack spacing={4} align="center" w="100%">
            <Image src="src\image\xiomara.jpg" alt="Imagen de encabezado" w="700px" h="100%" css={{ outline: 'none' }} />
            <Spacer />
          </HStack>
          <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        fontSize="24px"
        fontWeight="bold"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        color="white"
      >
        El espejo del agua refleja la progresión
        <HStack spacing={2} mt={4} justifyContent="center">
          <Button
            border="2px solid"
            borderColor="blue.300"
            bg="transparent"
            color="blue.300"
            _hover={{ bg: 'white', color: 'blue.500' }}
          >
            Ver Detalles
          </Button>
          <Button
            border="2px solid"
            borderColor="blue.300"
            bg="transparent"
            color="blue.300"
            _hover={{ bg: 'white', color: 'blue.500' }}
          >
            Ver Video
          </Button>
        </HStack>
      </Box>
        </Flex>
    </div>
  )
}
