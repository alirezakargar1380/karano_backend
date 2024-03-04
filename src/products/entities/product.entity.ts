import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: number; // 0 means product with deminition, 1 means customizable product

    @Column({
        type: 'varchar',
        length: 1000
    })
    description: string;

    
}
