import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: "[stop-click-prop]"
})
export class StopClickProp {
    @HostListener("mousedown", ["$event"])
    public onMouseDown(event: any): void { event.stopPropagation(); }

    @HostListener("click", ["$event"])
    public onClick(event: any): void { event.stopPropagation(); }
}