import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutoFormComponent, SubmitResponse as SubmitRequest } from 'src/app/components/produto-form/produto-form.component';
import { ErrosAPIResponse } from 'src/app/dtos/errors-response';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ItemFeedbackComponent } from "../../components/item-feedback/item-feedback.component";
import { Produto, ProdutoRequest } from './../../interfaces';

@Component({
  selector: 'app-produto-edit',
  imports: [
    CommonModule,
    ProdutoFormComponent,
    RouterLink,
    ItemFeedbackComponent
],
  templateUrl: './produto-edit.component.html',
  styleUrl: './produto-edit.component.scss'
})
export class ProdutoEditComponent implements OnInit {

  private readonly msgSuccessTemplate: string = 'Produto $1 atualizado com sucesso!';

  apiErrors = new ErrosAPIResponse({});
  msgSuccess: string = '';
  produto?: Produto;
  produtoAtualizado?: Produto;

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

    this.msgSuccess = '';
    this.apiErrors = new ErrosAPIResponse({});

    this.produtosService.atualizar(this.produto?.id as string, data).subscribe({
      next: (value) => {
        const produto = { ...value } as Produto;
        this.produto = this.produtoAtualizado = {...produto} as Produto;
        this.msgSuccess = this.msgSuccessTemplate.replace('$1', produto.nome);
      },
      error: (err) => {
        this.apiErrors = new ErrosAPIResponse(err.error);
        console.error(err);
      }
    });

  }

}
