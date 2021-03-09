import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlGit } from '../config';

@Injectable()
export class GitService {
  constructor(private HttpClient: HttpClient) {}
  ngOnInit(): void {}

  getGit(git) {
    return this.HttpClient.get<any>(urlGit);
  }
}
