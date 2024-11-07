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
  constructor(private route: Router, private service: LayoutService, private toastr: ToastrService) { }
  navbarItems: any;
  ngOnInit(): void {
    let userRole = localStorage.getItem('userRole');
    this.service.GetLayoutData(userRole).subscribe((res: any) => {
      if (res.isSuccess) {
        this.navbarItems = res.content;
      } else {
        this.toastr.error(res.message, 'Error');
      }
    });
  }

  isCollapsed = false;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubList(item: any) {
    item.isOpen = !item.isOpen;
  }

  Navigate(path: any) {
    if (path != undefined) {
      this.route.navigate([path]);
    }
  }
}
