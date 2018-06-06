import { OnInit, Component } from "@angular/core";
import { Episode } from "./episode.interface";
import { ActivatedRoute } from "@angular/router";
import { EpisodeService } from "./episode.service";

@Component({
    selector: "app-episode-detail",
    templateUrl: "./episodeDetails.component.html"
})

export class EpisodeDetailsComponent implements OnInit {
    episode: Episode;
    id: string;

    constructor(private route: ActivatedRoute, private episodeService: EpisodeService) {
        this.route.params.subscribe(params => {
            this.id = params["id"];
        });
    }

    ngOnInit(): void {
        this.episodeService.getEpisode({ id: this.id }).subscribe(response => {
            this.episode = response;
        });
    }
}