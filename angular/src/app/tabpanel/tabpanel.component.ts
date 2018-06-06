import { OnInit, Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "tab-panel",
    templateUrl: "./tabpanel.component.html"// ,
    // styleUrls: ["./character.component.scss"]
})
export class TabPanelComponent implements OnInit {
    model: string = "characters";

    constructor(private route: Router) {
        route.events.subscribe((url: any) => {
            this.model = url.url ? url.url.split("/")[1] : "characters";
        });
    }

    ngOnInit(): void {
    }

    goTo(tabId: string) {
        this.route.navigate([tabId]);
    }
}