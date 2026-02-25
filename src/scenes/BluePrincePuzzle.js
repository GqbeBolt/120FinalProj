class BluePrincePuzzle extends Phaser.Scene {
    constructor() {
        super("blueScene");
    }

    init() {

        this.input.setPollAlways();

        this.buttonCooldownTime = 1000;

        this.colorArr = ["black", "red", "violet", "pink", "green", "yellow", "orange", "white"];
        this.travelArr = ["naval", "roads", "horseback", "trains", "aviation", "camels", "turtleback"];
        this.weatherArr = ["normal", "foggy", "hot", "rainy", "stormy", "snow", "windy"];
        this.societyArr = ["tribal", "agricultural", "martial", "metropolitan", "academic", "industrial", "spiritual", "poetic"];

        this.currColor = 0;
        this.currTravel = 0;
        this.currWeather = 0;
        this.currSociety = 0;

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

        this.add.image(0, 0, "noiseBG").setOrigin(0).setAlpha(0.5);

        this.add.sprite(width/2, 25, "outerCircle").setOrigin(0.5, 0);
        //this.colorRing = this.add.sprite(width/2, 50, `${this.currColor}-ring`);

        this.allRays = [];
        for (let i=0;i<7;i++) {
            this.allRays[i] = this.add.sprite(width/2, height/2, `${this.weatherArr[this.currWeather]}-ray`).setOrigin(0.5, 1);
            this.allRays[i].setAngle(45*i);
        }

        this.allMotes = [];
        for (let i=0;i<15;i++) {
            this.allMotes[i] = this.add.sprite(width/2 + Math.sin((i * Math.PI) / 8), height/2 + Math.cos((i * Math.PI) / 8), `${this.currSociety}-mote`).setOrigin(0);
            this.allMotes[i].setAngle(45*i);
        }

        this.updateRaysAndMotes();  

        // buttons
        this.colorText = this.add.bitmapText(width/2, height/2+90, "typedFont", "Color", 24).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currColor = (this.currColor+1) % this.colorArr.length;
            console.log(this.colorArr[this.currColor]);
            this.buttonCooldown();
        })
        .on("pointerover", () => {this.colorText.setTint(redHex)})
        .on("pointerout", () => {this.colorText.setTint(0xFFFFFF)});

        this.travelText = this.add.bitmapText(width/2, height/2+120, "typedFont", "Travel", 24).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currTravel = (this.currTravel+1) % this.travelArr.length;
            console.log(this.travelArr[this.currTravel]);
            this.buttonCooldown();
        })
        .on("pointerover", () => {this.travelText.setTint(redHex)})
        .on("pointerout", () => {this.travelText.setTint(0xFFFFFF)});

        this.weatherText = this.add.bitmapText(width/2, height/2+150, "typedFont", "Weather", 24).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currWeather = (this.currWeather+1) % this.weatherArr.length;
            console.log(this.weatherArr[this.currWeather]);
            this.buttonCooldown();
        })
        .on("pointerover", () => {this.weatherText.setTint(redHex)})
        .on("pointerout", () => {this.weatherText.setTint(0xFFFFFF)});

        this.societyText = this.add.bitmapText(width/2, height/2+180, "typedFont", "Society", 24).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.currSociety = (this.currSociety+1) % this.societyArr.length;
            console.log(this.societyArr[this.currSociety]);
            this.buttonCooldown();
        })
        .on("pointerover", () => {this.societyText.setTint(redHex)})
        .on("pointerout", () => {this.societyText.setTint(0xFFFFFF)});

        this.buttons = this.add.group([this.colorText, this.travelText, this.weatherText, this.societyText]);
    }

    updateRaysAndMotes() {
        let currRaysOn = this.rayAndMoteLocations.get(this.travelArr[this.currTravel]).raysOn;
        for (let i=0;i<7;i++) {
            this.allRays[i].setVisible(currRaysOn[i]);
        }
        
        let currMotesOn = this.rayAndMoteLocations.get(this.travelArr[this.currTravel]).motesOn;
        for (let i=0;i<15;i++) {
            this.allMotes[i].setVisible(currMotesOn[i]);
        }
    }

    buttonCooldown() {
        this.buttons.children.each( (button)=> {
            button.disableInteractive();
            button.setTint(0xFFFFFF);
        })

        this.time.delayedCall(this.buttonCooldownTime, () => {
            this.buttons.children.each( (button)=> {
                button.setInteractive();
            })
        }, null, this);

    }
}