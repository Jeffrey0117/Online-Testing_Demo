$('button').on('click',(e) =>{
    let alphabet=$(e.target);
    let answer=alphabet.text();

    $('.checked').removeClass('checked');
    alphabet.toggleClass('checked');
    alphabet.parents('.question').find('.abcd').text('（　' + answer + '　 ）')
    $('.jumpTo span').eq(alphabet.attr('id')-1).text(' ' + answer)
}
)

let hotkey_target

$('body').on('keypress',(e) =>{

    let btnInview=$(hotkey_target).parents().eq(0)
    let titleAnswer=btnInview.find('.inview')[0]

    if (e.which==49){
        let btnChoose=btnInview.find('button').eq(0)
        try{
            titleAnswer.innerText='（　'+'A'+'　 ）';
            btnInview.find('.checked').removeClass('checked');
            btnChoose.addClass('checked');
            $('.jumpTo span').eq(btnChoose.attr('id')-1).text(' ' + btnChoose.text())
       }catch{}
    }

    if (e.which==50){
        let btnChoose=btnInview.find('button').eq(1)
        try{
            titleAnswer.innerText='（　'+'B'+'　 ）';
            btnInview.find('.checked').removeClass('checked');
            btnChoose.addClass('checked');
            $('.jumpTo span').eq(btnChoose.attr('id')-1).text(' ' + btnChoose.text())
       }catch{}
    }

    if (e.which==51){
        let btnChoose=btnInview.find('button').eq(2)
        try{
            titleAnswer.innerText='（　'+'C'+'　 ）';
            btnInview.find('.checked').removeClass('checked');
            btnChoose.addClass('checked');
            $('.jumpTo span').eq(btnChoose.attr('id')-1).text(' ' + btnChoose.text())
       }catch{}
    }


    if (e.which==52){
        let btnChoose=btnInview.find('button').eq(3)
        try{
        titleAnswer.innerText='（　'+'D'+'　 ）';
        btnInview.find('.checked').removeClass('checked');
        btnChoose.addClass('checked');
        $('.jumpTo span').eq(btnChoose.attr('id')-1).text(' ' + btnChoose.text())
       }catch{}
    }


})

//###################################################################################################


const options = {
rootMargin: "0px 0px -10px 0px"
};

const onIntersection = entries => {
entries.forEach(entry => {
  // isIntersecting為可以判斷目標元素和root元素是否交互，true為相交，false為離開
  if (entry.isIntersecting) {
    if ($(entry.target).parents().eq(0)){
        hotkey_target=$('.inview').eq(0).parents().eq(1).find('.ans')[0]
    }else{
    hotkey_target=entry.target
    console.log($(hotkey_target).parents().eq(0).find('.abcd')[0].className)
    }
  } 
});
};


let observer = new IntersectionObserver(onIntersection, options);

// 對observer物件進行註冊，傳入的參數為需要監聽的HTMLElement
$('.ans').each(function(){
observer.observe(this);
})


//--------------------------------------------------------

const options2 = {
rootMargin: "0px 0px -10px 0px"
};

const onIntersection2 = entries => {
entries.forEach(entry => {
  // isIntersecting為可以判斷目標元素和root元素是否交互，true為相交，false為離開
  if (entry.isIntersecting) {
    $(entry.target).addClass('inview')
  } else{
    $(entry.target).removeClass('inview')
    console.log(entry.target)
    hotkey_target=$('.inview').eq(0).parents().eq(1).find('.ans')[0]

  }
});
};


let observer2 = new IntersectionObserver(onIntersection2, options2);

// 對observer物件進行註冊，傳入的參數為需要監聽的HTMLElement
$('.abcd').each(function(){
observer2.observe(this);
})

//###################################################################################################
let clicker=0

$('.option p').on('click',(e) =>{


if (clicker==0){
    $(e.target).removeClass('highlighter')
    $(e.target).addClass('linethrough')
    clicker+=1;
}

else if (clicker==1){
$(e.target).removeClass('linethrough')
$(e.target).addClass('highlighter')
clicker+=1;
}

else if (clicker==2){
$(e.target).removeClass('highlighter')
clicker=0
}


})

$('.menu-container').on('click',() =>{
if ($('.slide').css('display')=='none'){
    $('.container').css('max-width','55rem').css('margin-left','280px')
    $('.slide').css('display','inline')
    $('.header-header').css('margin-left','250px')
}else{
    $('.container').css('max-width','58rem').css('margin-left','auto')
    $('.slide').css('display','none')
    $('.header-header').css('margin-left','-8px')
}
})


var topOffset=100;

$('.jumpTo a').on('click',function(e){
e.preventDefault();
var target=$('.question').eq(this.innerText.slice(0,1)-1)
$('html,body').animate(
{scrollTop:$(target).offset().top-topOffset,behavior: 'smooth'},800);

})

var SetMinute = 0;
function Check_Time() {
    SetMinute += 1;
    var Check_i = document.getElementById("Check_i");

    var Cal_Hour = Math.floor(SetMinute / 3600);
    var Cal_Minute = Math.floor(Math.floor(SetMinute % 3600) / 60);
    var Cal_Second = SetMinute % 60;

    Check_i.innerHTML = Cal_Hour + "小時" + Cal_Minute + "分" + Cal_Second + "秒";

}
var mm = window.setInterval("Check_Time()", 1000);
Check_Time()

