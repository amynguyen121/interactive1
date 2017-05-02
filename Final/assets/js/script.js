$(document).ready(function(){
	
	var img = ["img/fingerprint-02.jpg", "img/fingerprint-03.jpg", "img/fingerprint-04.jpg", "img/fingerprint-05.jpg", "img/fingerprint-06.jpg",];
	
	var text = ["If you secure your phone with a fingerprint police have the right to force you to unlock your phone and let them inspect its contents, but if you secure your phone with a password law enforcement has no such right.",
	"Despite assurances that collected fingerprint data is never actually transmitted from the phone and is processed only in an area separate from the operating system, there remains the risk that criminals may find ways to get to the data.",
	"What would happen if some government asked phone manufacturers to create a back door to store or send it fingerprint information.",
	"fingerprints can still be stolen and unlike a passcode, you cant change your fingerprint.",
	"As collection becomes more common, fingerprints may become one more form of easily leaked data, alongside passwords, credit cards, and social security numbers"]

	var font = ["sans","bold","false","noise","camo"]

	function getColor() {
	   return img [Math.floor(Math.random() * img.length)];
	}

	function getText() {
	   return text [Math.floor(Math.random() * text.length)];
	}
	function getFont() {
	   return font [Math.floor(Math.random() * font.length)];
	}	

	$('#img').mouseover(function() {
		$('body').css("background-color","yellow");
		$('p').html(getText());
		$('#text').removeClass();
		$('#text').addClass(getFont());
		$('img').attr('src','')
		$('img').attr('src','img/transparent.png')
		$('body').toggleClass('print');	
	});
	$
	('#img').mouseout(function() {
		$('p').html('');
		$('img').attr('src', getColor());
		$('body').css("background-color","white");
		$('body').toggleClass('print');	

	});	

	
	
	
});