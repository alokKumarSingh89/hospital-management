import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'recording' })
export class RecordingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  session_id: number;

  @Column()
  file_path: string;

  @Column()
  duration: string;
}
