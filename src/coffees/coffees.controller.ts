/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Delete, Patch, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

  @Get()
  findAll(@Query() paginationQuery) {
    const {limit, offset} = paginationQuery;
    return 'this aciton return all the coffees' + 'Limit'  + limit;
  }

  @Get(':id')
  findOne( @Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `this actions removes #${id} coffee`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `this actions update #${id} coffee`;
  }
}
