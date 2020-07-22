---
title: Google Chrome Bookmark Analysis Part 2
date: 2016-11-12
tags: Python, Chrome, Bookmarks, Data Analysis
category: Tech
slug: bookmark-analysis-part2
Summary: 
---

In this post I am continuing the work started [here](https://hugoalvarado.github.io/bookmark-analysis-part1.html#bookmark-analysis-part1). I had created an initial plot with 2 clusters but the graph looked way off, almost like a large C and the rest of plotted points scattered in the remaining space.

I reviewed the initial code and apparently some of the parameters used in the example of the document term matrix (TfidfVectorizer constructor) were causing the strange plot with my data (my 400 randomly selected bookmarks). With the new code and other tweaks I now have 2 plots, a histogram or each cluster and the initial plot of each bookmark according to its generated weights created by the Kmeans algorithm.



![Histogram](/images/bookmark-analysis-part2-figure_1.png)


![Plot](/images/bookmark-analysis-part2-figure_2.png)


The histogram and the table below seem to make the most sense, the plot is simply too busy to be able to get any insights. It's difficult to get a sense of the types of pages in each cluster but the table does show that all of my job bookmarks are in one group, cluster 4, which make sense. 
In the histogram, cluster 4 has forbidden as a common word, and all those urls require login, so the web scraper must have gotten a 403 or some other error.


Annnnd these are the actual urls in their respective groups:



| Cluster   |      Url      |
|:----------|:--------------|
|Cluster 1|http://docs.python-guide.org/en/latest/writing/gotchas/|
|Cluster 1|http://iyask.me/|
|Cluster 1|http://newcoder.io/tutorials/|
|Cluster 1|http://python.net/~goodger/projects/pycon/2007/idiomatic/handout.html|
|Cluster 1|http://pythonpodcast.com/|
|Cluster 1|http://rhodesmill.org/brandon/slides/2014-07-pyohio/clean-architecture/|
|Cluster 1|http://stevenloria.com/python-best-practice-patterns-by-vladimir-keleshev-notes/|
|Cluster 1|http://thecodeship.com/patterns/guide-to-python-function-decorators/|
|Cluster 1|http://www.i-programmer.info/programming/python/3942-arrays-in-python.html?start=1|
|Cluster 1|http://www.techbeamers.com/essential-python-tips-tricks-programmers/|
|Cluster 1|http://www.tryton.org/|
|Cluster 1|https://automatetheboringstuff.com/|
|Cluster 1|https://docs.python.org/3.5/library/index.html|
|Cluster 1|https://docs.python.org/3.5/py-modindex.html|
|Cluster 1|https://github.com/donnemartin/data-science-ipython-notebooks|
|Cluster 1|https://jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/|
|Cluster 1|https://medium.mybridge.co/19-free-ebooks-to-learn-programming-with-python-8f6f0ad4a7f8#.42dop8cvz|
|Cluster 1|https://medium.mybridge.co/python-top-10-articles-for-the-past-month-48abfd3dd67c?gi=682e55627ca0#.ubf8p0gjp|
|Cluster 1|https://pymotw.com/3/|
|Cluster 1|https://realpython.com/|
|Cluster 1|https://www.owasp.org/index.php/Main_Page|
|Cluster 2|http://blog.modulus.io/tag/express|
|Cluster 2|http://blog.parse.com/announcements/validating-session-tokens-with-the-rest-api/|
|Cluster 2|http://brandonrose.org/clustering|
|Cluster 2|http://deployd.com/|
|Cluster 2|http://developer.yahoo.com/php/|
|Cluster 2|http://gregbrockman.com/|
|Cluster 2|http://justinvincent.com/|
|Cluster 2|http://omnipay.thephpleague.com/gateways/configuring/|
|Cluster 2|http://omnipay.thephpleague.com/gateways/official/|
|Cluster 2|http://socket.io/blog/socket-io-cpp/|
|Cluster 2|http://socket.io/docs/|
|Cluster 2|http://stackoverflow.com/questions/12684765/twitter-api-returns-error-215-bad-authentication-data|
|Cluster 2|http://stackoverflow.com/questions/24706226/cloud-code-on-parse-com-skipping-a-save|
|Cluster 2|http://stackoverflow.com/questions/354002/mysql-select-where-not-in-table|
|Cluster 2|http://superuser.com/questions/841387/using-msiexec-to-uninstall-programs|
|Cluster 2|http://wellstyled.com/tools/colorscheme2/index-en.html|
|Cluster 2|http://www.bleepingcomputer.com/forums/t/550714/manual-removal-trojanmsiled/|
|Cluster 2|http://www.freshblurbs.com/blog/2012/05/09/async-data-loading-knockout-js-without-callback-hell.html|
|Cluster 2|https://akrabat.com/|
|Cluster 2|https://apisyouwonthate.com/|
|Cluster 2|https://drive.google.com/a/rogerspos.com/?usp=folder#folders/0B9M3UsBjDCXAaUxKVVdPZlRKeUU|
|Cluster 2|https://parse.com/questions/javascript-sdk-security|
|Cluster 2|https://wiki.openwrt.org/doc/recipes/dumbap|
|Cluster 2|https://www.parse.com/docs/rest/guide/#users-security|
|Cluster 3|http://www.videograbby.com/#|
|Cluster 3|http://www.youtube-mp3.org/|
|Cluster 3|http://www.youtube.com/watch?v=sPNYYr4aLaM|
|Cluster 3|https://www.youtube.com/watch?v=3j6_y-AMtK4&x-yt-ts=1422327029&x-yt-cl=84838260|
|Cluster 3|https://www.youtube.com/watch?v=DJtef410XaM|
|Cluster 3|https://www.youtube.com/watch?v=hAqsM8XIr74|
|Cluster 3|https://www.youtube.com/watch?v=hC3VTgIPoGU|
|Cluster 3|https://www.youtube.com/watch?v=jqxENMKaeCU|
|Cluster 3|https://www.youtube.com/watch?v=nuHfVn_cfHU|
|Cluster 4|http://blog.html.it/layoutgala/|
|Cluster 4|http://deathtothestockphoto.com/|
|Cluster 4|http://will-stanton.com/how-do-i-get-my-first-job-in-data-science/|
|Cluster 4|http://www.elpassion.com/|
|Cluster 4|http://www.laksman.com.ar/|
|Cluster 4|https://sites.google.com/a/rogerspos.com/supersalon-wiki/internal-policies/internal-escalation-policy|
|Cluster 4|https://docs.google.com/a/rogerspos.com/document/d/17zEbtJCUOJo9N7mTBFdbKh6TfuqdDm8e4CyESbjqpKo/edit|
|Cluster 4|https://docs.google.com/a/rogerspos.com/document/d/1_gY3tOBa30Bhq4_x1w0vZucNh_y2OZZlG-Ps5avhjOs/edit|
|Cluster 4|https://docs.google.com/a/rogerspos.com/document/d/1fgtpuT-4gEW3lLIq6pkPI0Y_myIO9f7RdT7NK4zwzXk/edit?pli=1#heading=h.2wi78zicaco5|
|Cluster 4|https://docs.google.com/a/rogerspos.com/document/d/1jbo4q5YQi44l4A42MIj8X-nwL1O9nc2nRtKRlUlcl4Y/edit?pli=1|
|Cluster 4|https://docs.google.com/a/rogerspos.com/document/d/1zFJiGzO71p_soybdsHXU4XYNA3PswOLY0YBM9SVvVl8/edit?pli=1|
|Cluster 4|https://docs.google.com/a/rogerspos.com/spreadsheet/ccc?key=0Ag6HPyAjwx9idDVCX0xJaEJJUTBFYkpZSVJMeHJKaHc#gid=28|
|Cluster 4|https://docs.google.com/a/rogerspos.com/spreadsheet/ccc?key=0AhnmmJLQXb_CdEI5NXMtN1F0OThNdm9SR0wxWUtBMFE&usp=sharing#gid=0|
|Cluster 4|https://docs.google.com/a/rogerspos.com/spreadsheet/ccc?key=0AiGJ1fggJKzwdGxtUTBGaHBBYUViMUt3ZTExYkl6TkE&pli=1#gid=7|
|Cluster 4|https://sites.google.com/a/rogerspos.com/supersalon-wiki/additional-ss-services/centralized-customer-database-ccd|
|Cluster 4|https://www.google.com/a/rogerspos.com/ServiceLogin?service=mail&passive=true&rm=false&continue=http%3A%2F%2Fmail.google.com%2Fa%2Frogerspos.com%2F&bsv=1k96igf4806cy&scc=1&ltmpl=default&ltmplcache=2|
|Cluster 6|http://4.bp.blogspot.com/-cvw4dpoSojs/UvjdVUmyx3I/AAAAAAAAGxw/EV5hl6RyOQU/s1600/IMG_4253.PNG|
|Cluster 6|http://99-bottles-of-beer.ls-la.net/a.html#Assembler-(Intel-8086)|
|Cluster 6|http://bootswatch.com/lumen/|
|Cluster 6|http://cisco.netacad.net/|
|Cluster 6|http://i.imgur.com/ANuNZej.jpg|
|Cluster 6|http://img.izismile.com/img/img8/20150507/640/the_sexy_cosplay_girls_of_every_nerds_fantasy_640_21.jpg|
|Cluster 6|http://ipcop.org/|
|Cluster 6|http://javaboutique.internet.com/tutorials/|
|Cluster 6|http://members.tripod.com/straitupfun/nesroms.html|
|Cluster 6|http://nvie.com/posts/a-successful-git-branching-model/|
|Cluster 6|http://qaadmin.supersalon.com/svnup.php|
|Cluster 6|http://regexr.com/|
|Cluster 6|http://rogerdudler.github.io/git-guide/|
|Cluster 6|http://scottchacon.com/2011/08/31/github-flow.html|
|Cluster 6|http://tutorialblog.org/free-photoshop-brushes/|
|Cluster 6|http://vincentarelbundock.github.io/Rdatasets/datasets.html|
|Cluster 6|http://workstory.com/zthomas|
|Cluster 6|http://worldsfamousphotos.com/|
|Cluster 6|http://www.alexkras.com/19-git-tips-for-everyday-use/|
|Cluster 6|http://www.amazon.com/Objects-Patterns-Practice-Experts-Source/dp/143022925X/ref=sr_1_3?ie=UTF8&s=books&qid=1302134786&sr=1-3|
|Cluster 6|http://www.ar15.com/|
|Cluster 6|http://www.bitfalls.com/|
|Cluster 6|http://www.code-sucks.com/css%20layouts/faux-css-layouts/|
|Cluster 6|http://www.databaseanswers.org/data_models/index.htm|
|Cluster 6|http://www.dmuth.org/node/1427/git-101-creating-git-repo-and-uploading-it-github|
|Cluster 6|http://www.evan.pro/|
|Cluster 6|http://www.fontfinder.ws/|
|Cluster 6|http://www.freeroms.com/genesis.htm|
|Cluster 6|http://www.gamefaqs.com/console/n64/game/22536.html|
|Cluster 6|http://www.google.com/fonts#|
|Cluster 6|http://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CB8QFjAA&url=http%3A%2F%2Fwww.ar15.com%2F&ei=Te7lVODjJfeCsQT8jIKIAg&usg=AFQjCNGzgWMiQs9U1cLodq9F_oirBP21jw&sig2=Jn9JsoKrPkswA93As7IL5w&bvm=bv.85970519,d.cWc|
|Cluster 6|http://www.green-trust.org/2000/biofuel/methanedigestion3.htm|
|Cluster 6|http://www.homedsgn.com/|
|Cluster 6|http://www.mccentral.org/forum/m/17339729/viewthread/13817725-minecraft-central-plugins|
|Cluster 6|http://www.musicforprogramming.net/?one|
|Cluster 6|http://www.onehorseshy.com/themes/|
|Cluster 6|http://www.tommie-wilhelmsen.no/|
|Cluster 6|https://admin.supersalon.com//login.php?old=/index.php|
|Cluster 6|https://app.smartsheet.com/b/publish?EQBCT=3df0442e2a744d96b7480529fb4b8bd3|
|Cluster 6|https://chrisjean.com/git-submodules-adding-using-removing-and-updating/|
|Cluster 6|https://d3js.org/|
|Cluster 6|https://dev.to/|
|Cluster 6|https://docs.google.com/a/rogerspos.com/document/d/11mviCqQw1Hq6hDPm0LZWULbKYhhD7sTynpKtNCckkQg/edit?pli=1|
|Cluster 6|https://docs.google.com/a/rogerspos.com/spreadsheet/ccc?key=0Ai0Ap2_K98JmdHlBN0VRMy1QbjgzcTVwc0NuWUJORVE&usp=sharing#gid=0|
|Cluster 6|https://github.com/nstevens/androidguide/wiki|
|Cluster 6|https://gitlab.supersalon.com/users/sign_in|
|Cluster 6|https://gun.io/blog/|
|Cluster 6|https://hochstrasser.io/|
|Cluster 6|https://html5boilerplate.com/|
|Cluster 6|https://unsplash.com/|
|Cluster 6|https://www.dataquest.io/learn|
|Cluster 6|https://www.producthunt.com/|
|Cluster 7|http://blog.modulus.io/|
|Cluster 7|http://blog.parse.com/announcements/open-sourcing-the-f8-conference-apps/|
|Cluster 7|http://briantford.com/blog/angular-express|
|Cluster 7|http://forum.xda-developers.com/fire-tv/themes-apps/app-root-home-launcher-replacement-app-t3118135|
|Cluster 7|http://orizens.com/wp/topics/angular-2-communication-between-components-components-design/|
|Cluster 7|http://profi.co/mobile-applications-development/|
|Cluster 7|https://camjackson.net/post/9-things-every-reactjs-beginner-should-know|
|Cluster 7|https://deliciousbrains.com/react-laravel-lumen-company-status-board/|
|Cluster 7|https://developer.amazon.com/appsandservices/solutions/platforms/webapps|
|Cluster 7|https://facebook.github.io/react-native/|
|Cluster 7|https://facebook.github.io/react/docs/tutorial.html|
|Cluster 7|https://github.com/prakhar1989|
|Cluster 7|https://scotch.io/|
|Cluster 7|https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design|
|Cluster 7|https://scotch.io/tutorials/creating-desktop-applications-with-angularjs-and-github-electron|
|Cluster 7|https://www.youtube.com/watch?v=-AbaV3nrw6E&index=1&list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA|
|Cluster 8|http://imgur.com/Ik1bFHB|
|Cluster 8|http://imgur.com/gallery/CEDJmGR|
|Cluster 8|http://imgur.com/gallery/Iamyc|
|Cluster 8|http://imgur.com/gallery/S3McQ|
|Cluster 8|http://imgur.com/gallery/Z1Wy1|
|Cluster 8|http://imgur.com/gallery/dHCz7|
|Cluster 8|http://imgur.com/gallery/eKuGn|
|Cluster 8|http://imgur.com/gallery/fULGO|
|Cluster 8|http://imgur.com/gallery/kj1rU|
|Cluster 8|http://imgur.com/gallery/pBkpJ|
|Cluster 8|http://old-releases.ubuntu.com/releases/|
|Cluster 9|http://www.reddit.com/r/AskReddit/comments/1l31r3/what_is_a_free_pc_game_that_you_think_everyone/|
|Cluster 9|http://www.reddit.com/r/AskReddit/comments/x8y71/reddit_what_is_an_awesome_littleknown_website/|
|Cluster 9|http://www.zeroenergy.com/p_truro.html|
|Cluster 9|https://www.reddit.com/r/Python/comments/57i301/what_if_flask_was_async_and_6x_faster_out_of_the/?st=iuab6zek&sh=6cf06022|
|Cluster 9|https://www.reddit.com/r/programming/comments/57r38l/programming_books_you_might_want_to_consider/?st=iud9rwqz&sh=75a0a66e|
|Cluster 10|http://allrecipes.com/recipe/bbq-spice-rub/|
|Cluster 10|http://antrikshy.com/blog/how-i-got-started-with-programming-side-projects|
|Cluster 10|http://blog.domanski.me/how-celery-fixed-pythons-gil-problem/|
|Cluster 10|http://blog.mapawatt.com/2010/02/21/bloom-box-an-unveiling-of-the-fuel-cell-future/|
|Cluster 10|http://dfg.gd/cheatsheets|
|Cluster 10|http://fabien.potencier.org/|
|Cluster 10|http://flatuicolors.com/#|
|Cluster 10|http://foodfreedom.wordpress.com/|
|Cluster 10|http://geoffboeing.com/|
|Cluster 10|http://gettingreal.37signals.com/toc.php|
|Cluster 10|http://gonzalo123.com/2011/05/09/real-time-monitoring-php-applications-with-websockets-and-node-js/|
|Cluster 10|http://kootenpv.github.io/2016-09-07-ai-challenge-in-78-lines|
|Cluster 10|http://ma.tt/2015/11/dance-to-calypso/|
|Cluster 10|http://mikehadlow.blogspot.cl/2014/06/heisenberg-developers.html|
|Cluster 10|http://pdepend.org/|
|Cluster 10|http://regex.larsolavtorvik.com/|
|Cluster 10|http://systematicinvestor.wordpress.com/|
|Cluster 10|http://urbanhomestead.org/|
|Cluster 10|http://www.bodybuilding.com/fun/dark_knight_workout.htm|
|Cluster 10|http://www.builtpractice.com/worksdomestic/|
|Cluster 10|http://www.cisco.com/|
|Cluster 10|http://www.decoist.com/2011-11-16/lujan-house-is-built-around-a-central-garden/|
|Cluster 10|http://www.decoist.com/2011-11-23/old-bungalow-gets-a-make-over-turns-a-trendy-home/|
|Cluster 10|http://www.fromupnorth.com/ui-inspiration-963/|
|Cluster 10|http://www.hackaday.com/|
|Cluster 10|http://www.jetsongreen.com/2009/07/the-sage-sets-leed-platinum-record.html|
|Cluster 10|http://www.netstumbler.com/|
|Cluster 10|http://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Germany&city1=Dusseldorf&country2=Costa+Rica&city2=San+Jose&displayCurrency=USD|
|Cluster 10|http://www.planet-php.net/|
|Cluster 10|http://www.reddit.com/r/reddit.com/comments/cktxy/reddit_lets_compile_a_list_of_the_best_online/|
|Cluster 10|http://www.seek.com.au/career-advice/how-to-sell-yourself-in-25-words-or-less|
|Cluster 10|http://www.sitepoint.com/speeding-up-existing-apps-with-a-redis-cache/|
|Cluster 10|http://www.sitepoint.com/using-explain-to-write-better-mysql-queries/|
|Cluster 10|http://www.smoothwall.org/|
|Cluster 10|http://www.tamas.io/what-is-the-mean-stack/|
|Cluster 10|http://www.telegraph.co.uk/property/main.jhtml?xml=/property/2007/08/19/pmud119.xml|
|Cluster 10|http://www.treehugger.com/|
|Cluster 10|http://www.treehugger.com/files/2007/07/tommie_wilhelmsens_kolonihagen_summerhouse.php|
|Cluster 10|http://www.verdant.net/food.htm|
|Cluster 10|http://zenpencils.com/comic/nerdist/|
|Cluster 10|https://code4startup.com/projects/ninja-learn-angularjs-firebase-by-cloning-udemy|
|Cluster 10|https://davidwalsh.name/|
|Cluster 10|https://github.com/bmatzelle/gow/releases|
|Cluster 10|https://github.com/jwasham/google-interview-university|
|Cluster 10|https://laracasts.com/skills/laravel|
|Cluster 10|https://medium.com/@landongn/12-years-later-what-i-ve-learned-about-being-a-software-engineer-d6e334d6e8a3|
|Cluster 10|https://medium.com/the-job-to-be-done/5-tips-for-writing-a-job-story-7c9092911fc9|
|Cluster 10|https://www.reddit.com/r/webdev/comments/3f7q3q/been_interviewing_with_a_lot_of_tech_startups_as/|
|Cluster 10|https://www.zenprogrammer.org/en/the10rulesofazenprogrammer.html|
|Cluster 11|http://brazenly.blogspot.com/2014/04/r-playing-with-themes-of-graph-using.html|
|Cluster 11|http://deluge-torrent.org/|
|Cluster 11|http://fractal.thephpleague.com/simple-example/|
|Cluster 11|http://getskeleton.com/|
|Cluster 11|http://iamtrask.github.io/2015/07/12/basic-python-network/|
|Cluster 11|http://izismile.com/2015/03/20/a_photographers_guide_to_taking_the_perfect_photo_10_pics.html|
|Cluster 11|http://jan.kneschke.de/projects/mysql/groupwise-max|
|Cluster 11|http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/|
|Cluster 11|http://kvfrans.com/simple-algoritms-for-solving-cartpole/|
|Cluster 11|http://learnangular2.com/forms/|
|Cluster 11|http://martinfowler.com/articles/richardsonMaturityModel.html|
|Cluster 11|http://mattnedrich.github.io/|
|Cluster 11|http://newtechnobuzzz.blogspot.in/2014/07/why-quicksort-is-better-than-mergesort.html#.V1ciSJErLs1|
|Cluster 11|http://rayli.net/blog/data/top-10-data-mining-algorithms-in-plain-english/|
|Cluster 11|http://www.aquaponics.com/blog/|
|Cluster 11|http://www.color-hex.com/color/aaaaff|
|Cluster 11|http://www.gervaisfortin.com/|
|Cluster 11|http://www.ghacks.net/2013/10/06/list-useful-google-chrome-command-line-switches/|
|Cluster 11|http://www.programmingalgorithms.com/|
|Cluster 11|http://www.wildml.com/2015/09/implementing-a-neural-network-from-scratch/|
|Cluster 11|https://css-tricks.com/css3-gradients/|
|Cluster 11|https://medium.com/technology-invention-and-more/how-to-build-a-simple-neural-network-in-9-lines-of-python-code-cc8f23647ca1#.eveyhrqbb|
|Cluster 11|https://np.reddit.com/r/reactjs/comments/4npzq5/confused_redux_or_mobx/d46k2bl|
|Cluster 11|https://openai.com/requests-for-research/#cartpole|
|Cluster 11|https://scaleyourcode.com/|
|Cluster 11|https://spin.atomicobject.com/2014/06/24/gradient-descent-linear-regression/|
|Cluster 11|https://www.amazon.com/60NB0650-MBAA00-Asus-X555LAB-Motherboard-i3-5020U/dp/B01IDUG9KI/ref=sr_1_6?s=pc&ie=UTF8&qid=1470614574&sr=1-6&keywords=asus+x555lab|
|Cluster 11|https://www.sitepoint.com/handling-collections-of-aggregate-roots/|
|Cluster 12|http://adamziel.com/#about_me|
|Cluster 12|http://flavioazevedo.com/stats-and-r-blog/2016/9/13/learning-r-on-youtube|
|Cluster 12|http://freespiritspheres.com/index.htm|
|Cluster 12|http://itl.nist.gov/div898/handbook/index.htm|
|Cluster 12|http://josediazgonzalez.com/|
|Cluster 12|http://piotrgankiewicz.com/|
|Cluster 12|http://www.bloodshed.net/devcpp.html|
|Cluster 12|https://hypothes.is/jobs/|
|Cluster 12|https://remoteok.io/|
|Cluster 12|https://www.paypal-engineering.com/2016/04/11/statistics-for-software/#dipping_into_the_stream|
|Cluster 13|http://danluu.com/programming-books/|
|Cluster 13|http://inside.envato.com/the-transformative-effects-of-reading-elon-musks-reading-list/|
|Cluster 13|http://izismile.com/2015/05/30/i_wish_i_could_have_a_home_like_60_pics.html|
|Cluster 13|http://izismile.com/2016/04/23/this_is_the_way_every_woman_should_make_a_pizza_for_her_man_7_gifs.html|
|Cluster 13|http://michaelnielsen.org/|
|Cluster 13|http://www.amazon.com/Complete-Books-Charles-Fort-Talents/dp/0486230945|
|Cluster 13|http://www.artfulsoftware.com/infotree/queries.php|
|Cluster 13|http://www.artfulsoftware.com/infotree/queries.php?&bw=1280|
|Cluster 13|http://www.cse.ucsd.edu/~dasgupta/book/index.html|
|Cluster 13|http://www.kohala.com/start/|
|Cluster 13|http://www.mathandpencil.com/capabilities|
|Cluster 13|http://www.noxa.org/blog/2011/08/21/emulation-books/|
|Cluster 13|http://www.obeythetestinggoat.com/|
|Cluster 13|http://www.pyvideo.org/|
|Cluster 13|http://www.watchguard.com/help/docs/webui/xtm_11/en-US/index.html#cshid=en-US/wireless/ap_wireless_signalstrength_c.html|
|Cluster 13|http://www.yegor256.com/2015/04/22/favorite-software-books.html|
|Cluster 14|http://blog.dwaynecrooks.com/|
|Cluster 14|http://cg.scs.carleton.ca/~morin/misc/sortalg/|
|Cluster 14|http://developer.xamarin.com/guides/android/getting_started/installation/windows/manual_installation/|
|Cluster 14|http://passwordsgenerator.net/|
|Cluster 14|http://phantomjs.org/|
|Cluster 14|http://shiny.rstudio.com/|
|Cluster 14|http://thecrumb.com/|
|Cluster 14|http://www.dontpaniclabs.com/blog/post/2015/08/04/github-electron-tutorial-using-electron-boilerplate/|
|Cluster 14|http://www.sitepoint.com/php/|
|Cluster 14|https://github.com/amzn/web-app-starter-kit-for-fire-tv|
|Cluster 14|https://github.com/donnemartin/interactive-coding-challenges|
|Cluster 14|https://github.com/googlechrome/ioweb2015|
|Cluster 14|https://github.com/indy256/Full-stack-Developer-Interview-Questions-and-Answers|
|Cluster 14|https://github.com/joelgrus/data-science-from-scratch|
|Cluster 14|https://github.com/pallets/flask|
|Cluster 14|https://github.com/prakhar1989/Algorithms|
|Cluster 14|https://github.com/wsargent/docker-cheat-sheet|
|Cluster 14|https://ngrok.com/|
|Cluster 14|https://semaphoreci.com/community/tutorials/getting-started-with-composer-for-php-dependency-management|
|Cluster 15|http://datascienceresume.com/advice|
|Cluster 15|http://librivox.org/|
|Cluster 15|http://nborwankar.github.io/LearnDataScience/|
|Cluster 15|http://pivotal.io/|
|Cluster 15|http://quantstart.com/articles/Can-You-Still-Become-a-Quant-in-Your-Thirties|
|Cluster 15|http://vortext.systems/|
|Cluster 15|http://www.academicearth.org/|
|Cluster 15|http://www.academicearth.org/courses/circuits-and-electronics|
|Cluster 15|http://www.bluegecko.net/mysql/using-checksums-to-ensure-table-consistency-in-mysql/|
|Cluster 15|http://www.datasciencecentral.com/|
|Cluster 15|http://www.datascienceweekly.org/blog/18-data-scientist-interviews-volume-1-april-2014|
|Cluster 15|http://www.inferentialthinking.com/|
|Cluster 15|http://www.kaggle.com/|
|Cluster 15|http://www.nagios.org/|
|Cluster 15|http://www.popsci.com/science/article/2012-04/new-research-tracks-40-year-old-prediction-world-economy-will-collapse-2030|
|Cluster 15|http://www.reddit.com/r/datascience/|
|Cluster 15|http://www.skilledup.com/articles/list-data-science-bootcamps|
|Cluster 15|https://blog.modeanalytics.com/python-data-cleaning-libraries/|
|Cluster 15|https://codility.com/programmers/|
|Cluster 15|https://fifthelephant.in/2016/|
|Cluster 15|https://github.com/open-source-society/data-science|
|Cluster 15|https://github.com/ujjwalkarn/DataSciencePython|
|Cluster 15|https://paul.kinlan.me/serverless-sync-in-web-apps/|
|Cluster 15|https://prasos.fi/|
|Cluster 15|https://projecteuler.net/|
|Cluster 15|https://www.dataquest.io/blog/kaggle-tutorial/?utm_source=Prod+subscribers&utm_campaign=11fe1a4162-Newsletter_6_8_2016&utm_medium=email&utm_term=0_b2239252ea-11fe1a4162-150713397|
|Cluster 15|https://www.drivendata.org/|
|Cluster 15|https://www.hellobonsai.com/rates|
|Cluster 15|https://www.reddit.com/r/compsci/comments/3cjlzx/continually_updated_data_science_python_notebooks/|
|Cluster 15|https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009#|
|Cluster 16|https://dev.supersalon.com/tickets/|
|Cluster 16|https://dev.supersalon.com/trac/browser/SuperSalon/branches/5.5/scripts/serviceTimeFix.php?rev=16269|
|Cluster 16|https://dev.supersalon.com/trac/log/iOffice/trunk|
|Cluster 16|https://dev.supersalon.com/trac/ticket/16023|
|Cluster 16|https://dev.supersalon.com/trac/wiki/CurrentMilestones|
|Cluster 16|https://dev.supersalon.com/trac/wiki/EmpireDataExport|
|Cluster 16|https://dev.supersalon.com/trac/wiki/HowToWriteATracTicket|
|Cluster 16|https://dev.supersalon.com/trac/wiki/MattIndiaTrip|
|Cluster 16|https://dev.supersalon.com/trac/wiki/NewDevFirstSteps|
|Cluster 16|https://dev.supersalon.com/trac/wiki/PageRender|
|Cluster 16|https://dev.supersalon.com/trac/wiki/PerformanceLogging|
|Cluster 16|https://dev.supersalon.com/trac/wiki/Rogerstestaccountspage|
|Cluster 16|https://dev.supersalon.com/trac/wiki/TestSVSGiftCardProcessing|
|Cluster 16|https://dev.supersalon.com/trac/wiki/WorldCustomerDatabase|
|Cluster 17|http://addyosmani.com/resources/essentialjsdesignpatterns/book/|
|Cluster 17|http://blog.codeleak.pl/2015/06/angular2hello-world.html|
|Cluster 17|http://dean.edwards.name/weblog/2006/03/base/|
|Cluster 17|http://dfg.gd/blog/decoupling-your-code-in-laravel-using-repositiories-and-services|
|Cluster 17|http://gcc.gnu.org/|
|Cluster 17|http://marcotroisi.com/healthy-oop-object-oriented-programming/|
|Cluster 17|http://www.akadia.com/services/ssh_test_certificate.html|
|Cluster 17|http://www.broculos.net/2008/03/how-to-make-simple-html-template-engine.html#.VLRjPnsfgg4|
|Cluster 17|http://www.chebucto.ns.ca/~rakerman/port-table.html|
|Cluster 17|http://www.freenas.org/index.php?option=com_frontpage&Itemid=1|
|Cluster 17|http://www.mozilla.org/hacking/portable-cpp.html|
|Cluster 17|http://www.phptherightway.com/|
|Cluster 17|http://www.sphinx-doc.org/en/stable/|
|Cluster 17|http://www.vecteezy.com/|
|Cluster 17|http://www.yolinux.com/TUTORIALS/LinuxTutorialC++STL.html|
|Cluster 17|https://bosnadev.com/2015/03/07/using-repository-pattern-in-laravel-5/|
|Cluster 17|https://gist.github.com/JeffPaine/6213790|
|Cluster 17|https://ioffice.supersalon.com/update/|
|Cluster 17|https://kotlinlang.org/|
|Cluster 17|https://matt.sh/howto-c|
|Cluster 17|https://nikic.github.io/2011/12/27/Dont-be-STUPID-GRASP-SOLID.html|
|Cluster 17|https://regisioffice.supersalon.com/update/|
|Cluster 17|https://www.algotech.solutions/blog/python/deleting-unused-django-media-files/|
|Cluster 18|http://bafflednerd.com/learn-deep-learning-online/|
|Cluster 18|http://codergears.com/blog/?cat=2|
|Cluster 18|http://neuralnetworksanddeeplearning.com/|
|Cluster 18|http://www.5qm.de/index-en.html#|
|Cluster 18|http://www.colorschemer.com/online.html|
|Cluster 18|https://bitsharestalk.org/index.php/topic,18174.90.html|
|Cluster 18|https://github.com/HFTrader/DeepLearningBook|
|Cluster 18|https://learn.modern-developer.com/|
|Cluster 18|https://scaleyourcode.com/interviews|
|Cluster 18|https://www.google.com/about/careers/students/guide-to-technical-development.html|
|Cluster 19|http://awesome-python.com/|
|Cluster 19|http://blog.debugme.eu/front-end-developer-tools/|
|Cluster 19|http://css-tricks.com/absolute-positioning-inside-relative-positioning/|
|Cluster 19|http://developer.yahoo.com/yui/|
|Cluster 19|http://jasonpark.me/AlgorithmVisualizer/|
|Cluster 19|http://prooffreaderplus.blogspot.ca/2016/10/hugo-larochelles-neural-network-deep.html|
|Cluster 19|http://rxmarbles.com/#scan|
|Cluster 19|http://sixrevisions.com/javascript/20-fresh-javascript-data-visualization-libraries/|
|Cluster 19|http://sourceforge.net/project/showfiles.php?group_id=196195&package_id=231831&release_id=536204|
|Cluster 19|http://sourceforge.net/projects/yui|
|Cluster 19|http://substack.net/|
|Cluster 19|http://support.toshiba.com/support/modelHome?freeText=3619590|
|Cluster 19|http://tutorialzine.com/2013/02/24-cool-php-libraries-you-should-know-about/|
|Cluster 19|http://www.a2ztechguide.com/2011/08/eclipse-ide-keyboard-shortcuts-for.html|
|Cluster 19|http://www.codinghorror.com/blog/2007/10/a-visual-explanation-of-sql-joins.html|
|Cluster 19|http://www.colourlovers.com/|
|Cluster 19|http://www.cplusplus.com/ref/cmath/abs.html|
|Cluster 19|http://www.curiousgnu.com/tweetanalyzer|
|Cluster 19|http://www.dynamicdrive.com/|
|Cluster 19|http://www.flotcharts.org/|
|Cluster 19|http://www.levenez.com/lang/history.html|
|Cluster 19|http://www.michaelis-tuning.de/Nissan_Navara_D40__p_enfc.html|
|Cluster 19|http://www.sgi.com/tech/stl/|
|Cluster 19|http://www.snorgtees.com/?utm_source=AffiliateFutures&utm_medium=Banner&utm_content=YourMom_300by250&utm_campaign=AffiliateFutures|
|Cluster 19|http://www.somacon.com/p142.php|
|Cluster 19|http://www.stellarium.org/|
|Cluster 19|https://elements.polymer-project.org/browse|
|Cluster 19|https://github.com/adcloud/jamal|
|Cluster 19|https://github.com/vinta/awesome-python|
|Cluster 19|https://gym.openai.com/|
|Cluster 19|https://medium.mybridge.co/top-10-javascript-articles-from-last-month-v-may-e23383d35c1c#.vreu2t9gd|
|Cluster 19|https://snippets.webaware.com.au/howto/stop-turning-off-curlopt_ssl_verifypeer-and-fix-your-php-config/|
|Cluster 19|https://www.pinterest.com/overdriving/goddess/|
|Cluster 19|https://www.reddit.com/r/Python/comments/4pevuk/what_are_your_favorite_smaller_or_lesserknown/|
|Cluster 20|http://blitzart01.deviantart.com/gallery/|
|Cluster 20|http://browse.deviantart.com/|
|Cluster 20|http://cellar-fcp.deviantart.com/gallery/|
|Cluster 20|http://forums.mysql.com/read.php?98,67948,68548#msg-68548|
|Cluster 20|http://hackerthemes.com/bootstrap-cheatsheet#dropdown|
|Cluster 20|http://kidkidkidkid.deviantart.com/art/Legend-of-the-Cryptids-Ishtar-EX-343959600|
|Cluster 20|http://learnpythonthehardway.org/book/|
|Cluster 20|http://rosettacode.org/wiki/Rosetta_Code|
|Cluster 20|http://verehin.deviantart.com/art/Rain-Godness-Normal-383384291|
|Cluster 20|http://waldemar-kazak.deviantart.com/|
|Cluster 20|http://wallpaper.deviantart.com/|
|Cluster 20|http://www.infoq.com/presentations/Simple-Made-Easy|
|Cluster 20|http://www.joellipman.com/articles/web-development/basic-tests-for-sql-injection-vulnerabilities.html|



References:  
https://github.com/hugoalvarado/chrome-bookmark-thing  
http://brandonrose.org/clustering  
http://blog.christianperone.com/2011/09/machine-learning-text-feature-extraction-tf-idf-part-i/  
http://blog.christianperone.com/2011/10/machine-learning-text-feature-extraction-tf-idf-part-ii/  
http://blog.christianperone.com/2013/09/machine-learning-cosine-similarity-for-vector-space-models-part-iii/  

