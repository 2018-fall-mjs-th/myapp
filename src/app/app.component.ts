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


  // quizzes = [
  //   "Quiz 1"
  //   , "Quiz 2"
  //    , "Quiz 3"

  quizzes = [
    {name: "Quiz 1", canDelete: false}
    , {name: "Quiz 1", canDelete: false}
    , {name: "Quiz 1", canDelete: false}

  ];

  // addFunnyQuiz() {
  //   window.alert('sdgsgf');  
  // }

  //addFunnyQuiz = () => window.alert('asdf');

  //addFunnyQuiz = () => this.quizzes.push("Funny Quiz");

  addFunnyQuiz = () => this.quizzes = [{ name: "Modern Funny Quiz", canDelete: false}, ...this.quizzes];

  //addQuiz = () => window.alert(this.newQuizName);

  addQuiz = () => {
    console.log(this.newQuizName);
    this.quizzes = [...this.quizzes, {name: this.newQuizName, canDelete: true}];
    this.newQuizName = "";
  };


  newQuizName = "nonsense";

  //this is javaScript 

  deleteQuiz(quizTodelete) {
    console.log((quizTodelete);

    //Transform the view model... In other words, reinitialize
    //this.quizzes to a new array withour the quis to delete. which
    //is paased in as an argument or parameter 

    this.quizzes = this.quizzes.filter (x => x.name !== quizTodelete.name);

  }

}
