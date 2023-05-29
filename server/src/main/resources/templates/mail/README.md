# YAWA - Emails

## How to convert SVG image into Base64

```
for SVG_IMAGE in /Users/mgiacomo/workplace/personal/yawa/server/src/main/resources/assets/media/email/*.svg; do
    PNG_IMAGE="${SVG_IMAGE%.svg}.png"
    HEIGHT="256"
    rsvg-convert -h $HEIGHT $SVG_IMAGE -o $PNG_IMAGE
done
```

## How to embed images in HTML emails

```
<img alt="Logo" style="height: 35px" src="https://raw.githubusercontent.com/gmarciani/yawa/mainline/server/src/main/resources/assets/media/email/icon-facebook.png"/>
```
