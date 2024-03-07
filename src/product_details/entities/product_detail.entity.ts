import { Products } from 'src/products/entities/product.entity';
import { 
    Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, 
    UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany
} from 'typeorm';
import { ProductsCoverTypes } from 'src/products_cover_types/entities/products_cover_type.entity';
import { ProductOrderType } from 'src/products/interface/enum';
import { ProductProfileType } from 'src/product_profile_type/entities/product_profile_type.entity';

@Entity()
export class ProductDetails {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: 0
    })
    quantity: number;

    @Column({
        nullable: true,
        default: null
    })
    coating_type: number;

    @Column({
        type: 'enum',
        enum: ProductOrderType,
        default: ProductOrderType.ready_to_use
    })
    type: ProductOrderType;

    @OneToMany(() => ProductsCoverTypes, coverTypes => coverTypes.product_detail, {})
    @JoinColumn()
    cover_type: ProductsCoverTypes

    @OneToMany(() => ProductProfileType, profileType => profileType.product_detail, {
        onDelete: 'SET NULL',
        // cascade: true
    })
    @JoinColumn()
    profile_type: ProductProfileType

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
