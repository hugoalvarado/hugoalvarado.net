---
title: Mysql Alter Unexpected  Magic
date: 2016-11-27
tags: mysql, alter
category: Tech
slug: mysql-alter-modify-lost-data
Summary: 
---


I once worked on a pre-existing product (POS) that uses a MySQL db on the customer location/store. We did not initially specify the character set for the db, so it used the default from the OS, but on newer versions we started using UTF8. When updating the databases to use the UTF8 charset the initial developer used an alter statement, something like alter table modify <column name> <type> CHARACTER SET utf8 COLLATE utf8_general_ci. 

This updated the table column, and set the new charset. All was well.. or so it seemed...

We did not notice that the alter + modify actually dropped some of the structure details like column default values or comments, this lead to data issues down the line when new rows were not being created with the default values we expected, causing problems in numerous scripts. 

I was tasked to research this problem. We of course did not know what was causing it at the moment or when the default was being (magically) lost, only that some tables did not have the correct structure. And this default issue did not happen on all databases, since new installs are created with the new structure from the get-go.

I took a while (several days) of studying the update process and testing to finally narrow down the problem to a few lines of code. The fix was trivial but the bug was hidden away for a long time and was likely the cause for many other issues. This could have been adverted long before causing problems if more thorough testing was done, first by the developer then by qa. 

As a side note, always read the fine print: http://dev.mysql.com/doc/refman/5.7/en/alter-table.html
"When you use CHANGE or MODIFY, column_definition must include the data type and all attributes that should apply to the new column, other than index attributes such as PRIMARY KEY or UNIQUE. Attributes present in the original definition but not specified for the new definition are not carried forward"

