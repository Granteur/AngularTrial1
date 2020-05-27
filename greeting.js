function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var person = /** @class */ (function () {
    function person(firstName, lastName, age, phoneNumber, city, state, zipcode, occupation, hourlyWage) {
        this.certifications = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }
    person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    person.prototype.nameNumber = function () {
        return this.fullName + " " + this.phoneNumber;
    };
    person.prototype.jobLocation = function () {
        return this.occupation + " in " + this.state;
    };
    person.prototype.jobTitle = function () {
        return this.firstName + " is a " + this.occupation;
    };
    person.prototype.calcWeeklyCheck = function (workWeek) {
        if (workWeek === void 0) { workWeek = 40; }
        return this.hourlyWage * workWeek;
    };
    person.prototype.file = function () {
        return this.fullName + "\n Age: " + this.age + "\n Contact Number: " + this.phoneNumber + "\n Location: " + this.city + ", " + this.state + " " + this.zipcode;
    };
    person.prototype.appendCert = function () {
        var _a;
        var certifications = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certifications[_i] = arguments[_i];
        }
        (_a = this.certifications).push.apply(_a, certifications);
        return "List of credentials: " + this.certifications;
    };
    return person;
}());
var person1 = new person("Tony", "Stark", 45, "467-578-3976", "New York", "New York", 27564, "Mechanical Engineer", 50000);
var person2 = new person("Sam", "Wilson", 37, "764-392-8976", "Brooklyn", "New York", 86745, "Social Worker", 50);
var person3 = new person("Miles", "Morales", 13, "265-371-5637", "New York City", "New York", 10010, "Student", 10);
document.getElementById("Stark").innerHTML = person1.file();
document.getElementById("Wilson").innerHTML = person2.file();
document.getElementById("Morales").innerHTML = person3.file();
document.getElementById("cred").innerHTML = person1.appendCert("MS", "Ph. D");
//document.getElementById("Mr. Stark").innerHTML = fullName(person1);
//joblocation(Sam);
