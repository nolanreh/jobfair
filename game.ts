
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(2.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("53aa3052-ccd7-4a05-be3f-f840acbff99e/Concrete_Wall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
concreteWall.addComponentOrReplace(gltfShape2)

const concreteWall2 = new Entity('concreteWall2')
engine.addEntity(concreteWall2)
concreteWall2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(4.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall2.addComponentOrReplace(transform4)
concreteWall2.addComponentOrReplace(gltfShape2)

const concreteWall3 = new Entity('concreteWall3')
engine.addEntity(concreteWall3)
concreteWall3.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(6.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall3.addComponentOrReplace(transform5)
concreteWall3.addComponentOrReplace(gltfShape2)

const concreteWall5 = new Entity('concreteWall5')
engine.addEntity(concreteWall5)
concreteWall5.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall5.addComponentOrReplace(transform6)
concreteWall5.addComponentOrReplace(gltfShape2)

const concreteWall6 = new Entity('concreteWall6')
engine.addEntity(concreteWall6)
concreteWall6.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(10.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall6.addComponentOrReplace(transform7)
concreteWall6.addComponentOrReplace(gltfShape2)

const concreteWall7 = new Entity('concreteWall7')
engine.addEntity(concreteWall7)
concreteWall7.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(12, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall7.addComponentOrReplace(transform8)
concreteWall7.addComponentOrReplace(gltfShape2)

const concreteWall8 = new Entity('concreteWall8')
engine.addEntity(concreteWall8)
concreteWall8.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(14, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall8.addComponentOrReplace(transform9)
concreteWall8.addComponentOrReplace(gltfShape2)

const concreteWall9 = new Entity('concreteWall9')
engine.addEntity(concreteWall9)
concreteWall9.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(0.5, 0, 15),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
concreteWall9.addComponentOrReplace(transform10)
concreteWall9.addComponentOrReplace(gltfShape2)

const concreteWall10 = new Entity('concreteWall10')
engine.addEntity(concreteWall10)
concreteWall10.setParent(_scene)
concreteWall10.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(0.5, 0, 13),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
concreteWall10.addComponentOrReplace(transform11)

const concreteWall11 = new Entity('concreteWall11')
engine.addEntity(concreteWall11)
concreteWall11.setParent(_scene)
concreteWall11.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(0.5, 0, 11),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
concreteWall11.addComponentOrReplace(transform12)

const concreteWall12 = new Entity('concreteWall12')
engine.addEntity(concreteWall12)
concreteWall12.setParent(_scene)
concreteWall12.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(0.5, 0, 9),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
concreteWall12.addComponentOrReplace(transform13)

const concreteWall13 = new Entity('concreteWall13')
engine.addEntity(concreteWall13)
concreteWall13.setParent(_scene)
concreteWall13.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(0.5, 0, 7),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
concreteWall13.addComponentOrReplace(transform14)

const concreteWall14 = new Entity('concreteWall14')
engine.addEntity(concreteWall14)
concreteWall14.setParent(_scene)
concreteWall14.addComponentOrReplace(gltfShape2)
const transform15 = new Transform({
  position: new Vector3(0.5, 0, 5),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
concreteWall14.addComponentOrReplace(transform15)

const concreteWall15 = new Entity('concreteWall15')
engine.addEntity(concreteWall15)
concreteWall15.setParent(_scene)
concreteWall15.addComponentOrReplace(gltfShape2)
const transform16 = new Transform({
  position: new Vector3(12, 0, 5.5),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
concreteWall15.addComponentOrReplace(transform16)

const concreteWall16 = new Entity('concreteWall16')
engine.addEntity(concreteWall16)
concreteWall16.setParent(_scene)
concreteWall16.addComponentOrReplace(gltfShape2)
const transform17 = new Transform({
  position: new Vector3(16, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall16.addComponentOrReplace(transform17)

const roofBeige = new Entity('roofBeige')
engine.addEntity(roofBeige)
roofBeige.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(4.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige.addComponentOrReplace(transform18)
const gltfShape3 = new GLTFShape("9b026726-cba9-454d-bb4f-aece85632869/BeigeRoof.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
roofBeige.addComponentOrReplace(gltfShape3)

const roofBeige2 = new Entity('roofBeige2')
engine.addEntity(roofBeige2)
roofBeige2.setParent(_scene)
roofBeige2.addComponentOrReplace(gltfShape3)
const transform19 = new Transform({
  position: new Vector3(8.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige2.addComponentOrReplace(transform19)

const roofBeige3 = new Entity('roofBeige3')
engine.addEntity(roofBeige3)
roofBeige3.setParent(_scene)
roofBeige3.addComponentOrReplace(gltfShape3)
const transform20 = new Transform({
  position: new Vector3(12.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige3.addComponentOrReplace(transform20)

const roofBeige4 = new Entity('roofBeige4')
engine.addEntity(roofBeige4)
roofBeige4.setParent(_scene)
roofBeige4.addComponentOrReplace(gltfShape3)
const transform21 = new Transform({
  position: new Vector3(4.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige4.addComponentOrReplace(transform21)

const roofBeige5 = new Entity('roofBeige5')
engine.addEntity(roofBeige5)
roofBeige5.setParent(_scene)
roofBeige5.addComponentOrReplace(gltfShape3)
const transform22 = new Transform({
  position: new Vector3(4.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige5.addComponentOrReplace(transform22)

const roofBeige6 = new Entity('roofBeige6')
engine.addEntity(roofBeige6)
roofBeige6.setParent(_scene)
roofBeige6.addComponentOrReplace(gltfShape3)
const transform23 = new Transform({
  position: new Vector3(8.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige6.addComponentOrReplace(transform23)

const roofBeige7 = new Entity('roofBeige7')
engine.addEntity(roofBeige7)
roofBeige7.setParent(_scene)
roofBeige7.addComponentOrReplace(gltfShape3)
const transform24 = new Transform({
  position: new Vector3(12.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige7.addComponentOrReplace(transform24)

const roofBeige8 = new Entity('roofBeige8')
engine.addEntity(roofBeige8)
roofBeige8.setParent(_scene)
roofBeige8.addComponentOrReplace(gltfShape3)
const transform25 = new Transform({
  position: new Vector3(8.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige8.addComponentOrReplace(transform25)

const roofBeige9 = new Entity('roofBeige9')
engine.addEntity(roofBeige9)
roofBeige9.setParent(_scene)
roofBeige9.addComponentOrReplace(gltfShape3)
const transform26 = new Transform({
  position: new Vector3(12.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige9.addComponentOrReplace(transform26)

const concreteWall4 = new Entity('concreteWall4')
engine.addEntity(concreteWall4)
concreteWall4.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(2.5, 4, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall4.addComponentOrReplace(transform27)
concreteWall4.addComponentOrReplace(gltfShape2)

const concreteWall17 = new Entity('concreteWall17')
engine.addEntity(concreteWall17)
concreteWall17.setParent(_scene)
concreteWall17.addComponentOrReplace(gltfShape2)
const transform28 = new Transform({
  position: new Vector3(4.5, 4, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall17.addComponentOrReplace(transform28)

const concreteWall18 = new Entity('concreteWall18')
engine.addEntity(concreteWall18)
concreteWall18.setParent(_scene)
concreteWall18.addComponentOrReplace(gltfShape2)
const transform29 = new Transform({
  position: new Vector3(6.5, 4, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall18.addComponentOrReplace(transform29)

const concreteWall19 = new Entity('concreteWall19')
engine.addEntity(concreteWall19)
concreteWall19.setParent(_scene)
concreteWall19.addComponentOrReplace(gltfShape2)
const transform30 = new Transform({
  position: new Vector3(8.5, 4, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall19.addComponentOrReplace(transform30)

const concreteWall20 = new Entity('concreteWall20')
engine.addEntity(concreteWall20)
concreteWall20.setParent(_scene)
concreteWall20.addComponentOrReplace(gltfShape2)
const transform31 = new Transform({
  position: new Vector3(10.5, 4, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall20.addComponentOrReplace(transform31)

const concreteWall21 = new Entity('concreteWall21')
engine.addEntity(concreteWall21)
concreteWall21.setParent(_scene)
concreteWall21.addComponentOrReplace(gltfShape2)
const transform32 = new Transform({
  position: new Vector3(12.5, 4, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteWall21.addComponentOrReplace(transform32)

const concreteWall22 = new Entity('concreteWall22')
engine.addEntity(concreteWall22)
concreteWall22.setParent(_scene)
concreteWall22.addComponentOrReplace(gltfShape2)
const transform33 = new Transform({
  position: new Vector3(0.5, 4, 13.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
concreteWall22.addComponentOrReplace(transform33)

const concreteWall23 = new Entity('concreteWall23')
engine.addEntity(concreteWall23)
concreteWall23.setParent(_scene)
concreteWall23.addComponentOrReplace(gltfShape2)
const transform34 = new Transform({
  position: new Vector3(0.5, 4, 11.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
concreteWall23.addComponentOrReplace(transform34)

const concreteWall24 = new Entity('concreteWall24')
engine.addEntity(concreteWall24)
concreteWall24.setParent(_scene)
concreteWall24.addComponentOrReplace(gltfShape2)
const transform35 = new Transform({
  position: new Vector3(0.5, 4, 9.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
concreteWall24.addComponentOrReplace(transform35)

const concreteWall25 = new Entity('concreteWall25')
engine.addEntity(concreteWall25)
concreteWall25.setParent(_scene)
concreteWall25.addComponentOrReplace(gltfShape2)
const transform36 = new Transform({
  position: new Vector3(0.5, 4, 7.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
concreteWall25.addComponentOrReplace(transform36)

const concreteWall26 = new Entity('concreteWall26')
engine.addEntity(concreteWall26)
concreteWall26.setParent(_scene)
concreteWall26.addComponentOrReplace(gltfShape2)
const transform37 = new Transform({
  position: new Vector3(0.5, 4, 5.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
concreteWall26.addComponentOrReplace(transform37)

const concreteWall27 = new Entity('concreteWall27')
engine.addEntity(concreteWall27)
concreteWall27.setParent(_scene)
concreteWall27.addComponentOrReplace(gltfShape2)
const transform38 = new Transform({
  position: new Vector3(0.5, 4, 3.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
concreteWall27.addComponentOrReplace(transform38)

const stairsFloating = new Entity('stairsFloating')
engine.addEntity(stairsFloating)
stairsFloating.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(16, 5.9604641222676946e-8, 11),
  rotation: new Quaternion(-1.5014858600494022e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
stairsFloating.addComponentOrReplace(transform39)
const gltfShape4 = new GLTFShape("896b942f-3c65-4d53-b8ff-8d874270fe6e/floatingStairs.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
stairsFloating.addComponentOrReplace(gltfShape4)

const roofBeige10 = new Entity('roofBeige10')
engine.addEntity(roofBeige10)
roofBeige10.setParent(_scene)
roofBeige10.addComponentOrReplace(gltfShape3)
const transform40 = new Transform({
  position: new Vector3(4, 4, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige10.addComponentOrReplace(transform40)

const roofBeige11 = new Entity('roofBeige11')
engine.addEntity(roofBeige11)
roofBeige11.setParent(_scene)
roofBeige11.addComponentOrReplace(gltfShape3)
const transform41 = new Transform({
  position: new Vector3(8, 4, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige11.addComponentOrReplace(transform41)

const roofBeige12 = new Entity('roofBeige12')
engine.addEntity(roofBeige12)
roofBeige12.setParent(_scene)
roofBeige12.addComponentOrReplace(gltfShape3)
const transform42 = new Transform({
  position: new Vector3(12, 4, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige12.addComponentOrReplace(transform42)

const roofBeige13 = new Entity('roofBeige13')
engine.addEntity(roofBeige13)
roofBeige13.setParent(_scene)
roofBeige13.addComponentOrReplace(gltfShape3)
const transform43 = new Transform({
  position: new Vector3(4, 4, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige13.addComponentOrReplace(transform43)

const roofBeige14 = new Entity('roofBeige14')
engine.addEntity(roofBeige14)
roofBeige14.setParent(_scene)
roofBeige14.addComponentOrReplace(gltfShape3)
const transform44 = new Transform({
  position: new Vector3(4, 4, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige14.addComponentOrReplace(transform44)

const roofBeige15 = new Entity('roofBeige15')
engine.addEntity(roofBeige15)
roofBeige15.setParent(_scene)
roofBeige15.addComponentOrReplace(gltfShape3)
const transform45 = new Transform({
  position: new Vector3(8, 4, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige15.addComponentOrReplace(transform45)

const roofBeige16 = new Entity('roofBeige16')
engine.addEntity(roofBeige16)
roofBeige16.setParent(_scene)
roofBeige16.addComponentOrReplace(gltfShape3)
const transform46 = new Transform({
  position: new Vector3(12, 4, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige16.addComponentOrReplace(transform46)

const roofBeige17 = new Entity('roofBeige17')
engine.addEntity(roofBeige17)
roofBeige17.setParent(_scene)
roofBeige17.addComponentOrReplace(gltfShape3)
const transform47 = new Transform({
  position: new Vector3(8, 4, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige17.addComponentOrReplace(transform47)

const roofBeige18 = new Entity('roofBeige18')
engine.addEntity(roofBeige18)
roofBeige18.setParent(_scene)
roofBeige18.addComponentOrReplace(gltfShape3)
const transform48 = new Transform({
  position: new Vector3(12, 4, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
roofBeige18.addComponentOrReplace(transform48)

const concreteWall28 = new Entity('concreteWall28')
engine.addEntity(concreteWall28)
concreteWall28.setParent(_scene)
concreteWall28.addComponentOrReplace(gltfShape2)
const transform49 = new Transform({
  position: new Vector3(12, 4, 5.5),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
concreteWall28.addComponentOrReplace(transform49)
