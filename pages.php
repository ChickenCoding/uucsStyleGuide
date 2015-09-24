<?php
require_once __DIR__ . '/vendor/autoload.php';
$app = new Silex\Application();

$app["debug"] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
  'twig.path' => __DIR__ . '/page_parts',
));

$app->register(new Silex\Provider\UrlGeneratorServiceProvider());
$app->register(new Silex\Provider\SessionServiceProvider());

$app->get('/', function () use ($app) {
  return $app['twig']->render('pages.html');
})->bind("homepage");

$app->run();

/* End of file index.php */
