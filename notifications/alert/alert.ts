export class Alert {
  message: string;
  timeout: number = 0;
  color: 'blue' | 'green' | 'red' | 'purple' | 'orange' = 'green';

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}
