class Robot {
  constructor() {
    this.coordinates = [0,0]
    this.bearing = "north"
    this.directions = ["north", "east", "south", "west"];
  }
	//your solution here
  setCoordinates(x, y) {
    this.coordinates = [x,y]
  }

  setBearing(bearing) {
    if (this.directions.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(attributes) {
    this.setCoordinates(attributes["x"], attributes["y"])
    this.setBearing(attributes["direction"])
  }

  turnRight() {
    this.bearing = this.turn(this.directions)
  }

  turnLeft() {
    const reverse = this.directions.slice().reverse()
    this.bearing = this.turn(reverse)
  }

  turn(array) {
    return array[(array.findIndex(x => x == this.bearing) + 1) % 4]
  }

  advance() {
    if(this.bearing == "north") {
      this.coordinates[1] = this.coordinates[1] + 1
    }
    else if(this.bearing == "south") {
      this.coordinates[1] = this.coordinates[1] - 1
    }
    else if(this.bearing == "east") {
      this.coordinates[0] = this.coordinates[0] + 1
    }
    else if(this.bearing == "west") {
      this.coordinates[0] = this.coordinates[0] - 1
    }
  }

  translateInstructions(string) {
    string.split("").forEach((i) => {
      switch(i) {
        case "L":
          this.turnLeft()
          break
        case "R":
          this.turnRight()
          break
        case "A":
          this.advance()
          break
      }
    })
  }
}
