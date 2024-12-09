function formHandler(event) {
    // зупини роботу форми
    event.preventDefault();

    const form = event.target;

    const counter = document.getElementById("counter");

    const params = {};

    params.text = form["text"].value;
    params.type = form["type"].value;
    params.size = form["size"].value;
    params.color = form["color"].value;
    params.borderCheck = form["borderCheck"].checked;
    params.borderColor = form["borderColor"].value;
    params.id = counter.value++;

    form.reset();

    saveToLocalStorage(params);

    addFigure(params);
}

// видалення фігур
function figureClick(event, id) {
    if(!event.shiftKey) {
        return;
    }

    const jsonData = localStorage.getItem("figures");
    if(jsonData) {
        let data = JSON.parse(jsonData);
        data = data.filter(item => item.id != id);
        localStorage.setItem("figures", JSON.stringify(data));
        location.reload();
    }
}

function saveToLocalStorage(params) {
    const jsonData = localStorage.getItem("figures");

    if (jsonData) {
        const data = JSON.parse(jsonData);
        data.push(params);
        localStorage.setItem("figures", JSON.stringify(data));
    } else {
        const data = [];
        data.push(params);
        localStorage.setItem("figures", JSON.stringify(data));
    }
}

function loadFigures() {
    const jsonData = localStorage.getItem("figures");
    if (jsonData) {
        const data = JSON.parse(jsonData);

        for (let item of data) {
            addFigure(item);
        }
    }
}

function addFigure(params) {
    const container = document.getElementById("figureContainer");

    const figure = document.createElement("div");
    figure.classList.add("figure");
    figure.style.width = params.size + "px";
    figure.style["height"] = params.size + "px";
    figure.innerText = params.text;
    figure.style.backgroundColor = params.color;
    if (params.type == "circle") {
        figure.style.borderRadius = "50%";
    }
    
    if(params.borderCheck) {
        figure.style.border = `2px solid ${params.borderColor}`;
    }

    // задали події на onlick
    figure.addEventListener("click", (event) => {
        figureClick(event, params.id);
    });

    container.appendChild(figure);
}

function checkBorderHandler(event) {
    const checkbox = event.target;
    const color = document.getElementById("borderColor");

    if(checkbox.checked) {
        color.hidden = false;
    } else {
        color.hidden = true;
    }
}

loadFigures();