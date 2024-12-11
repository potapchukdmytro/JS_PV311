function homePage() {
    window.location = "/11_pages";
}

// const search = window.location.search;
// const params = new URLSearchParams(search);
// console.log(params.get("id"));

async function loadCharacter() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const name = params.get("name");

    if(name) {
        const url = `https://thronesapi.com/api/v2/Characters`;
        const response = await fetch(url);
        const data = await response.json();           
        const character = data.find((ch) => ch.fullName.includes(name));

        if(character != undefined) {
            printCharacter(character);
        }
    }

    if (id) {
        const url = `https://thronesapi.com/api/v2/Characters/${id}`;

        const response = await fetch(url);
        const data = await response.json();
        printCharacter(data);
    }
}

// {
//     "id": 1,
//     "firstName": "Samwell",
//     "lastName": "Tarly",
//     "fullName": "Samwell Tarly",
//     "title": "Maester",
//     "family": "House Tarly",
//     "image": "sam.jpg",
//     "imageUrl": "https://thronesapi.com/assets/images/sam.jpg"
//   }

function printCharacter(character) {
    const container = document.getElementById("container");
    container.innerHTML = `<h1>${character.fullName}</h1>
            <img src="${character.imageUrl}" />
            <div class="m-2" >
                <span>ID:</span>
                <span style="font-weight: bold;">${character.id}</span>
            </div>
            <div class="m-2" >
                <span>First Name:</span>
                <span style="font-weight: bold;">${character.firstName}</span>
            </div>
            <div class="m-2">
                <span>Last Name:</span>
                <span style="font-weight: bold;">${character.lastName}</span>
            </div>
            <div class="m-2">
                <span>Full Name:</span>
                <span style="font-weight: bold;">${character.fullName}</span>
            </div>
            <div class="m-2">
                <span>Title:</span>
                <span style="font-weight: bold;">${character.title}</span>
            </div>
            <div class="m-2">
                <span>Family:</span>
                <span style="font-weight: bold;">${character.family}</span>
            </div>
            <button class="btn btn-danger" onclick="homePage()">Go home</button>`;
}

loadCharacter();
