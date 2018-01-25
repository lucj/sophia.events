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

## Development

If you want to participate in the dev and make this thing looks better:

### Get the repo

```
$ git clone https://github.com/lucj/sophia.events.git
```

### Manage events

Add events in events.json file.

Note: event closest in time should be the first item of the list

### Create the image

```
$ docker build -t sophia.event .
```

### Run the image

```
$ docker run -p 8000:80 -d sophia.event
```

UI is then available on port 8000

## Status

Early hyper manual version, a lot of stuff needs to be done

- [ ] make a clean and appealing header
- [x] define events.json file describing all the events
- [x] use simple Mustache templating to build index.html
- [ ] create a backend to automatically fetch events form list of sources
- [ ] Add tab listing past events
- [ ] modify css to have more items on the same page
- [ ] automate deployment of Docker image
- [ ] have fun on this side project :)

## Credit

The first version is based on the vertical [timeline](http://codepen.io/savalazic/pen/QKwERN) created by Sava Lazic
