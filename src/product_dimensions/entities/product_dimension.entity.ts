import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class ProductDimension {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unit: string // should convert to enum

    @Column()
    length: string 
    
    @Column()
    width: string 
    
    @Column()
    height: string
}
