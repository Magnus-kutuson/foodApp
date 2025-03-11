import { Component } from '@angular/core';
import { ContentfulService } from '../../shared/services/contentful.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private contentfulService: ContentfulService) { }

  foodPosts$: Observable<any> | undefined

  ngOnInit() {
    this.foodPosts$ = this.contentfulService.getAllEntries()
  }
}
