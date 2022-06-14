import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script2 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script3 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script4 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script5 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"

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

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const greenLasers = new Entity('greenLasers')
engine.addEntity(greenLasers)
greenLasers.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenLasers.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("97814e65-1c0c-4297-bbfd-fddf0bded1c3/2 green lasers.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
greenLasers.addComponentOrReplace(gltfShape2)

const greenLasersBeams = new Entity('greenLasersBeams')
engine.addEntity(greenLasersBeams)
greenLasersBeams.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenLasersBeams.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("3e7a0357-3e50-4318-ad92-e61a990be86e/2 green lasers beams.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
greenLasersBeams.addComponentOrReplace(gltfShape3)

const discoball = new Entity('discoball')
engine.addEntity(discoball)
discoball.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
discoball.addComponentOrReplace(transform6)
const gltfShape4 = new GLTFShape("db2a13ec-ec7a-43ac-a96d-9ca9bf623b13/discoball.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
discoball.addComponentOrReplace(gltfShape4)

const djset = new Entity('djset')
engine.addEntity(djset)
djset.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
djset.addComponentOrReplace(transform7)
const gltfShape5 = new GLTFShape("efb2946f-68b1-463a-9bb9-7d6bd8d34b07/djset.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
djset.addComponentOrReplace(gltfShape5)

const drinks = new Entity('drinks')
engine.addEntity(drinks)
drinks.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
drinks.addComponentOrReplace(transform8)
const gltfShape6 = new GLTFShape("faa7be84-8e41-44be-91e4-5aee51d9a10d/drinks.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
drinks.addComponentOrReplace(gltfShape6)

const elevator = new Entity('elevator')
engine.addEntity(elevator)
elevator.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
elevator.addComponentOrReplace(transform9)
const gltfShape7 = new GLTFShape("563315b8-8ece-49d0-85a8-fa739162d398/elevator1.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
elevator.addComponentOrReplace(gltfShape7)

const greenlaserHolder = new Entity('greenlaserHolder')
engine.addEntity(greenlaserHolder)
greenlaserHolder.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenlaserHolder.addComponentOrReplace(transform10)
const gltfShape8 = new GLTFShape("8991cecd-1561-4ebc-99c4-7818e13e248c/greenlaser holder.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
greenlaserHolder.addComponentOrReplace(gltfShape8)

const lightsStairs = new Entity('lightsStairs')
engine.addEntity(lightsStairs)
lightsStairs.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightsStairs.addComponentOrReplace(transform11)
const gltfShape9 = new GLTFShape("b20e35e0-63b3-4a32-bf6e-63f352f39d2c/lights stairs.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
lightsStairs.addComponentOrReplace(gltfShape9)

const movingdjdisk = new Entity('movingdjdisk')
engine.addEntity(movingdjdisk)
movingdjdisk.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
movingdjdisk.addComponentOrReplace(transform12)
const gltfShape10 = new GLTFShape("b065561e-a131-4545-add8-4b899333a99e/movingdjdisk.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
movingdjdisk.addComponentOrReplace(gltfShape10)

const oneGreenLaserBeam = new Entity('oneGreenLaserBeam')
engine.addEntity(oneGreenLaserBeam)
oneGreenLaserBeam.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
oneGreenLaserBeam.addComponentOrReplace(transform13)
const gltfShape11 = new GLTFShape("7351d312-2baa-450f-8ec5-64869a77146d/one green laser beam.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
oneGreenLaserBeam.addComponentOrReplace(gltfShape11)

const oneGreenLaser = new Entity('oneGreenLaser')
engine.addEntity(oneGreenLaser)
oneGreenLaser.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
oneGreenLaser.addComponentOrReplace(transform14)
const gltfShape12 = new GLTFShape("e3f51269-59d0-4656-ad45-d83e7b0ec36d/one green laser.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
oneGreenLaser.addComponentOrReplace(gltfShape12)

const movingdjdisk2 = new Entity('movingdjdisk2')
engine.addEntity(movingdjdisk2)
movingdjdisk2.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
movingdjdisk2.addComponentOrReplace(transform15)
const gltfShape13 = new GLTFShape("427f498c-8759-48f2-946e-c62b81286220/movingdjdisk2.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
movingdjdisk2.addComponentOrReplace(gltfShape13)

const toolbox = new Entity('toolbox')
engine.addEntity(toolbox)
toolbox.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(18.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toolbox.addComponentOrReplace(transform16)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(13.971105575561523, 13.076227188110352, 15.570942878723145),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.5, 4.5, 1.376162052154541)
})
nftPictureFrame.addComponentOrReplace(transform17)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(18.26045036315918, 13.076227188110352, 15.570942878723145),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.5, 4.5, 1.376162052154541)
})
nftPictureFrame2.addComponentOrReplace(transform18)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(22.55788230895996, 13.076227188110352, 15.570942878723145),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.5, 4.5, 1.376162052154541)
})
nftPictureFrame3.addComponentOrReplace(transform19)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(26.8288516998291, 13.076227188110352, 15.570942878723145),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.5, 4.5, 1.376162052154541)
})
nftPictureFrame4.addComponentOrReplace(transform20)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(9.496500968933105, 13.076227188110352, 15.570942878723145),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.5, 4.5, 1.376162052154541)
})
nftPictureFrame5.addComponentOrReplace(transform21)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(5.207156181335449, 13.076227188110352, 15.570942878723145),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.5, 4.5, 1.376162052154541)
})
nftPictureFrame6.addComponentOrReplace(transform22)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(31.427202224731445, 17.699691772460938, 8.020297050476074),
  rotation: new Quaternion(8.167501641372435e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.408067226409912, 4.408059597015381, 0.5292614698410034)
})
nftPictureFrame7.addComponentOrReplace(transform23)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(31.427202224731445, 17.699691772460938, 12.368485450744629),
  rotation: new Quaternion(8.167501641372435e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.4080681800842285, 4.408059597015381, 0.529261589050293)
})
nftPictureFrame8.addComponentOrReplace(transform24)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(31.427202224731445, 17.699691772460938, 3.6797173023223877),
  rotation: new Quaternion(8.167501641372435e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.4080681800842285, 4.408059597015381, 0.529261589050293)
})
nftPictureFrame9.addComponentOrReplace(transform25)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(6.770187854766846, 17.640640258789062, 2.6904444694519043),
  rotation: new Quaternion(8.167501641372435e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.4080729484558105, 4.408059597015381, 0.5292621850967407)
})
nftPictureFrame10.addComponentOrReplace(transform26)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(6.770187854766846, 17.640640258789062, 6.491635799407959),
  rotation: new Quaternion(8.167501641372435e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.408071994781494, 4.408059597015381, 0.5292620658874512)
})
nftPictureFrame11.addComponentOrReplace(transform27)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(7.089634418487549, 17.640640258789062, 6.491633415222168),
  rotation: new Quaternion(5.66176981328919e-15, 0.7064412832260132, -8.421435637728791e-8, 0.7077717781066895),
  scale: new Vector3(4.408077239990234, 4.408059597015381, 0.5292626023292542)
})
nftPictureFrame12.addComponentOrReplace(transform28)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(7.096786975860596, 17.640640258789062, 2.6904470920562744),
  rotation: new Quaternion(5.66176981328919e-15, 0.7064412832260132, -8.421435637728791e-8, 0.7077717781066895),
  scale: new Vector3(4.408076286315918, 4.408059597015381, 0.5292624831199646)
})
nftPictureFrame13.addComponentOrReplace(transform29)

