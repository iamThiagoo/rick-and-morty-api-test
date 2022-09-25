$(document).ready(function(event) {

    $.ajax({
        url: "https://rickandmortyapi.com/api/character",
        type: "GET",
        dataType: "json",
        beforeSend: function(){
            $(".cards-container").html(
                `<div id="wifi-loader">
                    <svg class="circle-outer" viewBox="0 0 86 86">
                        <circle class="back" cx="43" cy="43" r="40"></circle>
                        <circle class="front" cx="43" cy="43" r="40"></circle>
                        <circle class="new" cx="43" cy="43" r="40"></circle>
                    </svg>
                    <svg class="circle-middle" viewBox="0 0 60 60">
                        <circle class="back" cx="30" cy="30" r="27"></circle>
                        <circle class="front" cx="30" cy="30" r="27"></circle>
                    </svg>
                    <svg class="circle-inner" viewBox="0 0 34 34">
                        <circle class="back" cx="17" cy="17" r="14"></circle>
                        <circle class="front" cx="17" cy="17" r="14"></circle>
                    </svg>
                    <div class="text" data-text="Estamos configurando tudinho, por favor aguarde!"></div>
                </div>`
            );          
        },
        success: function(data) {
            setTimeout( function() {
                let card = [];

                data.results.forEach( function (item) {

                    card += `
                        <div class="card">
                            <div class="imgbox">
                                <div class="img"><img style="max-width: 100%" src="${item.image}"></div>
                            </div>
                            <div class="details">
                                <h2 class="title">${item.name}</h2>
                            </div>
                        </div>
                    `;

                });
                
                $(".cards-container").html(card);
            }, 3000);
        },
        error: function(data) {
            console.log(data);
        }
    });

});