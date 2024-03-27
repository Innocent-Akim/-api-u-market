import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
    constructor(private usersServise: UsersService) { }

    @Get()
    async getAll() {
        return this.usersServise.getAll();
    }
}
