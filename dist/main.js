function button() {
    $('.recipeContainer').empty()
    let ingredient = $('#input').val()

    $.get(`http://localhost:8080/recipes/${ingredient}`, function (data) { 

        const sourse = $('#recipe-template').html()
        const template = Handlebars.compile(sourse)
        const newHtml = template({ players: data })

        $(".recipeContainer").append(newHtml)

    
    })
}


// let rend = new Renderer()

// let renderData = function() {
//     rend.render()
// }

