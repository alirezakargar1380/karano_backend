import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class ProductDimensionDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    
}
