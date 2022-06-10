fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => sunctionToserver(data));

function sunctionToserver(users) {
    const userName = users.map(x => x.username)
    const userContainer = document.getElementById("users-container");
    for (let i = 0; i < userName.length; i++) {
        const user = userName[i];
        const li = document.createElement("li")
        li.innerHTML = user;
        userContainer.appendChild(li);
    }

}



document.getElementById("submit").addEventListener("click", function() {
    const title = document.getElementById("title").value;
    const cardBody = document.getElementById("body-cont").value;

    const post = {
        title: title,
        body: cardBody

    }


});


function newAddserver(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(postInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
};