
<?php
use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'Samuelayo\Contactform\Http\Controllers', 'middleware' => ['web']], function(){
    Route::get('contact2', 'ContactFormController@index');
    Route::post('contact2', 'ContactFormController@sendMail')->name('contact');
});
