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

  findAll(): Promise<Item[]> {
    return this.itemRepo.find();
  }

  findOne(id: number): Promise<Item> {
    return this.itemRepo.findOne({ id });
  }

  create(body: any): void {
    this.itemRepo.save(body);
  }

  async update(id: number, body: any): Promise<void> {
    const item = await this.itemRepo.findOne({ id });
    this.itemRepo.merge(item, body);
    this.itemRepo.save(item);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.itemRepo.delete({ id });
  }
}