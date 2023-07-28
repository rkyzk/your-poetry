nvm install 16 && nvm use 16

category & published dates font css on search poems
``
poemcreate history comment

Installed libraries and dependencies:
npm install react-bootstrap@1.6.3 bootstrap@4.6.0
npm install react-router-dom@5.3.0
npm install axios
npm install react-infinite-scroll-component
npm i react-toastify@9.0.3
npm install jwt-decode
Client origin dev
https://3000-rkyzk-yourpoetry-kp7cuajca1w.ws-us101.gitpod.io/

# Your Poetry

## CONTENTS

* [Overview](#overview)
* [User Stories](#user-stories)
* [Features in Nutshell](#features-in-a-nutshell)
* [Wireframes](#wireframes)
* [Notes on Design](#notes-on-design)
* [Main Technologies Used](#main-technologies-used)
* [Each Part and Function in Detail](#each-part-and-function-in-detail)
* [Manual Testing](#manual-testing)
* [Bugs](#bugs)
* [Aspects to be improved in the future](#aspects-to-be-improved-in-the-future)
* [Deployment Procedure](#depoyment-procedure)
* [Validating CSS, Html code with Tools](#validating-css-html-code-with-tools)
* [Checking Performance and Accessibility](#checking-performance-and-accessibility)
* [Media](#media)
* [Credits](#credits)
- - -

![your-poetry](your-poetry.png)

## Overview
Your Poetry offers an interactive platform where users can share their poems and give/get comments on each other’s poems.  The app is equipped with various features including liking/unliking poems, following/unfollowing profiles as well as searching poems/profiles.  In addition users can also make their own profiles to let others know a few things about themselves.  The app offers users opportunities to be creative, to share their art and to inspire others.

## User Stories

## Features in a Nutshell
In this app users can:
- Sign up for membership
- Sign in to have full access
- Edit one's own profile
- Write, update and delete poems
- Write, update and delete comments on poems
- Like/unlike poems
- Follow/unfollow profiles
- Look at various lists of poems such as recently published poems, popular poems, one's own poems and the poems they've liked
- Look at the list of profiles they've followed.
- Search poems and profiles

## Wireframes
Wireframes for this application can be found [here.](https://wireframe.cc/pro/edit/672331)
Please click on "Homepage" in the upper left corner to see wireframes of different pages.

## Notes on Design
**Fonts**
- For the website title and the headings of the pages, I used ‘Bacasime Antique.’
- For navigation links, labels for input boxes and the contents of poems, I used 'Nanum Myeongj.'
- I chose these two fonts because they both give an artistic ambient.
- For introductory paragraph and notification messages I used ‘Raleway’ since this font is readable and offers an approachable ambient.

**Colors**
- Overall I wanted the website to appear simple, elegant and original.
- I used following colors in different sections:

- Background of navigation bars: light gray, #f8f8f8
- Text color: dark blue, rgb(10, 10, 90)
- Most buttons: olive, #8d7326;
- follow button:  black, #242a3d
- unfollow button: aliceblue
- Footer: dark blue, rgb(10, 10, 90)

- I used dark blue for the text, instead of very commonly used black or dark gray in order to provide originality.
- I used light gray for the background of navigation bars to keep the appearance simple.
- I used olive color for most buttons, because the color provides a nice contrast against dark blue.

## Main Technologies Used
- HTML, CSS, JavaScript
- React.js
- Bootstrap.js

## Manual Testing

### Testing Features

When logging in is necessary, log in with username: admin, password: superuser, unless specified otherwise.

#### Navigation bar elements
**Overall responsiveness** 
Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Image | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|responsiveness of nav bar components|Go to “Home” page|Expand the screen to the max width(1350px) and gradually narrow down to 330px while checking all elements are displayed without any distortion.|All elements appear without any distortion. |All elements appear without any distortion.|pass|[image1 ](NavBarElements/1-1.png)[image2 ](NavBarElements/1-2.png)|2023/7/23|

**Logo**

Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Image | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|2|Logo link|Go to “Contact” page|Click the logo|Redirected to the home page|Redirected to the home page|pass|[image1 ](NavBarElements/1-1.png)[image2 ](NavBarElements/1-2&2.png)|2023/7/23|

**Navigation bar elements (Top right)**

Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|3|nav bar elements when logged out|Log out|Check if the only links displayed are “Home,” “Contact,” “Sign in” and “Sign out”.|The only links displayed are “Home,” “Contact,” “Sign in” and “Sign out” |The only links displayed are “Home,” “Contact,” “Sign in” and “Sign out” |pass|[image](NavBarElements/1-2&2.png)|2023/7/23|
|4|link to ”Home”|Go to “Contact” page|Click “Home”|Redirected to ”Home"|Redirected to ”Home”|pass|2023/7/23|
|5|link to ”Contact”|Go to “Home”|Click “Contact”|Redirected to ”Contact”|Redirected to ”Contact”|pass|2023/7/23|
|6|link to ”Sign in”|Log out if you haven't.  Go to “Home” page|Click “Sign in”|Redirected to ”Sign in” | Redirected to “Sign in”|pass|2023/7/23|
|7|link to ”Sign up”|Go to “Home” page|Click “Sign up”|Redirected to ”Sign up”|Redirected to “Sign up”|pass|2023/7/23|
|8|burger menu|--|Narrow down the screen width and check a burger menu appears at 767px. |A burger menu appears at 767px or below. |A burger menu appears at 767px or below.|pass|[image](NavBarElements/.png)|2023/7/23|
|9|burger menu opens when clicked|--|Click the burger menu. |A menu with 'Home', 'Contact', 'Sign in' and 'Sign out' appears. |A menu with 'Home', 'Contact', 'Sign in' and 'Sign out' appears.|pass|[image](NavBarElements/4.png)|2023/7/23|
|10|Burger menu closes when a link is clicked|--|Click the burger menu and click 'Home'. |The burger menu closes.|The burger menu closes.|pass|[image](NavBarElements/.png)|2023/7/23|
|10|Burger menu closes when outside the menu is clicked|--|Click the burger menu and click outside the menu. |The burger menu closes.|The burger menu closes.|pass|[image](NavBarElements/.png)|2023/7/23|
|10|link "Home" in burger menu functions|--|Click the burger menu and click 'Home'. |Redirected to 'Home.' |Redirected to 'Home.'|pass|[image](NavBarElements/.png)|2023/7/23|
|11|link 'Contact' in burger menu functions|--|Click the burger menu and click 'Contact'. |Redirected to 'Contact.' |Redirected to 'Contact.'|pass|[image](NavBarElements/.png)|2023/7/23|
|12|link 'Sign in; in burger menu functions|--|Click the burger menu and click 'Sign in'. |Redirected to 'Sign in.' |Redirected to 'Sign in.'|pass|[image](NavBarElements/.png)|2023/7/23|
|13|link 'Sign out' burger menu functions|--|Click the burger menu and click 'Sign out'. |Redirected to 'Sign out.' |Redirected to 'Sign out.'|pass|[image](NavBarElements/.png)|2023/7/23|

- For test no. 5-10, sign in with username: admin, password: superuser<br>

Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---|:---|:---|:---|:---|:---|:---|:---|
|5|displayed items|--|Check links 'Home', 'Contact,' an avatar and username 'admin' are displayed.|Links 'Home', 'Contact,' an avatar and username 'admin' are displayed.|Links 'Home', 'Contact,' an avatar and username 'admin' are displayed.|pass|[image]()|2023/7/23|
|5|dropdown menu|--|Click username “admin”|The drowdown menu is displayed.|The drowdown menu is displayed.|pass|2023/7/23|
|6|”My Profile”|Click username “admin”|Click “My Profile”|Redirected to ”My Profile” of admin|Redirected to “My Profile” of admin|pass|2023/7/23|
|7|”My Poems”|Click username “admin”|Click “My Poems”|Redirected to ”My Poems” of admin|Redirected to “My Poems” of admin|pass|2023/7/23|
|8|”Poets I’m following”|Click username “admin”|Click “Poets I’m following”|Redirected to ”Poets I’m following”|Redirected to “Poets I’m following”|pass|2023/7/23|
|9|”Poems I like”|Click username “admin”|Click “Poems I like”|Redirected to ”Poems I like”|Redirected to “Poems I like”|pass|2023/7/23|
|10|”Sign out”|Click username “admin”|Click “Sign out”|Notification “You’ve been signed out” appears.  Redirected to ”Home”|Notification “You’ve been signed out” appears.  Redirected to ”Home”|pass|2023/7/23|
|10|Avatar is absent in the burger menu|Log in. Narrow down the screen below 767px.|Click the burger menu and check the avatar in front of the username is absent.|The avatar is absent.|The avatar is absent.|pass|2023/7/28|
|10|Link "My Profile" in the burger menu|--|Click the burger menu, "admin" and "My Profile."|Redirected to “My Profile” of admin|pass|2023/7/28|
|7|Link ”My Poems” in the burger menu|--|Click the burger menu, "admin" and “My Poems”|Redirected to ”My Poems” of admin|Redirected to “My Poems” of admin|pass|2023/7/28|
|8|Link ”Poets I’m following” in the burger menu|--|Click the burger menu, "admin" and "Poets I'm following"|Redirected to ”Poets I’m following”|Redirected to “Poets I’m following”|pass|2023/7/28|
|9|Link ”Poems I like” in the burger menu|--|Click the burger menu, "admin" and “Poems I like”|Redirected to ”Poems I like”|Redirected to “Poems I like”|pass|2023/7/28|
|10|”Sign out” in the burger menu|--|Click the burger menu, "admin" and “Sign out”|Redirected to ”Home.” Notification “You’ve been signed out” appears.|Redirected to ”Home.” Notification “You’ve been signed out” appears. |pass|2023/7/28|

**Navigation bar elements (Top left)**
Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|displayed elements when logged out|Log out|Check which elements are displayed.|Links “Poems” and “Search Profiles” are displayed.|Links “Poems” and “Search Profiles” are displayed.|pass|2023/7/23|
|2|displayed elements when logged in|Log in|Check which elements are displayed.|Links “Poems,” “Write Poems” and “Search Profiles” are displayed.|Links “Poems,” “Write Poems” and “Search Profiles” are displayed.|pass|2023/7/23|
|1|dropdown menu|log out|Click “Poems”|The dropdown menu is displayed.|The dropdown menu is displayed.|pass|2023/7/23|
|2|”New Poems”|click “Poems”|Click “New Poems”|redirected to “New Poems” page.|redirected to “New Poems” page.|pass|2023/7/23|
|3|”Popular Poems”|Click “Poems”|Click “Popular Poems”|Redirected to ”Popular Poems”|Redirected to ”Popular Poems”|pass|2023/7/23|
|4|”Poems by Categories”|Click “Poems”|Click “Poems by Categories”|Redirected to ”Poems by Categories”|Redirected to ”Poems by Categories”|pass|2023/7/23|
|5|”Search”|Click “Poems”|Click “Search”|Redirected to ”Search” (poems)|Redirected to ”Search” (poems)|pass|2023/7/23|
|6|”Search Profiles”|--|Click “Search Profiles”|Redirected to ”Search Profiles” | Redirected to “Search Profiles”|pass|2023/7/23|
|7|”Write Poems”|log in|Click “Write Poems”|Redirected to ”Write Poems”|Redirected to “Write Poems”|pass|2023/7/23|
|1|responsiveness|Log out|narrow down the screen to 767px.|A burger menu appears.|A burger menu appears.|pass|2023/7/28|
|1|The burger menu opens when clicked.|--|narrow down the screen to 767px.|A burger menu appears.|A burger menu appears.|pass|2023/7/28|
|1|The burger menu closes when a link is clicked.|--|Click the burger menu and click "Search profiles."|A burger menu closes.|A burger menu closes.|pass|2023/7/28|
|1|The burger menu closes when outside the menu is clicked.|--|Click the burger menu and click outside the menu.|A burger menu closes.|A burger menu closes.|pass|2023/7/28|
|1|Link "New Poems" in the burger menu|--|Click the burger menu > 'Poems' > 'New Poems'|Redirected to 'New Poems'|Redirected to 'New Poems'|pass|2023/7/28|
|1|Link "Popular Poems" in the burger menu|--|Click the burger menu > 'Poems' > 'Popular Poems'|Redirected to 'Popular Poems'|Redirected to 'Popular Poems'|pass|2023/7/28|
|1|Link "Poems by Categories" in the burger menu|--|Click the burger menu > 'Poems' > 'Poems by Categories'|Redirected to 'Poems by Categories'|Redirected to 'Poems by Categories'|pass|2023/7/28|
|1|Link "Search" in the burger menu|--|Click the burger menu > 'Poems' > 'Search'|Redirected to 'Search' (poems)|Redirected to 'Search' (poems)|pass|2023/7/28|
|1|Link "Search Profiles" in the burger menu|--|Click the burger menu > 'Search Profiles'|Redirected to 'Search Profiles'|Redirected to 'Search Profiles'|pass|2023/7/28|

#### Footer

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|Displayed elements ||Check facebook, twitter and instagram icons are displayed.|The three icons are displayed.| The three icons are displayed.|pass|2023/7/28|
|2|responsiveness |--|Expand the screen to 1350px (max width on the device used for testing). Narrow down the screen size to 330px, while checking the elements are displayed without any distortion.|The elements are displayed without any distortion.|The elements are displayed without any distortion.|pass|2023/7/28|
|3|link to ”facebook” |—|Click the link|Redirected to facebook website| Redirected to facebook website|pass|2023/7/28|
|4|link to ”twitter” |—|Click the link|Redirected to twitter website| Redirected to twitter website|pass|2023/7/28|
|5|link to ”instagram” |—|Click the link|Redirected to instagram website| Redirected to instagram website|pass|2023/7/28|

#### Sign in page<br>
Stay logged out for tests no. 1-11.

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1| sign in function |—|enter ‘admin’ for username and ‘superuser’ for password. Click ‘Sign in’ |Redirected to “Home”| Redirected to “Home”|pass|2023/7/23|
|2| sign in function |—|enter ‘admin’ for username and ‘superuser’ for password. Click ‘Sign in’ |Redirected to “Home”| Redirected to “Home”|pass|2023/7/23|
|3| validation for name field |—|enter nothing for username and ‘superuser’ for password. Click ‘Sign in’ |validation message says required fields must be filled out.| validation message says “Must include "username" and "password".|pass|2023/7/23|
|4| validation for password field |—|enter admin for username and nothing for password. Click ‘Sign in’ |validation message says required fields must be filled out.| validation message says “The field may not be blank.”|pass|2023/7/23|
|5| validation for username and pasword fields|—|enter nothing for both username and password. Click ‘Sign in’ |validation message says required fields must be filled out.|Validation message says “This field may not be blank.” |pass|2023/7/23|
|6| Validation in case spaces are entered in required fields|—|enter one space for both username and password. Click ‘Sign in’ |validation message says required fields must be filled out.|Validation message says “This field may not be blank.”|pass|2023/7/23|
|7| validation against a wrong password|—|enter admin for username. Enter ‘wrong’ for password. Click ‘Sign in’ |Validation message says either the username or the password is wrong.|Validation says “Unable to log in with provided credentials.” |pass|2023/7/23|
|8| validation when the username is non existent |—|enter ‘test’ for username. enter ‘superuser’ for password. Click ‘Sign in’ |Validation message says either the username or the password is wrong.|Validation says “Unable to log in with provided credentials.”|pass|2023/7/23|
|9| validation: case sensitivity for the username |—|enter ‘Admin’ for username and ‘superuser’ for password. Click ‘Sign in’ |Validation message says either the username or the password is wrong.|Validation says “Unable to log in with provided credentials.”|pass|2023/7/23|
|10| validation: case sensitivity for the password |—|enter ‘admin’ for username and ‘Superuser’ for password. Click ‘Sign in’ |Validation message says either the username or the password is wrong.|Validation says “Unable to log in with provided credentials.” |pass|2023/7/23|
|11| link to sign up page|—|Click the link “Don’t have an account? Sign up now!” |Redirected to “Sign up”|Redirected to “Sign up”|pass|2023/7/23|
|12|responsiveness|—|Expand the screen to 1350px, and gradually norrow it down to 330px, while checking if all elements appear without any distortion.|All elements appear without any distortion.|All elements appear without any distortion.|pass|2023/7/28|
|13|access control|—|Log in and go to "/signin"|Redirected to "Home."|Redirected to "Home."|pass|2023/7/28|

#### Sign up
Stay logged out for tests no. 1-7<br>

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1| sign up function |—|enter ‘user4’ for username and ‘swUf8LcR’ for both password fields. Click ‘Sign up’ |Redirected to “Sign in Page”| Redirected to “Sign in Page”|pass|2023/7/23|
|2| validation (username) |—|enter nothing for username.  Enter ‘swUf8LcR’ for password fields. Click ‘Sign up’ |Validation says required fields must be filled out.| Validation says "This field may not be blank."|pass|2023/7/23|
|3| validation (first password field) |—|enter ‘user5’ for username.  Leave the first password field, and enter ‘swUf8LcR’ for the second password field. Click ‘Sign up’ |Validation says required fields must be filled out.| Validation says "This field may not be blank."|pass|2023/7/23|
|4| validation (second password field) |—|enter ‘user5’ for username.  Enter ‘swUf8LcR’ for the first password field, and leave the second password field. Click ‘Sign up’ |Validation says required fields must be filled out.| Validation says "This field may not be blank."|pass|2023/7/23|
|5| validation (all fields) |—|Leave all fields blank. Click ‘Sign up’ |Validation says required fields must be filled out.| Validation says "This field may not be blank" for all three fields|pass|2023/7/23|
|6| validation (spaces) |—|Enter one space in each field. Click ‘Sign up’ |validation says| validation says|pass|2023/7/23|
|7| validation (common password) |—|Enter “user5” for username and “password” for both password fields. Click ‘Sign up’ |Validation says the password is too common.| Validation says "This password is too common."|pass|2023/7/23|
|8| link to sign in page |-|Click the link "Already have an account? Sign in"|Redirected to "Sign in"|Redirected to "Sign in"|pass|2023/7/23|
|9|responsiveness|—|Expand the screen to 1350px, and gradually norrow it down to 330px, while checking if all elements appear without any distortion.|All elements appear without any distortion.|All elements appear without any distortion.|pass|2023/7/28|
|10|access control|—|Log in and go to "/signup"|Redirected to "Home."|Redirected to "Home."|pass|2023/7/28|

#### Home page

#### Contact Page
Test No.|Feature|Preparation Steps if any|Test Steps|Expected results|Actual results|Pass/Fail|image|Date|
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|Displayed elements.|Click "Contact"|Check if the heading and the text referring to the contact email address is displayed.|The aforementioned elements are displayed.|The aforementioned elements are displayed.|pass|[image](./src/assets/manual-testing-screenshots/Contact/Contact.png)|2023/7/23|
|2|responsiveness|—|Expand the screen to 1350px, and gradually norrow it down to 330px, while checking if all elements appear without any distortion.|All elements appear without any distortion.|All elements appear without any distortion.|pass|2023/7/28|

#### Write poems

|10|access control|—|Log out and go to "/poems/create"|Redirected to "Home."|Redirected to "Home."|pass|2023/7/28|

#### Edit and delete poems

#### Poem Component
As preparation for tests no. 1-9, log in as admin, write a poem with following values and publish:
title: test poem; content: testing if only the first  characters will be displayed in the poem component; category: other

**CHECK WHICH CHARACTERS WILL BE DISPLAYED!!

- Poem Component on Poems page
There are several pages using Poems page, so I tested the poem component displayed on "New Poems."<br>

Test No.|Feature|Preparation Steps if any|Test Steps|Expected results|Actual results|Pass/Fail|Date|
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1| displayed element |Go to “New Poems”|Check if the title, author, published date and the first 60 characters of the content are displayed. |’test poem’ is displayed on the top of the list, and the title, author, published date and the first 60 characters of the content are displayed. | ’test poem’ is displayed on the top of the list, and the title, author and the first 60 characters of the content are displayed|pass|2023/7/23|
|2| link (title) |Go to “New Poems”| click the title ‘test poem’ |Redirected to the poem page of ‘test poem.’ | Redirected to the poem page of ‘test poem.’ |pass|2023/7/23|
|3| link (author) |Go to “New Poems”| Click the author ‘admin’ of ‘test poem’|The admin’s profile page is displayed. | The admin’s profile page is displayed.|pass|2023/7/23|
|4| like icon tooltip | go to “New Poems” |Bring the cursol over the heart icon for ‘test poem’ | A tooltip message says ‘You can’t like your own poem!’|A tooltip message says ‘You can’t like your own poem!’|pass|2023/7/23|
|5| link (comment icon) | go to “New Poems” |click the comment icon for ‘test poem’ | Redirected to the poem page of ‘test poem’| Redirected to the poem page of ‘test poem’|pass|2023/7/23|
|6| like icon tooltip | log out and go to “New Poems” |Bring the cursol over the heart icon for ‘test poem’ | A tooltip message says ‘Log in to like poems!’|A tooltip message says ‘Log in to like poems!’|pass|2023/7/23|
|7| link (comment icon) | go to “New Poems” |click the comment icon for ‘test poem’ | Redirected to the poem page of ‘test poem’| Redirected to the poem page of ‘test poem’|pass|2023/7/23|
|8| like function  | log in as user1 and go to “New Poems” |Click the heart icon for ‘test poem’ | The heart icon will turn to pink and the likes count will change from 0 to 1.|The heart icon turns to pink and the likes count changes from 0 to 1.|pass|2023/7/23|
|9| unlike function | go to “New Poems” |Click the heart icon for ‘test poem’ | The heart icon will turn from pink to transparent and the likes count will change from 1 to 0.|The heart icon will turn from pink to transparent and the likes count will change from 1 to 0.|pass|2023/7/23|

- Poem Component on Poem page (the individual poem page versus poems page)<br>

Test No.|Feature|Preparation Steps if any|Test Steps|Expected results|Actual results|Pass/Fail|Date|
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1| displayed element |Log in as admin.  Go to “/poems/” (‘test poem’s id is )|Check if the title, author, published date, the whole content, category are displayed.  Also three dots for editing are displayed at the top right corner. |The title, author, published date, the whole content, category as well as the three dots are displayed. | The title, author, published date, the whole content, category as well as the three dots are displayed. |pass|2023/7/23|
|2| link (author) || Click the author ‘admin’ |The admin’s profile page is displayed. | The admin’s profile page is displayed.|pass|2023/7/23|
|3| three dots menu || Click the three dots |The edit and delete icons are displayed. | The edit and delete icons are displayed.|pass|2023/7/23|
|4| like icon tooltip for owner | |Bring the cursol over the heart icon for ‘test poem’ | A tooltip message says ‘You can’t like your own poem!’|A tooltip message says ‘You can’t like your own poem!’|pass|2023/7/23|
|4| like icon tooltip for logged out users | log out|Bring the cursol over the heart icon for ‘test poem’ | A tooltip message says ‘Log in to like poems!’|A  tooltip message says ‘Log in to like poems!’|pass|2023/7/23|
|8|no three dots are displayed for other users| log in as user1 and go to “/poems/” |Check the three dots are not displayed. | The three dots are not displayed.|The three dots are not displayed.|pass|2023/7/23|
|8| like function  |--|Click the heart icon for ‘test poem’ | The heart icon will turn to pink and the likes count will change from 0 to 1.|The heart icon turns to pink and the likes count changes from 0 to 1.|pass|2023/7/23|
|9| unlike function | go to “poems/” |Click the heart icon for ‘test poem’ | The heart icon will turn from pink to transparent and the likes count will change from 1 to 0.|The heart icon will turn from pink to transparent and the likes count will change from 1 to 0.|pass|2023/7/23|

#### PoemsPage
- I tested PoemsPage on "New Poems."

Test No.|Feature|Preparation Steps if any|Test Steps|Expected results|Actual results|Pass/Fail|Date|
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|| infinit scroll | go to “New Poems” |scroll down to bottom | Loading icon appears, and  will be displayed.|Loading icon appears, and then  are displayed.|pass|2023/7/28|

#### New Poems
Test No.|Feature|Preparation Steps if any|Test Steps|Expected results|Actual results|Pass/Fail|Date|
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|| Displayed elements | go to “New Poems” |Check which elements are displayed. | Heading "", poems are featured profiles are displayed.| are displayed.|pass|2023/7/28|
|| Correct poems are filtered | go to “New Poems” |Check which poems are displayed. | are displayed.| are displayed.|pass|2023/7/28|
|9|responsiveness|—|Expand the screen to 1350px, and gradually norrow it down to 330px, while checking if all elements appear without any distortion.|All elements appear without any distortion.|All elements appear without any distortion.|pass|2023/7/28|

#### Poems by Category Page
As Preparation<br>
1. go to admin panel
2. click Poems, set categories of the poems as follows: poem 2 —> nature; poem 3 —> love; poem 4 —> people; poem 5 —> humor
3. delete all other poems except for poem 1-6.<br>

Test No.|Feature|Preparation Steps if any|Test Steps|Expected results|Actual results|Pass/Fail|Date|
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1| displayed element |Go to “Poems by Categories”|Check if the navbars, heading “Choose a category,” the choices (‘nature,’ ‘love,’ ‘people’, ‘humor,’ ‘haiku’ and ‘other’) as well as featured profiles are displayed. |All mentioned elements are displayed. | All mentioned elements are displayed. |pass|2023/7/23|
|2|filtering by ‘nature’ | Click ‘nature’ |poem 2 is displayed. | poem 2 is displayed.|pass|2023/7/23|
|2|filtering by ‘love’ | Click ‘nature’ |poem 3 is displayed. | poem 3 is displayed.|pass|2023/7/23|
|2|filtering by ‘people’ | Click ‘people’ |poem 4 is displayed. | poem 4 is displayed.|pass|2023/7/23|
|2|filtering by ‘humor’ | Click ‘humor’ |poem 5 is displayed. | poem 5 is displayed.|pass|2023/7/23|
|2|filtering by ‘haiku’ | Click ‘haiku’ |poem 6 is displayed. | poem 6 is displayed.|pass|2023/7/23|
|2|filtering by ‘other’ | Click ‘other’ |’poem 1’ is displayed. |’poem 1’ is displayed.|pass|2023/7/23|
|9|responsiveness|—|Expand the screen to 1350px, and gradually norrow it down to 330px, while checking if all elements appear without any distortion.|All elements appear without any distortion.|All elements appear without any distortion.|pass|2023/7/28|

#### Search Poems
For tests no. go to admin panel and prepare poems as follows.  Delete all other poems.

author|title|content|category|published date|
|:---| :--- | :--- |:---| :--- |
|user1|poem 1| content| other|2022/07/22|
|user2|poem 2 title| nature poem content| nature|2022/07/23|
|user3|poem 3 title| love poem content| love|2023/04/23|
|user3|poem 4 keyword| people poem content| people|2023/04/24|
|user3|poem 5| humor poem content keyword| humor|2023/06/22|
|user3|poem 6| haiku content| haiku|2023/06/23|
|admin|poem 7| content| other|2023/07/08|
|admin|poem 8| content| other|2023/07/09|

Test No.|Feature|Preparation Steps if any|Test Steps|Expected results|Actual results|Pass/Fail|images|Date|
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |:--- |
|1|displayed elements|Go to “Search Poems”|Check if the navbars, heading “Search Poems” and input fields (‘author contains,’ ‘title contains,’ ‘title/content contains,’), category dropdown, ‘published date’ dropdown and the search button are displayed. |All mentioned elements are displayed. | All mentioned elements are displayed. |pass|[image](https://github.com/rkyzk/your-poetry/blob/main/src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-1.png)|2023/7/23|
|2|search by ‘author’|--|Enter user3 for author. Click search. | poem 3, 4, 5 and 6 are displayed.|poem 3, 4, 5 and 6 are displayed.|pass|[image1 ](https://github.com/rkyzk/your-poetry/blob/main/src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-2-1.png)[image2 ](https://github.com/rkyzk/your-poetry/blob/main/src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-2-2.png)[image3 ](https://github.com/rkyzk/your-poetry/blob/main/src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-2-3.png)|2023/7/23|
|3|search by ‘title’|--|Enter ‘title’ for title and click search. | Only poem 2 and 3 are displayed.|Only poem 2 and 3 are displayed.|pass|[image1 ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-3-1.png)[image2](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-3-2.png)|2023/7/23|
|4|search by ‘title/content (keyword)’|--|Enter ‘keyword’ for keyword. Click search. |poem 4 and 5 are displayed.|poem 4 and 5 are displayed.|pass|[image1 ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-4-1.png)[image2](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-4-2.png)|2023/7/23|
|5|search by ‘category’|--|Enter ‘nature’ for category. Click search. |poem 2 is displayed.|poem 2 is displayed.|pass|[image ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-5.png)|2023/7/23|
|6|search by ‘category’|--|Enter ‘love’ for category. Click search. | poem 3 is displayed.|poem 3 is displayed.|pass|[image ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-6.png)|2023/7/23|
|7|search by ‘category’|--|Enter ‘people’ for category. Click search. | poem 4 is displayed.|poem 4 is displayed.|pass|[image ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-7.png)|2023/7/23|
|8|search by ‘category’|--|Enter ‘humor’ for category. Click search. | poem 5 is displayed.|poem 5 is displayed.|pass|[image ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-8.png)|2023/7/23|
|9|search by ‘category’|--|Enter ‘haiku’ for category. Click search. | poem 6 is displayed.|poem 6 is displayed.|pass|[image ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-9.png)|2023/7/23|
|10|search by ‘category’|--|Enter ‘other’ for category. Click search. | poem 1, 7 and 8 are displayed.|poem 1, 7 and 8 are displayed.|pass|[image1 ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-10-1.png)[image2](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-10-2.png)|2023/7/23|
|11|search by ‘published date’|--|choose ‘past one year’.  Click search. | poem 2-8 are displayed.|poem 2-8 are displayed.|pass|[image1 ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-11-1.png)[image2 ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-11-2.png)|[image3 ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-11-3.png)[image4](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-11-4.png)|2023/7/23|
|12|search by ‘published date’|--|choose ‘past 90 days.’ Click search. | poem 4-8 are displayed.|poem 4-8 are displayed.|pass|[image1 ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-12-1.png)[image2 ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-12-2.png)|[image3 ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-12-3.png)|2023/7/23|
|13|search by ‘published date’|--|choose ‘past 30 days.’ Click search. | poem 6-8 are displayed.|poem 6-8 are displayed.|pass|[image1 ](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-13-1.png)[image2](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-13-2.png)|2023/7/23|
|14|search by ‘published date’|--|choose ‘past 14 days.’ Click search. | poem 8 is displayed.|poem 8 is displayed.|pass|[image1](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-14.png)|2023/7/23|
|15|search non existent poem |—| enter ‘non existent poem’ for title and click search. | A note ‘No results found’ is displayed.|A note ‘No results found’ is displayed.|pass|[image1](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-15.png)|2023/7/23|
|16|search by multiple factors |—| enter title for title, love for category. |poem 3 is displayed.|poem 3 is displayed.|pass|[image1](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-16.png)|2023/7/23|
|17|search by multiple factors-2 |—|choose ‘other’ for category‘ and ‘past 14 days’ for published date.  Click search. | poem 8 is displayed.|poem 8 is displayed.|pass|[image1](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-17.png)|2023/7/23|
|18|error message if no field is entered | Refresh the page| Enter no fields. Click search. | A note ‘Please enter at least one field’ is displayed.|A note ‘Please enter at least one field‘ is displayed.|pass|[image1](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-18.png)|2023/7/23|
|19|error message if only spaces are entered|Refresh the page|enter spaces for title, author, and keyword. Click search. | A note ‘Please enter at least one field’ is displayed.|A note ‘Please enter at least one field‘ is displayed.|pass|[image1](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-19.png)|2023/7/23|
|9|responsiveness|—|Expand the screen to 1350px, and gradually norrow it down to 330px, while checking if all elements appear without any distortion.|All elements appear without any distortion.|All elements appear without any distortion.|pass|2023/7/28|

#### My Poems
- Log in as admin and go to "My poems"
- Write a new poem with the following values--title: 'unpublished poem'; content: 'content'; category: 'other' and click 'Save as draft'.

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail |images| Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- | :--- |
|1|displayed elements|--|Check the heading "My poems" and poems are displayed. |The heading "My poems" and poems are displayed.|The heading "My poems" and poems are displayed.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/MyPoems/MyPoems-1&2.png)|2023/7/26|
|2|Correct poems (including unpublished poems) are displayed in the right order.|--|Check 'unpublished poem', 'poem 8' and 'poem 7' are displayed in the order.|'unpublished poem', 'poem 8' and 'poem 7' are displayed in the order.|'unpublished poem', 'poem 8' and 'poem 7' are displayed in the order.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/MyPoems/MyPoems-1&2.png)|2023/7/26|

- For test no. 3, delete all three poems by admin.

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail |images| Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- | :--- |
|3|message when no poems|--|Check the message "You haven't written any poems." is displayed.|Check the message "You haven't written any poems." is displayed.|Check the message "You haven't written any poems." is displayed.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/MyPoems/MyPoems-1&2.png)|2023/7/26|    ------------------IMAGE NEEDED!!!!

#### Poems I like

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail |images| Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- | :--- |
|1|displayed elements|--|Check the heading "Poems I like" and poems are displayed. |The heading "Poems I like" and poems are displayed.|The heading "Poems I like" and poems are displayed.|pass|[image]()|2023/7/28|
|2|Correct poems are displayed in the right order.|--|Check 'unpublished poem', 'poem 8' and 'poem 7' are displayed in the order.|'unpublished poem', 'poem 8' and 'poem 7' are displayed in the order.|'unpublished poem', 'poem 8' and 'poem 7' are displayed in the order.|pass|[image]()|2023/7/26|
|3|responsiveness|—|Expand the screen to 1350px, and gradually norrow it down to 330px, while checking if all elements appear without any distortion.|All elements appear without any distortion.|All elements appear without any distortion.|pass|2023/7/28|

#### Featured Profiles component**
Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1| Profiles are correctly filtered. |Go to “Home”|Check if user1, 2 and 3 are displayed. |user1, 2 and 3 are displayed.| user1, 2 and 3 are displayed.|pass|2023/7/23|
|2| Displayed elements |—|Check if the avatar, name, poems count and followers count are displayed. |The avatar, name, poems count and followers count are displayed.| the avatar, name, poems count and followers count are displayed.|pass|2023/7/23|
|3| follow/unfollow buttons are dipslayed for logged in users |log in as admin|Check if ‘follow’ buttons are displayed for each featured profile. |follow’ buttons are displayed.| follow’ buttons are displayed.|pass|2023/7/23|
|4| follow function |—|Click ‘follow’ of the top profile. | The follower count will change from 0 to 1.  The button will say ‘unfollow.’ | The follower count changes from 0 to 1.  The button says ‘unfollow.’.|pass|2023/7/23|
|5| unfollow function |—|Click ‘unfollow’ of the top profile. | The follower count will change from 1 to 0.  The button will say ‘follow.’ | The follower count changes from 0 to 1.  The button says ‘follow.’.|pass|2023/7/23|

As preparatory steps for test no. 6:<br>
1. log in as user1.  
2. Confirm in the featured profiles section that the poem count is 1. 
3. Write a poem with title: ‘poem count test’; content: content; category: other

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|6| poems count |—|Check poems count | The poems count has turned to 2. | The poems count has turned to 2. |pass|2023/7/23|

- Featured Profiles on small screen<br>

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1| alignment |Go to “Home”|Check if user1, 2 and 3 are displayed side to side. |user1, 2 and 3 are displayed side to side.| user1, 2 and 3 are displayed side to side.|pass|2023/7/23|
|2| displayed elements |—|Check if avatar, name and poems count are displayed. |Avatar, name and poems count are displayed.| Avatar, name and poems count are displayed.|pass|2023/7/23|

#### Search Profiles
Test No.|Feature|Preparation Steps if any|Test Steps|Expected results|Actual results|Pass/Fail|Date|
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|displayed elements|Go to "search profiles"|Check if navbars, the heading "Search Profiles" and an input box are displayed.|All aformentioned elements are displayed.|All aformentioned elements are displayed.|pass|2023/7/23|
|2|Correct profiles are filtered|--|Enter user1 (type fast--don't pose longer than 1 second inbetween.) and wait.|The profile of user1 is displayed.|The profile of user1 is displayed.  After that many more profiles are displayed for a moment, and then only user1 will be displayed again.|fail|2023/7/23|
|3|Display 'No profiles found with the name.' when no matches are found.|--|Enter testuser (type fast--don't pose longer than 1 second inbetween.) and wait.|A note 'No profiles found with the name.' is displayed.|A note 'No profiles found with the name.' is displayed.  After that many profiles are displayed for a moment, and then the note appears again.|fail|2023/7/23|
|4|The search will not run if only spaces are entered.|--|Enter a space and wait.|The search will not run.|The search was run, and profiles were displayed.|fail|2023/7/23|

Tests no. 2 and 3 failed -- this will be discussed later. 
To fix the bug found in test no. 4, I rewrote the code in useEffect after line 17 in SearchProfiles.js.  I conducted the test again as follows:<br>

Test No.|Feature|Preparation Steps if any|Test Steps|Expected results|Actual results|Pass/Fail|Date|
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|5|The search will not run if only spaces are entered.|--|Enter a space and wait.|The search doesn't run.|The search didn't run.|pass|2023/7/23|

#### Profile page (individual profile page)
As preparation for following tests: 
1. go to sign up page and sign up with the following credentials: username: newuser; password: swUf8LcR
2. Sign in as newuser and go to “/profiles/14” (as 14 is the id of newuser)

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail |images| Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- | :--- |
|1|displayed elements|—|Check if heading "My Profile," default photo for avatar, newuser for name, the date joined (today, July 24th 2023), three dots for editing, poems and followers counts (0) are displayed. Check also the message 'No published poems yet' for 'Poems by this Writer' section is displayed. |All aforementioned elements are displayed.| All aforementioned elements are displayed.|pass|2023/7/24|
|2|three dots menu|—|Click the three dots. |A menu for editing is displayed.| A menu for editing is displayed.|pass|2023/7/24|

As preparation for tests no. 3 and 4:
1. go to “Write poems,” write a new poem (title: test profile component; content: content; category: other) and publish.

|3| poems count|—|Check poems count. |The count has changed from 0 to 1.| The count has changed from 0 to 1.|pass|2023/7/24|
|4| Poems by this writer |—|Check the poem ‘test profile component’ is displayed.  |The poem‘test profile component’ is displayed. |The poem ‘test profile component’ is displayed. |pass|2023/7/24|

As preparation for test no. 5,
1. click on three dots to edit the profile, choose edit profile
2. write in 'display name' for display name “about me content” for “about me” field and “favorites content” for “favorites” field

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail |images| Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- | :--- |
|5| displayed elements|—|Check that the contents for “about me” and “favorites” sections are displayed. |All aforementioned elements are displayed.| All aforementioned elements are displayed.|pass|2023/7/24|

(profile edit page will be tested in more details later)

As preparation for test no. 6-8,
1. Log in as admin and go to "/profiles/14"

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail |images| Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- | :--- |
|6|displayed elements for users other than the owner|—|Check that the heading "My Profile" and three dots for editing aren't displayed and that “follow” button is displayed. |The heading "My Profile" and three dots for editing aren't displayed. “follow” button is displayed.| The heading "My Profile" and three dots for editing aren't displayed. “follow” button is displayed.|pass|2023/7/24|
|7|follow function|Click “follow”|Check if “unfollow” button is displayed and the follower count is 1. |”unfollow” button is displayed. The follower count has changed from 0 to 1.| ”unfollow” button is displayed. The follower count has changed from 0 to 1.|pass|2023/7/24|
|8| unfollow function|Click “unfollow”|Check if “follow” button is displayed and the followers count is 0. |”follow” button is displayed. The follower count has changed from 1 to 0.| ”follow” button is displayed. The follower count has changed from 1 to 0.|pass|2023/7/24|

For test no. 9, log out.

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail |images| Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- | :--- |
|6|displayed elements for logged out users|—|Check that “follow/unfollow” button is not displayed. |“follow/unfollow” button is not displayed.| “follow/unfollow” button is not displayed.|pass|2023/7/24|

#### Profile Editing (Profile edit, change username, change password pages)
1. log in as newuser and go to "My Profile." 
- Notice the functionality for updating the display name, about me, favorites fields has been already tested in no. 5 in the previous Profile Page section. 

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail |images| Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- | :--- |
|1|'edit profile' option leads to Profile edit page|—|Click the three dots and choose 'edit profile.'|Redirected to profile edit page with URL '/profiles/14/edit'.| Redirected to profile edit page with URL '/profiles/14/edit'.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-1.png)|2023/7/25|
|2|cancel button|—|change display name to ‘display name updated,’ and click ‘cancel.’ |Redirected to ProfilePage.  The name remains ‘display name.’| Redirected to ProfilePage.  The name remains ‘display name.’|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-2.png)|2023/7/25|
|3|Image can be updated.|—|Click 'Choose File,' select 'test-profile.jpg and click 'save'.|Redirected to profile Page. The avatar has changed to test-profile.jpg.| Redirected to profile Page. The avatar has changed to test-profile.jpg.|pass|[image1 ](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-3-1.png)[image2](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-3-2.png)|2023/7/25|
|4|file size validation|—|choose ‘test_image_validation.jpg’ and click 'save'. |Error message "File larger than 800KB can't be uploaded." will be displayed.| Error message ‘’ is displayed.|pass|[image1 ](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-4-1.png)[image2](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-4-2.png)|2023/7/25|
|5|image height validation|—|choose ‘image_height_1280.jpg’ and click 'save'.|Error message "Image with height over 1000px can't be uploaded" will be displayed.| Error message "Image with height over 1000px can't be uploaded"  is displayed.|pass|[image1 ](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-5-1.png)[image2](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-5-2.png)|2023/7/25|
|6|image height validation|—|choose ‘image_width_1300.jpg’ and click 'save'.|Error message "Image with width over 1000px can't be uploaded" will be displayed.| Error message "Image with width over 1000px can't be uploaded" is displayed.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-6.png)|2023/7/25|

- Go back to "/profiles/14" and click the three dots.

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail |images| Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- | :--- |
|7|option 'change username' leads to the right page|—|Click 'change username'|Page "Change username" is displayed.| Page "Change username" is displayed.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-7.png)|2023/7/25|
|8|username can be changed|—|Enter newuserchanged for username and click 'save'.|Redirected to Profile Page.  Next to the avatar at the top right corner of the page, the new username 'newuserchanged' is displayed.|Redirected to Profile Page.  Next to the avatar at the top right corner of the page, the new username 'newuserchanged' is displayed.|pass|[image1 ](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-8-1.png)[image2](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-8-2.png)||2023/7/25|
|9|cancel button|—|Enter newuserchanged for username and click 'save'.|Redirected to Profile Page.  Next to the avatar at the top right corner of the page, the new username 'newuserchanged' is displayed.|Redirected to Profile Page.  Next to the avatar at the top right corner of the page, the new username 'newuserchanged' is displayed.|pass|[image1 ](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-9-1.png)[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-9-2.png)||2023/7/25|

- Go back to "/profiles/14" and click the three dots.

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail |images| Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- | :--- |
|10|option 'change password' leads to the right page|—|Click 'change password'|Page for changing password is displayed.| Page for changing password is displayed.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-10.png)|2023/7/25|
|11|password can be changed|—|Enter 'xxffww123' for both password fields and click 'save'.|Redirected to Profile Page.  A toast message "Your password has been changed" will appear.|Redirected to Profile Page.  A toast message "Your password has been changed" will appear.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-11.png)|2023/7/25|
|11-2|password can be changed|—|Log out and log in as 'newuserchanged' with password 'xxffww123'.|Sign in happens succesfully.|Sign in happens succesfully.|pass|--|2023/7/25|
|12|password validation--two blank fields|—|leave both fields blank and click 'save'.|Error message will tell the fields must not be blank.|Error messages "This field may not be blank." appear for both fields.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-12.png)|2023/7/25|
|13|password validation--one blank field|—|enter 'xxffww456' for the first field, leave the second field blank and click 'save'.|Error message will tell the fields must not be blank.|Error message "This field may not be blank." appears below the second password field.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-13.png)|2023/7/25|
|14|password validation--contradicting input|—|enter 'xxffww456' for the first field, enter 'xxffww789' and click 'save'.|Error message will tell the passwords don't match.|Error message says "The two password fields didn’t match."|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-14.png)|2023/7/25|
|15|password validation--too common password|—|enter 'password' for both fields and click 'save'.|Error message will tell the password is too common.|Error message says "The password is too common."|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-15.png)|2023/7/25|
|16|cancel button|—|Enter 'xxffww000' for both fields and click 'cancel'.|Redirected to Profile Page.  Toast message "You canceled. Your password remains the same" appears. |Redirected to Profile Page.  Toast message "You canceled. Your password remains the same" appears.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/ProfileEdit/ProfileEdit-16.png)|2023/7/25|

#### Poets I'm following
- Log in as admin and go to "Poets I'm following"

Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail |images| Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- | :--- |
|1|displayed elements|--|Check the heading "Poets I'm following" is displayed. |The heading "Poets I'm following" is displayed.|The heading "Poets I'm following" is displayed.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/PoetsImFollowing/PoetsImFollowing-1&2.png)|2023/7/26|
|2|message if no followed poets|--|Check if the message says "You haven't followed anyone." |The message says "You haven't followed anyone."|The message says "You haven't followed anyone."|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/PoetsImFollowing/PoetsImFollowing-2&2PoetsPoe.png)|2023/7/26|

- Go to "Home" and click the follow button for user1 and user2 and go back to "Poets I'm following"
|3|correct profiles are filtered|--|Check if the profiles of user1 and of user2 are displayed. |The profiles of user1 and of user2 are displayed.|The profiles of user1 and of user2 are displayed.|pass|[image](https://github.com/rkyzk/manualtests-your-poetry/blob/main/screenshots/PoetsImFollowing/PoetsImFollowing-3.png)|2023/7/26|

#### Sign out function (no page)

## 





