import { Module } from '@nestjs/common';
import { HeadingBlocksService } from './heading_blocks.service';
import { HeadingBlocksController } from './heading_blocks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HeadingBlock } from './models/heading_block.model';

@Module({
  imports: [SequelizeModule.forFeature([HeadingBlock])],
  controllers: [HeadingBlocksController],
  providers: [HeadingBlocksService],
})
export class HeadingBlocksModule {}
