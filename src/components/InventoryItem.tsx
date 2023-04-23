import React, { useState } from "react";
import classes from "./InventoryItem.module.css";
import { formatDate } from "@/helpers/formatDate";
import { copyToClipboard } from "@/helpers/copyToClipboard";

interface InventoryItemProps {
  itemData: IItem;
}

interface IStatus {
  status: string;
  class: string;
}

export const InventoryItem: React.FC<InventoryItemProps> = ({ itemData }) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const renderItemStatus = (): IStatus => {
    if (itemData.type === "code") {
      if (itemData.used) {
        return { status: "USED", class: classes.used };
      } else if (itemData.claimed) {
        return { status: "CLAIMED", class: classes.claimed };
      } else {
        return { status: "UNCLAIMED", class: classes.unclaimed };
      }
    } else {
      //assuming we only have codes and hardwares
      if (itemData.shipped && itemData.shipping_date) {
        return {
          status: `SHIPPED ${formatDate(itemData.shipping_date)}`,
          class: classes.date,
        };
      } else {
        return { status: "OWNED", class: classes.owned };
      }
    }
  };

  const status: IStatus = renderItemStatus();

  const handleCodeClick = (): void => {
    copyToClipboard(itemData.code);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  const renderCode = (): JSX.Element => {
    return (
      <div className={classes.codeWrapper} onClick={handleCodeClick}>
        <img src="/images/code.svg" />
        <span>CODE</span>
        <div>
          {showTooltip && <div className={classes.tooltip}>Copied!</div>}
          <span>{itemData.code}</span> <img src="/images/clipboard.svg" />
        </div>
      </div>
    );
  };

  const renderButton = (): JSX.Element | null => {
    return !itemData.shipped ? (
      <button className={classes.orderButton}>
        <span>ORDER SHIPPING</span>
      </button>
    ) : null;
  };

  return (
    <div className={classes.itemWrapper}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src={itemData.image_url} alt="item image" />
      </div>
      <div className={classes.info}>
        <span className={status.class}>{status.status}</span>
        <h3 className="color-dark">{itemData.title}</h3>
        {itemData.type === "code" ? renderCode() : renderButton()}
      </div>
    </div>
  );
};
