import { Subject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { Injectable } from '@angular/core';
import { GenericService } from '../services/generic-generic.service';
import { GenericSearchRequest, GenericSearchResponse } from '../services/generic-search';

@Injectable({
  providedIn: 'root'
})
export class GenericDataSource<T> extends DataSource<T> {
  data: Observable<T[]>;

  private _dataLength: number = 0;
  public get dataLength(): number {
    return this._dataLength;
  }

  private dataSource: Subject<T[]>;

  constructor(private service: GenericService) {
    super();
    this.dataSource = new Subject<T[]>();
    this.data = this.dataSource.asObservable();
  }

  connect(): Observable<T[]> {
    return this.data;
  }

  disconnect() {
    this.dataSource = null;
    this.data = null;
  }

  search(request: GenericSearchRequest): void {
    console.log('Query', request);

    this.service.search<T>(request)
      .then((report: GenericSearchResponse<T>) => {
        this._dataLength = report.recordCount;
        this.dataSource.next(report.data);
      });
  }

}
