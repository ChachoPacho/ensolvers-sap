import { Module } from '@nestjs/common';
import { FolderController } from './controller/folder.controller';
import { FolderService } from './service/folder.service';

@Module({
  controllers: [FolderController],
  providers: [FolderService]
})
export class FolderModule {}
