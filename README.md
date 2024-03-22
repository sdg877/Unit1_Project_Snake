Description
For my Unit 1 project, we were given a choice of games to build. As I had only been coding full-time for two weeks, I decided to go for one of the simpler games, Snake,  to allow me to ease myself into my first-ever project and not overwhelm myself. We were given seven days to complete the project including planning. 
Snake is a single-player game, the player earns points by guiding the snake to eat food that is randomly placed on the game board. The snake gets longer and faster with every piece of food that it eats. The snake dies if it collides with a wall or with itself.

![snake1](https://github.com/sdg877/Unit1_Project_Snake/assets/149600602/ab0170a5-248b-4d40-a0e3-1cc496c80405)


Deployment link
https://sdg877.github.io/Unit1_Project_Snake/

Code Installation
The code for my project can be found here:
https://github.com/sdg877/Unit1_Project_Snake

Timeframe
This was a solo project that we were given seven days to complete. While it was a solo project, we were allowed to work with colleagues working on the same project. It was beneficial to bounce off ideas and problems with them. I also had help from the instructors when I got stuck.

Technologies used
HTML
CSS
JavaScript

Brief
The game required that it should be built solely using JavaScript, that it includes win/loss logic, that it be coded consistently, that functions and variables be named sensibly, and that it be deployed online using GitHub.

Planning
I planned for my game by creating a Google doc detailing all the steps I thought would need to be carried out to complete the project. As I was only two weeks into coding and this was my first ever project, the plan wasn’t perfect.

This is a link to my plan:
https://docs.google.com/document/d/1ld78dPaMZAm-7Ce9iwxbqQhjWC61ao3opkPdHwBkIyM/edit?usp=sharing

I also created a basic drawing on Excalidraw.
![snake2](https://github.com/sdg877/Unit1_Project_Snake/assets/149600602/156d668d-635b-4709-8a98-8e5fbfab4cd3)


In all, it took me two to three hours to plan before I started building the game. 


Code Process
I followed the following process in order to build my game of Snake:
Created basic HTML and CSS files.
Created a grid in JavaScript.
Created a snake and apple by colouring divs green and red.
Created a function to randomly generate apples (see below)
![snake3](https://github.com/sdg877/Unit1_Project_Snake/assets/149600602/70847a0f-aa24-4843-b89e-af1ff62ffdef)
Used the key down to enable the snake to move by pressing one of the arrow keys.
With the help of my instructor, I created a function so that the snake would grow by one square every time he ate an apple.
Created a function so that the game would end if the snake collided with itself or the walls. The code snippet below also shows the code used to get the snake to move independently and to increase the snake speed as he grows.
![snake4](https://github.com/sdg877/Unit1_Project_Snake/assets/149600602/08172739-9eb7-4918-9f8b-6aea0ba16704)
I then used an addEventListener to get the reset/play again button to work to reset the game at any point.
I used a removeEventListener so that the game could no longer be played once the snake had died.
I added a function to record the highest score.
![snake5](https://github.com/sdg877/Unit1_Project_Snake/assets/149600602/42a9f055-e0ed-4bf8-84f7-6f010128e5e5)
I then added a class of dead to the snake once he had collided so that he could change colour once he died.
![snake6](https://github.com/sdg877/Unit1_Project_Snake/assets/149600602/a978a459-bafb-49f5-9413-ec9d8c77a87b)
By adding sound files to an asset folder (with the help of the Teaching Assistant), I could play a crunch sound every time the snake ate an apple and a game over sound when he died.
As I still had some time left over before handing the project in, I decided to use a modal to create a styled alert to press any key to start. The was put in before the function init to ensure that the game was fully loaded behind it.
![snake7](https://github.com/sdg877/Unit1_Project_Snake/assets/149600602/b73381da-9f8c-4b0b-ae9a-01ceef92a64e)

Challenges
As I had only begun coding two weeks before the start of this project, I felt very overwhelmed and not very sure where to start. I found most of the basic requirements quite challenging (collisions, the snake growing after every apple, the apple not appearing within the snake's body).
When I found myself stuck, I tried to find the answer online or ask in the Slack group with my colleagues who were also building Snake. If I was still struggling, I would then ask one of the instructors for help.

Wins
I was able to complete the project with enough time so that I was able to add extras such as a high score, styling updates, and sounds, and turning the snake into a ghost when he died felt like a great achievement for me as at the start of the week I wasn’t sure if I would be able to complete the project at all.

Key learnings
As I had only been coding for two weeks when this project began, I felt like I hadn’t remembered any of what had been taught to us in the two weeks prior. I felt overwhelmed and thrown into the deep end. But as the project progressed, I began to remember some of the stuff that had been taught to us, researched more about it, and grew more confident in coding. One of the key things I took with me was that I should push my code any time I complete something successfully so that I can always go back if I do something wrong with the next steps. 

Bugs
The main bug I encountered was that the apple would keep appearing inside the snake body. This is how I fixed it (with the help of my instructor)
![snake8](https://github.com/sdg877/Unit1_Project_Snake/assets/149600602/627014f4-4f9a-44ea-a54a-883b44eba7fb)


Future Improvements
I was able to complete all of the technical aspects of the game that I had planned to do and more.
