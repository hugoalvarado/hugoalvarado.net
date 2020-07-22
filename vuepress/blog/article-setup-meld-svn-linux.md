---
title: SVN Merging and conflict resolution with Meld
date: 2017-03-21
tags: svn, med, linux, merge
category: Tech
slug: svn-and-meld-setup
Summary:
---

This is a quick guide on setting up Meld with SVN (not everyone uses git, yet) on Linux (Ubuntu Mate 17.04). This is largely based on http://stackoverflow.com/questions/7252011/how-to-set-up-svn-conflict-resolution-with-meld.

First, create an svn_merge_meld.py script somewhere like /home/username/bin/:

	#!/usr/bin/env python
	# svn merge-tool python wrapper for meld 3.16.4 and svn, version 1.9.5 (r1770682)
	import sys
	import subprocess

	try:
	    # path to meld
	    meld = "/usr/bin/meld"

	    # file paths
	    base   = sys.argv[1]
	    theirs = sys.argv[2]
	    mine   = sys.argv[3]
	    merged = sys.argv[4]

	    cmd = [meld, base, mine, theirs, '-o', merged, '--auto-merge']

	    # Call meld, making sure it exits correctly
	    subprocess.check_call(cmd)
	except:
	    print "Oh noes, an error!"
	    sys.exit(-1)



Then update the subversion config file in /home/username/.subversion/config:

	merge-tool-cmd = /home/username/bin/svn_merge_meld.py


Remember to

	chmod +x /home/username/bin/svn_merge_meld.py


Thats it!



