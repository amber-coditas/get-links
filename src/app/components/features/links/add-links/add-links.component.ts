import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinksService } from './../../../../services/links/links.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-links',
  templateUrl: './add-links.component.html',
  styleUrls: ['./add-links.component.css']
})

export class AddLinksComponent implements OnInit {
  id: any;
  data: any;
  isAddLinkForm: boolean = true;
  addLinkForm: FormGroup;
  editLinkForm: FormGroup;
  constructor(private linksService: LinksService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.addLinkForm = new FormGroup({      
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });

    this.editLinkForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (typeof this.id != "undefined" && this.id != null) {
      this.linksService.getLinkById(this.id).subscribe((data: any[]) => {
        this.data = data;
        this.editLinkForm.get('title').setValue(this.data.title)
        this.editLinkForm.get('description').setValue(this.data.description)
        this.editLinkForm.get('category').setValue(this.data.category)
        this.isAddLinkForm = false;
      })
    } else {
      this.isAddLinkForm == true;
    }
  }

  onAddLinkSubmit() {
    if (this.addLinkForm.valid) {      
      this.linksService.addLink(this.addLinkForm.value).subscribe((data: any[]) => {        
        this.router.navigate(['/list-links']);
      })
    }
  }

  onEditLinkSubmit() {
    if (this.editLinkForm.valid) {      
      this.linksService.editLink(this.editLinkForm.value, this.data.id).subscribe((data: any[]) => {        
        this.router.navigate(['/list-links']);
      })
    }
  }

}


