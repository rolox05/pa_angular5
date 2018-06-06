import { OnInit, Component, Input } from "@angular/core";
import { Character } from "./character.interface";

@Component({
    selector: "app-character",
    templateUrl: "./character.component.html",
    styleUrls: ["./character.component.scss"]
})

export class CharacterComponent implements OnInit {
    @Input() character: Character;

    constructor() {}

    ngOnInit(): void {
    }
}