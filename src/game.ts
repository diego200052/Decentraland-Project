const scene = new Entity()
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scene.addComponentOrReplace(transform)
engine.addEntity(scene)

const groundFloorSciFi_02 = new Entity()
groundFloorSciFi_02.setParent(scene)
const gltfShape = new GLTFShape('models/GroundFloorSciFi_02/GroundFloorSciFi_02.glb')
groundFloorSciFi_02.addComponentOrReplace(gltfShape)
const transform_2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
groundFloorSciFi_02.addComponentOrReplace(transform_2)
engine.addEntity(groundFloorSciFi_02)

const groundFloorSciFi_02_2 = new Entity()
groundFloorSciFi_02_2.setParent(scene)
groundFloorSciFi_02_2.addComponentOrReplace(gltfShape)
const transform_3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
groundFloorSciFi_02_2.addComponentOrReplace(transform_3)
engine.addEntity(groundFloorSciFi_02_2)

const groundFloorSciFi_02_3 = new Entity()
groundFloorSciFi_02_3.setParent(scene)
groundFloorSciFi_02_3.addComponentOrReplace(gltfShape)
const transform_4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
groundFloorSciFi_02_3.addComponentOrReplace(transform_4)
engine.addEntity(groundFloorSciFi_02_3)

const groundFloorSciFi_02_4 = new Entity()
groundFloorSciFi_02_4.setParent(scene)
groundFloorSciFi_02_4.addComponentOrReplace(gltfShape)
const transform_5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
groundFloorSciFi_02_4.addComponentOrReplace(transform_5)
engine.addEntity(groundFloorSciFi_02_4)

