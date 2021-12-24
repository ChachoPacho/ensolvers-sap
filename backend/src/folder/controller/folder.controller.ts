import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Folder } from '../entity/folder.entity';

import { FolderService } from '../service/folder.service';

@Controller('folders')
export class FolderController {
  constructor(private readonly folderService: FolderService) { }

  @Get()
  async getAll(
  ): Promise<Folder[]> {
    try {
      return await this.folderService.findAll();
    }
    catch (err) {
      return err;
    }
  }

  @Get(":id")
  async getOne(
    @Param() id: number
  ): Promise<Folder> {
    try {
      return await this.folderService.findOne(id);
    }
    catch (err) {
      return err;
    }
  }

  @Post()
  async create(
    @Body() body: any,
  ): Promise<void> {
    try {
      await this.folderService.create(body);
    }
    catch (err) {
      return err;
    }
  }

  @Delete(':id')
  async delete(
    @Param('id') id: number,
  ): Promise<DeleteResult> {
    try {
      return await this.folderService.delete(id);
    }
    catch (err) {
      return err;
    }
  }

}