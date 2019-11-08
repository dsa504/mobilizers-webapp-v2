# DSA New Orleans Mobilizer Program Webapp

This is a webapp for tracking progress of mobilizers in activating new members.

## Things you'll need

* A downloaded copy of this repository.
* A Google account.

## Setup

1. Visit [scripts.google.com](scripts.google.com). 
1. Log in to your Google account if you haven't already. Follow any setup prompts you're given. Once you're in click the 'New Script' button.
1. In the folder on your computer where you downloaded this repository, make a copy of `AppSettings.gs.example` and rename it `AppSettings.gs`. Fill in your spreadsheet ID and a password your mobilizers can use to login.


## Niceties

 If you're actively developing/hacking on this project, you'll quickly notice copying and pasting the contents of files between a text editor and the web interface really sucks. That's when you'll want to start using Clasp. It's a Node.js based CLI tool used to automatically push files from your local environment to your Google Apps Script project. You can install it like so:
    
    ```bash
    npm install @google/clasp -g
    ```

And more documentation can be found [here](https://developers.google.com/apps-script/guides/clasp)
