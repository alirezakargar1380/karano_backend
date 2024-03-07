
import { ProductDetails } from 'src/product_details/entities/product_detail.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class ProductProfileType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @ManyToOne(() => ProductDetails, {
        onDelete: 'SET NULL'
    })
    @JoinColumn()
    product_detail: ProductDetails
}
