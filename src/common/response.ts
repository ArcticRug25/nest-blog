import { CallHandler, Injectable, NestInterceptor } from '@nestjs/common'
import { map } from 'rxjs'

interface IData<T> {
  data: T
}

@Injectable()
export class Response<T> implements NestInterceptor {
  intercept(context, next: CallHandler) {
    return next.handle().pipe(
      map((data) => {
        return data?.meta ? data : { data }
      }),
    )
  }
}
