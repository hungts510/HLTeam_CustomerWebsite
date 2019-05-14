exports.home = (req, res, next) => {
    res.render('index', {
        title: 'Trang chủ',
        newItems: [{
            name: 'Our World Of Life',
            image: 'images/books/1.jpg',
            price: '400.000',
        }, {
            name: 'Blue In The Watter',
            image: 'images/books/2.jpg',
            price: '100.000',
        }, {
            name: 'Animals Life',
            image: 'images/books/3.jpg',
            price: '300.000'
        }, {
            name: 'Memories',
            image: 'images/books/4.jpg',
            price: '100.000'
        }, {
            name: 'War Of Dragon',
            image: 'images/books/5.jpg',
            price: '150.000'
        }],
        hotItems: [{
            name: 'New World For Children',
            image: 'images/best-sell-product/1.jpg',
        }, {
            name: 'Blue In The Watter',
            image: 'images/best-sell-product/3.jpg',
        }, {
            name: 'Animals Life',
            image: 'images/best-sell-product/4.jpg',
        }, {
            name: 'Memories',
            image: 'images/best-sell-product/6.jpg',
        }, {
            name: 'Our World Our Life',
            image: 'images/best-sell-product/5.jpg',
        }, {
            name: 'Moon Light Sadow',
            image: 'images/best-sell-product/5.jpg',
        },{
            name: 'OLIOO',
            image: 'images/best-sell-product/7.jpg',
        },{
            name: 'Art Of Illustrator',
            image: 'images/best-sell-product/8.jpg',
        }],
    });
};

exports.loginGet = (req, res) => {
    res.render('authen/login', { title: 'Đăng nhập' })
};

exports.recoverGet = (req, res) => {
    res.render('authen/recover', { title: 'Quên mật khẩu' })
};

exports.registerGet = (req, res) => {
    res.render('authen/register', { title: 'Đăng ký' })
};