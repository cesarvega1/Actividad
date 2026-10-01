import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly validKey = 'restaurant-secret';

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = request.headers['x-api-key'];

    if (apiKey !== this.validKey) {
      throw new ForbiddenException('Clave de API no válida o faltante');
    }
    return true;
  }
}
