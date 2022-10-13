import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
    console.log(`onInit`);
    this.markdownService.renderer.heading = (text: string, level: number) => {
      console.log(`Level: ${level} Code: ${text}`);
      if (level === 6) {
        return '';
      }
      return `<h${level}>${text}</h${level}>`;
    };
  }

}