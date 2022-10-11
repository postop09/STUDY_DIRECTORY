{
    type Direction = "up" | "down" | "right" | "left" ;
    const move = (direction: Direction) => {
        let x = 0;
        let y = 0;

        switch (direction) {
            case "up" :
                y += 1;
                return console.log(`(${x}, ${y})`);
            case "down" :
                y -= 1;
                return console.log(`(${x}, ${y})`);
            case "right" :
                x += 1;
                return console.log(`(${x}, ${y})`);
            case "left" :
                x -= 1;
                return console.log(`(${x}, ${y})`);
            default :
                throw new Error("Unknown direction type.")
        }
    }
    move("up");

    // Solve
    const POSITION = {
        x: 0,
        y: 0,
    }
    const move2 = (direction: Direction) => {
        switch (direction) {
            case "up" :
                POSITION.y += 1;
                break;
            case "down" :
                POSITION.y -= 1;
                break;
            case "right" :
                POSITION.x += 1;
                break;
            case "left" :
                POSITION.x -= 1;
                break;
            default :
                throw new Error(`Unknown direction type: ${direction}`);
        }
    }
    console.log(POSITION);
    move2("up");
    console.log(POSITION);
    move2("down");
    console.log(POSITION);
    move2("left");
    console.log(POSITION);
    move2("right");
    console.log(POSITION);
}