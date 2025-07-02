import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleController } from './articles.controller';

@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
