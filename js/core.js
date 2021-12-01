$(function () {
    var $header = $(".header");
	var $content = $(".content");
    var win = $(window);
    var sc = $(document);
    win.scroll(function () {
        if (sc.scrollTop() >= 26) {
            $header.addClass("fixedheader");
			$content.addClass("fixcontent");
        } else {
            $header.removeClass("fixedheader");
			$content.removeClass("fixcontent");
        }
    })
})
function search() {
	var path = $("#local-search-input").attr("action");
	searchFunc(path, 'local-search-input', 'local-search-result');
}

let display = false;
function displayAll() {
	let elements = document.querySelectorAll(".catalogue .hidden");
	if (!display) {
		for (let elem of elements) {
			elem.style.display = "block";
			display = true;
		}
	} else {
		for (let elem of elements) {
			elem.style.display = "none";
			display = false;
		}
	}
}

function show_site_runtime(){
	X=new Date("11/03/2021 00:00:00"); //在这里修改你的建站时间
	Y=new Date();
	T=(Y.getTime()-X.getTime()); // 获取当前时间与指定时间之间的时间间隔（ms）    
	i=24*60*60*1000;
	d=T/i;
	D=Math.floor(d); // 计算天数并向下取整
	site_runtime.innerHTML= D + " 天 ";
}

$(function(){
	show_site_runtime();
	search();
	$("#local-search-input").focus(function(){
		$("#submit").attr("value","取消");
	})

	$(document).on('click',function(e){
		$("#submit").attr("value","搜索");
		$("#local-search-input").val("");
		$("#local-search-result").html("");
	});

	$("#local-search-input,#local-search-result").on('click',function(e){
		e.stopPropagation();
	});

	$('.wx').click(function(e){
		$('.wx-qr').toggle();
		return false;
	});

	$(".delete").click(function(e){
		$('.wx-qr').hide();
	});
})

