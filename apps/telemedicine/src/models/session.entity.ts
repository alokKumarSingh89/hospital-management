import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'session' })
export class SessionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patient_id: number;

  @Column()
  doctor_id: number;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @Column()
  notes: string;
}
