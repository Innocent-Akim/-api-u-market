import { Body, Injectable } from '@nestjs/common'; // Importing necessary modules from NestJS
import { InjectRepository } from '@nestjs/typeorm'; // Importing module for injecting TypeORM repository
import { Entity, Repository } from 'typeorm'; // Importing necessary TypeORM modules
import { Users } from '../entities/users.entity'; // Importing the Users entity

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly repository: Repository<Users>) { }

    async findAll(): Promise<Users[]> {
        try {
            const allUsers = await this.repository.find();
            return allUsers; // Returning all users
        } catch (error) {
            throw new Error('Failed to retrieve users. Please try again later.');
        }
    }

    // Method to create a new user
    async create(user: Users): Promise<Users> {
        try {
            const newUser = this.repository.create({ ...user });
            const savedUser = await this.repository.save(newUser);
            return savedUser;
        } catch (error) {
            throw new Error('Failed to create user. Please check your input and try again.');
        }
    }

    // Method to delete a user
    async delete(user: Users): Promise<void> {
        try {
            await this.repository.delete(user.id);
            console.log('User deleted successfully.');
        } catch (error) {
            throw new Error('Failed to delete user. Please try again later.');
        }
    }
}
