import { RoleGuard } from '../guards/role.guard'
import { AuthGuard } from '@nestjs/passport'
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { Role } from '../enum'

export function Auth(...roles: Role[]) {
  console.log('rol2es', roles)
  return applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard('jwt'), RoleGuard))
}
