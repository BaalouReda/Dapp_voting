import { Box, Image, Heading } from '@chakra-ui/react';
import React from 'react';

const Result =({
  voteNumber,
  candidateHeading
}) => {
  return (
    <>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Heading as='h4' size='md' ml='8'>
          {candidateHeading}
        </Heading>
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Box letterSpacing='wide' fontSize='md' ml='2'>
              Total Vote: {voteNumber}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { Result };
