function button() {
    $('.recipeContainer').empty()
    let ingredient = $('#input').val()

    $.get(`http://localhost:8080/recipes/${ingredient}`, function (data) { //specially for teamName

        const sourse = $('#recipe-template').html()
        const template = Handlebars.compile(sourse)
        const newHtml = template({ players: data })

        $(".recipeContainer").append(newHtml)

        // $(".headline").empty()ingredient
        // $(".headline").append(teamName)
    })
}
