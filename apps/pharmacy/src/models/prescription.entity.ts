import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'prescription' })
export class PrescriptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patient_id: number;
  doctor_id: number;

  @Column()
  drug_id: number;

  @Column()
  dosage: number;

  @Column({ type: 'date' })
  date: Date;
}
