<?php
require_once __DIR__ . '/vendor/autoload.php';
$app = new Silex\Application();

$app["debug"] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
  'twig.path' => __DIR__ . '/views',
));

$app->register(new Silex\Provider\UrlGeneratorServiceProvider());
$app->register(new Silex\Provider\SessionServiceProvider());

$app->get('/', function () use ($app) {
  return $app['twig']->render('page_parts/pages.html');
})->bind("homepage");

$app->get('/styleguide', function () use ($app) {
  return $app['twig']->render('styleguide/index.html');
})->bind("styleguide");


$app->run();

/* End of file index.php */
