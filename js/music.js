//js���뱳�����֣��ظ����� 
		var audio = document.createElement("audio");
        audio.src = "images/bgsound.mp3";
        audio.addEventListener('ended', function () {
            // �ظ����Źؼ�����
            setTimeout(function () { audio.play(); }, 400);
        }, false);
        audio.play();