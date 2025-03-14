import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'analytics' })
export class AnalyticsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  metric: string;

  @Column()
  value: string;

  @Column({ type: 'date' })
  date: Date;
}
