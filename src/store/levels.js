export default [
  {
    title: 'Horizontal Line',
    description: 'Chinese starts with a single line',
    pathName: 'level/heng',
    modelName: 'heng-model',
    slides: [
      {
        title: 'Horizontal Line',
        type: 'show',
        description: `Chinese characters are composed of strokes. One of the simplest stroke is the horizontal line called Héng.`,
        sampleUri: 'static/slides/heng.png'
      },
      {
        title: 'Draw a Héng',
        type: 'test',
        description: `The Héng stroke is just a horizontal line made from left to right. It also represents the number 1, called Yī.`,
        goal: 'Yī'
      },
      {
        title: 'The number 2',
        type: 'show',
        description: `Great! If you draw a Héng on top of another Héng you will be drawing the number 2 called Er.`,
        sampleUri: 'static/slides/er.png'
      },
      {
        title: 'Draw an Er',
        type: 'test',
        description: `Draw a Héng on top of another Héng to form the number 2 in Chinese.`,
        goal: 'Er'
      },
      {
        title: 'Sān, the number 3',
        type: 'test',
        description: `Can you guess the number 3? That's it! 3 horizontal lines stacked on top of each other.`,
        goal: 'Sān'
      }
    ]
  },
  {
    title: 'Héng and Shù',
    description: 'What if you add a vertical line?',
    pathName: 'level/heng-shu'
  }
]
