
// var log = console.log.bind(this);

// log('');
// log('====== Calculate Deposit ======');

// let deposit = 5400000;
// let time = 20;
// let part = deposit/time;

// while(time > 0){
//     let percent = Math.round(deposit/100);

//     if(time == 19){
//         deposit += 21;
//     }
//     if(time == 16){
//         deposit += 21;
//     }

//     deposit = deposit - part + percent;
//     time--;
//     //console.log(deposit, percent);
// }

// console.log('Deposit summ left:', deposit - 50);
// console.log('Deposit with percents', deposit + 540);
// log('');

class Deposit{
	constructor(deposit, months, rate){
		this.deposit = deposit;
		this.months = months;
		this.rate = (rate / 100);
	}

	status(){
		console.log(this.deposit, this.months, this.rate);
	}

	summWithCompoundInterest(){
		let summ = 0;
		let months = this.months;
		let rate = this.rate / 12;
		
		let count = 0;
		while(months){
			summ += summ * rate;
			console.log(summ, (summ * rate).toFixed(1));
			summ += (this.deposit * rate);
			months--;
		}

		console.log('Compound:', summ.toFixed(1));
	}

	summWithSimpleInteres(){
		let summ = 0;
		let months = this.months;
		let rate = this.rate / 12;
		
		while(months){
			summ += (this.deposit * rate);
			months--;
		}

		console.log('Simple:', summ.toFixed(0));
	}


}

let dp = new Deposit(1000, 24, 15);
dp.status();
dp.summWithCompoundInterest();
dp.summWithSimpleInteres();