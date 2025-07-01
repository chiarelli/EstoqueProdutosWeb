import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoRequest } from 'src/app/interfaces';
import { ProdutoFormComponent, SubmitResponse } from "../../components/produto-form/produto-form.component";
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-create',
  imports: [
    ProdutoFormComponent,
    RouterLink
  ],
  templateUrl: './produto-create.component.html',
  styleUrl: './produto-create.component.scss'
})
export class ProdutoCreateComponent {

  constructor(private produtosService: ProdutosService) { }

  criarProduto(resp: SubmitResponse) {
    const {payload, resetCallback: resetForm} = resp
    const produto = {...payload} as ProdutoRequest

    this.produtosService.criar(produto).subscribe({
      next(value) {
        resetForm();
      },
      error(err) {
        alert('Ocorreu um erro ao criar o produto');
        console.error(err);
      }
    })
  }

}
