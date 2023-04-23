import React from "react";
import { render } from "@testing-library/react";
import { Header } from "@/components/Header";

jest.mock("next/router", () => require("next-router-mock"));

describe("Header", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
