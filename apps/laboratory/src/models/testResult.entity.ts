import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'test_result' })
export class TestResultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patient_id: number;

  @Column()
  test_id: number;

  @Column()
  result: string;

  @Column({ type: 'date' })
  date: Date;
}
