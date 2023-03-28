# Coding Challenge 

**These are your requirements:**

* create a Webpage, that shows a group of Checkboxes    
* create a Checkbox, for the Selection and Deselecction of all the Checkboxes
* create a Script, which makes this Checkbox functional
* print out the current Selection on the Webpage

**What you should take care of:**

* please use git Version Control for your project
* choose any Technology that you would like
* host the project either public or in private mode on a Platform like Github, Gitlab or Bitbucket
* share the project with your Interviewer

## Process

### Research
Never before made a 'select-all' checkbox for other checkboxes so I decided to do a quick googling on how that can be done.

Results: 
- Need a list with references to all checkboxes that should be affected
- Need a button / checkbox to toggle all other checkboxes
- Write some logic to select/deselect according to previous state

### Hammer out MVP
Create a quick tiny html file with necessary checkboxes and javascript to toggle checkboxes. Mostly for visualization, makes it easier for me to think of different ways to use it and break it.
#### Issues at this point
- Only works if all checkboxes have the same checked state, otherwise it's just switching each checkboxes stage
- Selection Values not shown on screen
- Select-All checkbox is still unchecked if all other checkboes are checked manually -> double click necessary
- Select-All checkbox doesn't switch text depending on state
- Select-All unclear goal: Deselect always if 'most' checkboxes are checked? or depend on previous state? or always be Select-All when any checkbox isn't selected?
- Script be messy



