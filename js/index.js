$(function () {
$('#submitBtn').click(function () {
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/posts",
        data:{
            userId:$('#userId').val()},
        success : successFunction,
        error : errorFuction

    });
})
    function successFunction(data) {
        console.log(JSON.stringify(data));
        $('.posts').empty();
        for(post of data) {
            let d = $('<div>',{
                class:'post'
            })
            let h4 = $('<h4>').text(post.title)
            let p = $('<p>').text(post.body);
            let a = $('<a>', {
                id:post.id + '_post',
                href: 'comments?postId='+post.id,
                text: 'Comment',
                class: 'comment'
            })
            d.append(h4,p,a);
            $('.posts').append(d);
        }
    }
    function errorFuction(err) {
        alert(err)
    }

    $(document).on('click','a.comment',function (e) {
        e.preventDefault();
        $.ajax({
            url: "http://jsonplaceholder.typicode.com/comments",
            data:{
                postId:parseInt($(this).attr('id'))},
            success : successFunctionComments,
            error : errorFuctionComments

        });
    })

    function successFunctionComments(data) {
        console.log(JSON.stringify(data));
        $('.postcomments').empty();
        for(post of data) {
            let d = $('<div>',{
                class:'comment'
            })
            let ul = $('<ul>')
            let liname = $('<li>').text(post.name);
            let liemail = $('<li>').text(post.email);
            let libody = $('<li>').text(post.body)
            ul.append(liname,liemail,libody);
            d.append(ul);
            $('.postcomments').append(d);
        }
    }
    function errorFuctionComments(err) {
        alert(err)
    }
});