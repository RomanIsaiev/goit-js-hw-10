!function(){var e={breedSelector:document.querySelector(".breed-select"),catContainer:document.querySelector(".cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};e.breedSelector.addEventListener("change",n),e.breedSelector.style.display="none",e.loader.style.display="block",e.error.style.display="none",e.catContainer.style.display="none";var t="live_ds7IOLf26S1PWwqgPFrJeWA3DKWOVsAilq9eQpOhrh5ZJrNWtWQLnqoUn19c2yKi";function n(){return fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":t}}).then((function(t){return e.catContainer.style.display="none",e.loader.style.display="block",t.json()})).then((function(n){!function(t){var n=[];e.breedSelector.style.display="block",e.loader.style.display="none",n=t;for(var c=0;c<n.length;c++){var a=n[c],r=document.createElement("option");r.value="".concat(a.id),r.innerHTML="".concat(a.name),document.querySelector(".breed-select").appendChild(r)}}(n),function(n){return fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(n),{headers:{"x-api-key":t}}).then((function(t){return e.catContainer.style.display="none",e.loader.style.display="block",t.json()}))}(e.breedSelector.value).then(c).catch((function(t){e.error.style.display="block",console.log(t)}))})).catch((function(t){e.error.style.display="block",console.log(t)}))}function c(t){e.loader.style.display="none",e.catContainer.style.display="block";var n=t[0].breeds,c=n[0].name,a=n[0].description,r=n[0].temperament,o=t[0].url,l='<div class="cat-container">\n        <img class="cat-image" src="'.concat(o,'" width="450" height="350" />\n        <div>\n        <h2 class="cat-name">').concat(c,'</h2>\n        <p class="cat-desc">').concat(a,'</p>\n        <p class="cat-temp">Temperament: ').concat(r,"</p>\n        </div>\n      </div>");e.catContainer.innerHTML=l}n()}();
//# sourceMappingURL=index.c788767c.js.map
