import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';

import { ItemService } from '../service/item.service';
import { Item } from '../entity/item.entity';

@Controller('folders/:folderId/items')
export class ItemController {
  constructor(private readonly itemService: ItemService) { }

  @Get()
  async getAll(
    @Param('folderId') folderId: number,
  ): Promise<Item[]> {
    try {
      return await this.itemService.findAll(folderId);
    }
    catch (err) {
      return err;
    }
  }

  @Get(':id')
  async getOne(
    @Param('id') id: number,
  ): Promise<Item> {
    try {
      return await this.itemService.findOne(id);
    }
    catch (err) {
      return err;
    }
  }

  @Post()
  create(
    @Param('folderId') folderId: number,
    @Body() body: any,
  ): void {
    try {
      this.itemService.create(folderId, body);
    }
    catch (err) {
      return err;
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() body: any,
  ): any {
    try {
      this.itemService.update(id, body);
    }
    catch (err) {
      return err;
    }
  }

  @Delete(':id')
  delete(
    @Param('id') id: number,
  ): Promise<DeleteResult> {
    try {
      return this.itemService.delete(id);
    }
    catch (err) {
      return err;
    }
  }
}