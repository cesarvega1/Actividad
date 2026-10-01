import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty({ message: 'CustomerName no debe estar vacía' })
  customerName: string;

  @IsEmail({}, { message: 'El correo electrónico debe ser válido.' })
  email: string;

  @IsInt()
  @Min(1, { message: 'Las personas deben tener al menos 1 año.' })
  people: number;
}
