import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator'

export class CreateLoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 10, {
    message: '不能少于5个且超过10个字符',
  })
  name: string
  @IsNumber()
  age: number
}