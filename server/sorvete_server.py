import grpc
import concurrent
from concurrent import futures



import sorvete_pb2
import sorvete_pb2_grpc



class SorveteServicer(sorvete_pb2_grpc.SorveteServicer):
 def PedidoSorvete(self, request, context):
   print('Temos algo!!')
   response = sorvete_pb2.SorveteResponse() 
   response.mensagem= f"aqui esta/ao suas {request.bolas} bolas de sorvete de {request.sabor} !" 
   return response



def main():
 server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
 sorvete_pb2_grpc.add_SorveteServicer_to_server(SorveteServicer(), server)
 print('Server iniciado. Ouvindo na porta 50051')
 server.add_insecure_port('[::]:50051')
 server.start()
 server.wait_for_termination()



main()

