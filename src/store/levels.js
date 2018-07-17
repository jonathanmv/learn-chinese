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
        description: `Great! If you draw a Héng on top of another Héng you will be drawing the number 2 called Èr.`,
        sampleUri: 'static/slides/er.png'
      },
      {
        title: 'Draw an Èr',
        type: 'test',
        description: `Draw a Héng on top of another Héng to form the number 2 in Chinese.`,
        goal: 'Èr'
      },
      {
        title: 'Sān, the number 3',
        type: 'test',
        description: `Can you guess the number 3? That's it! 3 horizontal lines stacked on top of each other.`,
        goal: 'Sān'
      },
      {
        title: '1, 2, 3',
        type: 'completed',
        description: 'Now you can count Yī, Èr, Sān in Chinese!'
      }
    ]
  },
  {
    title: 'Vertical Line',
    description: 'Discover what we can write with simple lines',
    pathName: 'level/heng-shu',
    modelName: 'heng-shu-model',
    slides: [
      {
        title: 'Shù',
        type: 'show',
        description: 'Another stroke is called Shù. It is just a vertical line.',
        sampleUri: 'static/slides/shu.png'
      },
      {
        title: 'Shù, a vertical line',
        type: 'test',
        description: 'Draw a vertical line to make the Shù stroke',
        goal: 'Shù'
      },
      {
        title: 'Heng, a horizontal line',
        type: 'show',
        description: 'Remember that the stroke Heng is just a horizontal line',
        sampleUri: 'static/slides/heng.png'
      },
      {
        title: 'Héng and Shù, the number 10',
        type: 'show',
        description: 'When you draw a Héng and a Shù you make the number 10 called Shí',
        sampleUri: 'static/slides/shi.png'
      },
      {
        title: 'Draw Shí, the number 10',
        type: 'test',
        description: 'Combine both the Héng (horizontal line) with Shù (vertical line) to make Shí, the number 10.',
        goal: 'Shí'
      },
      {
        title: '10 + 1 = 11',
        type: 'test',
        description: 'Drawing Yī (number 1) next to Shí (number 10) makes Shíyī, the number 11',
        goal: 'null' // There's an error in the model and this goal was named null
      },
      {
        title: '10 + 2 = 12',
        type: 'test',
        description: 'Drawing Èr (number 2) next to Shí (number 10) makes Shí\'èr, the number 12',
        goal: 'Shí\'èr'
      },
      {
        title: '10 + 3 = 13',
        type: 'test',
        description: 'Drawing Sān (number 3) next to Shí (number 10) makes Shísān, the number 13',
        goal: 'Shísān'
      },
      {
        title: '3 x 10 = 30',
        type: 'test',
        description: `Now let's change the order. Place the number 3 (Sān) before the number 10 (Shí) to form the number 30 (Sānshí)`,
        goal: 'Sānshí'
      },
      {
        title: '2 x 10 = 20',
        type: 'test',
        description: `Try the same with the number 2 (Èr). Place it before the number 10 (Shí) to form the number 20 (Èrshí)`,
        goal: 'Èrshí'
      },
      {
        title: 'Héng and Shù strokes',
        type: 'completed',
        description: 'Just with horizontal and vertical lines we can now write the numbers 1, 2, 3, 10, 11, 12, 13, 20, 30. And we could also write 21 like 二十一. Congratulations!'
      }
    ]
  }
]
 // Shù Shí Shíyī Shí'èr Shísān Èrshí Sānshí
