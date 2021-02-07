<?php

namespace App\Http\Controllers;

use App\Shoes;
use Illuminate\Http\Request;

class ShoesController extends Controller
{
    /**
     * Display a listing of the resource .
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //echo "Hello";
        $shoes = Shoes::get();
        echo json_encode($shoes);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //echo "Hello from store";
        //print_r($request->all());  
        $shoes = new Shoes();
        $shoes->nombre = $request->input('nombre');
        $shoes->descripcion = $request->input('descripcion');
        $shoes->genero = $request->input('genero');
        $shoes->modelo = $request->input('modelo');
        $shoes->stock = $request->input('stock');
        $shoes->save();
        echo json_encode($shoes);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Shoes  $shoes_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $shoes_id)
    {
        // echo "Hello from Update";
        $shoes = Shoes::find($shoes_id);
        $shoes->nombre = $request->input('nombre');
        $shoes->descripcion = $request->input('descripcion');
        $shoes->genero = $request->input('genero');
        $shoes->modelo = $request->input('modelo');
        $shoes->stock = $request->input('stock');
        $shoes->save();
        echo json_encode($shoes);
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Shoes  $shoes_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($shoes_id)
    {
        //echo "Hello from Destroy";
        $shoes = Shoes::find($shoes_id);
        $shoes->delete();
        
    }
}
