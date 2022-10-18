import { Request } from 'express'
import { Reflector } from '@nestjs/core'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { Role } from '../enum'
import { user } from '@prisma/client'

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest<Request>().user as user

    const roles = this.reflector.getAllAndMerge<Role[]>('roles', [context.getHandler(), context.getClass()])
    return roles.length ? roles.some((role) => user.role === role) : true
  }
}
