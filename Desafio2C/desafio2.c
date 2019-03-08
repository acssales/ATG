#include <stdio.h>
#include <stdlib.h>

/************************************************************************
                        DESAFIO 2 ATG 2019

Participante: Augusto Cezar Souza Sales

Vaga: Estágio em Desenvolvimento
Curso: Ciência da Computação - UFF
e-mail: augustcezar@gmail.com
cel: +55 21 98160-1367

************************************************************************/

/************************************************************************
Desafio 2)

Escreva um programa que receba um número e depois uma lista circularmente
ordenada (sem repetições) separada por virgula e que responda, o mais 
rápido possível, se um número pertence ou não à lista. Pode ser feito em
C/C++/C#.

Exemplos:

Entrada: 5 2,3,4,0,1                                Saída: não

Entrada: 4 2,3,4,0,1                                Saída: sim

Entrada: 3 4,6,11,-1,1,2,3                          Saída: sim

************************************************************************/


// Estrutura de dados da lista circularmente ordenada (e duplamente encadeada)
typedef struct No{
	int elemento; // armazena o numero na lista
	struct No *esq, *dir;
} TLC;


// Insere ordenado
TLC *insere(TLC *lista, int elem) 
{	
	// Caso lista inicialmente vazia
	if(lista == NULL) {
		TLC *novo_no = (TLC *)malloc(sizeof(TLC));
		novo_no->elemento = elem;
		novo_no->esq = novo_no;
		novo_no->dir = novo_no;
		return novo_no;
	}
	
	TLC *aux = lista;
	
	//Caso elemento novo menor do que head da lista
	if(aux->elemento > elem) {
		
		// Cria o novo no em memoria
		TLC *novo_no = (TLC *)malloc(sizeof(TLC));
		novo_no->elemento = elem;
		
		//insere o novo no
		novo_no->dir = aux;
		novo_no->esq = aux->esq;
		
		//atualiza no a direta
		aux->esq = novo_no;
		
		//atualiza no a esquerda
		aux = novo_no->esq;
		aux->dir = novo_no;
		
		//fim, retorna resultado
		return novo_no;
	}
	
	//Caso elemento novo maior do que head da lista
	while(aux->dir->elemento <= elem && aux->dir != lista) aux = aux->dir;
	
	if(aux->elemento == elem) return lista; //Evita inserir elemento repetido
	
	// Cria o novo no em memoria
	TLC *novo_no = (TLC *)malloc(sizeof(TLC));
	novo_no->elemento = elem;
	
	//insere o novo no
	novo_no->dir = aux->dir;
	novo_no->esq = aux;
	
	//atualiza no a esquerda
	aux->dir = novo_no;
	
	//atualiza no a direta
	aux = novo_no->dir;
	aux->esq = novo_no;
	
	//fim, retorna resultado
	return lista;
}

// Apaga e desaloca a memoria da lista
void libera(TLC *lista)
{
	TLC *p = lista, *q;
	do {
		q = p;
		p = p->dir;
		free(q);
	}while(p != lista);
}


// Funcao para buscar o elemento desejado
void pertence_lista(TLC *lista, int num)
{
	TLC *aux = lista;
	while(aux->elemento < num && aux->dir != lista) aux = aux->dir;
	if(aux->elemento == num) printf("\nsim\n");
	else printf("\nnao\n");
}


// Console (interface CLI) do programa
int main()
{
	int procurado;      // elemento buscado
	
	// Variaveis auxiliares
	int elem_lista;     // armazena temporariamente elementos da lista
	char encerra;       // flag usado para terminar a execução 
	int err = 0;        // flag para capturar erros


	printf("\n=========== BUSCA EM LISTA CIRCULAR ===========\n");

	while(1)
	{
		while(!err)
		{
			TLC *lista = NULL;  // inicio (head) da lista circular
			
			// Recebe a entrada
			printf("\nDigite o número buscado: ");
			err = scanf("%d", &procurado);
			if(err == 0) break; // se nada foi lido a execucao sera abortada
			

			printf("\nDigite a lista, separando elementos por virgula:\n>>> ");
			char temp;
			do {
				scanf("%d%c", &elem_lista, &temp);
				lista = insere(lista, elem_lista); // preenche a lista circular
			} while(temp != '\n');
			
				
			// Logica principal da solucao do problema
			pertence_lista(lista, procurado);
		
			// Apaga a lista
			libera(lista);
		}
		
		err = 0;
		
		// Verifica se o programa deve ser encerrado:
		printf("\n\nVocê gostaria de sair? (s/n):\n");
		scanf(" %c", &encerra);
		
		if (encerra == 's') break;
		printf("-------------------------------\n\n\n");
	}
	
	printf("\n=========== ENCERRANDO! VOLTE SEMPRE ===========\n");
	printf("=      Candidato AUGUSTO CEZAR SOUZA SALES     =");
	printf("\n===================== 2019 =====================\n\n");
	return 0;
}

