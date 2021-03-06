#!/usr/bin/env python
"""Benchmark TODO."""

from __future__ import print_function
import timeit

NAME = "TODO"
REPEATS = 3
ITERATIONS = 1000000


def print_version():
    """Print the TAP version."""
    print("TAP version 13")


def print_summary(total, passing):
    """Print the benchmark summary.

    # Arguments

    * `total`: total number of tests
    * `passing`: number of passing tests

    """
    print("#")
    print("1.." + str(total))  # TAP plan
    print("# total " + str(total))
    print("# pass  " + str(passing))
    print("#")
    print("# ok")


def print_results(elapsed):
    """Print benchmark results.

    # Arguments

    * `elapsed`: elapsed time (in seconds)

    # Examples

    ``` python
    python> print_results(0.131009101868)
    ```
    """
    rate = ITERATIONS / elapsed

    print("  ---")
    print("  iterations: " + str(ITERATIONS))
    print("  elapsed: " + str(elapsed))
    print("  rate: " + str(rate))
    print("  ...")


def benchmark():
    """Run the benchmark and print benchmark results."""
    setup = "from math import TODO; from random import random;"
    stmt = "y = TODO(random())"

    t = timeit.Timer(stmt, setup=setup)

    print_version()

    for i in xrange(REPEATS):
        print("# python::" + NAME)
        elapsed = t.timeit(number=ITERATIONS)
        print_results(elapsed)
        print("ok " + str(i+1) + " benchmark finished")

    print_summary(REPEATS, REPEATS)


def main():
    """Run the benchmark."""
    benchmark()


if __name__ == "__main__":
    main()
