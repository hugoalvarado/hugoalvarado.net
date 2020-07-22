---
title: Backend-Shmackend
date: 2016-11-10
tags: parse.com, lumen, backend, php
category: Tech
slug: from-parsecom-to-lumen-api
Summary: 
---


I was working with another developer on a new project, a single page application using a rest api. We were looking for something to help us start writing the backend quickly and decided to try Parse.com. It handled and hid many of the complexities for us like security, managing servers, tokens, resetting login passwords and provided a nice dashboard to view our data and manage the account. 

Initially things seemed fine. Creating api endpoints was easy, we wrote javascript functions on the server side (Nodejs) and then we could call those functions from the client:

Server (cloudCode):
```
Parse.Cloud.define("updateMember", function(request, response) { ... });
```
Client:
```
Parse.Cloud.run('updateMember', params, { ... });
```

Easy. Almost too easy. The problems came as the requirements and complexity grew, our backend cloudCode was big file of js code. I started moving some common functions to modules but there were other issues with Parse. Debugging and reading the logfiles was terrible. 

Parse only kept a limited number of logged lines (yes lines, not log files, but lines, dozens of them...dozens!), which were only available in their dashboard, and some times the logs would simply stop updating. The final nail in the coffin was the announcement that Parse was shutting down. 

We had two options, run our own parse server or rewrite the backend. We chose the latter.

We decided to go with Lumen, a lighter version of Laravel, with great documentation, PHP, and good community. It's worked well for us, though there are new concepts that I've needed to brush up on (which is great). Lumen sets things up so its easier to follow good practices like dependency injection and testing. It works with phpunit out of the box, and I recently setup acceptance testing with Codeception and Phantomjs.

The fronted did not change much. I wrote a small client class to make the api requests to the new Lumen backend, so instead of having:
```
Parse.Cloud.run('updateMember', params, { ... });  
```
we now use
```
self.client.run('members/'+userid, 'put', params, { ... });
```
Our new api tries to use the proper https verbs for each requirement: get for fetching data, put for updating, post for creating data.
For the most part the same data is returned, and the calls use the same parameters, all that changed is the api calling methods.

We used Knockoutjs for our SPA, so I had to create the new client object, pass the api url and security token:
```
var viewModel = function() {
self.client = client('www.our-lumen-site.com'+'/api/', login_token);
}


And this is the client,mostly a wrapper of the jquery ajax request:

(function(root) {

root.client = function(host, token)
{
    var self = this;

    self.host = stripTrailingSlash(host);    
    self.token = token;


    var run = function(api, verb, data, callback ){

        data = data || {};
        callback = callback || {};        

        var token = self.token;

        api = api.trim();

        //remove first /, if it exists
        var re = /^\//;
        api.replace(re, "");

        //remove last /, if it exists
        var re = /\/$/;
        api.replace(re, "");

        verb = verb.trim();

        return $.ajax({
            url: self.host+'/'+api,
            type: verb || 'GET',
            //dataType: 'json',
            headers: {'Authorization': 'Bearer '+token},
            data: data,
            success: callback.success? callback.success : function(){log('success')},
            error: callback.error? callback.error :  function(){log('error')}
        });
    }

    var ret = {
        version: '0.1',
        run: run
    };

    return ret;
};

}(this));
```
The client class exposes the run function and the version only, all the other details like the host and url are hidden.

All thing considered this turned out well, it allowed us to have greater control and learn and apply new tools. Our next future rewrite is using components for the frontend with React.

