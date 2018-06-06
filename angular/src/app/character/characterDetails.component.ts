import { OnInit, Component } from "@angular/core";
import { Character } from "./character.interface";
import { ActivatedRoute } from "@angular/router";
import { CharacterService } from "./character.service";

@Component({
    selector: "app-character-detail",
    templateUrl: "./characterDetails.component.html"
})

export class CharacterDetailsComponent implements OnInit {
    character: Character;
    id: string;

    constructor(private route: ActivatedRoute, private characterService: CharacterService) {
        this.route.params.subscribe(params => {
            this.id = params["id"];
        });
    }

    ngOnInit(): void {
        this.characterService.getCharacter({ id: this.id }).subscribe(response => {
            this.character = response;
        });
    }
}