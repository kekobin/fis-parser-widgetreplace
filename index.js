module.exports = function (content, file, settings) {
	//将html中的widget/引用替换为template/,因为server端模版全部放在了tempalte下面
	var temp = String(content).replace(/widget\//g, 'template/');
  	return temp;
}