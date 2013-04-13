// Copyright (c) 2013 Maik Luxa. All rights reserved.


/**
 * Returns a handler which will open a new tab when activated.
 */
function getClickHandler() {
  return function(info, tab) {
    var title = info.selectionText;
    title = title.trim();
    title = title.replace(/ /gi, '+');
    encodeURIComponent(title);
    var search_url = "http://www.rottentomatoes.com/search/?search=" + title;
    chrome.tabs.create({ url: search_url });
  };
};

/**
 * Create a context menu which will only show up for selected text.
 */
chrome.contextMenus.create({
  "title" : "Search on RottenTomatoes.com",
  "type" : "normal",
  "contexts" : ["selection"],
  "onclick" : getClickHandler()
});