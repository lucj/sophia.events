## Purpose

Setup a simple web site, with an easy to remember URL: [http://sophia.events](http://sophia.events), and acting as a hub which lists the incoming technical events in Sophia-Antipolis.

## The rational

A lot of great stuff is happening in Sophia:

- meetups
  - [Docker](meetup.com/fr-FR/Docker-Nice)
  - [Hashicorp User Group](https://www.meetup.com/fr-FR/Sophia-Antipolis-HashiCorp-User-Group)
  - [CNCF](https://www.meetup.com/fr-FR/CNCF-Cloud-Native-Computing-Sophia-Antipolis/)
- events from [TelecomValley](https://telecomvalley.fr)
- events from [RivieraJug](http://rivierajug.org)
- ...

... but it's not always easy to follow all the sources.

Some people ask about a place that lists them all...  here is a simple attempt that tries to answer this need.

## Status

Early hyper manual version, a lot of stuff needs to be done

*ONGOING*

- setup front / api / db stack
- modify front so it retrieves events from the api

*TODO*

- [ ] make a clean and appealing header
- [x] display event logo in the corner opposite to the date
- [x] define events.json file describing all the events
- [x] use simple Mustache templating to build index.html
- [ ] create a backend to automatically fetch events form list of sources
- [ ] Add tab listing past events
- [x] modify css to have more items on the same page
- [ ] automate deployment of Docker image
- [ ] Expose RSS feed
- [ ] Add TLS
- [ ] have fun on this side project :)

## Credit

The first version is based on the vertical [timeline](http://codepen.io/savalazic/pen/QKwERN) created by Sava Lazic
