import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class ProductsCoverTypes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image_name: string;
}
