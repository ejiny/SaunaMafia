// 読み込んだらフェードアウト
$(window).on('load', function(){
    // 消えるタイミングはお好みで
    $('.loading').delay(1500).fadeOut(1200);
});
// 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
function stopload(){
    $('.loading').delay(1500).fadeOut(1200);
}
setTimeout('stopload()',5000);
