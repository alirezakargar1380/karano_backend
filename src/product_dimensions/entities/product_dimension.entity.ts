import { Products } from 'src/products/entities/product.entity';
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

    @ManyToOne(() => Products, {
        onDelete: 'SET NULL'
    })
    @JoinColumn()
    product: Products

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
