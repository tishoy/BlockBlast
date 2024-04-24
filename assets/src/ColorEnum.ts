export class ColorEnum {
    static auto = 0;
    static RED = ColorEnum.auto++;
    static ORANGE = ColorEnum.auto++;
    static YELLOW = ColorEnum.auto++;
    static GREEN = ColorEnum.auto++;
    static CYAN = ColorEnum.auto++;
    static BLUE = ColorEnum.auto++;
    static PURPLE = ColorEnum.auto++;
    static COLOR_RES = [
        "grid" + this.RED,
        "grid" + this.ORANGE,
        "grid" + this.YELLOW,
        "grid" + this.GREEN,
        "grid" + this.CYAN,
        "grid" + this.BLUE,
        "grid" + this.PURPLE,
    ]
}