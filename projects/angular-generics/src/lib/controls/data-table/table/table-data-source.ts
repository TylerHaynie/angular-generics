import { Subject, Observable } from 'rxjs';

export class TableDataSource {
  data: Observable<any>;
  private dataSource: Subject<any>;

  constructor() {
    this.dataSource = new Subject<any>();
    this.data = this.dataSource.asObservable();
  }

  update(data: any) {
    this.dataSource.next(data);
  }
}
