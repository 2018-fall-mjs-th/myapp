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
  mytitle = 'Sylvie\'s app';

  // let's make quizzes an array of objects instead of strings
  quizzes = [
    { name: "Quiz 1", canDelete: false }
    , { name: "Quiz 2", canDelete: false }
    , { name: "Quiz 3", canDelete: false }
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

  deleteQuiz(quizToDelete) {
    //console.log(q);
    /* Transform the view model, in other words, reinitialize this.quizzes to a new 
    array without the quiz to delete (which is passedd as an arg/param)
    For every x in quizzes, if x isn't equal to q, put that x into the new quizzes */
    this.quizzes = this.quizzes.filter(x => x!==quizToDelete)
  }


  newQuizName = "nonsense";

}
