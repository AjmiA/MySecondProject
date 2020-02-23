import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  @Input() id;
  @Input() callback: Function;


  constructor() { }

  ngOnInit() {
  }

}
