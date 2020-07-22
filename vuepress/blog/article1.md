---
title: How to overcome parse query.count() TIME limit
date: 2015-10-17
tags: parse.js, startup
category: Tech
slug: overcome-parse-js-query-time
Summary: 
---

Parse.com has some sensible (for them) limits on queries to ensure services run smoothly on their end.

One of these limits is the number of count() calls that can be made per minute. Every app has limit of 160 request/per minute. This makes sense for user facing apps, but for cloud jobs, I don’t care if it takes a while for a task to complete, I just want start it and know that it will get done.

A cloud job can trigger this error, and will show up like this:
[Error]: The number of count operations in progress has reached its limit.

A simple way I found to throttle my cloud job was to make a request to http://www.slowapi.com:



```javascript
//http://www.slowapi.com/ - A website that mocks a slow API
Parse.Cloud.httpRequest(
  {url: 'slowapi.herokuapp.com/delay/'+wait}).always(function(){});

```



Where wait is the time in seconds slowapi.com will delay the response.

Using that request we can create a simple promise function that we can use to delay pieces of cloud jobs:

```javascript
function netWait(wait)
{

	if('undefined' == typeof wait)
  		wait = 1;

	var promise = new Parse.Promise();

  //http://www.slowapi.com/ - A website that mocks a slow API
  Parse.Cloud.httpRequest({url: 'slowapi.herokuapp.com/delay/'+wait}).always(function(){
      return promise.resolve();
  });

  return promise;

}

```

