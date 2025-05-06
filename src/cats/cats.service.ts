import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { firstValueFrom, from, map, Observable } from 'rxjs';

@Injectable()
export class CatsService {
	private readonly catsURL = 'https://cataas.com/cat';

	private getCats(width: string): Observable<any> {
		const full_url = width ? `${this.catsURL}?width=${width}` : this.catsURL;
		return from(axios.get(full_url)).pipe(map((res: any) => res.data));
	}

	async searchCats(width: string): Promise<any> {
		const data$ = this.getCats(width).pipe();
		data$.subscribe(() => {});
		return await firstValueFrom(data$);
	}
}
