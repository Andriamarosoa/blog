import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Blog } from "./Blog";
import { Token } from "./Token";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  get password(){
    return this.#password
  }
  set password(password:string){
    this.#password=password
  }
  #password: string;



  @OneToMany(() => Blog, (blog) => blog.user)
  blogs: Blog[];
  
  @OneToMany(() => Token, (token) => token.user)
  token:Token
}
