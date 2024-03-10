import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { RoleService } from '@entities/role/role.service';
import { CreateRoleDTO } from '@entities/role/dto/create-role.dto';

@Controller('api/role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async createRole(@Body() createRoleDTO: CreateRoleDTO) {
    return await this.roleService.createRole(createRoleDTO);
  }

  @Get('/:name')
  @HttpCode(HttpStatus.OK)
  async getRoleByName(@Param('name') name: string) {
    return await this.roleService.getRoleByName(name);
  }
}
