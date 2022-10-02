import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { RoleGuardService } from './role-guard.service'
import { CreateRoleGuardDto } from './dto/create-role-guard.dto'
import { UpdateRoleGuardDto } from './dto/update-role-guard.dto'
import { RolesGuard } from 'src/common/guards/role.guard'
import { Roles } from 'src/common/decorators/roles.decorators'

@Controller('role-guard')
@UseGuards(RolesGuard)
export class RoleGuardController {
  constructor(private readonly roleGuardService: RoleGuardService) {}

  @Post()
  create(@Body() createRoleGuardDto: CreateRoleGuardDto) {
    return this.roleGuardService.create(createRoleGuardDto)
  }

  @Get()
  @Roles('admin')
  findAll() {
    return this.roleGuardService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleGuardService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleGuardDto: UpdateRoleGuardDto) {
    return this.roleGuardService.update(+id, updateRoleGuardDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleGuardService.remove(+id)
  }
}
