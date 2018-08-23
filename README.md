# {{My-Project}}

{{Brief description of this theme}}.  Built with the [Athena Framework](https://ucf.github.io/Athena-Framework/).

## Quick links

* [**Theme Documentation**](https://github.com/UCF/{{My-Project}}/wiki)
* [Installation Requirements](#Installation-Requirements)
* [Browser Compatibility](#Browser-Compatibility)
* [Theme Configuration](#Theme-Configuration)
* [Development](#Development)
* [Contributing](#Contributing)

-----

## Documentation

Head over to the [{{My Project}} wiki](https://github.com/UCF/{{My-Project}}/wiki) for detailed information about this theme, installation instructions, and more.

-----

## Installation Requirements

This theme is developed and tested against WordPress 4.9.2+ and PHP 5.4.x+. {{Modify version numbers as needed!}}

While this theme should work against any server running the [minimum requirements for WordPress installations](https://wordpress.org/about/requirements/), we cannot guarantee compatibility with, or provide support for, installations on non-LAMP stacks (e.g. Windows installations).

### Required Plugins
These plugins *must* be activated for the theme to function properly.

{{Bulleted list of required themes + links to readmes/documentation here}}

### Supported Plugins
The plugins listed below are extended upon in this theme--this may include custom layouts for feeds, style modifications, etc.  These plugins are not technically required on sites running this theme, and shouldn't be activated on sites that don't require their features.  A plugin does not have to be listed here to be compatible with this theme.

{{Bulleted list of supported themes + links to readmes/documentation here}}


## Browser Compatibility
This theme is compatible with the following browsers:
* Chrome: Latest 2 versions (desktop and mobile)
* Firefox: Latest 2 versions (desktop and mobile)
* Safari: Latest 2 versions (desktop and mobile)
* Edge: Latest 2 versions
* Internet Explorer: IE 11

{{Modify this list as needed!}}

Browsers not listed here are not explicitly supported and may not display sites using this theme correctly.


## Theme Configuration

* {{IF ACF IS REQUIRED:}} [Download this theme's ACF config file](https://github.com/UCF/{{My-Project}}/blob/master/dev/acf-export.json), and import field groups using the ACF importer under Custom Fields > Tools.
* {{IF A STATIC FRONT PAGE IS REQUIRED/EXPECTED:}} Create and set a static front page under Settings > Reading.
* {{Include instructions on assigning header/footer menus here, as needed}}
* {{IF THEME UTILIZES PREMIUM WEBFONTS:}}If you plan on using [premium webfonts using Cloud.Typography](https://ucf.github.io/Athena-Framework/getting-started/install/#cloudtypography-premium-font-configuration), ensure that webfonts have been properly configured to a Cloud.Typography CSS Key that [allows access to your environment](https://dashboard.typography.com/user-guide/managing-domains). A Cloud.Typography CSS Key URL can be added via the WordPress Customizer (Appearance > Customize > Web Fonts).

{{Add any additional bullet points as necessary}}

-----

## Development

Note that compiled, minified css and js files are included within the repo.  Changes to these files should be tracked via git (so that users installing the theme using traditional installation methods will have a working theme out-of-the-box.)

[Enabling debug mode](https://codex.wordpress.org/Debugging_in_WordPress) in your `wp-config.php` file is recommended during development to help catch warnings and bugs.

### Requirements
* node
* gulp-cli

### Instructions
1. Clone the {{My-Project}} repo into your local development environment, within your WordPress installation's `themes/` directory: `git clone https://github.com/UCF/{{My-Project}}.git`
2. `cd` into the new {{My-Project}} directory, and run `npm install` to install required packages for development into `node_modules/` within the repo
3. Optional: If you'd like to enable [BrowserSync](https://browsersync.io) for local development, or make other changes to this project's default gulp configuration, copy `gulp-config.template.json`, make any desired changes, and save as `gulp-config.json`.

    To enable BrowserSync, set `sync` to `true` and assign `syncTarget` the base URL of a site on your local WordPress instance that will use this theme, such as `http://localhost/wordpress/my-site/`.  Your `syncTarget` value will vary depending on your local host setup.

    The full list of modifiable config values can be viewed in `gulpfile.js` (see `config` variable).
3. Run `gulp default` to process front-end assets.
4. If you haven't already done so, create a new WordPress site on your development environment, and install and activate the required plugins listed above.
5. Set {{My Project}} as the active theme.
6. Make sure you've done all the steps listed under "Configuration" above.
7. Run `gulp watch` to continuously watch changes to scss and js files.  If you enabled BrowserSync in `gulp-config.json`, it will also reload your browser when scss or js files change.


## Contributing

Want to submit a bug report or feature request?  Check out our [contributing guidelines](https://github.com/UCF/{{My-Project}}/blob/master/CONTRIBUTING.md) for more information.  We'd love to hear from you!
