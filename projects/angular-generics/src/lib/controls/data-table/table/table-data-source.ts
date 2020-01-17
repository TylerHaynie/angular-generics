import { Subject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

export class TableDataSource extends DataSource<any> {
  data: Observable<any>;
  private dataSource: Subject<any>;

  constructor() {
    super();
    this.dataSource = new Subject<any>();
    this.data = this.dataSource.asObservable();
  }

  connect(): Observable<any> {
    return this.data;
  }

  disconnect() {
    this.dataSource.complete();
  }

  update(data: any) {
    this.dataSource.next(data);
  }
}
