const newFolderName = function (folders) {
  let genNewFolder = true

  if (folders.length === 0) {
    return 'New Folder'
  }

  for (let i = 0; i < folders.length; i++) {
    if (folders[i] === 'New Folder') {
      genNewFolder = false
      i = folders.length
    }
  }

  if (genNewFolder === true) {
    return 'New Folder'
  } else {
    let n = 2
    for (let i = 0; i < folders.length; i++) {
      if (folders[i] === 'New Folder (' + n + ')') {
        n++
        i = -1
      }
    }
    return ('New Folder (' + n + ')')
  }
}

const folders1 = [
  'New Folder (4)',
  'New Folder (2)',
  'New Folder',
  'New Folder (3)',
  'New Folder (6)'
]

const folders2 = [
  'New',
  'Folder that is new',
  'New Folder (7)',
  'New Folder'
]

console.log(newFolderName(folders1))
console.log(newFolderName(folders2))

module.exports = { newFolderName }
