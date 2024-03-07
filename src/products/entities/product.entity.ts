import { ProductDetails } from 'src/product_details/entities/product_detail.entity';
import { ProductDimension } from 'src/product_dimensions/entities/product_dimension.entity';
import {
    Entity, Column, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
    OneToOne, OneToMany, JoinColumn, ManyToOne
} from 'typeorm';
import { ProductOrderType, ProductType } from '../interface/enum';

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quantity: string;

    @Column({
        type: 'enum',
        enum: ProductOrderType,
        default: ProductOrderType.ready_to_use
    })
    order_type: ProductOrderType; // 0 means product with deminition, 1 means customizable product

    @Column({
        type: 'enum',
        enum: ProductType,
        nullable: true,
        default: null
    })
    type: ProductType; // 0 means product with deminition, 1 means customizable product

    @Column({
        type: 'varchar',
        length: 1000
    })
    description: string;

    @OneToMany(() => ProductDimension, product => product.product, {
        cascade: true
    })
    product_dimension: ProductDimension[]

    @ManyToOne(() => ProductDetails, {
        cascade: true
    })
    @JoinColumn()
    default_product_detail: ProductDetails

    // this should handle in orders

    // @OneToMany(() => ProductDetails, product => product.product, {
    //     cascade: ['insert', 'update']
    // })
    // @JoinColumn()
    // product_details: ProductDetails[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
