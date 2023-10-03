const Stack = require('./stack');

// Example Graph
// A --- B
// |     |
// |     |
// C --- D
// |     |
// |     |
// E --- F

function depthFirstTraversal(graph, startingVertex) {
    if (!graph.adjacencyList[startingVertex]) return []

    const visited = {}
    const stack = new Stack()
    const result = []

    stack.push(startingVertex)
    visited[startingVertex] = true

    while (!stack.isEmpty()) {
        const currentVertex = stack.pop();
        result.push(currentVertex)

        graph.adjacencyList[currentVertex].forEach(neighbor =>  {
            if (!visited[neighbor]) {
                visited[neighbor] = true
                stack.push(neighbor)
            }
        })

    }

    return result;

}

/**
 * depthFirstTraversal visualize
 * 
 * step 1: 
 *     stack.push('A') | push startingVertex to stack
 *     visited['A'] = true | set visited startingVertex as true
 * 
 * step 2: 
 *     const currentVertex = stack.pop(); | pop 'A' from stack
 *     result.push(currentVertex) | push 'A' to result
 * 
 * step 3:
 *         graph.adjacencyList['A'].forEach('B' =>  { | check A edge
            if (!visited['B']) {
                visited['B'] = true
                stack.push('B')
            }
        })

    now
    visited =  {
        'A': true,
        'B': true
    }

    stack = 
    ----
     B |
    ----

    result = ___________________________
             A
             ___________________________

 * step 4:
 *         graph.adjacencyList['A'].forEach('C' =>  { | check A edge
            if (!visited['C']) {
                visited['C'] = true
                stack.push('C')
            }
        })
    now
    visited =  {
        'A': true,
        'B': true,
        'C': true
    }

    stack = 
    ----
     C |
     B |
    ----

    result = ___________________________
             A
             ___________________________

 *     
 * 
 * step 5: 
 *     const currentVertex = stack.pop(); | pop 'C' from stack
 *     result.push(currentVertex) | push 'C' to result
 * 
 * 
 *  * step 6: SKIP
 *         graph.adjacencyList['C'].forEach('A' =>  { | check A edge
            if (!visited['A']) {
                visited['A'] = true
                stack.push('A')
            }
        })
 * 
    
 *  * step 7:
 *         graph.adjacencyList['C'].forEach('D' =>  { | check A edge
            if (!visited['D']) {
                visited['D'] = true
                stack.push('D')
            }
        })


 *  * step 8:
 *         graph.adjacencyList['C'].forEach('E' =>  { | check A edge
            if (!visited['E']) {
                visited['E'] = true
                stack.push('E')
            }
        })
        
    now
    visited =  {
        'A': true,
        'B': true,
        'C': true,
        'D': true,
        'E': true
    }

    stack = 
    ----
     E |
     D |
     B |
    ----

    result = ___________________________
             A, C
             ___________________________


 * step 9: 
 *     const currentVertex = stack.pop(); | pop 'E' from stack
 *     result.push(currentVertex) | push 'E' to result
 * 
 * 
 * 
 * step 10: SKIP
 *         graph.adjacencyList['E'].forEach('C' =>  { | check A edge
            if (!visited['C']) {
                visited['C'] = true
                stack.push('C')
            }
        })

 * step 11:
 *         graph.adjacencyList['E'].forEach('F' =>  { | check A edge
            if (!visited['F']) {
                visited['F'] = true
                stack.push('F')
            }
        })



    now
    visited =  {
        'A': true,
        'B': true,
        'C': true,
        'D': true,
        'E': true,
        'F': true
    }

    stack = 
    ----
     F |
     D |
     B |
    ----

     result = ___________________________
             A, C, E
             ___________________________

 * step 10: 
 *     const currentVertex = stack.pop(); | pop 'F' from stack
 *     result.push(currentVertex) | push 'F' to result
 * 
 * 
 * step 11: SKIP
 *         graph.adjacencyList['F'].forEach('D' =>  { | check A edge
            if (!visited['D']) {
                visited['D'] = true
                stack.push('D')
            }
        })

 * step 12: SKIP
 *         graph.adjacencyList['F'].forEach('E' =>  { | check A edge
            if (!visited['E']) {
                visited['E'] = true
                stack.push('E')
            }
        })


    now
    visited =  {
        'A': true,
        'B': true,
        'C': true,
        'D': true,
        'E': true,
        'F': true
    }

    stack = 
    ----
     D |
     B |
    ----

     result = ___________________________
             A, C, E, F
             ___________________________


 * step 13: 
 *     const currentVertex = stack.pop(); | pop 'D' from stack
 *     result.push(currentVertex) | push 'D' to result
 *     SKIP neighbor vertex B,C,F
 * 
 * 
 *  now
    visited =  {
        'A': true,
        'B': true,
        'C': true,
        'D': true,
        'E': true,
        'F': true
    }

    stack = 
    ----
     B |
    ----

     result = ___________________________
             A, C, E, F, D
             ___________________________


 * step 14:
 *     const currentVertex = stack.pop(); | pop 'B' from stack
 *     result.push(currentVertex) | push 'B' to result
 *     SKIP neighbor vertex A,D
 * 
 * 
 * 
 *  * 
 *  now
    visited =  {
        'A': true,
        'B': true,
        'C': true,
        'D': true,
        'E': true,
        'F': true
    }

    stack = 
    ----
      |
    ----
 * 
     result = ___________________________
             A, C, E, F, D, B
             ___________________________
 * 
 */

module.exports = depthFirstTraversal;