const arrow = new Entity('arrow')
engine.addEntity(arrow)
arrow.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
arrow.addComponentOrReplace(transform30)
const gltfShape14 = new GLTFShape("8c851f66-4c38-4c7e-b21c-154dd37b6465/arrow.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
arrow.addComponentOrReplace(gltfShape14)

const arcade = new Entity('arcade')
engine.addEntity(arcade)
arcade.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
arcade.addComponentOrReplace(transform31)
const gltfShape15 = new GLTFShape("8c043fe3-52bb-4395-ad1d-0d25641a6cab/arcade.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
arcade.addComponentOrReplace(gltfShape15)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(0.4788551330566406, 22.50726318359375, 12.368487358093262),
  rotation: new Quaternion(5.037480273141406e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(4.40807580947876, 4.408059597015381, 0.5292625427246094)
})
nftPictureFrame14.addComponentOrReplace(transform32)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(0.4788546562194824, 22.507261276245117, 8.027907371520996),
  rotation: new Quaternion(5.037480273141406e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(4.408074855804443, 4.408059597015381, 0.5292624235153198)
})
nftPictureFrame15.addComponentOrReplace(transform33)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(0.4788546562194824, 22.507259368896484, 3.6797189712524414),
  rotation: new Quaternion(5.037480273141406e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(4.40807580947876, 4.408059597015381, 0.5292625427246094)
})
nftPictureFrame16.addComponentOrReplace(transform34)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(14.132627487182617, 2.830153465270996, 0.8043809533119202),
  rotation: new Quaternion(-4.6412446131629485e-15, -8.940696716308594e-8, 4.641245036679422e-15, 1),
  scale: new Vector3(5.630873680114746, 3.327970266342163, 3.155850648880005)
})
imageFromURL.addComponentOrReplace(transform35)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(8.022318840026855, 3.3500986099243164, 7.268496513366699),
  rotation: new Quaternion(-1.4553342111270676e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.699875831604004, 2.6998727321624756, 2.699875831604004)
})
imageFromURL2.addComponentOrReplace(transform36)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(8.153886795043945, 2.7135493755340576, 7.263879776000977),
  rotation: new Quaternion(2.866081666701853e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform37)

