import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HostelDetailsComponent } from "./hostel-details.component";
import { HotelHeaderComponent } from "./hotel-header/hotel-header.component";
import { ReviewSectionComponent } from "./review-section/review-section.component";
import { ImageGalleryComponent } from "./image-gallery/image-gallery.component";
import { AmenitiesComponent } from "./amenities/amenities.component";
import { LocationMapComponent } from "./location-map/location-map.component";
import { CommonModule } from "@angular/common";
import { spinnerModule } from "src/app/loader/spinner.module";
import { PhotoModalComponent } from "./image-gallery/photo-modal/photo-modal.component";

@NgModule({
  declarations: [
    HostelDetailsComponent,
    HotelHeaderComponent,
    ImageGalleryComponent,
    ReviewSectionComponent,
    AmenitiesComponent,
    LocationMapComponent,
    PhotoModalComponent
  ],
  imports: [
    CommonModule,
    spinnerModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HostelModule { }
