import axios from "axios"

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const cards = document.querySelector(".cards")

const profileURL = "https://api.github.com/users/yue-su"

axios
  .get(profileURL)
  .then(function (profile) {
    let card = {
      name: profile.data.name,
      avatar_url: profile.data.avatar_url,
      login: profile.data.login,
      url: profile.data.url,
      followers: profile.data.followers,
      following: profile.data.following,
      bio: profile.data.bio,
    }

    cards.appendChild(newCard(card))
  })
  .catch(function (error) {
    console.log(error)
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
]

function addCard(profileArr) {
  profileArr.forEach((username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(function (profile) {
        let card = {
          name: profile.data.name,
          avatar_url: profile.data.avatar_url,
          login: profile.data.login,
          url: profile.data.url,
          followers: profile.data.followers,
          following: profile.data.following,
          bio: profile.data.bio,
        }

        cards.appendChild(newCard(card))
      })
      .catch(function (error) {
        console.log(error)
      })
  })
}

addCard(followersArray)

function newCard(userObj) {
  const card = document.createElement("div")
  const cardImage = document.createElement("img")
  const cardInfo = document.createElement("div")
  const name = document.createElement("h3")
  const userName = document.createElement("p")
  const location = document.createElement("p")
  const profile = document.createElement("p")
  const link = document.createElement("a")
  const followers = document.createElement("p")
  const following = document.createElement("p")
  const bio = document.createElement("p")

  card.className = "card"
  cardImage.setAttribute("src", `${userObj.avatar_url}`)
  cardInfo.className = "card-info"
  name.className = "name"
  name.textContent = userObj.name
  userName.className = "username"
  userName.textContent = userObj.login
  profile.textContent = "Profile:"
  link.setAttribute("href", `${userObj.url}`)
  link.textContent = userObj.url
  followers.textContent = `Followers: ${userObj.followers}`
  following.textContent = `Following: ${userObj.following}`
  bio.textContent = `Bio: ${userObj.bio}`

  card.appendChild(cardImage)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  profile.appendChild(link)

  return card
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
