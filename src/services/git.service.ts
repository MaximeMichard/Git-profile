import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlGit } from '../config';
/* import { urlGit } from '../app/card/card.component'; */

@Injectable()
export class GitService {
  constructor(private HttpClient: HttpClient) {}
  ngOnInit(): void {}

  getGit(git) {
    return this.HttpClient.get<any>(urlGit);
  }
}
