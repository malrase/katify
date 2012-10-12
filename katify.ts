@func XMLNode.katify(Text %xpath) {
  %num = $date
  %num {
    replace(/[^\d]/, "")
    replace(/.(?=.)/, "")
  }
  $(%xpath) {
    attribute("src") {
      value("http://dl.dropbox.com/u/641195/cat/" + %num + ".jpg")
    }
  }
}

@func XMLNode.katify(Text %xpath, Text %num) {
  $(%xpath) {
    attribute("src") {
      value("http://dl.dropbox.com/u/641195/cat/" + %num + ".jpg")
    }
  }
}