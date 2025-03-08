# Tasks

- maintain both of: Web & Mobile app
- clean code and separate routes in services & utils

## Authorization

-*Protect Routes of APIS*
only users could edit their own [posts, comments, profile...]
only admin could edit all after login

## Authentication
use cookies

### Sign up

- if user didn't confirm, delete it's account

### Login

- display user's location(city, country) and user's device with which he was logged in
- if user is enabled 2fa, he could verify by clicking on link or OPT code

### OTP & Verification

- set up a timer for resend functionalities
- if user didn't verify delete account or keep it as none-user

## Post

post()

- add post with image
- add post with video
- add post with audio
- add post with text only
- add post with link
- add post with quote
Posts detector (user can not post whatever he wants or speak about whatever he wants)

get()

- get posts based on

## Comment + Notification

- when user comment as taginging a friend, page.. send notification to post owner
- when user comment on post, send notification to post owner
