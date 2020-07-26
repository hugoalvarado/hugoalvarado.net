---
title: Using Rekognition to warn about snakes!
date: 2020-07-23
tags: Python, AWS, Rekognition, Vue
category: Tech
slug: snake-detector-with-rekognition
Summary: 
---

Where I live there are snakes , some are dangerous, some are not. 
I also have kids and I have seen some snakes nearby they play area and around the house.
I'd like to have a warning system that detects when a snake approaches a specific area and 
inform me somehow.

I have a general plan to combine an old Android phone and AWS services like lambda and 
Rekognition. 

Using Rekognition makes detecting the image very easy, the only concern 
I have is the frequency as each request to the service will have a cost and I would
potentially leave the app running most of the day. 

WIP sources are [here](https://github.com/hugoalvarado/snek/).
