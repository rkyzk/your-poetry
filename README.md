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
|1|nav bar elements at logged out status|Log out|Check if the only links displayed are “Home,” “Contact,” “Sign in” and “Sign out”.|The only links displayed are “Home,” “Contact,” “Sign in” and “Sign out” |pass|2023/7/23|
|2|nav bar elements at logged in status|Log in|Check if the only links displayed are “Home,” “Contact” and username “admin” with an avatar.|The only links displayed are “Home,” “Contact” and username “admin” with an avatar.|pass|2023/7/23|

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

- Conduct tests no. 1-6 with logged out status
Test No.| Feature being tested | Preparation Steps if any | Test Steps | Expected results | Actual results | Pass/Fail | Date |
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|1|dropdown menu||Click “Poems”|The dropdown menu is displayed.|The dropdown menu is displayed.|pass|2023/7/23|
|2|”New Poems”|click “Poems”|Click “New Poems”|redirected to “New Poems” page.|redirected to “New Poems” page.|pass|2023/7/23|
|3|”Popular Poems”|Click “Poems”|Click “Popular Poems”|Redirected to ”Popular Poems”|Redirected to ”Popular Poems”|pass|2023/7/23|
|4|”Poems by Categories”|Click “Poems”|Click “Poems by Categories”|Redirected to ”Poems by Categories”|Redirected to ”Poems by Categories”|pass|2023/7/23|
|5|”Search Poems”|Click “Poems”|Click “Search Poems”|Redirected to ”Search Poems”|Redirected to ”Search Poems”|pass|2023/7/23|
|6|”Search Profiles”||Click “Search Profiles”|Redirected to ”Search Profiles” | Redirected to “Search Profiles”|pass|2023/7/23|

- Conduct tests no. 7 with logged in status
|:---| :--- | :--- |:---| :--- | :--- |:---| :--- |
|7|”Write Poems”||Click “Write Poems”|Redirected to ”Write Poems”|Redirected to “Write Poems”|pass|2023/7/23|