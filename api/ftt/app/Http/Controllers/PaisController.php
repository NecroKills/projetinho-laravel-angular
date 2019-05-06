<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pais;

class PaisController extends Controller
{
    //metodo que busca todos os paises
    public function index() {
        return Pais::all();
    }

    // Metodo que mostra um Pais
    public function show(Request $request, $id) {
        return Pais::find($id);
    }

    // Metodo que cria um Pais
    public function store(Request $request) {
        return Pais::create($request->all());

    }

    // Metodo que atualiza um Pais
    public function update(Request $request, $id) {
        $pais = Pais::findOrFail($id);
        $pais->update($request->all());
        return $pais;

    }

    // Metodo que deleta o Pais
    public function delete(Request $request, $id) {
        $pais = Pais::findOrFail($id);
        $pais->delete();
        //O código de resposta HTTP de status de sucesso 204 No Content indica que a solicitação 
        //foi bem sucedida e o cliente não precisa sair da página atual
        return 204;

    }

}
