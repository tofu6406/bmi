console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready!!");

	// BMIを計算する
	$("#btn_calc").click(()=>{
		console.log("計算開始!!");
		
		//入力フォームから

		//身長
		const strA = $("#input_a").val();
		console.log("strA:", strA);

		//もし、strAが空文字だったら
		if (strA === "") {
			console.log("strAは空文字です");
			$("#msg_info").text("身長を入力してください");
			return;  //ここで停止
		}

		//体重
		const strB = $("#input_b").val();
		console.log("strB:", strB);
		
		//もし、strBが空文字だったら
		if (strB === "") {
			console.log("strBは空文字です");
			$("#msg_info").text("体重を入力してください");
			return;
		}

		//ここまで来たら、空文字なし
		console.log("全データ入力完了:", strA, "-", strB, "-",);

		//文字から数値に変換
		const numA = parseInt(strA);

		//数値かどうか、確認
		if(Number.isInteger(numA) === false) {  //numAは数字じゃない
			console.log("numAは数値ではありません");
			$("#msg_info").text("身長に数値を入力してください");
			return;
		}

		const numB = parseInt(strB);

		//数値かどうか、確認
		if(Number.isInteger(numB) === false) {  //numAは数字じゃない
			console.log("numBは数値ではありません");
			$("#msg_info").text("体重に数値を入力してください");
			return;
		}

		//データはすべて数値です
		console.log("計算する");

		if(Number.isInteger(numA) === true){
			if(Number.isInteger(numB) === true){
					console.log("データが正しく入力されています");
					$("#msg_info").text("計算結果");

					//BMIを計算する
					const bmi = numB / (numA / 100) ** 2;
					console.log("BMI計算結果,bmi:", bmi);
					$("#msg_result").text(Math.floor(bmi * 10) / 10);

					const weight = (numA / 100) **2 *22;
					console.log("適正体重計算結果,weight", weight);
					$("#msg_weight").text(Math.floor(weight * 10) / 10);

					return;
			}
		}
	});
});