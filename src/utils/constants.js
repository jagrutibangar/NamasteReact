const API_KEY = "AIzaSyApxuejjadn7-I2dPbzf10-vLMSYeBmJLA"

export const VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ API_KEY;

export const SEARCH_API = "https://cors-anywhere.herokuapp.com/https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&cp=3&gs_id=100&q=";