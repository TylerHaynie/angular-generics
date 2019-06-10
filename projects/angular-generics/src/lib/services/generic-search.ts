export class GenericSearchRequest {
  endpoint: string = '';
  filter: { [field: string]: string; } = {};
  take: number = 100;
  page: number = 1;
  fields: string[] = [];
  sort: {
    field: string,
    direction: 'asc' | 'dsc'
  };

  constructor(init?: Partial<GenericSearchRequest>) {
    Object.assign(this, init);
  }
}

export class GenericSearchResponse<T> {
  data: T[] = [];
  page: number = 0;
  take: number = 0;
  recordCount: number = 0;

  constructor(init?: Partial<GenericSearchResponse<T>>) {
    Object.assign(this, init);
  }
}
