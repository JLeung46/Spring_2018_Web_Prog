export class Game {
	
	MyQuotes: string[] = [
		"Quote 1",
		"Quote 2",
		"Quote 3"

	];

	Players: User[] = [
		"Player 1",
		"Player 2",
		"Player 3"

	];

	Picture: string = 'https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1080-600.jpg';

	PlayedQuotes: Quote[] = [
		"Played Quote 1",
		"Played Quote 2",
		"Played Quote 3"

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