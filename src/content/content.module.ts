import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Content } from './models/content.model';

@Module({
  imports: [SequelizeModule.forFeature([Content])],
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
