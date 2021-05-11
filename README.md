# Wiki-IoT

## Installation

### Requirements

- Web server
- PHP : `PHP 7.3.19+` or `PHP 7.4.3+`
- Database : `MySQL 5.5.8+` or `MariaDB 5.1+`

[Manual:Installation requirements](https://www.mediawiki.org/wiki/Manual:Installation_requirements)

### Installation

1. Clone the project in your web server.
```bash
git clone git@github.com:jeandecian/crim-wiki-iot.git wiki-iot
```

2. If you already have a database server and know the root password for it, skip to step 3. Otherwise, follow the manual : [Manual:Installing MediaWiki - Create a database](https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki#Create_a_database).

3. Open a web browser to the `index.php` URL and complete the installation. A `LocalSettings.php` will be generated when the installation is completed.

### Configuration

In the project directory :
- Duplicate the file `SettingsVariables.php.example` and rename it `SettingsVariables.php`. Fill the variables with values from the generated `LocalSettings.php` file.
- Duplicate the file `LocalSettings.php.example` and rename it `LocalSettings.php`.

## Upgrade

### Preparation

Put the wiki on read-only mode by uncommenting the following line in `LocalSettings.php`.
```php
$wgReadOnly = 'Maintenance is underway. Website is on read-only mode';
```
Comment back the line when the upgrade is finished.

### Backup

- Database
- `extensions/`
- `images/`
- `includes/skins/SkinTemplate.php`
- `resources/src/mediawiki.special.createaccount/signup.js`
- `skins/`
- `README.md`

### Download

[Download the latest release of MediaWiki](https://www.mediawiki.org/wiki/Download) as a tarball (tar.gz file).

Unpack the package and copy its content to the wiki. New files should overwrite existing files.
```bash
tar xvzf PATH_TO_TARBALL -C PATH_TO_WIKI --strip-components=1
```

### Restore

Since, some modified files has been overwritten, we need to restore them :
- `includes/skins/SkinTemplate.php`
- `resources/src/mediawiki.special.createaccount/signup.js`
- `README.md`

### Verification

- Check if the website is running fine
- Check the version in MediaWiki special page `Special:Version`