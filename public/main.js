let check = 0;
const API_URL = new URL("https://ws.audioscrobbler.com/2.0/");
const CONTENT = document.querySelector(".content");
const SEARCHBAR = document.querySelector(".search-bar");
const api_key = "44201f20d33a31789b779b994fc5cb93"

function createNameItem(item) {
    const ITEMNAME = document.createElement("summary");
    ITEMNAME.className = "description_card";
    ITEMNAME.textContent = item.name;
    return ITEMNAME;
}


function createPerformer(item) {
    const PERFORMER = document.createElement("p");
    PERFORMER.textContent = "Исполнитель: " + item.artist.name;
    return PERFORMER;
}

function createList() {
    const LISTCARD = document.createElement("ul");
    LISTCARD.className = "list_card";
    return LISTCARD;
}

function createAuditions(amount) {
    const AUDITIONS = document.createElement("p");
    AUDITIONS.textContent = "Прослушивания: " + amount;
    return AUDITIONS;
}

SEARCHBAR.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (event.target.value === "") {
            setTopMusicSettings();
        }
        else {
            switch (check) {
                case 0:
                    setSearchedMusicSettings(event.target.value);
                    break;
                case 1:
                    setSearchedArtistsSettings(event.target.value);
                    break;
                default:
                    break;
            }
        }
    }
});

function clearContainer() {
    if (CONTENT.firstChild) {
      while (CONTENT.firstChild) {
        CONTENT.removeChild(CONTENT.lastChild);
      }
    }
}

function setTopMusicSettings() {
    clearContainer();
    API_URL.search = `?method=chart.gettoptracks&api_key=${api_key}&format=json`;
    check = 0;
    getTopMusic();
}

function getTopMusic() {
    fetch(API_URL)
      .then((result) => result.json())
      .then((data) =>
        data.tracks.track.forEach((track) => {
          const TEMPCARD = document.createElement("details");
          TEMPCARD.className = "card";
          const LIST = createList();
          TEMPCARD.appendChild(createNameItem(track));
          const PERFORMER = createPerformer(track)
          LIST.appendChild(PERFORMER);
          LIST.appendChild(createAuditions(track.playcount));
          TEMPCARD.appendChild(LIST);
          CONTENT.append(TEMPCARD);
        })
    );
}

function setSearchedMusicSettings(val) {
    clearContainer();
    API_URL.search = `?method=track.search&limit=25&track=${val}&api_key=${api_key}&format=json`;
    getSearchedMusic();
}

function getSearchedMusic() {
    fetch(API_URL)
      .then((result) => result.json())
      .then((data) =>
        data.results.trackmatches.track.forEach((track) => {
          const TEMPCARD = document.createElement("details");
          TEMPCARD.className = "card";
          const LIST = createList();
          TEMPCARD.appendChild(createNameItem(track));
          LIST.appendChild(createAuditions(track.listeners));
          TEMPCARD.appendChild(LIST);
          CONTENT.append(TEMPCARD);
        })
    );
}

function setTopArtistsSettings() {
    clearContainer();
    API_URL.search = `?method=chart.gettopartists&api_key=${api_key}&format=json`;
    check = 1;
    getTopArtists();
}

function getTopArtists() {
    fetch(API_URL)
      .then((result) => result.json())
      .then((data) =>
        data.artists.artist.forEach((artist) => {
          const TEMPCARD = document.createElement("details");
          TEMPCARD.className = "card";
          const LIST = createList();
          TEMPCARD.appendChild(createNameItem(artist));
          LIST.appendChild(createAuditions(artist.playcount));
          TEMPCARD.appendChild(LIST);
          CONTENT.append(TEMPCARD);
        })
    );
}

function setSearchedArtistsSettings(val) {
    clearContainer();
    API_URL.search = `?method=artist.search&artist=${val}&api_key=${api_key}&format=json`;
    getArtistsSearched();
}

function getArtistsSearched() {
    fetch(API_URL)
      .then((result) => result.json())
      .then((data) =>
        data.results.artistmatches.artist.forEach((artist) => {
          const TEMPCARD = document.createElement("details");
          TEMPCARD.className = "card";
          const LIST = createList();
          TEMPCARD.appendChild(createNameItem(artist));
          LIST.appendChild(createAuditions(artist.listeners));
          TEMPCARD.appendChild(LIST);
          CONTENT.append(TEMPCARD);
        })
    );
}

setTopMusicSettings(); 