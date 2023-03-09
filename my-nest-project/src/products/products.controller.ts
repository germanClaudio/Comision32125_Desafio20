import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { CreateProductDto } from 'src/dto/create-products-dto';
import { UpdateProductDto } from 'src/dto/update-products-dto';
import { Products } from 'src/interfaces/products/products.interface';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    @Post()
        async createNewProduct(@Body() createProductDto: CreateProductDto){
            this.productsService.createNewProduct(createProductDto)
        }

     @Get()
        async getAllProducts(): Promise<Products[]> {
            return this.productsService.getAllProducts();
        }

    @Get(':id')
        async getProductById(@Param('id') id: string) {
          return this.productsService.getProductById(+id);
        }
    
    @Put(':id')
        async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
          return this.productsService.updateProduct(updateProductDto);
        }

    @Delete (':id')
        async deleteProduct(@Param('id') id: string) {
          return this.productsService.deleteProduct(+id);
        }

    @Delete()
        async deleteAll(): Promise<Products[]> {
            return this.productsService.deleteAll();
        }
}