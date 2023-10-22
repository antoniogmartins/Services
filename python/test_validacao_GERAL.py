import requests
import json 
from jsonpath_ng import jsonpath, parse
import uuid
## Author: Antonio G. Martins

print("===================== MEDOTOD POST ================")

urlpost = "https://gorest.co.in/public/v2/users"

headers = {'Content-Type': 'application/json; charset=utf-8',
           'Authorization':
           'Bearer 5a4f0f863fa656873c54695739bdd93f4f50534d817f8c89ea94a8074adbc3cd'
           }

myuuid = uuid.uuid4()

params = { 
    'name':'Tenali Ramakrishna1', 
    'gender':'male', 
    'email':'email_'+str(myuuid)+'@gmail.com', 
    'status':'active'
}

responsePOST = requests.post(urlpost, headers=headers, data = json.dumps(params))
print("Headers\n: ",responsePOST.headers)
print ("-----------------------------------------------------")
print("Content-Type: ",responsePOST.headers.get('content-type'))
print ("-----------------------------------------------------")
print("Access: ",responsePOST.headers.get('access'))
status_code = responsePOST.status_code
print ("-----------------------------------------------------")
print("O Status code é:", status_code)
print ("-----------------------------------------------------")
assert status_code == 201

if status_code == 201:
     json_responsePOST = json.loads(responsePOST.text)
     print("Retorno do POST:\n", json_responsePOST)
     print ("-----------------------------------------------------")
     Json_path_expr = parse('$.id')
     id = Json_path_expr.find(json_responsePOST)
     vl_id = id[0].value
     print("Valor do Id:", vl_id)
     print ("-----------------------------------------------------")
     Json_path_expr = parse('$.status')
     status = Json_path_expr.find(json_responsePOST)
     vl_status = status[0].value
     print ("Valor do Status:", vl_status)
     assert vl_status == "active"
else: 
    print('Error: {0}'. format(responsePOST.status_code))

print("===================== MEDOTOD GET ================")

urlget = 'https://gorest.co.in/public/v2/users/'+str(vl_id)

responseGET = requests.get(urlget, headers=headers)
print("Headers\n: ",responseGET.headers)
print ("-----------------------------------------------------")
print("Content-Type: ",responseGET.headers.get('content-type'))
print ("-----------------------------------------------------")
print("Access: ",responseGET.headers.get('access'))
status_code = responseGET.status_code
print ("-----------------------------------------------------")
print("O Status code é:", status_code)
print ("-----------------------------------------------------")

if status_code == 200:
     json_responseGET = json.loads(responseGET.text)
     print("Retorno do GET:\n", json_responseGET)
     print ("-----------------------------------------------------")
     Json_path_expr = parse('$.status')
     status = Json_path_expr.find(json_responseGET)
     print ("Valor do status:", status[0].value)
     assert status[0].value == "active"
else: 
    print('Error: {0}'. format(responseGET.status_code))

print("===================== MEDOTOD PATCH ================")

urlpatch = "https://gorest.co.in/public/v2/users/5188223"

headers = {'Content-Type': 'application/json; charset=utf-8',
          'Authorization':
           'Bearer 5a4f0f863fa656873c54695739bdd93f4f50534d817f8c89ea94a8074adbc3cd'
           }

myuuid = uuid.uuid4()

params = { 
    'name':'Allasani Peddana', 
    'email':'email_'+str(myuuid)+'@gmail.com', 
    'status':'active'
}

responsePATCH = requests.patch(urlpatch, headers=headers, data = json.dumps(params))
print("Headers\n: ",responsePATCH.headers)
print ("-----------------------------------------------------")
print("Content-Type: ",responsePATCH.headers.get('content-type'))
print ("-----------------------------------------------------")
print("Access: ",responsePATCH.headers.get('access'))
status_code = responsePATCH.status_code
print ("-----------------------------------------------------")
print("O Status code é:", status_code)
print ("-----------------------------------------------------")
assert status_code == 200

if status_code == 200:
     json_responsePATCH = json.loads(responsePATCH.text)
     print("Retorno do PATCH:\n", json_responsePATCH)
     print ("-----------------------------------------------------")
     Json_path_expr = parse('$.status')
     status = Json_path_expr.find(json_responsePATCH)
     vl_status = status[0].value
     print ("Valor do Status:", vl_status)
     assert vl_status == "active"
else: 
    print('Error: {0}'. format(responsePATCH.status_code))

