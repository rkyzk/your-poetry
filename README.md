nvm install 16 && nvm use 16

footer icons center
color white icons
change avatar size under 770px
poems col how can I set span 8 but not for Home
category & published dates font css on search poems
``

Installed libraries and dependencies:
npm install react-bootstrap@1.6.3 bootstrap@4.6.0
npm install react-router-dom@5.3.0
npm install axios
npm install react-infinite-scroll-component
npm i react-toastify@9.0.3
npm install jwt-decode
Client origin dev
https://3000-rkyzk-yourpoetry-kp7cuajca1w.ws-us101.gitpod.io/

## Manual Testing

### Testing Features

If logging in is required, log in with username: admin, password: superuser, unless specified otherwise.

Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|Logo link|Go to “Contact” page|Click the logo|Redirected to the home page|Redirected to the home page|pass|2023/7/23|

**Navigation bar elements (Top right)**
Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|nav bar elements at logged out status|Log out|Check if the only links displayed are “Home,” “Contact,” “Sign in” and “Sign out”.|The only links displayed are “Home,” “Contact,” “Sign in” and “Sign out” |The only links displayed are “Home,” “Contact,” “Sign in” and “Sign out” |pass|2023/7/23|
|2|nav bar elements at logged in status|Log in|Check if the only links displayed are “Home,” “Contact” and username “admin” with an avatar.|The only links displayed are “Home,” “Contact” and username “admin” with an avatar.|The only links displayed are “Home,” “Contact” and username “admin” with an avatar.|pass|2023/7/23|

**Navigation links (Top right)**
- Conduct tests no. 1-4 with logged out status.<br>

Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|”Home”|Go to “Contact” page|Click “Home”|Redirected to ”Home"|Redirected to ”Home”|pass|2023/7/23|
|2|”Contact”|Go to “Home”|Click “Contact”|Redirected to ”Contact”|Redirected to ”Contact”|pass|2023/7/23|
|3|”Sign in”|Log out if you haven't.  Go to “Home” page|Click “Sign in”|Redirected to ”Sign in” | Redirected to “Sign in”|pass|2023/7/23|
|4|”Sign up”|Go to “Home” page|Click “Sign up”|Redirected to ”Sign up”|Redirected to “Sign up”|pass|2023/7/23|

- For test no. 5-10  sign in with username: admin, password: superuser<br>

Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---|:---|:---|:---|:---|:---|:---|:---|
|5|”dropdown menu”||Click username “admin”|The drowdown menu is displayed.|The drowdown menu is displayed.|pass|2023/7/23|
|6|”My Profile”|Click username “admin”|Click “My Profile”|Redirected to ”My Profile”|Redirected to “My Profile”|pass|2023/7/23|
|7|”My Poems”|Click username “admin”|Click “My Poems”|Redirected to ”My Poems”|Redirected to “My Poems”|pass|2023/7/23|
|8|”Poets I’m following”|Click username “admin”|Click “Poets I’m following”|Redirected to ”Poets I’m following”|Redirected to “Poets I’m following”|pass|2023/7/23|
|9|”Poems I like”|Click username “admin”|Click “Poems I like”|Redirected to ”Poems I like”|Redirected to “Poems I like”|pass|2023/7/23|
|10|”Sign out”|Click username “admin”|Click “Sign out”|Notification “You’ve been signed out” appears.  Redirected to ”Home”|Notification “You’ve been signed out” appears.  Redirected to ”Home”|pass|2023/7/23|

**Navigation bar elements (Top left)**
Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|nav bar elements at logged out status|Log out|Check which elements are displayed.|Links “Poems” and “Search Profiles” are displayed.|Links “Poems” and “Search Profiles” are displayed.|pass|2023/7/23|
|2|nav bar elements at logged in status|Log in|Check which elements are displayed.|Links “Poems,” “Write Poems” and “Search Profiles” are displayed.|Links “Poems,” “Write Poems” and “Search Profiles” are displayed.|pass|2023/7/23|

**Navigation links (Top left)**
- Conduct tests no. 1-6 with logged out status<br>

Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---|:---|:---|:---|:---|:---|:---|:---|
|1|dropdown menu|--|Click “Poems”|The dropdown menu is displayed.|The dropdown menu is displayed.|pass|2023/7/23|
|2|”New Poems”|click “Poems”|Click “New Poems”|redirected to “New Poems” page.|redirected to “New Poems” page.|pass|2023/7/23|
|3|”Popular Poems”|Click “Poems”|Click “Popular Poems”|Redirected to ”Popular Poems”|Redirected to ”Popular Poems”|pass|2023/7/23|
|4|”Poems by Categories”|Click “Poems”|Click “Poems by Categories”|Redirected to ”Poems by Categories”|Redirected to ”Poems by Categories”|pass|2023/7/23|
|5|”Search Poems”|Click “Poems”|Click “Search Poems”|Redirected to ”Search Poems”|Redirected to ”Search Poems”|pass|2023/7/23|
|6|”Search Profiles”|--|Click “Search Profiles”|Redirected to ”Search Profiles” | Redirected to “Search Profiles”|pass|2023/7/23|

- Conduct tests no. 7 with logged in status<br>

Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|7|”Write Poems”|--|Click “Write Poems”|Redirected to ”Write Poems”|Redirected to “Write Poems”|pass|2023/7/23|

**Links in the Footer**
Test No.| Feature | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
||link to ”facebook” |—|Click the link|Redirected to facebook website| Redirected to facebook website|pass|2023/7/23|
||link to ”twitter” |—|Click the link|Redirected to twitter website| Redirected to twitter website|pass|2023/7/23|
||link to ”instagram” |—|Click the link|Redirected to instagram website| Redirected to instagram website|pass|2023/7/23|

**Sign in page**<br>
Conduct each of tests no. 1-11 with logged out status.
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

**Sign up**<br>
Conduct tests no. 1-7 logged out.
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

**Test Poem Component**
As preparation for test no. 1-9, log in as admin, write a poem with following values and publish:
title: test poem; content: testing if only the first  characters will be displayed in the poem component; category: other

**CHECK WHICH CHARACTERS WILL BE DISPLAYED!!

- Poem Component on Poems page
There are several pages using Poems page, so I decided to test the poem component displayed on "New Poems."<br>

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

**Testing Featured Profiles component**
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

**Poems by Category Page**<br>
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

**Search Poems**<br>
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
|18|error message if no field is entered | Refresh the page, enter no fields. Click search. | A note ‘Please enter at least one field’ is displayed.|A note ‘Please enter at least one field‘ is displayed.|pass|[image1](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-18.png)|2023/7/23|
|19|error message if only spaces are entered | Refresh the page, enter spaces for title, author, and keyword. Click search. | A note ‘Please enter at least one field’ is displayed.|A note ‘Please enter at least one field‘ is displayed.|pass|[image1](./src/assets/manual-testing-screenshots/SearchPoems/SearchPoems-19.png)|2023/7/23|

**Testing Search Profiles**
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


