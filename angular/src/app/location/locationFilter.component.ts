import { OnInit, Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: "app-location-filter",
    templateUrl: "./locationFilter.component.html",
    outputs: ["name"]
})

export class LocationFilterComponent implements OnInit {
    name: string;
    type: string;
    dimension: string;
    @Output() valueChanges = new EventEmitter();

    constructor() {}

    ngOnInit(): void {
    }

    filterValues() {
        this.valueChanges.emit({
            name: this.name,
            type: this.type,
            dimension: this.dimension
        });
    }
}