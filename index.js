window.onload = function() {
    var num = 0;
    var bg = document.getElementsByClassName('bg');
    var bgs = bg[0].getElementsByTagName('li');
    var ind = document.getElementsByClassName('indicator');
    var inds = ind[0].getElementsByTagName('li');
    var left = document.getElementsByClassName('left')[0];
    var right = document.getElementsByClassName('right')[0];

    function clear() {
        for(var i=0; i<inds.length; i++){
            inds[i].className = '';
            bgs[i].className = '';
        }
    }
    for(var i=0; i<inds.length; i++){
        inds[i].index = i;
        inds[i].onclick = function(){
            num = this.index;
            clear();
            this.className = 'current';
            bgs[num].className = 'current';
        }
    }
    left.onclick = function(){
        num--;
        if(num==-1) num = 5;
        clear();
        inds[num].className = 'current';
        bgs[num].className = 'current';
    }
    right.onclick = function(){
        num++;
        if(num==6) num = 0;
        clear();
        inds[num].className = 'current';
        bgs[num].className = 'current';
    }
    setInterval(function(){
        right.onclick();
    },3000);
}
