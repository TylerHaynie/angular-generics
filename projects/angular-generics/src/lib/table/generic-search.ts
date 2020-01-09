export class GenericSearchRequest {
  filter: { [field: string]: string; } = {};
  take: number = 100;
  page: number = 1;
  fields: string[] = [];
  sort: {
    field: string,
    direction: 'asc' | 'dsc'
  };

  constructor() { }
}

export class GenericSearchResponse<T> {
  data: T[] = [];
  page: number = 0;
  take: number = 0;
  recordCount: number = 0;
  errors: any[] = [];

  constructor() { }
}
