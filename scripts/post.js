const fs = require("fs")
const prompt = require("prompt-sync")()
const slugify = require("slugify")

const title = prompt("Enter the Post Title: ")
const blogdir = "./src/posts/2021"

if (!title && !postdata) {
  console.log("Please specify a post title.")
  return
}

const basename = slugify(title, {
  replacement: "-",
  remove: /[*+~.()'"!:@]/g,
  lower: true,
  strict: false,
})

const contents = `---
title: "${title}"
description: ""
date: ""
---
`

fs.writeFile(`${blogdir}/${basename}.mdx`, contents, () =>
  console.log(`✔ Created ${blogdir}/${basename}.mdx`)
)
