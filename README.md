# chessishard

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
