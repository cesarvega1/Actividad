import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ReservationsModule } from './reservations/reservations.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [ReservationsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('reservations');
  }
}
