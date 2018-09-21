import { Component } from '@angular/core';

@Component({
  selector: 'my-root-component',
  templateUrl: './app.html',
  // template: `
  //   <h1>Foo</h1>
  //   <ul>
  //     <li>Bar</li>
  //   </ul>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mytitle = 'WHOHOOO!';


  //  quizzes = [
  //   "Quiz 1"
  //   , "Quiz 2"
  //   , "Quiz 3"
  // ];

  quizzes = [
    {name:  "Quiz 1", canDelete: false}
    , {name:  "Quiz 2", canDelete: false}
    , {name:  "Quiz 3", canDelete: false}
  ];

  // addFunnyQuiz() {
  //   window.alert('sdgsgf');  
  // }

  //addFunnyQuiz = () => window.alert('asdf');

  //addFunnyQuiz = () => this.quizzes.push("Funny Quiz");

  addFunnyQuiz = () => this.quizzes = [{name: "Modern Funny Quiz", canDelete: false}, ...this.quizzes];

  //addQuiz = () => window.alert(this.newQuizName);

  addQuiz = () => {
    console.log(this.newQuizName);
    this.quizzes = [...this.quizzes, {name: this.newQuizName, canDelete: true}];
    this.newQuizName = "";
  };


  newQuizName = "nonsense";

  deleteQuiz(quizeToelete) {
    this.quizzes = this.quizzes.filter(x => x!= quizeToelete);
  }
}
