import { OnInit, Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: "app-character-filter",
    templateUrl: "./characterFilter.component.html",
    outputs: ["name"]
})

export class CharacterFilterComponent implements OnInit {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    @Output() valueChanges = new EventEmitter();

    constructor() {}

    ngOnInit(): void {
    }

    filterValues() {
        this.valueChanges.emit({
            name: this.name,
            status: this.status,
            species: this.species,
            type: this.type,
            gender: this.gender
        });
    }
}