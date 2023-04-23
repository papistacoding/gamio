interface IItem {
    Id: number;
    title: string;
    CreatedAt: string;
    UpdatedAt: string;
    type: string;
    shipping_date: string | null;
    used: boolean | null;
    shipped: boolean | null;
    claimed: boolean;
    image_url: string;
    code: string;
  }