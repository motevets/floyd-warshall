<a name="FloydWarshall"></a>

## FloydWarshall
Calculator for finding widest and/or shortest paths in a graph using the Floyed-Warshall algorithm.

**Kind**: global class  

* [FloydWarshall](#FloydWarshall)
    * [new FloydWarshall(adjacencyMatrix)](#new_FloydWarshall_new)
    * [.widestPaths](#FloydWarshall+widestPaths) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
    * [.shortestPaths](#FloydWarshall+shortestPaths) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
    * [.order](#FloydWarshall+order) ⇒ <code>integer</code>

<a name="new_FloydWarshall_new"></a>

### new FloydWarshall(adjacencyMatrix)
Create a Floyd-Warshall calculator for a specific adjacency matrix.


| Param | Type | Description |
| --- | --- | --- |
| adjacencyMatrix | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | A square matrix representing a graph with weighted edges. |

<a name="FloydWarshall+widestPaths"></a>

### floydWarshall.widestPaths ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
Calculates the widest distance from one node to the other.

**Kind**: instance property of <code>[FloydWarshall](#FloydWarshall)</code>  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - - Matrix with distances from a node to the other  
<a name="FloydWarshall+shortestPaths"></a>

### floydWarshall.shortestPaths ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
Calculates the shortest paths of the weighted graph.
(The output will not be accurate if the graph has a negative cycle.)

**Kind**: instance property of <code>[FloydWarshall](#FloydWarshall)</code>  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - - Matrix with distances from a node to the other  
<a name="FloydWarshall+order"></a>

### floydWarshall.order ⇒ <code>integer</code>
Get the order of the adjacency matrix (and of the output distance matrices.)

**Kind**: instance property of <code>[FloydWarshall](#FloydWarshall)</code>  
**Returns**: <code>integer</code> - The order of the adjacency matrix.  
