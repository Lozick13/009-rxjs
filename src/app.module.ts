import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { RxjsModule } from './rxjs/rxjs.module';

@Module({
	imports: [RxjsModule, CatsModule],
	controllers: [AppController, CatsController],
	providers: [AppService, CatsService],
})
export class AppModule {
	constructor() {
		let env_path = path.join(__dirname, '..', '.env');
		dotenv.config({ path: env_path });
	}
}
