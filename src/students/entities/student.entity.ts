import { Scope } from "@nestjs/common";
import { join } from "path";
import { College } from "src/students/entities/college.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id:number

    @Column("varchar", { length: 200 })
    name:string

    @Column('int')
    age:number

    @ManyToOne(()=>College,college => college.student)
    @JoinColumn({name:'college'})
    college:College
}
