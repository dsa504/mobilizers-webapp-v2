![enter image description here](http://dsaneworleans.org/mobilizerapp/mobilizer-screen.gif)
## DSA504 Mobilizer Web App

This is a Google Apps Script-based tool designed to help chapters manage a team in reaching out to new members & interested contacts.
- Built to allow mobilization coordinators to easily distribute the work of reaching out to new contacts amongst a team
- Gives Mobilizers a simple, mobile-friendly interface for text/call scripts and recording  responses ([demo here](https://script.google.com/macros/s/AKfycbxDbk6g_Og7kE5tKkUpLnlsmmTsAXtBJDwjydf2PTPlyvSZiSYh/exec), password: *XXX_password_here_XXX* )
- Manage the whole thing from a single spreadsheet- assign contacts to mobilizers and view the responses they recorded in the same sheet! ([demo sheet here](https://docs.google.com/spreadsheets/d/1vHZDimxNvTEgFLYMJG55K5RsMsQiVlWsQEv62_zQFjw/edit#gid=0))
- For more detail on the program and our motivations, see our [guide for Mobilizers](http://dsaneworleans.org/dsa-new-orleans-mobilizer-guide/).

## Basic Setup
- All you'll need to set up the app is a Google account.
- First, create a spreadsheet to hold the mobilizer and contact data; use [this template](https://docs.google.com/spreadsheets/d/1vHZDimxNvTEgFLYMJG55K5RsMsQiVlWsQEv62_zQFjw/edit?usp=sharing) and **make a copy**.

- From the same Google account, use this [Apps Script template](https://script.google.com/d/1PkCQOOvHYiZiY56JHLzX8zCaB0PUcSqHkq56m2Spv0MpG6Z1ZBFi2Hwi/edit?usp=sharing) and **make a copy**. 

- In the Apps Script editor, go to Code.gs and setup the variables for your instance: 
  - **Change** `var SPREADSHEET_ID = 'XXX_spreadsheet_id_XXX';` to the ID of your gSheet copy- this is the long string  in the gSheet url, ex: docs.google.com/spreadsheets/d/**1vHZDimxNvTEgFLYMJG55K5RsMsQiVlWsQEv62_zQFjw**/edit 
  - **Change** `var appPw = 'XXX_password_here_XXX';` to the password you'd like to distribute to your mobilizers. 
- **Deploy** your web app from Apps Scripts by going to Publish->Deploy as web app, with the following settings: 
  - Execute the app as: **Me**
  - Who has access to the app: **Anyone, even anonymous** 
  - Press **Deploy** (you may need to click "allow" on a few permissions settings here). You'll get a url for your new web app, which you can then use with a redirect or an iframe on your existing site (if desired).
  - **Done!**
 
 ## How We Use the App
 ### Setting up the App for New Assignments

The Mobilizer Tracking Sheet controls the app. The template version has five tabs:

-   **Active Tracking Sheet** This is where the magic happens! This is where you’ll add and assign new program members to mobilizers
-   **Archived Mobilizations** We use this to store completed mobilizations for archiving purposes
-   **To Do** This is just a “scratch pad” sheet; feel free to copy+paste or import CSVs into it while you’re preparing them for the Active Tracking Sheet
-   **Mobilizers** This is a sheet tracking the status of current mobilizers (Active, Paused, or Out). “Paused” mobilizers have requested a cycle (or more) off- if you’re starting a new cycle you may want to reach out to them to ask if they’re ready to be added back into the rotation.

 
**WARNING: Do not change the order of these tabs; the app reads directly from them, so re-ordering the tabs by dragging and dropping will break the app.**

  
**TIP:** All changes you make in the Mobilizer Tracking sheet are stored, and can be viewed and undone, like in a Google Doc. So if you mess up and accidentally delete some data or something, don’t panic! You can always click the All changes stored in Drive link at the top of the page to open the version history, and revert to a previous version if necessary.

### Cycle Management
#### Announcing a New Cycle
We run our mobilizer cycles bimonthly- obviously this is just what's convenient for us, and we hope folks will adapt the tool and program to their specific needs. Once data is loaded into the app, it’s a good idea to quickly test everything is working via the web app. If everything checks out, we send the initial cycle announcement message in via a dedicated #mobilizerdesk channel in our slack, containing:

-   **Link to the App**  
    *Seriously, people forget it*
-   **Meetup Locations**  
    *Typically this will be 1-4 public-facing DSA events*
- **Due Date for the initial texts**  
  *Due date for the initial texts are one week after start of cycle*
 
 ##### Example
> @channel Hey folks, our next mobilizer cycle is ready to go! Per
> normal, the app is at (URL).
> 
> We'll be looking to have initial texts out by *Wednesday November
> 21st*.
> 
>   
> 
> Suggested meetup events this cycle are:
> 
> >Medicare-for-All Health Fair + Debt Clinic | Saturday Nov. 17 12-4pm | AL Davis Park, 2600 Lasalle St
> 
> >Fundraiser for Reproductive Justice | Fri. Nov. 30 6-8pm | 2801 N Robertson St
> 
> >Public Film Night: A Strike and an Uprising Friday | Fri Nov. 30 7pm | Zeitgeist, 1618 Oretha Castle Haley
> 
>   
> 
> As always, if you aren't planning on attending one of these events,
> any public DSA event you _are_ attending is a-ok, and if you have any
> problems or questions let me know!

#### Reminders

-   **4-5 days after Cycle Announcement**  
    Post @channel reminder in #mobilizers to send texts. Try to keep these as just a nudge, usually with a emoji-type thing stolen from twitter. 

-   **7-9 days after Cycle Announcement**  
    Send group direct message to people who haven’t sent texts yet. Typically just reaching out is enough. Example:  
    > Hey guys, this just a friendly nudge about getting your mobilizers
    > texts out! (Obviously everybody's schedule has been crazy with the
    > holidays so nbd, just wanted to send a quick reminder)
-   **10-12  days after Cycle Announcement**
Send one-on-one direct message to any holdouts who have yet to text their Program Members. This is a case-by-case thing, but generally it’ll look something like:
    > Hi [Mobilizer]- I had noticed you haven’t contacted your Program
    > Members yet, so I wanted to check in with you. Definitely understand
    > life happens, so if you’d like I can just add your Program Members
    > back into the pool for the next cycle.

-   **12-14  days after Cycle Announcement**
Send @channel message announcing the end of the cycle; generally I’ll also ask for anybody who has still-active Program Members to let me know so that we can leave them in the App. Example:  
     > Hey folks. I'm going to be archiving the current cycle and spinning up
     > the new one this evening, so if you've got people you'd like left in
     > the app, let me know!

## Contact
If you have problems or questions with the app, feel free to reach out at either admin@dsaneworleans.org or to me directly at [@azdak](https://twitter.com/azdak). If you have questions around mobilizing in general, try hello@dsaneworleans.org!
