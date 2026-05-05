Changes we are making:


\---------------------------------------------------------------------



* 1 - Focus on view-live - This section timeline needs to behave like a GALLERY that reads all media (image and video) located inside 'C:\\Users\\Kudzanai\\Documents\\2025\\App Developments\\Yarona FM App\\Assets\\Promos' so I can add and remove media and still view it. As for the 'promo-card':

  * Replace all '❤️' with 'heart\_inactive\_icon' and 'heart\_inactive\_icon'. Keep aligned to far left.
  * Replace all '📱' with 'share\_icon' and align to the far right.
  * Remove all the text that says 'Share'.
  * Remove all '👁 View'. 



\---------------------------------------------------------------------



* 2 - Focus on 'view-act' - 

  * Remove both 'padded-content' because this page should only feature 3 cards for now and those are 3 act-game-card.
  * 'act-game-card' should use images from games\_music\_quiz, games\_YAMAs\_trivia and games\_YAMAs\_predict\_and\_win (do not change the width but do not limit the height (use the height of the image.))



\---------------------------------------------------------------------



* 3 - Focus on 'view-station' 

  * Remove 'footer'
  * Remove '<button class="btn-white" onclick="location.href='show.html'">On-Air Shows</button>'
  * Remove '<button style="background:var(--brand-red);color:white;border:none;padding:10px 16px;border-radius:8px;font-weight:700;margin-bottom:10px;width:100%;" onclick="hideEvents()">← Back to Station</button>'
  * Remove '<button class="btn-white" onclick="location.href='music-quiz.html'">Music Quiz</button>'
  * Remove '<button class="btn-white" onclick="location.href='top40.html'">Top 40</button>'
  * Remove '<button class="btn-white" onclick="location.href='yamas.html'">YAMAs</button>'
  * Remove the icons '🏆' and '📻'


The order of Accordions then Buttons is as follows;

  1. **On-Air Shows** - this accordion should drop down and reveal 'Show-Thumbnails' for all the shows (no text just the interactive images - when you tap on an image it directs you to the show.). / Thumbnails (2px rounded corners) should be side be side at 2 per row. 
  2. **Show Schedules** - when collapsed it should show accordions for Monday - Sunday. / When you tap on a day (Monday, Tuesday, Wednesday etc) it should collapse and list the shows (show-cards) according to the times as a list with one card above the other in order of earliest above and latest below.  
  3. **Music Charts** - this accordion collapses to reveal 'Chart-Thumbnails' for all the shows (no text just the interactive images - when you tap on an image it directs you to the Chart.). / Thumbnails (no text or label, the artwork has the text) should be side by side at 2 per row and these include;

     1. Top 40 Chart
     2. Top 25 Local Hip-Hop
     3. Top 20 RnB Chart
     4. Top20 Hhouse
  4. **YAMAs** - when users tap this button it should take them to 'view-yamas'.
  5. **Merchandise** - this should take users to 'view-merchandise-selection' page. The page is a store that allows users to add/remove items the like to items they like which appear in Wish List (button found on Menu under user profile).

     1. 'view-merchandise-selection' layout is Thumbnails (1px rounded corners, no text or label, the artwork has the text) should be side by side at 2 per row and these include the images from 'C:\\Users\\Kudzanai\\Documents\\2025\\App Developments\\Yarona FM App\\Assets\\Merchandise' (each thumbnail has a white space below it with the price (do not label price just have the price show example 'P150.00') and +/- (add/remove) button aligned tot he far right). / The user should be able to view a Cart that sits below the 'top-header' and 'live-card'.   
  6. **Community** - similar to news-card (new design) this should show an image/view should show media and have information that appears when the card is collapsed. The Facebook link (that shows when collapsed) should allow the user go the **Yarona FM** facebook. 
  7. **Broadcast Frequencies** - shows list of Broadcast Frequencies. 
  8. **Submit Your Music** - opens the 'view-submit-music' page. For layout on the 'view-submit-music' page there will be:

     1. information on submiting music and information for paying P50.00 to submit via BTC Smega, Mascom Myzaka or Orange Money only. The song will feature in a Chart 


\---------------------------------------------------------------------



* 4 - Focus on 'view-yamas' - 

  * remove '<button class="btn-white" style="width: 100%; margin-top: 20px;" onclick="switchView('view-station', 3)">← Back to Station</button>'
  * remove 'footer'
  * layout 'About The YAMAs' above 'section-header' with a picture section. Use the image 'about\_yamas' inside 'C:\\Users\\Kudzanai\\Documents\\2025\\App Developments\\Yarona FM App\\Assets\\YAMAs\\About YAMA's'
  * Create an accordion called Award Categories (with Artist of The Year, Song of The Year, Best Male Single etc). / When the Award Categories accordion collapses show the 14 picture thumbnails (2px rounded corners) 
  * Place the previous YAMAs inside an accordion called 'Previous YAMAs' (YAMAs 2023, 2019, 2018,2017,2016,2015 (removethe 2.0), 2014 (remove 1st Edition)). / Make sure to remove all '<button class="btn-black" style="margin-top: 15px;" onclick="voteCategory('Artist of the Year 2023', 'Han C')">Vote: Han C</button>'i don'twant voting buttons inside the past YAMA's it doesn't make sense they are there.
  * When a user taps on an 'Award Categories' thumbnail it should direct them to 'YAMAs-award-category-view':

    * the 'YAMAs-award-category-view' should have different views for the different awards categories like 'YAMAs-award-category-view-(insert award category)'. / Each category shows what the category is about and a chart/s associated tot the genre.  
  * The last accordion at the bottom should be YAMAs Trivia image button. The image button should be vertically centered and stretch across the width of the screen leaving 2px space from the sides with full height and 1px corner. 



\---------------------------------------------------------------------






