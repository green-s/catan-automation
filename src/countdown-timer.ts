/// <reference path="typings/tp.d.ts">/>
/// <reference path="typings/game-object.d.ts">/>

/** START SHARED **/
const BasicColors = {
    white: new Color(255, 255, 255, 255),
    black: new Color(0, 0, 0, 255),
    red: new Color(255, 0, 0, 255),
    green: new Color(0, 255, 0, 255),
    blue: new Color(0, 0, 255, 255),
    yellow: new Color(255, 255, 0, 255),
    orange: new Color(255, 165, 0, 255),
    magenta: new Color(255, 0, 255, 255),
};
/** END SHARED **/

/**
 * @type {GameObject}
 */
let refObject = this.refObject;

let secLeft = 0;
let timer;

refObject.setName("Grab to reset - release to start");
refObject.onGrab.add(() => resetTimer());
refObject.onReleased.add(() => startTimer(10));

/**
 * Start timer
 * @param {number} sec count of seconds
 */
function startTimer(sec) {
    // refObject.setPrimaryColor(BasicColors.red); // Weird effect on color change when player hold object
    secLeft = sec;
    const iter = () => {
        if (secLeft === 0) {
            resetTimer();
            return;
        }

        timer = setTimeout(() => {
            iter();
            if (secLeft === 0) {
                world.broadcastChatMessage(
                    `-- Times up --`,
                    BasicColors.orange,
                );
            } else {
                world.broadcastChatMessage(
                    `-- ${secLeft}s left --`,
                    BasicColors.orange,
                );
            }
            secLeft--;
        }, 1000);
    };
    iter();
}

/**
 * Reset seconds counter
 */
function resetTimer() {
    refObject.setPrimaryColor(BasicColors.green);
    secLeft = 0;
    clearTimeout(timer);
}
