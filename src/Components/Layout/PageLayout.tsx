// Libraries
import { ReactElement } from 'react';

// Components
import { Box } from '@chakra-ui/react';

/**
 * TODO: Create multiples layout components for each page
 * - Authentication
 * - Profile form
 * - Profile details
 * - Dashboard
 * - Exam detail
 */

const PageLayout = ({ children, h }: { children: ReactElement; h?: string }) => {
  return (
    <main>
      {/* TODO: Navbar component */}
      <Box
        h={h}
        bgGradient='linear(to-b, cyan.500 0, cyan.500 24px, cyan.400 0, cyan.400 262px, grey.50 0)'
      >
        <Box
          mx='auto'
          w={{ xl: 'container.xl', md: 'container.md' }}
        >
          {children}
        </Box>
      </Box>
    </main>
  );
};

export default PageLayout;
