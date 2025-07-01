import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./produto-list/produto-list.component').then(m => m.ProdutoListComponent),
    data: {
      title: 'Listar Produtos'
    }
  },
  {
    path: 'novo',
    loadComponent: () => import('./produto-create/produto-create.component').then(m => m.ProdutoCreateComponent),
    data: {
      title: 'Novo Produto'
    }
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./produto-edit/produto-edit.component').then(m => m.ProdutoEditComponent),
    data: {
      title: 'Editar Produto'
    }
  }
]