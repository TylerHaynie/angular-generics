export class GenericAlert {
  message: string;
  timeout: number = 0;
  class: string = 'normal';

  constructor(init?: Partial<GenericAlert>) {
    Object.assign(this, init);
  }
}
