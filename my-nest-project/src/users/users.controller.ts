import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-users-dto';
import { UpdateUserDto } from 'src/dto/update-users-dto';
import { Users } from 'src/interfaces/users/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
constructor(private readonly usersService: UsersService) { }
    @Post()
        async createNewUser(@Body() createUserDto: CreateUserDto){
            this.usersService.createNewUser(createUserDto)
        }

    @Get()
        async getAllUserss(): Promise<Users[]> {
            return this.usersService.getAllUsers();   

        }

    @Get(':id')
        async getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(+id);
        }

    @Put(':id')
        async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(updateUserDto);
        }

    @Delete (':id')
        async deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(+id);
        }

    @Delete()
        async deleteAll(): Promise<Users[]> {
            return this.usersService.deleteAll();
        }
}
