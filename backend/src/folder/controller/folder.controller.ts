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

@Controller('folder')
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

  @Post()
  create(
    @Body() body: any,
  ): void {
    try {
      this.folderService.create(body);
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
      return this.folderService.delete(id);
    }
    catch (err) {
      return err;
    }
  }

}