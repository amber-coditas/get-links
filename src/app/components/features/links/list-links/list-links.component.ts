import { Component, OnInit } from '@angular/core';
import { LinksService } from './../../../../services/links/links.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.css']
})
export class ListLinksComponent implements OnInit {
  allLinks: any;
  isAdmin: boolean = false;
  constructor(private linksService: LinksService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if (typeof user != "undefined" && user != null) {
      user.userType == 2 ? this.isAdmin = true : this.isAdmin = false;
    }
    this.linksService.getAllLinks().subscribe((data: any[]) => {
      this.allLinks = data;
    })
  }

  navigateToUpdate(status: string, id?: number) {
    if (status == "edit")
      this.router.navigate(['update-links', id]);
    else if (status == 'add')
      this.router.navigate(['update-links']);
  }

  deleteLinkById(id: number) {
    this.linksService.deleteLinkById(id).subscribe((data: any[]) => {
      this.router.navigate(['update-links']);
      this.router.navigate(['list-links']);
    })
  }



}
