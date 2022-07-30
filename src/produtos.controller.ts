import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import {Produto} from './produtos.model';
import { ProdutoService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {

    constructor(private produtoService: ProdutoService){

    }
    
    @Get()
    async obterTodos(): Promise<Produto[]> {
        return this.produtoService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Produto> {
        return this.produtoService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() produto: Produto) {
        produto.id = 10;
        this.produtoService.criar(produto);
    }

    @Put()
    async alterar(@Body() produto: Produto): Promise<[number]> {
        return this.produtoService.alterar(produto);
    }

    @Delete(':id')
    async apagar(@Param() params) {
       this.produtoService.apagar(params.id);
    }
}