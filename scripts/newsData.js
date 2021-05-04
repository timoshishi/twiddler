const newsData = {
  headlines: [
    {
      source: { id: null, name: 'Daily Mail' },
      author: 'By Karen Ruiz For Dailymail.com',
      title:
        "Several boats sink and multiple are in 'distress' at Trump Boat Parade on Lake Travis, Texas - Daily Mail",
      description:
        "The Travis County Sheriff's Office on Saturday said it's responding to 'many boats in distress', on Lake Travis, Texas, where a 'Trump Boat Parade' is taking place.",
      url:
        'https://www.dailymail.co.uk/news/article-8701617/Several-boats-sink-multiple-distress-Trump-Boat-Parade-Lake-Travis-Texas.html',
      urlToImage:
        'https://i.dailymail.co.uk/1s/2020/09/05/21/32820852-0-image-a-45_1599337664768.jpg',
      publishedAt: '2020-09-05T19:39:42Z',
      content:
        "Several boats have sunk and multiple are 'in distress' at a Trump Boat Parade on Lake Travis, Texas, authorities said. \r\nThe Travis County Sheriff's Office on Saturday said it's responding to 'many b… [+1486 chars]",
    },
    {
      source: { id: null, name: 'New York Post' },
      author: 'Eileen AJ Connelly',
      title:
        'Armed militia, BLM protesters clash in Louisville ahead of Kentucky Derby - New York Post ',
      description:
        'As Kentucky Derby Day finally arrived in Louisville Saturday, hundreds of armed militia members marched through the city’s downtown to confront Black Lives Matter supporters who have been dem…',
      url:
        'https://nypost.com/2020/09/05/militia-blm-protesters-clash-in-louisville-ahead-of-kentucky-derby/',
      urlToImage:
        'https://nypost.com/wp-content/uploads/sites/2/2020/09/blm-louisville.jpg?quality=90&strip=all&w=1200',
      publishedAt: '2020-09-05T19:34:00Z',
      content:
        'As Kentucky Derby Day finally arrived in Louisville Saturday, hundreds of armed militia members marched through the city’s downtown to confront Black Lives Matter supporters who have been demonstrati… [+2824 chars]',
    },
    {
      source: { id: null, name: 'Billboard' },
      author: 'Mitchell Peters',
      title:
        "Kelly Rowland and Michelle Williams Share Touching Tributes on Beyonce's 39th Birthday - Billboard",
      description: '',
      url:
        'https://www.billboard.com/articles/columns/hip-hop/9445456/beyonce-birthday-tributes-kelly-rowland-michelle-williams-destinys-child',
      urlToImage:
        'https://static.billboard.com/files/media/destinys-child-reunion-2013-billboard-650-compressed.jpg',
      publishedAt: '2020-09-05T19:21:49Z',
      content:
        'Beyonce received lots of love from her friends, family and fellow musicians on her 39th birthday.\r\nAmong those helping celebrate Queen Bey\'s special day on Friday (Sept. 4) were the "Crazy in Love" s… [+2063 chars]',
    },
    {
      source: { id: null, name: 'Pats Pulpit' },
      author: 'Bernd Buchmasser',
      title:
        'NFL roster cuts: Promising rookie Myles Bryant among three more Patriots cuts - Pats Pulpit',
      description: 'New England continues to trim its team.',
      url:
        'https://www.patspulpit.com/2020/9/5/21424342/2020-nfl-roster-cuts-myles-bryant-three-more-players-released-new-england-patriots',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/Fp6Yx-Hejb7_oF1tSDW_WG91yD0=/0x433:3899x2474/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21859434/usa_today_13360940.jpg',
      publishedAt: '2020-09-05T19:20:11Z',
      content:
        'With less than one hour to go, the New England Patriots have added more players to their cutdown list. After already parting ways with 12 players earlier today, the team also waived undrafted rookies… [+2579 chars]',
    },
    {
      source: { id: null, name: 'TMZ' },
      author: 'TMZ Staff',
      title: "Rihanna's Bruised Face Caused By Nasty e-Scooter Accident - TMZ",
      description:
        'No, the new photos of Rihanna are not what you might think.',
      url:
        'https://www.tmz.com/2020/09/05/rihanna-bruised-face-black-eye-scooter-accident/',
      urlToImage:
        'https://imagez.tmz.com/image/bc/16by9/2020/09/05/bc684b40a53b4c9b97f9a5bcacc99869_xl.jpg',
      publishedAt: '2020-09-05T19:18:00Z',
      content:
        "Rihanna appeared bruised and battered as she made a quick pit stop in L.A. -- turns out she's the latest victim of the electric scooter.\r\nRiRi rolled up to Giorgio Baldi in Santa Monica Friday night,… [+824 chars]",
    },
    {
      source: { id: null, name: 'WDIV ClickOnDetroit' },
      author: 'Natasha Dado, Dane Kelly',
      title:
        'Michigan coronavirus (COVID-19) cases up to 106,215; Death toll now at 6,534 - WDIV ClickOnDetroit',
      description:
        'Here is the latest update on coronavirus cases, recoveries and deaths.',
      url:
        'https://www.clickondetroit.com/health/2020/09/05/michigan-coronavirus-covid-19-cases-up-to-106215-death-toll-now-at-6534/',
      urlToImage:
        'https://www.clickondetroit.com/resizer/xocZEbPTYUBHMfdbhhXxdbMBOaM=/1280x720/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/QJOJFWLPRRC27JT33U6ZNTAE3E.png',
      publishedAt: '2020-09-05T19:06:00Z',
      content:
        'The number of confirmed cases of the coronavirus (COVID-19) in Michigan has risen to 106,215 as of Saturday, including 6,534 deaths, state officials report.\r\nSaturdays update represents 838 new cases… [+6488 chars]',
    },
    {
      source: { id: 'the-washington-post', name: 'The Washington Post' },
      author: 'Jeremy Barr',
      title:
        'Jennifer Griffin defended by Fox News colleagues after Trump Twitter attack over confirmation of Atlantic reporting - The Washington Post',
      description:
        'The national security reporter caused an unexpected firestorm when she did something fairly routine.',
      url:
        'https://www.washingtonpost.com/media/2020/09/05/jennifer-griffin-defended-by-fox-news-colleagues-after-trump-twitter-attack-over-her-confirmation-atlantic-reporting/',
      urlToImage:
        'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A5Z4XDXPSUI6VPIIDMIBGK2FR4.jpg&w=1440',
      publishedAt: '2020-09-05T18:44:00Z',
      content:
        'Other beat reporters had confirmed aspects of the Atlantic story, too. But the fact that Griffin works for Fox, whose opinion hosts and corporate owners are seen as reliable supporters and defenders … [+4935 chars]',
    },
    {
      source: { id: 'bloomberg', name: 'Bloomberg' },
      author: null,
      title:
        "Activists Call for 'Mulan' Boycott Over Star's Hong Kong Stance - Bloomberg",
      description: null,
      url:
        'https://www.bloomberg.com/tosv2.html?vid=&uuid=6c7e5bb0-efb9-11ea-9ac5-2939e93c0707&url=L25ld3MvYXJ0aWNsZXMvMjAyMC0wOS0wNS9hY3RpdmlzdHMtY2FsbC1mb3ItbXVsYW4tYm95Y290dC1vdmVyLXN0YXItcy1ob25nLWtvbmctc3RhbmNl',
      urlToImage: null,
      publishedAt: '2020-09-05T17:53:00Z',
      content:
        "To continue, please click the box below to let us know you're not a robot.",
    },
    {
      source: { id: null, name: 'Yahoo Entertainment' },
      author: 'Sam Cooper',
      title:
        "ESPN's Kirk Herbstreit brought to tears discussing racial injustice on 'College GameDay' - Yahoo Sports",
      description:
        "Kirk Herbstreit was overcome with emotion discussing racial injustice during a segment on ESPN's College GameDay.",
      url:
        'https://sports.yahoo.com/esp-ns-kirk-herbstreit-brought-to-tears-discussing-racial-injustice-on-college-game-day-video-172348193.html',
      urlToImage:
        'https://s.yimg.com/uu/api/res/1.2/ovE_8G1NKfTDpGGFY_NQhQ--~B/aD0zMjgwO3c9NDkyODtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-02/11fcaa80-2a5c-11e9-a7e9-412dda3af0f8',
      publishedAt: '2020-09-05T17:23:00Z',
      content:
        'The beginning of college football season also marked the return of ESPNs College GameDay to the airwaves on Saturday. Though the crew wasnt together on campus for a high-profile Week 1 game somewhere… [+1792 chars]',
    },
    {
      source: { id: null, name: 'ESPN' },
      author: 'Sarah Barshop',
      title:
        'Relationships take Deshaun Watson from Clemson to megadeal with Houston Texans - ESPN',
      description:
        "Watson picked Clemson as a high school sophomore and stuck with it. He's showing that same kind of commitment to Bill O'Brien and the Texans with a long-term deal.",
      url:
        'https://www.espn.com/nfl/story/_/id/29817628/relationships-take-deshaun-watson-clemson-megadeal-houston-texans',
      urlToImage:
        'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0822%2Fr418287_1296x729_16%2D9.jpg',
      publishedAt: '2020-09-05T17:05:19Z',
      content:
        'After the Houston Texans blew a 24-0 lead last January in an excruciating loss in the AFC divisional playoffs to the Kansas City Chiefs, quarterback Deshaun Watson was asked in the postgame news conf… [+16202 chars]',
    },
    {
      source: { id: null, name: 'CNBC' },
      author: 'Reuters',
      title:
        "Epic Games asks court to stop Apple's 'retaliation' after App Store ban - CNBC",
      description:
        'Epic Games has filed a preliminary injunction that would put its game back in the App Store after Apple Inc. terminated its account last week.',
      url:
        'https://www.cnbc.com/2020/09/05/epic-games-asks-court-to-stop-apples-retaliation-after-app-store-ban.html',
      urlToImage:
        'https://image.cnbcfm.com/api/v1/image/106675584-1598271015135-gettyimages-1228049774-AFP_1WI8KC.jpeg?v=1598271056',
      publishedAt: '2020-09-05T17:02:00Z',
      content:
        'Epic Games said late on Friday that it has asked a court to stop what it saw as Apple Inc\'s retaliation against the "Fortnite" creator after the iPhone maker terminated Epic Games\' account on its App… [+1710 chars]',
    },
    {
      source: {
        id: 'the-wall-street-journal',
        name: 'The Wall Street Journal',
      },
      author: 'Dan Strumpf',
      title:
        'U.S. Weighs Export Controls on China’s Top Chip Maker - The Wall Street Journal',
      description:
        'Imposing controls would mark a major escalation in the administration’s crackdown on Chinese tech companies',
      url:
        'https://www.wsj.com/articles/u-s-weighs-export-controls-on-chinas-top-chip-maker-11599324489',
      urlToImage: 'https://images.wsj.net/im-229139/social',
      publishedAt: '2020-09-05T16:48:00Z',
      content:
        'The Trump administration is weighing whether to place export restrictions on Chinas most advanced manufacturer of semiconductors, a move that could cut to the heart of Chinas ambitions to become self… [+6769 chars]',
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'Christina Zdanowicz, Amanda Jackson and Alanne Orjoux, CNN',
      title:
        'Coronavirus cases tied to a Maine wedding reception hit 147, with 3 deaths - CNN',
      description:
        'At least 147 Covid-19 cases are now linked to an August wedding reception in Maine, a state CDC spokesman said Saturday.',
      url:
        'https://www.cnn.com/2020/09/05/us/maine-wedding-outbreak-covid-cases-trnd/index.html',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/200817213020-big-moose-inn-super-tease.jpg',
      publishedAt: '2020-09-05T16:42:00Z',
      content:
        '(CNN)At least 147 Covid-19 cases are now linked to an August wedding reception in Maine, a state CDC spokesman said Saturday.\r\nThree people connected to the outbreak have died of the virus, Maine Cen… [+3355 chars]',
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'Caroline Kelly, CNN',
      title:
        "'I will not take his word for it': Kamala Harris says she would not trust Trump alone on a coronavirus vaccine - CNN",
      description:
        "Democratic vice presidential nominee Kamala Harris said that President Donald Trump's word alone on any potential coronavirus vaccine is not enough.",
      url:
        'https://www.cnn.com/2020/09/05/politics/kamala-harris-not-trust-trump-vaccine-cnntv/index.html',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/200827155400-03-kamala-harris-remarks-0827-super-tease.jpg',
      publishedAt: '2020-09-05T15:58:00Z',
      content:
        "Washington (CNN)Democratic vice presidential nominee Kamala Harris said that President Donald Trump's word alone on any potential coronavirus vaccine is not enough. \r\nAsked by CNN's Dana Bash in a cl… [+3429 chars]",
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'Mia Alberti, CNN Business',
      title:
        'Extinction Rebellion climate protesters arrested after blocking printing of Murdoch-owned British newspapers - CNN',
      description:
        'UK police have arrested 13 members of the Extinction Rebellion group after climate change protesters blocked the printing presses of several Rupert Murdoch-owned News Corp newspapers on Friday and Saturday, disrupting their distribution.',
      url:
        'https://www.cnn.com/2020/09/05/media/extinction-rebellion-xr-newspaper-protest-intl-scli-gbr/index.html',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/200905101118-01-extinction-rebellion-protest-intl-scli-gbr-restricted-super-tease.jpg',
      publishedAt: '2020-09-05T15:56:00Z',
      content: null,
    },
    {
      source: { id: 'fox-news', name: 'Fox News' },
      author: 'Peter Aitken',
      title:
        'Rochester police injured, 11 people arrested following third night of protests: report - Fox News',
      description:
        'The officers were hospitalized with cuts and burns, but all three officers were later released.',
      url:
        'https://www.foxnews.com/us/rochester-police-hospitalized-11-arrested-third-night-protests',
      urlToImage:
        'https://static.foxnews.com/foxnews.com/content/uploads/2020/09/AP20249170081379.jpg',
      publishedAt: '2020-09-05T15:41:07Z',
      content:
        'Police in Rochester, N.Y., arrested 11 people and three officers were injured Friday night after racial justice protests turned violent, according to local reports. \r\nProtesters clashed with police f… [+2256 chars]',
    },
    {
      source: { id: null, name: 'XDA Developers' },
      author: 'Brandon Russell',
      title:
        'Many Samsung Galaxy S8 and Note 8 users are reporting GPS tracking issues - XDA Developers',
      description:
        'Many owners of the Samsung Galaxy S8 and Galaxy Note 8 are reporting GPS tracking issues, unable to get a location fix Google Maps.',
      url:
        'https://www.xda-developers.com/samsung-galaxy-s8-galaxy-note-8-gps-location-tracking-issues/',
      urlToImage:
        'https://www.xda-developers.com/files/2020/05/galaxy-s8_kv-l-1.jpg',
      publishedAt: '2020-09-05T15:05:00Z',
      content:
        'Many Samsung Galaxy S8 and Galaxy Note 8 owners are reportedly experiencing GPS tracking issues, and these complaints have been bubbling for the past several months.\r\nAccording to many threads on Red… [+1775 chars]',
    },
    {
      source: { id: 'nbc-news', name: 'NBC News' },
      author: 'Adela Suliman, Mustafa Kassem',
      title:
        'Hopes fade in search for Beirut explosion survivor a month after blast - NBC News',
      description:
        'Hopes began to fade about a possible survivor as rescue workers dug through the rubble of a building in Beirut for a third day.',
      url:
        'https://www.nbcnews.com/news/world/hopes-fade-search-beirut-explosion-survivor-month-after-blast-n1239403',
      urlToImage:
        'https://media4.s-nbcnews.com/j/newscms/2020_36/3409886/200904-beirut-search-mc-9202_dbbe701dc592731a9d02999cba048af4.nbcnews-fp-1200-630.JPG',
      publishedAt: '2020-09-05T14:50:00Z',
      content:
        'Hopes started to fade Saturday that a survivor would be found as rescue workers dug through the rubble of a devastated Beirut building, three days after a faint pulsing signal was detected.\r\nRescue w… [+2549 chars]',
    },
    {
      source: { id: 'the-hill', name: 'The Hill' },
      author: 'Tal Axelrod',
      title:
        'Kanye West loans presidential campaign over $6 million | TheHill - The Hill',
      description:
        'Kanye West has loaned his presidential campaign millions of dollars, according to a Federal Elect...',
      url:
        'https://thehill.com/homenews/campaign/515259-kanye-west-loans-presidential-campaign-over-6-million',
      urlToImage:
        'https://thehill.com/sites/default/files/westkanye_071920upi2_lead.jpg',
      publishedAt: '2020-09-05T14:37:48Z',
      content:
        "Kanye WestKanye Omari WestJudge bars Kanye West from appearing on Arizona ballotThe Hill's Morning Report - Presented by Facebook - 'Dark side' to 'Sleepy Joe,' Biden-Trump trade barbs in swing state… [+2534 chars]",
    },
    {
      source: { id: 'the-washington-post', name: 'The Washington Post' },
      author: 'Lena H. Sun',
      title:
        'Covid-19: A bad flu season colliding with the pandemic could be overwhelming - The Washington Post',
      description:
        'It’s a scenario infectious-disease experts dread: flu arriving amid the coronavirus. But the mask-wearing and social distancing could also limit influenza.',
      url:
        'https://www.washingtonpost.com/health/covid-flu-season-collide/2020/09/04/23254d68-eb98-11ea-99a1-71343d03bc29_story.html',
      urlToImage:
        'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QATVWEHJM4I6VPDZQNCFIQ42IQ.jpg&w=1440',
      publishedAt: '2020-09-05T14:00:00Z',
      content:
        'Symptoms of flu and covid-19, the disease caused by the novel coronavirus, are similar.\r\nWhen someone presents to a physician with fever, cough, malaise, unless its one of the few things peculiar to … [+7561 chars]',
    },
  ],
  techArticles: [
    {
      source: { id: 'the-verge', name: 'The Verge' },
      author: 'Kim Lyons',
      title:
        'Google Magenta’s Lo-Fi Player lets you create your own virtual music room - The Verge',
      description:
        'A new Google Magenta project (created by a summer intern!) lets you mix lo-fi hip-hop music tracks to build a custom music room in your browser.',
      url:
        'https://www.theverge.com/2020/9/5/21424092/google-magenta-lo-fi-player-virtual-music-room-ai',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/O109DGiulYyTlixARrXzkuWRhuQ=/0x9:1961x1036/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21859339/lo_fi_player.png',
      publishedAt: '2020-09-05T17:50:52Z',
      content:
        'Click around in the room to change the sounds\r\nGoogle Magenta\r\nA new Google Magenta project (created by an intern!) lets you mix lo-fi, hip-hop music tracks to build a custom music room in your brows… [+2098 chars]',
    },
    {
      source: { id: null, name: 'Push Square' },
      author: 'Push Square',
      title:
        "Tony Hawk's Pro Skater 1 + 2: NY City - All Park Goals, Gaps, and Challenges - Push Square",
      description: 'All gaps and goals in NY City',
      url:
        'https://www.pushsquare.com/guides/tony-hawks-pro-skater-1-plus-2-ny-city-all-park-goals-gaps-and-challenges',
      urlToImage: 'https://images.pushsquare.com/a18f5e04e9093/1280x720.jpg',
      publishedAt: '2020-09-05T17:50:00Z',
      content:
        "How do you get all NY City park goals, gaps, and objectives in Tony Hawk's Pro Skater 1 + 2? Where are all the SKATE letters, subway cards, hydrants, and hidden tapes in NY City? As part of our Tony … [+11468 chars]",
    },
    {
      source: { id: null, name: 'CNBC' },
      author: 'Reuters',
      title:
        "Epic Games asks court to stop Apple's 'retaliation' after App Store ban - CNBC",
      description:
        'Epic Games has filed a preliminary injunction that would put its game back in the App Store after Apple Inc. terminated its account last week.',
      url:
        'https://www.cnbc.com/2020/09/05/epic-games-asks-court-to-stop-apples-retaliation-after-app-store-ban.html',
      urlToImage:
        'https://image.cnbcfm.com/api/v1/image/106675584-1598271015135-gettyimages-1228049774-AFP_1WI8KC.jpeg?v=1598271056',
      publishedAt: '2020-09-05T17:02:00Z',
      content:
        'Epic Games said late on Friday that it has asked a court to stop what it saw as Apple Inc\'s retaliation against the "Fortnite" creator after the iPhone maker terminated Epic Games\' account on its App… [+1710 chars]',
    },
    {
      source: { id: null, name: 'Push Square' },
      author: 'Push Square',
      title:
        'PlayStation Launches New PS5 Game Pages on Official Website - Push Square',
      description: 'Next-gen',
      url:
        'https://www.pushsquare.com/news/2020/09/playstation_launches_new_ps5_game_pages_on_official_website',
      urlToImage: 'https://images.pushsquare.com/b6af974215893/1280x720.jpg',
      publishedAt: '2020-09-05T16:30:00Z',
      content:
        'With the PlayStation 5 still set to launch before the end of 2020 -- November, if rumours and educated guesswork are to be believed -- Sony must be going all-out behind the scenes to ensure that ever… [+751 chars]',
    },
    {
      source: { id: null, name: 'Eurogamer.net' },
      author: 'Wesley Yin-Poole',
      title:
        'EA on the ropes after adding in-game ads to UFC 4 - Eurogamer.net',
      description: null,
      url:
        'https://www.eurogamer.net/articles/2020-09-05-ea-on-the-ropes-after-adding-in-game-ads-to-ufc-4',
      urlToImage:
        'https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-09-05-17-18/ea-on-the-ropes-after-adding-in-game-ads-to-ufc-4-1599322731354.jpg/EG11/resize/1200x-1/ea-on-the-ropes-after-adding-in-game-ads-to-ufc-4-1599322731354.jpg',
      publishedAt: '2020-09-05T16:28:00Z',
      content:
        'EA has sparked a fresh fan backlash after adding in-game ads to UFC 4.\r\nPlayers noticed advertisements briefly pop up at the beginning and end of replays in the premium video game, and a clip of this… [+2785 chars]',
    },
    {
      source: { id: 'techradar', name: 'TechRadar' },
      author: 'Tabitha Baker',
      title:
        'Best Buy Labor Day Sale 2020: all the top deals available this weekend - TechRadar',
      description: 'All the latest Best Buy Labor Day sales 2020',
      url:
        'https://www.techradar.com/news/best-buy-labor-day-sales-all-the-top-deals-available-this-weekend',
      urlToImage:
        'https://cdn.mos.cms.futurecdn.net/38ba7QSMss8ns57Uk56Mqc-1200-80.jpg',
      publishedAt: '2020-09-05T16:08:00Z',
      content:
        "The Best Buy Labor Day sales have begun, and until midnight Monday September 7 you'll be able to shop a massive range of savings on everything from laptops to TVs. That's great news if you're looking… [+16185 chars]",
    },
    {
      source: { id: null, name: 'NPR' },
      author: 'Danny Hensel',
      title:
        'Are Your Texts Passive Aggressive? The Answer May Lay In Your Punctuation - NPR',
      description:
        'Some linguists find that younger people tend to see text messages that end with a period as passive aggressive, or otherwise negative.',
      url:
        'https://www.npr.org/2020/09/05/909969004/before-texting-your-kid-make-sure-to-double-check-your-punctuation',
      urlToImage:
        'https://media.npr.org/assets/img/2020/09/05/gettyimages-1181609761_wide-4c8333016b9479cad1006ce67dfc0c04e62993e7.jpg?s=1400',
      publishedAt: '2020-09-05T15:47:00Z',
      content:
        'When it comes to text messaging, at least for younger adults, periods do more than just end a sentence: they also can set a tone.\r\nPatrick Pleul/picture alliance via Getty Images\r\nKatherine Rooks rem… [+4515 chars]',
    },
    {
      source: { id: null, name: 'Nintendo Life' },
      author: 'Nintendo Life',
      title:
        'Switch Pro Controller + Super Mario Odyssey Bundle Arriving Next Week (US) - Nintendo Life',
      description: 'More Mario',
      url:
        'https://www.nintendolife.com/news/2020/09/switch_pro_controller_plus_super_mario_odyssey_bundle_arriving_next_week_us',
      urlToImage: 'https://images.nintendolife.com/d642ee325f6d2/1280x720.jpg',
      publishedAt: '2020-09-05T15:45:00Z',
      content:
        "Well, here's a sweet deal just in time for Mario's 35th birthday celebrations. Next week, on 11th September, Walmart in the US will be selling a bundle containing a Nintendo Switch Pro Controller alo… [+605 chars]",
    },
    {
      source: { id: null, name: 'XDA Developers' },
      author: 'Brandon Russell',
      title:
        'Many Samsung Galaxy S8 and Note 8 users are reporting GPS tracking issues - XDA Developers',
      description:
        'Many owners of the Samsung Galaxy S8 and Galaxy Note 8 are reporting GPS tracking issues, unable to get a location fix Google Maps.',
      url:
        'https://www.xda-developers.com/samsung-galaxy-s8-galaxy-note-8-gps-location-tracking-issues/',
      urlToImage:
        'https://www.xda-developers.com/files/2020/05/galaxy-s8_kv-l-1.jpg',
      publishedAt: '2020-09-05T15:05:00Z',
      content:
        'Many Samsung Galaxy S8 and Galaxy Note 8 owners are reportedly experiencing GPS tracking issues, and these complaints have been bubbling for the past several months.\r\nAccording to many threads on Red… [+1775 chars]',
    },
    {
      source: { id: null, name: 'Android Police' },
      author: 'https://www.facebook.com/corbin.davenport.50',
      title:
        'This dongle could bring Android Auto wireless to almost any car - Android Police',
      description:
        'While compatibility with wireless Android Auto is expanding on phones, there are still many in-car head units and media players that are stuck using',
      url:
        'https://www.androidpolice.com/2020/09/05/this-dongle-could-bring-android-auto-wireless-to-almost-any-car/',
      urlToImage:
        'https://www.androidpolice.com/wp-content/uploads/2020/07/28/Android-Auto-BMW-3-668x501.png',
      publishedAt: '2020-09-05T15:05:00Z',
      content:
        "While compatibility with wireless Android Auto is expanding on phones, there are still many in-car head units and media players that are stuck using tethered connections. That's where a device called… [+1303 chars]",
    },
    {
      source: { id: 'google-news', name: 'Google News' },
      author: null,
      title:
        'The History Of Militech, The Biggest Weapons Corp In The World | Cyberpunk 2077 Lore - GameSpot',
      description: null,
      url:
        'https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TDJ5ajdqdnBkNVHSAQA?oc=5',
      urlToImage: null,
      publishedAt: '2020-09-05T15:00:04Z',
      content: null,
    },
    {
      source: { id: null, name: 'Forbes' },
      author: 'Paul Tassi',
      title:
        '‘Halo Infinite’ May Be Delayed But Master Chief Is Still Getting Jacked For His TV Show - Forbes',
      description:
        'We have no idea when Halo Infinite may arrive in 2021 after its delay out of this holiday season next to the Xbox Series X launch, but it seems it may be arriving alongside the Halo TV show, something that I don’t think 95% of Halo fans even realize exists.',
      url:
        'https://www.forbes.com/sites/paultassi/2020/09/05/halo-infinite-may-be-delayed-but-master-chief-is-still-getting-jacked-for-his-tv-show/',
      urlToImage:
        'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f2022f7026acbd87f4adb23%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D956%26cropY1%3D0%26cropY2%3D532',
      publishedAt: '2020-09-05T13:41:00Z',
      content:
        'Halo\r\n343\r\nWe have no idea when Halo Infinite may arrive in 2021 after its delay out of this holiday season next to the Xbox Series X launch, but it seems it may be arriving alongside the Halo TV sho… [+2857 chars]',
    },
    {
      source: { id: null, name: 'Forbes' },
      author: 'Paul Tassi',
      title:
        '‘Destiny 2’ May Need To Cut A Season Out Of Year 4 Due To ‘Beyond Light’ Delay - Forbes',
      description:
        'Destiny 2 will have to make a big choice about how Year 4 plays out after Beyond Light.',
      url:
        'https://www.forbes.com/sites/paultassi/2020/09/05/destiny-2-may-need-to-cut-a-season-out-of-year-4-due-to-beyond-light-delay/',
      urlToImage:
        'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f5253a4c36f50e3cec2c88b%2F0x0.jpg',
      publishedAt: '2020-09-05T13:30:00Z',
      content:
        'Destiny 2\r\nBungie\r\nWhile I am curious about the meat of whats in Beyond Light, Destiny 2s fall expansion, theres an additional question the delay of it raises about whats going to happen in Year 4 wi… [+2948 chars]',
    },
    {
      source: { id: null, name: 'CNBC' },
      author: 'Elizabeth Gravier',
      title:
        'What not to buy when shopping the sales this Labor Day weekend - CNBC',
      description:
        'It can be tempting to shop the sales this weekend, but CNBC Select has four categories you should wait to buy until Black Friday and Cyber Monday.',
      url: 'https://www.cnbc.com/select/what-not-to-buy-labor-day-2020/',
      urlToImage:
        'https://image.cnbcfm.com/api/v1/image/106691298-1599238589994-gettyimages-1205070587-errf02583.jpeg?v=1599238736',
      publishedAt: '2020-09-05T13:07:47Z',
      content:
        'With millions of Americans still social distancing amid the coronavirus pandemic, Labor Day weekend the unofficial kickoff to the holiday shopping season may look a bit different this year as shopper… [+5409 chars]',
    },
    {
      source: { id: null, name: '9to5google.com' },
      author: null,
      title:
        'This week’s top stories: Google Android TV dongle price leak, Samsung sales drop, more - 9to5Google',
      description:
        'Top Stories: Made by Google Android TV dongle gets price leaked, Samsung smartphones drop from bestsellers, LineageOS arrives for Pixel 2, 3a, & 4, more.',
      url:
        'https://9to5google.com/2020/09/05/this-weeks-top-stories-google-android-tv-dongle-price-leak-samsung-sales-drop-more/',
      urlToImage:
        'https://9to5google.com/wp-content/uploads/sites/4/2020/01/Chromecast-Gen-3-4.jpg?quality=82&strip=all',
      publishedAt: '2020-09-05T13:00:00Z',
      content:
        'In this week’s top stories: the upcoming Made by Google Android TV dongle gets price leaked, Samsung smartphones drop from top 10 bestsellers list, official LineageOS support arrives for Pixel 2, 3a,… [+3159 chars]',
    },
    {
      source: { id: null, name: 'CNET' },
      author: 'David Katzmaier',
      title:
        'TCL 6-Series Roku TVs start at $650, promise even better picture - CNET',
      description:
        'The latest version of our favorite midpriced TV adds mini-LED, 120Hz and THX gaming upgrades.',
      url:
        'https://www.cnet.com/news/tcl-6-series-roku-tvs-start-at-650-promise-even-better-picture-2020/',
      urlToImage:
        'https://cnet1.cbsistatic.com/img/KXPTd3cv53FhvLlYxZvhmBZ6Lp4=/756x567/2020/08/06/62c61463-641f-4fa3-b140-17e985c3b2cb/65r635-angled-right-hero.png',
      publishedAt: '2020-09-05T12:00:09Z',
      content:
        "For the first time, mini-LED tech is available in TVs under $1,000.\r\nTCL\r\nFor the last two years TCL's 6-Series Roku TV has been the best TV for the money and now the new 2020 version, on sale Tuesda… [+8921 chars]",
    },
    {
      source: { id: null, name: 'Motor1 ' },
      author: 'Nico Ylanan',
      title: 'Watch a Giulia Quadrifoglio Drag Race an M4 And RS5 - Motor1 ',
      description:
        'A battle of the six-cylinder turbos and rear-wheel-drive and all-wheel-drive platforms as the Giulia Quadrifoglio goes against a BMW M4 and Audi RS5.',
      url: 'https://www.motor1.com/news/442651/giulia-quadrifoglio-vs-m4-rs5/',
      urlToImage:
        'https://cdn.motor1.com/images/mgl/QMe37/s1/giulia-quadrifoglio-drag-races-m4-and-rs5.jpg',
      publishedAt: '2020-09-05T11:29:21Z',
      content:
        "Another day, another carwow drag race. You got to hand it to Mat Watson and his team; they've been pushing out some great drag race videos since, well, as long as we can remember. Sure, they've done … [+1859 chars]",
    },
    {
      source: { id: null, name: 'Bleeding Cool News' },
      author: 'Theo Dwyer',
      title:
        'Whatever Happened To GO Battle Day: Pidgey In Pokémon GO? - Bleeding Cool News',
      description:
        'Whatever happened to the datamined event, GO Battle Day: Pidgey in Pokémon GO? Details on this event finally came out in an unexpected way.',
      url:
        'https://bleedingcool.com/games/whatever-happened-to-go-battle-day-pidgey-in-pokemon-go/',
      urlToImage:
        'https://bleedingcool.com/wp-content/uploads/2020/09/combatrebalance-dec2019-1-copy-12-1200x628.jpg',
      publishedAt: '2020-09-05T11:10:00Z',
      content: null,
    },
    {
      source: { id: 'wired', name: 'Wired' },
      author: 'Louryn Strampe',
      title:
        'The 22 Best Labor Day Sales (2020): Tech, Laptops, Phones, Outdoors, Etc - WIRED',
      description:
        'This long weekend, you can save on tablets, robot vacuums, camping gear, and more.',
      url: 'https://www.wired.com/story/best-labor-day-sales-2020/',
      urlToImage:
        'https://media.wired.com/photos/5e41c44ec37d1a0008ff67b8/191:100/w_1280,c_limit/Gear-Galaxy-S20+-Cloud-Blue-Back-SOURCE-Samsung.jpg',
      publishedAt: '2020-09-05T11:00:00Z',
      content:
        "<li>15 Percent Off Grounds &amp; Hounds Coffee: Use code LABORDAY15 to save on beans for brewing. WIRED's Scott Gilbertson likes this coffee a lot, and a portion of the proceeds from each sale helps … [+1763 chars]",
    },
    {
      source: { id: null, name: 'Push Square' },
      author: 'Push Square',
      title:
        "NBA 2K21 Cover Star Damian Lillard Isn't the Only One Who Can't Shoot in the New Game - Push Square",
      description: 'Missing by a mile',
      url:
        'https://www.pushsquare.com/news/2020/09/nba_2k21_cover_star_damian_lillard_isnt_the_only_one_who_cant_shoot_in_the_new_game',
      urlToImage: 'https://images.pushsquare.com/2ace44d4b9af1/1280x720.jpg',
      publishedAt: '2020-09-05T10:45:00Z',
      content:
        'NBA 2K21 has made shooting harder a lot harder. Its all anyone in the games community is talking about this weekend including cover star Damian Lillard. Writing on Twitter, the Portland Trail Blazers… [+2147 chars]',
    },
  ],
};
