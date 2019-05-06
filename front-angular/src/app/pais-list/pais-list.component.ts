import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/pais.service';
//router trabalha com importação de url
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  paises: any;

  constructor(
    private paisService: PaisService,
    private router: Router
    ) { }

  ngOnInit() {
    this.paisService.findAll()
    .subscribe(paises => this.paises = paises);
  }

  //Metodo de redirecionamento para editar pais
  onEdit(id : number){
    this.router.navigate(['/pais/editar', id]);
  }

  //Metodo de excluir pais
  onDelete(id: number){
    this.paisService.delete(id)
      .subscribe(() => {
        console.log("Pais excluido com sucesso!")

        //atualizar a lista de pais
        this.paises = this.paises.filter(pais => pais.id !== id);
      });
  }

}
