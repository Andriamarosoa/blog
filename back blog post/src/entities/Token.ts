import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";


@Entity()
export class Token {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    value: string;
    @Column()
    userId: number;
    @CreateDateColumn({ type: "timestamp", precision: 0, default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;
    @Column({ type: "timestamp",nullable:true})
    expiredAt: Date;
    @ManyToOne(() => User, (user) => user.token)
    user: User;
}
