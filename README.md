# katify

Katify(tm) is a new way to liven up your project and/or website. Using some complex API hooks, third-party libraries and back-end integration, I've managed to make a lightweight, agile, and HTML5-compatible way to replace normal, boring images with Instagrammed pictures of our cat, Kate.

To add Katify to your project, copy and paste the contents of *katify.ts* into your *functions/main.ts* file.

Then, use the function `katify(Text %xpath, Text %num)`, where %xpath is a path to the image you want to replace and %num is a digit from 0-9.

## Example

    katify("//image", "6")

## Upcoming Features

- Randomised picture of Kate appears instead of a specified one