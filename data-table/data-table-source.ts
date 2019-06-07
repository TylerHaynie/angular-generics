import { Subject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { GenericService } from '../services/generic.service';
import { SearchRequest, SearchResponse } from '../services/search';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTableSource<T> extends DataSource<T> {
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

  search(request: SearchRequest): void {
    console.log('Query', request);

    this.service.search<SearchResponse<T>>(request.endpoint, request)
      .then((report: SearchResponse<T>) => {
        this.dataSource.next(report.data);
        this._dataLength = report.recordCount;
      });
  }

}
