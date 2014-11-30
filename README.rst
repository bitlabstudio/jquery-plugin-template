jQuery Plugin Template
======================

Kickstart your jQuery plugin instantly with all files you need.

It offers a grunt setup for:

* QUnit testing including:
    * blanket for code coverage
    * sinon for mocking and fake AJAX calls
    * tests will run in a headless browser using PhantomJS
* jshint code checking
* less compiling / minification
* js minification using ugilfyjs


Usage
-----

1. Clone this repo into the desired location
2. Edit the variables in ``init.sh``
3. Run ``init.sh`` (it will apply the variables to the template and initialize the git repo as well as install the node packages)
4. Start coding


Grunt commands
--------------

``grunt less`` will create a minified and not minified version of the included less file.
``grunt jshint`` runs jshint checking for the main plugin file and the tests.
``grunt connect`` runs an instance of a test server. Is required to run right before ``grunt qunit``.
``grunt qunit`` runs the tests (Needs a running connect browser. You will usually run ``grunt test`` to run tests.)
``grunt test`` is an alias for running ``connect``, ``jshint`` and ``qunit`` right after one another.
``grunt uglify`` is used to minify your plugin.

There are also the watchers ``uglify``, ``jshint`` and ``css``, that you can start, if you want to do the above all automatically on every file change.
