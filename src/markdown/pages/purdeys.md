---
type: 'work'
path: '/work/purdeys-positivity'
date: '2020-05-03'
title: 'Purdeys Positivity'
link: 'https://purdeys.com/positivity/'
featuredImage: '../images/gatsby-icon.png'
builtBy: 'at Kerve'
stack:
    - Google Cloud Sentiment Analysis
    - Node on Heroku
    - Vanilla JS
---

A weird one. Purdey's the energy drink wanted to know how positive your tweets are for reasons I can't quite remember.

I built a little node server that receives your Twitter username, looks up your last 100 tweets and runs them through Google Sentiment analysis. Another developer I work with built a normaliser that takes the sentiment score and returns a percentage.

Also running in the backend is a Heroku scheduled task that grabs a list of 1000 influencers and twitter personalities, pulls in those tweets and returns the overall most positive tweets.
