---
layout: ../../layouts/project.astro
title: Storage Moguls
client: University of Toledo Senior Design
publishDate: 2021-12-17 00:00:00
img: https://images.unsplash.com/photo-1590496793929-36417d3117de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1691&q=80
description: |
  Warehouse Inventory Management System built in Flutter
tags:
  - dev
  - frontend
  - backend
  - flutter
---

# Overview

Storage Moguls is a warehouse management system built in Flutter by myself and 4
classmates as our capstone project for the University of Toledo Senior Design class.
We chose to build our application in Flutter to allow us to easily deploy the code
on multiple platforms, while stil maintaining a single codebase. We demonstrated
at the Senior Design Expo having the application deployed on the Web, as an Android
Application and as a Windows Application.

## Architecture

We wrote our backend for this application in Node.js with Typescript. We used the Koa
package to build out our API Server, alongside the Prisma ORM to access our database.
Our database for this application was PostgreSQL which worked seamlessly with Prisma to
allow easy use of the Database in our API. Our application also was available to the users
as an easy to use and deploy Docker container, allowing us to easily spin up new instances
whenever needed, including with our automated test and deployment suite setup via
Github Actions.
