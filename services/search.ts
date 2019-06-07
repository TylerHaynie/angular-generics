export class SearchRequest {
  endpoint: string = '';
  filter: { [field: string]: string; } = {};
  take: number = 100;
  page: number = 1;
  fields: string[] = [];
  sort: {
    field: string,
    direction: 'asc' | 'dsc'
  };

  constructor(init?: Partial<SearchRequest>) {
    Object.assign(this, init);
  }
}

export class SearchResponse<T>{
  data: T[] = [];
  page: number = 0;
  take: number = 0;
  recordCount: number = 0;

  constructor(init?: Partial<SearchResponse<T>>) {
    Object.assign(this, init);
  }
}
