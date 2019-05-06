<?php

use Illuminate\Http\Request;

Route::get('pais','paisController@index');
Route::get('pais/{id}','paisController@show');
Route::post('pais','paisController@store');
Route::put('pais/{id}','paisController@update');
Route::delete('pais/{id}','paisController@delete');