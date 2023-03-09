import { Injectable } from '@nestjs/common';

import { Users } from '../interfaces/users/users.interface';

@Injectable()
export class UsersService {
    private readonly users: Users[] = []

    createNewUser(user: Users) {
         let newId : number
        if (this.users.length === 0) {
            newId = 1
        } else {
            newId = this.users[this.users.length - 1].id + 1
        }

        user = {  id: newId, ...user }
        return this.users.push(user);
    }

    getAllUsers(): Users[] {
        return this.users
    }

    getUserById(id: number) {
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            return this.users.find(u => u.id === id);
        }
        else {
            console.log(
                "Lo sentimos, el Id del Usuario ingresado NO existe en nuestra Base de Datos"
            );
        }    
    }

    updateUser(user: Users) {
        user.id = Number(user.id)
        const index = this.users.findIndex(u => u.id === user.id)
        if (index == -1) {
            throw new Error(`Error al actualizar: elemento no encontrado`)
        } else {
            this.users[index] = user
            return user
        }
    }

    deleteUser(id: number) {
        const index = this.users.findIndex(item => item.id === Number(id));
        
        if (index !== -1) {
            return this.users.splice(index, 1)
        } else {
            console.log(
              "Lo sentimos, el Id del usuario ingresado NO existe en nuestra Base de Datos"
            );
          }
    }

    deleteAll() {
        return this.users.splice(0)
    }
}
