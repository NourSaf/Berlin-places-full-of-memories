var categories = {
  'Places I Lived In': {
    emoji: '🏠',
    markers: [],
    isVisible: false,
    locations: [
        {
          name: '2016 - The first room in Berlin',
          label: '🏠 Home',
          address: 'I was 19 years old when I first move to Berlin',
          location: [52.46980515548625, 13.426669208254209],
          // photo: './Photos/home.jpg',
          link:"https://www.google.com/maps/place/Warthestra%C3%9Fe+64,+12051+Berlin/@52.4698348,13.4241148,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84f90b26bae33:0x42a76427bdfab9e9!8m2!3d52.4698348!4d13.4266897!16s%2Fg%2F11bw3frbnf?entry=ttu",
          music: './music/die welt geht runter.mp3'
        },

        {
          name: '2016 - Where I met Amori, Hashomi and Marki',
          label: '🏠 Home',
          address: 'It was one of the most unique experiences I have ever had.',
          location: [52.47869311696065, 13.423709420621154],
          // photo: './Photos/home.jpg',
          link:"https://www.google.com/maps/place/Weisestra%C3%9Fe+59,+12049+Berlin/@52.4787029,13.4235311,20z/data=!4m6!3m5!1s0x47a84fbe868a3cc7:0x39139f0b9f0ed03f!8m2!3d52.47868!4d13.4237007!16s%2Fg%2F11csjtm8hj?entry=ttu",
          music: './music/Lights.mp3'
        },           

        {
          name: '2016 - I always saw KitKat que from my window',
          label: '🏠 Home',
          address: 'In was then, when I met Benjamen and broke up with Caroline. It was the phase of partiying alot',
          location: [52.511088006963945, 13.415326989528703],
          // photo: './Photos/home.jpg',
          link:"https://www.google.com/maps/place/K%C3%B6penicker+Str.+99,+10179+Berlin/@52.5110472,13.4146967,19z/data=!3m1!4b1!4m6!3m5!1s0x47a84e251132cb31:0xf71361e2fab1f74d!8m2!3d52.5110472!4d13.4153404!16s%2Fg%2F11c1xqsmlk?entry=ttu",
          music: './music/Cake.mp3'
        },

        {
          name: '2017 - Can someone erase my memory',
          label: '🏠 Home',
          address: 'Only one good thing was that I met Ronja',
          location: [52.50443974227214, 13.428637823104616],
          // photo: './Photos/home.jpg',
          link:"https://www.google.com/maps/place/Wrangelstra%C3%9Fe+130,+10997+Berlin/@52.50427,13.4260951,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84e36256af43f:0xa896b98f55a69e02!8m2!3d52.50427!4d13.42867!16s%2Fg%2F11c5jdjmr7?entry=ttu",
          music: './music/redbone.mp3'
        },

        {
          name: '2018 - A best friend',
          label: '🏠 Home',
          address: 'Here I met Qusai, and we became best friends; I learned how to trust.',
          location: [52.54071604760491, 13.41260941677279],
          // photo: './Photos/home.jpg',
          link:"https://www.google.com/maps/place/Sch%C3%B6nhauser+Allee+45,+10435+Berlin/@52.5404634,13.4120859,19.91z/data=!4m6!3m5!1s0x47a851ff0a99f59d:0xe29b3da88523bd14!8m2!3d52.5406949!4d13.4126044!16s%2Fg%2F11c5ps14kq?entry=ttu",
          music: './music/ijustcannot.mp3'
        },
        
        {
            name: '2020 - GneisiHaus',
            label: '🏠 Home',
            address: 'I lived 3 years with Naoko and Sarah. Here I learned what is it like to change yourself. I learned a bit about caring',
            location: [52.491629492129, 13.392841578747062],
            // photo: './Photos/home.jpg',
            link:"https://www.google.com/maps/place/Gneisenaustra%C3%9Fe+17,+10961+Berlin/@52.4915317,13.3903525,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84fd7dd89510d:0x1b257c405f64ca80!8m2!3d52.4915317!4d13.3929274!16s%2Fg%2F11b8v57b5x?entry=ttu",
            music: './music/thank god.mp3'
        },

        {
            name: '2024 - Better alone',
            label: '🏠 Home',
            address: 'After a long time living in shared apartments, I decided to live alone, and here we go',
            location: [52.51495800109478, 13.433271772041314],
            // photo: './Photos/home.jpg',
            link:"https://www.google.com/maps/place/Singerstra%C3%9Fe+33,+10243+Berlin/@52.5148014,13.4284545,17z/data=!4m15!1m8!3m7!1s0x47a84e3f723ea133:0xda49e3ecc29e165a!2sSingerstra%C3%9Fe+33,+10243+Berlin!3b1!8m2!3d52.5148015!4d13.4333254!16s%2Fg%2F11c2h490jy!3m5!1s0x47a84e3f723ea133:0xda49e3ecc29e165a!8m2!3d52.5148015!4d13.4333254!16s%2Fg%2F11c2h490jy?entry=ttu",
            music: './music/kanet.mp3'
        },
    ]
  },

  'Going Out and Fun': {
    emoji: '🍻',
    markers: [],
    isVisible: false,
    locations: [
        {
          name: 'Juicery Berlin',
          label: '🍻  The best juice',
          address: "In summer you can not miss it ",
          location: [52.54177915548525, 13.406139859437936],
          // photo: './Photos/home.jpg',
          link:"https://www.google.com/maps/place/Juicery+Berlin/@52.5323852,13.4049924,13.96z/data=!4m6!3m5!1s0x47a851f8fb9d61ed:0xa9f18b326db1b169!8m2!3d52.5402193!4d13.405828!16s%2Fg%2F11b6371t6s?entry=ttu",
          music: './music/kanet.mp3'
        },
        
        {
          name: '8MM Bar',
          label: '🍻  Punk Rock',
          address: "I used to go here with Lisa on thursdays for a Rock concert",
          location: [52.53233538203483, 13.411964610534843],
          // photo: './Photos/home.jpg',
          link:"https://www.google.com/maps/place/8MM+Bar/@52.5323895,13.4049692,13.96z/data=!3m1!5s0x47a851e2abb10bef:0x4ac9049c365be1e6!4m6!3m5!1s0x47a851e2aac77ca1:0xa60547d856e96adf!8m2!3d52.531218!4d13.411524!16s%2Fg%2F1tx8s768?entry=ttu",
          music: './music/jumpsuit.mp3'
        },
    
        {
          name: 'Holzmarkt 25',
          label: '🍻  Summer Chillout',
          address: "Huuuuf, a lot of things happened here. Once with Siwar and Steffi. With Adham, Qusai and Daniel. With Ronja and Lisa. With the other Lisa in Shook Concert.",
          location: [52.51195781032414, 13.42738829249855],
          // photo: './Photos/home.jpg',
          link:"https://www.google.com/maps/place/Holzmarkt+25/@52.510468,13.4078305,14.87z/data=!4m6!3m5!1s0x47a84e3963e235b5:0xb044835f7d3a94ec!8m2!3d52.5113137!4d13.4268387!16s%2Fg%2F11k9h3h915?entry=ttu",
          music: './music/lala.mp3'
        },
    
        {
          name: 'Biergarten Jockel',
          label: '🍻  Standup Comedy show',
          address: "The night I went to see Salam in the standup comedy show",
          location: [52.49242156227893, 13.438387368506842],
          // photo: './Photos/home.jpg',
          link:"https://www.google.com/maps/place/Biergarten+Jockel/@52.4917993,13.4250856,15.12z/data=!4m6!3m5!1s0x47a84fad83ee12cf:0x32222854a7e82f96!8m2!3d52.4919277!4d13.4385616!16s%2Fg%2F1v16pb3n?entry=ttu",
          music: './music/lala.mp3'
        },

        {
          name: 'Tempelhofer Feld',
          label: '🍻  It feels like summer',
          address: "The place to be in summer",
          location: [52.47562757422759, 13.400932693022977],
          // photo: './Photos/home.jpg',
          link:"https://www.google.com/maps/place/Tempelhofer+Feld/@52.482341,13.4086326,14.18z/data=!4m6!3m5!1s0x47a84fe8f7d899eb:0x88898e99acbb718b!8m2!3d52.4748569!4d13.4005926!16s%2Fg%2F1213_1c4?entry=ttu",
          music: './music/lala.mp3'
        },

        {
          name: 'cuccuma',
          label: '🍻  Remote working and hang out with Naoko',
          address: "Here was the first time I went to ",
          location: [52.491677318683024, 13.394436325390021],
          // photo: './Photos/home.jpg',
          link:"https://www.google.com/maps/place/Tempelhofer+Feld/@52.482341,13.4086326,14.18z/data=!4m6!3m5!1s0x47a84fe8f7d899eb:0x88898e99acbb718b!8m2!3d52.4748569!4d13.4005926!16s%2Fg%2F1213_1c4?entry=ttu",
          music: './music/lala.mp3'
        },
    ]
  },

  'Work': {
    emoji: '👨🏾‍💻',
    markers: [],
    isVisible: false,
    locations: [
    
    {
      name: 'Henkelhiedl',
      label: '👨🏾‍💻 Work',
      address: 'My first job as a designer in a relative big agency. The people there were amazing. I will not foget the team',
      location: [52.491154631164704, 13.41858690508184],
      photo: './Photos/work.png',
      link:"https://www.google.com/maps/place/:+HENKELHIEDL+(Kreativagentur%2FDigitalagentur)/@52.4915317,13.3929274,17z/data=!4m6!3m5!1s0x47a84fc90bcb9829:0xb3d5dddcab2f1890!8m2!3d52.4910175!4d13.418662!16s%2Fg%2F1td64bf1?entry=ttu",
      music: './music/shab.mp3'

    },

    {
      name: 'designtransfer:',
      label: '👨🏾‍💻 Work',
      address: 'The first job at the university',
      location: [52.51717650420129, 13.322650234934772],
      // photo: './Photos/work.png',
      link:"https://www.google.com/maps/place/Designtransfer/@52.5170721,13.3200646,17z/data=!3m1!4b1!4m6!3m5!1s0x47a8511bb2853333:0x69af5b7d3013aaea!8m2!3d52.5170721!4d13.3226395!16s%2Fg%2F1pxwr3b4f?entry=ttu",
      music: './music/ilka.mp3'

    },

    {
      name: 'Bosh Service Solution',
      label: '👨🏾‍💻 Work',
      address: 'What a time there!',
      location: [52.510125566558585, 13.29945030092248],
      // photo: './Photos/work.png',
      link:"https://www.google.com/maps/place/Bosch+Service+Solutions/@52.5099232,13.2967681,17z/data=!3m1!4b1!4m6!3m5!1s0x47a850d8c3f49755:0xe32ecf22de9a8ec9!8m2!3d52.5099232!4d13.299343!16s%2Fg%2F11ggb93pt0?entry=ttu",
      music: './music/track.mp3'

    },
    ]
  },

  'University': {
    emoji: '🏫',
    markers: [],
    isVisible: false,
    locations: [
      {
        name: 'Medienhause',
        label: '🏫 Study',
        address: 'Here I studied visual communication at the class of Information design. I learned a lot.',
        location: [52.49099156128556, 13.358810151068894],
        photo: './Photos/uni.jpeg',
        link:"https://www.google.com/maps/place/Universit%C3%A4t+der+K%C3%BCnste,+Medienhaus/@52.4908283,13.3562567,17z/data=!3m1!4b1!4m6!3m5!1s0x47a8504712a30e33:0x42e91f98e8b32325!8m2!3d52.4908283!4d13.3588316!16s%2Fg%2F1tp_5dyt?entry=ttu",
        music: './music/bachelor.mp3'

      },
    ]
  },
};

