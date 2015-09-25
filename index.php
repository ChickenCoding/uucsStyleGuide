<?php
require_once __DIR__ . '/vendor/autoload.php';
$app = new Silex\Application();

$app["debug"] = true;
$app["bower"] = "client/bower_components";
$app["css"] = "css";
$app["js"] = "js";

$app->register(new Silex\Provider\TwigServiceProvider(), array(
  'twig.path' => __DIR__ . '/views',
));

$app->get('/', function () use ($app) {
  return $app['twig']->render(
    'page_parts/pages.html', ["title" => "Page Layout"]
  );
})->bind("homepage");

$app->get('/styleguide', function () use ($app) {
  return $app['twig']->render('styleguide/index.html');
})->bind("styleguide");

$app->run();

/* End of file index.php */
