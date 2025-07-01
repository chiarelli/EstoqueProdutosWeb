import { Produto, ProdutoRequest } from './../../interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutoFormComponent, SubmitResponse as SubmitRequest } from 'src/app/components/produto-form/produto-form.component';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-edit',
  imports: [
    ProdutoFormComponent,
    RouterLink
  ],
  templateUrl: './produto-edit.component.html',
  styleUrl: './produto-edit.component.scss'
})
export class ProdutoEditComponent implements OnInit {

  produto?: Produto;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const produtoId = this.route.snapshot.paramMap.get('id');
    
    if (!produtoId) {
      alert('ID do produto não encontrado na rota');
      return;
    }
    
    const self = this;

    this.produtosService.buscarPorId(produtoId).subscribe({
      next: (produto) => {
        self.produto = {...produto} as Produto;
      },
      error: (err) => {
        alert('Ocorreu um erro ao buscar o produto');
        console.error(err);
      }
    });
  }

  atualizarProduto(formValue: SubmitRequest): void {
    const { payload } = formValue;
    const data = { ...payload } as ProdutoRequest;

    this.produtosService.atualizar(this.produto?.id as string, data).subscribe({
      next: (value) => {
        const Produto = { ...value } as Produto;
        this.produto = Produto;
      },
      error: (err) => {
        alert('Ocorreu um erro ao atualizar o produto');
        console.error(err);
      }
    });

  }

}
