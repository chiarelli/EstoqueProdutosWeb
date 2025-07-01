import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./produto-list/produto-list.component').then(m => m.ProdutoListComponent),
    data: {
      title: 'Listar Produtos'
    }
  }
]