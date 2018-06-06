import { OnInit, Component, Input } from "@angular/core";
import { Location } from "./location.interface";

@Component({
    selector: "app-location",
    templateUrl: "./location.component.html"// ,
    // styleUrls: ["./location.component.scss"]
})

export class LocationComponent implements OnInit {
    @Input() location: Location;

    constructor() {}

    ngOnInit(): void {
    }
}