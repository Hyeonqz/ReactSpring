class Student {
    constructor (name) {
        this.name=name;
    }

    showName() {
        console.log("내 이름은 : " + this.name + " 입니다");
    }

    showname() {
        console.log(`내 이름은 ${this.name} 이다`);
    }

}

let s1 = new Student("현규");
console.log(s1.name);
s1.showname();

let s2 = new Student("성신");
console.log(`${s2.name}`);
s2.showname();