<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('tasks', 'TaskController@index');

Route::get('tasks/{id}', 'TaskController@show');

Route::post('tasks', 'TaskController@store');

Route::put('tasks/{id}', 'TaskController@update');

Route::delete('tasks/{id}', 'TaskController@delete');
