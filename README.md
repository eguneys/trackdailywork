# Track Daily Work

Simple daily work tracking website.
Add some work that you want to do every day, Check your work as done every day, Track your monthly progress.

# TO-DO

- [x] Session
- [x] Endpoints
  - [x] List work, status
  - [x] Add work
  - [x] Remove work
  - [x] Do work
  - [x] Next day for user
    - [x] Error on too often
- [ ] Home Page
  - [x] Label for current day
  - [x] Button for next day
  - [x] List works
    - [x] Label for work name
    - [x] Checkbox for work status
    - [x] Button for remove work
  - [x] Add work
      - [x] Text box for work name
      - [x] Button to add
- [ ] Style
  - [ ] Alignment
  - [ ] Font
  - [ ] Color
  - [ ] Layout
  - [ ] Spinner
  - [ ] Flash Error message
- [ ] Daily
  - [ ] Reset daily
  - [ ] Save daily progress
- [ ] Show monthly progress


# Model

    Work
        Id
        User Id
        Name

    Default Work
        Id = 1
        Name = Get up
        Status = Done

    Work Done Status
        Work Id
        User Id
        Day

    Default Work Done Status
        Work Id = 1

    ? Daily Progress
        Work Done Status []
            Default Work Done Status

    User
      LastDaysUpdated
      Days
      Work []
      Work Done Status []
