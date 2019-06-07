export class GenericAlert {
  message: string;
  timeout: number = 0;
  color: 'blue' | 'green' | 'red' | 'purple' | 'orange' = 'green';

  constructor(init?: Partial<GenericAlert>) {
    Object.assign(this, init);
  }
}
