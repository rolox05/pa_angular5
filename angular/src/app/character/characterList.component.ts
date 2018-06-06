import { OnInit, Component } from "@angular/core";
import { Character } from "./character.interface";
import { CharacterService } from "./character.service";

@Component({
    selector: "app-character-list",
    templateUrl: "./characterList.component.html",
    styleUrls: ["./characterList.component.scss"]
})
export class CharacterListComponent implements OnInit {
    errorMessage: string;
    characters: Character[];
    collectionSize: number;
    currentPage: number;
    filterParam: any;

    constructor(private characterService: CharacterService) {
    }

    ngOnInit(): void {
        this.characterService.getCharacters().subscribe(response => {
            this.bindData(response);
        },
        error => {
            this.characters = [];
            this.errorMessage = "Error al cargar todos los personajes";
        });
    }

    getPage(event) {
        this.characterService.getFilteredCharacters({ page: this.currentPage, ...this.filterParam }).subscribe(response => {
            this.bindData(response);
        },
        error => {
            this.characters = [];
            this.errorMessage = "No hay resultados";
        });
    }

    filterCharacter(param) {
        this.filterParam = param;
        this.characterService.getFilteredCharacters(param).subscribe(response => {
            this.bindData(response);
        },
        error => {
            this.characters = [];
            this.errorMessage = "No hay resultados";
        });
    }

    bindData(data) {
        this.characters = data.results as Character[];
        this.errorMessage = "";
        this.collectionSize = data.info.count;
        this.currentPage = data.info.current;
    }
}