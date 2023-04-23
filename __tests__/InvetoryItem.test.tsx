import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { InventoryItem } from "@/components/InventoryItem";
import "@testing-library/jest-dom"; // import the jest-dom matchers

const mockItemData: IItem = {
  Id: 1,
  title: "Test Item",
  CreatedAt: "2022-04-22T12:00:00Z",
  UpdatedAt: "2022-04-22T12:00:00Z",
  type: "code",
  shipping_date: null,
  used: false,
  shipped: false,
  claimed: false,
  image_url: "https://example.com/image.png",
  code: "ABC123",
};
describe("InventoryItem component", () => {
  const itemData: IItem = {
    Id: 1,
    title: "Example Code Item",
    CreatedAt: "2022-04-22T12:00:00Z",
    UpdatedAt: "2022-04-22T12:00:00Z",
    type: "code",
    shipping_date: null,
    used: false,
    shipped: null,
    claimed: false,
    image_url: "https://example.com/image.jpg",
    code: "ABCD-EFGH-IJKL",
  };

  test("renders item title", () => {
    render(<InventoryItem itemData={itemData} />);
    const titleElement = screen.getByText("Example Code Item");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders unclaimed code status", () => {
    render(<InventoryItem itemData={itemData} />);
    const statusElement = screen.getByText("UNCLAIMED");
    expect(statusElement).toBeInTheDocument();
  });

  test("renders order button for unshipped hardware", () => {
    const hardwareData: IItem = {
      Id: 2,
      title: "Example Hardware Item",
      CreatedAt: "2022-04-22T12:00:00Z",
      UpdatedAt: "2022-04-22T12:00:00Z",
      type: "hardware",
      shipping_date: null,
      used: null,
      shipped: false,
      claimed: false,
      image_url: "https://example.com/image.jpg",
      code: "",
    };
    render(<InventoryItem itemData={hardwareData} />);
    const orderButton = screen.getByText("ORDER SHIPPING");
    expect(orderButton).toBeInTheDocument();
  });

  test("does not render order button for shipped hardware", () => {
    const hardwareData: IItem = {
      Id: 3,
      title: "Example Hardware Item",
      CreatedAt: "2022-04-22T12:00:00Z",
      UpdatedAt: "2022-04-22T12:00:00Z",
      type: "hardware",
      shipping_date: null,
      used: null,
      shipped: true,
      claimed: false,
      image_url: "https://example.com/image.jpg",
      code: "",
    };
    render(<InventoryItem itemData={hardwareData} />);
    const orderButton = screen.queryByText("ORDER SHIPPING");
    expect(orderButton).not.toBeInTheDocument();
  });
});
