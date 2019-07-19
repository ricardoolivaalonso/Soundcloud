listItem = document.querySelectorAll(".list__item");
player = document.querySelector("#player");
settingsImg = document.querySelectorAll(".settings__img");

function playerItem(event){
    player.classList.remove("is-hide");
    player.classList.add("is-show");

    var itemSrc = this.children[0].src;
    var url = itemSrc.split('/');
    var newSrc = `../${url[3]}/${url[4]}`;

    var artist = this.children[1].innerHTML;
    var album = this.children[2].innerHTML;

    settingsImg[0].src = newSrc ;
    settingsArtist = document.querySelectorAll(".settings__artist")[0].innerHTML = artist;
    settingsAlbum = document.querySelectorAll(".settings__album")[0].innerHTML = album;
}

function main(){
    var i = 0;
    for (var i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("click", playerItem);
    }

}
window.addEventListener("load", main);
