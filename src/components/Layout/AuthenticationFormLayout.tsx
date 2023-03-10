//Components
import { Box } from '@chakra-ui/react';
import PageLayout from '@components/Layout/PageLayout';
import type { ReactElement } from 'react';

const AuthenticationFormLayout = ({ children }: { children: ReactElement }) => {
  return (
    <PageLayout h='100vh'>
      <Box
        w='600px'
        mx='auto'
        transform='translateY(110px)'
      >
        {children}
      </Box>
    </PageLayout>
  );
};

export default AuthenticationFormLayout;
