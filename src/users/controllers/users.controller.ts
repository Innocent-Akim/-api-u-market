import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { Users } from '../entities/users.entity';

@Controller('users')
export class UsersController {
    constructor(private usersServise: UsersService) { }

    @Get()
    getAll() {
        return this.usersServise.findAll();
    }
    @Post()
    Add(@Body() user: Users) {
        return this.usersServise.create(user);
    }
}
