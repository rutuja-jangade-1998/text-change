import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
newPost = 'Add Your Content Here';
onAddPost(){
this.newPost = 'Post Changes as per Instruction of Rutuja Jangade';
}
}
