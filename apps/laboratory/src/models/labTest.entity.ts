import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'labs' })
export class LabTestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  cost: number;
}
