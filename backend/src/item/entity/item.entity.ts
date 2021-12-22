import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Folder } from 'src/folder/entity/folder.entity';

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn({
    unsigned: true,
    type: 'bigint',
  })
  id: number;

  @Column({
    type: 'character varying',
  })
  title: String;

  @Column({
    name: 'is_marked',
    type: 'boolean',
    default: false
  })
  isMarked?: Boolean;

  @ManyToOne(() => Folder, { cascade: true, orphanedRowAction: 'delete', onDelete: 'CASCADE' })
  @Column({
    type: 'bigint',
    name: 'folder_id',
  })
  folderId: number
}