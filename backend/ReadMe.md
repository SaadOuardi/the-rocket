# Tasks

- maintain both of: Web & Mobile app
- clean code and separate routes in services & utils
- case of servers are not run, display 404 error
-
## Authorization

*Protect Routes of APIS*
only users could edit their own [posts, comments, profile...]
only admin could edit all after login

## Authentication

*Security Improvements*

- HTTP-Only Cookies for better security.
- Protect sensitive endpoints with CSRF protection.
- Use Secure, HttpOnly, and SameSite=strict cookies.

*Account Lockout After Multiple Failed Attempts*
💡 Why? Prevents brute-force attacks
✅ If a user fails 5 times, lock the account for 5-15 minutes
✅ Optional: Send an email alert about suspicious activity

*Device & Session Management*
💡 Why? Let users track and log out from other devices
✅ Store user sessions in database or Redis
✅ Allow users to log out from specific devices

*Role-Based Access Control (RBAC)*
💡 Why? Necessary when adding admin & moderator roles
✅ Users (default permissions: post, comment, like, etc.)
✅ Moderators (delete comments, mute users)
✅ Admins (manage everything)

*Email Change Verification*
💡 Why? Prevents unauthorized email changes
✅ If a user wants to update their email, send an OTP to the old email
✅ Only update if the OTP is verified

*Remember Me (Persistent Login)*
💡 Why? Let users stay logged in without re-entering passwords
✅ Short-lived JWT (1 hour) + Refresh token (30 days)
✅ Store refresh tokens securely in HttpOnly cookies

*User enter last password*
✅ Inform by error message: this password was updated on #date (facebook)

### Sign up

- *think*: if user didn't confirm, delete it's account or set false in a field
*validations*
*features*
- auto random username suggestions

### Login

1*Login form*

- *Verification Email*: display user's location(city, country) and user's device with which he was logged in
- *2fa*: use could verify by clicking on a verification link or enter OTP code

2*Login (OAuth)*
Why? Faster sign-ups & better security
✅ Login via Google, Facebook, Twitter, GitHub
✅ More convenient & reduces friction

### OTP & Verification

- set up a timer for resend functionalities
- if user didn't verify delete account or keep it as none-user
- *Resend Email Feature* Users can resend OTP after a cooldown period of 60 seconds.

### Reset & Set New Password

1- User enters email → receives reset link.
2- Reset link redirects to the Set New Password page.
3- New password is set, and the user is logged in.

*Security*: user can't use same old password || 5 old passwords || name, username in password
*Resend Email Feature*: Users can resend OTP after a cooldown period of 60 seconds.
*features* auto random strong password suggestions

## Post

post()

- add post with image or multiple(gallery)
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
