// LAp 2
// 1. Hãy tạo ra 1 mảng các sự kiện khác nhau xảy ra trong suốt trận đấu (lưu ý là 
//     không trùng nhau)

const events = [
    gold ={
        17 : "lewwan",
        39 :"gavi",
        50 :"messi",
        90 :"bale",
    },
    card_yellow=[ 
        {20 : "pique"},
        {30 : "pique"},
        {64 : "xavi"}
    ],
    card_red ={
        30 : "pique"
    }
    
];
// 2. Sau khi trò chơi kết thúc, phát hiện ra rằng thẻ vàng phút 64 là không đúng. Hãy 
//     xóa nó khỏi danh sách sự kiện trong trận đấu.

console.log(events);
const index = card_yellow.indexOf("xavi");
card_yellow.splice(index,1);


// 3. In ra console theo định dang như sau:"1 sự kiện xảy ra, trung bình mỗi 9 phút". 
//     Lưu ý răng mỗi trận đấu có 90 phút.
// 4. Lặp toàn bộ mảng sự kiện và in ra màn hình, đánh dấu đối với mỗi sự kiện trong 
//    trận đấu diễn ra trong hiệp 1 hay hiệp 2
    
