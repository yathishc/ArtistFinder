import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent  {
  searchStr: string;
  srs: Artist[];

  constructor(private _spotifyService: SpotifyService) { }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr).subscribe(
      res => {this.srs = res.artists.items});
  }
}
