import { Component,Renderer2} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private renderer: Renderer2) {}


  onToggleColorTheme(event){
    // console.log(event.detail.checked)
    if(event.detail.checked){
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      // document.body.setAttribute('color-theme', 'dark')
    }
    else{
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }

  }

}
