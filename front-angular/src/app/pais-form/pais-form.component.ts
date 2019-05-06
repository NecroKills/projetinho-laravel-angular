import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { Pais } from 'src/app/pais';
import { PaisService } from 'src/app/pais.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent implements OnInit {
 
  // Variavel
  pais: Pais;
 
  //    FORM
  paisForm: FormGroup;

  constructor(
    private builder: FormBuilder, 
    private paisService: PaisService,
    //pega a url e seu parametro, nesse caso o ID
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {

    //instancia o objeto pais
    this.pais = new Pais();

    //obter ID passado pela URL como parametro
    this.pais.id = this.route.snapshot.params['id'];

    //reactive Form, tambem usa o validator para validar o form
    this.paisForm = this.builder.group({
      id: [],
      nome: ['', [Validators.required, Validators.maxLength(90)]]
    }, {});

    //buscar dados do pais
    if(this.pais.id != null){
      this.paisService.findById(this.pais.id)
      .subscribe(pais => this.paisForm.patchValue(pais));
    }
  }

  //metodo salva pais
  onSave(pais: Pais){
    this.paisService.save(pais).subscribe(pais => {
      console.log("Pais salvo com sucesso!");

      //Redireciona para lista de pais
      this.router.navigate(['/pais']);
    },
    (exception)=> {
      console.log(exception.error);
    });
  }

  //metodo para diminuir o tamanho
  get form(){
    return this.paisForm.controls;
  }

}
