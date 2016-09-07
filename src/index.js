'use strict'

/** Calculator for finding widest and/or shortest paths in a graph using the Floyed-Warshall algorithm. */
class FloydWarshall {

  /**
   * Create a Floyd-Warshall calculator for a specific adjacency matrix.
   * @param {number[][]} adjacencyMatrix - A square matrix representing a graph with weighted edges.
   */
  constructor (adjacencyMatrix) {
    this.adjacencyMatrix = adjacencyMatrix
  }

  /**
   * Calculates the widest distance from one node to the other.
   * @return {number[][]} - Matrix with distances from a node to the other
   */
  get widestPaths () {
    let distMatrix = this._initializeDistanceMatrix(0)
    for (let k = 0; k < this.order; ++k) {
      for (let i = 0; i < this.order; ++i) {
        if (i === k) { continue }
        for (let j = 0; j < this.order; ++j) {
          if (j === i || j === k) { continue }
          const direct = distMatrix[i][j]
          const detour = Math.min(distMatrix[i][k], distMatrix[k][j])
          if (detour > direct) {
            distMatrix[i][j] = detour
          }
        }
      }
    }
    return distMatrix
  }

  /**
   * Calculates the shortest paths of the weighted graph.
   * (The output will not be accurate if the graph has a negative cycle.)
   * @return {number[][]} - Matrix with distances from a node to the other
   */
  get shortestPaths () {
    let distMatrix = this._initializeDistanceMatrix(Infinity)

    for (let k = 0; k < this.order; ++k) {
      for (let i = 0; i < this.order; ++i) {
        for (let j = 0; j < this.order; ++j) {
          let dist = distMatrix[i][k] + distMatrix[k][j]
          if (distMatrix[i][j] > dist) {
            distMatrix[i][j] = dist
          }
        }
      }
    }

    for (let i = 0; i < this.order; ++i) {
      for (let j = 0; j < this.order; ++j) {
        if (distMatrix[i][j] === Infinity) {
          distMatrix[i][j] = -1
        }
      }
    }

    return distMatrix
  }

  /**
   * Get the order of the adjacency matrix (and of the output distance matrices.)
   * @return {integer} The order of the adjacency matrix.
   */
  get order () {
    return this.adjacencyMatrix.length
  }

  /**
   * @private
   */
  _initializeDistanceMatrix (blankFiller) {
    let distMatrix = []
    for (let i = 0; i < this.order; ++i) {
      distMatrix[i] = []
      for (let j = 0; j < this.order; ++j) {
        if (i === j) {
          distMatrix[i][j] = 0
        } else {
          let val = this.adjacencyMatrix[i][j]
          if (val) {
            distMatrix[i][j] = val
          } else {
            distMatrix[i][j] = blankFiller
          }
        }
      }
    }
    return distMatrix
  }

}

module.exports = FloydWarshall
