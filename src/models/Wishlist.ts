import { Column, Entity, JoinColumn, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('items')
export default class Wishlist {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  objective: number;

  constructor(props: Omit<Wishlist, 'id'>, id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = uuidv4();
    }
  }
}

@Entity('travels')
export class Travel {
  @PrimaryGeneratedColumn('increment')
  readonly id: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  @JoinColumn()
  item_id: string;

  constructor(props: Omit<Travel, 'id'>) {
    Object.assign(this, props);
  }
}

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment')
  readonly id: string;

  @Column()
  product: string;

  @Column()
  @JoinColumn()
  item_id: string;

  constructor(props: Omit<Product, 'id'>) {
    Object.assign(this, props);
  }
}