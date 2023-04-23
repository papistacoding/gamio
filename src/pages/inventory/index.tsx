import { InventoryList } from "@/components/InventoryList";

export default function InventoryPage(props: any) {
  return (
    <>
    <h2 className="title">INVENTORY</h2>
      <InventoryList data={props.inventory} />
    </>
  );
}

export async function getStaticProps() {
  try {
    var myHeaders = new Headers();
    myHeaders.append("xc-token", "qlz9Adt_7mKIBz9ZPvbaupx-qc0K-v8czQDMI-cj");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    const inventoryResponse = await fetch(
      "https://staging-nocodb.gamio.gg/api/v1/db/data/v1/Gamio-frontend-task/Inventory?limit=25&shuffle=0&offset=0",
      requestOptions
    );

    if (!inventoryResponse.ok) {
      throw new Error(`HTTP error! status: ${inventoryResponse.status}`);
    }

    const { list } = await inventoryResponse.json(); // extract JSON data

    return {
      props: { inventory: list }, // pass JSON data to props
      revalidate: 1,
    };
  } catch (error) {
    console.error("Error fetching inventory data:", error);
    return {
      props: { inventory: [] }, // pass empty inventory array
      revalidate: 1,
    };
  }
}
