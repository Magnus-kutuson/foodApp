import { Component } from '@angular/core';
import { ContentfulService } from '../../shared/services/contentful.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  
  
  constructor(private contentfulService: ContentfulService, private routes: ActivatedRoute) { }

  foodPost$: Observable<any> | undefined

  ngOnInit() {
    this.routes.params.subscribe(params => {
      const id = params['id'];
    
      this.foodPost$ = this.contentfulService.getEntry(id);
    });
   }

}

