# tilelive-null
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Funibasil%2Ftilelive-null.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Funibasil%2Ftilelive-null?ref=badge_shield)


A noop sink for [tilelive](https://github.com/mapbox/tilelive.js).

## Usage

This provider registers `null:` as its protocol, so use that when loading your
sink.

## Why?

To allow `tilelive-http` to be used for seeding remote tile sources (without
caring about the output).


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Funibasil%2Ftilelive-null.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Funibasil%2Ftilelive-null?ref=badge_large)