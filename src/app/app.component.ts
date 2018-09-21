import { Component } from '@angular/core';

@Component({
  selector: 'my-root-component',
  templateUrl: './app.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mytitle = 'myapp123456';


  quizzes = [
    { name: "Quiz 1", canDelete: false }
    , { name: "Quiz 2", canDelete: false }
    , { name: "Quiz 3", canDelete: false }
  ];


  addFunnyQuiz = () => this.quizzes = [{ name: "Modern Funny Quiz", canDelete: false }, ...this.quizzes];


  addQuiz = () => {
    console.log(this.newQuizName);
    this.quizzes = [...this.quizzes, { name: this.newQuizName, canDelete: true }];
    this.newQuizName = "";
  };

  deleteQuiz(quizToDelete) {
    // Transform the view model. Reinitialize this.quizzes to a new array without the "canDelete" quiz
    // passed in as an argument.

    // filter x (an array) and return x (a new array) keeping items where x is not equal to "quizToDelete" (ie where quizToDelete is false)
    this.quizzes = this.quizzes.filter(x => x !== quizToDelete);
  }


  newQuizName = "nonsense";

}
