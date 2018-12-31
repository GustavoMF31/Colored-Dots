let middle
let people = []

class Person{
	constructor(col, speed, pos, target){
		this.col = col
		this.speed = speed
		this.target = target
		this.pos = pos
	}
	show(){
		fill(this.col[0], this.col[1], this.col[2])
		ellipse(this.pos[0], this.pos[1], 10)
	}
	move(){
		if (this.target[0] > this.pos[0]){
			this.pos[0] += 1
		}else if(this.target[0] < this.pos[0]){
			this.pos[0] -= 1
		}

		if (this.target[1] > this.pos[1]){
			this.pos[1] += 1
		}else if(this.target[1] < this.pos[1]){
			this.pos[1] -= 1
		}

 
	}
}

function randomColor(){
	return [random(255), random(255), random(255)]
}

function randomCoord(){
	return [floor(random(width)), floor(random(height))]
}

function randomPerson(){
	return new Person(randomColor(), random(100), randomCoord(), randomCoord())
}

function p(){
	return new Person([100,255,100], 100, [500, 500], [0, 0])
}
function setup(){
	createCanvas(650, 500)
	middle = [width/2, height/2]
	for (let i = 0; i < 1000; i++) {
		people.push(randomPerson())
	}
}

function draw() {
	background(0)
	for (let person of people){
		person.move()
		person.show()
	}
}