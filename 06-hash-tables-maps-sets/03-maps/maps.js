const nameMap = new Map([
    [1, 'John'],
    [2, 'Jack'],
    [3, 'Jane']

]);

const map2 = new Map([
    ['name', 'john'],
    [1, 'Number one'],
    [true, 'Really true'],
    [null, 'null'],
    [()=>{}, 'Func'],
    [{}, 'Object']
])

nameMap.set(4, 'Four')

console.log(nameMap)
console.log(map2)
console.log(map2.get(1))
console.log(map2.has('name'))

nameMap.delete(3)
console.log(nameMap)
console.log(nameMap.size)

// Iteration
for (const [key, value] of nameMap) {
    console.log(key, value)
 }

 nameMap.forEach((val,key) => console.log(key, val))

 // get all keys
 console.log(nameMap.keys())

 // get all vals
 console.log(nameMap.values())