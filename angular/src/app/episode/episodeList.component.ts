import { OnInit, Component } from "@angular/core";
import { Episode } from "./episode.interface";
import { EpisodeService } from "./episode.service";

@Component({
    selector: "app-episode-list",
    templateUrl: "./episodeList.component.html"// ,
    // styleUrls: ["./episodeList.component.scss"]
})
export class EpisodeListComponent implements OnInit {
    errorMessage: string;
    episodes: Episode[];
    collectionSize: number;
    currentPage: number;
    filterParam: any;

    constructor(private episodeService: EpisodeService) {}

    ngOnInit(): void {
        this.episodeService.getEpisodes().subscribe(
            response => {
                this.bindData(response);
            },
            error => {
                this.episodes = [];
                this.errorMessage = "Error al cargar todos los episodios";
            }
        );
    }

    getPage(event) {
        this.episodeService.getFilteredEpisodes({ page: this.currentPage, ...this.filterParam }).subscribe(
            response => {
                this.bindData(response);
            },
            error => {
                this.episodes = [];
                this.errorMessage = "No hay resultados";
            }
        );
    }

    filterEpisodes(param) {
        this.filterParam = param;
        this.episodeService.getFilteredEpisodes(param).subscribe(
            response => {
                this.bindData(response);
            },
            error => {
                this.episodes = [];
                this.errorMessage = "No hay resultados";
            }
        );
    }

    bindData(data) {
        this.episodes = data.results;
        this.errorMessage = "";
        this.collectionSize = data.info.count;
        this.currentPage = data.info.current;
    }
}