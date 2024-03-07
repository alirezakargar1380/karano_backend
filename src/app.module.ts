import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ProductDimensionsModule } from './product_dimensions/product_dimensions.module';
import { ProductsCoverTypesModule } from './products_cover_types/products_cover_types.module';
import { UsersModule } from './users/users.module';
import { ProductFrameTypeModule } from './product_frame_type/product_frame_type.module';
import { ProductDetailsModule } from './product_details/product_details.module';
import { ProductProfileTypeModule } from './product_profile_type/product_profile_type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.T_DB_HOST,
      port: 3306,
      username: process.env.T_DB_USERNAME,
      password: process.env.T_DB_PASSWORD,
      database: process.env.T_DB_DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true
    }),
    ProductsModule,
    UsersModule,
    ProductsCoverTypesModule,
    ProductDimensionsModule,
    ProductFrameTypeModule,
    ProductDetailsModule,
    ProductProfileTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
