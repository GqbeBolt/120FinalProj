class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {

        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                              // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);               // (color, alpha)
            loadingBar.fillRect(0, width/2, width * value, 10);   // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        // loading misc. images (UI, bg, etc)
        this.load.path = "./assets/images/other/";

        this.load.image("noiseBG", "noiseBG.png");
        this.load.image("backButton", "backButton.png");
        this.load.image("arrowButton", "arrowButton.png");
        this.load.image("skipButton", "skipButton.png");
        
        // front scene
        this.load.image("frontScene", "frontScene.png");
        this.load.image("frontSceneOpened", "FrontSceneUnlocked.png");
        this.load.image("postIt", "postit.png");
        this.load.image("postItBig", "PostItBig.png");
        this.load.image("smallLock", "SmallLock.png");
        this.load.image("smallDoc", "smallDoc.png");
        this.load.image("bigDoc", "bigDoc.png");
        this.load.image("clickableCabinet", "clickableCabinet.png");
        this.load.image("julyCard", "julyCard.png");

        // left scene
        this.load.image("leftScene", "leftScene.png");
        this.load.image("spinner", "spinner.png");
        this.load.image("23Card", "23Card.png");

        // right scene
        this.load.image("rightScene", "rightScene.png");
        this.load.image("smallLetter", "smallLetter.png");
        this.load.image("bigLetter", "SouthKeyNote.png");

        //back scene
        this.load.image("backScene", "backScene.png");
        this.load.image("smallSafe", "smallSafe.png");
        this.load.image("handle", "handle.png");
        this.load.image("smallRedCard", "smallRedCard.png");
        this.load.image("1152Card", "1152Card.png");

        // loading sigil scene
        this.load.path = "./assets/images/sigil/";
        this.load.image("outerCircle", "OuterCircle.png");
        this.load.image("centerSymbol", "CenterSymbol.png");
        this.load.image("colorCircle", "ColorCircle.png");
        this.load.image("gear", "gear.png");
        this.load.image("correctSigil", "correctSigil.png");

        //color rings
        this.load.image("black-ring", "black-ring.png");
        this.load.image("red-ring", "red-ring.png");
        this.load.image("violet-ring", "violet-ring.png");
        this.load.image("pink-ring", "pink-ring.png");
        this.load.image("green-ring", "green-ring.png");
        this.load.image("yellow-ring", "yellow-ring.png");
        this.load.image("orange-ring", "orange-ring.png");
        this.load.image("white-ring", "white-ring.png");

        //rays
        this.load.image("normal-ray", "normal-ray.png");
        this.load.image("foggy-ray", "foggy-ray.png");
        this.load.image("hot-ray", "hot-ray.png");
        this.load.image("rainy-ray", "rainy-ray.png");
        this.load.image("stormy-ray", "stormy-ray.png");
        this.load.image("snow-ray", "snow-ray.png");
        this.load.image("windy-ray", "windy-ray.png");

        //motes
        this.load.image("tribal-mote", "tribal-mote.png");
        this.load.image("agricultural-mote", "agricultural-mote.png");
        this.load.image("martial-mote", "martial-mote.png");
        this.load.image("metropolitan-mote", "metropolitan-mote.png");
        this.load.image("academic-mote", "academic-mote.png");
        this.load.image("industrial-mote", "industrial-mote.png");
        this.load.image("spiritual-mote", "spiritual-mote.png");
        this.load.image("poetic-mote", "poetic-mote.png");

        //spinners
        this.load.image("blueButton", "BlueButton.png");
        this.load.image("colorSpinner", "ColorSpinner.png");
        this.load.image("moteSpinner", "MoteSpinner.png");
        this.load.image("travelSpinner", "TravelSpinner.png");
        this.load.image("raySpinner", "RaySpinner.png");

        // loading safe 
        this.load.path = "./assets/images/safe/";

        // safe BG
        this.load.image("keypadCircle", "keypadCircle.png");
        
        // all num buttons (used for lock as well)
        this.load.image("button1", "Button1.png");
        this.load.image("button2", "Button2.png");
        this.load.image("button3", "Button3.png");
        this.load.image("button4", "Button4.png");
        this.load.image("button5", "Button5.png");
        this.load.image("button6", "Button6.png");
        this.load.image("button7", "Button7.png");
        this.load.image("button8", "Button8.png");
        this.load.image("button9", "Button9.png");
        this.load.image("button0", "Button0.png");
        this.load.image("buttonEnter", "ButtonEnter.png");
        this.load.image("buttonClear", "ButtonClear.png");

        // loading lock
        this.load.path = "./assets/images/lock/";

        this.load.image("lockBrick", "lockBrick.png");
        this.load.image("arrowUp", "arrowUp.png");
        this.load.image("latch", "latch.png");

        // this.load.spritesheet("runner", "runner.png", {
        //     frameWidth: 30,
        //     frameHeight: 36
        // })

        // load all sounds
        this.load.path = "./assets/sounds/";
        this.load.audio("physButtonSFX", "physButtonClick.wav");    
        this.load.audio("uiButtonSFX", "uiButtonClick.wav");   
        this.load.audio("sigilSpinSFX", "sigilSpin.mp3");   

        // load all fonts
        this.load.path = "./assets/fonts/";
        this.load.bitmapFont("pixelFont", "PixeledFont.png", "PixeledFont.xml"); // OmegaPC777 
        this.load.bitmapFont("typedFont", "typewriterFont.png", "typewriterFont.xml");  // GGBotNet
        this.load.bitmapFont("handwrittenFont", "handwritten.png", "handwritten.xml");  // Shaped Fonts
    }

    create() {
        // go to menu after loading
        this.scene.start("menuScene")
    }
}