var elList = document.querySelector('.list');
elList.innerHTML = null;

for (var pokemon of pokemons) {

    // Creating...

    var newLi = document.createElement('li');
    var newHeading = document.createElement('h3');
    var newImg = document.createElement('img');
    var newParagraph = document.createElement('h5');
    var newTime = document.createElement('time');
    var newCandy = document.createElement('h5');
    var newHeight = document.createElement('p');
    var newWeight = document.createElement('p');
    var newCandyCount = document.createElement('p');
    var newEggs = document.createElement('h6');
    var newSpawnChance = document.createElement('p');
    var newAvgSpawns = document.createElement('p');
    var newSpawnTime = document.createElement('p');
    var newTypes = document.createElement('p');
    var newMultipliers = document.createElement('time');
    var newHeadingTop = document.createElement('h1');

    // Texting...

    newHeading.textContent = pokemon.name;
    newTime.textContent = normalizedDate(pokemon.num);
    newCandy.textContent = pokemon.candy;
    newHeight.textContent = pokemon.height;
    newWeight.textContent = pokemon.weight;
    newCandyCount.textContent = pokemon.candy_count;
    newEggs.textContent = pokemon.egg;
    newSpawnChance.textContent = pokemon.spawn_chance;
    newAvgSpawns.textContent = pokemon.avg_spawns;
    newSpawnTime.textContent = pokemon.spawn_time;
    newMultipliers.textContent = pokemon.multipliers;
    newHeadingTop.textContent = pokemon.elList;
    newParagraph.textContent = pokemon.weaknesses.splice(0, 10).join(' ');

    // Styling

    elList.style.paddingTop = "50px";
    newLi.style.color = "#718093"
    newLi.style.border = "5px"
    elList.style.border = '5px'
    newParagraph.style.marginRight = '15px';

    // For Of Loops

    for (var weaknesse of pokemon.weaknesses) {
        var newParagrap = document.createElement('p');

        newParagrap.textContent = weaknesse;
        newParagraph.appendChild(newParagrap);
    }

    for (var item of pokemon.type) {
        var newType = document.createElement('li');

        newType.textContent = item;
        newTypes.appendChild(newType);
    }

    // Set Attribute...
    newTime.setAttribute('class', 'new__time')
    newLi.setAttribute('class', 'list__item ');
    newHeading.setAttribute('class', 'pokemon__heading');
    newImg.setAttribute('class', 'pokemon__img');
    newImg.setAttribute('alt', pokemon.name + ' img');
    newImg.setAttribute('src', pokemon.img);
    newWeight.setAttribute('class', 'new__weight')
    newParagraph.setAttribute('class', 'new_paragraph')

    newImg.setAttribute('width', '180');
    newImg.setAttribute('height', '180');

    // Appendding...
    newLi.appendChild(newHeading);
    newLi.appendChild(newImg);
    newLi.appendChild(newTime);
    newLi.appendChild(newParagraph);
    newLi.appendChild(newCandy);
    newLi.appendChild(newHeight);
    newLi.appendChild(newWeight);
    newLi.appendChild(newCandyCount);
    newLi.appendChild(newEggs);
    newLi.appendChild(newSpawnChance);
    newLi.appendChild(newAvgSpawns);
    newLi.appendChild(newSpawnTime);
    newLi.appendChild(newTypes);
    newLi.appendChild(newMultipliers);
    elList.appendChild(newLi);
}
