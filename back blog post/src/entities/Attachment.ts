import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Blog } from "./Blog";

@Entity()
export class Attachment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;

    @Column("int")
    blogId: number;

    @ManyToOne(() => Blog, (blog) => blog.attachments, { onDelete: "CASCADE" })
    blog: Blog;

    
}