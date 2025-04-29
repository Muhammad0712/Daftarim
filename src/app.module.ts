import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { TextsModule } from './texts/texts.module';
import { Text } from "./texts/models/text.model";
import { HeadingBlocksModule } from './heading_blocks/heading_blocks.module';
import { HeadingBlock } from "./heading_blocks/models/heading_block.model";
import { TodosModule } from './todos/todos.module';
import { ContentModule } from './content/content.module';
import { Todo } from "./todos/models/todo.model";
import { Content } from "./content/models/content.model";
import { BlocksModule } from './blocks/blocks.module';
import { Block } from "./blocks/models/block.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [Text, HeadingBlock, Todo, Content, Block],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    TextsModule,
    HeadingBlocksModule,
    TodosModule,
    ContentModule,
    BlocksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
