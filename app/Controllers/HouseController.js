import { appState } from "../AppState.js";

export class houseController {
    constructor() {
        appState.on('cars', _drawHouses)
        appState.on('activeHouse', _drawActiveHouse)
    }
}