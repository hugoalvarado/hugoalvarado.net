---
title: TIL - Iperf command
date: 2017-11-05
tags: Lan, Linux
category: Dev
slug: iperf-local-lan-speed
Summary: 
---

Tools like ping and trace are well known and commonly used to debug networking issues locally (lan) and on the internet. Network speed testers are also common and easy to use, but I found myself wanting to test the speed of my local network, for this the [iperf](https://iperf.fr/) command is a great and simple option.

You simply run it on 2 devices (works on android, pc, mac and of course linux) as a server and client. On one computer  you will need to run `iperf -s`, this will be the server and will show the final stats. The other computer will connect to the server `iperf -c 10.1.1.1` and immediately begin sending data to the server and once done will show the speed of your network.

There are more options to tweak the data size and behavior, some examples are [here](https://openmaniak.com/iperf.php).

