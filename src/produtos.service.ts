import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Produto } from "./produtos.model";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectModel(Produto)
        private produtoModel: typeof Produto
    ) {}

    async obterTodos(): Promise<Produto[]> {
        return this.produtoModel.findAll();
    }

    async obterUm(id: number): Promise<Produto> {
        return this.produtoModel.findByPk(id)
    }

    async criar(produto: Produto) {
        this.produtoModel.create(produto);
    }

    async alterar(produto: Produto): Promise<[number]> {
       return this.produtoModel.update(produto, {
        where: {
            id: produto.id
        }
       });
    }

    async apagar(id: number) {
        const produto: Produto = await this.obterUm(id);
        produto.destroy();
    }
}

