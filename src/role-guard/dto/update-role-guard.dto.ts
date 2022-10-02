import { PartialType } from '@nestjs/mapped-types'
import { CreateRoleGuardDto } from './create-role-guard.dto'

export class UpdateRoleGuardDto extends PartialType(CreateRoleGuardDto) {}
