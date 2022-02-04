# def sum(a, b):
#   return a + b


# def pot(a, b):
#   return a ** b


# print(sum(2, 2))
# print(pot(2, 3))

# import random

# random_number = random.randint(1, 10)  # escolhe um número aleatório entre 1 e 10
# guess = ""

# while guess != random_number:  # enquanto não adivinhar o número
#     guess = int(input("Qual o seu palpite? "))  # pergunte a pessoa usuária um número
#     # print(random_number)

# print("O número sorteado era: ", guess)

# Outra maneira de recebermos valores externos na execução de nossos programas é utilizando o módulo sys . 
# Quando executamos um script e adicionamos parâmetros, os mesmos estarão disponíveis através de uma variável 
# chamada sys.argv , que é preenchida sem que precisemos fazer nada. Na prática, podemos escrever o conteúdo 
# abaixo em um arquivo e, ao executarmos, passamos alguns parâmetros

# import sys


# if __name__ == "__main__":
#     for argument in sys.argv:
#         print("Received -> ", argument)

            #FIXAÇÃO#
# nome = 'JESSICA'

# for letter in nome:
#     print(letter[0])

# file = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.

# file.write("nome idade\n")
# file.write("Maria 45\n")
# file.write("Miguel 33\n")
# # Não precisa da quebra de linha, pois esse é um comportamento padrão do print
# print("Túlio 22", file=file)
# LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
# file.writelines(LINES)
# file.close() #NÃO ESQUECER DE FECHAR

# arquivos = []
# for index in range(10240):
#     arquivos.append(open(f"arquivo{index}.txt", "w"))

# A leitura do conteúdo de um arquivo pode ser feita utilizando a função read
# escrita
# file = open("arquivo.txt", mode="w")
# file.write("Trybe S2")
# file.close()

# # leitura
# file = open("arquivo.txt", mode="r")
# content = file.read()
# print(content)
# file.close()  # não podemos esquecer de fechar o arquivo


# Um arquivo é também um iterável, ou seja, pode ser percorrido em um laço de repetição. 
# A cada iteração, uma nova linha é retornada.
# escrita
# file = open("arquivo.txt", mode="w")
# LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
# file.writelines(LINES)
# file.close()

# # leitura
# file = open("arquivo.txt", mode="r")
# for line in file:
#     print(line)  # não esqueça que a quebra de linha também é um caractere da linha
# file.close()  # não podemos esquecer de fechar o arquivo

# b ao parâmetro mode , indicando que será utilizado o modo binário.
# # escrita
# file = open("arquivo.dat", mode="wb")
# file.write(b"C\xc3\xa1ssio 30")  # o prefixo b em uma string indica que seu valor está codificado em bytes
# file.close()

# # leitura
# file = open("arquivo.dat", mode="rb")
# content = file.read()
# print(content)  # saída: b'C\xc3\xa1ssio 30'
# file.close()  # não podemos esquecer de fechar o arquivo

#TRATAMENTO DE EXCEÇÕES
# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         break
#     except ValueError:
#         print("Oops!  That was no valid number.  Try again...")

# try:
#     arquivo = open("arquivo.txt", "r")
# except OSError:
#     # será executado caso haja uma exceção
#     print("arquivo inexistente")
# else:
#     # será executado se tudo ocorrer bem no try
#     print("arquivo manipulado e fechado com sucesso")
#     arquivo.close()
# finally:
#     # será sempre executado, independentemente de erro
#     print("Tentativa de abrir arquivo")

# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à variável file
# with open("arquivo.txt", "w") as file:
#     file.write("Michelle 27\n")
# # como estamos fora do contexto, o arquivo foi fechado
# print(file.closed)

# "r" = read
# "w" = write
# "a" = append
# "t" = text..