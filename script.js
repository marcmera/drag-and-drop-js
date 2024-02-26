$(document).ready(function () {
            $(".draggable").draggable({
                revert: "invalid",
                cursor: "move"
            });

            $(".droppable").droppable({
                drop: function (event, ui) {
                    let droppableId = $(this).attr('id');
                    let draggableId = ui.draggable.attr('id');
                    let text = ui.draggable.text();
                    $("#" + droppableId).text(text);
                    ui.helper.data('dropped', true);
                    ui.draggable.draggable("option", "revert", true);
                }
            });
            $("#reset").on("click", function () {
                $(".droppable").text("");
                $(".siguiente-historia").hide();
                $("#seguir-historia").show();
                $("#random").show();
                $(".draggable").draggable("enable");
            });+
            $("#random").on("click", function () {
                let lugares = [
                    "Murcia",
                    "bar de Strippers",
                    "la casa de tu madre",
                ];
                let personajes = [
                    "Leo",
                    "Jon",
                    "Himel",
                ];
                let deseos = [
                    "felicidad",
                    "ganar una partida del LoL",
                    "mujeres",
                ];
                let lugar = lugares[Math.floor(Math.random() * lugares.length)];
                let personaje = personajes[Math.floor(Math.random() * personajes.length)];
                let deseo = deseos[Math.floor(Math.random() * deseos.length)];
                $("#contenedor-lugar").text(lugar);
                $("#contenedor-personaje").text(personaje);
                $("#contenedor-deseo").text(deseo);
            }
            );
            $("#seguir-historia").on("click", function () {
                let lugar = $("#contenedor-lugar").text().trim();
                let personaje = $("#contenedor-personaje").text().trim();
                let deseo = $("#contenedor-deseo").text().trim();
                let inicioHistoria = '';
                let nudoHistoria = '';
                let finHistoria = '';

                if (lugar && personaje && deseo) {

                    inicioHistoria = 'Al llegar a {lugar},';
                    inicioHistoria = inicioHistoria.replace('{lugar}', lugar);
                    $('#inicio-historia').text(inicioHistoria);

                    if (deseo === "felicidad") {
                        nudoHistoria = '{personaje} encontró la felicidad descubriendo su vocación,';
                        finHistoria = ' convirtiéndose así en un gran stripper.';
                    } else if (deseo === "ganar una partida del LoL") {
                        nudoHistoria = '{personaje} descubrió que no era capaz de ganar una sola partida del LoL,';
                        finHistoria ='así que se convirtió en un gran stripper para poder comprarse una cuenta de rango alto y sentirse bien consigo mismo.';
                    } else if (deseo === "mujeres") {
                        nudoHistoria = '{personaje} descubrió su gran miedo a las mujeres,';
                        finHistoria = ' por lo que decidió convertirse en stripper de bares gays para no tener que lidiar con ellas nunca.';
                    }
                    // Reemplazar los marcadores por los valores correspondientes
                    nudoHistoria = nudoHistoria.replace('{personaje}', personaje);
                    $("#nudo-historia").text(nudoHistoria);
                    $("#fin-historia").text(finHistoria);
                    $(".siguiente-historia").show();
                    $("#seguir-historia").hide();
                    $("#reset").show();
                    $("#random").hide();
                    $(".draggable").draggable("disable");
                } else {
                    alert("¡Debes completar la historia!");
                }
            });
        });