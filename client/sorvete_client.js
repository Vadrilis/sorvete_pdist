const grpc = require('grpc');
const messages = require('./sorvete_pb');
const services = require('./sorvete_grpc_pb');



function main() {
 const client = new services.SorveteClient(
   'localhost:50051', grpc.credentials.createInsecure()
 );



 const sorveteRequest = new messages.SorveteRequest();
 sorveteRequest.setBolas(3);
 sorveteRequest.setSabor('morango');



 client.pedidoSorvete(sorveteRequest, function (err, response) {
   if (err) {
     console.log('quebrou!', err);
   } else {
     console.log('resposta do python:', response.getMensagem());
   }
 })
}



main();