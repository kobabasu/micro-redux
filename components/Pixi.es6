import { utils } from 'pixi.js'

let element = null;

export default class Pixi {

  constructor() {
    utils.skipHello();
    
    this.props = {
      loader: null,
      renderer: null,
      stage: null,
      timer: null,
      sp: []
    };

    this.settings = {
      renderer: {
        width: 512,
        height: 512,
        antialias: false,
        transparent: false,
        resolution: 1,
        bg: null,
        border: null
      }
    };

    this.imgs = [];
  }

  init() {
    this.props.renderer = this.setRenderer();
    this.props.stage = new PIXI.Container();

    this.props.loader = new PIXI.loaders.Loader();
    this.props.loader
      .add(this.imgs)
      .load(this.facade.bind(this));
  }

  facade() {
    for (var i = 0; i < this.imgs.length; i++) {
      this.props.sp.push(
        this.generateSprite(this.imgs[i])
      );
      this.setSprite(i);
      this.props.stage.addChild(this.props.sp[i]);
    };
    element.appendChild(this.props.renderer.view);

    this.loop();
  }

  loop() {
    const { renderer, stage, timer } = this.props;
    this.props.timer = requestAnimationFrame(
      this.loop.bind(this)
    );
    this.animate();
    renderer.render(stage);
  }

  stop() {
    cancelAnimationFrame(this.props.timer);
  }

  setRenderer() {
    const vars = this.settings.renderer;
    let renderer = new PIXI.autoDetectRenderer(
      vars.width,
      vars.height,
      {
        antialias: vars.antialias,
        transparent: vars.transparent,
        resolution: vars.resolution
      }
    );

    if (this.settings.renderer.bg) {
      const bg = this.settings.renderer.bg;
      renderer.backgroundColor = bg;
    };

    if (this.settings.renderer.border) {
      const border = this.settings.renderer.border;
      renderer.view.style.border = border;
    };

    return renderer;
  }

  generateSprite(img) {
    const sp = new PIXI.Sprite(
      this.props.loader
        .resources[img]
        .texture
    );
    return sp;
  }

  setSprite(i) {}

  animate() {}

  resizeStage(w, h) {
    this.props.renderer.resize(w, h);
    this.props.renderer.render(this.props.stage);
  }

  static setElement(el) {
    element = el;
  }
}
