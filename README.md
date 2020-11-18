# chessishard

[Firestore docs](https://googleapis.dev/nodejs/firestore/latest/DocumentSnapshot.html)

### TODO

- [ ] Single page for /editor /review
- [ ] Edit article on single page
- [ ] View count
- [ ] Loading indicator
- [ ] Asset versionx
- [ ] CDN for [static files](https://cloud.google.com/appengine/docs/standard/nodejs/serving-static-files)
- [ ] Delay game gif load














### Single Draft for an Anonymous Session

I want to build an app where user can publish an article. User is anonymous so there is no login or authorization. I set a cookie on the user to identify a session. A session has a draft. 

On every endpoint, restore session:

    If user has cookie
        Restore Session
    Otherwise
        Create Session
        Set Anonymous Cookie
    
Endpoints:

    GET /editor

        Get or create a draft for the current session
        Render draft
