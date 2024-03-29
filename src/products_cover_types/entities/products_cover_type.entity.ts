import { ProductDetails } from 'src/product_details/entities/product_detail.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class ProductsCoverTypes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: ''
    })
    name: string;

    @Column({
        nullable: true,
        default: null
    })
    image_name: string;

    @ManyToOne(() => ProductDetails, {
        onDelete: 'SET NULL'
    })
    @JoinColumn()
    product_detail: ProductDetails
}
