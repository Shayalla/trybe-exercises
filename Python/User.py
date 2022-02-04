# import smtplib
# import ssl

# class User:
#     def __init__(self, name, email, password, from_email, from_password):
#         self.name = name
#         self.email = email
#         self.password = password
#         self.from_email = from_email
#         self.from_password = from_password
# # entidade user
#     """ Método construtor da classe User. Note que
#         o primeiro parâmetro deve ser o `self`. Isso é
#         uma particularidade de Python, vamos falar mais
#         disso adiante!"""
#     # def reset_password(self):
#     #     """ Só com isso a função não irá funcionar! O email em
#     #     questão não existe e costuma ser necessário configurar
#     #     permissões no servidor de email para o envio ocorrer. Se
#     #     quiser, explore isso como exercício bônus! (Por segurança,
#     #     crie uma nova conta de e-mail para testar).
#     #     Por hora, basta entender a lógica aqui! """

#     #     subject = "Reset your password"
#     #     message = "Instruções para resetar a senha, com o link de resetar"
#     #     body = f"Subject:{subject}\n\n{message}".encode('utf-8')
#     #     context = ssl.create_default_context()
#     #     with smtplib.SMTP_SSL(
#     #         "smtp.gmail.com", 465, context=context
#     #     ) as server:
#     #         server.login(self.from_email, self.from_password)
#     #         try:
#     #             server.sendmail(self.from_email, self.email, body)
#     #         except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
#     #             raise ValueError
#     #     # print("Envia email de reset de senha")
#     # # metodo

# class Mailer:
#     def __init__(self, from_email, from_password, to_email):
#         self.from_email = from_email # Email de origem
#         self.from_password = from_password # Senha do email de origem
#         self.to_email = to_email # Email a receber a mensagem

# # Para invocar o método construtor, a sintaxe é NomeDaClasse(parametro 1, parametro 2)
# # Repare que o parâmetro self foi pulado -- um detalhe do Python.
# # meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
# # A variável `meu_user` contém o objeto criado pelo construtor da classe User!
# # print(meu_user)
# # print(meu_user.name)
# # print(meu_user.email)
# # print(meu_user.password)

# # jessie = User("Valentino Trocatapa",
# #                 "valentino@tinytoons.com",
# #                 "Grana",
# #                 "password_reset@teste.com",
# #                 "myverysafepassword")

# # jessie.reset_password()
# meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
# meu_mailer = Mailer("password_reset@teste.com", "myverysafepassword", meu_user.email)
# meu_mailer.reset_password(meu_user)
import smtplib
import ssl


class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        meu_mailer = Mailer("password_reset@teste.com", "myverysafepassword", self.email)
        meu_mailer.send_email("Reset your password", "Instruções para resetar a senha, com o link de resetar")


class Mailer:
    def __init__(self, from_email, from_password, to_email):
        self.from_email = from_email
        self.from_password = from_password
        self.to_email = to_email

    def send_email(self, subject, message):
        body = f"Subject:{subject}\n\n{message}".encode('utf-8')
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
meu_user.reset_password()