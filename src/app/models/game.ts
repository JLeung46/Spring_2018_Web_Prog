export class Game {

	Players: User[] = [
		{ Name: "Jack Leung", MyQuotes: [] },
		{Name: "Joe Bob", MyQuotes: [] },
		{Name: "Sam Olly", MyQuotes: [] }

	];

	Dealer: string = "Jack Leung";

	Picture: string = 'https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1080-600.jpg';

	PlayedQuotes: Quote[] = [
		{Text: "Thats fake news", PlayerName: 'Jack Leung', Chosen: false}

	];
}

export class User {
	
	Name: string;

	MyQuotes: string[] = [
		"Quote 1",
		"Quote 2",
		"Quote 3"

	];
}

export class Quote {
	
	Text: string;

	PlayerName: string;

	Chosen: boolean = false;

}