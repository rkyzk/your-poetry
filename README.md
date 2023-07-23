nvm install 16 && nvm use 16

footer icons center
color white icons
change avatar size under 770px
poems col how can I set span 8 but not for Home
``
test search

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
- Conduct tests no. 1-4 with logged out status.
Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|”Home”|Go to “Contact” page|Click “Home”|Redirected to ”Home"|Redirected to ”Home”|pass|2023/7/23|
|2|”Contact”|Go to “Home”|Click “Contact”|Redirected to ”Contact”|Redirected to ”Contact”|pass|2023/7/23|
|3|”Sign in”|Log out if you haven't.  Go to “Home” page|Click “Sign in”|Redirected to ”Sign in” | Redirected to “Sign in”|pass|2023/7/23|
|4|”Sign up”|Go to “Home” page|Click “Sign up”|Redirected to ”Sign up”|Redirected to “Sign up”|pass|2023/7/23|

- For test no. 5-10  sign in with username: admin, password: superuser
Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|5|”dropdown menu”||Click username “admin”|The drowdown menu is displayed.|The drowdown menu is displayed.|pass|2023/7/23|
|6|”My Profile”|Click username “admin”|Click “My Profile”|Redirected to ”My Profile”|Redirected to “My Profile”|pass|2023/7/23|
|7|”My Poems”|Click username “admin”|Click “My Poems”|Redirected to ”My Poems”|Redirected to “My Poems”|pass|2023/7/23|
|8|”Poets I’m following”|Click username “admin”|Click “Poets I’m following”|Redirected to ”Poets I’m following”|Redirected to “Poets I’m following”|pass|2023/7/23|
|9|”Poems I like”|Click username “admin”|Click “Poems I like”|Redirected to ”Poems I like”|Redirected to “Poems I like”|pass|2023/7/23|
|10|”Sign out”|Click username “admin”|Click “Sign out”|Notification “You’ve been signed out” appears.  Redirected to ”Home”|Notification “You’ve been signed out” appears.  Redirected to ”Home”|pass|2023/7/23|

**Navigation bar elements (Top left)**
Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|nav bar elements at logged out status|Log out|Check which elements are displayed.|Links “Poems” and “Search Profiles” are displayed.|Links “Poems” and “Search Profiles” are displayed.|2023/7/23|
|2|nav bar elements at logged in status|Log in|Check which elements are displayed.|Links “Poems,” “Write Poems” and “Search Profiles” are displayed.|Links “Poems,” “Write Poems” and “Search Profiles” are displayed.|pass|2023/7/23|

**Navigation links (Top left)**
- Conduct tests no. 1-6 with logged out status<br>
Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|dropdown menu|--|Click “Poems”|The dropdown menu is displayed.|The dropdown menu is displayed.|pass|2023/7/23|
|2|”New Poems”|click “Poems”|Click “New Poems”|redirected to “New Poems” page.|redirected to “New Poems” page.|pass|2023/7/23|
|3|”Popular Poems”|Click “Poems”|Click “Popular Poems”|Redirected to ”Popular Poems”|Redirected to ”Popular Poems”|pass|2023/7/23|
|4|”Poems by Categories”|Click “Poems”|Click “Poems by Categories”|Redirected to ”Poems by Categories”|Redirected to ”Poems by Categories”|pass|2023/7/23|
|5|”Search Poems”|Click “Poems”|Click “Search Poems”|Redirected to ”Search Poems”|Redirected to ”Search Poems”|pass|2023/7/23|
|6|”Search Profiles”||Click “Search Profiles”|Redirected to ”Search Profiles” | Redirected to “Search Profiles”|pass|2023/7/23|

- Conduct tests no. 7 with logged in status<br>
Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|7|”Write Poems”||Click “Write Poems”|Redirected to ”Write Poems”|Redirected to “Write Poems”|pass|2023/7/23|

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