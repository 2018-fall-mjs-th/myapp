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

  addFunnyQuiz = () => this.quizzes = ["Modern Funny Quiz", ...this.quizzes];

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
    { name: "Quiz 1" },
    { name: "Quiz 2" },
    { name: "Quiz 3" }
  ];

  addQuiz = () => {
    this.quizzes = [...this.quizzes, {name: this.newQuizName}];
  }



}
