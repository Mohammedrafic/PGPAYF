import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor() { }
  @Output() Filters = new EventEmitter<any>();
  ngOnInit(): void {
  }

  public showFilters: boolean = false;
  public searchTerm: any = '';
  public sortOrder: any = 'LowtoHigh';
  public priceRange: any = 5000;  // default price
  public minRating: any = 3;  // default rating

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  applyFilters() {
    const filter = {
      searchTerm: this.searchTerm,
      sortOrder: this.sortOrder,
      priceRange: this.priceRange,
      minRating: Number(this.minRating)
    }
    this.Filters.emit(filter);
    this.toggleFilters();
  }
}
