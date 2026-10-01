import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const start = Date.now();
    const hora = new Date().toLocaleTimeString('es-ES');

    console.log(`[REQUEST] ${req.method} ${req.originalUrl} - ${hora}`);

    res.on('finish', () => {
      console.log(`${req.method} ${req.originalUrl} - ${Date.now() - start}ms`);
    });

    next();
  }
}
