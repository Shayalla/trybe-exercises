"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""
import sys


class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)
    
    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

    def update(self, index, value):
        self.data[index] = value
        return self.data


# vamos inicializar e preencher uma estrutura de dados array
array = Array()
# array.set(0, "Felipe")
# array.set(1, "Ana")
# array.set(2, "Shirley")
# array.set(3, "Miguel")

# # para acessar um elemento do array, utilizamos seu índice
# # print(array.get(0))  # saída: Felipe
# # print(array.get(2))  # saída: Shirley
# # print("--------")

# # podemos iterar sobre seus elementos da seguinte maneira
# index = 0
# # enquanto há elementos no array
# while index < len(array):
#     # recupera o elemento através de um índice
#     print("Index:", index, ", Nome:", array.get(index))
#     index += 1

# array.set(0, "Marcos")
# array.set(1, "Patrícia")
# # quando começamos as inserções o valor muda
# array_memory_size = sys.getsizeof(array.data)
# print(array_memory_size)  # 120

# array.set(2, "Matheus")
# array.set(3, "Giovana")
# # como um espaço adicional é reservado o valor não é modificado
# array_memory_size = sys.getsizeof(array.data)
# print(array_memory_size) # 120

# array.set(4, "Alberto")
# array.set(5, "Marta")
# array.set(6, "Túlio")
# array.set(7, "Michelle")
# array_memory_size = sys.getsizeof(array.data)
# print(array_memory_size) # 184

# Supondo uma lista com 4 valores numéricos:
#             *---*---*---*---*
# original    | 1 | 2 | 3 | 4 |   posição na memória: 0x01
#             *---*---*---*---*

# # Ao adicionar um novo item, a lista precisa crescer:
#             *---*
# novo item   | 5 |
#             *---*
#             *---*---*---*---*
# original    | 1 | 2 | 3 | 4 |    posição na memória: 0x01
#             *---*---*---*---*

# # Uma nova lista é criada:
#             *---*---*---*---*---*---*---*---*
# nova        |   |   |   |   |   |   |   |   |    posição na memória: 0x1A
#             *---*---*---*---*---*---*---*---*

# # Os elementos da lista original são copiados para a nova lista:
#             *---*---*---*---*
# original    | 1 | 2 | 3 | 4 |    posição na memória: 0x01
#             *---*---*---*---*
#               ↓   ↓   ↓   ↓
#             *---*---*---*---*---*---*---*---*
# nova        | 1 | 2 | 3 | 4 |   |   |   |   |    posição na memória: 0x1A
#             *---*---*---*---*---*---*---*---*

# # O novo elemento é colocado na nova lista:
#             *---*
# novo item   | 5 | -------------
#             *---*             ↓
#             *---*---*---*---*---*---*---*---*
# nova        | 1 | 2 | 3 | 4 |   |   |   |   |    posição na memória: 0x1A
#             *---*---*---*---*---*---*---*---*

# # O endereço onde se encontrava a lista antiga é liberado para ser utilizado
# # e o "nome original" é atribuído a nova lista:
#             *---*---*---*---*---*---*---*---*
# original    | 1 | 2 | 3 | 4 | 5 |   |   |   |    posição na memória: 0x1A
#             *---*---*---*---*---*---*---*---*

array.set(0, "Marcos")
array.set(1, "Patrícia")
# print(array), internamente chama o método array.__str__() que implementamos
print(array)  # saída: ["Marcos", "Patrícia"]

# inserindo no começo do array
array.set(0, "Valeria")
print(array)  # saída: ["Valeria", "Marcos", "Patrícia"]

# inserindo em uma posição intermediária
array.set(1, "Miguel")
print(array) # saída: ['Valeria', 'Miguel', 'Marcos', 'Patrícia']

# Supondo uma lista com 4 caracteres ao qual adicionaremos mais um no início:
#             *---*
# novo item   | a |
#             *---*
#               ↓
#             *---*---*---*---*
# original    | b | c | d |   |    posição na memória: 0x01
#             *---*---*---*---*
#                 ⤻  ⤻  ⤻

# # Os elementos são deslocados para o próximo índice.

#             *---*---*---*---*
# original    | a | b | c | d |    posição na memória: 0x01
#             *---*---*---*---*


# As regras de crescimento ainda se aplicam portanto pode ser que uma nova lista
# seja criada, o elemento adicionado e os elementos copiados para a nova lista.
# Ainda assim, o índice de todos os elementos posteriores a inserção
# serão acrescidos em 1.

# Supondo uma lista com 3 caracteres ao qual adicionaremos mais um na segunda posição, vulgo índice 1:
# (inserimos b na posição 1).

#                 *---*
# novo item       | b |
#                 *---*
#                   ↓
#             *---*---*---*---*
# original    | a | c | d |   |    posição na memória: 0x01
#             *---*---*---*---*
#                     ⤻  ⤻

# # O resultado final seria:
#             *---*---*---*---*
# original    | a | b | c | d |    posição na memória: 0x01
#             *---*---*---*---*

# Supondo uma lista com 4 caracteres ao qual removeremos um elemento

# Se removermos o último elemento (índice 3), nada precisa ser modificado

#          *---*---*---*---*
# array    | a | b | c |   |    posição na memória: 0x01
#          *---*---*---*-⤹-*
#                         d

# # Porém se removermos o primeiro, ou qualquer outro índice,
# # todos os valores serão deslocados à esquerda:
#                  ⤺  ⤺  ⤺
#          *---*---*---*---*---*---*---*---*
# array    | a |   | c | d | e |   |   |   |    posição na memória: 0x01
#          *---*-⤹-*---*---*---*---*---*---*
#                 b

# # À medida que itens são removidos, a estrutura diminui em tamanho:
#          *---*---*---*---*
# array    | a | c | d | e |    posição na memória: 0x01
#          *---*---*---*---*

array.remove(0)  # retorna a string "Marcos"
print(array)  # saída: ['Patrícia']

array.update(2, "Jéssica")
print(array)
