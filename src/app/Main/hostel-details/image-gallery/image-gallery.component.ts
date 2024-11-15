import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @Input() images: string[] = [];
  NoImgMsg: boolean = false;
  constructor() {}

  ngOnInit(): void {
    if(this.images.length < 1){
      this.NoImgMsg = true;
    }
  }

  viewAllPhotos(): void {
    console.log('Redirect to All Photos View');
    // Add logic to navigate to the all photos view or open a modal.
  }
}
