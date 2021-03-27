interface WishListProps {
  name: string;
  description: string;
  objective: number;
}

export interface CreateTravelProps extends WishListProps {
  from: string;
  to: string;
}

export interface CreateProductProps extends WishListProps {
  price: number;
}