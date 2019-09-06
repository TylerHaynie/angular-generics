export class MenuItem {
  name: string;
  display: string;
  icon: string;
  route: string;
  click: (item: MenuItem) => any;
  subItems: MenuItem[] = [];
  constructor(init?: Partial<MenuItem>) {
    Object.assign(this, init);
  }
}
