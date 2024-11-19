import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PhotoModalComponent } from 'src/app/Main/hostel-details/image-gallery/photo-modal/photo-modal.component';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @ViewChild('photoModal') photoModal!: PhotoModalComponent;
  @Input() images: string[] = [];
  NoImgMsg: boolean = false;
  photosList: string[] = [];
  clickedPhoto: string | null = null;
  isModalOpen = false;
  constructor() {}

  ngOnInit(): void {
    if(this.images.length < 1){
      this.NoImgMsg = true;
    }else{
      this.photosList = this.images;
    }
  }

  openModal() {
    this.isModalOpen = true;
    this.clickedPhoto = this.photosList[0];
  }

  closeModal() {
    this.isModalOpen = false;
  }

  selectPhoto(photo: any) {
    this.clickedPhoto = photo;
  }

  addPhoto(newPhoto: any) {
    if (newPhoto) {
      this.photosList.push(newPhoto);
    }
  }
}
