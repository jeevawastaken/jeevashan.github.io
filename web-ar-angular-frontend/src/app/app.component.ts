import { Component,OnInit } from '@angular/core';
import 'aframe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';
   
  constructor() { }

  ngOnInit(): void {
    // Register your custom A-Frame component here
    AFRAME.registerComponent('model-loader', {
      init: function () {
        const sceneEl = this.el.sceneEl;
    
        // Add HTML button element
        const button = document.createElement('button');
        button.textContent = 'Load Model';
        button.style.position = 'absolute';
        button.style.top = '20px';
        button.style.left = '20px';
        button.addEventListener('click', () => {
          // Load the OBJ model
          const modelEl = document.createElement('a-obj-model');
          modelEl.setAttribute('src', 'path/to/your/model.obj');
          modelEl.setAttribute('position', '0 1 -3'); // Adjust position as needed
          sceneEl.appendChild(modelEl);
        });
    
        // Append button to the A-Frame scene
        sceneEl.appendChild(button);
      }
    });
  }

 
}