const soundSystem = new Entity('soundSystem')
engine.addEntity(soundSystem)
soundSystem.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
soundSystem.addComponentOrReplace(transform38)
const gltfShape16 = new GLTFShape("3be17edc-0902-44ac-94a2-13047dfe7c9b/sound system.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
soundSystem.addComponentOrReplace(gltfShape16)

const bar = new Entity('bar')
engine.addEntity(bar)
bar.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bar.addComponentOrReplace(transform39)
const gltfShape17 = new GLTFShape("16f4b5bc-d4b7-4a75-b212-cd2b9fb7827a/bar.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
bar.addComponentOrReplace(gltfShape17)

const fridge = new Entity('fridge')
engine.addEntity(fridge)
fridge.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fridge.addComponentOrReplace(transform40)
const gltfShape18 = new GLTFShape("554e71ef-2ee8-48e6-993c-bef17d306d26/fridge.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
fridge.addComponentOrReplace(gltfShape18)

const galleryLights = new Entity('galleryLights')
engine.addEntity(galleryLights)
galleryLights.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryLights.addComponentOrReplace(transform41)
const gltfShape19 = new GLTFShape("42d8746e-2e80-459b-ae17-ad9a051ad813/gallery 3 lights.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
galleryLights.addComponentOrReplace(gltfShape19)

const logoOnTheBuilding = new Entity('logoOnTheBuilding')
engine.addEntity(logoOnTheBuilding)
logoOnTheBuilding.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
logoOnTheBuilding.addComponentOrReplace(transform42)
const gltfShape20 = new GLTFShape("75c8265f-f2d6-4098-a0c7-d6110c206cc6/logo on the building.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
logoOnTheBuilding.addComponentOrReplace(gltfShape20)

const barchairs = new Entity('barchairs')
engine.addEntity(barchairs)
barchairs.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barchairs.addComponentOrReplace(transform43)
const gltfShape21 = new GLTFShape("8ee377aa-f74f-44ee-9e9f-954ec03976a4/barchairs.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
barchairs.addComponentOrReplace(gltfShape21)

const galleryLights2 = new Entity('galleryLights2')
engine.addEntity(galleryLights2)
galleryLights2.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryLights2.addComponentOrReplace(transform44)
const gltfShape22 = new GLTFShape("2f41f40e-b2a5-4078-80ab-4ba60741b1cd/gallery lights2.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
galleryLights2.addComponentOrReplace(gltfShape22)

const decorationLatest = new Entity('decorationLatest')
engine.addEntity(decorationLatest)
decorationLatest.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
decorationLatest.addComponentOrReplace(transform45)
const gltfShape23 = new GLTFShape("e585877f-411c-4e4c-9e22-2ed353dd93e3/decoration latest.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
decorationLatest.addComponentOrReplace(gltfShape23)

const elevator2 = new Entity('elevator2')
engine.addEntity(elevator2)
elevator2.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
elevator2.addComponentOrReplace(transform46)
const gltfShape24 = new GLTFShape("b1e78f0f-ca10-4c6f-9cac-58077d494bf8/elevator2.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
elevator2.addComponentOrReplace(gltfShape24)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(22.249954223632812, 10.152047157287598, 6.794585704803467),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.1027984619140625, 3.1027910709381104, 0.9533736705780029)
})
videoStream.addComponentOrReplace(transform47)

const ghostForEthereals = new Entity('ghostForEthereals')
engine.addEntity(ghostForEthereals)
ghostForEthereals.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ghostForEthereals.addComponentOrReplace(transform48)
const gltfShape25 = new GLTFShape("5fbe315b-8077-4fc5-9f83-976bab5533c2/ghost for ethereals .glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
ghostForEthereals.addComponentOrReplace(gltfShape25)

const building = new Entity('building')
engine.addEntity(building)
building.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
building.addComponentOrReplace(transform49)
const gltfShape26 = new GLTFShape("97d81533-4015-401b-ac51-107f0ceac1a0/building.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
building.addComponentOrReplace(gltfShape26)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script1.spawn(toolbox, {}, createChannel(channelId, toolbox, channelBus))
script2.spawn(nftPictureFrame, {"id":"570","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script2.spawn(nftPictureFrame2, {"id":"1021","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script2.spawn(nftPictureFrame3, {"id":"1381","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script2.spawn(nftPictureFrame4, {"id":"950","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script2.spawn(nftPictureFrame5, {"id":"1254","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script2.spawn(nftPictureFrame6, {"id":"722","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script2.spawn(nftPictureFrame7, {"id":"6558","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script2.spawn(nftPictureFrame8, {"id":"2332","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script2.spawn(nftPictureFrame9, {"id":"1402","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script2.spawn(nftPictureFrame10, {"id":"1283","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script2.spawn(nftPictureFrame11, {"id":"11447","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script2.spawn(nftPictureFrame12, {"id":"3919","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script2.spawn(nftPictureFrame13, {"id":"6057","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script2.spawn(nftPictureFrame14, {"id":"63","contract":"0x63e74bfC3B1f091f1eeBD161783702C1E59db172","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script2.spawn(nftPictureFrame15, {"id":"84","contract":"0x63e74bfC3B1f091f1eeBD161783702C1E59db172","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script2.spawn(nftPictureFrame16, {"id":"44","contract":"0x63e74bfC3B1f091f1eeBD161783702C1E59db172","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script3.spawn(imageFromURL, {"image":"https://i.imgur.com/VoD7hv2.png"}, createChannel(channelId, imageFromURL, channelBus))
script3.spawn(imageFromURL2, {"image":"https://i.imgur.com/964gZrF.png"}, createChannel(channelId, imageFromURL2, channelBus))
script4.spawn(externalLink, {"url":"https://linktr.ee/etherealswtf"}, createChannel(channelId, externalLink, channelBus))
script5.spawn(videoStream, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"customStation":"https://www.twitch.tv/warpsound","image":""}, createChannel(channelId, videoStream, channelBus))