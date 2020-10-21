<?php
namespace Samuelayo\Contactform;
use Illuminate\Support\ServiceProvider;

class ContactFormServiceProvider extends ServiceProvider {

    public function boot()
    {
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');

        $this->loadViewsFrom(__DIR__.'/resources/views', 'contactform');

        $this->loadMigrationsFrom(__DIR__.'/Database/migrations');

       //  $this->publishes([  __DIR__.'/path/to/config/courier.php' => config_path('courier.php'),    ]);
  //  $this->publishes([ __DIR__.'/path/to/translations' => resource_path('lang/vendor/courier'),  ]);
    $this->publishes([ __DIR__.'/resources/views' => resource_path('views/vendor/courier'),], 'public');
   $this->publishes([    __DIR__.'/Assets' => public_path('vendor/courier'), ], 'public1');

    }

    public function register()
    {

    }
}
?>