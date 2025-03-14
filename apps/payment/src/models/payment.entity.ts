import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'payment' })
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bill_id: number;

  @Column({ type: 'decimal' })
  amount: number;

  @Column()
  payment_method: string;

  @Column({ type: 'date' })
  date: Date;
}
