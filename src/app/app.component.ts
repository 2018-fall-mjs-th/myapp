import { Component } from '@angular/core';

@Component({
  selector: 'my-root-component',
  templateUrl: './app.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mytitle = 'myapp123456';


  quizzes = [
    { name: "Quiz 1" }
    , { name: "Quiz 2" }
    , { name: "Quiz 3" }
  ];


  addFunnyQuiz = () => this.quizzes = [{ name: "Modern Funny Quiz" }, ...this.quizzes];


  addQuiz = () => {
    console.log(this.newQuizName);
    this.quizzes = [...this.quizzes, { name: this.newQuizName }];
    this.newQuizName = "";
  };


  newQuizName = "nonsense";

}
