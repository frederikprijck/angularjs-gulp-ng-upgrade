import { NgModule } from "@angular/core";
import { ShowsComponent } from "./shows/shows.component";

@NgModule({
  declarations: [ShowsComponent],
  exports: [ShowsComponent]
})
export class SharedModule {}
