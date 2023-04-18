const superHero = [
    { id: 12345, hero: 'batman', power: 'money' },
    { id: 54321, hero: 'aquaman', power: 'fishpower' }
]

let res = [];
for (let i = 0; i < superHero.length; i++) {
    res.push(superHero[i].power);
}

console.log(res)