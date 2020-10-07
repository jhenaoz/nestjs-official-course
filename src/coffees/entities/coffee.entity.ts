import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm";
import { type } from "os";
import { Flavor } from "./flavor.entity";
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  brand: string;

  @Column({nullable: true})
  descriptions: string;
  
  @JoinTable()
  @ManyToMany(
    type => Flavor,
    (flavor)=> flavor.coffees,
    {
      cascade: true
    }
  )
  flavors: Flavor[];

  @Column({default: 0})
  recommendations: number;
}