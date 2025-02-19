//> using dep com.lihaoyi::os-lib:0.11.3

@main def main() =
  val skipDirs = List("build", "node_modules", "/.")
  val imageExts = List("png", "jpg", "webp")

  val wd = os
    .walk(
      os.pwd,
      skip = p => skipDirs.exists(d => p.toString.contains(d))
    )
    .filter(p => imageExts.contains(p.ext))
    .filterNot(p => p.toString.contains(".small."))
    .foreach: p =>
      val newPath = p / os.up / s"${p.baseName}.small.${p.ext}"
      if !os.exists(newPath) then os.proc("magick", p, "-resize", "770x770", "-quality", "99", newPath).call()
