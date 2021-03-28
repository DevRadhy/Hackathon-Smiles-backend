import { v4 as uuidv4 } from 'uuid';

export default class Wishlist {
  readonly id: string;
  name: string;
  description: string;
  objective: number;

  constructor(props: Omit<Wishlist, 'id'>, id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = uuidv4();
    }
  }
}

export class Travel {
  from: string;
  to: string;

  constructor(props: Travel) {
    Object.assign(this, props);
  }
}

export class Product {
  product: string;

  constructor(props: Product) {
    Object.assign(this, props);
  }
}