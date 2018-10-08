
const bearings = ["north", "east", "south", "west"]
class Robot {

        constructor(coordinates = [0, 0], bearing = "north") {
          this.coordinates = coordinates
          this.bearing = bearing
        }
        setCoordinates(x, y) {
          this.coordinates[0] = x
          this.coordinates[1] = y
        }
        setBearing(bearing) {
          if (!bearings.includes(bearing)) throw "Invalid Robot Bearing";
          this.bearing = bearing;
        }
        place(directionsHash) {
          this.coordinates[0] = directionsHash.x
          this.coordinates[1] = directionsHash.y
          this.bearing = directionsHash.direction
        }
        turnRight() {
          this.bearing = this.bearing === "west" ? "north" :
          bearings[bearings.indexOf(this.bearing) + 1]
        }

        turnLeft() {
          this.bearing = this.bearing === "north" ? "west" :
          bearings[bearings.indexOf(this.bearing) - 1]
        }
        advance() {
          switch (this.bearing) {
            case "north":
              this.coordinates[1]++
              break
            case "south":
              this.coordinates[1]--
              break
            case "east":
              this.coordinates[0]++
              break
            case "west":
              this.coordinates[0]--
              break
          }
        }

        translateInstructions(commands) {
         [...commands].forEach(letter => {
          switch (letter) {
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
