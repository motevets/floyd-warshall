'use strict'

const FloydWarshall = require('..')

describe('FloydWarshall', function () {
  describe('#widestPaths', function () {
    it('calculates a distance matrix with the longest path from one node to another', function () {
      let adjMatrix = [
        [ 0, 20, 26, 30, 22],
        [25,  0, 16, 33, 18],
        [19, 29,  0, 17, 24],
        [15, 12, 28,  0, 14],
        [23, 27, 21, 31,  0]
      ]
      let distMatrix = new FloydWarshall(adjMatrix).widestPaths
      distMatrix.should.eql([
        [ 0, 28, 28, 30, 24],
        [25,  0, 28, 33, 24],
        [25, 29,  0, 29, 24],
        [25, 28, 28,  0, 24],
        [25, 28, 28, 31,  0]
      ])
    })
  })

  describe('#shortestPaths', function () {
    it('calculates a distance matrix with the shortest path from one node to another', function () {
      let adjMatrix = [
        [1, 1, 1, 0],
        [1, 1, 0, 0],
        [1, 0, 1, 0],
        [0, 0, 0, 1]
      ]
      let distMatrix = new FloydWarshall(adjMatrix).shortestPaths
      distMatrix.should.be.eql([
        [ 0,  1,  1, -1],
        [ 1,  0,  2, -1],
        [ 1,  2,  0, -1],
        [-1, -1, -1,  0]
      ])
    })
  })
})
