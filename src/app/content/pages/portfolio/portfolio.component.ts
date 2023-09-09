import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];
  loading!:boolean;
  constructor(
    private _ApiService:ApiService
  ) { }

  ngOnInit(): void {
    this.showPortfolio()
  }
  showPortfolio(){
    this.loading = true;
    this._ApiService.getAllData().subscribe(
      (response) => {
        this.projects = response.projects
        this.loading = false;

      }
    )
  }
}
