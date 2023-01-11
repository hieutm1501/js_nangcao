// Giả sử chúng ta có dữ liệu lấy được từ API bao gồm những trận đấu như phía 
// dưới. Trong thử thách lần này, chúng ta sẽ làm việc với dữ liệu. Và đây là những 
// nhiệm vụ cho bạn:
// 1. Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
// 2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
// các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của 
// thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
// 4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1 
// mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào 
// 'Thiago', 'Coutinho' và 'Perisic'
// 5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là 
// 'team1', 'draw' và 'team2')
// 6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử
// spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
// 7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà 
// không sử dụng if/else hoặc toán tử 3 ngôi
// LAP1.2
// LAB1.2: (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS	AND	STRINGS	> CODING	
//     CHANLLENGE	#2)
//     1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví 
//     dụ: "Goal 1: Lewandowski")
//     2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã 
//     học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không 
//     nhớ)
//     3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//      Tỉ lệ thắng của Bayern Munich: 1.33
//      Tỉ lệ hòa of draw: 3.25
//      Tỉ lệ thắng của Borrussia Dortmund: 6.5
//     Lấy ra tên đội bóng trực tiếp từ object 'game', bạn không nên "hardcode" tỉ lệ
//     thắng của mỗi đội (ngoại trừ trường hợp 2 đội hòa nhau)

const club = {
    team1 : 'real',
    team2 : 'barca',
    player : [
        [
        'Courtois',
        'Carvajal',
        'Militao ',
        'Alaba ',
        'Vallejo ',
        'Hazard ',
        'Kroos ',
        'Benzema ',
        'Modric ',
        'Vinicius ',
        'ronaldo',
        ],
        [
        'Stegen',
        'Pique ',
        'Araujo  ',
        'Busquets  ',
        'Dembele  ',
        'Lewandowski  ',
        'neymar ',
        'messi ',
        'suarez',
        'xavi',
        'Iniesta',
        ],
    ],
    score: '0:3',
	scored: [
        'messi',
        'Lewandowski', 
        'neymar',
    ],
	date: 'Nov 9th, 2015',
	odds: {
		team1: 1.33,
		draw: 3.25,
		team2: 6.5,
	},
    
    
}

// 1. Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')

const [player1,player2] = club.player;
console.log([player1,player2]);

// 2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
// các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của 
// thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players

const gk_real = player1[0];
console.log('thu mon real:', gk_real);
const fieldPlayers_real = [...player1, ];
console.log(fieldPlayers_real);

const gk_barca = player2[0];
console.log('thu mon real:', gk_barca);
const fieldPlayers_barca = [...player1, ];
console.log(fieldPlayers_barca);

// 3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
const allPlayers = [...player1,...player2];

console.log('tat ca cau thu:',allPlayers);

// 4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1 
// mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào 
// 'Thiago', 'Coutinho' và 'Perisic'

const players1Final = [...player1,'messi jr','lionel','m10'];
console.log('doi hinh + 3 du bi:',players1Final);

// 5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là 
// 'team1', 'draw' và 'team2')


const {team1,draw,team2}= club.odds;
console.log('team1:',team1,'draw:',draw,'team2:',team2);

// 6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử
// spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
const printGoals = club.scored;
console.log('so cau thu ghi ban :',printGoals.length);
console.log('cau thu ghi ban :',printGoals);


// 7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà 
// không sử dụng if/else hoặc toán tử 3 ngôi
if(team1 > team2){
    console.log('team1 ty le thang cao hon team2');
}else{
    console.log('team2 ty le thang cao hon team1');
}
// LAP 1.2


// LAB1.2: (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS	AND	STRINGS	> CODING	
//     CHANLLENGE	#2)
//     1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví 
//     dụ: "Goal 1: Lewandowski")
        // const ingoal = club.scored;
        
        // for (const i of scored.){
        //     console.log('ban thu',i);
        // }

        const { scored } = club;
		for (const score of scored.entries()) {
			console.log(`bàn thắng thứ ${score[0] + 1}: ${score[1]} là người đã ghi bàn`);
		}
//     2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã 
//     học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không 
//     nhớ)

//     3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//      Tỉ lệ thắng của Bayern Munich: 1.33
//      Tỉ lệ hòa of draw: 3.25
//      Tỉ lệ thắng của Borrussia Dortmund: 6.5
//     Lấy ra tên đội bóng trực tiếp từ object 'game', bạn không nên "hardcode" tỉ lệ
//     thắng của mỗi đội (ngoại trừ trường hợp 2 đội hòa nhau)
