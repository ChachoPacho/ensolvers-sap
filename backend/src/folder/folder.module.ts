import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolderController } from './controller/folder.controller';
import { FolderService } from './service/folder.service';
import { Folder } from './entity/folder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Folder])],
  controllers: [FolderController],
  providers: [FolderService]
})
export class FolderModule { }
