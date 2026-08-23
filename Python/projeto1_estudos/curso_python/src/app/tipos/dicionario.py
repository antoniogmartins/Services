aluno = {'nome':'Pedro Henrique',
         'nota' : 9.2,
         'ativo' : False
         }

print(type(aluno))
print(f"Nome do Aluno: {aluno['nome']}")
print(f"Nota do Aluno: {aluno['nota']}")
if aluno['ativo']: 
    msg = 'Ativo'
else:
   msg = 'Inativo'
print(f"Aluno ativo: ? {msg}")
print(f"Aluno ativo: ? {aluno['ativo']}")
print(f"Dicionario: {aluno}")

print(len(aluno))