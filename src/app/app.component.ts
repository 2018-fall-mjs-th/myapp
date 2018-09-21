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

    quizzes = [
      { name: "quiz1", canDelete: false }
      , { name: "quiz2", canDelete: false }
      , { name: "quiz3", canDelete: false }
    ]

  // addFunnyQuiz() {
  //   window.alert('sdgsgf');  
  // }

  //addFunnyQuiz = () => window.alert('asdf');

  //addFunnyQuiz = () => this.quizzes.push("Funny Quiz");

  addFunnyQuiz = () => this.quizzes = [{ name: "Modern Funny Quiz", canDelete: false },  ...this.quizzes];

  //addQuiz = () => window.alert(this.newQuizName);

  addQuiz = () => {
    console.log(this.newQuizName);
    this.quizzes = [...this.quizzes, { name: this.newQuizName, canDelete: true }];
    this.newQuizName = "";
  };


  newQuizName = "nonsense";

deleteQuiz = (quizToDelete) => {
  console.log(quizToDelete);

  // transform the view model.. ie re-initialize this.quizzes to a new array without the deleted quiz..
  // ..which is passed in as a parameter

  this.quizzes = this.quizzes.filter(x => x !== quizToDelete);

  //anything with same name (ie the duplicates will all delete)
  // this.quizzes = this.quizzes.filter(x => x.name !== quizToDelete.name);

  }

}
