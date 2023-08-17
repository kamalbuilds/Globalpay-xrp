import * as React from 'react';

import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

import Container from '@/components/Container';
import Layout from '@/components/layout';

// TODO
// Before you begin editing, follow all comments with `TODO`,
// to customize the default starter configuration.
const HomePage = () => {
  return (
    <Layout>
      <Container as='main'>
        <VStack
          as='section'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
        >
          <Heading as='h1' color='primary' textAlign='center'>
            Global CBDC Store 
          </Heading>
          <HStack>

          </HStack>
        </VStack>
      </Container>
    </Layout>
  );
};

export default HomePage;
