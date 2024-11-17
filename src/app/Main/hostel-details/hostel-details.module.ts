import { NgModule } from "@angular/core";
import { HostelDetailsComponent } from "./hostel-details.component";
import { HotelHeaderComponent } from "./hotel-header/hotel-header.component";
import { ReviewSectionComponent } from "./review-section/review-section.component";
import { ImageGalleryComponent } from "./image-gallery/image-gallery.component";
import { AmenitiesComponent } from "./amenities/amenities.component";
import { LocationMapComponent } from "./location-map/location-map.component";
import { CommonModule } from "@angular/common";
import { spinnerModule } from "src/app/loader/spinner.module";

@NgModule({
  declarations: [
    HostelDetailsComponent,
    HotelHeaderComponent,
    ImageGalleryComponent,
    ReviewSectionComponent,
    AmenitiesComponent,
    LocationMapComponent
  ],
  imports: [
    // ReactiveFormsModule,
    // HttpClientModule,
    // HostelRoutingModule,
    // AgGridModule,
    // FormsModule,
    CommonModule,
    spinnerModule
  ],
  providers: []
})
export class HostelModule { }
