let player = {
name: "Артём",
hp: 100,
weapon: "пистолет",
ammo: 0,
loadAmmo(count) {
    this.ammo+=count;
    return this;
},
shoot() {
    if (this.ammo > 0){
        this.ammo--;
        alert(`${this.name} стреляет из ${this.weapon}`);
        return this;
    } else {
        alert("Патроны кончились")
        return this;
    }
},
changeWeapon(newWeapon) {
    this.weapon = newWeapon;
    return this;
},
info() {
    alert(`${this.name} | HP: ${this.hp} | Оружие: ${this.weapon} | Патроны: ${this.ammo}`);
    return this;
},


}
player.loadAmmo(3).shoot().shoot().info();