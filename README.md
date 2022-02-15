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
git clone git@github.com:jeandecian/wiki-iot.git
```

2. If you already have a database server and know the root password for it, skip to step 3. Otherwise, follow the manual : [Manual:Installing MediaWiki - Create a database](https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki#Create_a_database).

3. Open a web browser to the `index.php` URL and complete the installation. A `LocalSettings.php` will be generated when the installation is completed.

### Configuration

In the project directory :
- Duplicate the file `environments/BaseLocalSettings.php` in the root directory and rename it `LocalSettings.php`.
