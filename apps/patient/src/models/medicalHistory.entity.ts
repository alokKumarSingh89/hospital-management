import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MedicalHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patient_id: number;

  @Column()
  diagnosis: string;

  @Column()
  treatment: string;

  @Column({ type: 'date' })
  date: Date;
}
