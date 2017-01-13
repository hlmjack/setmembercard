var upload = {
	options:{
		level:["粉丝会员","test.jpg","粉丝会员","test.jpg","粉丝会员","","粉丝会员","","粉丝会员",""],//数据格式
		uploadpath:"keeduoduo.com"

	},
	init:function(wrapid){	
		upload.initTag(wrapid);
		upload.upimgchange(wrapid);
	},
	initTag:function(wrapid){//初始化标签
		var tempform="<form method='POST' action='"+upload.uploadpath+"' enctype='multipart/form-data'><div id='div' class='row'></div></form>";
		var tempdiv="";
		for(var i=0; i<upload.options.level.length/2;i++){
			if(upload.options.level[i*2+1]){
				tempdiv +="<div class='col-md-4 col-sm-6'><div class='well'><span>"+upload.options.level[i*2]+"</span><a href='#'><img src='"+upload.options.level[i*2+1]+"' class='img-responsive'><button class='btn btn-default upbtn'>上传 <strong><span class='glyphicon glyphicon-plus'></span></strong></button><input type='file' name='uploadimg' class='file fileset' style='background-color:red;'/></a></div></div>";
			}else{
				tempdiv +="<div class='col-md-4 col-sm-6'><div class='well'><span>"+upload.options.level[i*2]+"</span><a href='#'><img src='holder.jpg' class='img-responsive'><button class='btn btn-default upbtn'>上传 <strong><span class='glyphicon glyphicon-plus'></span></strong></button><input type='file' name='uploadimg' class='file fileset' style='background-color:red;'/></a></div></div>";
			}
		}
		$("#"+wrapid).append(tempform);
		$("#div").append(tempdiv);
		$("form").append("<button id='submit' type='submit' class='btn' >提交</button>");
	},
	upimgchange:function(){
		$("input[type=file]").change(function(e){//监听上传事件
			var files = e.target.files||e.dataTransfer.files;
			var file = files[0];//获取事件图片
			var URL = window.URL || window.webkitURL;//获取window的URL方法
			var imgURL = URL.createObjectURL(file);//生成上传图片的URL地址
			$(this).siblings("img").attr("src",imgURL);//将上传图片的URL生成预览
		});
	}
}