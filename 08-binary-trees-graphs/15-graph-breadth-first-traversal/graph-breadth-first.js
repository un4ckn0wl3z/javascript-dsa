const Queue = require('./queue');

// Example Graph
// A --- B
// |     |
// |     |
// C --- D
// |     |
// |     |
// E --- F

// A -> B, C
// B -> A, D
// C -> A, D, E
// D -> B, C, F
// E -> C, F
// F -> D, E

function breadthFirstTraversal(graph, startingVertex) {
    const visited = new Set()
    const result = []
    const queue = new Queue()

    queue.enqueue(startingVertex)
    visited.add(startingVertex)

    while (!queue.isEmpty()) {
        const currentVertex = queue.dequeue()
        result.push(currentVertex)

        for (const neighbor of graph.adjacencyList[currentVertex]) {
            if (!visited.has(neighbor)) {
                queue.enqueue(neighbor)
                visited.add(neighbor)
            }
        }

    }

    return result

}

/***
 * breadthFirstTraversal explained
 * 
 * step 1:
 *        init:
 *              queue.enqueue(startingVertex) | add 'A' to queue
                visited.add(startingVertex) | set A as visited
   step 2: 
        const A = queue.dequeue() | dequeue 'A'
        result.push(A) | pust 'A' to result

   step 3:
        for (const B of graph.adjacencyList['A']) {
            if (!visited.has(B)) {
                queue.enqueue(B)
                visited.add(B)
            }
        }

   step 4:
        for (const B of graph.adjacencyList['A']) {
            if (!visited.has(C)) {
                queue.enqueue(C)
                visited.add(C)
            }
        }


    now:

    visited = [A,B,C]
    result = [A]
    queue = [C,B]


    step 5: 
        const B = queue.dequeue() | dequeue 'B'
        result.push(B) | pust 'B' to result

   
    step 6: SKIP
        for (const A of graph.adjacencyList['B']) {
            if (!visited.has(A)) {
                queue.enqueue(A)
                visited.add(A)
            }
        }

   step 7:
        for (const D of graph.adjacencyList['B']) {
            if (!visited.has(D)) {
                queue.enqueue(D)
                visited.add(D)
            }
        }

     
    now:

    visited = [A,B,C,D]
    result = [A,B]
    queue = [D, C]


    step 8: 
        const C = queue.dequeue() | dequeue 'C'
        result.push(C) | pust 'C' to result


        SKIP A,D

   step 9:
        for (const E of graph.adjacencyList['C']) {
            if (!visited.has(E)) {
                queue.enqueue(E)
                visited.add(E)
            }
        }


    now:

    visited = [A,B,C,D,E]
    result = [A,B,C]
    queue = [E, D]



    
    step 10: 
        const D = queue.dequeue() | dequeue 'D'
        result.push(D) | pust 'D' to result


        SKIP B,C

   step 11:
        for (const F of graph.adjacencyList['D']) {
            if (!visited.has(F)) {
                queue.enqueue(F)
                visited.add(F)
            }
        }


    now:

    visited = [A,B,C,D,E,F]
    result = [A,B,C,D]
    queue = [F, E]


    step 12: 
        const E = queue.dequeue() | dequeue 'E'
        result.push(E) | pust 'E' to result


        SKIP C,F


    visited = [A,B,C,D,E,F]
    result = [A,B,C,D,E]
    queue = [F]

    F is last one so skip all edges


    
    visited = [A,B,C,D,E,F]
    result = [A,B,C,D,E,F]
    queue = []

 * 
 * 
 * 
 * 
 */

module.exports = breadthFirstTraversal;
