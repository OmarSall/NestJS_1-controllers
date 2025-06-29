import {Controller, Post, Body, Get, Put, Delete, ParseIntPipe, Param} from "@nestjs/common";
import {ArticlesService} from "./articles.service";
import {ArticleDto} from "./articles.dto"

@Controller("articles")
export class ArticleController {
    constructor(private readonly articlesService: ArticlesService) {
    }

    @Post()
    create(@Body() article: ArticleDto) {
        return this.articlesService.create(article);
    }

    @Get()
    getAll() {
        return this.articlesService.getAll();
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.articlesService.getById(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() article: ArticleDto,
    ) {
        return this.articlesService.update(id, article);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.articlesService.delete(id);
    }
}