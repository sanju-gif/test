let meeting_rooms = [["XXX", 3],["XXXXX",6],["XXXXXX", 9],["XXX", 2]]
let needed_chairs = 4
let totalChairs = []
let chairsCount = 0;

for (let rooms of meeting_rooms){
		if (chairsCount <= needed_chairs){
		if (rooms[0].length <= rooms[1]){
			let chair = rooms[1] - rooms[0].length
			chairsCount+=chair
			if (rooms[0].length == rooms[1]){
				totalChairs.push(chair)
			}else{
				totalChairs.push(chair)
			}
		}
	}
}

console.log(totalChairs);
