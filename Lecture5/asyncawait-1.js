function promiseTimeout(ms) {
    return new Promise((resolve, reject)  => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    // logic
    console.log("Start!!");
    //try to take await out and see
    await promiseTimeout(2000);
    console.log("Stop!!");
}

run();