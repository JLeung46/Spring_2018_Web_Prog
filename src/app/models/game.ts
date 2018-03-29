export class Game {
	
	MyQuotes: string[] = [
		"Quote 1",
		"Quote 2",
		"Quote 3"

	];

	Players: User[] = [
		{ Name: "Jack Leung" },
		{Name: "Joe Bob"},
		{Name: "Sam Olly"}

	];

	Dealer: string = "Jack Leung";

	Picture: string = 'https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1080-600.jpg';

	PlayedQuotes: Quote[] = [
		{Text: "Thats fake news", PlayerName: 'Jack Leung', Chosen: false}

	];
}

export class User {
	
	Name: string;
}

export class Quote {
	
	Text: string;

	PlayerName: string;

	Chosen: boolean = false;

}