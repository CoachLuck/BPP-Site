# BPP-Site
The website for [BackPacks+](https://github.com/coachluck/BackPacksPlus), create a pull request to add a backpack.

See below for information on how to contribute a backpack texture.

## Creating/Obtaining Textures
You can easily create backpack textures by only editing the head at [MinecraftSkins.com](https://www.minecraftskins.com/skin-editor/), and then saving the texture.

Or feel free to add an existing texture from other free head libraries, for example [Minecraft-Heads.com](https://minecraft-heads.com/)

Once you have the **64x64 .png** texture file downloaded, we can continue.

## Generating Icons
Navigate your way over to [MineCraft Skin Viewer](http://www.minecraft-skin-viewer.net/) and upload your **64x64** texture.

Next we need to configure a couple of things:
- Image Size: 20
- Vertical Rotation: 170
- Head Rotation: 180
- Show hat/hair checked
- Antia-Aliasing checked
- Show head only checked

Finally we can save our new icon. 
Simply click on the **3D-Skin Download** button to get the *icon.png* or click on the **Mojang-Skin Download** for the *texture.png*.

## Placing Assets
Place assets as **PNG** files, in their own directory named `backpack-<name>`

```
So our file structure would be:
L textures
  L backpack-<name>
   - icon.png (231x217)
   - texture.png (64x64)
```
