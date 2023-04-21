from camelcase import CamelCase

instancia = CamelCase()

texto = 'hola yo deberia esta mal camel caseado'

resultado  = instancia.hump(texto)

print(resultado)