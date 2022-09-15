import React from 'react';
import { Box, Flex, Button, Heading, useDisclosure } from '@chakra-ui/react';
// navigation menu it has nothing on it
export const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex position='sticky' top={0} zIndex={1} p={4} bg='#e85e38'>
      <Flex maxW={800} align='center' flex={1} m='auto'>
        <Heading>Blockchain Voting System</Heading>
        <Box ml='auto'>
        </Box>
      </Flex>
    </Flex>
  );
};
