# nodeJS behind the scene

## nodeJS architechture consists of

```
V8 engine
    - written in C++ and JS
libuv
    - written in C++
    - responsible for Event Loop and Thread pool

```

## Node process and Threads

```
nodeJS runs on Single Thread.

Some tasks which are expensive to be executed in `Event Loop` because they block the Single Thread, runs on `Thread pool` provided by `libuv`.
Thread pool provides 4 additional threads. `Event Loop` then offloads the heavy task to `Thread Pool`.

```
