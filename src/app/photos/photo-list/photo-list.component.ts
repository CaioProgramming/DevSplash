import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photoData';
import { Subject } from 'rxjs';
import  { debounceTime } from 'rxjs/operators'
import { PhotoService } from '../photo/photoservice';


@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy{
  photos: Photo[] = [];
  title = 'DevSplash';
  subtitle = 'Your own photo gallery';
  filter: string = '';
  nome = 'caio';
  debounce: Subject<string> = new Subject<string>()
  hasMore: boolean = true
  currentPage: number = 1
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) {}

  ngOnDestroy(): void {
      this.debounce.unsubscribe()
  }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['username']
    this.photos = this.activatedRoute.snapshot.data['photos']
    this.subtitle = 'Hello ' + this.userName + ' you have ' + this.photos.length + ' photos :)'
    this.debounce
    .pipe(debounceTime(500))
    .subscribe(filter => this.filter = filter)
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photoList => {
      this.photos = this.photos.concat(...photoList);
      this.hasMore = photoList.length > 0
    })
  }
}
