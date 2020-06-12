/*
    Deno starts a deno process

        a process is a sandbox that allows some memory from the computer
        for a program

    Deno has the rusty_v8 layer (which allows the V8 engine and the JS
    code to communicate with the rust code from deno)

    Deno uses the rusty_v8 layer to communicate with the Rust code
    
    When things are outside JS rusty_v8 sends it over to the Rust code
    (Rust isolate from Deno) e.g. this happens when interacting with web
    apis like setTimeout()

    Deno frontend is JS and bkend is RUST

    Deno.core is the main API that communicates between JS and RUST 
    with cmds like Deno.core.send or Deno.core.recv

    We need to have asynchronous I/O
    e.g. make a request with setTimeout() in order to run multiple
    operations at the same time in the background, we need an event loop


    Tokyo library allows us to use a Thread Pool and Workers

    once the worker finishes a task it sends it to the rusty_v8 and 
    to the JS code

    with Node JS gets sent to the V8 engine
    Node.js bindings is like the rusty_v8 layer
    Node.js bindings communicate with the V8 engine and when operations 
    from V8 are non JS, they are sent to LIBUV (an async I/O library 
    like Tokyo, which has worker threads too)

    Workerthreads are browser's webworkers

    Libuv and node have workers

    Deno is built on Tokio, Rust and V8
*/
