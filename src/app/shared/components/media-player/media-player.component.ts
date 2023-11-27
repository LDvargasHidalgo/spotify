import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdaily.jstor.org%2Fwp-content%2Fuploads%2F2023%2F01%2Fgood_times_with_bad_music_1050x700.jpg&tbnid=NOHyN7lkqXnXyM&vet=12ahUKEwiA-ajDm9OCAxVzlYkEHWr1ACIQMygAegQIARBv..i&imgrefurl=https%3A%2F%2Fdaily.jstor.org%2Fgood-times-with-bad-music%2F&docid=w7_MiASLcQh7tM&w=1050&h=700&q=music&ved=2ahUKEwiA-ajDm9OCAxVzlYkEHWr1ACIQMygAegQIARBv',
    album: 'Be Your Lullaby',
    name: 'Gioli & Assia',
    url: 'https://www.youtube.com/watch?v=9qk-vZ1qicI',
    _id: 1
  };

  constructor() {}
  ngOnInit(): void {

  }
}
