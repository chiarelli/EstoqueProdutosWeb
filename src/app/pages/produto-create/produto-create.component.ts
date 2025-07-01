import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ErrosAPIResponse } from 'src/app/dtos/errors-response';
import { Produto, ProdutoRequest } from 'src/app/interfaces';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ItemFeedbackComponent } from "../../components/item-feedback/item-feedback.component";
import { ProdutoFormComponent, SubmitResponse } from "../../components/produto-form/produto-form.component";

@Component({
  selector: 'app-produto-create',
  imports: [
    ProdutoFormComponent,
    RouterLink,
    ItemFeedbackComponent
],
  templateUrl: './produto-create.component.html',
  styleUrl: './produto-create.component.scss'
})
export class ProdutoCreateComponent {

  private readonly msgSuccessTemplate: string = 'Produto $1 cadastrado com sucesso!';

  msgSuccess: string = '';
  apiErrors = new ErrosAPIResponse({});
  produtoCreated?: Produto;

  constructor(private produtosService: ProdutosService) { }

  criarProduto(resp: SubmitResponse) {
    const {payload, resetCallback: resetForm} = resp;
    const produto = {...payload} as ProdutoRequest;
    const self = this;

    this.produtosService.criar(produto).subscribe({
      next(value) {
        const produto = {...value} as Produto;
        self.produtoCreated = produto;
        resetForm();
        self.msgSuccess = self.msgSuccessTemplate.replace('$1', produto.nome);
      },
      error(err) {
        self.apiErrors = new ErrosAPIResponse(err.error);
        console.error(err);
      }
    })
  }

}
