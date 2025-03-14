import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'drug' })
export class DrugEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  manufacturer: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column()
  quantity: number;
}
