import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeVideo();
  }

  private initializeVideo(): void {
    const video = document.getElementById('bg-video') as HTMLVideoElement;
    if (video) {
      // Forcer le chargement de la vidéo
      video.load();

      // Gérer les erreurs de chargement
      video.onerror = (e) => {
        console.error('Erreur lors du chargement de la vidéo:', e);
      };

      // S'assurer que la vidéo joue
      video.play().catch(error => {
        console.error('Erreur lors de la lecture de la vidéo:', error);
      });
    }
  }
}
