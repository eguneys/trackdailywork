# Track Daily Work

Simple daily work tracking website.
Add some work that you want to do every day, Check your work as done every day, Track your monthly progress.

# TO-DO

- [ ] Session
- [ ] Endpoints
  - [ ] List work, status
  - [ ] Add work
  - [ ] Remove work
  - [ ] Do work
- [x] Add work
    - [x] Text box for work name
    - [x] Button to add
- [x] List works
  - [x] Label for work name
  - [x] Checkbox for work status
  - [x] Button for remove work
- [ ] Style
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
        Days = 1

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
      Days
      Work []
      Work Done Status []
