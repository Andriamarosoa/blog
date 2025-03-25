import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from "typeorm";
import { User } from "./User";
import { Attachment } from "./Attachment";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", charset: "utf8mb4", collation: "utf8mb4_unicode_ci" })
    title: string;

    @Column({ type: "text", charset: "utf8mb4", collation: "utf8mb4_unicode_ci" })
    content: string;
    
    @Column("int")
    userId: number;

    @ManyToOne(() => User, (user) => user.blogs, { onDelete: "CASCADE" })
    user: User;
    
    @CreateDateColumn({ type: "timestamp", precision: 0, default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;


    @OneToMany(() => Attachment, (attachments) => attachments.blog)
    attachments:Attachment[]
}
