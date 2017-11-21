import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  items = [
    {
      comments: '5 comments',
      title: 'Lets Blog all the time!',
      text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryderson cred.'
    },
    {
      comments: 2,
      title: 'Learn React and angular 5',
      text: 'Second item'
    },
    {
      comments: 3,
      title: 'Need Coffee.. Coffee ????',
      text: 'Third item'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
