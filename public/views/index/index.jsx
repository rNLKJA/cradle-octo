import React, { useState, useEffect } from "react";
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
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
import { object, string } from "yup";

const axios = require("axios");

function Index({}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ChakraProvider>
      <DefaultLayout title={"Cradle BackEnd Login Page"}>
        <link rel="stylesheet" href="./css/index/index.css" />
        <Center h="100vh" bg="purple.200">
          <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
            {/* <Image maxW="150px" mb="8" mx="auto" src="./img/cradle.jpg"></Image> */}
            <Heading as="h1">Log in.</Heading>
            <Text fontSize="lg" color="gray.600">
              Please log in with the data provided by the development team.
            </Text>

            <form onSubmit={handleSubmit}>
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
                  placeholder="rNLKJA"
                ></Input>
              </InputGroup>

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
                  placeholder="********"
                ></Input>
              </InputGroup>
              <Button
                mt={4}
                isLoading={loading}
                type="submit"
                loadingText="Whispering to our servers"
                size="lg"
                colorScheme="purple"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setLoading(!loading);
                }}
              >
                Submit
              </Button>
            </form>

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
