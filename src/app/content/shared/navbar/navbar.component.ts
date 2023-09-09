import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _Renderer2:Renderer2,
    private _Router:Router
  ){}
  darkTheme: boolean = false;
  onOpenMenu(){
    console.log("clicked ===>")
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuBlockInner = document.querySelector('.menu-block-inner');
    this._Renderer2.addClass(menuOverlay, 'active')
    this._Renderer2.addClass(menuBlockInner, 'active')
  }
  onCloseMenu(){
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuBlockInner = document.querySelector('.menu-block-inner');
    this._Renderer2.removeClass(menuOverlay, 'active')
    this._Renderer2.removeClass(menuBlockInner, 'active')
  }
  ngOnInit(): void {
  }
  onClickToNavigate(navigationLink:string){
    this._Router.navigateByUrl(`/${navigationLink}`)
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuBlockInner = document.querySelector('.menu-block-inner');
    this._Renderer2.removeClass(menuOverlay, 'active')
    this._Renderer2.removeClass(menuBlockInner, 'active')
  }
  toggleDarkTheme(){
    this._Renderer2.addClass(document.body,'dark_theme')
    this.darkTheme = true


  }
  toggleLightTheme(){
    this._Renderer2.removeClass(document.body,'dark_theme')
    this.darkTheme = false
  }
}
