import { OnInit, Component, Input } from "@angular/core";
import { Episode } from "./episode.interface";

@Component({
    selector: "app-episode",
    templateUrl: "./episode.component.html"// ,
    // styleUrls: ["./episode.component.scss"]
})

export class EpisodeComponent implements OnInit {
    @Input() episode: Episode;

    constructor() {}

    ngOnInit(): void {
    }
}