# katify

Katify(tm) is a new way to liven up your project and/or website. Using some complex API hooks, third-party libraries and back-end integration, I've managed to make a lightweight, agile, and HTML5-compatible way to replace normal, boring images with Instagrammed pictures of our cat, Kate.

To add Katify to your project, copy and paste the contents of *katify.ts* into your *functions/main.ts* file.

The function can be used in two ways:

1. **Random image**: `katify(Text %xpath)`, where `%xpath` is a path to the image you want to replace
2. **Specified image**: `katify(Text %xpath, Text %num)`, where %xpath is a path to the image you want to replace and %num is a digit from 0-9.

## Example Use
    
    katify("//image")
    katify("//image", "6")

## Example Site

- [NYTimes](http://mmjlcatlin2499.nytimes.com.moovapp.com/)

## Upcoming Features

- The option to use pictures of Katie Holmes instead of Kate the cat