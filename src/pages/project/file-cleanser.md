---
layout: ../../layouts/project.astro
title: File Cleanser
client: Personal Project
publishDate: 2021-04-28 00:00:00
img: https://images.unsplash.com/photo-1457694587812-e8bf29a43845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80
description: |
  Old file deletion utility built in Node.js
tags:
  - dev
  - backend
  - Node.js
repo: https://github.com/qkleinfelter/file-cleanser
---

File Cleanser is a simple utility I built because I was tired of manually having
to clean out old files from my Downloads folder. Over time, it grew a bit, allowing
for multiple user specified configurations on Folders which should be checked
as well as how long ago something should have been last edited to be considerd old.
I also implemented a separate logging mode to allow a user to review files that would
be deleted if the program was ran in the delete mode before doing so.
