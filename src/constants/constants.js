const API_KEY = "AIzaSyDA4bd3vB_avPOozrsxiFUylsTACUR44R8";

export const OFFSET_LIVE_CHAT = 10;
const results = 20;

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=" +
  results +
  "&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q= ";
