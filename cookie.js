// // "key=value; path=/; expires=дата видалення"
// document.cookie = "auth=111111111; path=/; expires=Thu, Dec 5 2024 16:42:00 GMT";
// document.cookie = "user=admin; path=/; expires=Thu, Dec 5 2024 16:42:00 GMT";

// const today = new Date();
// today.setMinutes(today.getMinutes() + 5);
// document.cookie = `test=time; path=/; expires=${today.toUTCString()};`;

//'test; time=time; auth=111111111; user=admin; test=time'
// const cookies = document.cookie;



// 0
// "test"
// 1
// "time=time"
// 2
// "auth=111111111"
// 3
// "user=admin"
// 4
// "test=time"




// const keys = cookies.split("; ");

// const mapKeys = new Map();

// for (const item of keys) {
//     const data = item.split("=");
//     mapKeys.set(data[0], data[1]);
// }

// const user = mapKeys.get("user");

// if(user != undefined) {
//     console.log(user);
// }




// запис значення у кукі
function setCookie(key, value, expires = null) {
    document.cookie = `${key}=${value}; path=/; expires=${expires != null ? expires: ""};`;
};

setCookie("PV311", "Cookie lesson");

// видалення кукі
function deleteCookie(key) {
    document.cookie = `${key}=; path=/; expires=Thu, Jan 1 1970 00:00:00 GMT;`
}
deleteCookie("auth");


// отримання кукі
function getCookie(key) {
    const cookies = document.cookie.split("; ");

    for(const item of cookies) {
        const data = item.split("=");
        if(data[0] === key) {
            return data[1];
        }
    }

    return null;
}

const time = getCookie("time");
console.log(time);
