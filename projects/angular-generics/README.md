# Angular Generics

---

**!!! NOT READY PRODUCTION !!!**

---


# Controls
## Alert Component
 
| Inputs  | Outputs  | Selector | Service             |
|:--------|:---------|:---------|:--------------------|
|         |          | ag-alert | GenericAlertService |

##### alert-example.html
```
<div>
  <ag-alert></ag-alert>
</div>
```

##### alert-example.ts
```typescript
import { Component } from '@angular/core';
import { GenericAlertService, GenericAlert } from 'angular-generics';

@Component({
  selector:    'alert-example',
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
  



## Services
### GenericAlertService
+ asdas 
