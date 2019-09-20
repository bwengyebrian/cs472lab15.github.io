$(function () {
$('#submitBtn').click(function () {
    $.get("http://jsonplaceholder.typicode.com/posts",{
        'data':{
            'userId':$('#userId').val()
        }
    }).done(function (data) {
        console.log(JSON.stringify(data));
        $('.posts').empty();
        for(post of data) {
            let d = $('<div>',{
                class:'post'
            })
            let p = $('<p>').text(post.title);
            let a = $('<a>', {
                href: '',
                text: 'Comment',
                class: 'comment'
            })
            d.append(p,a);
            $('.posts').append(d);
        }
    }).fail(function (err) {
        alert(err)
    })
})
});