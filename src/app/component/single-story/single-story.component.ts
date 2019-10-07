import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-story',
  templateUrl: './single-story.component.html',
  styleUrls: ['./single-story.component.scss']
})
export class SingleStoryComponent implements OnInit {
  @Input('story') story;

  constructor() { }

  ngOnInit() {
  }

}
