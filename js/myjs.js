$(document).ready(function() {
    setTimeout(function() {
        firstAlert();
    }, 600);
})

function firstAlert() {
    $('.content').hide();
    Swal.fire(
        {
            title: 'Chàoo cậu nè!',
            text: 'Tớ muốn hỏi cậu điều này, cậu phải trả lời thật lòng nhaaaa',
            imageUrl: 'img/cute.jpg',
            imageWidth: 300,
            imageHeight: 300,
            background: '#b6f0dc',
            imageAlt: 'Cutee',
            confirmButtonColor: '#629e57',
            confirmButtonText: 'Ok con dê'
        }
    ).then(function(){
        $('.content').show(200);
    })
}

function switchButton() {
    const audio = new Audio('music/duck.mp3');
    audio.play();
    $('#yes').css("top", $('#no').css("top"));
    $('#yes').css("left", $('#no').css("left"));
    $('#no').css("top", $('#yes').css("top"));
    $('#no').css("left", $('#yes').css("left"));
}

function moveButton() {
    const audio = new Audio('music/swish.mp3');
    audio.play();
    var x,y;
    if(screen.width <= 600){
        x = Math.random() * 300;
        y = Math.random() * 500;
    } else {
        var x = Math.random() * 700;
        var y = Math.random() * 500;
    }
    const left = x + 'px';
    const top = y + 'px';
    $('#no').css("left",left);
    $('#no').css("top", top);
}

var n = 0;
$('#no').mousemove(function() {
    if(n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
})

$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})


function textGenerate() {
    //B1: Tạo text cần hiện
    const showText = ' Tại vì cậu đẹp trai quá :<<< ';
    const array = Array.from(showText);
    
    //B2: Lấy text người dùng nhập
    const inputText = $('#text').val() ? $('#text').val() : '';
    const count = inputText.length();

    //B3: Tạo text để chèn vào input
    var tempText = '';

    //B4: Loop thay thế text người dùng vừa nhập
    if(count > 0) {
        for(i=1; i <= count; i++) {
            tempText += array[i];
            if(i == showText.length() + 1)
            {
                $('#text').val = '';
                tempText = '';
                break;
            }
        }
    }
    $('#text').val = tempText;
    setTimeout(textGenerate, 1);
}
