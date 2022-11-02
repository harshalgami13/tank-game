
// You can write more code here

/* START OF COMPILED CODE */

class BackgroundSelect extends Phaser.Scene {

	constructor() {
		super("BackgroundSelect");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// regionbackground
		this.add.image(960, 540, "regionbackground");

		// next_btn
		this.add.image(1808, 30, "next-btn");

		// back_btn
		this.add.image(97, 30, "back-btn");

		// slidenextbtn
		const slidenextbtn = this.add.image(1173, 882, "slidenextbtn");

		// slideprevbtn
		const slideprevbtn = this.add.image(748, 882, "slideprevbtn");

		// text_1
		const text_1 = this.add.text(802, 986, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Entry Fees:";
		text_1.setStyle({ "fontFamily": "Normandia", "fontSize": "40px" });

		// text_2
		const text_2 = this.add.text(1114, 986, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "80 Meta Tokens";
		text_2.setStyle({ "color": "#f5ff1dff", "fontFamily": "Normandia", "fontSize": "40px" });

		// select_btn
		const select_btn = this.add.image(960, 882, "select-btn");

		this.slidenextbtn = slidenextbtn;
		this.slideprevbtn = slideprevbtn;
		this.select_btn = select_btn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	slidenextbtn;
	/** @type {Phaser.GameObjects.Image} */
	slideprevbtn;
	/** @type {Phaser.GameObjects.Image} */
	select_btn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.backgroundImage = ['Desert', 'Grassland', 'Snow']
		this.imageTitle = [
			'AL - AIN', 'ASWD', 'JUNINHOS FARM'
		]
		this.imageContent = [
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			'It is a long established fact that a reader will be distracted by the readable',
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
		]

		this.currentSlidePosition = 0

		this.currentSlideImage = this.add.sprite(960, 513, this.backgroundImage[this.currentSlidePosition]);
		this.currentSlideImage.scaleX = 0.67;
		this.currentSlideImage.scaleY = 0.67;

		this.currentImageTitle = this.add.text(583, 650, "", {});
		this.currentImageTitle.text = this.imageTitle[this.currentSlidePosition];
		this.currentImageTitle.setStyle({ "align": "center", "fontFamily": "Normandia", "fontSize": "32px" });

		this.currentImageContent = this.add.text(583, 683, "", {});
		this.currentImageContent.text = this.imageContent[this.currentSlidePosition];
		this.currentImageContent.setStyle({ "fontFamily": "GothamMedium", "fontSize": "22px" });
		this.currentImageContent.setWordWrapWidth(500);

		if (this.currentSlidePosition == 0) {
			this.slideprevbtn.setAlpha(0.5)
		}

		this.slidenextbtn.setInteractive().on('pointerdown', function () {
			if (this.currentSlidePosition < 2) {
				this.currentSlidePosition++
				this.currentSlideImage.setTexture(this.backgroundImage[this.currentSlidePosition]);
				this.currentImageTitle.text = this.imageTitle[this.currentSlidePosition];
				this.currentImageContent.text = this.imageContent[this.currentSlidePosition];
				this.slideprevbtn.setAlpha(1)
			}
			if (this.currentSlidePosition == 2) {
				this.slidenextbtn.setAlpha(0.5)
			}
		}, this)

		this.slideprevbtn.setInteractive().on('pointerdown', function () {
			if (this.currentSlidePosition > 0) {
				this.currentSlidePosition--
				this.currentSlideImage.setTexture(this.backgroundImage[this.currentSlidePosition]);
				this.currentImageTitle.text = this.imageTitle[this.currentSlidePosition];
				this.currentImageContent.text = this.imageContent[this.currentSlidePosition];
				this.slidenextbtn.setAlpha(1)
			}
			if (this.currentSlidePosition == 0) {
				this.slideprevbtn.setAlpha(0.5)
			}
		}, this)

		this.add.image(960, 513, "battleframeimg");

		this.select_btn.setInteractive().on('pointerdown',function (){
			sessionStorage.setItem("BackgroundImage", this.currentSlideImage.texture.key)
			this.scene.start('troopsSelect')
		},this)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
