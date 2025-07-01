export interface Produto {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  categoria: Categoria;
  created_at: string;
  updated_at: string;
}

export interface Categoria {
  id: string;
  nome: string;
}

export interface ProdutoRequest {
  nome: string;
  preco: number;
  quantidade: number;
  categoria_id: string;
}