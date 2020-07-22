---
title: Quick Comments on Sirajology's "Build a Game Bot" Youtube video
date: 2016-10-15
tags: openai
category: Tech
slug: build-a-game-bot
Summary: 
---

[Sirajology](https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A) has a series of videos explaining complex data science concepts in an energetic, funny, quick and to the point fashion.

One of [them](https://youtu.be/3vxk91K1PiI?t=886) does a quick tour and introduction of the "CartPole" game from [OpenAi Gym](https://gym.openai.com).  OpenAi Gym is "a toolkit for developing and comparing reinforcement learning algorithms". These are some tips that could help newcomers to the gym CartPole demo.

 1. The openai enviroment is the world where the game runs and all the agent knows.
 2. The agent receives an action, performs that action and returns a list with the new state of the world.
 2. There are 2 actions we can give to the CartPole game, 0 and 1 (left and right).
 2. The cart pole initial position and pole alignment are somewhat random. Some of the initial positions can be seen by importing my [gist](https://gist.github.com/hugoalvarado/c9f0f27bf619f4bafac840fac5c52d1c) and running: run_test_env('CartPole-v0', perform_action=False, exit_on_done=False) 
 

References
[Sirajology](https://www.youtube.com/watch?v=3vxk91K1PiI)
[http://kvfrans.com/](http://kvfrans.com/simple-algoritms-for-solving-cartpole/)

> Written with [StackEdit](https://stackedit.io/).
