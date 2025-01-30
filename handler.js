// Copyright (c) 2025 Maik Luxa. All rights reserved.


/**
 * Creates a service worker which will open a new tab when activated.
 */
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search_rotten_tomatoes") {
    let title = info.selectionText.trim().replace(/ /g, "%20");
    let searchUrl = `https://www.rottentomatoes.com/search?search=${encodeURIComponent(title)}`;
    chrome.tabs.create({ url: searchUrl });
  }
});

/**
 * Create a context menu which will only show up for selected text.
 */
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "search_rotten_tomatoes",
    title: "Search on RottenTomatoes.com",
    contexts: ["selection"]
  });
});
