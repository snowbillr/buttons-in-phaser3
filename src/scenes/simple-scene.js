export class SimpleScene extends Phaser.Scene {
  create() {
    const helloButton = this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    helloButton.setInteractive();

    helloButton.on('pointerover', () => console.log('pointerover'));
    helloButton.on('pointerdown', () => console.log('pointerdown'));
    helloButton.on('pointerup', () => console.log('pointerup'));
    helloButton.on('pointerout', () => console.log('pointerout'));
  }
}