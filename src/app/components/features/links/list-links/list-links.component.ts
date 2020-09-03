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
  constructor(private linksService: LinksService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.linksService.getAllLinks().subscribe((data: any[]) => {
      console.log(data);
      this.allLinks = data;
    })
  }

  navigateToUpdate(status: string, id?: number) {
    console.log(status,id);
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
