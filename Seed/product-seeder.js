var Product = require('../models/product');

var moongose = require('mongoose');

moongose.connect('mongodb://localhost:27017/bookshop',{useNewUrlParser: true});

var product = [
    new Product({
        imagePath: 'images/books/1.jpg',
        title: 'Our World Our Life',
        description : 'Cuốn sách viết về hành trình đi tìm vùng đất mới của một nhóm các chú thỏ khi biết trước nơi chúng đang ở sẽ bị con người và máy móc phá hủy. Cuốn sách thiếu nhi này gây ngạc nhiên với người đọc bởi vì có độ dày như sách dành cho người lớn. Tuy nhiên cũng chính bởi vậy, bạn đọc đặc biệt là trẻ em có thể trải qua nhiều cuộc phiêu lưu nối tiếp cùng nhóm thỏ. Với trẻ nhỏ các em sẽ hiểu được phần nào sự nguy hiểm khi sống giữa thiên nhiên hoang dã, ý chí vượt qua khó khăn và sức mạnh của tinh thần đoàn kết, nhưng độc giả lớn tuổi đã có ít nhiều trải nghiệm cuộc sống sẽ nhìn thấy ở đó câu chuyện của cuộc sống, xã hội. Sách đã được xuất bản tại Việt Nam và chuyển thể thành phim hoạt hình cùng tên.',
        price : 140000,
        nameCate: 'Sách Khám Phá',
        Items: "hotItems"
    }),
    new Product({
        imagePath: 'images/books/2.jpg',
        title: 'Blue In The Water',
        description : 'Giáo sư khoa học máy tính tại Đại học Carnegie Mellon- Mỹ, trở nên nổi tiếng sau khi đưa ra một bài giảng lạc quan mang tên "Bài giảng cuối: Để thật sự đạt được ước mơ thời thơ ấu của bạn" ở thời điểm ông biết mình bị ung thư tuyến tụy và chỉ có thể sống tốt trong vòng 3-6 tháng nữa. Sau thành công của bài giảng, ông cùng một người bạn viết nên cuốn sách The Last Lecture - Bài giảng cuối cùng khuyến khích mọi người tận hưởng mọi giây phút của cuộc sống. Sách đã được xuất bản tại Việt Nam.',
        price : 200000,
        nameCate: 'Sách Khám Phá',
        Items: "hotItems"
    }),
    new Product({
        imagePath: 'images/books/3.jpg',
        title: 'Animals Life',
        description : 'Cuốn sách được viết bởi Viktor Frankl từ chính kinh nghiệm của mình là tù nhân trong trại tập trung Auschwitz trong Thế chiến II . Với sự hiểu biết phong phú và trải nghiệm tâm lý của người tù, Frankl ngẫm lại những ý nghĩa của cuộc sống, và cách làm thế nào mà xã hội lại có những người đứng đắn và không đứng đắn.',
        price : 150000,
        nameCate: 'Sách Khám Phá',
        Items: "hotItems"
    }),
    new Product({
        imagePath: 'images/books/4.jpg',
        title: 'Memorise',
        description : 'Cuốn sách viết về sự trở về của chiến binh miễn cưỡng William Mandella sau khi rời trái đất để chiến đấu với các chủng tộc người ngoài hành tinh bí ẩn Taurans. Nhưng vì thời gian giãn nở, nên William mới đi 10 năm, nhưng trên trái đất thì đã 700 năm trôi qua. Khi Mandella trở lại, trái đất đã biến thành một hành tinh hoàn toàn khác, khiến anh không còn nhận ra. Được viết bởi cựu binh tham gia chiến tranh Việt Nam, cuốn tiểu thuyết The Forever War là một ẩn dụ về cuộc sống của người lính sau khi tham gia cuộc chiến tranh này.',
        price : 220000,
        nameCate: 'Sách Khám Phá',
        Items: "newItems"
    }),
    new Product({
        imagePath: 'images/books/5.jpg',
        title: 'War Of Dragon',
        description : 'Là cuốn tiểu thuyết hoạt hình (graphic novel) đạt giải thưởng Pulitzer, kể về câu chuyện của một người sống sót của người Do Thái Holocaust và con trai ông, một họa sĩ truyện tranh đang cố gắng để dung hòa với câu chuyện của cha mình. Maus là sự thật ảm đạm và kinh hoàng về của cuộc sống dưới thời Hitler, cũng như câu chuyện về mối quan hệ của người con trai với người cha già của mình.',
        price : 250000,
        nameCate: 'Sách Khám Phá',
        Items: "newItems"
    }),
    new Product({
        imagePath: 'images/books/6.jpg',
        title: 'Moon Light Sadow',
        description : 'Tác phẩm truyện tranh này viết về Robert Jordan, một chuyên gia phá hủy trẻ và lý tưởng của Mỹ, chiến đấu cùng lực lượng chống phát xít trong nội chiến Tây Ban Nha năm 1937. For Whom the Bell Tolls - Chuông nguyện hồn ai diễn ra trong vòng 68 giờ, trong khi Jordan đang cố gắng tìm cách để thổi bay một cây cầu của địch, đấu tranh với các nhà lãnh đạo thụ động của lực lượng du kích, và rơi vào tình yêu với một người phụ nữ trẻ người Tây Ban Nha. Sách đã được xuất bản tại Việt Nam.',
        price : 110000,
        nameCate: 'Sách Khám Phá',
        Items: "newItems"
    }),
    new Product({
        imagePath: 'images/books/7.jpg',
        title: 'OLIO',
        description: 'Kể về câu chuyện của một phi công bị rơi máy bay trong sa mạc Sahara và được chào đón bởi một cậu bé tuyên bố mình là một hoàng tử nhỏ, từ một hành tinh khác đến. Trong quá trình sửa chữa máy bay, viên phi công đã biết cuộc đời của "hoàng tử nhỏ" và khao khát trở lại hành tinh quê hương của mình. Mặc dù được coi là một cuốn truyện thiếu nhi tinh tuyển, nhưng "Hoàng tử bé" cũng được coi là một trong những cuốn tiểu thuyết sâu sắc nhất của văn học Pháp. The Little Prince - Hoàng tử bé được nhiều đơn vị dịch và xuất bản tại Việt Nam.',
        price : 280000,
        nameCate: 'Sách Lịch Sử',
        Items: "newItems"
    }),
    new Product({
        imagePath: 'images/books/8.jpg',
        title: 'Art Of Illustrator',
        description: 'Viết về cuộc đấu tranh của các thế hệ thuộc 2 dòng họ Trasks và Hamiltons sống trong thung lũng Salinas, California với nhiều vấn đề về đạo đức, đúng, sai... Cuốn tiểu thuyết được coi là tái tạo và lý giải câu chuyện kể về Cain và Abel theo Thánh Kinh. Tác giả cuốn tiểu thuyết Steinbeck coi East of Eden - Phía Đông vườn Địa đàng là cuốn tiểu thuyết lớn nhất trong cuộc đời sáng tác của ông. Cuốn tiểu thuyết đã được dịch và xuất bản tại Việt Nam.',
        price : 230000,
        nameCate: 'Sách Lịch Sử',
        Items: "newItems"
    }),
    new Product({
        imagePath: 'images/books/9.jpg',
        title: 'New World For Children',
        description: 'Đây là một trong những tác phẩm có nội dung bi thảm nhất của nền văn học nhân loại. Tác giả đã dựng lên một bức tranh ảm đạm về số phận bế tắc của lớp người dưới đáy xã hội Nga, nhất là tầng lớp trẻ trong trắng, nhiều khát vọng. Trong cuốn tiểu thuyết này, Dostoyevsky đã chứng tỏ mình là một bậc thầy trong việc tìm hiểu bản chất con người. Crime and Punishment - Tội ác và trừng phạt đã được dịch và xuất bản tại Việt Nam.',        
        price : 240000,
        nameCate: 'Sách Lịch Sử',
        Items: "newItems"
    }),
    new Product({
        imagePath: 'images/books/11.jpg',
        title: 'Alone Walker',
        description:'là một trong những câu chuyện Mark Twain yêu thích nhất. Câu chuyện bắt đầu khi một cặp vợ chồng trên đảo Hoàng tử Edward muốn được nhận một cậu bé mồ côi để giúp đỡ công việc của họ trên đảo. Tuy nhiên, thay vào đó, họ được cho một cô bé tóc đỏ 11 tuổi Anne Shirley. Nhiều cuộc phiêu lưu hài hước đã diễn ra với cô bé có trí tưởng tượng phong phú và khả năng tạo rắc rối này. Anne of Green Gables - Anne tóc đỏ dưới chái nhà xanh đã được dịch và xuất bản tại Việt Nam',
        price : 240000,
        nameCate: 'Sách Lịch Sử',
        Items: "newItems"
    }),
    new Product({
        imagePath: 'images/books/12.jpg',
        title: 'The Hunter House',
        description:'Ở xã hội giả tưởng, mà lính cứu hỏa lại chính là “người châm mồi cho đám cháy” đó, nơi mà truyền hình phù phiếm thống trị, tri thức nông cạn, giải trí “ăn liền” được tung hê, nơi mà tàng trữ sách là phạm pháp, Fahrenheit 451- 451 độ F đã rung lên một hồi chuông cảnh báo về sự xuống cấp văn hóa trong một xã hội mà tri thức, ý tưởng sáng tạo bị ruồng bỏ đến tội nghiệp. Chính bởi vậy, dù đã hơn sáu chục năm kể từ lần đầu xuất bản, đến nay Fahrenheit 451- 451 độ F vẫn khiến người đọc nó phải choáng váng. Cuốn tiểu thuyết Fahrenheit 451 - 451 độ F này cũng đã được xuất bản tại Việt Nam.',
        price : 240000,
        nameCate: 'Sách Lịch Sử',
        Items: "newItems"
    }),
];

var done =0;
for(var i = 0;i<product.length;i++){
    product[i].save(function(err,result){
        done++;
        if(done===product.length){
            exit();
        }
    });

}
function exit() {
    moongose.disconnect();
}

