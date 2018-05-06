export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('button', 'assets/button.png');
    this.load.image('button-over', 'assets/button-over.png');
    this.load.image('button-down', 'assets/button-down.png');
  }

  create() {
    // const helloButton = this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    /*
    const helloButton = this.add.sprite(200, 200, 'button');
    helloButton.setInteractive();

    helloButton.on('pointerover', () => helloButton.setTexture('button-over'));
    helloButton.on('pointerdown', () => helloButton.setTexture('button-down'));
    helloButton.on('pointerup', () => helloButton.setTexture('button-over'));
    helloButton.on('pointerout', () => helloButton.setTexture('button'));
    */
    let clickCount = 0;
    this.clickCountText = this.add.text(100, 200, '');

    this.clickButton = this.add.text(100, 100, 'Click me!', { fill: '#0f0' })
      .setInteractive()
      .on('pointerover', () => this.enterButtonHoverState() )
      .on('pointerout', () => this.exitButtonHoverState() )
      .on('pointerdown', () => this.enterButtonActiveState() )
      .on('pointerup', () => {
        this.updateClickCountText(++clickCount);
        this.enterButtonHoverState();
    });

    this.updateClickCountText(clickCount);
  }

  updateClickCountText(clickCount) {
    this.clickCountText.setText(`Button has been clicked ${clickCount} times.`);
  }

  enterButtonHoverState() {
    this.clickButton.setStyle({ fill: '#ff0 '});
  }

  exitButtonHoverState() {
    this.clickButton.setStyle({ fill: '#0f0 '});
  }

  enterButtonActiveState() {
    this.clickButton.setStyle({ fill: '#0ff' });
  }
}