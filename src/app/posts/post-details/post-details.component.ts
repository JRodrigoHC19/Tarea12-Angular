import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: any;
  id: number;

  posts = [
    {
      "id": 0,
      "title": "Nueva tecnología revoluciona el almacenamiento de energía",
      "description": "Investigadores han desarrollado una batería de larga duración que podría transformar el sector energético.",
      "date": "2024-10-25"
    },
    {
      "id": 1,
      "title": "Descubren fósil de dinosaurio en perfecto estado",
      "description": "Un equipo de paleontólogos ha hallado un fósil de dinosaurio que proporciona nueva información sobre su evolución.",
      "date": "2024-25-10"
    },
    {
      "id": 2,
      "title": "Avances en inteligencia artificial mejoran la detección de enfermedades",
      "description": "Nuevas herramientas de IA están permitiendo diagnósticos médicos más rápidos y precisos.",
      "date": "2024-25-10"
    },
    {
      "id": 3,
      "title": "Iniciativa global busca reducir la contaminación plástica en los océanos",
      "description": "Varias organizaciones se han unido para lanzar un programa de limpieza y concienciación sobre el plástico en los mares.",
      "date": "2024-25-10"
    }
  ]

  constructor(private route: ActivatedRoute){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.post = this.posts.find(post => post.id == this.id);
  }
}
