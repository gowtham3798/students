import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "src/students/entities/student.entity";


@Entity()
export class College {
    @PrimaryGeneratedColumn()
    id:number

    @Column("varchar",{length:500})
    name:string

    @Column("varchar",{length:1000})
    location:string    

    @OneToMany(()=>Student,Student => Student.college)
    @JoinColumn({name:'students'})
    student:Student[]
}
