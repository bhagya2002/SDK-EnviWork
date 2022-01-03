# SDG Task List

A project by Sustainability Squad for HackED Beta 2021.

We wanted to create a simple task list geared towards environmentally friendly tasks, to encourage individual responsibility and awareness about climate change through basic gamification.

## Functionality

Current functionalities are:
* Sign-up/log-in system with password hashing
* Functional task list with complete and incomplete buttons that give the user points
* Functionality to delete tasks
* Weather widget display
* Example task display (not finished; intended to generate sample tasks that could be automatically added to the list)

What's next for SDG task list:
* Implementing generation of more environmentally friendly tasks for long-term use.
* To make it more gamified and usable over the long term, we want to make tasks reset over a period of time. We planned out the implementation of this feature but ran out of time.

## Accomplishments we're proud of

* Quickly became familiar with Flask (relatively new to all of us), HTML, and CSS (relatively new to most of us).
* Created a working project on a tight timeframe.

## Steps to run the program

1. run the following in terminal to install the neeeded packages:
```
pip3 install flask flask-login flask-sqlalachemy
```
2. To start the program run:
```
python3 main.py
```

## Information and background in flask

- **init**.py is a file that initalizes the web app
- main.py is the file that runs the web app
- routes.py is the file that defines the routes (links to other pages)
- templates folder is where all the html files will be stored
- models.py is where all the database models (schema) will be stored
- auth.py is where all the authentication code will be stored
- hashing function, a fucntion that does not have an inverse for itself (secure)
  - can generate the same y with x, however, cannot go back to x from y
