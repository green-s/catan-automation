const { refObject, Card } = require("@tabletop-playground/api");

const boardSnapPoints = [
  new Vector(21.108, -12.122, 89.121),
  new Vector(21.108, 0.478, 89.121),
  new Vector(21.108, 13.078, 89.121),
  new Vector(10.196, 19.378, 89.121),
  new Vector(-0.716, 25.678, 89.121),
  new Vector(-11.628, 19.378, 89.121),
  new Vector(-22.54, 13.078, 89.121),
  new Vector(-22.539, 0.478, 89.121),
  new Vector(-22.542, -12.122, 89.121),
  new Vector(-11.628, -18.422, 89.121),
  new Vector(-0.716, -24.722, 89.121),
  new Vector(10.196, -18.422, 89.121),
  new Vector(10.196, -5.822, 89.121),
  new Vector(10.196, 6.778, 89.121),
  new Vector(-0.716, 13.078, 89.121),
  new Vector(-11.627, 6.779, 89.121),
  new Vector(-11.628, -5.822, 89.121),
  new Vector(-0.716, -12.122, 89.121),
  new Vector(-0.716, 0.478, 89.121),
];

let card = Card;
refObject.shuffle();
boardSnapPoints.map((point, index) => {
  // let d = refObject.getCardDetails(index).templateId;
  // d.toString() === "AD5C285748B47A00B77CF9A43EEA6D3D"
  //   ? console.log(boardSnapPoints[index])
  //   : undefined;

  if (index <= 17) {
    card = refObject.takeCards(1);
    card.setPosition(point, 1);
    card.toggleLock();
    // console.log(index);
  }
});
refObject.setPosition(boardSnapPoints[18], 1);
refObject.toggleLock();