const floorHexa_01 = new Entity()
floorHexa_01.setParent(scene)
const gltfShape_2 = new GLTFShape('models/FloorHexa_01/FloorHexa_01.glb')
floorHexa_01.addComponentOrReplace(gltfShape_2)
const transform_6 = new Transform({
  position: new Vector3(16.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01.addComponentOrReplace(transform_6)
engine.addEntity(floorHexa_01)

const floorHexa_01_2 = new Entity()
floorHexa_01_2.setParent(scene)
floorHexa_01_2.addComponentOrReplace(gltfShape_2)
const transform_7 = new Transform({
  position: new Vector3(15.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_2.addComponentOrReplace(transform_7)
engine.addEntity(floorHexa_01_2)

const floorHexa_01_3 = new Entity()
floorHexa_01_3.setParent(scene)
floorHexa_01_3.addComponentOrReplace(gltfShape_2)
const transform_8 = new Transform({
  position: new Vector3(16.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_3.addComponentOrReplace(transform_8)
engine.addEntity(floorHexa_01_3)

const floorHexa_01_4 = new Entity()
floorHexa_01_4.setParent(scene)
floorHexa_01_4.addComponentOrReplace(gltfShape_2)
const transform_9 = new Transform({
  position: new Vector3(15.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_4.addComponentOrReplace(transform_9)
engine.addEntity(floorHexa_01_4)

const floorHexa_01_5 = new Entity()
floorHexa_01_5.setParent(scene)
floorHexa_01_5.addComponentOrReplace(gltfShape_2)
const transform_10 = new Transform({
  position: new Vector3(14.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_5.addComponentOrReplace(transform_10)
engine.addEntity(floorHexa_01_5)

const floorHexa_01_6 = new Entity()
floorHexa_01_6.setParent(scene)
floorHexa_01_6.addComponentOrReplace(gltfShape_2)
const transform_11 = new Transform({
  position: new Vector3(16.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_6.addComponentOrReplace(transform_11)
engine.addEntity(floorHexa_01_6)

const floorHexa_01_7 = new Entity()
floorHexa_01_7.setParent(scene)
floorHexa_01_7.addComponentOrReplace(gltfShape_2)
const transform_12 = new Transform({
  position: new Vector3(15.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_7.addComponentOrReplace(transform_12)
engine.addEntity(floorHexa_01_7)

const floorHexa_01_8 = new Entity()
floorHexa_01_8.setParent(scene)
floorHexa_01_8.addComponentOrReplace(gltfShape_2)
const transform_13 = new Transform({
  position: new Vector3(14.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_8.addComponentOrReplace(transform_13)
engine.addEntity(floorHexa_01_8)

const crater_01 = new Entity()
crater_01.setParent(scene)
const gltfShape_3 = new GLTFShape('models/Crater_01/Crater_01.glb')
crater_01.addComponentOrReplace(gltfShape_3)
const transform_14 = new Transform({
  position: new Vector3(25, 1.5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crater_01.addComponentOrReplace(transform_14)
engine.addEntity(crater_01)

const dirt_02 = new Entity()
dirt_02.setParent(scene)
const gltfShape_4 = new GLTFShape('models/Dirt_02/Dirt_02.glb')
dirt_02.addComponentOrReplace(gltfShape_4)
const transform_15 = new Transform({
  position: new Vector3(23.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dirt_02.addComponentOrReplace(transform_15)
engine.addEntity(dirt_02)

const dirt_04 = new Entity()
dirt_04.setParent(scene)
const gltfShape_5 = new GLTFShape('models/Dirt_04/Dirt_04.glb')
dirt_04.addComponentOrReplace(gltfShape_5)
const transform_16 = new Transform({
  position: new Vector3(25.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1547005383792524, 2.1547005383792524, 2.1547005383792524)
})
dirt_04.addComponentOrReplace(transform_16)
engine.addEntity(dirt_04)

const dirt_04_2 = new Entity()
dirt_04_2.setParent(scene)
dirt_04_2.addComponentOrReplace(gltfShape_5)
const transform_17 = new Transform({
  position: new Vector3(25.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.88675134594813, 4.88675134594813, 3.88675134594813)
})
dirt_04_2.addComponentOrReplace(transform_17)
engine.addEntity(dirt_04_2)

const crater_03 = new Entity()
crater_03.setParent(scene)
const gltfShape_6 = new GLTFShape('models/Crater_03/Crater_03.glb')
crater_03.addComponentOrReplace(gltfShape_6)
const transform_18 = new Transform({
  position: new Vector3(25, 1.5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crater_03.addComponentOrReplace(transform_18)
engine.addEntity(crater_03)

const plantSF_04 = new Entity()
plantSF_04.setParent(scene)
const gltfShape_7 = new GLTFShape('models/PlantSF_04/PlantSF_04.glb')
plantSF_04.addComponentOrReplace(gltfShape_7)
const transform_19 = new Transform({
  position: new Vector3(28.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8660254037844384, 1.8660254037844384, 1.8660254037844384)
})
plantSF_04.addComponentOrReplace(transform_19)
engine.addEntity(plantSF_04)

const plantSF_03 = new Entity()
plantSF_03.setParent(scene)
const gltfShape_8 = new GLTFShape('models/PlantSF_03/PlantSF_03.glb')
plantSF_03.addComponentOrReplace(gltfShape_8)
const transform_20 = new Transform({
  position: new Vector3(25, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantSF_03.addComponentOrReplace(transform_20)
engine.addEntity(plantSF_03)

const plantSF_11 = new Entity()
plantSF_11.setParent(scene)
const gltfShape_9 = new GLTFShape('models/PlantSF_11/PlantSF_11.glb')
plantSF_11.addComponentOrReplace(gltfShape_9)
const transform_21 = new Transform({
  position: new Vector3(27, 1, 6),
  rotation: new Quaternion(-0.284706938577779, -0.0566317311619209, -0.18668979824821852, 0.9385529955102758),
  scale: new Vector3(1, 1, 1)
})
plantSF_11.addComponentOrReplace(transform_21)
engine.addEntity(plantSF_11)

const tableSciFi_02 = new Entity()
tableSciFi_02.setParent(scene)
const gltfShape_10 = new GLTFShape('models/TableSciFi_02/TableSciFi_02.glb')
tableSciFi_02.addComponentOrReplace(gltfShape_10)
const transform_22 = new Transform({
  position: new Vector3(9.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableSciFi_02.addComponentOrReplace(transform_22)
engine.addEntity(tableSciFi_02)

const stone_03 = new Entity()
stone_03.setParent(scene)
const gltfShape_11 = new GLTFShape('models/Stone_03/Stone_03.glb')
stone_03.addComponentOrReplace(gltfShape_11)
const transform_23 = new Transform({
  position: new Vector3(3.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.330127018922193, 5.330127018922193, 5.330127018922193)
})
stone_03.addComponentOrReplace(transform_23)
engine.addEntity(stone_03)

const stone_02 = new Entity()
stone_02.setParent(scene)
const gltfShape_12 = new GLTFShape('models/Stone_02/Stone_02.glb')
stone_02.addComponentOrReplace(gltfShape_12)
const transform_24 = new Transform({
  position: new Vector3(4.5, 3.5, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-4.773502691896255, -4.773502691896255, -4.773502691896255)
})
stone_02.addComponentOrReplace(transform_24)
engine.addEntity(stone_02)

const stone_02_2 = new Entity()
stone_02_2.setParent(scene)
stone_02_2.addComponentOrReplace(gltfShape_12)
const transform_25 = new Transform({
  position: new Vector3(10.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.3094010767585034, 3.3094010767585034, 3.3094010767585034)
})
stone_02_2.addComponentOrReplace(transform_25)
engine.addEntity(stone_02_2)

const comet_04 = new Entity()
comet_04.setParent(scene)
const gltfShape_13 = new GLTFShape('models/Comet_04/Comet_04.glb')
comet_04.addComponentOrReplace(gltfShape_13)
const transform_26 = new Transform({
  position: new Vector3(8.5, 1.5, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
comet_04.addComponentOrReplace(transform_26)
engine.addEntity(comet_04)

const stone_03_2 = new Entity()
stone_03_2.setParent(scene)
stone_03_2.addComponentOrReplace(gltfShape_11)
const transform_27 = new Transform({
  position: new Vector3(14, 0, 28),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.886751345948129, 3.886751345948129, 3.886751345948129)
})
stone_03_2.addComponentOrReplace(transform_27)
engine.addEntity(stone_03_2)

const stone_03_3 = new Entity()
stone_03_3.setParent(scene)
stone_03_3.addComponentOrReplace(gltfShape_11)
const transform_28 = new Transform({
  position: new Vector3(3.5, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.752776749732568, 4.752776749732568, 8.752776749732568)
})
stone_03_3.addComponentOrReplace(transform_28)
engine.addEntity(stone_03_3)

const stone_03_4 = new Entity()
stone_03_4.setParent(scene)
stone_03_4.addComponentOrReplace(gltfShape_11)
const transform_29 = new Transform({
  position: new Vector3(3.5, 3, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.752776749732568, 3.7527767497325684, 6.752776749732568)
})
stone_03_4.addComponentOrReplace(transform_29)
engine.addEntity(stone_03_4)

const stone_02_3 = new Entity()
stone_02_3.setParent(scene)
stone_02_3.addComponentOrReplace(gltfShape_12)
const transform_30 = new Transform({
  position: new Vector3(7, 2, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.598076211353317, 3.598076211353317)
})
stone_02_3.addComponentOrReplace(transform_30)
engine.addEntity(stone_02_3)

const plantSF_08 = new Entity()
plantSF_08.setParent(scene)
const gltfShape_14 = new GLTFShape('models/PlantSF_08/PlantSF_08.glb')
plantSF_08.addComponentOrReplace(gltfShape_14)
const transform_31 = new Transform({
  position: new Vector3(12, 0, 27),
  rotation: new Quaternion(0, 0.9569403357322089, 0, 0.2902846772544626),
  scale: new Vector3(1, 1, 1)
})
plantSF_08.addComponentOrReplace(transform_31)
engine.addEntity(plantSF_08)

const stone_05 = new Entity()
stone_05.setParent(scene)
const gltfShape_15 = new GLTFShape('models/Stone_05/Stone_05.glb')
stone_05.addComponentOrReplace(gltfShape_15)
const transform_32 = new Transform({
  position: new Vector3(13.5, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.288675134594813, 1.288675134594813, 4.788675134594813)
})
stone_05.addComponentOrReplace(transform_32)
engine.addEntity(stone_05)

const stone_03_5 = new Entity()
stone_03_5.setParent(scene)
stone_03_5.addComponentOrReplace(gltfShape_11)
const transform_33 = new Transform({
  position: new Vector3(16, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.9953584353592984, 2.9953584353592984, -6.229325326260021)
})
stone_03_5.addComponentOrReplace(transform_33)
engine.addEntity(stone_03_5)

const stone_03_6 = new Entity()
stone_03_6.setParent(scene)
stone_03_6.addComponentOrReplace(gltfShape_11)
const transform_34 = new Transform({
  position: new Vector3(14.5, 1.5, 28),
  rotation: new Quaternion(0, 0.9569403357322088, 0, 0.2902846772544623),
  scale: new Vector3(2.9953584353592984, 3.9953584353592984, -6.229325326260021)
})
stone_03_6.addComponentOrReplace(transform_34)
engine.addEntity(stone_03_6)

const stone_03_7 = new Entity()
stone_03_7.setParent(scene)
stone_03_7.addComponentOrReplace(gltfShape_11)
const transform_35 = new Transform({
  position: new Vector3(11.5, 2.5, 28.5),
  rotation: new Quaternion(0, 0.7730104533627372, 0, 0.6343932841636456),
  scale: new Vector3(2.9953584353592984, 3.4953584353592984, -6.229325326260021)
})
stone_03_7.addComponentOrReplace(transform_35)
engine.addEntity(stone_03_7)

const comet_02 = new Entity()
comet_02.setParent(scene)
const gltfShape_16 = new GLTFShape('models/Comet_02/Comet_02.glb')
comet_02.addComponentOrReplace(gltfShape_16)
const transform_36 = new Transform({
  position: new Vector3(5.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
comet_02.addComponentOrReplace(transform_36)
engine.addEntity(comet_02)

const stone_03_8 = new Entity()
stone_03_8.setParent(scene)
stone_03_8.addComponentOrReplace(gltfShape_11)
const transform_37 = new Transform({
  position: new Vector3(12, 4.5, 27.5),
  rotation: new Quaternion(0.09754516100806415, -0.009607359798384778, -0.09754516100806417, 0.9903926402016153),
  scale: new Vector3(6.5, 1, 6)
})
stone_03_8.addComponentOrReplace(transform_37)
engine.addEntity(stone_03_8)

const stone_03_9 = new Entity()
stone_03_9.setParent(scene)
stone_03_9.addComponentOrReplace(gltfShape_11)
const transform_38 = new Transform({
  position: new Vector3(6.5, 4.5, 27),
  rotation: new Quaternion(0, 0, 0.19509032201612825, 0.9807852804032307),
  scale: new Vector3(7.5, 1, 6.5)
})
stone_03_9.addComponentOrReplace(transform_38)
engine.addEntity(stone_03_9)

const airVent_Straight_Long_01 = new Entity()
airVent_Straight_Long_01.setParent(scene)
const gltfShape_17 = new GLTFShape('models/AirVent_Straight_Long_01/AirVent_Straight_Long_01.glb')
airVent_Straight_Long_01.addComponentOrReplace(gltfShape_17)
const transform_39 = new Transform({
  position: new Vector3(9.5, 0.5, 25),
  rotation: new Quaternion(-0.5466009335008788, 0.4485837931713181, -0.5466009335008788, 0.4485837931713181),
  scale: new Vector3(0.13397459621556118, 0.13397459621556118, -0.13397459621556118)
})
airVent_Straight_Long_01.addComponentOrReplace(transform_39)
engine.addEntity(airVent_Straight_Long_01)

const floorHexa_01_9 = new Entity()
floorHexa_01_9.setParent(scene)
floorHexa_01_9.addComponentOrReplace(gltfShape_2)
const transform_40 = new Transform({
  position: new Vector3(14.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_9.addComponentOrReplace(transform_40)
engine.addEntity(floorHexa_01_9)

const floorHexa_01_10 = new Entity()
floorHexa_01_10.setParent(scene)
floorHexa_01_10.addComponentOrReplace(gltfShape_2)
const transform_41 = new Transform({
  position: new Vector3(16.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_10.addComponentOrReplace(transform_41)
engine.addEntity(floorHexa_01_10)

const floorHexa_01_11 = new Entity()
floorHexa_01_11.setParent(scene)
floorHexa_01_11.addComponentOrReplace(gltfShape_2)
const transform_42 = new Transform({
  position: new Vector3(14.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_11.addComponentOrReplace(transform_42)
engine.addEntity(floorHexa_01_11)

const floorHexa_01_12 = new Entity()
floorHexa_01_12.setParent(scene)
floorHexa_01_12.addComponentOrReplace(gltfShape_2)
const transform_43 = new Transform({
  position: new Vector3(15.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_12.addComponentOrReplace(transform_43)
engine.addEntity(floorHexa_01_12)

const floorHexa_01_13 = new Entity()
floorHexa_01_13.setParent(scene)
floorHexa_01_13.addComponentOrReplace(gltfShape_2)
const transform_44 = new Transform({
  position: new Vector3(16.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_13.addComponentOrReplace(transform_44)
engine.addEntity(floorHexa_01_13)

const floorHexa_01_14 = new Entity()
floorHexa_01_14.setParent(scene)
floorHexa_01_14.addComponentOrReplace(gltfShape_2)
const transform_45 = new Transform({
  position: new Vector3(14.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_14.addComponentOrReplace(transform_45)
engine.addEntity(floorHexa_01_14)

const floorHexa_01_15 = new Entity()
floorHexa_01_15.setParent(scene)
floorHexa_01_15.addComponentOrReplace(gltfShape_2)
const transform_46 = new Transform({
  position: new Vector3(15.5, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_15.addComponentOrReplace(transform_46)
engine.addEntity(floorHexa_01_15)

const floorHexa_01_16 = new Entity()
floorHexa_01_16.setParent(scene)
floorHexa_01_16.addComponentOrReplace(gltfShape_2)
const transform_47 = new Transform({
  position: new Vector3(8.5, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_16.addComponentOrReplace(transform_47)
engine.addEntity(floorHexa_01_16)

const floorHexa_01_17 = new Entity()
floorHexa_01_17.setParent(scene)
floorHexa_01_17.addComponentOrReplace(gltfShape_2)
const transform_48 = new Transform({
  position: new Vector3(9.5, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_17.addComponentOrReplace(transform_48)
engine.addEntity(floorHexa_01_17)

const floorHexa_01_18 = new Entity()
floorHexa_01_18.setParent(scene)
floorHexa_01_18.addComponentOrReplace(gltfShape_2)
const transform_49 = new Transform({
  position: new Vector3(10.5, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_18.addComponentOrReplace(transform_49)
engine.addEntity(floorHexa_01_18)

const floorHexa_01_19 = new Entity()
floorHexa_01_19.setParent(scene)
floorHexa_01_19.addComponentOrReplace(gltfShape_2)
const transform_50 = new Transform({
  position: new Vector3(9.5, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_19.addComponentOrReplace(transform_50)
engine.addEntity(floorHexa_01_19)

const floorHexa_01_20 = new Entity()
floorHexa_01_20.setParent(scene)
floorHexa_01_20.addComponentOrReplace(gltfShape_2)
const transform_51 = new Transform({
  position: new Vector3(8.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_20.addComponentOrReplace(transform_51)
engine.addEntity(floorHexa_01_20)

const floorHexa_01_21 = new Entity()
floorHexa_01_21.setParent(scene)
floorHexa_01_21.addComponentOrReplace(gltfShape_2)
const transform_52 = new Transform({
  position: new Vector3(10.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_21.addComponentOrReplace(transform_52)
engine.addEntity(floorHexa_01_21)

const floorHexa_01_22 = new Entity()
floorHexa_01_22.setParent(scene)
floorHexa_01_22.addComponentOrReplace(gltfShape_2)
const transform_53 = new Transform({
  position: new Vector3(9.5, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_22.addComponentOrReplace(transform_53)
engine.addEntity(floorHexa_01_22)

const floorHexa_01_23 = new Entity()
floorHexa_01_23.setParent(scene)
floorHexa_01_23.addComponentOrReplace(gltfShape_2)
const transform_54 = new Transform({
  position: new Vector3(11.5, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_23.addComponentOrReplace(transform_54)
engine.addEntity(floorHexa_01_23)

const floorHexa_01_24 = new Entity()
floorHexa_01_24.setParent(scene)
floorHexa_01_24.addComponentOrReplace(gltfShape_2)
const transform_55 = new Transform({
  position: new Vector3(10.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_24.addComponentOrReplace(transform_55)
engine.addEntity(floorHexa_01_24)

const floorHexa_01_25 = new Entity()
floorHexa_01_25.setParent(scene)
floorHexa_01_25.addComponentOrReplace(gltfShape_2)
const transform_56 = new Transform({
  position: new Vector3(12.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_25.addComponentOrReplace(transform_56)
engine.addEntity(floorHexa_01_25)

const floorHexa_01_26 = new Entity()
floorHexa_01_26.setParent(scene)
floorHexa_01_26.addComponentOrReplace(gltfShape_2)
const transform_57 = new Transform({
  position: new Vector3(11.5, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_26.addComponentOrReplace(transform_57)
engine.addEntity(floorHexa_01_26)

const floorHexa_01_27 = new Entity()
floorHexa_01_27.setParent(scene)
floorHexa_01_27.addComponentOrReplace(gltfShape_2)
const transform_58 = new Transform({
  position: new Vector3(13.5, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_27.addComponentOrReplace(transform_58)
engine.addEntity(floorHexa_01_27)

const floorHexa_01_28 = new Entity()
floorHexa_01_28.setParent(scene)
floorHexa_01_28.addComponentOrReplace(gltfShape_2)
const transform_59 = new Transform({
  position: new Vector3(14.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_28.addComponentOrReplace(transform_59)
engine.addEntity(floorHexa_01_28)

const floorHexa_01_29 = new Entity()
floorHexa_01_29.setParent(scene)
floorHexa_01_29.addComponentOrReplace(gltfShape_2)
const transform_60 = new Transform({
  position: new Vector3(16.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_29.addComponentOrReplace(transform_60)
engine.addEntity(floorHexa_01_29)

//TURRET WITH SOUND
const turretBase_01 = new Entity()
turretBase_01.setParent(scene)
const gltfShape_18 = new GLTFShape('models/TurretBase_01/TurretBase_01.glb')
turretBase_01.addComponentOrReplace(gltfShape_18)
const transform_61 = new Transform({
  position: new Vector3(27, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7320508075688776, 2.7320508075688776, 2.7320508075688776)
})
turretBase_01.addComponentOrReplace(transform_61)

// Create AudioClip object, holding audio file
const clip = new AudioClip('sounds/MachineGun.mp3')
// Create AudioSource component, referencing `clip`
const source = new AudioSource(clip)
// Add AudioSource component to entity
turretBase_01.addComponent(source)

turretBase_01.addComponent(
  new OnClick(() => {
    //Play sound when players clicks on it.
    source.playOnce()
  })
)

engine.addEntity(turretBase_01)

const airVent_Straight_Long_01_2 = new Entity()
airVent_Straight_Long_01_2.setParent(scene)
airVent_Straight_Long_01_2.addComponentOrReplace(gltfShape_17)
const transform_62 = new Transform({
  position: new Vector3(26.5, 1, 14.5),
  rotation: new Quaternion(0, 0, -0.7071067811865474, 0.7071067811865475),
  scale: new Vector3(1, 1, 1)
})
airVent_Straight_Long_01_2.addComponentOrReplace(transform_62)
engine.addEntity(airVent_Straight_Long_01_2)

const airVent_Curve_01 = new Entity()
airVent_Curve_01.setParent(scene)
const gltfShape_19 = new GLTFShape('models/AirVent_Curve_01/AirVent_Curve_01.glb')
airVent_Curve_01.addComponentOrReplace(gltfShape_19)
const transform_63 = new Transform({
  position: new Vector3(26.5, 5, 14.5),
  rotation: new Quaternion(0, 0, -0.7071067811865476, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
airVent_Curve_01.addComponentOrReplace(transform_63)

//Sounf for the airVent

// Create AudioClip object, holding audio file
const clip2 = new AudioClip('sounds/fireloop.mp3')
// Create AudioSource component, referencing `clip`
const source2 = new AudioSource(clip2)
// Add AudioSource component to entity
airVent_Curve_01.addComponent(source2)

airVent_Curve_01.addComponent(
  new OnClick(() => {
    //Play sound when players clicks on it.
    source2.playing = true
    source2.loop = true
  })
)

engine.addEntity(airVent_Curve_01)

const dock_Ramp_01 = new Entity()
dock_Ramp_01.setParent(scene)
const gltfShape_20 = new GLTFShape('models/Dock_Ramp_01/Dock_Ramp_01.glb')
dock_Ramp_01.addComponentOrReplace(gltfShape_20)
const transform_64 = new Transform({
  position: new Vector3(17, 0, 21.5),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
dock_Ramp_01.addComponentOrReplace(transform_64)
engine.addEntity(dock_Ramp_01)

const hallway_Module_StraightHalf_01 = new Entity()
hallway_Module_StraightHalf_01.setParent(scene)
const gltfShape_21 = new GLTFShape('models/Hallway_Module_StraightHalf_01/Hallway_Module_StraightHalf_01.glb')
hallway_Module_StraightHalf_01.addComponentOrReplace(gltfShape_21)
const transform_65 = new Transform({
  position: new Vector3(28.5, 1, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hallway_Module_StraightHalf_01.addComponentOrReplace(transform_65)
engine.addEntity(hallway_Module_StraightHalf_01)

const dock_Straight_01 = new Entity()
dock_Straight_01.setParent(scene)
const gltfShape_22 = new GLTFShape('models/Dock_Straight_01/Dock_Straight_01.glb')
dock_Straight_01.addComponentOrReplace(gltfShape_22)
const transform_66 = new Transform({
  position: new Vector3(23, 1, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01.addComponentOrReplace(transform_66)
engine.addEntity(dock_Straight_01)

const dock_Straight_01_2 = new Entity()
dock_Straight_01_2.setParent(scene)
dock_Straight_01_2.addComponentOrReplace(gltfShape_22)
const transform_67 = new Transform({
  position: new Vector3(26, 1, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_2.addComponentOrReplace(transform_67)
engine.addEntity(dock_Straight_01_2)

const dock_Straight_01_3 = new Entity()
dock_Straight_01_3.setParent(scene)
dock_Straight_01_3.addComponentOrReplace(gltfShape_22)
const transform_68 = new Transform({
  position: new Vector3(29, 1, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_3.addComponentOrReplace(transform_68)
engine.addEntity(dock_Straight_01_3)

const dock_Straight_01_4 = new Entity()
dock_Straight_01_4.setParent(scene)
dock_Straight_01_4.addComponentOrReplace(gltfShape_22)
const transform_69 = new Transform({
  position: new Vector3(32, 1, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_4.addComponentOrReplace(transform_69)
engine.addEntity(dock_Straight_01_4)

const dock_Straight_01_5 = new Entity()
dock_Straight_01_5.setParent(scene)
dock_Straight_01_5.addComponentOrReplace(gltfShape_22)
const transform_70 = new Transform({
  position: new Vector3(32, 1, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_5.addComponentOrReplace(transform_70)
engine.addEntity(dock_Straight_01_5)

const dock_Straight_01_6 = new Entity()
dock_Straight_01_6.setParent(scene)
dock_Straight_01_6.addComponentOrReplace(gltfShape_22)
const transform_71 = new Transform({
  position: new Vector3(29, 1, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_6.addComponentOrReplace(transform_71)
engine.addEntity(dock_Straight_01_6)

const dock_Straight_01_7 = new Entity()
dock_Straight_01_7.setParent(scene)
dock_Straight_01_7.addComponentOrReplace(gltfShape_22)
const transform_72 = new Transform({
  position: new Vector3(26, 1, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_7.addComponentOrReplace(transform_72)
engine.addEntity(dock_Straight_01_7)

const dock_Straight_01_8 = new Entity()
dock_Straight_01_8.setParent(scene)
dock_Straight_01_8.addComponentOrReplace(gltfShape_22)
const transform_73 = new Transform({
  position: new Vector3(23, 1, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_8.addComponentOrReplace(transform_73)
engine.addEntity(dock_Straight_01_8)

const dock_Straight_01_9 = new Entity()
dock_Straight_01_9.setParent(scene)
dock_Straight_01_9.addComponentOrReplace(gltfShape_22)
const transform_74 = new Transform({
  position: new Vector3(23, 1, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_9.addComponentOrReplace(transform_74)
engine.addEntity(dock_Straight_01_9)

const dock_Straight_01_10 = new Entity()
dock_Straight_01_10.setParent(scene)
dock_Straight_01_10.addComponentOrReplace(gltfShape_22)
const transform_75 = new Transform({
  position: new Vector3(26, 1, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_10.addComponentOrReplace(transform_75)
engine.addEntity(dock_Straight_01_10)

const dock_Straight_01_11 = new Entity()
dock_Straight_01_11.setParent(scene)
dock_Straight_01_11.addComponentOrReplace(gltfShape_22)
const transform_76 = new Transform({
  position: new Vector3(29, 1, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_11.addComponentOrReplace(transform_76)
engine.addEntity(dock_Straight_01_11)

const dock_Straight_01_12 = new Entity()
dock_Straight_01_12.setParent(scene)
dock_Straight_01_12.addComponentOrReplace(gltfShape_22)
const transform_77 = new Transform({
  position: new Vector3(32, 1, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_12.addComponentOrReplace(transform_77)
engine.addEntity(dock_Straight_01_12)

const dock_Straight_01_13 = new Entity()
dock_Straight_01_13.setParent(scene)
dock_Straight_01_13.addComponentOrReplace(gltfShape_22)
const transform_78 = new Transform({
  position: new Vector3(32, 1, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_13.addComponentOrReplace(transform_78)
engine.addEntity(dock_Straight_01_13)

const dock_Straight_01_14 = new Entity()
dock_Straight_01_14.setParent(scene)
dock_Straight_01_14.addComponentOrReplace(gltfShape_22)
const transform_79 = new Transform({
  position: new Vector3(29, 1, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_14.addComponentOrReplace(transform_79)
engine.addEntity(dock_Straight_01_14)

const dock_Straight_01_15 = new Entity()
dock_Straight_01_15.setParent(scene)
dock_Straight_01_15.addComponentOrReplace(gltfShape_22)
const transform_80 = new Transform({
  position: new Vector3(26, 1, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_15.addComponentOrReplace(transform_80)
engine.addEntity(dock_Straight_01_15)

const dock_Straight_01_16 = new Entity()
dock_Straight_01_16.setParent(scene)
dock_Straight_01_16.addComponentOrReplace(gltfShape_22)
const transform_81 = new Transform({
  position: new Vector3(23, 1, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dock_Straight_01_16.addComponentOrReplace(transform_81)
engine.addEntity(dock_Straight_01_16)

const hallway_Module_Door_01 = new Entity()
hallway_Module_Door_01.setParent(scene)
const gltfShape_23 = new GLTFShape('models/Hallway_Module_Door_01/Hallway_Module_Door_01.glb')
hallway_Module_Door_01.addComponentOrReplace(gltfShape_23)
const transform_82 = new Transform({
  position: new Vector3(28.5, 1, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hallway_Module_Door_01.addComponentOrReplace(transform_82)
engine.addEntity(hallway_Module_Door_01)

const turret_03 = new Entity()
turret_03.setParent(scene)
const gltfShape_24 = new GLTFShape('models/Turret_03/Turret_03.glb')
turret_03.addComponentOrReplace(gltfShape_24)
const transform_83 = new Transform({
  position: new Vector3(27.5, 1.5, 29.5),
  rotation: new Quaternion(0, 0.9999999999999998, 0, 5.551115123125783e-17),
  scale: new Vector3(1, 1, 1)
})
turret_03.addComponentOrReplace(transform_83)

// Create AudioClip object, holding audio file
const clip3 = new AudioClip('sounds/MachineGun.mp3')
// Create AudioSource component, referencing `clip`
const source3 = new AudioSource(clip3)
// Add AudioSource component to entity
turret_03.addComponent(source3)

turret_03.addComponent(
  new OnClick(() => {
    //Play sound when players clicks on it.
    source3.playOnce()
  })
)

engine.addEntity(turret_03)

const tube_01 = new Entity()
tube_01.setParent(scene)
const gltfShape_25 = new GLTFShape('models/Tube_01/Tube_01.glb')
tube_01.addComponentOrReplace(gltfShape_25)
const transform_84 = new Transform({
  position: new Vector3(27.5, 2, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tube_01.addComponentOrReplace(transform_84)
engine.addEntity(tube_01)

const turret_01 = new Entity()
turret_01.setParent(scene)
const gltfShape_26 = new GLTFShape('models/Turret_01/Turret_01.glb')
turret_01.addComponentOrReplace(gltfShape_26)
const transform_85 = new Transform({
  position: new Vector3(22.5, 1.5, 19),
  rotation: new Quaternion(0, 0.9569403357322089, 0, -0.2902846772544621),
  scale: new Vector3(1, 1, 1)
})
turret_01.addComponentOrReplace(transform_85)

// Create AudioClip object, holding audio file
const clip4 = new AudioClip('sounds/MachineGun.mp3')
// Create AudioSource component, referencing `clip`
const source4 = new AudioSource(clip4)
// Add AudioSource component to entity
turret_01.addComponent(source4)

turret_01.addComponent(
  new OnClick(() => {
    //Play sound when players clicks on it.
    source4.playOnce()
  })
)

engine.addEntity(turret_01)

const floorHexa_01_30 = new Entity()
floorHexa_01_30.setParent(scene)
floorHexa_01_30.addComponentOrReplace(gltfShape_2)
const transform_86 = new Transform({
  position: new Vector3(15.5, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_30.addComponentOrReplace(transform_86)
engine.addEntity(floorHexa_01_30)

const floorHexa_01_31 = new Entity()
floorHexa_01_31.setParent(scene)
floorHexa_01_31.addComponentOrReplace(gltfShape_2)
const transform_87 = new Transform({
  position: new Vector3(16.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_31.addComponentOrReplace(transform_87)
engine.addEntity(floorHexa_01_31)

const floorHexa_01_32 = new Entity()
floorHexa_01_32.setParent(scene)
floorHexa_01_32.addComponentOrReplace(gltfShape_2)
const transform_88 = new Transform({
  position: new Vector3(17.5, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_32.addComponentOrReplace(transform_88)
engine.addEntity(floorHexa_01_32)

const floorHexa_01_33 = new Entity()
floorHexa_01_33.setParent(scene)
floorHexa_01_33.addComponentOrReplace(gltfShape_2)
const transform_89 = new Transform({
  position: new Vector3(14.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_33.addComponentOrReplace(transform_89)
engine.addEntity(floorHexa_01_33)

const hallway_Module_Door_02 = new Entity()
hallway_Module_Door_02.setParent(scene)
const gltfShape_27 = new GLTFShape('models/Hallway_Module_Door_02/Hallway_Module_Door_02.glb')
hallway_Module_Door_02.addComponentOrReplace(gltfShape_27)
const transform_90 = new Transform({
  position: new Vector3(28.5, 1, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hallway_Module_Door_02.addComponentOrReplace(transform_90)
engine.addEntity(hallway_Module_Door_02)

const streetFence_01 = new Entity()
streetFence_01.setParent(scene)
const gltfShape_28 = new GLTFShape('models/StreetFence_01/StreetFence_01.glb')
streetFence_01.addComponentOrReplace(gltfShape_28)
const transform_91 = new Transform({
  position: new Vector3(31.5, 1, 19.5),
  rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
streetFence_01.addComponentOrReplace(transform_91)
engine.addEntity(streetFence_01)

const streetFence_01_2 = new Entity()
streetFence_01_2.setParent(scene)
streetFence_01_2.addComponentOrReplace(gltfShape_28)
const transform_92 = new Transform({
  position: new Vector3(31.5, 1, 21.5),
  rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
streetFence_01_2.addComponentOrReplace(transform_92)
engine.addEntity(streetFence_01_2)

const streetFence_01_3 = new Entity()
streetFence_01_3.setParent(scene)
streetFence_01_3.addComponentOrReplace(gltfShape_28)
const transform_93 = new Transform({
  position: new Vector3(31.5, 1, 23.5),
  rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
streetFence_01_3.addComponentOrReplace(transform_93)
engine.addEntity(streetFence_01_3)

const streetFence_01_4 = new Entity()
streetFence_01_4.setParent(scene)
streetFence_01_4.addComponentOrReplace(gltfShape_28)
const transform_94 = new Transform({
  position: new Vector3(31.5, 1, 25.5),
  rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
streetFence_01_4.addComponentOrReplace(transform_94)
engine.addEntity(streetFence_01_4)

const lightWall_01 = new Entity()
lightWall_01.setParent(scene)
const gltfShape_29 = new GLTFShape('models/LightWall_01/LightWall_01.glb')
lightWall_01.addComponentOrReplace(gltfShape_29)
const transform_95 = new Transform({
  position: new Vector3(26, 4, 27),
  rotation: new Quaternion(0.7071067811865479, 0, 0, -0.7071067811865471),
  scale: new Vector3(1, 1, 1)
})
lightWall_01.addComponentOrReplace(transform_95)
engine.addEntity(lightWall_01)

const lightWall_01_2 = new Entity()
lightWall_01_2.setParent(scene)
lightWall_01_2.addComponentOrReplace(gltfShape_29)
const transform_96 = new Transform({
  position: new Vector3(31, 4, 27),
  rotation: new Quaternion(0.7071067811865479, 0, 0, -0.7071067811865471),
  scale: new Vector3(1, 1, 1)
})
lightWall_01_2.addComponentOrReplace(transform_96)
engine.addEntity(lightWall_01_2)

const airVent_Cap_01 = new Entity()
airVent_Cap_01.setParent(scene)
const gltfShape_30 = new GLTFShape('models/AirVent_Cap_01/AirVent_Cap_01.glb')
airVent_Cap_01.addComponentOrReplace(gltfShape_30)
const transform_97 = new Transform({
  position: new Vector3(25.5, 2, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
airVent_Cap_01.addComponentOrReplace(transform_97)
engine.addEntity(airVent_Cap_01)

const tubePiece_02 = new Entity()
tubePiece_02.setParent(scene)
const gltfShape_31 = new GLTFShape('models/TubePiece_02/TubePiece_02.glb')
tubePiece_02.addComponentOrReplace(gltfShape_31)
const transform_98 = new Transform({
  position: new Vector3(24.5, 1, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tubePiece_02.addComponentOrReplace(transform_98)
engine.addEntity(tubePiece_02)

const light_03 = new Entity()
light_03.setParent(scene)
const gltfShape_32 = new GLTFShape('models/Light_03/Light_03.glb')
light_03.addComponentOrReplace(gltfShape_32)
const transform_99 = new Transform({
  position: new Vector3(20.5, 1.5, 22),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
light_03.addComponentOrReplace(transform_99)
engine.addEntity(light_03)

const roofVent_01 = new Entity()
roofVent_01.setParent(scene)
const gltfShape_33 = new GLTFShape('models/RoofVent_01/RoofVent_01.glb')
roofVent_01.addComponentOrReplace(gltfShape_33)
const transform_100 = new Transform({
  position: new Vector3(21, 1.5, 28),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofVent_01.addComponentOrReplace(transform_100)
engine.addEntity(roofVent_01)

const airVent_Curve_01_2 = new Entity()
airVent_Curve_01_2.setParent(scene)
airVent_Curve_01_2.addComponentOrReplace(gltfShape_19)
const transform_101 = new Transform({
  position: new Vector3(27.5, 5, 20.5),
  rotation: new Quaternion(-0.7071067811865477, 0.7071067811865477, -2.3432602026631502e-17, 5.657130561438503e-17),
  scale: new Vector3(1, 1, 1)
})
airVent_Curve_01_2.addComponentOrReplace(transform_101)
engine.addEntity(airVent_Curve_01_2)

const airVent_Straight_Long_01_3 = new Entity()
airVent_Straight_Long_01_3.setParent(scene)
airVent_Straight_Long_01_3.addComponentOrReplace(gltfShape_17)
const transform_102 = new Transform({
  position: new Vector3(27.5, 5, 20.5),
  rotation: new Quaternion(0, 0, 0.7071067811865476, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
airVent_Straight_Long_01_3.addComponentOrReplace(transform_102)
engine.addEntity(airVent_Straight_Long_01_3)

const airVent_Exhaust_01 = new Entity()
airVent_Exhaust_01.setParent(scene)
const gltfShape_34 = new GLTFShape('models/AirVent_Exhaust_01/AirVent_Exhaust_01.glb')
airVent_Exhaust_01.addComponentOrReplace(gltfShape_34)
const transform_103 = new Transform({
  position: new Vector3(27, 1, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
airVent_Exhaust_01.addComponentOrReplace(transform_103)
engine.addEntity(airVent_Exhaust_01)

const airVent_Exhaust_01_2 = new Entity()
airVent_Exhaust_01_2.setParent(scene)
airVent_Exhaust_01_2.addComponentOrReplace(gltfShape_34)
const transform_104 = new Transform({
  position: new Vector3(27, 1.5, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
airVent_Exhaust_01_2.addComponentOrReplace(transform_104)
engine.addEntity(airVent_Exhaust_01_2)

const airVent_Exhaust_01_3 = new Entity()
airVent_Exhaust_01_3.setParent(scene)
airVent_Exhaust_01_3.addComponentOrReplace(gltfShape_34)
const transform_105 = new Transform({
  position: new Vector3(27, 2, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
airVent_Exhaust_01_3.addComponentOrReplace(transform_105)
engine.addEntity(airVent_Exhaust_01_3)

const airVent_Exhaust_01_4 = new Entity()
airVent_Exhaust_01_4.setParent(scene)
airVent_Exhaust_01_4.addComponentOrReplace(gltfShape_34)
const transform_106 = new Transform({
  position: new Vector3(27, 2.5, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
airVent_Exhaust_01_4.addComponentOrReplace(transform_106)
engine.addEntity(airVent_Exhaust_01_4)

const airVent_Union_01 = new Entity()
airVent_Union_01.setParent(scene)
const gltfShape_35 = new GLTFShape('models/AirVent_Union_01/AirVent_Union_01.glb')
airVent_Union_01.addComponentOrReplace(gltfShape_35)
const transform_107 = new Transform({
  position: new Vector3(27.5, 4, 20),
  rotation: new Quaternion(0.7071067811865472, 0, 0, 0.7071067811865478),
  scale: new Vector3(1, 1, 1)
})
airVent_Union_01.addComponentOrReplace(transform_107)
engine.addEntity(airVent_Union_01)

const lightBlock_02 = new Entity()
lightBlock_02.setParent(scene)
const gltfShape_36 = new GLTFShape('models/LightBlock_02/LightBlock_02.glb')
lightBlock_02.addComponentOrReplace(gltfShape_36)
const transform_108 = new Transform({
  position: new Vector3(11, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightBlock_02.addComponentOrReplace(transform_108)
engine.addEntity(lightBlock_02)

const lightBlock_02_2 = new Entity()
lightBlock_02_2.setParent(scene)
lightBlock_02_2.addComponentOrReplace(gltfShape_36)
const transform_109 = new Transform({
  position: new Vector3(8, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightBlock_02_2.addComponentOrReplace(transform_109)
engine.addEntity(lightBlock_02_2)

const floorHexa_01_34 = new Entity()
floorHexa_01_34.setParent(scene)
floorHexa_01_34.addComponentOrReplace(gltfShape_2)
const transform_110 = new Transform({
  position: new Vector3(15.5, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_34.addComponentOrReplace(transform_110)
engine.addEntity(floorHexa_01_34)

const sensor_01 = new Entity()
sensor_01.setParent(scene)
const gltfShape_37 = new GLTFShape('models/Sensor_01/Sensor_01.glb')
sensor_01.addComponentOrReplace(gltfShape_37)
const transform_111 = new Transform({
  position: new Vector3(4, 0, 15),
  rotation: new Quaternion(0, 0.9238795325112866, 0, 0.3826834323650897),
  scale: new Vector3(2.1547005383792515, 2.1547005383792515, 2.1547005383792515)
})
sensor_01.addComponentOrReplace(transform_111)

export class SimpleMove implements ISystem {
  update() {
    let transform = sensor_01.getComponent(Transform)
    //Moves up
    let distance = Vector3.Up().scale(0.1)
    transform.translate(distance)
  }
}

sensor_01.addComponent(
  new OnClick(() => {
    //moves up
    engine.addSystem(new SimpleMove())
  })
)

engine.addEntity(sensor_01)