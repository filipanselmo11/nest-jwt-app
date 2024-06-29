import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdsService } from './prods.service';
import { CreateProdDto } from './dto/create-prod.dto';
import { UpdateProdDto } from './dto/update-prod.dto';

@Controller('prods')
export class ProdsController {
  constructor(private readonly prodsService: ProdsService) {}

  @Post()
  create(@Body() createProdDto: CreateProdDto) {
    return this.prodsService.create(createProdDto);
  }

  @Get()
  findAll() {
    return this.prodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prodsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdDto: UpdateProdDto) {
    return this.prodsService.update(+id, updateProdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prodsService.remove(+id);
  }
}
