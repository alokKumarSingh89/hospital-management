import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reports' })
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  generated_by: string;

  @Column({ type: 'date' })
  date: Date;

  @Column()
  content: string;
}
