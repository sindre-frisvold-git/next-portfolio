import { css3, html5, javaScript, react, redux, sass } from '../utils/svg'

const projects = [
  {
    title: 'Audio-Visualiser',
    img: '/audio-visualiser.png',
    link: 'https://sindre-frisvold-git.github.io/etch-a-sketch/',
    description: 'A visual representation of a JavaScript AudioStream',
    para: [
      'I had some extra time at the end of my programming foundations course and I decided to use it to build a small project.',
      'Original as I am I love music, I also have an interest in generated graphics so I landed on an audio visualiser for my build.',
      'To complete this project in a limited timeframe I decided to focus mainly on the logic and found some canvas lightning code snippets to use for the graphics. I didn’t like how it looked initially so I modified it to look more like the beam of a pod racer than spreading lightning.',
      'In the end I landed on the design you can see with sliders for modifying the behavior and frequency band selectors for each attribute.',
    ],
    challenge: [
      'Getting the visual representation of the frequency bands proved difficult as a lot of modern music lie around the same frequency for major parts of the tune with little variance. This led to a fairly flat, boring looking visualiser. To be brief: I solved this by increasing the sensitivity to frequency amplitude with some exponential math and modifying some of the base attributes.',
      'I also struggled getting the audio stream working initially as I had yet to learn about promises etc. This was overcome with a lot of googling and some good ol’ grit.',
    ],
    tech: [css3, javaScript, html5],
  },
  {
    title: 'Etch-A-Sketch',
    img: '/etch.png',
    link: 'https://sindre-frisvold-git.github.io/etch-a-sketch/',
    description: 'An experiment in dom manipulation and responsive design.',
  },
  {
    title: 'PlanBuddy',
    img: '/planBuddy.png',
    link: 'https://github.com/sindre-frisvold-git/planbuddy',
    description: 'A full-stack app to help you plan your learning.',
    tech: [react, redux, sass, html5, javaScript],
  },
  {
    title: 'Calculator',
    img: '/calc.png',
    link: 'https://sindre-frisvold-git.github.io/calculator/',
    description: 'A simple calculator with more than just basic functionality.',
    para: [
      'Early on while learning JavaScript I was tasked with building a calculator. I decided I wanted to make it more than just a simple 4 operator calculator and thought through what I would want out of a basic calculator.',
      'Some of the things I wanted to code in was the ability to press operators twice or more to repeat the operation, do the same thing but with different operators in the same computation and allow multiple presses of “=” to repeat the previous calculation. Furthermore I wanted to be able to write messages on the display like we did in primary school by turning it upside down.',
      'To achieve these tasks I made some very impure functions with a complicated conditional tree. I also learned more about dom manipulation while playing with adding and removing classes to flip the calculator and switch the display on and off.',
      'One thing I would do differently if I was to build this again would be to be a lot more particular about separating concerns; it really does need some heavy spring-refactoring. In the end it worked and at that stage I was quite happy about achieving every functionality I wanted.',
    ],
  },
]
export default projects
