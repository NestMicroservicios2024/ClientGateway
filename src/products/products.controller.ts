import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  constructor() {}

  @Post()
  createProduct(){
    return 'Crea un producto';
  }

  @Get()
  findAllProducts(){
    return 'Regresa todos los productos';
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return 'Regresa un producto con id: ' +id;
  }

  @Patch(':id')
  patchProduct(
    @Param('id') id: string,
    @Body() body: any
  ){
    return 'Actualiza un producto con id: ' +id;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string){
    return 'Regresa un producto con id: ' +id+ 'que es eliminado';
  }

}
