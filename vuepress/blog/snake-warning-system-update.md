---
title: Snake warning system update
date: 2020-08-02
tags: Python, AWS, Rekognition, Vue, Nativescript-Vue
category: Tech
slug: snake-detector-with-rekognition-and-vue
Summary: 
---

This is an update on the [first part](snake-detector-with-rekognition.html) of this little project.
 
Done:
1. Lambda function calling [AWS Rekognition detect_labels](https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectLabels.html) api ✅
1. Test python code using api to check for a snake in a picture ✅
1. NativeScript-Vue app that submits pictures on demand to the api and report if there is snake ✅

Todo:
1. Take pictures automatically, and periodically (every 30 seconds) and submit to api.
1. Only submit pictures if there is change with the previous picture - motion detection?
1. Notifications via email or other.

WIP sources are [here](https://github.com/hugoalvarado/snek/).
