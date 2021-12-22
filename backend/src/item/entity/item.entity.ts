import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}