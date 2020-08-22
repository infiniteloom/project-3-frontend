# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Deploy on netlify | Complete
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Incomplete
|Day 2| Design landing page with bootstrap grid gallery | Incomplete
|Day 3| Continue design of landing page with bootstrap grid gallery | Incomplete
|Day 3| Design individual review view | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches and Present | Incomplete



## Project Description
MUSIC JOURNAL
An app to help visitors discover new music, featuring reviews of albums and interviews with artists. 

USER STORY:
- The editor/blog admin will be able to login and have access to create, edit and destroy articles. 
- Users will visit the public-facing side of the site and browse articles on new music. 
- Users can click through the landing page gallery items to view individual articles.

POST MVP:
- Multiple visitors will be able to create accounts, login and leave their comments on reviews. 


INSPIRATION: 
Pitchfork.com
https://www.goldflakepaint.co.uk/


## App Build-out Links 
Front-end deployed URL:  a-music-journal.netlify.app
Front-end GitHub: https://github.com/infiniteloom/project-3-frontend
Back-end deployed URL:
Back-end repo: https://github.com/infiniteloom/project-3-backend


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

[Mobile]
- Landing Page: https://res.cloudinary.com/infiniteloom/image/upload/v1598057061/Unit%2003%20-%20Project/Mobile/landing-page_mobile_udci8u.png
- Logged in, post view:  https://res.cloudinary.com/infiniteloom/image/upload/v1598057060/Unit%2003%20-%20Project/Mobile/album-review_mobile_uhrizd.png

[Tablet]
- Landing Page: https://res.cloudinary.com/infiniteloom/image/upload/v1598057061/Unit%2003%20-%20Project/Mobile/landing-page_mobile_udci8u.png
- Logged in, edit post view https://res.cloudinary.com/infiniteloom/image/upload/v1598047547/Unit%2003%20-%20Project/Web/logged-in-edit-post_ame8wn.png

[Desktop]
- Landing Page - https://res.cloudinary.com/infiniteloom/image/upload/v1598047549/Unit%2003%20-%20Project/Web/landing-page_dgtfq9.png
- Logged in, edit post view https://res.cloudinary.com/infiniteloom/image/upload/v1598047547/Unit%2003%20-%20Project/Web/logged-in-edit-post_ame8wn.png
- Logged in, view post view https://res.cloudinary.com/infiniteloom/image/upload/v1598047565/Unit%2003%20-%20Project/Web/logged-in-viewing-post_xua073.png


Wireframing Resources:

- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

Include a full list of features that have been [prioritized](https://res.cloudinary.com/doaftkgbv/image/upload/v1583773146/ValueVSComplexity_u2inhx.png) based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 


#### MVP

- Sticky header
- Menu item/gallery item on:hover effects
- Render data from api
- Make page mobile responsive  
- Toggle view from grid gallery /landing page to individual review view
- Carousel gallery header
- Deploy on netlify
- Tags

#### PostMVP 

- Staggering the gallery so images are not square grids? 
- On:scroll animation effects CSS
- About page, listing site contributors and mission
- Footer with social links and return to top
- Genre searchability 
- Sorting by date-added, artist name

## Functional Components
- Sticky header nav bar with links 
    - Brand logo links to home page
    - 'Reviews' jumps down the page to 'Recent Reviews'
    - 'About' renders 'About' view (post-MVP)
    
- Footer with social links and return to top 

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger | H | 1hr | 1.5hr | -hr|
| Project Previews | H | 3hr | -hr | -hr|
| Regular Nav | H | H | -hr | -hr|
| Adding Form | H | 1.5hr| -hr | -hr |
| Other sections and flex| M | 4hr | 2hr | -hr|
| Working with API | H | 3hrs| 2hr | -hr |
| Responsive | H | 3hr | -hr | -hr|
| Social Media Icons | L | 1hr | -hr | -hr|
| Total | H | 15.5hrs| -hrs | -hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Hover | L | 3hr | -hr | -hr|
| Banner letters wiggle | L | 1hr | -hr | -hr|
| Interactive Banner | M | 4hr | -hr | -hr|
| Materialize | H | 4hr | -hr | -hr|
| Bootstrap | H | 4hr | -hr | -hr|
| Make own icon | L | 4hr | -hr | -hr|
| Total | H | 20hrs| -hrs | -hrs |

## Additional Libraries
- Vue
- jQuery? 
- Bootstrap

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
