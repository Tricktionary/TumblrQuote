$(document).ready(function(){

	var quoteArray = ["We are young yet we don’t have a future",
		"Start copying what you love. Copy copy copy copy. At the end of the copy you will find yourself.",
		"<3",
		"Im so Deep",
		"Easy Peasy Lemon Squeezy",
		"There is no angry way to say BUBBLE",
		"It's not the number of breaths we take, but the number of moments that take our breath away.",
		"Life is what happens to you while you're busy making other plans.",
		"You're only as strong as the drinks you mix, the tables you dance on, and the friends you party with",
		"Live for the nights you'll never remember with the friends you'll never forget",
		"Live, laugh, love.",
		"Sing like no one is listening. Love like you've never been hurt. Dance like nobody is watching.",
		"Yesterday is history, tomorrow a mystery and today is a gift. That's why we call it the present.",
		"Keep calm and carry on.",
		"Shoot for the moon. Even if you miss, you'll land among the stars.",
		"You have to kiss a lot of frogs before you find your prince.",
		"Everything happens for a reason.",
		"If life gives you lemons, make lemonade.",
		"You'll find love when you stop looking.",
		"Live every day like it's your last.",
		"It takes more muscles to frown than it does to smile.",
		"Dream as if you'll live forever. Live as if you'll die today.",
		"Real eyes realize real lies.",
		"You miss 100% of the shots you don't take.",
		"Life is not about waiting for the storm to pass. It's about learning to dance in the rain.",
		"You Only Live Once",
		"Nobody Text faster than a pissed off female",
		"Donut give up",
		"Olive you so much",
		"If I wanted to kill myself I would climb your ego and jump to your IQ.",
		"A day without sunshine is like, you know, night.",
		"Stay Hungry, Stay Foolish",
		"Home is where I can feel Ugly and Enjoy it ",
		"Intoxicated by Memories and feelings",
		"Getting lost is never a waste of time.",
		"A day without light is like night",
		"Stay, Hustle, Focus"];

	/**
 		* Returns a random integer between min (inclusive) and max (inclusive)
 		* Using Math.round() will give you a non-uniform distribution!
 	*/
	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

 

	$('#submit').click(makeQuote);

	function makeQuote(){
		var randomPosition =  getRandomInt(0,quoteArray.length);
		var quote = quoteArray[randomPosition];
		$('#quote').text(quote);
	}

});