---
title: Snake warning system update 2
date: 2020-08-30
tags: Python, AWS, Rekognition, Vue, Nativescript-Vue, AWS SNS
category: Tech
slug: snake-detector-notifications-via-sns
Summary:
---

This is an update on the [second part](snake-warning-system-update.html) of the snake detection project.

Done:
1. Lambda function calling [AWS Rekognition detect_labels](https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectLabels.html) api ✅
1. Test python code using api to check for a snake in a picture ✅
1. NativeScript-Vue app that submits pictures on demand to the api and report if there is snake ✅
1. Take pictures automatically, and periodically (every 30 seconds) and submit to api. ✅
1. Only submit pictures if there is change with the previous picture - motion detection ✅
1. Notifications via email (AWS SNS).✅

Todo:
1. Cloud formation deploy of lamba function, sns topic, iam roles.
1. VUE code reorganization - currently everything is in a large component 😵.
1. Refactor motion detection code into nativescript plugin/component.

Sources are [here](https://github.com/hugoalvarado/snek/).
