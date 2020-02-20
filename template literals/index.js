const music = {
    artist: "Tool",
    song: "Stinkfist",
    album: "Aenema"
};

// write code between the <div> tags to output the data from the music object above
const songSnippet = `
    <div class="song">
  We are ${music.artist}!
  This is our song ${music.song} from our album ${music.album}!
    </div>
  `;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

const scottPilgrim = {
    song: "Sex Bo-bomb",
    think: "death and stuff",
    count: "1, 2, 3, 4"
};

const scottSnippet = `
    <div class="song">
    We are ${scottPilgrim.song} and we're here to make you think about 
    ${scottPilgrim.think}! ${scottPilgrim.count}!!!
    </div>
`

const newElement = document.getElementById("scott");
newElement.innerHTML = scottSnippet; 
