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

        this.rayAndMoteLocations = new Map([
            ["naval", {
                raysOn: [true, true, true, true, true, true, true, true],
                motesOn: [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
            }],
            ["roads", {
                raysOn: [false, true, false, true, false, true, false, true],
                motesOn: [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
            }],
            ["horseback", {
                raysOn: [false, false, true, true, false, true, true, false],
                motesOn: [false, true, false, true, false, false, false, false, false, false, false, false, false, true, false, true]
            }],
            ["trains", {
                raysOn: [true, true, true, true, true, true, true, true],
                motesOn: [true, false, false, false, true, false, true, false, false, false, true, false, true, false, false, false]
            }],
            ["aviation", {
                raysOn: [true, true, true, false, false, false, true, true],
                motesOn: [false, false, false, false, false, true, false, true, false, true, false, true, false, false, false, false]
            }],
            ["camels", {
                raysOn: [false, false, true, false, false, false, true, false],
                motesOn: [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
            }],
            ["turtleback", {
                raysOn: [true, true, true, false, true, false, true, false],
                motesOn: [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
            }]
        ]);

    }

    create() {
        this.cameras.main.setBackgroundColor(blackHex);

        this.add.sprite(width/2, 25, "outerCircle").setOrigin(0.5, 0);
        //this.colorRing = this.add.sprite(width/2, 50, `${this.currColor}-ring`);

        this.allRays = [];
        for (let i=0;i<7;i++) {
            this.allRays[i] = this.add.sprite(width/2, height/2, `${this.currWeather}-ray`).setOrigin(0.5, 1);
            this.allRays[i].setAngle(45*i);
        }

        this.allMotes = [];
        for (let i=0;i<15;i++) {
            this.allMotes[i] = this.add.sprite(width/2 + Math.sin((i * Math.PI) / 8), height/2 + Math.cos((i * Math.PI) / 8), `${this.currSociety}-mote`).setOrigin(0);
            this.allMotes[i].setAngle(45*i);
        }

        this.updateRaysAndMotes();
    }

    updateRaysAndMotes() {
        let currRaysOn = this.rayAndMoteLocations.get(this.currTravel).raysOn;
        for (let i=0;i<7;i++) {
            this.allRays[i].setVisible(currRaysOn[i]);
        }

        let currMotesOn = this.rayAndMoteLocations.get(this.currTravel).motesOn;
        for (let i=0;i<15;i++) {
            this.allMotes[i].setVisible(currMotesOn[i]);
        }
    }
}