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
    AFRAME.registerComponent('load-model-on-click', {
      schema: {
        model: { type: 'string' },
        position: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
        rotation: { type: 'vec3', default: { x: 0, y: 0, z: 0 } }
      },
      init: function () {
        this.el.addEventListener('click', this.onClick.bind(this));
      },
      onClick: function () {
        const modelEntity = document.createElement('a-entity');
        modelEntity.setAttribute('obj-model', this.data.model);
        modelEntity.setAttribute('position', this.data.position);
        modelEntity.setAttribute('rotation', this.data.rotation);
        this.el.appendChild(modelEntity);
      }
    });
  }

 
}
