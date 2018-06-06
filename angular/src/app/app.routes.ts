import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Rick and morty imports
import { CharacterListComponent } from "./character/characterList.component";
import { CharacterDetailsComponent } from "./character/characterDetails.component";
import { LocationListComponent } from "./location/locationList.component";
import { LocationDetailsComponent } from "./location/locationDetails.component";
import { EpisodeListComponent } from "./episode/episodeList.component";
import { EpisodeDetailsComponent } from "./episode/episodeDetails.component";

// Route Configuration
export const routes: Routes = [
  { path: "characters", component: CharacterListComponent },
  { path: "",   redirectTo: "/characters", pathMatch: "full" },
  { path: "characters/:id/details", component: CharacterDetailsComponent },
  { path: "locations", component: LocationListComponent },
  { path: "locations/:id/details", component: LocationDetailsComponent },
  { path: "episodes", component: EpisodeListComponent },
  { path: "episodes/:id/details", component: EpisodeDetailsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
