function characterPage() {
    const chId = document.getElementById("chId").value;
    const chName = document.getElementById("chName").value;

    console.log(chId);
    let url = "character/?";

    if(chId) {
        url += "id=" + chId;
    }

    if(chName.trim()) {     
        url += "name=" + chName   
    }

    window.location = url;
}

console.log("Main page");