var map = L.map('map').setView([52.512452, 13.432652], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/nour-safadi/clrrjs2iw00f501pn83iub9x2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibm91ci1zYWZhZGkiLCJhIjoiY2xwNnh5d2FnMXhsaTJqcWs4ZHFqNXM4aiJ9.cdEJMpU6paLl1t4Lk79MvA', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  maxZoom: 16,
  minZoom: 11,
  tileSize: 512,
  zoomOffset: -1,
}).addTo(map);

Object.keys(categories).forEach(function (categoryName) {
  var category = categories[categoryName];
  category.locations.forEach(function (location) {
    var marker = L.marker(location.location, {
      title: location.name,
      icon: L.divIcon({
        className: 'emoji-marker',
        html: `<div style="font-size: 40px;">${category.emoji}</div>`
      })
    }).bindPopup(location.label);

    marker.on('click', function () {
      openOverlay(location);
    });

    marker.addTo(map);
    category.markers.push(marker);

  });
});

var circleStyle = {
  color: 'none', 
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 250
};



  function openOverlay(location) {
    document.getElementById('overlay-name').textContent = location.name;
    document.getElementById('overlay-label').textContent = location.label;
    document.getElementById('overlay-address').textContent = location.address;
    document.getElementById('overlay-photo').src = location.photo;
    document.getElementById('googleMapBtn').href = location.link;

    if (window.currentCircle) {
    map.removeLayer(window.currentCircle); 
    }

    window.currentCircle = L.circle(location.location, circleStyle).addTo(map);
    var musicPlayer = document.getElementById('overlayMusic');
    musicPlayer.src = location.music;
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
    document.getElementById('playMusicBtn').textContent = 'Play Music';
    document.getElementById('overlay').style.right = '0';
  }

  function closeOverlay() {
    if (window.currentCircle) {
    map.removeLayer(window.currentCircle);
    window.currentCircle = null;
    }
    document.getElementById('overlay').style.right = '-100%';
  }

  function toggleMusic() {
    var music = document.getElementById('overlayMusic');
    var button = document.getElementById('playMusicBtn');

    if (music.paused) {
        music.play();
        button.textContent = '⏸';
    } else {
        music.pause();
        button.textContent = '▶';
    }
}

function showCategory(categoryName) {
var category = categories[categoryName];
if (!category) return;

category.isVisible = !category.isVisible; 

category.markers.forEach(marker => {
  if (category.isVisible) {
    map.removeLayer(marker); 
  } else {
    marker.addTo(map);
  }
});

var button = document.getElementById(categoryName + 'Btn');
if (button) {
  button.classList.toggle('active', category.isVisible);
}
}

function startTour() {
var category = categories['Places I Lived In'];
if (!category || category.locations.length === 0) {
console.log("No locations found in 'Places I Lived In'");
return;
}

var firstLocation = category.locations[6];
map.setView(firstLocation.location, 14);
openOverlay(firstLocation);
}

var initialCoordinates = [52.512452, 13.432652]; 
var initialZoom = 11; 

function resetView() {
map.setView(initialCoordinates, initialZoom);

if (window.currentCircle) {
map.removeLayer(window.currentCircle);
window.currentCircle = null;
}
closeOverlay();
}
