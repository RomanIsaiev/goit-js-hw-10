!function(){var e={breedSelector:document.querySelector(".breed-select"),catContainer:document.querySelector(".cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};e.breedSelector.addEventListener("change",(function(){var n=[];return fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":t}}).then((function(t){return e.catContainer.style.display="none",e.loader.style.display="block",t.json()})).then((function(c){e.breedSelector.style.display="block",e.loader.style.display="none",n=c;for(var a=0;a<n.length;a++){var r=n[a],o=document.createElement("option");o.value="".concat(r.id),o.innerHTML="".concat(r.name),document.querySelector(".breed-select").appendChild(o)}!function(n){fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(n),{headers:{"x-api-key":t}}).then((function(t){return e.catContainer.style.display="none",e.loader.style.display="block",t.json()})).then((function(t){e.loader.style.display="none",e.catContainer.style.display="block";var n=t[0].breeds,c=n[0].name,a=n[0].description,r=n[0].temperament,o=t[0].url,l='<div class="cat-container">\n        <img class="cat-image" src="'.concat(o,'" width="450" height="350" />\n        <div>\n        <h2 class="cat-name">').concat(c,'</h2>\n        <p class="cat-desc">').concat(a,'</p>\n        <p class="cat-temp">Temperament: ').concat(r,"</p>\n        </div>\n      </div>");e.catContainer.innerHTML=l})).catch((function(t){e.error.style.display="block",console.log(t)}))}(e.breedSelector.value)})).catch((function(t){e.error.style.display="block",console.log(t)}))})),e.breedSelector.style.display="none",e.loader.style.display="block",e.error.style.display="none",e.catContainer.style.display="none";var t="live_ds7IOLf26S1PWwqgPFrJeWA3DKWOVsAilq9eQpOhrh5ZJrNWtWQLnqoUn19c2yKi"}();
//# sourceMappingURL=index.e7571462.js.map
