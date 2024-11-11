import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from './Service/layout.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor() { }
  navbarItems: any;
  ngOnInit(): void {
  }

}
