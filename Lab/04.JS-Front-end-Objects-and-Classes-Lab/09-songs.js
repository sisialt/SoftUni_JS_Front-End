function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songs = [];
    const numberSongs = input.shift();
    const type = input.pop();

    for (let i = 0; i < numberSongs; i++) {
        const [typeList, name, time] = input[i].split('_');

        const song = new Song(typeList, name, time);

        songs.push(song);
    }

    if (type === 'all') {
        songs.forEach(song => console.log(song.name))
    } else {
        songs.filter(s => type === s.typeList).forEach(s => console.log(s.name));
    };
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    );
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );