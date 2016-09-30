import Pixi from './Pixi'

export default class PixiExtends extends Pixi {

  constructor(props, settings, imgs) {
    super(props, settings, imgs);

    this.settings = {
      renderer: {
        bg: '0x99CCFF',
        border: '1px solid #008D9F'
      }
    };

    this.imgs = [
      '/admin/imgs/jumbo.png'
    ];
  }

  setSprite(i) {
    switch (i) {
      case 0:
        this.props.sp[i].position.set(156, 106);
        this.props.sp[i].scale.set(0.5, 0.5);
        break;

      default:
        // no op
    };
  }

  animate() {
    if (this.props.sp[0].x < 400) {
      this.props.sp[0].x += 1;
    } else {
      this.stop();
    };
  }
}
