!function(){var e={breedSelector:document.querySelector(".breed-select"),catContainer:document.querySelector(".cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};e.breedSelector.addEventListener("change",(function(){(function(t){return e.catContainer.style.display="none",e.loader.style.display="block",fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(t),{headers:{"x-api-key":n}}).then((function(e){return e.json()}))})(e.breedSelector.value).then(t).catch((function(n){e.error.style.display="block",console.log(n),e.catContainer.innerHTML=""}))})),e.breedSelector.style.display="none",e.loader.style.display="block",e.error.style.display="none",e.catContainer.style.display="none";var n="live_ds7IOLf26S1PWwqgPFrJeWA3DKWOVsAilq9eQpOhrh5ZJrNWtWQLnqoUn19c2yKi";function t(n){e.error.style.display="none",e.loader.style.display="none",e.catContainer.style.display="block";var t=n[0].breeds,a=t[0].name,r=t[0].description,c=t[0].temperament,o=n[0].url,l='<div class="cat-container">\n        <img class="cat-image" src="'.concat(o,'" width="450" height="350" />\n        <div>\n        <h2 class="cat-name">').concat(a,'</h2>\n        <p class="cat-desc">').concat(r,'</p>\n        <p class="cat-temp">Temperament: ').concat(c,"</p>\n        </div>\n      </div>");e.catContainer.innerHTML=l}(e.catContainer.style.display="none",e.loader.style.display="block",fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":n}}).then((function(e){return e.json()}))).then((function(n){var t;e.breedSelector.style.display="block",e.loader.style.display="none",t=n;for(var a=0;a<t.length;a++){var r=t[a],c=document.createElement("option");c.value="".concat(r.id),c.innerHTML="".concat(r.name),document.querySelector(".breed-select").appendChild(c)}})).catch((function(n){e.error.style.display="block",console.log(n)}))}();
//# sourceMappingURL=index.0a37b087.js.map
