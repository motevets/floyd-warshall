'use strict';

const Matrix = require('ml-matrix');

/**
 * Algorithm that finds the widest distance from one node to the other
 * @param {Matrix} adjMatrix - A squared adjacency matrix
 * @return {Matrix} - Distance from a node to the other, -1 if the node is unreachable
 */
function floydWarshall(adjMatrix) {
    if (Matrix.isMatrix(adjMatrix) && (adjMatrix.columns !== adjMatrix.rows))
        throw new TypeError('The adjacency matrix should be squared');
    const numVertices = adjMatrix.columns;
    let distMatrix = new Matrix(numVertices, numVertices);
    distMatrix.apply((row, column) => {
        // principal diagonal is 0
        if (row === column)
            distMatrix.set(row, column, 0);
        else {
            let val = adjMatrix.get(row, column);
            // edges values remain the same
            if (val)
                distMatrix.set(row, column, val);
            // 0 values become infinity
            else
                distMatrix.set(row, column, 0);
        }
    });

    for (let k = 0; k < numVertices; ++k) {
        for (let i = 0; i < numVertices; ++i) {
            if (i === k)
                continue;
            for (let j = 0; j < numVertices; ++j) {
                if (j === i || j === k)
                    continue;
                const direct = distMatrix.get(i, j);
                const detour = Math.min(distMatrix.get(i, k), distMatrix.get(k, j));
                if (detour > direct)
                    distMatrix.set(i, j, detour);
            }
        }
    }
    return distMatrix;
}

module.exports = floydWarshall;
