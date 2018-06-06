import { OnInit, Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: "app-episode-filter",
    templateUrl: "./episodeFilter.component.html",
    outputs: ["name"]
})

export class EpisodeFilterComponent implements OnInit {
    name: string;
    code: string;
    @Output() valueChanges = new EventEmitter();

    constructor() {}

    ngOnInit(): void {
    }

    filterValues() {
        this.valueChanges.emit({
            name: this.name,
            code: this.code
        });
    }
}