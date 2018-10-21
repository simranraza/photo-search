import { Component, OnInit } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { PhotoService } from '../photo.service';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  items: [] = [];
  searchTextValue: string;
  constructor(public photoService:PhotoService) { }

  ngOnInit() {
    this.photoService.getAllFlickrPhotos().then((data)=>{
      console.log(data);
      this.items = data.data.items;
    });
  }

  private updateSearch(args){
    console.log(args);
    this.photoService.searchAllFlickrPhotos(args).then((data)=>{
      console.log(data);
      this.items = data.data.items;
    });
  }

}
