import { PAGE_STATE } from './page-state';
import { Observable, Subject } from 'rxjs';

export class PageBase<T> {
  public stateChange: Observable<PAGE_STATE>;
  private stateSubject: Subject<PAGE_STATE>;

  private _pageState: PAGE_STATE;
  public get pageState(): PAGE_STATE {
    return this._pageState;
  }
  public set pageState(v: PAGE_STATE) {
    this.setState(v);
  }
  
  private _pageData : T;
  public get pageData() : T {
    return this._pageData;
  }
  public set pageData(v : T) {
    this._pageData = v;
  }
  
  constructor() {
    this.stateSubject = new Subject<PAGE_STATE>();
    this.stateChange = this.stateSubject.asObservable();
  }

  create(): void {
    this.setState(PAGE_STATE.CREATING);
  }

  edit(): void {
    this.setState(PAGE_STATE.EDITING);
  }

  save(savePromise: Promise<any>): void {
    var previousState = this._pageState;
    this.setState(PAGE_STATE.SAVING);

    savePromise
      .then(() => {
        this.setState(PAGE_STATE.SAVED);
        this.setState(PAGE_STATE.VIEWING);
      })
      .catch(() => {
        this.setState(previousState);
      });
  }

  view() {
    this.setState(PAGE_STATE.VIEWING);
  }

  back() {
    this.cancel();
  }

  cancel(): void {
    if (this._pageState == PAGE_STATE.VIEWING || this._pageState == PAGE_STATE.CREATING) {
      this.close();
    }
    else {
      this.setState(PAGE_STATE.VIEWING);
    }
  }

  close(): void {
    this.setState(PAGE_STATE.CLOSING);
    this.setState(PAGE_STATE.CLOSED);
  }

  setState(state: PAGE_STATE) {
    this._pageState = state;
    console.log(`State Change: ${state}`);
    this.stateSubject.next(state);
  }

}