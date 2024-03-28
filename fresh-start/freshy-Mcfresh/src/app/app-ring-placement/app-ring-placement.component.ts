import { Component, ElementRef, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

@Component({
  selector: 'app-ring-placement',
  template: '<div><img src="path/to/hand-image.jpg" alt="Hand Image" id="handImage"></div>',
  styleUrls: ['./app-ring-placement.component.scss']
})
export class  AppRingPlacementComponent implements OnInit {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private ringModel: THREE.Object3D;

  constructor(private el: ElementRef) { 
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera
    this.renderer = new THREE.WebGLRenderer
    this.ringModel = new THREE.Object3D


  }

  ngOnInit(): void {
    // Initialize Three.js scene
    this.initScene();
  }

  private initScene(): void {
    // Create scene
    this.scene = new THREE.Scene();

    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.el.nativeElement.offsetWidth / this.el.nativeElement.offsetHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Create renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.el.nativeElement.offsetWidth, this.el.nativeElement.offsetHeight);
    this.el.nativeElement.appendChild(this.renderer.domElement);

    // Add click event listener to the image
    const handImage = this.el.nativeElement.querySelector('#handImage');
    handImage.addEventListener('click', () => {
      this.loadRingModel();
    });
  }

  private loadRingModel(): void {
    // Load 3D model of the ring
    const loader = new OBJLoader();
    loader.load('fresh-start/freshy-Mcfresh/src/assets/91-the_crowned_ring_obj_format/the_crowned_ring.obj', (object) => {
      this.ringModel = object;
      // Add ring model to the scene
      this.scene.add(this.ringModel);
    },
    undefined,
    (error) => {
      console.error('Error loading ring model:', error);
    });
  }
}
