import { Component, OnInit } from '@angular/core';
import { FormBuilder       } from '@angular/forms';
import { FormGroup         } from '@angular/forms';
import { Validators        } from '@angular/forms';

@Component({
  selector: 'app-add-trail',
  templateUrl: './add-trail.component.html',
  styleUrls: ['./add-trail.component.css']
})
export class AddTrailComponent implements OnInit {

  _trailForm: any;

  constructor(
    private _formBuilder: FormBuilder
  ) { 
    this._trailForm = this._formBuilder.group({
      
    })
  }

  ngOnInit() {
  }

}
