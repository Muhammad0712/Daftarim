import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeadingBlocksService } from './heading_blocks.service';
import { CreateHeadingBlockDto } from './dto/create-heading_block.dto';
import { UpdateHeadingBlockDto } from './dto/update-heading_block.dto';

@Controller('heading-blocks')
export class HeadingBlocksController {
  constructor(private readonly headingBlocksService: HeadingBlocksService) {}

  @Post()
  create(@Body() createHeadingBlockDto: CreateHeadingBlockDto) {
    return this.headingBlocksService.create(createHeadingBlockDto);
  }

  @Get()
  findAll() {
    return this.headingBlocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.headingBlocksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeadingBlockDto: UpdateHeadingBlockDto) {
    return this.headingBlocksService.update(+id, updateHeadingBlockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.headingBlocksService.remove(+id);
  }
}
