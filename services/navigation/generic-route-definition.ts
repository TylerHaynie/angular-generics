export class GenericRouteDefinition {
  path: string = '/';
  display: string = 'UNASSIGNED';
  realitiveToCurrent: boolean = false;
  isBackButton: boolean = false;

  public constructor(init?: Partial<GenericRouteDefinition>) {
    Object.assign(this, init);
  }
}


