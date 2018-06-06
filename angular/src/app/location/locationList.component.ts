import { OnInit, Component } from "@angular/core";
import { Location } from "./location.interface";
import { LocationService } from "./location.service";

@Component({
    selector: "app-episode-list",
    templateUrl: "./locationList.component.html"// ,
    // styleUrls: ["./locationList.component.scss"]
})
export class LocationListComponent implements OnInit {
    errorMessage: string;
    locations: Location[];
    collectionSize: number;
    currentPage: number;
    filterParam: any;

    constructor(private locationService: LocationService) {}

    ngOnInit(): void {
        this.locationService.getLocations().subscribe(response => {
            this.bindData(response);
        },
        error => {
            this.locations = [];
            this.errorMessage = "Error al cargar los planetas";
        });
    }

    getPage(event) {
        this.locationService.getFilteredLocations({ page: this.currentPage, ...this.filterParam }).subscribe(response => {
            this.bindData(response);
        },
        error => {
            this.locations = [];
            this.errorMessage = "No hay resultados";
        });
    }

    filterLocations(param) {
        this.filterParam = param;
        this.locationService.getFilteredLocations(param).subscribe(response => {
            this.bindData(response);
        },
        error => {
            this.locations = [];
            this.errorMessage = "No hay resultados";
        });
    }

    bindData(data) {
        this.locations = data.results;
        this.errorMessage = "";
        this.collectionSize = data.info.count;
        this.currentPage = data.info.current;
    }
}