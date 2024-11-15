import { NgModule } from "@angular/core";
import { HostelDetailsComponent } from "./hostel-details.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AgGridModule } from "ag-grid-angular";
import { HotelHeaderComponent } from "./hotel-header/hotel-header.component";
import { ReviewSectionComponent } from "./review-section/review-section.component";
import { ImageGalleryComponent } from "./image-gallery/image-gallery.component";
import { AmenitiesComponent } from "./amenities/amenities.component";
import { LocationMapComponent } from "./location-map/location-map.component";
import { HostelRoutingModule } from "./hostel-details-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HostelDetailsComponent,
    HotelHeaderComponent,
    ImageGalleryComponent,
    ReviewSectionComponent,
    AmenitiesComponent,
    LocationMapComponent,
  ],
  imports: [
    // ReactiveFormsModule,
    // HttpClientModule,
    // HostelRoutingModule,
    // AgGridModule,
    // FormsModule,
    CommonModule
  ],
  providers: []
})
export class HostelModule { }
