---
title: Chalice - backend web framework from AWS
date: 2021-08-03
tags: Python, AWS, Web, 
category: Tech
slug: chalice-backend-web-framework-from-AWS
Summary: 
---

I cancelled my cable subscription a while ago as it was an unneeded expense, and I was 
starting to spend more time on netflix.

I recently became aware of m3u8 streams and how to use the [clappr](https://github.com/clappr/clappr)
js video player to stream free-ish video content (news, some US channels, etc).

I created a simple web app in http://tv.hugoalvarado.net/
that can be used on modern browsers or smart tvs to view these streams. 
Not very fancy (for now) and you can change channels
with the arrow keys and activate a channel by pressing enter.

My next task is to add a simple api (using [Chalice](https://aws.github.io/chalice/index.html) 
that will return the channel list as it is currently hardcoded
as part of the frontend. I'll also store the list in Dynamodb. 


Tech:
- AWS
- Vue
- Chalice
- Dynamodb


WIP sources are [here](https://github.com/hugoalvarado/hiptv/).
