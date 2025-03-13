import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getUsers() {
        return this.userService.fetchUsers()
    }

    @Post()
    @UsePipes(new ValidationPipe)
    createUser(@Body() userData: CreateUserDto) {
         console.log(userData);
         return "Success"
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: string) {
        console.log(id);
        return `User id: ${id}`
    }
}
