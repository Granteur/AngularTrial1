function sayHello(person: string): string {
    return "Hello, " + person;
}

var user = "Super Student";

document.getElementById("para").innerHTML = sayHello(user);

//compiled with tsc greeting.ts -> created a JavaScript file greeting.js

//Interface
interface EmployeeOption{
    firstName: string;
    lastName: string;
    age?: number;
    phoneNumber: string;
    city?: string;
    state?: string;
    zipcode?: number;
    occupation: string;
    hourlyWage?: number
    
}

class person implements EmployeeOption{
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: string;
    city: string;
    state: string;
    zipcode: number;
    occupation: string;
    hourlyWage: number;
    certifications: string[] = [];

    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, city: string, state: string, zipcode: number, occupation: string, hourlyWage: number){
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

    fullName(): string{
        return this.firstName + " " + this.lastName;
    }
    nameNumber(): string{
        return this.fullName + " " + this.phoneNumber;
    }
    jobLocation(): string{
        return this.occupation + " in " + this.state;
    }
    jobTitle(): string{
        return this.firstName + " is a " + this.occupation;
    }
    calcWeeklyCheck(workWeek: number = 40): number{
        return this.hourlyWage * workWeek;
    }
    file(): string{
        return this.fullName + "\n Age: " + this.age + "\n Contact Number: " + this.phoneNumber + "\n Location: " + this.city + ", " + this.state + " " + this.zipcode;
    }
    appendCert(...certifications: string[]){
        this.certifications.push(...certifications);
        return "List of credentials: " + this.certifications;
    }

    let person1 = new person("Tony", "Stark", 45, "467-578-3976", "New York", "New York", 27564, "Mechanical Engineer", 50000);

    let person2 = new person("Sam", "Wilson", 37, "764-392-8976", "Brooklyn", "New York", 86745, "Social Worker", 50);

    let person3 = new person("Miles", "Morales", 13, "265-371-5637", "New York City", "New York", 10010, "Student", 10);

    document.getElementById("Stark").innerHTML = person1.file();
    document.getElementById("Wilson").innerHTML = person2.file(); 
    document.getElementById("Morales").innerHTML = person3.file();
    document.getElementById("cred").innerHTML = person1.appendCert("MS", "Ph. D");

    //document.getElementById("Mr. Stark").innerHTML = fullName(person1);


    //joblocation(Sam);