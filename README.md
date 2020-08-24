# Project Overview

## Project Schedule

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
Back-end deployed URL: https://amusicjournal.herokuapp.com/
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

Link to Cloudinary: 

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
    
- Submit / Edit / Delete / Create Buttons For blog posts when signed in

- Footer with project info and 'return to top'

VIEWS:
- Login view for blog admin
- Intro/landing page
- Regular view of blog posts without log-in
- Create a new blog post form
- Create AWS /image upload drop field (work with backend to configure)


#### MVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger Mobile | H | .5hr | .5hr | .5hr|
| Bootstrap Grid Gallery w/Rendered Data | H | 3hr | -hr | -hr|
| Bootstrap Responsive Nav | H | 2H | -hr | -hr|
| Bootstrap Carousel Header w/rendered Data | H | 3hrs| -hr | -hr |
| Toggling views for logged-in/not logged-in | H | 3hr | -hr | -hr|
| Create views for create new post window | H | 2hrs| -hrs | -hrs |
| Create AWS /image upload drop field | M | 2hrs | -hrs | -hrs |
| Create-a-blog post form | H | 2hrs | -hrs | -hrs |
| Create randomizing images for carousel function in app.js | L | 1rs| -hrs | -hrs |
| Edit Footer | L | 1hr | -hr | -hr|
| Total | H | 20hrs| -hrs | -hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create About Project Page | L | 1hr | -hr | -hr|
| Sorting Functions | L | 3hr | -hr | -hr|
| Stylizing the Gallery on Landing Page | L | 2hr | -hr | -hr|
| Total | H | 6hrs| -hrs | -hrs |

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

