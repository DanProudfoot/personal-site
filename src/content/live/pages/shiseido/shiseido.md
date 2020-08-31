---
type: 'work'
path: '/work/shiseido'
date: '2019-03-01'
title: 'NARS / Laura Mercier'
link: ''
featuredImage: 'shis-featured.png'
featuredVideo: 'danproudfoot/nars-runthrough'
active: true
builtBy: 'at Kerve'
stack:
    - Electron
    - Printers
    - React
    - Node
gallery:
    - 'shis-1.png'
    - 'shis-2.png'
    - 'shis-3.png'
---

Shiseido, parent company of cosmetic brands Laura Mercier and NARS wanted us to build a product customiser that would sit in various John Lewis and House of Fraser stores around the UK.

Shiseido had access to a fair few DGShape LD-80 foil printers. These we really cool because they let us laser engrave foil onto products with an interface that's as simple as a normal printer - with some really important constraints.

My app was a React app hosted in an Electron wrapper. The app allowed you to write text onto a product with a live preview and then store the design as an SVG. The SVG was converted in the backend to a black and white 50mm x 50mm PNG that the printer could understand.

The final piece of the puzzle was providing live product training to in-store staff across the country. Luckily I made everything very easy to use so that was pretty fun in the end.
