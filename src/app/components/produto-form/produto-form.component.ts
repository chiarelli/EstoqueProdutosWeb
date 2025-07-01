import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Categoria, Produto } from 'src/app/interfaces';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-produto-form',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.scss'
})
export class ProdutoFormComponent implements OnInit, OnChanges {

  @Input() botaoTexto: string = 'Salvar';
  @Input() form: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    preco: [0, [Validators.required, Validators.min(0)]],
    quantidade: [0, [Validators.required, Validators.min(0)]],
    categoria_id: ['', [Validators.required]]
  });
  @Input() produto?: Produto;
  
  @Output() submitAction = new EventEmitter<SubmitResponse>();
  
  categorias: any[] = [];

  constructor(
    private categoriasService: CategoriasService,
    private fb: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.#carregarCategorias();
  }

  ngOnChanges() {
    if (this.produto) {
      this.form.patchValue({
        nome: this.produto.nome,
        preco: this.produto.preco,
        quantidade: this.produto.quantidade,
        categoria_id: this.produto.categoria.id
      });
    }
  }

  #carregarCategorias() {
    const self = this;

    this.categoriasService.listarTodas().subscribe({
      next(value) {
        self.categorias = [...value] as Categoria[]
      },
      error(err) {
        alert('Ocorreu um erro ao listar as categorias');
        console.error(err);
      }
    })
  }

  submitForm() {
    this.submitAction.emit({payload: this.form.value, resetCallback: this.#resetForm.bind(this)});
  }

  #resetForm() {
    this.form.reset();
  }

}

export interface SubmitResponse {
  payload: any;
  resetCallback: () => void;
}