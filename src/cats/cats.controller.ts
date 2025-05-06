import { Controller, Get, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cats } from './interfaces/Cats';

@Controller('cats')
export class CatsController {
	constructor(private catsService: CatsService) {}

	@Get()
	async repositories(@Query() { width }: Cats) {
		const cat = await this.catsService.searchCats(width);
		return `<img src=${cat.url}>`
	}
}
