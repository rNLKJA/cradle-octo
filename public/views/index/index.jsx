import React, { useState } from "react";
import DefaultLayout from "../layout/default";

import {
  Center,
  Stack,
  Image,
  Heading,
  Text,
  ChakraProvider,
  Button,
  Input,
  Checkbox,
  FormLabel,
  FormControl,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
import { object, string } from "yup";

function Index({}) {
  const [check, setCheck] = useState(false);

  return (
    <ChakraProvider>
      <DefaultLayout title={"Cradle BackEnd Login Page"}>
        <link rel="stylesheet" href="./css/index/index.css" />
        <Center h="100vh" bg="purple.200">
          <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
            <Heading maxW="150px" mb="8" mx="auto" as="h1" color="purple">
              Cradle
            </Heading>
            <Heading as="h4">Log in.</Heading>
            <Text fontSize="lg" color="gray.600">
              Please log in with the data provided by the development team.
            </Text>

            <Formik
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                }, 1000);
              }}
              initialValues={{ Username: "", password: "" }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Stack my="4" spacing="6">
                    <FormControl>
                      <FormLabel mb="1" htmlFor="Username">
                        Username
                      </FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                          bg="purple.50"
                          children={<AtSignIcon color="purple.500" />}
                        />
                        <Input
                          focusBorderColor="purple.500"
                          type="text"
                        ></Input>
                      </InputGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel mb="1" htmlFor="password">
                        Password
                      </FormLabel>
                      <InputGroup>
                        <InputLeftAddon
                          bg="purple.50"
                          children={<LockIcon color="purple.500" />}
                        />
                        <Input
                          focusBorderColor="purple.500"
                          type="password"
                        ></Input>
                      </InputGroup>
                    </FormControl>

                    <Button
                      isLoading={isSubmitting}
                      loadingText="Whispering to our servers"
                      size="lg"
                      colorScheme="purple"
                      type="submit"
                    >
                      Login
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>

            <Button colorScheme="purple" variant="link">
              Forgot Password?
            </Button>
          </Stack>
        </Center>
      </DefaultLayout>
    </ChakraProvider>
  );
}

module.exports = Index;
