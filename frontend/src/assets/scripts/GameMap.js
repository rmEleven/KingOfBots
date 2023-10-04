import { GameObject } from "./GameObject";


export class GameMap extends GameObject {
    constructor(ctx, parent) {
        super();  // 父类构造函数

        this.ctx = ctx;  // 画布
        this.parent = parent;  // 画布父元素
        this.L = 0;  // 单位距离
    }

    start() {
        ;
    }

    update() {
        this.render();
    }

    render() {
        ;
    }
}