'use strict';

const floydWarshall = require('..');
const Matrix = require('ml-matrix');

describe('Floyd Warshall test', function () {
    it('Directed graph', function () {
        let adjMatrix = new Matrix([
            [ 0, 20, 26, 30, 22],
            [25,  0, 16, 33, 18],
            [19, 29,  0, 17, 24],
            [15, 12, 28,  0, 14],
            [23, 27, 21, 31,  0]
        ]);
        let distMatrix = floydWarshall(adjMatrix);
        distMatrix.to2DArray().should.be.eql([
            [ 0, 28, 28, 30, 24],
            [25,  0, 28, 33, 24],
            [25, 29,  0, 29, 24],
            [25, 28, 28,  0, 24],
            [25, 28, 28, 31,  0]
        ]);
    });
});
