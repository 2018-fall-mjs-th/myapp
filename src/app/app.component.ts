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
  mytitle = 'myapp';

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

  addFunnyQuiz = () => this.quizzes = [{ name: "Modern Funny Quiz", canDelete: true }, ...this.quizzes]; //spread operator

  //addQuiz = () => window.alert(this.newQuizName);

  addQuiz = () => {
    console.log(this.newQuizName);
    this.quizzes = [...this.quizzes, { name: this.newQuizName, canDelete: true }];
    this.newQuizName = "";
  };


  newQuizName = "nonsense";

}
