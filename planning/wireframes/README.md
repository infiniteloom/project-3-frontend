# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Deploy on netlify | Complete
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Design landing page with bootstrap grid gallery | Complete
|Day 3| Continue design of landing page with bootstrap grid gallery | Complete
|Day 3| Design individual review view | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Complete



## Project Description
MUSIC JOURNAL
An app to help visitors discover new music, featuring reviews of albums and interviews with artists. 

USER STORIES:

EDITOR/BLOG ADMIN (logged in)
The editor/blog admin will be able to login and have access to create, edit and destroy articles. 
        
Admin User story #AdminCarla:  
- Carla loves to write about new music.
- She signs in to her blog by entering the url a-music-journal.netlify.app/login and filling in the correct username/password.
- Carla decides she wants to edit her post from last week.
- She scrolls through her gallery and clicks on the album art for the review she wants to edit.
- When her individual review is rendered, she scrolls to the bottom of the post and clicks on the 'edit post' button. Her review view then turns into editable fields. Once she makes her edits, Carla scrolls to the bottom of her post again and is able to click 'save'. 
- When she clicks this 'save' button, she receives a message that her post was updated. 
- Carla then remembers, "I already wrote a review for this album, darn!" and needs to delete the duplicate review. 
- She scrolls to the duplicate review in her grid gallery, clicks through and scrolls to the bottom of the individual review to find the 'edit post' button again. Scrolling to the bottom of the editable fields, she finds the 'delete post' button which she clicks. She is asked if she is sure she wants to delete this post and she clicks 'yes, delete.'
            
PUBLIC USER (not logged in)
Public users will visit the public-facing side of the site (no edit/delete/create options per post) and browse articles on new music. Public users can click through the landing page gallery items to view individual articles.
    
Public User story #Hannah: 
- Hannah is a fan of music. 
- Hannah visits a-music-journal.netlify.app and loads the landing page. 
- She scrolls down to scan the images and titles of new albums she might be interested in and clicks on one image. This image takes her to the view of an individual 

POST MVP:
- Multiple visitors will be able to create accounts, login and leave their comments on reviews. 


INSPIRATION:  
https://www.Pitchfork.com  
https://www.goldflakepaint.co.uk/ 


## App Build-out Links 
[Front-end deployed URL](https://a-music-journal.netlify.app)

[Front-end GitHub Repo](https://github.com/infiniteloom/project-3-frontend)

[Back-end deployed URL](https://amusicjournal.herokuapp.com/)

[Back-end GitHub Repo](https://github.com/infiniteloom/project-3-backend)


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

[Mobile]
- [Landing Page](https://res.cloudinary.com/infiniteloom/image/upload/v1598057061/Unit%2003%20-%20Project/Mobile/landing-page_mobile_udci8u.png)

- [Logged in, post view](https://res.cloudinary.com/infiniteloom/image/upload/v1598057060/Unit%2003%20-%20Project/Mobile/album-review_mobile_uhrizd.png)

[Tablet]
- [Landing Page](https://res.cloudinary.com/infiniteloom/image/upload/v1598057061/Unit%2003%20-%20Project/Mobile/landing-page_mobile_udci8u.png)

- [Logged in, edit post view](https://res.cloudinary.com/infiniteloom/image/upload/v1598047547/Unit%2003%20-%20Project/Web/logged-in-edit-post_ame8wn.png)

[Desktop]
- [Landing Page](https://res.cloudinary.com/infiniteloom/image/upload/v1598047549/Unit%2003%20-%20Project/Web/landing-page_dgtfq9.png)

- [Logged in, edit post view](https://res.cloudinary.com/infiniteloom/image/upload/v1598047547/Unit%2003%20-%20Project/Web/logged-in-edit-post_ame8wn.png)

- [Logged in, view post view](https://res.cloudinary.com/infiniteloom/image/upload/v1598047565/Unit%2003%20-%20Project/Web/logged-in-viewing-post_xua073.png)


Wireframing Resources:

- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

[Time and Priority Matrix](https://res.cloudinary.com/dinqukx6a/image/upload/v1598235735/Project%203/Music_Journal_Front_EndTPM_isr7ab.jpg)

#### MVP

- Sticky header
- Menu item/gallery item on:hover effects
- Render data from api
- Make page mobile responsive  
- Toggle view from grid gallery /landing page to individual review view
- Carousel gallery header
- Deploy on netlify

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
| Bootstrap Grid Gallery w/Rendered Data | H | 3hr | 3hr | 3hr|
| Bootstrap Responsive Nav | H | 2H | 4hr | 4hr|
| Bootstrap Carousel Header w/rendered Data | H | 3hrs| 3hr | 3hr |
| Toggling views for logged-in/not logged-in | H | 3hr | 3hr | 3hr|
| Create views for create new post window | H | 2hrs| 3hrs | 3hrs |
| Create-a-blog post form | H | 2hrs | 4hrs | 4hrs |
| Create randomizing images for carousel function in app.js | L | 1rs| 2hrs | 3hrs |
| Edit Footer | L | 1hr | 4hr | 4hr|
| Total | H | 20hrs| 26.5hrs | 27.5hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create About Project Page | L | 1hr | 2hr | 2hr|
| Sorting Functions | L | 3hr | 3hr | 3hr|
| Stylizing the Gallery on Landing Page | L | 2hr | 2hr | 2hr|
| Total | H | 6hrs| 7hrs | 7hrs |

## Additional Libraries
- Vue
- Quill 
- Bootstrap

## Code Snippet

This function allowed the search field to work. It takes the input and makes it all lower case to match with the data. 

```
    computed: {
        filteredReviews: function () {
            //filtering through each review through the reviews array
            return this.reviews.filter((review) => {
                //if an album search matches the value of the search, it is kept in the array. if not, it is took out
                return review.album_title.toLowerCase().match(this.search.toLowerCase()) || review.artist_name.toLowerCase().match(this.search.toLowerCase())
            })
        }
     }
});
```

## Issues and Resolutions

**ERROR**: Merging issues                               
**RESOLUTION**: Going over the code getting to know what was the issue if it was something with syntax, spacing or just getting to know the merging process. 

