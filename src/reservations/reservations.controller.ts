import { BadRequestException, Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './interfaces/reservation.interface';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}


  @Get()
  findAll(): Reservation[] {
    return this.reservationsService.findAll();
  }

  @Post()
  @UseGuards(ApiKeyGuard)
  create(@Body() body: CreateReservationDto): Reservation {
    return this.reservationsService.create(body);
  }

  @Get('error-test')
  errorTest(): never {
    throw new BadRequestException('Reservation data is invalid');
  }
}
