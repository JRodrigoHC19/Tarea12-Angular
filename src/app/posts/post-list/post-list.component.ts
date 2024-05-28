import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts = [
    {
      "id": 0,
      "title": "Nueva tecnología revoluciona el almacenamiento de energía",
      "description": "Investigadores han desarrollado una batería de larga duración que podría transformar el sector energético.",
      "date": "25-10-2024"
    },
    {
      "id": 1,
      "title": "Descubren fósil de dinosaurio en perfecto estado",
      "description": "Un equipo de paleontólogos ha hallado un fósil de dinosaurio que proporciona nueva información sobre su evolución.",
      "date": "25-10-2024"
    },
    {
      "id": 2,
      "title": "Avances en inteligencia artificial mejoran la detección de enfermedades",
      "description": "Nuevas herramientas de IA están permitiendo diagnósticos médicos más rápidos y precisos.",
      "date": "25-10-2024"
    },
    {
      "id": 3,
      "title": "Iniciativa global busca reducir la contaminación plástica en los océanos",
      "description": "Varias organizaciones se han unido para lanzar un programa de limpieza y concienciación sobre el plástico en los mares.",
      "date": "25-10-2024"
    }
  ]

  constructor(private router: Router){  }

  getPosts(id: number){
    this.router.navigate(['posts', id])

  }
}
