import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './interfaces/reservation.interface';

@Injectable()
export class ReservationsService {
  private reservations: Reservation[] = [];
  private nextId = 1;

  findAll(): Reservation[] {
    return this.reservations;
  }

  create(data: CreateReservationDto): Reservation {
    const reservation: Reservation = {
      id: this.nextId++,
      customerName: data.customerName,
      email: data.email,
      people: data.people,
    };
    this.reservations.push(reservation);
    return reservation;
  }
}
