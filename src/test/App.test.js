import React from "react";
import { render, waitForElement } from "@testing-library/react";
import "jest-dom/extend-expect";
import axios from "axios";

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("Initialize testing with Jest and React!", () => {
  expect("Hello world").toBe("Hello world");
});

it('Test to the back-end feed microservice.', async done => {
  
});