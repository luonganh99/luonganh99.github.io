$(document).ready(function() {
    setTimeout(function() {
        firstAlert();
    }, 600);
})

function firstAlert() {
    $('.content').hide();
    Swal.fire(
        {
            title: 'Chào cậu nè!',
            text: 'Tớ muốn hỏi cậu điều này, cậu phải trả lời thật lòng nhaaaa :3',
            imageUrl: 'img/cute.jpg',
            imageWidth: 300,
            imageHeight: 300,
            background: '#b6f0dc',
            imageAlt: 'Cutee',
            confirmButtonColor: '#629e57',
            confirmButtonText: 'Ok nè',
        }
    ).then(function(){
        $('.content').show(200);
        const audio = new Audio('music/BeautifulGirl-SkullHaHaKwonJeongYeol10cm-3827366.mp3');
        audio.play();
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
    const showText = ' Tại vì cậu đẹp trai vl hihi :>>> ';
    const array = Array.from(showText);
    
    //B2: Lấy text người dùng nhập
    const inputText = $('#text').val() ? $('#text').val() : '';
    const count = inputText.length;

    //B3: Tạo text để chèn vào input
    var tempText = '';

    //B4: Loop thay thế text người dùng vừa nhập
    if(count > 0) {
        for(i=1; i <= count; i++) {
            tempText += array[i];
            if(i == showText.length + 1)
            {
                $('#text').val('');
                tempText = '';
                break;
            }
        }
    }
    $('#text').val(tempText);
    setTimeout(textGenerate, 1);
}

$('#yes').click(function() {
    const audio = new Audio('music/tick.mp3');
    audio.play();
    Swal.fire(
        {
            title: 'Thế lý do sao cậu thích tớ đến v nè :-D',
            html: true,
            html: "<input id='text' type='text' class='form-control' onmousemove=textGenerate() placeholder='Nhập ở đây nè'>",
            width: 900,
            padding: '3em',
            showCancelButton: true,
            cancelButtonText: "Thôi ngại lémm :3",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonColor: '#fe8a71',
            cancelButtonColor: '#f6cd61',
            confirmButtonText: 'Gửi cho tớ <3',
            background: '#abc8f5',
            imageUrl: 'img/twoface.png',
            imageWidth: 300,
            imageHeight: 300,
        }
    ).then((result) => {
        if(result.value) {
            const audio = new Audio('music/tick.mp3');
            audio.play();
            Swal.fire(
                {
                width: 900,
                confirmButtonText: 'Okii lun <3',
                title: 'Tớ biết mà hihi :)))) ',
                text: "Tối mai tớ qua đón cậu đi chơi nhaaaaaaaaa :v :v Giờ qua inbox tớ lun đii ^^",
                background: '#cdfc5d',
                confirmButtonColor: '#fe8a71',
                imageUrl: 'img/man.png',
                imageWidth: 300,
                imageHeight: 300,
                onClose: () => {
                    window.location = 'http://fb.com';
                  }
                }
            )
        }
    })    
})