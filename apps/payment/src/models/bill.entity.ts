import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum BillStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAIL = 'fail',
  UNKNOWN = 'UNKNOWN',
}

@Entity({ name: 'bill' })
export class BillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patient_id: number;

  @Column()
  appointment_id: number;

  @Column({ type: 'decimal' })
  total_amount: number;

  @Column({
    type: 'enum',
    enum: BillStatus,
    default: BillStatus.UNKNOWN,
  })
  status: BillStatus;
}
