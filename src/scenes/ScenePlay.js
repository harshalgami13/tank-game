
// You can write more code here

/* START OF COMPILED CODE */

class ScenePlay extends Phaser.Scene {

	constructor() {
		super("ScenePlay");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// welcomescreen
		this.add.image(960, 541, "welcomescreen");

		// wallet
		this.add.image(175, 92, "wallet");

		// recruit_btn
		const recruit_btn = this.add.image(1613, 92, "recruit-btn");

		// settings_icon
		const settings_icon = this.add.image(1817, 92, "settings-icon");

		// inventory_img
		const inventory_img = this.add.image(131, 949, "inventory-img");

		// story_icon
		const story_icon = this.add.image(1777.25, 949, "story-icon");
		story_icon.scaleX = 1.5;
		story_icon.scaleY = 1.5;

		// playnow
		const playnow = this.add.image(960, 893, "playnow");

		// reward_icon
		this.add.image(1817, 233, "reward-icon");

		// text_1
		const text_1 = this.add.text(175, 92, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "2000";
		text_1.setStyle({ "fontFamily": "Normandia", "fontSize": "30px" });

		// settings
		const settings = this.add.container(0, 0);
		settings.visible = false;

		// troops_bg
		const troops_bg = this.add.image(960, 540, "troops-bg");
		troops_bg.scaleX = 0.7;
		settings.add(troops_bg);

		// battleframeimg
		const battleframeimg = this.add.image(960, 540, "battleframeimg");
		battleframeimg.scaleX = 0.6;
		battleframeimg.scaleY = 0.6;
		settings.add(battleframeimg);

		// settings_close
		const settings_close = this.add.image(1185, 421, "settings-close");
		settings_close.scaleX = 0.5;
		settings_close.scaleY = 0.5;
		settings.add(settings_close);

		// music_icon
		const music_icon = this.add.image(793, 492, "music-icon");
		music_icon.scaleX = 0.7;
		music_icon.scaleY = 0.7;
		settings.add(music_icon);

		// sound_icon
		const sound_icon = this.add.image(793, 588, "sound-icon");
		sound_icon.scaleX = 0.7;
		sound_icon.scaleY = 0.7;
		settings.add(sound_icon);

		// loading_bar_1
		const loading_bar_1 = this.add.image(1168, 492, "loading-bar");
		loading_bar_1.scaleX = 0.8;
		loading_bar_1.scaleY = 0.7;
		loading_bar_1.setOrigin(1, 0.5);
		settings.add(loading_bar_1);

		// loading_bar_2
		const loading_bar_2 = this.add.image(1003, 588, "loading-bar");
		loading_bar_2.scaleX = 0.8;
		loading_bar_2.scaleY = 0.7;
		settings.add(loading_bar_2);

		// controller_1
		const controller_1 = this.add.container(0, 0);
		settings.add(controller_1);

		// value_1
		const value_1 = this.add.image(1168, 492, "loading-bar");
		value_1.scaleX = 0.8;
		value_1.scaleY = 0.7;
		value_1.setOrigin(1, 0.5);
		value_1.visible = false;
		controller_1.add(value_1);

		// slider_1
		const slider_1 = this.add.image(1161, 492, "loading-bar");
		slider_1.scaleX = 0.15;
		slider_1.scaleY = 0.7;
		slider_1.angle = 90;
		controller_1.add(slider_1);

		// controller_2
		const controller_2 = this.add.container(0, 0);
		settings.add(controller_2);

		// value_2
		const value_2 = this.add.image(1168.5999755859375, 588, "loading-bar");
		value_2.scaleX = 0.8;
		value_2.scaleY = 0.7;
		value_2.setOrigin(1, 0.5);
		value_2.visible = false;
		controller_2.add(value_2);

		// slider_2
		const slider_2 = this.add.image(1161, 588, "loading-bar");
		slider_2.scaleX = 0.15;
		slider_2.scaleY = 0.7;
		slider_2.angle = 90;
		controller_2.add(slider_2);

		this.recruit_btn = recruit_btn;
		this.settings_icon = settings_icon;
		this.inventory_img = inventory_img;
		this.story_icon = story_icon;
		this.playnow = playnow;
		this.settings = settings;
		this.settings_close = settings_close;
		this.controller_1 = controller_1;
		this.value_1 = value_1;
		this.slider_1 = slider_1;
		this.controller_2 = controller_2;
		this.value_2 = value_2;
		this.slider_2 = slider_2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	recruit_btn;
	/** @type {Phaser.GameObjects.Image} */
	settings_icon;
	/** @type {Phaser.GameObjects.Image} */
	inventory_img;
	/** @type {Phaser.GameObjects.Image} */
	story_icon;
	/** @type {Phaser.GameObjects.Image} */
	playnow;
	/** @type {Phaser.GameObjects.Container} */
	settings;
	/** @type {Phaser.GameObjects.Image} */
	settings_close;
	/** @type {Phaser.GameObjects.Container} */
	controller_1;
	/** @type {Phaser.GameObjects.Image} */
	value_1;
	/** @type {Phaser.GameObjects.Image} */
	slider_1;
	/** @type {Phaser.GameObjects.Container} */
	controller_2;
	/** @type {Phaser.GameObjects.Image} */
	value_2;
	/** @type {Phaser.GameObjects.Image} */
	slider_2;

	/* START-USER-CODE */

	// Write your code here

	preload() {
		this.load.plugin('rexsliderplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexsliderplugin.min.js', true);
	}

	create() {

		this.editorCreate();

		this.oSoundManager = new SoundManager(this)

		this.playnow.setInteractive().on('pointerdown', function () {
			this.scene.start('BackgroundSelect');
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false)
			this.oSoundManager.setClickSoundVolume(0.05)
		}, this)

		this.settings_icon.setInteractive().on('pointerdown', function () {
			this.settings.visible = true
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false)
			this.oSoundManager.setClickSoundVolume(0.05)
		}, this)

		this.settings_close.setInteractive().on('pointerdown', function () {
			this.settings.visible = false
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false)
			this.oSoundManager.setClickSoundVolume(0.05)
		}, this)

