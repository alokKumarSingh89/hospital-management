import { IsNotEmpty } from 'class-validator';

export class DoctorDTO {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  specialty: string;
}
