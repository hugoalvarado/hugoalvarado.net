---
title: Getting the IP of a running Docker Container
date: 2016-12-16
tags: Docker, Vagrant, networking, dhcp
category: Tech
slug: get-docker-ip
Summary: 
---

I had a few Docker containers running on static ips locally, my Vagrant file had

```
config.vm.network "private_network", ip: "192.168.33.14"
config.vm.network "private_network", ip: "192.168.33.16"
```

And I could access my containers with each of those ips externally and internally. After running vagrant ssh I was able to run mysql -h192.168.33.14 as needed.

At one point I changed the Vagrant file to use dhcp:
```
config.vm.network "public_network", type: "dhcp"
```

Which assigned a new ip to my vm, set to 192.168.2.116 by my local dhcp router.
Initially this worked fine but when I needed to access services in my containers from my vm I realized the ips had changed as well.

To figure out the new ips I needed to first find the id of my container:
```
docker ps
```
Which told me that the container I wanted was f10b0af660f9 .

Then a quick
```
docker inspect f10b0af660f9 | grep -i ipaddress
```
returned

```
vagrant@ubuntu-14:~$ docker inspect f10b0af660f9 | grep -i ipaddress
        "SecondaryIPAddresses": null,
        "IPAddress": "172.17.0.4",
                "IPAddress": "172.17.0.4",
```
Which of course meant I now had to use
```
mysql -h172.17.0.4
```

