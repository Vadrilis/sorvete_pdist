// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sorvete_pb = require('./sorvete_pb.js');

function serialize_SorveteRequest(arg) {
  if (!(arg instanceof sorvete_pb.SorveteRequest)) {
    throw new Error('Expected argument of type SorveteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SorveteRequest(buffer_arg) {
  return sorvete_pb.SorveteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SorveteResponse(arg) {
  if (!(arg instanceof sorvete_pb.SorveteResponse)) {
    throw new Error('Expected argument of type SorveteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SorveteResponse(buffer_arg) {
  return sorvete_pb.SorveteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SorveteService = exports.SorveteService = {
  pedidoSorvete: {
    path: '/Sorvete/PedidoSorvete',
    requestStream: false,
    responseStream: false,
    requestType: sorvete_pb.SorveteRequest,
    responseType: sorvete_pb.SorveteResponse,
    requestSerialize: serialize_SorveteRequest,
    requestDeserialize: deserialize_SorveteRequest,
    responseSerialize: serialize_SorveteResponse,
    responseDeserialize: deserialize_SorveteResponse,
  },
};

exports.SorveteClient = grpc.makeGenericClientConstructor(SorveteService);
