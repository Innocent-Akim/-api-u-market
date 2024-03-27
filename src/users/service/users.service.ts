import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { privateDecrypt } from 'crypto';
import { Entity, Repository } from 'typeorm';
import { Users } from '../entities/users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly repository: Repository<Users>) { }

    async findAll(): Promise<Users[]> {
        return await this.repository.find();
    }

    async create(user: Users): Promise<Users> {
        const newUser = this.repository.create({ ...user });
        return this.repository.save(newUser)

    }
}
