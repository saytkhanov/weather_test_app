let d = new Date();
let date = d.getDate();
let year = d.getFullYear();
let month = d.toLocaleString("default", { month: "long" });
let day = d.toLocaleString("default", { weekday: "long" });


export {
    date,
    year,
    month,
    day
}
