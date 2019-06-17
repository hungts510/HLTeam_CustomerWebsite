var Comment = require('../models/comment');

var moongose = require('mongoose');

moongose.connect('mongodb://localhost:27017/bookshop',{useNewUrlParser: true});

var comment = [
    new Comment({
        author: 'Trần Sỹ Hùng',
        content: 'Một cuốn sách hay, rất đáng để đọc',
        itemId: '5d075761d57123275ca7da20',
        date: '20/08/2018'
    }),
    new Comment({
        author: 'Nguyễn Văn Lân',
        content: 'Tôi đã dành cả đêm để đọc nó, một cuốn sách có sức hút cực lớn',
        itemId: '5d075761d57123275ca7da20',
        date: '25/3/2019'
    }),
    new Comment({
        author: 'Mai Văn Hoàng Lân',
        content: 'Tôi cực kỳ thích cuốn sách này',
        itemId: '5d075761d57123275ca7da21',
        date: '11/04/2019'
    }),
    new Comment({
        author: 'Khâu Thanh Hiếu',
        content: 'Quả thực là một cuốn sách rất tuyệt',
        itemId: '5d075761d57123275ca7da21',
        date: '10/05/2019'
    }),
    new Comment({
        author: 'Lý Gia Huy',
        content: 'Một cuốn sách hay cho những tâm hồn cô đơn',
        itemId: '5d075761d57123275ca7da22',
        date: '21/09/2018'
    }),
    new Comment({
        author: 'Trần Mạnh Dũng',
        content: 'Ai yêu thích tiểu thuyết nhất định phải đọc cuốn sách này',
        itemId: '5d075761d57123275ca7da23',
        date: '26/03/2019'
    }),
    new Comment({
        author: 'Trần Sỹ Hùng',
        content: 'Tôi đã dành tiền ăn cả tháng để có thể mua được cuốn sách này, thật không phụ lòng mong đợi',
        itemId: '5d075761d57123275ca7da24',
        date: '20/02/2019'
    }),
    new Comment({
        author: 'Nguyễn Văn Lân',
        content: 'Tôi đã dành cả đêm để đọc nó, một cuốn sách có sức hút cực lớn',
        itemId: '5d075761d57123275ca7da25',
        date: '25/3/2019'
    }),
    new Comment({
        author: 'Trần Sỹ Hùng',
        content: 'Một cuốn sách hay, rất đáng để đọc',
        itemId: '5d075761d57123275ca7da26',
        date: '20/08/2018'
    }),
    new Comment({
        author: 'Nguyễn Văn Lân',
        content: 'Tôi đã dành cả đêm để đọc nó, một cuốn sách có sức hút cực lớn',
        itemId: '5d075761d57123275ca7da27',
        date: '25/3/2019'
    }),
    new Comment({
        author: 'Trần Sỹ Hùng',
        content: 'Một cuốn sách hay, rất đáng để đọc',
        itemId: '5d075761d57123275ca7da28',
        date: '20/08/2018'
    }),
    new Comment({
        author: 'Nguyễn Văn Lân',
        content: 'Tôi đã dành cả đêm để đọc nó, một cuốn sách có sức hút cực lớn',
        itemId: '5d075761d57123275ca7da29',
        date: '25/03/2019'
    }),
    new Comment({
        author: 'Trần Sỹ Hùng',
        content: 'Một cuốn sách hay, rất đáng để đọc',
        itemId: '5d075761d57123275ca7da29',
        date: '20/04/2019'
    }),
    new Comment({
        author: 'Nguyễn Văn Lân',
        content: 'Tôi đã dành cả đêm để đọc nó, một cuốn sách có sức hút cực lớn',
        itemId: '5d075761d57123275ca7da2a',
        date: '25/3/2019'
    }),
];

var done =0;
for(var i = 0;i<comment.length;i++){
    comment[i].save(function(err,result){
        done++;
        if(done===comment.length){
            exit();
        }
    });

}
function exit() {
    moongose.disconnect();
}

