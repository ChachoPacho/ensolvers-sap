import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Folder } from '../entity/folder.entity';

@Injectable()
export class FolderService {
  constructor(
    @InjectRepository(Folder)
    private readonly folderRepo: Repository<Folder>,
  ) { }

  async findAll(): Promise<Folder[]> {
    return await this.folderRepo.find();
  }

  async findOne(id: number): Promise<Folder> {
    return await this.folderRepo.findOne(id);
  }

  async create(body: any): Promise<void> {
    await this.folderRepo.save(body);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.folderRepo.delete({ id });
  }
}