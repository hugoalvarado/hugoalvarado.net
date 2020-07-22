---
title: TIL - Time command
date: 2017-10-20
tags: Programming, Linux
category: Dev
slug: time-command-linux
Summary: 
---

Today at work I learned about 2 important tools for profiling python code and timing it, cprofile and time.

The module cprofile is the standard and there are good guides, a popular one is [here](https://julien.danjou.info/blog/2015/guide-to-python-profiling-cprofile-concrete-case-carbonara).

The time command is a linux utility that can be used to show how long a command takes to run.  It will will work with many commands not just python scripts, like `ls` : `time ls -l`.