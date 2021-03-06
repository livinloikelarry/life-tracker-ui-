# Week 3 Assignment: Life Tracker

Submitted by: **Yuvia Leon**

Deployed Application: [Lifetracker Deployed Site](ADD_LINK_HERE)

## Application Features

### Core Features

- [x] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [x] If the user is logged in, it should display a **Sign Out** button.
  - [x] If no user is logged in, it should display **Login** and **Register** buttons
  - [x] Display a logo on the far left side, and contain links to the individual detailed activity page.
- [x] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [x] **Login Page:** A form that allows users to login with email and password.
- [x] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [x] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [ ] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [x] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves.
- [x] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge.

**Detailed Activity Page:**

- [ ] The detailed activity page should display a feed of all previous tracked activities.
- [ ] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.)
- [ ] The activity tracked should be given a unique id for easy lookup.
  - [Table Schema](life-tracker-schema.sql)

### Stretch Features

Implement any of the following features to improve the application:

- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

![](http://g.recordit.co/TOoux2VP2U.gif)
![](http://g.recordit.co/Ie5GmfgmxU.gif)
![](http://g.recordit.co/Ju3MDtizYl.gif)
![](http://g.recordit.co/mjvrETkf3e.gif)
^ showing that when a user is not logged in they see a message telling them to log in
![](http://g.recordit.co/Y8wi1YSuqQ.gif)
^ showing the authentication token
![](http://g.recordit.co/3w1PV7uO4Z.gif)
^ made changed to the exercise page
![](http://g.recordit.co/H6DV2l5rZL.gif)
^ my web app does not have a lookup feature on the front end but the backend shows that each activity has a unique id

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes they were helpful in completing the assignment. I felt unprepared to plan out my project. I can learn by watching the videos and working through the labs but planning a project is different because you have to break it down into small steps and be organized

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

If I had more time I would have cleaned up my code because I was beginning to confuse my own self with what I had. I would've liked to have gotten closer to the deployed example that we were given

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I noticed a lot of my peers have begun to master material ui and I think that I will watch some videos and read up on how to use it

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Shoutout to my capstone group for being very kind
