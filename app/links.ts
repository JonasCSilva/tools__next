type RawLinkGroups = {
  heading: string
  content: {
    path: string
    [key: string]: string
  }[]
}[]

const linksGroups: RawLinkGroups = [
  {
    heading: 'Generators',
    content: [
      {
        path: 'username'
      },
      {
        path: 'password'
      },
      {
        path: 'word'
      }
    ]
  },
  {
    heading: 'Calculators',
    content: [
      {
        path: 'compound-interest-with-contributions'
      }
    ]
  }
]

const titles: { [key: string]: string } = {}

for (const linkGroup of linksGroups) {
  for (const link of linkGroup.content) {
    const lastIndex = linkGroup.heading.lastIndexOf('s')
    const string = link.path.replaceAll('-', ' ')
    const name = string.charAt(0).toUpperCase() + string.slice(1)
    titles[link.path] = name + ' ' + linkGroup.heading.slice(0, lastIndex)

    link.name = name
  }
}

export { titles, linksGroups }
