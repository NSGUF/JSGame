//js插入背景音乐，重复播放 
		var audio = document.createElement("audio");
        audio.src = "images/bgsound.mp3";
        audio.addEventListener('ended', function () {
            // 重复播放关键代码
            setTimeout(function () { audio.play(); }, 400);
        }, false);
        audio.play();