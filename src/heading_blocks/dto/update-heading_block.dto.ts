import { PartialType } from '@nestjs/mapped-types';
import { CreateHeadingBlockDto } from './create-heading_block.dto';

export class UpdateHeadingBlockDto extends PartialType(CreateHeadingBlockDto) {}
