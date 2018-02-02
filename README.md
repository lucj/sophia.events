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

## Want to help making this website look better ? :)

Fell free to modify it and to submit a PR.

### Clone de repository

```
$ git clone https://github.com/lucj/sophia.events.git && cd sophia.events
```

### Run stack

This assumes you have [Docker](https://www.docker.com/community-edition#/download) / [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine 

```
$ docker-compose up -d
```

A web server is run in a Docker container available on port 8000.

### Modify the files

Fell free to modify the css / html.

Once you'r happy with your changes you can report the modifications of the html in the *template/index.mustache* file.

## Status

*TODO*

- [ ] make a clean and appealing header
- [x] display event logo in the corner opposite to the date
- [x] define events.json file describing all the events
- [x] use simple Mustache templating to build index.html
- [ ] Add tab listing past events
- [x] modify css to have more items on the same page
- [ ] Expose RSS feed
- [ ] Add TLS
- [ ] create a backend to automatically fetch events form list of sources
- [ ] have fun on this side project :)

## Credit

The first version is based on the vertical [timeline](http://codepen.io/savalazic/pen/QKwERN) created by Sava Lazic
