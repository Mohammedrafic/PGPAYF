import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() photos: string[] = []; // All photos from parent
  @Input() selectedPhoto: string | null = null; // Currently selected photo
  @Output() close = new EventEmitter<void>(); // Close event
  @Output() selectPhoto = new EventEmitter<string>(); // Photo selection event
  @Output() addPhoto = new EventEmitter<string>(); // Add photo event

  // Emit close event
  closeModal() {
    this.close.emit();
  }

  // Emit selected photo
  onPhotoClick(photo: string) {
    this.selectPhoto.emit(photo);
  }

  // Emit add photo event
  addNewPhoto() {
    const newPhoto = prompt('Enter the URL of the new photo:');
    if (newPhoto) {
      this.addPhoto.emit(newPhoto);
    }
  }
}
