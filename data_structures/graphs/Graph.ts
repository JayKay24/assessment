class UndirectedGraph {
  public edges = {};

  public addVertex(vertex: any) {
    this.edges[vertex] = {};
  }

  public addEdge(vertex1: any, vertex2: any, weight: number) {
    if (weight === undefined) {
      weight = 0;
    }
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
  }

  public removeEdge(vertex1: any, vertex2: any) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
      delete this.edges[vertex1][vertex2];
    }

    if (this.edges[vertex2] && this.edges[vertex2][vertex1]) {
      delete this.edges[vertex2][vertex1];
    }
  }

  public removeVertex(vertex) {
    for (const adjacentVertex in this.edges[vertex]) {
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
  }
}