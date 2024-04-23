import {
    Project,
    Sprite,
  } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
  
  import Stage from "./Stage/Stage.js";
  import Bolinha from "./Bolinha/Bolinha.js";
  import MinhaRaquete from "./MinhaRaquete/MinhaRaquete.js";
  import RaqueteDoOponente from "./RaqueteDoOponente/RaqueteDoOponente.js";
  
  const stage = new Stage({ costumeNumber: 1 });
  
  const sprites = {
    Bolinha: new Bolinha({
      x: 101.82337649086281,
      y: 118.39946902449628,
      direction: 135,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: true,
      layerOrder: 1,
    }),
    MinhaRaquete: new MinhaRaquete({
      x: -229,
      y: -10,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: true,
      layerOrder: 2,
    }),
    RaqueteDoOponente: new RaqueteDoOponente({
      x: 229,
      y: 75.88475039873485,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: true,
      layerOrder: 3,
    }),
  };
  
  const project = new Project(stage, sprites, {
    frameRate: 30, // Set to 60 to make your project run faster
  });
  export default project;
  