const nameSet = new Set(['John', 'Jane', 'Joe', 'John'])

nameSet.add('Jack')
nameSet.add('Jill')

console.log(nameSet)
console.log(nameSet.has('Jack'))
console.log(nameSet.size)

console.log(nameSet.values())

for (const name of nameSet) {
    console.log(name)
}

console.log(Array.from(nameSet))
