import { Box } from '@chakra-ui/react';




export const Wrappper = ({
  children,
  variant = 'regular'
}) => {
  return (
    <Box
      maxW={variant === 'regular' ? '800px' : '400px'}
      w='100%'
      mt={8}
      mx='auto'
    >
      {children}
    </Box>
  );
};
