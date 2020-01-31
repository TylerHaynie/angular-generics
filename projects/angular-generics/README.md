# Angular Generics

---

**!!! Work In Progress !!!**

---

## Content

| Selector    | Output     |
|:-----------:|:----------:|
| ag-content  | -          |

| Input   | Type             | Default Value |
|:--------|:-----------------|:-------------:|
| height  | string \| number | 'inherit'     |
| width   | string \| number | 'inherit'     |
| gap     | string \| number |               |
| pad     | string \| number |               |
| place   | string           | 'start'       |
| flow    | string           | 'row'         |
| rows    | string \| number | 'auto'        |
| cols    | string \| number | 'auto'        |


##### app.module.ts
```typescript
import { GenericContentModule } from 'angular-generics';

@NgModule({
  imports: [
    GenericContentModule
  ]
})
```

##### content-example.html
```html
  <ag-content [height]="200" [width]="'100%'" [rows]="1" [cols]="4"
              [gap]="5" [pad]="5" [place]="'start'" [flow]="row">

              <!-- content -->

  </ag-content>
```

##### another-content-example.html
```html
  <ag-content [height]="'1.8em'" [width]="25" [rows]="'1fr'"
              [cols]="'1fr 1fr'" [gap]="'5px 10px'" [flow]="col"
              [pad]="'5px 5px 1px 5px'" [place]="'center center'">

              <!-- content -->

  </ag-content>
```


## Alert

| Selector | Input  | Output  | Service             |
|:---------|:------:|:-------:|:--------------------|
| ag-alert | -      | -       | GenericAlertService |

##### app.module.ts
```typescript
import { GenericAlertModule,
         GenericAlertService } from 'angular-generics';

@NgModule({
  imports: [
    GenericAlertModule
  ],
  providers: [
    GenericAlertService,
  ]
})
```

##### alert-example.html
```html
  <ag-alert></ag-alert>
```

##### alert-example.ts
```typescript
import { Component } from '@angular/core';
import { GenericAlertService, GenericAlert } from 'angular-generics';

@Component({
  templateUrl: './alert-example.html',
})
export class AlertExampleComponent {

  constructor(private alertService: GenericAlertService) { }

  showAlert() {
    let alert = new GenericAlert();
    alert.message = "You have an alert!";
    alert.timeout = 2000; // optional

    this.alertService.addAlert(alert);
  }
}
```

##### GenericAlert
```typescript
export class GenericAlert {
  message: string;
  timeout: number;
}
```


## Modal

| Selector |
|:---------|
| ag-modal |

| Input   | Type               | Default Value |
|:--------|:-------------------|---------------|
| footer  | TemplateRef\<any\> |               |
| header  | TemplateRef\<any\> |               |
| title   | string             |               |

| Output   | Type                 |
|:---------|:--------------------:|
| closed   | -                    |

##### app.module.ts
```typescript
import { GenericModalModule } from 'angular-generics';

@NgModule({
  imports: [
    GenericModalModule
  ]
})
```

##### modal-example.html
```html
  <button (click)="exampleModal.open()">Open Modal</button>

  <ag-modal #exampleModal [title]="'Example Modal'">

    <!-- content -->

  </ag-modal>
```

##### modal-example.ts
```typescript
import { Component } from '@angular/core';

@Component({
  templateUrl: './modal-example.html',
})
export class ModalExampleComponent {

  constructor() { }

}
```

## Button

| Selector               |
|:-----------------------|
| ag-button              |

| Input       | Type               | Default Value |
|:------------|:-------------------|---------------|
| width       | string \| number   | 'inherit'     |
| height      | string \| number   | 'inherit'     |
| fontSize    | string \| number   | 'inherit'     |
| disabled    | boolean            | false         |

| Output      | Type                 |
|:------------|:--------------------:|
| click       | -                    |

##### app.module.ts
```typescript
import { GenericButtonModule } from 'angular-generics';

@NgModule({
  imports: [
    GenericButtonModule
  ]
})
```

##### button-example.html
```html
<ag-button (click)="buttonClicked()">Example</ag-button>
```

##### button-example.ts
```typescript
import { Component } from '@angular/core';

@Component({
  templateUrl: './button-example.html',
})
export class ButtonExampleComponent {

  constructor() { }

  buttonClicked(){
    // example button clicked
  }
}
```

more documentation soon