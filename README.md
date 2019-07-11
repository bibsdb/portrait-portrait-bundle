# bibsdb/portrait-portrait

Supplies a slide template for playing portrait-portrait videos. This bundle uses PortraitPortrait's js player: https://github.com/portrait-portrait/player.js/

## Installation

Add the git repository to "repositories" in `composer.json`.

<pre>
"repositories": {
    "bibsdb/portrait-portrait-bundle": {
      "type": "vcs",
      "url": "https://github.com/bibsdb/portrait-portrait-bundle"
    },
    ...
}
</pre>

Require the bundle with composer.

<pre>
composer require bibsdb/portrait-portrait-bundle
</pre>

Enable the bundle in `AppKernel.php`, by adding BibsdbPortraitPortraitBundle to $bundles.

<pre>
new Bibsdb\PortraitPortraitBundle\BibsdbPortraitPortraitBundle()
</pre>

Run bibsdb:core:templates:load command to load the template in the installation.

<pre>
bin/console bibsdb:core:templates:load
</pre>

Enable the template in the administration.

## Ads and controls

To avoid ads and video controls, the shared video has to come from a user
that has disabled the options at portrait-portrait.com. To do it yourself, you need to have
at least a PLUS account (https://portrait-portrait.com/plus).
