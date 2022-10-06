import { ApiProperty } from '@nestjs/swagger'

export class CreateGuardDto {
  @ApiProperty({ example: '小A' })
  name: string
  @ApiProperty({ example: 18 })
  age: number
}
