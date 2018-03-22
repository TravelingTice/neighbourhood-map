REQUIREMENTS:

  1. Full-Screen Google Maps map (map API should be called once)
  2. Display 5 map markers, 5 locations, should be loaded by default
  3. Implement list view of those locations
  4. Filter option with input field that filters through locations: markers AND list view => They should refresh in realtime.
  -> Providing a search function through a 3rd party API is not enough.
  Filter can be 1 dropdown 2 text input
  5. Add functionality using 3rd party APIS to provide info when marker or list-view-entry is clicked. (Yelp reviews, WikiPedia, Flickr Imgs, etc..) (Google maps apis dont count as 3rd party apis)
  *Also include attribution somewhere in application and README, that you used that API.*
  6. UI should be intuitive.
    1. Easy to understand what set of locations are being filtered
    2. Text input should be easy to locate
    3. Selecting location via list or marker -> map marker bounces to center, associated infowindow opens.
  7. All Apis should be loaded Asynchronously, errors should be handled gracefully.
  In case of error, webpage should do one of following:
    - message on display, notifying user data couldn't be loaded.
    - no negative repercussions to UI
    - Also errors when 3rd party APIS cant be reached!
  8. Make sure it's responsive

  TODO:
  1. Add tabindex to list of places
  2. Add ARIA roles
