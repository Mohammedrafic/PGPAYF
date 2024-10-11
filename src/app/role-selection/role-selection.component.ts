import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.scss']
})
export class RoleSelectionComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  Submit(data: number){
    this.route.navigate(['admin']);
  }

}
