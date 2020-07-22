---
title: Setting up a Pelican site with GitHub
date: 2016-10-07
tags: parse.js, startup
category: Tech
slug: pelican-site-github
Summary: 
---


My initial hugoalvarado.github.io page used the standard github pages system and themes but I recently went with the Pelican Site Generator.

My first step was to follow the [quickstart](http://docs.getpelican.com/en/3.6.3/quickstart.html) on the getpelican site. It was easy to follow and after setting up my pelican site locally I uploaded the whole site source to my hugoalvarado.github.io git repository. 

I opened a new tab to checked my shiny new Pelican and Python powered site! But... this of course did not work. Pelican stores the generated site in the output folder and github pages expects the site html source to live directly in the repository, sort of like the www or htdocs directories in other webservers.

There are a couple ways to resolve this. The pelican docs mention the ghp-import package but I went with the git submodule.

For this I had to rename my initial git repo to hugoalvarado.github.io-source, where I have my site source. I also added the output/ dir to the .gitignore file and removed the old site files.

	git add .
	git commit -m "Initial commit"
	git push origin master

After this I generated the output by running the pelican command from my site directory

	pelican content
	git submodule add https://github.com/hugoalvarado/hugoalvarado.github.io.git output -f
	cd output
	
After this all I had to do was add the new files in the output dir to git, commit and push the changes and thew will go to the hugoalvarado.github.io.git repo. 

This way I have my whole site in one directory in my computer, but actually synced to 2 separate repos in github.

These sites were of great help while setting up my own:

http://docs.getpelican.com/en/3.6.3/quickstart.html

http://guizishanren.com/writing-blog-articles-with-pelican-in-markdown/

http://hernantz.github.io/how-to-publish-a-pelican-site-on-github.html

https://github.com/jeffskinnerbox/jeffskinnerbox.github.io


