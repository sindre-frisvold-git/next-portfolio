import { css3, html5, javaScript, react, redux, sass } from '../utils/svg'

const projects = [
  {
    title: 'Audio Visualiser',
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
  },
  {
    title: 'Etch-A-Sketch',
    img: '/etch.png',
    link: 'https://sindre-frisvold-git.github.io/etch-a-sketch/',
  },
  {
    title: 'PlanBuddy, Final Project',
    img: '/planBuddy.png',
    link: 'https://github.com/sindre-frisvold-git/planbuddy',
    tech: [react, redux, sass, html5, javaScript],
  },
  {
    title: 'Calculator',
    img: '/calc.png',
    link: 'https://sindre-frisvold-git.github.io/calculator/',
  },
]
export default projects
