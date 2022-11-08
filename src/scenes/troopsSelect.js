
// You can write more code here
let tank_strength
let tank_power
let tank_damage
let tank_defense
/* START OF COMPILED CODE */

class troopsSelect extends Phaser.Scene {

	constructor() {
		super("troopsSelect");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// troopsframe
		this.add.image(960, 540, "troopsframe");

		// select_team_btn
		const select_team_btn = this.add.image(1747, 41, "select-team-btn");
		select_team_btn.scaleX = 1.6;
		select_team_btn.scaleY = 1.6;

		// back_to_home_btn
		const back_to_home_btn = this.add.image(166, 41, "back-to-home-btn");
		back_to_home_btn.scaleX = 1.2;
		back_to_home_btn.scaleY = 1.2;

		// select_btn
		const select_btn = this.add.image(346, 944, "select-btn");
		select_btn.scaleX = 0.7;
		select_btn.scaleY = 0.7;

		// troops_list
		const troops_list = this.add.container(0, -2);

		// troops_bg
		const troops_bg = this.add.image(1279, 787, "troops-bg");
		troops_bg.scaleX = 1.5;
		troops_bg.scaleY = 1.5;
		troops_list.add(troops_bg);

		// mytroops_btn
		const mytroops_btn = this.add.image(1279, 511, "mytroops-btn");
		troops_list.add(mytroops_btn);

		// preview_troops
		const preview_troops = this.add.container(0, 0);

		// previewTank
		const previewTank = this.add.sprite(346, 422, "popup-tank1");
		previewTank.scaleX = 2;
		previewTank.scaleY = 2;
		preview_troops.add(previewTank);

		// stats
		const stats = this.add.image(346, 808, "stats");
		stats.visible = false;
		preview_troops.add(stats);

		// text_0
		const text_0 = this.add.text(263, 760, "", {});
		text_0.setOrigin(1, 0.5);
		text_0.text = "Strength";
		text_0.setStyle({ "fontFamily": "Normandia", "fontSize": "21px" });
		preview_troops.add(text_0);

		// text_1
		const text_1 = this.add.text(265, 791, "", {});
		text_1.setOrigin(1, 0.5);
		text_1.text = "attack power";
		text_1.setStyle({ "fontFamily": "Normandia", "fontSize": "21px" });
		preview_troops.add(text_1);

		// text_2
		const text_2 = this.add.text(265, 823, "", {});
		text_2.setOrigin(1, 0.5);
		text_2.text = "damage";
		text_2.setStyle({ "fontFamily": "Normandia", "fontSize": "21px" });
		preview_troops.add(text_2);

		// text
		const text = this.add.text(264, 853, "", {});
		text.setOrigin(1, 0.5);
		text.text = "defense";
		text.setStyle({ "fontFamily": "Normandia", "fontSize": "21px" });
		preview_troops.add(text);

		// selected_troops
		const selected_troops = this.add.container(0, 0);

		// plus_img_0
		const plus_img_0 = this.add.sprite(939, 271, "plus-img");
		plus_img_0.scaleX = 1.1;
		plus_img_0.scaleY = 1.1;
		selected_troops.add(plus_img_0);

		// plus_img_1
		const plus_img_1 = this.add.sprite(1281, 271, "plus-img");
		plus_img_1.scaleX = 1.1;
		plus_img_1.scaleY = 1.1;
		selected_troops.add(plus_img_1);

		// plus_img_2
		const plus_img_2 = this.add.sprite(1627, 271, "plus-img");
		plus_img_2.scaleX = 1.1;
		plus_img_2.scaleY = 1.1;
		selected_troops.add(plus_img_2);

		// rectangle_0
		const rectangle_0 = this.add.rectangle(280, 750, 300, 18);
		rectangle_0.setOrigin(0, 0);
		rectangle_0.isFilled = true;

		// rec_green_0
		const rec_green_0 = this.add.rectangle(280, 750, 300, 18);
		rec_green_0.setOrigin(0, 0);
		rec_green_0.isFilled = true;
		rec_green_0.fillColor = 4389899;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(280, 783, 300, 18);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;

		// rec_green_1
		const rec_green_1 = this.add.rectangle(280, 783, 300, 18);
		rec_green_1.setOrigin(0, 0);
		rec_green_1.isFilled = true;
		rec_green_1.fillColor = 4389899;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(280, 815, 300, 18);
		rectangle_2.setOrigin(0, 0);
		rectangle_2.isFilled = true;

		// rec_green_2
		const rec_green_2 = this.add.rectangle(280, 815, 300, 18);
		rec_green_2.setOrigin(0, 0);
		rec_green_2.isFilled = true;
		rec_green_2.fillColor = 4389899;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(280, 844, 300, 18);
		rectangle_3.setOrigin(0, 0);
		rectangle_3.isFilled = true;

		// rec_green_3
		const rec_green_3 = this.add.rectangle(280, 844, 300, 18);
		rec_green_3.setOrigin(0, 0);
		rec_green_3.isFilled = true;
		rec_green_3.fillColor = 4389899;

		this.select_team_btn = select_team_btn;
		this.back_to_home_btn = back_to_home_btn;
		this.select_btn = select_btn;
		this.troops_list = troops_list;
		this.preview_troops = preview_troops;
		this.previewTank = previewTank;
		this.plus_img_0 = plus_img_0;
		this.plus_img_1 = plus_img_1;
		this.plus_img_2 = plus_img_2;
		this.rec_green_0 = rec_green_0;
		this.rec_green_1 = rec_green_1;
		this.rec_green_2 = rec_green_2;
		this.rec_green_3 = rec_green_3;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	select_team_btn;
	/** @type {Phaser.GameObjects.Image} */
	back_to_home_btn;
	/** @type {Phaser.GameObjects.Image} */
	select_btn;
	/** @type {Phaser.GameObjects.Container} */
	troops_list;
	/** @type {Phaser.GameObjects.Container} */
	preview_troops;
	/** @type {Phaser.GameObjects.Sprite} */
	previewTank;
	/** @type {Phaser.GameObjects.Sprite} */
	plus_img_0;
	/** @type {Phaser.GameObjects.Sprite} */
	plus_img_1;
	/** @type {Phaser.GameObjects.Sprite} */
	plus_img_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	rec_green_0;
	/** @type {Phaser.GameObjects.Rectangle} */
	rec_green_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	rec_green_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	rec_green_3;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.oSoundManager = new SoundManager(this)


		this.troopsImage = [
			['popup-tank1', 78, 20, 30, 50],
			['popup-tank2', 40, 80, 50, 70],
			['popup-tank3', 50, 20, 80, 40],
			['popup-tank1', 20, 50, 60, 90],
			['popup-tank2', 70, 80, 70, 50],
			['popup-tank3', 50, 70, 80, 60],
			['popup-tank1', 80, 50, 50, 70],
			['popup-tank2', 90, 20, 40, 80]
		]

		// localStorage.setItem('troopsImage', JSON.stringify(this.troopsImage))

		// console.log(JSON.parse(localStorage.getItem('troopsImage')))

		this.counter = 1
		// let i = 0
		this.x = 874
		this.y = 695

		this.preX = 346
		this.preY = 422

		const shape_0 = this.make.graphics()
		shape_0.fillRect(-20, 750, 300, 18)
		const mask_0 = shape_0.createGeometryMask()
		this.rec_green_0.setMask(mask_0)
		shape_0.x += (300 * this.troopsImage[0][1]) / 100

		const shape_1 = this.make.graphics()
		shape_1.fillRect(-20, 783, 300, 18)
		const mask_1 = shape_1.createGeometryMask()
		this.rec_green_1.setMask(mask_1)
		shape_1.x += (300 * this.troopsImage[0][2]) / 100

		const shape_2 = this.make.graphics()
		shape_2.fillRect(-20, 815, 300, 18)
		const mask_2 = shape_2.createGeometryMask()
		this.rec_green_2.setMask(mask_2)
		shape_2.x += (300 * this.troopsImage[0][3]) / 100

		const shape_3 = this.make.graphics()
		shape_3.fillRect(-20, 844, 300, 18)
		const mask_3 = shape_3.createGeometryMask()
		this.rec_green_3.setMask(mask_3)
		shape_3.x += (300 * this.troopsImage[0][4]) / 100



		this.previewImage = this.add.image(this.preX, this.preY, 'privew-frame');
		this.preview_troops.add(this.previewImage)

		for (let i = 0; i < this.troopsImage.length; i++) {
			if (this.counter <= 5) {

				this.container = this.add.container(0, 0);
				this.troops_list.add(this.container);
				this.tankBackground = this.add.image(this.x, this.y, 'commontankbg').setInteractive()
				this.container.add(this.tankBackground)
				this.container.add(this.add.image(this.x, this.y, this.troopsImage[i][0]))

				this.tankBackground.on('pointerdown', function () {
					this.previewTank.setTexture(this.troopsImage[i][0])

					this.oSoundManager.playSound(this.oSoundManager.clickSound, false)
					this.oSoundManager.setClickSoundVolume(0.05)

					const shape_0 = this.make.graphics()
					shape_0.fillRect(-20, 750, 300, 18)
					const mask_0 = shape_0.createGeometryMask()
					this.rec_green_0.setMask(mask_0)
					shape_0.x += (300 * this.troopsImage[i][1]) / 100

					const shape_1 = this.make.graphics()
					shape_1.fillRect(-20, 783, 300, 18)
					const mask_1 = shape_1.createGeometryMask()
					this.rec_green_1.setMask(mask_1)
					shape_1.x += (300 * this.troopsImage[i][2]) / 100

					const shape_2 = this.make.graphics()
					shape_2.fillRect(-20, 815, 300, 18)
					const mask_2 = shape_2.createGeometryMask()
					this.rec_green_2.setMask(mask_2)
					shape_2.x += (300 * this.troopsImage[i][3]) / 100

					const shape_3 = this.make.graphics()
					shape_3.fillRect(-20, 844, 300, 18)
					const mask_3 = shape_3.createGeometryMask()
					this.rec_green_3.setMask(mask_3)
					shape_3.x += (300 * this.troopsImage[i][4]) / 100


				}, this)

				this.x += 202
				this.counter++
			}
			else {
				this.x = 874
				this.y += 202
				this.counter = 1
			}
		}

		let i = 0
		if (i < 3) {
			this.select_btn.setInteractive().on('pointerdown', function () {
				this.oSoundManager.playSound(this.oSoundManager.clickSound, false)
				this.oSoundManager.setClickSoundVolume(0.05)
				if (i < 3) {
					this.tmpPlus = eval('this.plus_img_' + i)
					this.tmpPlus.setTexture(this.previewTank.texture)
					sessionStorage.setItem('selected_image_' + i, this.previewTank.texture.key)
					i++
				}
				if (i == 3) {
					this.select_btn.setAlpha(0.7)
				}
			}, this)
		}

		this.back_to_home_btn.setInteractive().on('pointerdown', function () {
			this.scene.start('ScenePlay');
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false)
			this.oSoundManager.setClickSoundVolume(0.05)
		}, this)

		this.select_team_btn.setInteractive().on('pointerdown', function () {
			this.scene.start('GamePlay');
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false)
			this.oSoundManager.setClickSoundVolume(0.05)
		}, this)

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
