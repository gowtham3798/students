import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from '@automapper/classes';

@Entity()
export class State{
    @AutoMap()
    @PrimaryGeneratedColumn()
    id!:string

    @AutoMap()
    @Column()
    name!:string

    public setId(id: string) {
        this.id = id;
      }

}