const btn = document.getElementById("btn-go");
const card = document.querySelector(".card-body");
const img = document.getElementById("pic");

const form = document.getElementById("form")

btn.addEventListener("click", async function () {
    let username = input.value;
    const response = await fetch(`https://api.github.com/users/${username}`);

    const info = await response.json();
    console.log(info);

    form.innerHTML = `
    <div class="col-md-4">       
    <img src="${info.avatar_url}" id="pic" class="img-fluid rounded-start" width="400px" alt="Profile"/>
</div>
<div class="col-md-8">
    <div class="card-body">
        <h3 class="card-title"> ${info.login} </h3>
        <input type="text" class="form-control" placeholder="Username..."/>
        <p class="card-text"> 
            <small class="text-muted">
                Content based on github account
            </small>
        </p>
        <button type="button" class="btn btn-secondary">
            <img class="icon" width="10" src="./img/search.png" alt="" />
            Get GitHub Info
        </button>
        <a href="${info.html_url}?tab=repositories" id="btn0" class="btn btn-primary">
            <img class="icon" width="10" src="./img/github.png" alt="" />
             See All Repos</a>
    </div>
</div>        
    `
})