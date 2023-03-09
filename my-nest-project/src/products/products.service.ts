import { Injectable } from '@nestjs/common';

import { Products } from '../interfaces/products/products.interface';

@Injectable()
export class ProductsService {
    private readonly products: Products[] = []

    createNewProduct(product: Products) {
        let newId : number
        if (this.products.length === 0) {
            newId = 1
        } else {
            newId = this.products[this.products.length - 1].id + 1
        }

        product = {  id: newId, ...product }
        return this.products.push(product);
    }

    getAllProducts(): Products[] {
        return this.products
    }

    getProductById(id: number) {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            return this.products.find(p => p.id === id);
        }
        else {
            console.log(
                "Lo sentimos, el Id del producto ingresado NO existe en nuestra Base de Datos"
              );
        }
    }

    updateProduct(product: Products) {
        product.id = Number(product.id)
        const index = this.products.findIndex(p => p.id === product.id)
        if (index == -1) {
            throw new Error(`Error al actualizar: elemento no encontrado`)
        } else {
            this.products[index] = product
            return product
        }
    }

    deleteProduct(id: number) {
        const index = this.products.findIndex(item => item.id === Number(id));
        
        if (index !== -1) {
            return this.products.splice(index, 1)
        } else {
            console.log(
              "Lo sentimos, el Id del producto ingresado NO existe en nuestra Base de Datos"
            );
          }
    }

    deleteAll() {
        return this.products.splice(0)
    }
}

 