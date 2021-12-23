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

  findAll(): Promise<Folder[]> {
    return this.folderRepo.find();
  }

  findOne(id: number): Promise<Folder> {
    return this.folderRepo.findOne(id);
  }

  create(body: any): void {
    this.folderRepo.save(body);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.folderRepo.delete({ id });
  }
}