export async function RenderAllPokemonInContainer(elementHTML, pokemonList) {

    //console.log('pokemonlist', pokemonList)



    pokemonList.forEach(
        function(item) {

            var pokemonContainer = document.createElement('div')
            pokemonContainer.classList = 'pokemon_container'
            pokemonContainer.dataset.id = item.id

            var pokemonName = document.createElement('span')
            pokemonName.classList = 'pokemon_name'
            pokemonName.innerHTML = item.name

            var pokemonImage = document.createElement('div')
            pokemonImage.classList = 'pokemon_image'

            var imagePokemon = document.createElement('img')
            imagePokemon.src = item.img


            pokemonContainer.appendChild(pokemonName)

            pokemonImage.appendChild(imagePokemon)

            pokemonContainer.appendChild(pokemonImage)
            elementHTML.appendChild(pokemonContainer);
        }
    );
}

export function SetEventToOpenModal(pokemonContainer, pokemonList, dataModel) {


    function nameToTitle(name, number) {
        return name + ' - num : ' + number
    }

    Array.from(pokemonContainer).forEach(pokemon => {
        pokemon.addEventListener('click', function() {

            var id = pokemon.dataset.id;
            var pokemonSelect = pokemonList.find(select => select.id == id)
                //console.log(pokemonSelect)

            dataModel.ModalTitle.innerHTML = nameToTitle(pokemonSelect.name, pokemonSelect.num)
            dataModel.ImagePokemon.src = pokemonSelect.img

            // var namePrevPokemon = pokemonList.find(name => name.name == pokemonSelect.prev_evolution[1].name)
            // dataModel.prevImage.src = namePrevPokemon.img;
            // dataModel.prevName.innerHTML = namePrevPokemon.name;

            var prev = pokemonSelect.prev_evolution
            var next = pokemonSelect.next_evolution

            if (prev == undefined && next == undefined) {
                dataModel.prev.style.display = 'none'
                dataModel.next.style.display = 'none'
            } else {
                if (prev == undefined && next.length) {
                    dataModel.prev.style.display = "none"
                    dataModel.next.style.display = "flex"

                    dataModel.nextName.innerHTML = next[next.length - next.length].name;

                    var NextPokemon = pokemonList.find(name => name.name == next[next.length - next.length].name)
                    dataModel.nextImage.src = NextPokemon.img;
                } else {
                    if (next == undefined && prev.length) {
                        dataModel.prev.style.display = "flex"
                        dataModel.next.style.display = "none"

                        dataModel.prevName.innerHTML = pokemonSelect.prev_evolution[prev.length - 1].name;

                        var prevPokemon = pokemonList.find(name => name.name == prev[prev.length - 1].name)
                        dataModel.prevImage.src = prevPokemon.img;
                    } else {
                        if (next.length && prev.length) {
                            dataModel.prev.style.display = "flex"
                            dataModel.next.style.display = "flex"

                            dataModel.prevName.innerHTML = pokemonSelect.prev_evolution[prev.length - 1].name;
                            var prevPokemon = pokemonList.find(name => name.name == prev[prev.length - 1].name)
                                //console.log(prev[prev.length - 1].name)
                            dataModel.prevImage.src = prevPokemon.img;

                            dataModel.nextName.innerHTML = pokemonSelect.next_evolution[next.length - 1].name;
                            var nextPokemon = pokemonList.find(name => name.name == next[next.length - 1].name)
                            dataModel.nextImage.src = nextPokemon.img;
                        }
                    }
                }

            }
            // avg_spawns: 69
            // type: (2) ["Grass", "Poison"]
            // weaknesses: (4) ["Fire", "Ice", "Flying", "Psychic"]

            dataModel.table.height_value.innerHTML = pokemonSelect.height
            dataModel.table.weight_value.innerHTML = pokemonSelect.weight
            dataModel.table.egg_value.innerHTML = pokemonSelect.egg
            dataModel.table.candy_count_value.innerHTML = pokemonSelect.candy_count
            dataModel.table.candy_value.innerHTML = pokemonSelect.candy
            dataModel.table.multipliers_value.innerHTML = (pokemonSelect.multipliers == null) ? 0 : pokemonSelect.multipliers
            dataModel.table.spawn_time_value.innerHTML = pokemonSelect.spawn_time
            dataModel.table.spawn_chance_value.innerHTML = pokemonSelect.spawn_chance
            dataModel.table.avg_spawns_value.innerHTML = pokemonSelect.avg_spawns

            dataModel.type.innerHTML = ""


            var color = [
                { name: "fire", colorHexa: "#ff3b3b" },
                { name: "ice", colorHexa: "#0072b5" },
                { name: "flying", colorHexa: "#00b572" },
                { name: "psychic", colorHexa: "#b700e4" },
                { name: "water", colorHexa: "#00b3c5" },
                { name: "ground", colorHexa: "#753c00" },
                { name: "rock", colorHexa: "#6d6d6d" },
                { name: "electric", colorHexa: "#c9d600" },
                { name: "fighting", colorHexa: "#a200b5" },
                { name: "poison", colorHexa: "#650c9c" },
                { name: "grass", colorHexa: "#209229" },
                { name: "bug", colorHexa: "#696969" },
                { name: "normal", colorHexa: "#f5f5f5" },
                { name: "fairy", colorHexa: "#2c9220" },

                { name: "ghost", colorHexa: "#758e94" },
                { name: "dark", colorHexa: "#0c0909c2" },
                { name: "steel", colorHexa: "#6f6f6f" },
                { name: "dragon", colorHexa: "#ff5722" },


            ]
            pokemonSelect.type.forEach(item => {
                var span = document.createElement('span')
                span.innerHTML = item
                    //console.log(item)
                var colorSpecific = color.find(colorname => colorname.name == item.toLowerCase())
                    //console.log(colorSpecific)
                span.style.background = colorSpecific.colorHexa
                dataModel.type.appendChild(span)
            })

            dataModel.weaknesses.innerHTML = ""

            //console.log(pokemonSelect.weaknesses)
            pokemonSelect.weaknesses.forEach(item => {
                var span = document.createElement('span')
                span.innerHTML = item
                var colorSpecific = color.find(colorname => colorname.name == item.toLowerCase())
                console.log('1 ', colorSpecific)
                console.log('2 ', item)
                span.style.background = colorSpecific.colorHexa

                dataModel.weaknesses.appendChild(span)
            })


            MicroModal.show(dataModel.idModal)
                //console.log('name', dataModel.ImagePokemon)
        })
    })

}