'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Object literals
function createPerson(firstName, lastName) {
	return {
		firstName: firstName,
		lastName: lastName
	};
}

//Creating class

var Song = function () {
	function Song(title, artist, duration) {
		_classCallCheck(this, Song);

		this.title = title;
		this.artist = artist;
		this.duration = duration;
		this.isPlaying = false;
	}

	_createClass(Song, [{
		key: 'start',
		value: function start() {
			this.isPlaying = true;
		}
	}, {
		key: 'stop',
		value: function stop() {
			this.isPlaying = false;
		}
	}]);

	return Song;
}();

//default value


var Hat = function () {
	function Hat(brand) {
		var isEmpty = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		_classCallCheck(this, Hat);

		this.brand = brand;
		this.isEmpty = isEmpty;
	}

	_createClass(Hat, [{
		key: 'wearHat',
		value: function wearHat() {
			this.isEmpty = false;
		}
	}]);

	return Hat;
}();

//Creating instance of class


var song = new Song('Wonderwall', 'Oasis', '3:45');
song.isPlaying === false;

var myhat = new Hat('Nike', true);
myhat.wearHat();

//Inheritance
// in js5 ->  Song.prototype = Object.create(SuperClass.prototype);

var Music = function () {
	function Music() {
		var isPlaying = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

		_classCallCheck(this, Music);

		this.isPlaying = isPlaying;
	}

	_createClass(Music, [{
		key: 'start',
		value: function start() {
			this.isPlaying = true;
		}
	}]);

	return Music;
}();

var MySong = function (_Music) {
	_inherits(MySong, _Music);

	function MySong(title) {
		var isPlaying = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

		_classCallCheck(this, MySong);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MySong).call(this, isPlaying));

		_this.title = title;
		return _this;
	}

	return MySong;
}(Music);

//ARROW FUNCTION (and fighting with this)


var Contact = function Contact(name, email, button) {
	_classCallCheck(this, Contact);

	this.name = name;
	this.email = email;

	button.onclick = function (event) {
		sendMail(this.email);
	};
};

var Contact_2 = function Contact_2(name, email, button) {
	_classCallCheck(this, Contact_2);

	this.name = name;
	this.email = email;
	var that = this;
	button.onclick = function (event) {
		sendEmail(that.email);
	};
};

var Contact_3 = function Contact_3(name, email, button) {
	var _this2 = this;

	_classCallCheck(this, Contact_3);

	this.name = name;
	this.email = email;
	button.onclick = function (event) {
		sendEmail(_this2.email);
	};
};

//ARROW FUNCTION ALSO!


var oneToFive = [1, 2, 3, 4, 5];
console.log(oneToFive);
var twoToTen = oneToFive.map(function (n) {
	return n * 2;
});
console.log(twoToTen);

// LET and CONST
// let - declares a local variable in the block scope
// now if statement with let - have scope!
for (var _i = 0; _i < 5; _i++) {
	console.log(_i); // 0, 1, 2 ...
}
if (typeof i != 'undefined') {
	console.log(i); // i is not defined
} else {
	console.log('i is undefined');
}
//# sourceMappingURL=all.js.map