		this.story_icon.setInteractive().on('pointerdown', function () {
			this.oSoundManager.playSound(this.oSoundManager.explosion, false)
		}, this)




		this.getMusicController()

		this.getSoundController()

	}
	update() {

		// Slider 1 Controller
		let slider_1_sound = this.slider_1.slider.value / 10
		this.text.setText(slider_1_sound.toFixed(3));
		this.oSoundManager.setBackgroundVolume(slider_1_sound.toFixed(3))
		sessionStorage.setItem('musicVolume', slider_1_sound.toFixed(3))

		// Slider 2 Controller

		let slider_2_sound = this.slider_2.slider.value / 10
		this.text.setText(slider_2_sound.toFixed(3));
		this.oSoundManager.setSoundsVolume(slider_2_sound.toFixed(3))
		sessionStorage.setItem('soundVolume', slider_2_sound.toFixed(3))

	}

	getSoundController() {
		this.slider_2.slider = this.plugins.get('rexsliderplugin').add(this.slider_2, {
			endPoints: [{
				x: this.slider_2.x - 320,
				y: this.slider_2.y
			},
			{
				x: this.slider_2.x + 0,
				y: this.slider_2.y
			}
			],
			value: 0.23
		});

		this.add.graphics()
			.lineStyle(5, 0x550055, 0)
			.strokePoints(this.slider_2.slider.endPoints);

		this.text = this.add.text(0, 0, '', {
			fontSize: '20px'
		});
		this.cursorKeys = this.input.keyboard.createCursorKeys();
	}

	getMusicController() {
		this.slider_1.slider = this.plugins.get('rexsliderplugin').add(this.slider_1, {
			endPoints: [{
				x: this.slider_1.x - 320,
				y: this.slider_1.y
			},
			{
				x: this.slider_1.x + 0,
				y: this.slider_1.y
			}
			],
			value: 0.23
		});

		this.add.graphics()
			.lineStyle(5, 0x550055, 0)
			.strokePoints(this.slider_1.slider.endPoints);

		this.text = this.add.text(0, 0, '', {
			fontSize: '20px'
		});
		this.cursorKeys = this.input.keyboard.createCursorKeys();
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
