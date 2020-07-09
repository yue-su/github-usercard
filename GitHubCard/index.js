import axios from "axios"

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
  //for stretch -- adding chart at the bottom of the card
  const chart = document.createElement("img")

  card.className = "card"
  cardImage.setAttribute("src", `${userObj.avatar_url}`)
  cardImage.className = "card-image"
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

  //for stretch
  /*
  adding a github chart with the API made by rshah via
  https://ghchart.rshah.org/
  */

  chart.setAttribute("src", `http://ghchart.rshah.org/${userObj.login}`)
  chart.className = "card-chart"

  card.appendChild(cardImage)
  card.appendChild(cardInfo)
  //for stretch
  card.appendChild(chart)
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
  the actuall structure after adding github chart

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
      <img src='http://ghchart.rshah.org/${userObj.login}'>
    </div>
*/
