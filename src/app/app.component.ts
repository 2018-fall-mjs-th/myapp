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
  mytitle = 'myapp123456';


  //  quizzes = [
  //   "Quiz 1"
  //   , "Quiz 2"
  //   , "Quiz 3"
  // ];

  // addFunnyQuiz() {
  //   window.alert('sdgsgf');  
  // }

  //addFunnyQuiz = () => window.alert('asdf');

  //addFunnyQuiz = () => this.quizzes.push("Funny Quiz");

  //addFunnyQuiz = () => this.quizzes = ["Modern Funny Quiz", ...this.quizzes];

  //addQuiz = () => window.alert(this.newQuizName);

  /*
  addQuiz = () => {
    console.log(this.newQuizName);
    this.quizzes = [...this.quizzes, this.newQuizName];
    this.newQuizName = "";
  };
  newQuizName = "nonsense";
  */

  /* ILEMKE: New code to add a delete button for new entries*/
  quizzes = [
    { name: "Quiz 1", canDelete: false },
    { name: "Quiz 2", canDelete: false},
    { name: "Quiz 3", canDelete: false }
  ];

  addQuiz = () => {
    this.quizzes = [...this.quizzes, {name: this.newQuizName, canDelete: true}];
  }

  addFunnyQuiz = () => this.quizzes = [{name: "Modern Funny Quiz", canDelete: false}, ...this.quizzes];

  // Version 1.0
  deleteThisQuiz = (quizToDelete) => {
    console.log(quizToDelete);
    //this.quizzes = this.quizzes.filter(quiz => quiz.name != q.name);
    this.quizzes = this.quizzes.filter(quiz => quiz != quizToDelete);
  }

  // Version 2.0
  deleteThisQuiz2 = () => {
    console.log(this.name);
  }

  
}
