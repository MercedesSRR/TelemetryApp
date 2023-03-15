'use strict';

export default class TelemetryRecord {
    #_data;

    constructor({row, col, playerAction, deltaTime, buildId}) {

        this.#_data = this.populate({
            row,
            col,
            playerAction,
            deltaTime,
            buildId
        });
    }

    populate({row, col, playerAction, deltaTime, buildId}) {

        this.#_data = {
            row,
            col,
            playerAction,
            deltaTime,
            buildId
        }
    }

    reset() {
        
    }
}