import { plainToInstance } from 'class-transformer'
import {
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common'
import { validate } from 'class-validator'

@Injectable()
export class HdPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const DTO = plainToInstance(metadata.metatype, value)
    const errors = await validate(DTO)
    const messages = errors.map((error) => ({
      name: error.property,
      message: Object.values(error.constraints),
    }))
    if (errors.length > 0) {
      throw new HttpException(messages, HttpStatus.BAD_REQUEST)
    }

    return value
  }
}
