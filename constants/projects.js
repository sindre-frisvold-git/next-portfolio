import { css3, html5, javaScript, react, redux, sass } from '../utils/svg'

const projects = [
  {
    title: 'Audio-Visualiser',
    img: '/audio-visualiser.png',
    link: 'https://sindre-frisvold-git.github.io/audio-visualizer/',
    repo: 'https://github.com/sindre-frisvold-git/audio-visualizer',
    description: 'A visual representation of a JavaScript AudioStream',
    para: [
      'I had some extra time at the end of my programming foundations course and I decided to use it to build a small project.',
      'Original as I am I love music, I also have an interest in generated graphics so I landed on an audio visualiser for my build.',
      'To complete this project in a limited timeframe I decided to focus mainly on the logic and found some canvas lightning code snippets to use for the graphics. I didn’t like how it looked initially so I modified it to look more like the beam of a pod racer than spreading lightning.',
      'In the end I landed on the design you can see, with sliders for modifying the behavior and frequency band selectors for each attribute.',
    ],
    challenge: [
      'Getting the visual representation of the frequency bands proved difficult as a lot of modern music lie around the same frequency for major parts of the tune with little variance. This led to a fairly flat, boring looking visualiser. To be brief: I solved this by increasing the sensitivity to frequency amplitude with some exponential math and modifying some of the base attributes.',
      'I also struggled getting the audio stream working initially as I had yet to learn about promises etc. This was overcome with a lot of googling and some good ol’ grit.',
    ],
    tech: [css3, javaScript, html5],
  },
  {
    title: 'PlanBuddy',
    img: '/planBuddy.png',
    link: 'https://planbuddy-sindre.herokuapp.com/',
    repo: 'https://github.com/sindre-frisvold-git/planbuddy',
    description: 'A full-stack app to help you plan your learning.',
    para: [
      'I created this with my team as our final project at Dev Academy. We wanted to create a platform where you could log in and easily create a learning plan with byte-sized tasks within subgoals.',
      'We started by planning out the basic functionality then we wireframes and made a flow-chart for the entire app. We spent almost 2 days doing the planning which paid off considerably during the coding stage. We maintained an Agile development flow with daily scheduled stand-ups and check-ins.',
      'As Agile Lead I took into account the retros from previous projects and ensured we implemented a solid wellbeing plan and used time-boxing to keep everyone on track during planning and feature-development. I also assessed each team member’s strengths at the start of the project so we were all able to continuously perform at our peak performance.',
      'In the end we produced a functioning full-stack app which had all the functionality we initially wanted.',
    ],

    tech: [react, redux, sass, html5, javaScript],
  },
  {
    title: 'Etch-A-Sketch',
    img: '/etch.png',
    link: 'https://sindre-frisvold-git.github.io/etch-a-sketch/',
    repo: 'https://github.com/sindre-frisvold-git/etch-a-sketch',
    description: 'An experiment in DOM manipulation and responsive design.',
    para: [
      'This project was initially built to experiment with scalable DOM manipulation by creating a “screen” given a number N for “pixels”.',
    ],
    challenge: [
      'There were a few major challenges to overcome with this project:',
      'The mouseover event used to color the “pixels” did not work on mobile for obvious reasons. Furthermore, the touchmove event I tried using as a fix did not register the “pixels” I dragged across. To fix this I had to learn how to drill into the event object where I eventually found “clientX” and “clientY”. I used this together with “elementFromPoint” to replicate the mouseover functionality for touch screens.',
      'I wanted to have “knobs” turning based on your interaction with the etcher, for this I needed the page to know which direction you entered the “pixel” from. With a bit of tinkering I wrote some logic that calculated the direction of entry based on the previous “pxel” with the x and y coordinate and compared to the “pixel” entered. I also had to write some code to account for “pixel” size for the amount of rotation of the “knobs”.',
      'In the end I managed to create the functionality I was looking for while keeping the interface simple. I learned a lot about how to use DOM events which has allowed me to create more responsive and interactive code thereforth.',
    ],
    tech: [css3, javaScript, html5],
  },
  {
    title: 'Calculator',
    img: '/calc.png',
    link: 'https://sindre-frisvold-git.github.io/calculator/',
    repo: 'https://github.com/sindre-frisvold-git/calculator',
    description: 'A simple calculator with more than just basic functionality.',
    para: [
      'Early on while learning JavaScript I was tasked with building a calculator. I decided I wanted to make it more than just a simple 4 operator calculator and thought through what I would want out of a basic calculator.',
      'Some of the things I wanted to code in was the ability to press operators twice or more to repeat the operation, do the same thing but with different operators in the same computation and allow multiple presses of “=” to repeat the previous calculation. Furthermore I wanted to be able to write messages on the display like we did in primary school by turning it upside down.',
      'To achieve these tasks I made some very impure functions with a complicated conditional tree. I also learned more about dom manipulation while playing with adding and removing classes to flip the calculator and switch the display on and off.',
      'One thing I would do differently if I was to build this again would be to be a lot more particular about separating concerns; it really does need some heavy spring-refactoring. In the end it worked and at that stage I was quite happy about achieving every functionality I wanted.',
    ],
    tech: [css3, javaScript, html5],
  },
]
export default projects
