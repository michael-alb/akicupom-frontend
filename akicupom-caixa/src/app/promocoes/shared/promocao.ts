import { Fornecedor } from './../promocao-form/shared/fornecedor';
import { Categoria } from './../promocao-form/shared/categoria';

export class Promocao {
  
  id: number;
  nome: string;
  descricao: string;
  valor_promocao: number;
  dataValidade: string;
  capa: string;
  status: boolean;
  categoria: string;
  fornecedor: string;
  // categoria: Categoria = new Categoria();
  // fornecedor: Fornecedor = new Fornecedor();
}
