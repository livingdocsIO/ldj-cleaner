ldj-cleaner
===========

Takes possibly messed up LDJ (line delemited json with non-json lines
in between) via STDIN and writes clean LDJ to STDOUT and the mess to
STDERR. It is implemented on top of node's streaming api so it should
handle huge data sets pretty well. It is neatly packages in a docker
container.

Check the `Makefile` for example usages.
