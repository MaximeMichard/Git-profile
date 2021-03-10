import { Component, OnInit } from '@angular/core';
import { GitService } from '../../services/git.service';
import { Git } from '../../models/git.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  git: Git;
  user: string;

  constructor(private ServiceGit: GitService) {
    this.git = new Git();
  }

  ngOnInit(): void {
    this.ServiceGit.getGit(this.git).subscribe((response) => {
      this.git.img = response.avatar_url;
      this.git.login = response.login;
      this.git.bio = response.bio;

      this.git.follower = response.followers;
      this.git.repos = response.public_repos;
      this.git.gits = response.public_gists;
      this.git.following = response.following;
    });
  }

  getValues(val) {
    this.user = val.user;
    localStorage.setItem('User', this.user);
    setTimeout(() => location.reload(), 1000);
  }
}
