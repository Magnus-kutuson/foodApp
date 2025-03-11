import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private client = createClient({
    space: 'ot8jpk0mnrkz',
    accessToken: 'q8DmZtrjzBplVQL13RmfbtIrZcCtEs617CHs_FuXRxI',
  });

  constructor() { }
  

  getAllEntries() {
    const promise = this.client.getEntries();
    return from(promise);
  }

  getEntry(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
