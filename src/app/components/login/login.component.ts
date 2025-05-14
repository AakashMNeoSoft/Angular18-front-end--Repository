import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/serv/auth.service';


// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <input type="text" [(ngModel)]="username" name="username" placeholder="Username" required />
      <input type="password" [(ngModel)]="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  `
})
// export class LoginComponent {

// }
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({ username: this.username, password: this.password }).subscribe({
      next: res => {
        this.auth.storeToken(res.token);
        this.router.navigate(['/products']);
      },
      error: err => alert('Login failed')
    });
  }
}
