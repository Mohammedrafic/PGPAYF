import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../Service/layout.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {
  navbarItems: any;
  isCollapsed = false;
  hoveredItem: any;
  isHover: boolean = false;

  constructor(
    private route: Router, 
    private service: LayoutService, 
    private toastr: ToastrService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const userRole = localStorage.getItem('userRole');
    this.service.GetLayoutData(userRole).subscribe((res: any) => {
      if (res.isSuccess) {
        this.navbarItems = res.content;
        console.log(this.navbarItems)
        this.cdRef.detectChanges();
      } else {
        this.toastr.error(res.message, 'Error');
      }
    });
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.hoveredItem = null;
    }
  }

  showTooltip(item: any) {
    this.hoveredItem = item;
  }

  hideTooltip() {
    this.hoveredItem = null;
  }

  toggleSubList(item: any) {
    item.isOpen = !item.isOpen;
  }

  Navigate(path: any) {
    if (path) {
      this.route.navigate([path]);
    }
  }
}
