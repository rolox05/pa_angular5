import { OnInit, Component } from "@angular/core";
import { Location } from "./location.interface";
import { ActivatedRoute } from "@angular/router";
import { LocationService } from "./location.service";

@Component({
    selector: "app-location-detail",
    templateUrl: "./locationDetails.component.html"
})

export class LocationDetailsComponent implements OnInit {
    location: Location;
    id: string;

    constructor(private route: ActivatedRoute, private locationService: LocationService) {
        this.route.params.subscribe(params => {
            this.id = params["id"];
        });
    }

    ngOnInit(): void {
        this.locationService.getLocation({ id: this.id }).subscribe(response => {
            this.location = response;
        });
    }
}