import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'supply' })
export class SupplyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column({ type: 'date' })
  expiry_date: Date;
}
