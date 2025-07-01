import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PopoverDirective, PopoverModule } from '@coreui/angular';
import { Produto } from 'src/app/interfaces';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ModalExclusaoItemComponent } from "../../components/modal-exclusao-item/modal-exclusao-item.component";

@Component({
  selector: 'app-produto-list',
  imports: [
    CommonModule,
    RouterLink,
    PopoverDirective,
    ModalExclusaoItemComponent
],
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.scss'
})
export class ProdutoListComponent implements OnInit {

  @ViewChild(ModalExclusaoItemComponent) modal?: ModalExclusaoItemComponent;

  produtos: Produto[] = []
  productIdsToDelete: Set<string> = new Set();
  produtoExclusao: Produto | null = null;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    const self = this;
    
    this.produtosService.listarTodos().subscribe({
      next(value) {
        self.produtos = [...value] as Produto[]
        console.log(self.produtos)
      },
      error(err) {
        alert('Ocorreu um erro ao listar os produtos');
        console.error(err);
      }
    })
  }

  openDeleteModal(produto: Produto) {
    this.produtoExclusao = produto;
    this.modal?.show();
  }

  deleteProduto(): void {
    console.log(this.produtoExclusao);
  };

  getState(id: string): 'hidden' | 'visible' {
    return this.productIdsToDelete.has(id) ? 'hidden' : 'visible'
  }
}
