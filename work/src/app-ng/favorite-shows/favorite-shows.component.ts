import { Component, Inject } from "@angular/core";
import { ShowsServiceToken } from "../appjs-providers";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-favorite-shows",
  templateUrl: "favorite-shows.component.html"
})
export class FavoriteShowsComponent {
  shows: any[];

  constructor(
    @Inject(ShowsServiceToken) private showsService: any,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    return this.showsService.getAllFavorites().then((shows) => {
      this.shows = shows;
    });
  }

  unfavoriteShow(id) {
    this.showsService.unfavoriteShow(id).then(() => {
      this.toastr.info("Unfavorite Succesfull");
      return this.getData();
    });
  }

  removeShow(id) {
    this.showsService.removeShow(id).then(function() {
      return this.getData();
    });
  }
}
