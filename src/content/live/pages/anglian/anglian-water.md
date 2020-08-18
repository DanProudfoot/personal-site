---
type: 'work'
path: '/work/anglian-water'
date: '2020-05-03'
title: 'Anglian Water'
active: true
link: ''
featuredImage: anglian.jpg
builtBy: 'at Kerve'
stack:
    - Leap Motion
    - React
---

Designed for a travelling showcase event for Anglian Water, this simple game used a Leap Motion to track a users hands to play a game.

The game was relative simple but was quite fun to play. Water slowly fills from the bottom of the screen. It's up to the player to turn valves that slowly loosen over time using their actual hands.

The Leap Motion amazingly comes with a built-in websocket server, do catching events from that and reading them in the browser was shockingly painless. The Leap recognises certain hand gestures. So when you make a vague closed-hand waving gesture I used that to signal that a valve needed to be turned.
