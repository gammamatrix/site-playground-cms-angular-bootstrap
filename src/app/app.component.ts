import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'CMS Dashboard';

  public isReady = false;
  public isAuthenticated = false;

  constructor(private service: AuthService) {
    this.service.isAuthenticated.subscribe((logged) => {
      this.isAuthenticated = logged;
    });
  }

  ngOnInit() {
    this.isReady = true;
  }
}
