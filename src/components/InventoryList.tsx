import React from "react";
import { InventoryItem } from "./InventoryItem";
import classes from "./InvenotryList.module.css";

interface InventoryListProps {
  data: IItem[];
}

export const InventoryList: React.FC<InventoryListProps> = ({ data }) => {
  return (
    <div className={classes.inventoryList}>
      {data && data.length ? (
        data.map((item: IItem) => <InventoryItem key={item.Id} itemData={item} />)
      ) : (
        <span>There are no items in the Inventory</span>
      )}
    </div>
  );
};