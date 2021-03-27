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