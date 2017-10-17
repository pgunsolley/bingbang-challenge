/**
 * First bing_bang solution:
 * 
 * Count from 1 to 100, while outputting "bing" for ever 3, "bang" for ever 5, and the current number 
 * for every other number.
 * 
 * This was the solution that I provided during the live interview.
 * 
 * This was not the solution that I wanted, however it was the easiest to incept,
 * so I went with it (with some hiccups along the way).
 * 
 * @return void
 */
function bing_bang() {
    var 
        bingCounter = 0,
        bangCounter = 0;

    for (var i = 1; i <= 100; i++) {
        bingCounter++;
        bangCounter++;

        if (bingCounter !== 3 && bangCounter !== 5) {
            console.log(i);
        }
        if (bingCounter === 3) {
            bingCounter = 0;
            console.log("Bing");
        }
        if (bangCounter === 5) {
            bangCounter = 0;
            console.log("Bang");
        }
    }
}

/**
 * This was the solution that I had hoped to use instead.
 * 
 * I used my knowledge of generators to create a more realistic, applicable solution.
 * 
 * I created this right after the interview. :(
 * 
 * @return generator
 */
function* bing_bang_eloquent() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            yield "bing";
        }
        if (i % 5 === 0) {
            yield "bang";
        }
        if (i % 3 !== 0 && i % 5 !== 0) {
            yield i.toString();
        }
    }
}

// Execute the generator
for (var _ of bing_bang_eloquent()) {
    console.log(_);
}