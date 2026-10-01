import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

export interface ErrorResponse {
  success: false;
  statusCode: number;
  message: string | string[];
  path: string;
  timestamp: string;
}

interface HttpExceptionBody {
  message?: string | string[];
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const raw = exception.getResponse();
    const message: string | string[] =
      typeof raw === 'string' ? raw : (raw as HttpExceptionBody).message ?? exception.message;

    const body: ErrorResponse = {
      success: false,
      statusCode: status,
      message,
      path: request.url,
      timestamp: new Date().toISOString(),
    };

    response.status(status).json(body);
  }
}
