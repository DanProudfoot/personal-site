---
type: 'work'
path: '/work/vodafone-pinball'
date: '2020-02-01'
title: 'Vodafone 5G Giga Pinball'
link: ''
featuredImage: ''
active: true
builtBy: 'at Kerve'
stack:
    - Node on Heroku
    - Firebase
    - React
    - Websockets
---

Part of a large marketing campaign by Vodafone Germany that was sadly undermined by the start of the Covid-19 pandemic, the "Vodafone 5G Giga Pinball" project was a really cool international project to be part of.

Before being reduced in scope at the last moment, we had planned to project a large Pinball game on the side of Mercedes stadium in Berlin, and that game was played with a phone given to participants connected via 5G. This was all done to demonstrate the latency benefits that 5G can provide over 4G.

I built the React-based controller app, a React-based scoreboard app and the websocket server, whilst the Unity Pinball game was built by another member of the team.

The server I built communicated with Firebase to store player scores, which were then shown in realtime on the scoreboard display.

The controller app was built so that a member of the event staff could control every aspect of the proceedings, including creating new players; resetting the game if something went wrong and adding and assigning players into teams in the multiplayer mode. The controller app would then switch into a locked-down "user mode" that allowed the player to play the game.
