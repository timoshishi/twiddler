$(document).ready(function () {
  const $body = $('body');
  const $tweetStream = $('#tweetStream');
  const $newTweetInfo = $('.new-tweet-info');
  const $tweetInput = $('.tweet-input');
  const $submitButton = $('.submit-button');
  const $homeContainer = $('.home-container');
  const $landingContainer = $('.landing-container');
  const $sidebarLink = $('.sidebar-link');
  const $visitorName = $('.visitor-name');
  const $loginButton = $('#loginButton');
  const $trendingHash = $('.trending-hash');
  const $searchInput = $('.search-input');
  const $stories = $('.stories');
  const $trendingTech = $('.trending-tech');

  window.visitor = '';
  //display landing or home containers depending on if visitor has signed in yet
  !window.visitor ? $homeContainer.hide() : $landingContainer.hide();

  const handleLogin = (e) => {
    e.preventDefault();
    window.visitor = $visitorName.val();
    $visitorName.val('');
    if (window.visitor !== '') {
      showAllTweets();
      $landingContainer.hide();
      $homeContainer.show();
    }
  };

  const handleLogout = () => {
    window.visitor = '';
    $landingContainer.show();
    $homeContainer.hide();
  };

  //find any mentions or hash tags in the tweet message and format them into links -  this assumes that there is a space between all words, primarily because I am not so great with creating weird regexes
  const formatTweetMessageLinks = (tweet) => {
    const tweetStrArr = tweet.split(' ');
    tweetStrArr.forEach((word, i) => {
      if (word[0] === '#') {
        tweetStrArr[i] = `<a href="#!" class="message-link">${word}</a>`;
      } else if (word[0] === '@') {
        tweetStrArr[i] = `<a href="#!" class="message-link">${word}</a>`;
      }
    });
    return tweetStrArr.join(' ');
  };

  //formatTweet helper function -fake numbers for 'likes' 'retweets' 'comments'
  const createFakeStats = () => {
    let num = Math.floor(Math.random() * 5000);
    if (num > 1000) {
      num = (num / 1000).toFixed(1);
      num = num.toString();
      if (num[num.length - 1] === '0') {
        num = num.slice(0, -2) + 'k';
      } else {
        num = num + 'k';
      }
    } else {
      num = num.toString();
    }
    return num;
  };

  //html for each tweet that is dynamically generated
  const formatTweet = (tweet) => {
    tweetMessage = formatTweetMessageLinks(tweet.message);
    //because not fetching images from server, default image is in assets, other photos pulled from other twiddler
    let userImage = tweet.user;
    let verifiedUser = './assets/icons/tweet-action/check-circle.svg';
    const ogUsers = [
      'shawndrost',
      'sharksforcheap',
      'mracus',
      'douglascalhoun',
    ];
    if (!ogUsers.includes(tweet.user)) {
      userImage = 'user-image';
      verifiedUser = '';
    }
    let tweetTime = moment(tweet.created_at).fromNow();

    return `
      <div class="tweet-card">
        <img class="gravatar" src="./assets/user-images/${userImage}.jpeg" alt="user avatar"/>
        <div class="tweet-body">
          <p class="user-info">
            <span class="user-handle">${tweet.user}</span>
            <img href="#!" src="${verifiedUser}" />
            <a href="#!" class="message-link user-link">@${tweet.user}</a>
            <span class="tweet-time">&#183 ${tweetTime}</span>
          </p>
          <p class="message">${tweetMessage}</p>
          <ul class="tweet-actions">
            <li class="comment-li"><a href="#!"><img src="./assets/icons/tweet-action/message-circle-grey.svg" class="comment-img"/><span class="random-num"> ${createFakeStats()}</span></a></li>
            <li class="retweet-li"><a href="#!"><img src="./assets/icons/tweet-action/repeat-grey.svg" class="retweet-img"/> <span class="random-num"> ${createFakeStats()}</span></a></li>
            <li class="heart-li"><a href="#!"><img src="./assets/icons/tweet-action/heart-grey.svg" class="heart-img"/> <span class="random-num"> ${createFakeStats()}</span></a></li>
            <li class="upload-li"><a href="#!"><img src="./assets/icons/tweet-action/upload-grey.svg" /></a></li>
          </ul>
        </div>
      </div>
    `;
  };

  //Show filtered tweets after clicking on: tweet creators name, hashtags, or @mentions inside of the tweet body
  const showTweetsOnClick = (e) => {
    $tweetStream.html('');
    const linkStr = e.target.innerText.slice(1);
    //if the string is a user, display all their tweets directly from their user stream
    //if not then it is a hash and must filter all tweets for current string
    if (streams.users[linkStr]) {
      streams.users[linkStr].forEach((tweet) => {
        const currentTweet = formatTweet(tweet);
        $tweetStream.prepend(currentTweet);
      });
    } else {
      streams.home.forEach((tweet) => {
        if (tweet.message.includes('#' + linkStr)) {
          const currentTweet = formatTweet(tweet);
          $tweetStream.prepend(currentTweet);
        }
      });
    }
    $newTweetInfo.hide();
    window.scrollTo(0, 0);
  };

  //show all tweets on pageload or when clicking links to "home"
  const showAllTweets = () => {
    $tweetStream.html('');
    window.scrollTo(0, 0);
    //for some reason afer switching between views of filtered tweets to home, tweets were not being prepended in fully chronological order to the feed - hence they are sorted
    const sortedByTime = streams.home.sort((tweetA, tweetB) => {
      tweetB.created_at.getTime() - tweetA.created_at.getTime();
    });
    sortedByTime.forEach((tweet, index) => {
      const currentTweet = formatTweet(tweet);
      $tweetStream.prepend(currentTweet);
    });
  };

  //new tweet submit button disabled/enabled with input
  const handleInput = (e) => {
    //Alter the tweet submit buttons style and status based on whether input contains text
    if (e.target.value) {
      $submitButton.css('opacity', '1');
      $submitButton.attr('disabled', false);
    } else {
      $submitButton.css('opacity', '0.75');
      $submitButton.attr('disabled', true);
    }
  };

  //make new tweet and prepend to tweetStream
  const createNewTweet = () => {
    tweetMessage = $tweetInput.val();
    writeTweet(tweetMessage);
    showAllTweets();
    $tweetInput.val('');
    $tweetInput.blur();
    $newTweetInfo.hide();
    $submitButton.css('opacity', '0.75');
    $submitButton.attr('disabled', true);
  };

  //handle search for tweets and users
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = $searchInput.val().toLowerCase();
    const filteredTweets = streams.home.filter((tweet) => {
      return (
        tweet.message.toLowerCase().includes(searchTerm) ||
        tweet.user.toLowerCase().includes(searchTerm)
      );
    });
    $searchInput.val('');
    showTweetsOnSearch(filteredTweets);
  };

  //display function for search results
  const showTweetsOnSearch = (tweets) => {
    $tweetStream.html('');
    window.scrollTo(0, 0);
    if (!tweets.length) {
      return $tweetStream.prepend(
        "<h3>Oops, we couldn't find what you're looking for</h3>"
      );
    }
    tweets.forEach((tweet) => {
      const currentTweet = formatTweet(tweet);
      $tweetStream.prepend(currentTweet);
    });
  };

  //get feature story from json file
  const getFeatureStory = () => {
    let featureStory = null;
    while (featureStory === null) {
      const randomId = Math.floor(Math.random() * newsData.headlines.length);
      const story = newsData.headlines[randomId];
      if (story.source.id !== 'fox-news' && story.urlToImage !== null) {
        featureStory = newsData.headlines[randomId];
      }
    }
    return featureStory;
  };

  //create html for feature story
  const formatFeatureStory = () => {
    const story = getFeatureStory();
    const headline = story.title.split(' - ')[0];
    let storyTime = moment(story.publishedAt).fromNow();
    return `
            <a href="${story.url}" target="blank" class="feature">
              <div class="feature-text">
                <p class="outlet">${story.source.name} &#183 ${storyTime}</p>
                <p class="headline">
                  ${headline}
                </p>
              </div>
              <img
                class="feature-img"
                src="${story.urlToImage}"
                alt="feature story'"
              />
            </div>

          </a>`;
  };

  //create html for a tech story
  const formatTechStory = () => {
    const randomId = Math.floor(Math.random() * newsData.techArticles.length);
    const story = newsData.techArticles[randomId];
    const [headline, outlet] = story.title.split(' - ');
    let storyTime = moment(story.publishedAt).fromNow();
    return `
          <a href="${story.url}" target="blank" class='tech-story-text'>
                <p class='outlet'>${story.source.name} &#183 ${storyTime}</p>
                <p class='headline'>
                  ${headline}
                </p>
                <p class='trending-with'>Trending in #tech</p>
          </a>`;
  };

  //get highest trending hashtag for display on "Whats happening" panel
  const formatTrendingHash = () => {
    const trends = {};
    streams.home.forEach((tweet) => {
      if (tweet.message.includes('#')) {
        const [message, hashtag] = tweet.message.split('#');
        trends[hashtag] ? trends[hashtag]++ : (trends[hashtag] = 1);
      }
    });
    const trendingHash = Object.keys(trends).sort(
      (a, b) => trends[b] - trends[a]
    )[0];
    return `
    <p class="trending-now">Trending right now</p>
    <p class="tweet-trend">#${trendingHash}</p>
    `;
  };

  const tweetActionIconListeners = () => {
    //I had a helper function replacing the image source by replacing the old color with the new color in the string but this was causing big issues with the images not resetting quickly enough, unfortunately this is a lot of code for each one but seems to be much faster and no longer have issues.
    //Same was done with addSideBarListeners
    $tweetStream.on(
      'mouseenter',
      '.comment-img',
      (e) =>
        (e.target.src = './assets/icons/tweet-action/message-circle-blue.svg')
    );
    $tweetStream.on(
      'mouseleave',
      '.comment-img',
      (e) =>
        (e.target.src = './assets/icons/tweet-action/message-circle-grey.svg')
    );
    $tweetStream.on(
      'mouseenter',
      '.retweet-img',
      (e) => (e.target.src = './assets/icons/tweet-action/repeat-green.svg')
    );
    $tweetStream.on(
      'mouseleave',
      '.retweet-img',
      (e) => (e.target.src = './assets/icons/tweet-action/repeat-grey.svg')
    );
    $tweetStream.on(
      'mouseenter',
      '.heart-img',
      (e) => (e.target.src = './assets/icons/tweet-action/heart-red.svg')
    );
    $tweetStream.on(
      'mouseleave',
      '.heart-img',
      (e) => (e.target.src = './assets/icons/tweet-action/heart-grey.svg')
    );
  };

  const sideBarIconListeners = () => {
    //put all these in a function just so it can be folded and doesn't clutter up the listener section below
    //wrote these using the attr selector instead of as above just to try to remember jquery stuff
    $('.side-home').mouseenter(() =>
      $('.side-home img').attr(
        'src',
        './assets/icons/sidebar-icons/home-blue.svg'
      )
    );
    $('.side-home').mouseleave(() =>
      $('.side-home img').attr(
        'src',
        './assets/icons/sidebar-icons/home-white.svg'
      )
    );
    $('.side-hash').mouseenter(() =>
      $('.side-hash img').attr(
        'src',
        './assets/icons/sidebar-icons/hash-blue.svg'
      )
    );
    $('.side-hash').mouseleave(() =>
      $('.side-hash img').attr(
        'src',
        './assets/icons/sidebar-icons/hash-white.svg'
      )
    );
    $('.side-bell').mouseenter(() =>
      $('.side-bell img').attr(
        'src',
        './assets/icons/sidebar-icons/bell-blue.svg'
      )
    );
    $('.side-bell').mouseleave(() =>
      $('.side-bell img').attr(
        'src',
        './assets/icons/sidebar-icons/bell-white.svg'
      )
    );
    $('.side-mail').mouseenter(() =>
      $('.side-mail img').attr(
        'src',
        './assets/icons/sidebar-icons/mail-blue.svg'
      )
    );
    $('.side-mail').mouseleave(() =>
      $('.side-mail img').attr(
        'src',
        './assets/icons/sidebar-icons/mail-white.svg'
      )
    );
    $('.side-bookmark').mouseenter(() =>
      $('.side-bookmark img').attr(
        'src',
        './assets/icons/sidebar-icons/bookmark-blue.svg'
      )
    );
    $('.side-bookmark').mouseleave(() =>
      $('.side-bookmark img').attr(
        'src',
        './assets/icons/sidebar-icons/bookmark-white.svg'
      )
    );
    $('.side-file-text').mouseenter(() =>
      $('.side-file-text img').attr(
        'src',
        './assets/icons/sidebar-icons/file-text-blue.svg'
      )
    );
    $('.side-file-text').mouseleave(() =>
      $('.side-file-text img').attr(
        'src',
        './assets/icons/sidebar-icons/file-text-white.svg'
      )
    );
    $('.side-user').mouseenter(() =>
      $('.side-user img').attr(
        'src',
        './assets/icons/sidebar-icons/user-blue.svg'
      )
    );
    $('.side-user').mouseleave(() =>
      $('.side-user img').attr(
        'src',
        './assets/icons/sidebar-icons/user-white.svg'
      )
    );
    $('.side-more-horizontal').mouseenter(() =>
      $('.side-more-horizontal img').attr(
        'src',
        './assets/icons/sidebar-icons/more-horizontal-blue.svg'
      )
    );
    $('.side-more-horizontal').mouseleave(() =>
      $('.side-more-horizontal img').attr(
        'src',
        './assets/icons/sidebar-icons/more-horizontal-white.svg'
      )
    );
  };

  /*  FIRE ON PAGELOAD */
  //hide part of tweet input until input is focused
  $newTweetInfo.hide();
  //feature story for right panel
  $stories.append(formatFeatureStory());
  setInterval(() => {
    $stories.html('');
    $stories.append(formatFeatureStory());
  }, 11000);

  //top trending hashtag
  $trendingHash.append(formatTrendingHash());
  setInterval(() => {
    $trendingHash.html('');
    $trendingHash.append(formatTrendingHash());
  }, 5000);

  //trending tech article
  $trendingTech.append(formatTechStory());
  setInterval(() => {
    $trendingTech.html('');
    $trendingTech.append(formatTechStory());
  }, 16400);

  /*  EVENT LISTENERS  */
  sideBarIconListeners();
  tweetActionIconListeners();
  $tweetStream.on('click', '.message-link', showTweetsOnClick);
  $loginButton.click(handleLogin);
  $tweetInput.keyup(handleInput);
  $tweetInput.focus(() => $newTweetInfo.show());
  $submitButton.click(createNewTweet);
  $trendingHash.click(showTweetsOnClick);
  $('.logout').click(handleLogout);
  $('.search-icon').click(handleSearch);
  $('.sidebar-tweet-btn').click(() => $tweetInput.focus());
  $('.landing-button').click(() => $('.visitor-name').focus());
  $('.home-link').click(showAllTweets);
});
