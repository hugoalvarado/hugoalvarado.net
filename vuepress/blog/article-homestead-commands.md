---
title: Laravel Homestead Container Commands
date: 2016-10-20
tags: Laravel, Homestead
category: Tech
slug: laravel-container-setup-commands
Summary: 
---

These are some of the commands and steps I regularly use when starting a homestead Docker container based Lumen or Laravel project. 

- To install the dependencies you defined in composer.json, use the following command:  

```
composer install
```


- Setup the .env file. The details will depend on each project but the db connection authentication will be set here. 

- Create tables defined in the database/seeds folder  


```
php artisan migrate
```

- Add initial seed data defined in the database/seeds folder  


```
php artisan db:seed
```

- Reload seed data  


```
php artisan migrate:refresh --seed
```


- Run phpunit for single test  

```
phpunit --filter TEST_METHOD TEST_CLASS_NAME PATH/FILE_NAME.php
```
     
- ie:

```
phpunit --filter testBackgroundCheck MemberProfileTest tests/MemberProfileTest.php
```

 - Changes to the homestead setup will require this command before starting the container:  
```
vagrant provision
```

 - THen to bing up the container and then enter via ssh:  
```
vagrant up
vagrant ssh
```

References:  
https://laravel.com/docs/5.0/migrations#database-seeding  

