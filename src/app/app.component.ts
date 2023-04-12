import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PhotoService } from './photos/photo/photoservice';
import { Photo } from './photos/photo/photoData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'CaioSplash';
  subtitle = 'You have 0 photos'

  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
    .listFromUser('flavio')
    .subscribe(photos => {
      this.photos = photos
      this.subtitle = `You have ${photos.length} photos`
  },
  error => {
    this.title = "Erro inesperado!"
    this.subtitle = `Error na requisição ${error.message}`
    console.log(error)
  });
  }



}
