import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

@Injectable()
export class LoginPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value)
    console.log('metadata', metadata)
    const DTO = plainToInstance(metadata.metatype, value)
    const err = await validate(DTO)
    console.log('DTO', DTO)
    console.log('err', err)
    if (err.length) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
    return value
  }
}
