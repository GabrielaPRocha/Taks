<?php

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->group(['prefix' => '/livro'], function () use ($router){
    $router->get('', "LivroController@index");
    $router->post('', "LivroController@store");
    $router->get('{id}', "LivroController@show");
    $router->delete('{id}', "LivroController@destroy");
    $router->put('{id}', "LivroController@update");
});