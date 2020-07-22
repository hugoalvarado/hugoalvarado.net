---
title: Google Chrome Bookmark Analysis Part 1
date: 2016-11-07
tags: Python, Chrome, Bookmarks, Data Analysis
category: Tech
slug: bookmark-analysis-part1
Summary: 
---

I, like many others have a collection of bookmarked sites. The goal is to save them and to read or review them later, but alas, later never comes, and the bookmarked sites keep growing, locking their secrets deep in the interwebs and the Chrome profile in your computer.

Being a student of the software arts data analysis yoga, I felt a tool to extract some insights on the Chrome Bookmarks json file would be a nice little project.

My goal is be able to generate graphs and stats with Python to gather insights on the things I've been bookmarking through the years. Possibly embarrassing insights... you have been warned.

Much of the inspiration in this project comes from http://brandonrose.org/clustering (thanks for the awesome write up), I will be applying a lot of the techniques explained there. This is a learning experience for me in multiple ways. I will be learning while I build this... thing, and will (hopefully) learn something with the data it generates.

I have a somewhat working version but the generated plot is not what I expected. In my mind I was thinking there would be a group of dots for my python bookmarks, then a group for my bikini model pics and so on, but instead I got this:


![Ahh, finally a nice...plot?](/images/bookmark-analysis-part1-figure_1.png)

That does not look right, so I will be reviewing my script (source is in my github) and the data and will write up my findings here soon.

Don't forget to bookmark this page!



References:  
http://brandonrose.org/clustering
https://github.com/hugoalvarado/chrome-bookmark-thing

