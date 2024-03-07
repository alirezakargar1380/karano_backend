import { Products } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { units } from '../interface/enum';

@Entity()
export class ProductDimension {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: units,
        nullable: true,
        default: null
    })
    unit: units;

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
