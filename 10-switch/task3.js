const MAX_USERS = 5;
let usersProcessed = 0;
let log = "";
while (true) {
let login = prompt("LOGIN:", "");
let level;
let suspicious = false;
let role;
let statuS;
if (login === null){
    break;
} else if (login === ""){
    alert("Пустой логин, пропуск"); continue;
} else if (login === "exit") {
    break;
} else if (login === "root" || login === "test") {
    alert("ЗАПРЕЩЕН: " + login);
    continue;
  }
 switch(login) {
    case "admin":
        level = 100;
        break;
    case "mod":
    case "moderator":
        level = 50;
        break;
    case "guest":
    case "user":
        level = 10;
        break;
    default:
        level = 1;      
} if (level === 1 && login !== "anonymous") {
    suspicious = true;
}
role ??= "guest"; 
statuS = level >= 50 ? "ВЫСОКИЙ" : "НИЗКИЙ";
    usersProcessed++;
    log += usersProcessed + " | " + login + " | " + level + " | " + suspicious + " | " + role + " | " + statuS + "\n";
    if (usersProcessed >= MAX_USERS) break;
}
alert(log);










