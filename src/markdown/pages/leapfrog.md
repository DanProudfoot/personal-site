---
type: 'work'
path: '/work/leapfrog'
date: '2020-05-03'
title: 'Leapfrog LeapStart'
link: ''
featuredImage: '../images/gatsby-icon.png'
builtBy: 'at Kerve'
stack:
    - Node
    - Johnny 5
    - Arduino
---

This was a weird one.

Leapfrog wanted a massive version of their then-upcoming Leapfrog LeapStart 3D. and they wanted it installed for a day in KidZania, Westfield London Shopping Centre.

I was in charge of development and what I needed for development steered the direction of design.

We managed to source two large 3d holographic projectors - basically big cabinets that reflected the output from a monitor on a piece of glass to give illusion that the image was hovering in 3D space. We then sourced hi res clips of the animations used by the LeapStart hardware and built a web app that displayed one of these videos on the screen when an input was received.

The input was a combination of a tap on one of a number of pressure pads set on a large table, and connecting a circuit inside a modified version of the leapfrog pen. These inputs were fed into an Arduino and that was then connected to a PC running Johhny-5 in Node.

When we were in Node land, it was then really simple to send a command to one of the apps running on each of the hologram boxes to display their content.
