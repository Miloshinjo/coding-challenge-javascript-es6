/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

// class that contains parks and streets together
class cityObjects {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}
// park class for parks
class Park extends cityObjects {
    constructor(name, buildYear, numberOfTrees, parkArea) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea; // km2
    }
    // Park with more then 1000 trees method.
    moreTrees() {
        if (this.numberOfTrees > 1000) {
            console.log (`${this.name} has more then 1000 trees.`);
        }
    }
    // Tree density method
    treeDens() {
        const treedens = this.numberOfTrees / this.parkArea;
        console.log(`${this.name} has the tree density of ${treedens} trees per square km.`);
    }
}


class Street extends cityObjects {
    constructor(name, buildYear, lengthOfStreet, size = 'normal') {
        super(name, buildYear);
        this.size = size;
        this.lengthOfStreet = lengthOfStreet;
    }

    // total and average length methods
    built() {
        console.log(`${this.name}, built in ${this.buildYear}, is a ${this.size} street.`);
    }

}


const allparks = [
    new Park('John Cleese Park', 1965, 1300, 0.2),
    new Park('Michael Palin Park', 1945, 780, 0.5),
    new Park('Eric Idle Park', 1995, 500, 1),
    new Park('Marijana Park', 2035, 230, 40)
]

const allstreets = [
    new Street('LeBron Street', 1920, 4, 'small'),
    new Street('Kawhi Street', 1970,  7, 'huge'),
    new Street('Ben Street', 1889, 5, 'large'),
    new Street('Green Street', 1920, 4)
]

// function to calculate the average. try to put it into a method. (learn how to call methods on arrays?!)

function averageAge(arr) {

    const currentAge = arr.map(cur => new Date().getFullYear() - cur.buildYear);

    function add(a, b) {
        return a + b;
    }

    const totalAge = currentAge.reduce(add, 0);
    const average = totalAge / arr.length;

    console.log(`Our ${arr.length} parks have an average age of ${average} years.`);
}

function averageStreet(arr) {
    const streetLengths = arr.map (cur => cur.lengthOfStreet);

    function add(a, b) {
        return a + b;
    }

    const totalLe = streetLengths.reduce(add, 0);

    const averageLe = totalLe / arr.length;

    console.log(`Our ${arr.length} streets have a total length of ${totalLe} km, with an average length of ${averageLe} km.`)


}

function parksInfo () {
    console.log('---------------------------------------------------------------');
    console.log('----PARKS REPORT-------');
        // 1. average age log
            averageAge(allparks);
        // 2. Tree density log
            allparks.forEach (cur => cur.treeDens());
        // 3. Park that has more then 1000 trees log
            allparks.forEach (cur => cur.moreTrees());
    console.log('---------------------------------------------------------------');

}

function streetsInfo () {
    console.log('----STREETS REPORT-------');
    // 1. Total length and average length of streets
    averageStreet(allstreets);
    // 2. What kind of a street each is. (map may be good for this)
    allstreets.forEach (cur => cur.built());

    console.log('---------------------------------------------------------------');
}

function init() {
    parksInfo();
    streetsInfo();
}

init();


