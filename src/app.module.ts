import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ArticlesModule} from "./articles/articles.module";
import {LoggerModule} from './logger/logger.module';

@Module({
    imports: [ArticlesModule, LoggerModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
