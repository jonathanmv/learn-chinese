export default [
  {
    title: 'Horizontal Line',
    description: 'Chinese starts with a single line',
    pathName: 'level/heng',
    slides: [
      {
        title: 'Horizontal Line',
        type: 'show',
        description: `Chinese characters are composed of strokes. One of the simplest stroke is the horizontal line.`,
        sampleUri: 'static/slides/heng.png'
      },
      {
        title: 'Draw a horizontal line',
        type: 'show',
        description: `Let's start with the basics of Chinese writing. Can you draw a horizontal line?`,
        goal: 'yi'
      },
      {
        title: 'Draw a héng on top of another héng',
        type: 'show',
        description: `Great! The horizontal line is called héng and is also the number 1 in Chinese. If you draw a héng on top of another héng you will be drawing the number 2.`,
        goal: 'er'
      },
      {
        title: 'Draw the number 3 in Chinese',
        type: 'show',
        description: `Can you guess the number 3?`,
        goal: 'san'
      }
    ]
  },
  {
    title: 'Héng and Shù',
    description: 'What if you add a vertical line?',
    pathName: 'level/heng-shu'
  }
]
