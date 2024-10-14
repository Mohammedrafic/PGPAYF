import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private route: Router) { }
  navbarItems: any;
  ngOnInit(): void {
    let userRole = localStorage.getItem('userRole');
    if (userRole == 'Admin') {
      this.navbarItems = [
        { name: 'Dashboard', isOpen: false, path: 'main/dashboard', imgpath: "assets/images/dashboard.png" },
        {
          name: 'General',
          subList: [
            { name: 'Request', path: 'main/request', imgpath: "assets/images/quote-request.png" },
            { name: 'Management', path: 'management', imgpath: "assets/images/warning.png" },
          ],
          isOpen: false,
          imgpath: "assets/images/data-management.png"
        },
        {
          name: 'Help',
          subList: [
            { name: 'Contact', path: 'contact', imgpath: "assets/images/contact-book.png" },
            { name: 'Feedback', path: 'feedback', imgpath: "assets/images/good-feedback.png" },
          ],
          isOpen: false,
          imgpath: "assets/images/helpdesk.png"
        },
        {
          name: 'Logout',
          isOpen: false,
          path: '',
          imgpath: "assets/images/icons/power-off.png"
        },
      ];
    } else if (userRole == 'User') {
      this.navbarItems = [
        { name: 'Dashboard', isOpen: false, path: 'main/userdashboard', imgpath: "assets/images/dashboard.png" },
        {
          name: 'General',
          subList: [
            { name: 'Request', path: 'main/request', imgpath: "assets/images/quote-request.png" },
            { name: 'Management', path: 'management', imgpath: "assets/images/warning.png" },
          ],
          isOpen: false,
          imgpath: "assets/images/data-management.png"
        },
        {
          name: 'Help',
          subList: [
            { name: 'Contact', path: 'contact', imgpath: "assets/images/contact-book.png" },
            { name: 'Feedback', path: 'feedback', imgpath: "assets/images/good-feedback.png" },
          ],
          isOpen: false,
          imgpath: "assets/images/helpdesk.png"
        },
        {
          name: 'Logout',
          isOpen: false,
          path: '',
          imgpath: "assets/images/icons/power-off.png"
        },
      ];
    }
  }

  isCollapsed = false;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubList(item: any) {
    item.isOpen = !item.isOpen;
  }

  Navigate(path: any) {
    this.route.navigate([path]);
  }
}
