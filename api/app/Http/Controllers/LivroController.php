<?php

namespace App\Http\Controllers;

use App\Livro;
use Illuminate\Http\Request;

class LivroController extends Controller
{
    public function index()
    {
        return Livro::all();
    }
        
        public function store(Request $request)
        {
          return response()->json(
              Livro::create($request->all()),
              201
            );
        }

        public function show(int $id)
        {
            $tarefa = Livro::find($id);
             if (is_null($tarefa)){
                return response()->json(null, 204);
            }
            return $tarefa;
            
        }
            public function destroy (int $id)
            {
                $qtdeRecursosApagados = Livro::destroy($id);
                if($qtdeRecursosApagados === 0){
                    return response()-> json(null, 404);
                }
                
                return response()->json(null,200);
            }
            public function update(int $id, Request $request)
            {
                $tarefa = Livro::find($id);
                if(is_null ($tarefa))return response()->json(null,404);
            
                $tarefa->fill($request->all());
                $tarefa->save();
                
            return $tarefa;
        }

}