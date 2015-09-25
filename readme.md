# Caution

The branch regression testing is at the moment a playground, and so not stable.
Please manipulate with caution.

## Style Guide

This is my first style guide with multiple colot schemes for a from end (public)
and back end (private) sections.

### Installation

Requirements:
  + PHP

  + [composer][composer]

  + [NodeJs][nodejs]

  + [bower][bower]


In a terminal type:
```
$ bower i
$ composer install
```

#### Visual Regression testing

You will need phantomcss, casperjs, and phantomjs.
To install them all:

```
$ npm install --dev
```

### Run it

#### Compile scss into css

Run in a terminal:
```
$ npm run css
```


#### Php webserver

You can run ``php -S localhost:85`` (as 85 the port, change it to your needs)
, then go to ``http://localhost:85`` (or the port you changed, if so), to see
the homepage.

To see the styleguide page, go to ``http://localhost:85/styleguide``.

#### Visual Regression testing

In a terminal:

```
$ npm run visual
```

[nodejs]: https://nodejs.org
[composer]: https://getcomposer.org
[bower]: http://bower.io
