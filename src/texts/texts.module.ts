import { Module } from '@nestjs/common';
import { TextsService } from './texts.service';
import { TextsController } from './texts.controller';
import { Text } from './models/text.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Text])],
  controllers: [TextsController],
  providers: [TextsService],
})
export class TextsModule {}
