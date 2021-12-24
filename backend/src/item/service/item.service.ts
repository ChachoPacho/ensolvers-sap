import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Item } from '../entity/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepo: Repository<Item>,
  ) { }

  async findAll(folderId: number): Promise<Item[]> {
    return await this.itemRepo.find({ folderId });
  }

  async findOne(id: number): Promise<Item> {
    return await this.itemRepo.findOne({ id });
  }

  async create(folderId: number, body: any): Promise<void> {
    this.itemRepo.merge(body, { folderId });
    await this.itemRepo.save(body);
  }

  async update(id: number, body: any): Promise<void> {
    const item = await this.itemRepo.findOne({ id });
    this.itemRepo.merge(item, body);
    await this.itemRepo.save(item);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.itemRepo.delete({ id });
  }
}