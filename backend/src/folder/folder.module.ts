import { Module } from '@nestjs/common';
import { FolderController } from './controller/folder.controller';

@Module({
  controllers: [FolderController]
})
export class FolderModule {}
