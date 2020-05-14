/* eslint-disable newline-after-var */
/* eslint-disable indent-legacy */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */

/* eslint-disable indent-legacy */
/* eslint-disable indent */
/* eslint-disable curly */
class PubSub {

    // https://medium.com/@thebabscraig/javascript-design-patterns-part-2-the-publisher-subscriber-pattern-8fe07e157213

    static subscribers = {};

    static publish (event, data) {
        if (!PubSub.subscribers[event]) return;

        PubSub.subscribers[event].forEach(subscriberCallback => subscriberCallback(data));
    }

    static subscribe (event, callback) {
        let index = 0;

        if (!PubSub.subscribers[event]) {
            PubSub.subscribers[event] = [];
        }

        index = PubSub.subscribers[event].push(callback) - 1;

        return {
            unsubscribe (event) {
                PubSub.subscribers[event].splice(index, 1);
            }
        };
    }
}