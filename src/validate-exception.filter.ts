import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common'
import { Response } from 'express'

@Catch()
export class ValidateExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response: Response = ctx.getResponse()

    if (exception instanceof BadRequestException) {
      const responseObj = exception.getResponse() as any
      return response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        code: HttpStatus.UNPROCESSABLE_ENTITY,
        messages: responseObj.message.map((error) => {
          const info = error.split('-')
          return {
            field: info[0],
            message: info[1],
          }
        }),
      })
    }

    return response
  }
}
