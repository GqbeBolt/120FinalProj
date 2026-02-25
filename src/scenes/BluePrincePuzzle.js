class BluePrincePuzzle extends Phaser.Scene {
    constructor() {
        super("blueScene");
    }

    init() {
        this.colorArr = ["black", "red", "violet", "pink", "green", "yellow", "orange", "white"];
        this.travelArr = ["naval", "roads", "horseback", "trains", "aviation", "camels", "turtleback"];
        this.weatherArr = ["normal", "foggy", "hot", "rainy", "stormy", "snow", "windy"];
        this.societyArr = ["tribal", "agricultural", "martial", "metropolitan", "academic", "industrial", "spiritual", "poetic"];

        this.currColor = "black";
        this.currTravel = "naval";
        this.currWeather = "normal";
        this.currSociety = "tribal";
    }

    create() {
        
    }

}