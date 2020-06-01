const { refObject, world } = require("@tabletop-playground/api");

// this is only for my reference
//const order = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11];

const reverseBoardSnapPoints = [
  new Vector(21.108, -12.122, 89.302),
  new Vector(10.196, -18.422, 89.302),
  new Vector(-0.716, -24.722, 89.302),
  new Vector(-11.628, -18.422, 89.302),
  new Vector(-22.542, -12.122, 89.302),
  new Vector(-22.539, 0.478, 89.302),
  new Vector(-22.54, 13.078, 89.302),
  new Vector(-11.628, 19.378, 89.302),
  new Vector(-0.716, 25.678, 89.302),
  new Vector(10.196, 19.378, 89.302),
  new Vector(21.108, 13.078, 89.302),
  new Vector(21.108, 0.478, 89.302),
  new Vector(10.196, -5.822, 89.302),
  new Vector(-0.716, -12.122, 89.302),
  new Vector(-11.628, -5.822, 89.302),
  new Vector(-11.627, 6.779, 89.302),
  new Vector(-0.716, 13.078, 89.302),
  new Vector(10.196, 6.778, 89.302),
  new Vector(-0.716, 0.478, 89.302),
];

// const pos = sandTile.worldPositionToLocal();
// console.log('Position?', sandTile.filter(x => x.getCardDetails(0).templateId !== 'AD5C285748B47A00B77CF9A43EEA6D3D'));

// reverseBoardSnapPoints.map((point) => {
//   let card = refObject.takeCards(1, true);
//   card.setPosition(point, 1);
//   card.toggleLock();
// });

// refObject.setPosition(reverseBoardSnapPoints[18], 1);
// refObject.toggleLock();
