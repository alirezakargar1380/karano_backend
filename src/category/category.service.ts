import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entitys/category.entity';
import { IsNull, Repository } from 'typeorm';
import { IBody, ICategoryCreateInput } from './interfaces/body.interface';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private categoryRepository: Repository<Category>
    ) { }

    async save(data: ICategoryCreateInput | any) {
        return await this.categoryRepository.save(data);
    }

    async findParents(query: any) {
        return await this.categoryRepository.find({
        });
    }

    findOne(id: string) {
        return this.categoryRepository.findOne({ where: { id: Number(id) } });
    }

    updateOne(id: string, data: ICategoryCreateInput | any) {
        console.log(data)
        return this.categoryRepository
            .update({
                id: Number(id)
            }, data)
    }

    deleteId(id: string) {
        return this.categoryRepository.delete(Number(id))
    }

    async find(query: any) {

        // if (query.section === ELandingSection.NEW_PRODUCTS) condition.landingSection = ELandingSection.NEW_PRODUCTS
        return await this.categoryRepository.find({
            order: {
                id: 'DESC'
            },
            // skip: pagination.getTakeAndSkip().skip,
            // take: pagination.getTakeAndSkip().take
        });
    }

    count(): Promise<number> {
        return this.categoryRepository.count({})
    }
}
