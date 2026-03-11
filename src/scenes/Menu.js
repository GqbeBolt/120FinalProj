class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {

        // setting BG
        setBG(this);

        // display menu text
        
        this.startText = this.add.bitmapText(width/2, height/2, "typedFont", "START", 36).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.scene.start("frontScene"); 
        })
        .on("pointerover", () => {this.startText.setTint(blueHex)})
        .on("pointerout", () => {this.startText.setTint(0xFFFFFF)});

        // looking for grader mode input

        this.input.keyboard.createCombo('GRADER');

        this.input.keyboard.on("keycombomatch", () => {
            graderMode = true;
            this.add.bitmapText(width/2, height/2 + 100, "handwrittenFont", "GRADER MODE: ON", 36).setOrigin(0.5).setTint(pinkHex).setAngle(2);
        })
    }

}