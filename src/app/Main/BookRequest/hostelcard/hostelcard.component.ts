import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hostelcard',
  templateUrl: './hostelcard.component.html',
  styleUrls: ['./hostelcard.component.scss']
})
export class HostelcardComponent implements OnInit {
  @Input() details: any;
  @Input() HostelName: any;
  @Input() HostelAddress: any;
  @Input() HostelStatus: any = 'Good';
  @Input() ReviewCount: any;
  @Input() Rating: any;
  @Input() ReviewText: any;
  @Input() Offer: any;
  JoiningDate: any;
  @Input() Amount: any;
  @Input() DiscountAmount: any;
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.JoiningDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

}
