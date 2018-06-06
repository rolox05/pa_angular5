import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { APP_BASE_HREF } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { routing } from "./app.routes";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { NgDatepickerModule } from "ng2-datepicker";
import { FileUploadComponent } from "./tools/image.base64";

// Rick and Morty dependencies
import { CharacterComponent } from "./character/character.component";
import { CharacterService } from "./character/character.service";
import { TabPanelComponent } from "./tabpanel/tabpanel.component";
import { CharacterListComponent } from "./character/characterList.component";
import { CharacterFilterComponent } from "./character/characterFilter.component";
import { CharacterDetailsComponent } from "./character/characterDetails.component";
import { ResourcePipe } from "./pipes/resourcePipe.pipe";
import { LocationService } from "./location/location.service";
import { EpisodeService } from "./episode/episode.service";
import { LocationListComponent } from "./location/locationList.component";
import { EpisodeListComponent } from "./episode/episodeList.component";
import { LocationComponent } from "./location/location.component";
import { LocationFilterComponent } from "./location/locationFilter.component";
import { LocationDetailsComponent } from "./location/locationDetails.component";
import { EpisodeComponent } from "./episode/episode.component";
import { EpisodeDetailsComponent } from "./episode/episodeDetails.component";
import { EpisodeFilterComponent } from "./episode/episodeFilter.component";

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    // acá character declarations
    CharacterListComponent,
    CharacterComponent,
    CharacterFilterComponent,
    CharacterDetailsComponent,
    // acá location declarations
    LocationListComponent,
    LocationComponent,
    LocationFilterComponent,
    LocationDetailsComponent,
    // acá episode declarations
    EpisodeListComponent,
    EpisodeComponent,
    EpisodeFilterComponent,
    EpisodeDetailsComponent,
    // custom components
    TabPanelComponent,
    // custom pipes
    ResourcePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgDatepickerModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [
    // desde acá mis imports
    CharacterService,
    LocationService,
    EpisodeService,
    /* Los providers son @Inyectable, la siguiente es una forma de definirs un
     provider con un valor constante para poder inyectarlo*/
    { provide: APP_BASE_HREF, useValue: environment.baseHref }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
