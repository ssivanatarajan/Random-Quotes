var app=angular.module('quotes',[]);
app.controller('quoteController',function($scope)
{
	var quotes=[
	['Stay hungry Stay foolish','Steve Jobs'],
	['Don\'t pray for an easy life, pray for the strength to endure a difficult one','Bruce Lee'],
	['Smooth sea never made a Skilled sailor'],
	['In the middle of every difficulty lies opportunity','Albert Einstein'],
	['Never Give Up'],
	['Follow your Dreams'],
	['If you never failed, you never tried anything new'],
	['Love what you do, do what you love'],
	['If you want to SHINE like a SUN, FIRST burn like a SUN','A.P.J Abdul Kalam'],
	['Without your involvement you can\'t succeed. With your involvement you can\'t fail','A.P.J Abdul Kalam'],
	['Difficult Roads often lead to Beautiful Destinations'],
	['The best way to predicte the future is to create it','Peter Drucker'],
	['A river cuts through rock, not because of its power, but because of its persistence','jim Watkins'],
	['Life begins at the end of your comfort zone','Neale Donald Walsch'],
	['Work hard in silence, let your success be your noise', 'Frank Ocean'],
	['If you want something you never had, you must be willing to do something you never done','Thomas Jefferson'],
	['You don\'t have to be great to start, but you have to start to be great.','Zig Ziglar'],
	['It does not matter how slowly you go as long as you don\'t stop','Confucius'],
	['The master has failed more times than the beginner has even tried','Stephen McCranie'],
	['Sometimes life hits you in the head with abrick,Don\'t lose faith','Steve Jobs'],
	['A little progress each day adds up to big results'],
	['If it doesn\'t challenge you, it won\'t chanage you'],
	['The one who falls and gets up is so much stronger than one who never fell'],
	['An arrow can only be shot by pulling it backward. so when life is dragging you back with difficulties, it means that it\'s goint to launch you into something great. so just focus, and keep aiming.'],
	['You don\'t have to see the whole staircase, just take the first step.','Martin Luther King'],
	['Stay Positive, Work Hard and make it happen'],
	['Don\'t ruin a good today by thinking about a bad yesterday. Let it go'],
	['Great things never came from comfort zones.'],
	['You can\'t start the next chapter of your life If you keep re-reading the last one.'],
	['The harder you work for something, the greater you\'ll feel when you achieve it.'],
	['A ship is always safe at shore but that is not what it\'s built for.','Albert Einstein'],
	['The difference between who you are and who you want to be is what you do.']
	['Don\'t Quit'],
	['Be So Good they can\'t ignore you','Steve Martin'],
	['Never give up on a dream just because of the time it will take accomplish it. the time will pass anyway','Earl Nigthingale'],
	['Stars can\'t shine without darkness'],
	['It doesn\'t matters what others are doing. it matters what you are doing'],
	['The expert in anything was once a beginner'],
	['It always seems impossible untill it\'s done','Nelson Mandela'],
	['Don\'t wait for opportunity. create it.'],
	['Don\'t quit. suffer now and live the rest of your life as a champion.','Muhammad Ali'],
	['I have not failed. I’ve just found 10,000 ways that won’t work.','Thomas Edison'],
	['It\'s fine to celebrate success but it is more important to heed the lessons of failure.',  'Bill Gates'],
	['If you cannot do great things, do small things in a great way.' ,'Napoleon Hill'],
	['Success is walking from failure to failure with no loss of enthusiasm.',' Winston Churchill'],
	['Winners never quit, and quitters never win.','Vince Lombardi'],
	['Nothing is impossible, the word itself says “I’m possible”! ','Audrey Hepburn'],
	['The only way to do great work is to love what you do.','Steve Jobs'],
	['A person who never made a mistake never tried anything new.','Albert Einstein'],
	['All our dreams can come true, if we have the courage to pursue them.', 'Walt Disney'],
	['The best revenge is massive success.','Frank Sinatra'],
	['Failure is another steppingstone to greatness.',' Oprah Winfrey']
	]
	var rand=Math.random() * quotes.length -1 ;
	console.log(quotes.length)
	
	
	console.log(rand)
	var index=Math.round(rand)
	console.log(index)
	$scope.gradient="gradient-"+index%11
	console.log($scope.gradient)
	$scope.quote=quotes[index][0];
	$scope.name=quotes[index][1];
})