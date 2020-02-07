let movies = [
    {"name":"9"},
    {"name":"13 Going on 30"},
    {"name":"17 Again"},
    {"name":"50 First Dates"},
    {"name":"500 Days of Summer"},
    {"name":"A Bug's Life"},
    {"name":"A Few Good Men"},
    {"name":"About Time"},
    {"name":"Ace Ventura: Pet Detective"},
    {"name":"Aladdin"},
    {"name":"Alice in Wonderland (2010)"},
    {"name":"Almost Famous"},
    {"name":"Another Cinderella Story"},
    {"name":"Antz"},
    {"name":"Aquamarine"},
    {"name":"Avatar"},
    {"name":"Aziz Ansari: Right Now"},
    {"name":"Back to the Future"},
    {"name":"Bambi"},
    {"name":"Because of Winn Dixie"},
    {"name":"Bend It Like Beckham"},
    {"name":"Beverly Hills Chihuahua"},
    {"name":"Big"},
    {"name":"Big Hero Six"},
    {"name":"Bill Burr: Paper Tiger"},
    {"name":"Bill Burr: You People Are All the Same"},
    {"name":"Black Panther"},
    {"name":"BlacKkKlansman"},
    {"name":"Bo Burnham: what."},
    {"name":"Bohemian Rhapsody"},
    {"name":"Bolt"},
    {"name":"Booksmart"},
    {"name":"Brave"},
    {"name":"Bratz"},
    {"name":"Bridge to Terabithia"},
    {"name":"Cars"},
    {"name":"Cars 2"},
    {"name":"Cars 3"},
    {"name":"Charlotte's Web"},
    {"name":"Chef"},
    {"name":"Chicken Little"},
    {"name":"Cinderella"},
    {"name":"City of Ember"},
    {"name":"Click"},
    {"name":"Cloudy With a Chance of Meatballs"},
    {"name":"Cloudy With a Chance of Meatballs 2"},
    {"name":"Coco"},
    {"name":"Cyberbully"},
    {"name":"Daddy Day Care"},
    {"name":"Dave Chappelle: Killen' Them Softly"},
    {"name":"Dave Chappelle: Sticks & Stones"},
    {"name":"Deadpool"},
    {"name":"Despicable Me"},
    {"name":"Despicable Me 2"},
    {"name":"Divergent"},
    {"name":"Doctor Strange"},
    {"name":"Dumb and Dumber"},
    {"name":"Dumbo"},
    {"name":"E.T."},
    {"name":"Eighth Grade"},
    {"name":"Easy A"},
    {"name":"Elf"},
    {"name":"Ella Enchanted"},
    {"name":"Enchanted"},
    {"name":"Ender's Game"},
    {"name":"Ferris Bueller's Day Off"},
    {"name":"FernGully: The Last Rainforest"},
    {"name":"Finding Dory"},
    {"name":"Finding Nemo"},
    {"name":"Flushed Away"},
    {"name":"Forrest Gump"},
    {"name":"Frankenstein"},
    {"name":"Frankenweenie"},
    {"name":"Freaky Friday"},
    {"name":"Frozen"},
    {"name":"G Force"},
    {"name":"Game Night"},
    {"name":"Gnomeo & Juliet"},
    {"name":"Ghost Rider"},
    {"name":"Ghostbusters"},
    {"name":"Gravity"},
    {"name":"Groundhog Day"},
    {"name":"Grown Ups"},
    {"name":"Grown Ups 2"},
    {"name":"Guardians of the Galaxy"},
    {"name":"Hairspray"},
    {"name":"Happy Feet"},
    {"name":"Happy Feet 2"},
    {"name":"Happy Gilmore"},
    {"name":"Harry Potter and the Philosopher's Stone"},
    {"name":"Harry Potter and the Chamber of Secrets"},
    {"name":"Harry Potter and the Prisoner of Azkaban"},
    {"name":"Harry Potter and the Goblet of Fire"},
    {"name":"Harry Potter and the Order of the Phoenix"},
    {"name":"Harry Potter and the Half-Blood Prince"},
    {"name":"Harry Potter and the Deathly Hallows — Part 1"},
    {"name":"Harry Potter and the Deathly Hallows — Part 2"},
    {"name":"Hasan Minhaj: Homecoming King"},
    {"name":"Herbie Fully Loaded"},
    {"name":"Hidden Figures"},
    {"name":"High School Musical"},
    {"name":"High School Musical 2"},
    {"name":"High School Musical 3"},
    {"name":"Holes"},
    {"name":"Home Alone"},
    {"name":"Home Alone 2: Lost in New York"},
    {"name":"Home Alone 4: Taking Back the House"},
    {"name":"Hoodwinked"},
    {"name":"Hop"},
    {"name":"Horton Hears a Who"},
    {"name":"Hot Fuzz"},
    {"name":"Hotel Transylvania"},
    {"name":"How to Lose a Guy in 10 Days"},
    {"name":"How to Train Your Dragon"},
    {"name":"How to Train Your Dragon 2"},
    {"name":"Hugo"},
    {"name":"Ice Age"},
	{"name":"Ice Age: Continental Drift"},
    {"name":"Ice Age: Dawn of the Dinosaurs"},
    {"name":"Ice Age: The Meltdown"},
    {"name":"Indiana Jones and the Kingdom of the Crystal Skull"},
    {"name":"Inside Out"},
    {"name":"Instellar"},
    {"name":"Jaws"},
    {"name":"John Mulaney: Kid Gorgeous at Radio City"},
    {"name":"John Mulaney: The Comeback Kid"},
    {"name":"Journey to the Center of the Earth (2012)"},
    {"name":"Journey 2: The Mysterious Island"},
    {"name":"Jumanji"},
    {"name":"Juno"},
    {"name":"Just Go With It"},
    {"name":"Knives Out", "date":"2020-1-12"},
    {"name":"Kubo and the Two Strings"},
    {"name":"Kung Fu Panda"},
    {"name":"Kung Fu Panda 2"},
    {"name":"Kung Fu Panda 3"},
    {"name":"Lady Bird"},
    {"name":"Little Miss Sunshine"},
    {"name":"Lost in Translation"},
    {"name":"Madagascar"},
    {"name":"Madagascar 2"},
    {"name":"Madagascar 3: Europe's Most Wanted"},
    {"name":"Maleficent"},
    {"name":"Mamma Mia"},
    {"name":"Mean Girls"},
    {"name":"Megamind"},
    {"name":"Men in Black"},
    {"name":"Men in Black 2"},
    {"name":"Men in Black 3"},
    {"name":"Million Dollar Arm"},
    {"name":"Moana"},
    {"name":"Monsters University"},
    {"name":"Monsters vs. Aliens"},
    {"name":"Monsters vs. Aliens 2"},
    {"name":"Monsters, Inc."},
    {"name":"Monsters"},
    {"name":"Moonlight"},
    {"name":"Moonrise Kingdom"},
    {"name":"Mr. Peabody & Sherman"},
    {"name":"Mulan"},
    {"name":"My Big Fat Greek Wedding"},
    {"name":"Nanny McPhee"},
    {"name":"National Treasure"},
    {"name":"Night at the Museum"},
    {"name":"Night at the Museum 2"},
    {"name":"Night at the Museum 3"},
    {"name":"Nim's Island"},
    {"name":"Office Space"},
    {"name":"Open Season"},
    {"name":"Open Season 2"},
    {"name":"Outsourced"},
    {"name":"Over the Hedge"},
    {"name":"ParaNorman"},
    {"name":"Parent Trap"},
    {"name":"Percy Jackson & The Lightning Thief"},
    {"name":"Peter Pan"},
    {"name":"Pinocchio"},
    {"name":"Plus One"},
    {"name":"Pokémon 2000"},
    {"name":"Pokémon Detective Pikachu"},
    {"name":"Rango"},
    {"name":"Ratatouille"},
    {"name":"Rio"},
    {"name":"Rise of the Guardians"},
    {"name":"Scott Pilgrim vs. The World"},
    {"name":"Shark Boy and Lava Girl"},
    {"name":"Sharknado"},
    {"name":"Shaun of the Dead"},
    {"name":"Shrek"},
    {"name":"Shrek 2"},
    {"name":"Shrek 3"},
    {"name":"Shrek Forever After"},
    {"name":"Sleeping Beauty"},
    {"name":"Slumdog Millionaire"},
    {"name":"Spider-Man"},
    {"name":"Spider-Man 2"},
    {"name":"Spider-Man 3"},
    {"name":"Spider-Man: Homecoming"},
    {"name":"Spider-Man: Far from Home"},
    {"name":"Spirited Away"},
    {"name":"Spy"},
    {"name":"Spy Kids"},
    {"name":"Spy Kids 2: Game Over"},
    {"name":"Spy Kids 4-D: All the Time in the World"},
    {"name":"Stand By me"},
    {"name":"Stardust"},
    {"name":"Star Wars Episode I: The Phantom Menace"},
    {"name":"Star Wars Episode II: Attack of the Clones"},
    {"name":"Star Wars Episode III: Revenge of the Sith"},
    {"name":"Star Wars Episode IV: A New Hope"},
    {"name":"Star Wars Episode V: The Empire Strikes Back"},
    {"name":"Star Wars Episode VI: Return of the Jedi"},
    {"name":"Steins;Gate: Deja Vu"},
    {"name":"Stitch! The Movie"},
    {"name":"Surf's Up"},
    {"name":"Sydney White"},
    {"name":"Tag"},
    {"name":"Tangled"},
    {"name":"The Bee Movie"},
    {"name":"The Big Lebowski"},
    {"name":"The Blind Side"},
    {"name":"The Brothers Grimsby"},
    {"name":"The Cabinet of Dr. Caligari"},
    {"name":"The Dark Knight"},
    {"name":"The Devil Wears Prada"},
    {"name":"The Edge of Seventeen"},
    {"name":"The Favourite"},
    {"name":"The Great Gatsby"},
    {"name":"The Hobbit: An Unexpected Journey"},
    {"name":"The Hobbit: The Desolation of Smaug"},
    {"name":"The Hunger Games"},
    {"name":"The Hunger Games: Catching Fire"},
    {"name":"The Incredibles"},
    {"name":"The Incredibles 2"},
    {"name":"The Intern"},
    {"name":"The Karate Kid"},
    {"name":"The Iron Giant"},
    {"name":"The Last Samurai"},
    {"name":"The Lego Batman Movie"},
    {"name":"The Lego Movie"},
    {"name":"The Lego Movie 2: The Second Part"},
    {"name":"The Lion King"},
    {"name":"The Little Mermaid"},
    {"name":"The Love Guru"},
    {"name":"The Man Who Knew Infinity"},
    {"name":"The Martian"},
    {"name":"The Matrix"},
    {"name":"The Odd Life of Timony Green"},
    {"name":"The Pacifier"},
    {"name":"The Perfect Date"},
    {"name":"The Polar Express"},
    {"name":"The Princess Bride"},
    {"name":"The Princess and the Frog"},
    {"name":"The Ridiculous 6"},
    {"name":"The Spiderwick Chronicles"},
    {"name":"The Terminator"},
    {"name":"The Twilight Saga: New Moon"},
    {"name":"The Twilight Saga: Eclipse"},
    {"name":"The Ugly Truth"},
    {"name":"The Wizard of Oz"},
    {"name":"Titanic"},
    {"name":"To All the Boys I've Loved Before"},
    {"name":"To Kill a Mockingbird"},
    {"name":"Tooth Fairy"},
    {"name":"Toy Story"},
    {"name":"Toy Story 2"},
    {"name":"Toy Story 3"},
    {"name":"Tron: Legacy"},
    {"name":"Trevor Noah: Son of Patricia"},
    {"name":"Twilight"},
    {"name":"Underdog"},
    {"name":"Up"},
    {"name":"WALL-E"},
    {"name":"Wedding Crashers"},
    {"name":"What To Expect When You're Expecting"},
    {"name":"What We Do in the Shadows"},
    {"name":"Where the Wild Things Are"},
    {"name":"Wild"},
    {"name":"Wonder Woman"},
    {"name":"Wreck It Ralph"},
    {"name":"X+Y"},
    {"name":"You Don't Mess with the Zohan"},
    {"name":"Zathura: A Space Adventure"},
    {"name":"Zoom"},
    {"name":"Zootopia"},
]
//Watched Movies
let tv = [
    {"name":"American Vandal", "total_seasons":"2", "in_progress":"", "unwatched":""},
    {"name":"Archer", "total_seasons":"10", "in_progress":"8", "unwatched":[9, 10]},
    {"name":"Arrested Development", "total_seasons":"3", "in_progress":"", "unwatched":""},
    {"name":"Big Brother", "total_seasons":"21", "in_progress":"", "unwatched":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 21]},
    {"name":"Big Mouth", "total_seasons":"3", "in_progress":"", "unwatched":""},
    {"name":"Billions", "total_seasons":"5", "in_progress":"1", "unwatched":[2, 3, 4, 5]},
    {"name":"Bojack Horseman", "total_seasons":"6", "in_progress":"", "unwatched":""},
    {"name":"Brooklyn Nine-Nine", "total_seasons":"6", "in_progress":"2", "unwatched":[2, 3, 4, 5, 6]},
    {"name":"Chernobyl", "total_seasons":"1", "in_progress":"", "unwatched":""},
    {"name":"Community", "total_seasons":"6", "in_progress":"", "unwatched":[6]},
    {"name":"Cobra Kai", "total_seasons":"2", "in_progress":"", "unwatched":[2]},
    {"name":"Dark", "total_seasons":"2", "in_progress":"", "unwatched":""},
    {"name":"Derry Girls", "total_seasons":"2", "in_progress":"", "unwatched":""},
    {"name":"Fleabag", "total_seasons":"2", "in_progress":"", "unwatched":""},
    {"name":"Freaks and Geeks", "total_seasons":"1", "in_progress":"", "unwatched":""},
    {"name":"Glee", "total_seasons":"6", "in_progress":"", "unwatched":[5, 6]},
	{"name":"The Good Place", "total_seasons":"4", "in_progress":"", "unwatched":""},
    {"name":"Gravity Falls", "total_seasons":"2", "in_progress":"", "unwatched":""},
    {"name":"Haikyuu!!", "total_seasons":"3", "in_progress":"", "unwatched":""},
    {"name":"How I Met Your Mother", "total_seasons":"9", "in_progress":"9", "unwatched":""},
    {"name":"It's Always Sunny in Philadelphia", "total_seasons":"14", "in_progress":"4", "unwatched":[5, 6, 7, 8, 9, 10, 11, 12, 13, 14]},
    {"name":"Jojo's Bizarre Adventure", "total_seasons":"4", "in_progress":"", "unwatched":""},
    {"name":"Master of None", "total_seasons":"2", "in_progress":"", "unwatched":""},
    {"name":"Mob Psycho 100", "total_seasons":"2", "in_progress":"", "unwatched":""},
	{"name":"The Marvelous Mrs. Maisel", "total_seasons":"2", "in_progress":"", "unwatched":""},
    {"name":"Modern Family", "total_seasons":"11", "in_progress":"", "unwatched":[7, 8, 9, 10, 11]},
    {"name":"My Hero Academia", "total_seasons":"4", "in_progress":"4", "unwatched":""},
    {"name":"The Office", "total_seasons":"9", "in_progress":"6", "unwatched":[1, 7, 8, 9]},
    {"name":"One Punch Man", "total_seasons":"2", "in_progress":"", "unwatched":"2"},
    {"name":"Parks and Recreation", "total_seasons":"7", "in_progress":"6", "unwatched":[7]},
    {"name":"Patriot Act", "total_seasons":"3", "in_progress":"", "unwatched":""},
    {"name":"Rick & Morty", "total_seasons":"4", "in_progress":"4", "unwatched":""},
    {"name":"Sex Education", "total_seasons":"2", "in_progress":"", "unwatched":""},
    {"name":"Silicon Valley", "total_seasons":"6", "in_progress":"", "unwatched":[4, 5, 6]},
    {"name":"Stranger Things", "total_seasons":"3", "in_progress":"", "unwatched":""},
    {"name":"Steins;Gate", "total_seasons":"1", "in_progress":"", "unwatched":""},
    {"name":"Steins;Gate 0", "total_seasons":"1", "in_progress":"", "unwatched":""},
    {"name":"That Time I Got Reincarnated as a Slime", "total_seasons":"1", "in_progress":"", "unwatched":""},
    {"name":"Unbreakable Kimmy Schmidt", "total_seasons":"5", "in_progress":"1", "unwatched":[2, 3, 4, 5]},
    {"name":"Video Game High School", "total_seasons":"3", "in_progress":"", "unwatched":""}
]
//Watched TV Shows


let books = [
    {"name":"Americanah", "author":"Emil Cioran"},
    {"name":"Flatland", "author":"Edwin Abbott Abbott"},
    {"name":"Game Feel", "author":"Steve Swink"},
    {"name":"Spelunky", "author":"Derek Yu"},

    {"name":"The Name of this Book is Secret", "author":"Pseudonymous Bosch", "series":"The Secret Series"},
    {"name":"If You're Reading This, It's Too Late", "author":"Pseudonymous Bosch", "series":"The Secret Series"},
    {"name":"This Book Is Not Good for You", "author":"Pseudonymous Bosch", "series":"The Secret Series"},
    {"name":"This Isn't What It Looks Like", "author":"Pseudonymous Bosch", "series":"The Secret Series"},
    {"name":"You Have to Stop This", "author":"Pseudonymous Bosch", "series":"The Secret Series"},

    {"name":"Hyperion", "author":"Dan Simmons", "series":"Hyperion Cantos"},
    {"name":"The Name of the Wind", "author":"George R. R. Martin", "series":"A Song of Ice and Fire"},
    {"name":"The Wise Man's Fear", "author":"George R. R. Martin", "series":"A Song of Ice and Fire"},
    {"name":"A Game of Thrones", "author":"George R. R. Martin", "series":"A Song of Ice and Fire"},
    {"name":"A Clash of Kings", "author":"George R. R. Martin", "series":"A Song of Ice and Fire"},
    {"name":"A Storm of Swords", "author":"George R. R. Martin", "series":"A Song of Ice and Fire"},
    {"name":"A Feast for Crows", "author":"George R. R. Martin", "series":"A Song of Ice and Fire"},
    {"name":"Harry Potter and the Sorcerer's Stone", "author":"J.K. Rowling", "series":"Harry Potter"},
    {"name":"Harry Potter and the Chamber of Secrets", "author":"J.K. Rowling", "series":"Harry Potter"},
    {"name":"Harry Potter and the Prisoner of Azkaban", "author":"J.K. Rowling", "series":"Harry Potter"},
    {"name":"Harry Potter and the Goblet of Fire", "author":"J.K. Rowling", "series":"Harry Potter"},
    {"name":"Harry Potter and the Order of the Phoenix", "author":"J.K. Rowling", "series":"Harry Potter"},
    {"name":"Harry Potter and the Half-Blood Prince", "author":"J.K. Rowling", "series":"Harry Potter"},
    {"name":"Harry Potter and the Deathly Hallows", "author":"J.K. Rowling", "series":"Harry Potter"},
    {"name":"The Lightning Thief", "author":"Rick Riordan", "series":"Percy Jackson and the Olympians"},
    {"name":"The Sea of Monsters", "author":"Rick Riordan", "series":"Percy Jackson and the Olympians"},
    {"name":"The Titan's Curse", "author":"Rick Riordan", "series":"Percy Jackson and the Olympians"},
    {"name":"The Battle of the Labyrinth", "author":"Rick Riordan", "series":"Percy Jackson and the Olympians"},
    {"name":"The Last Olympian", "author":"Rick Riordan", "series":"Percy Jackson and the Olympians"},
    {"name":"The Lost Hero", "author":"Rick Riordan", "series":"The Heroes of Olympus"},
    {"name":"The Son of Neptune", "author":"Rick Riordan", "series":"The Heroes of Olympus"},
    {"name":"The Mark of Athena", "author":"Rick Riordan", "series":"The Heroes of Olympus"},
    {"name":"The House of Hades", "author":"Rick Riordan", "series":"The Heroes of Olympus"},
    {"name":"The Blood of Olympus", "author":"Rick Riordan", "series":"The Heroes of Olympus"},
    {"name":"The Red Pyramid", "author":"Rick Riordan", "series":"Kane Chronicles"},
    {"name":"The Throne of Fire", "author":"Rick Riordan", "series":"Kane Chronicles"},
    {"name":"The Serpent's Shadow", "author":"Rick Riordan", "series":"Kane Chronicles"},
    {"name":"I'll Give You the Sun", "author":"Jandy Nelson"},

    {"name":"Holes", "author":"Louis Sachar"},
    {"name":"Stargirl", "author":"Jerry Spinelli", "series":"Stargirl"},
    {"name":"Love, Stargirl", "author":"Jerry Spinelli", "series":"Stargirl"},
    {"name":"The Fault in Our Stars", "author":"John Green"},

    {"name":"Divergent", "author":"Veronica Roth", "series":"Divergent"},
    {"name":"Insurgent", "author":"Veronica Roth", "series":"Divergent"},
    {"name":"Allegient", "author":"Veronica Roth", "series":"Divergent"},

    {"name":"Gregor the Overlander", "author":"Suzanne Collins", "series":"The Underland Chronicles"},
    {"name":"Gregor and the Prophecy of Bane", "author":"Suzanne Collins", "series":"The Underland Chronicles"},
    {"name":"Gregor and the Curse of the Warmbloods", "author":"Suzanne Collins", "series":"The Underland Chronicles"},
    {"name":"Gregor and the Marks of Secret", "author":"Suzanne Collins", "series":"The Underland Chronicles"},
    {"name":"Gregor and the Code of Claw", "author":"Suzanne Collins", "series":"The Underland Chronicles"},

    {"name":"The Amulet of Samarkand", "author":"Jonathan Shroud", "series":"Bartimaeus Sequence"},
    {"name":"The Golem's Eye", "author":"Jonathan Shroud", "series":"Bartimaeus Sequence"},
    {"name":"Ptolemy's Gate", "author":"Jonathan Shroud", "series":"Bartimaeus Sequence"},
    {"name":"The Ring of Solomon", "author":"Jonathan Shroud", "series":"Bartimaeus Sequence"},

    {"name":"Skulduggery Pleasant", "author":"Derek Landy", "series":"Skulduggery Pleasant"},
    {"name":"Playing with Fire", "author":"Derek Landy", "series":"Skulduggery Pleasant"},
    {"name":"The Faceless Ones", "author":"Derek Landy", "series":"Skulduggery Pleasant"},
    {"name":"Dark Days", "author":"Derek Landy", "series":"Skulduggery Pleasant"},
    {"name":"Mortal Coil", "author":"Derek Landy", "series":"Skulduggery Pleasant"},
    {"name":"Death Bringer", "author":"Derek Landy", "series":"Skulduggery Pleasant"},
    {"name":"Kingdom of the Wicked", "author":"Derek Landy", "series":"Skulduggery Pleasant"},
    {"name":"Last Stand of Dead Men", "author":"Derek Landy", "series":"Skulduggery Pleasant"},
    {"name":"The Dying of the Light", "author":"Derek Landy", "series":"Skulduggery Pleasant"},
    {"name":"The End of the World", "author":"Derek Landy", "series":"Skulduggery Pleasant"},
    {"name":"Tanith Low in... The Maleficent Seven", "author":"Derek Landy", "series":"Skulduggery Pleasant"},
    {"name":"Armageddon Outta Here", "author":"Derek Landy", "series":"Skulduggery Pleasant"},

    {"name":"The Hunger Games", "author":"Suzanne Collins", "series":"The Hunger Games"},
    {"name":"Catching Fire", "author":"Suzanne Collins", "series":"The Hunger Games"},
    {"name":"Mockingjay", "author":"Suzanne Collins", "series":"The Hunger Games"},
    
    {"name":"How to Train Your Dragon", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},
    {"name":"How to Be A Pirate", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},
    {"name":"How to Speak Dragonese", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},
    {"name":"How to Cheat a Dragon's Curse", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},
    {"name":"How to Twist a Dragon's Tale", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},
    {"name":"A Hero's Guide To Deadly Dragons", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},
    {"name":"How to Ride a Dragon's Storm", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},
    {"name":"How to Break a Dragon's Heart", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},
    {"name":"How to Steal a Dragon's Sword", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},
    {"name":"How to Seize a Dragon's Jewel", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},
    {"name":"How to Betray a Dragon's Hero", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},
    {"name":"How to Fight a Dragon's Fury", "author":"Cressida Cowell", "series":"How to Train Your Dragon"},

    {"name":"Naruto", "author":"Masashi Kishimoto"},
    {"name":"Jojo's Bizarre Adventure: Vento Aureo", "author":"Hirohiko Araki", "series":"Jojo's Bizarre Adventure"},
    {"name":"Mob Psycho 100", "author":"ONE"},
    {"name":"Steve Jobs", "author":"Walter Isaacson"},
    {"name":"The Great Gatsby", "author":"F. Scott Fitzgerald"},
    {"name":"Purple Hibiscus", "author":"Chimamanda Ngozi Adichie"},
    {"name":"The Particular Sadness of Lemon Cake", "author":"Aimee Bender"},
    {"name":"Candor", "author":"Pam Bachorz"},

    {"name":"Gone", "author":"Michael Grant", "series":"Gone"},
    {"name":"Lies", "author":"Michael Grant", "series":"Gone"},
    {"name":"Plague", "author":"Michael Grant", "series":"Gone"},
    {"name":"Fear", "author":"Michael Grant", "series":"Gone"},
    {"name":"Light", "author":"Michael Grant", "series":"Gone"},  

    {"name":"The Hero's Guide to Saving Your Kingdom", "author":"Christopher Healy", "series":"The League of Princes"},
    {"name":"The Hero's Guide to Storming the Castle", "author":"Christopher Healy", "series":"The League of Princes"},
    {"name":"The Hero's Guide to Being an Outlaw", "author":"Christopher Healy", "series":"The League of Princes"},

    {"name":"Tunnels", "author":"Roderick Gordon", "series":"Tunnels"},
    {"name":"Deeper", "author":"Roderick Gordon", "series":"Tunnels"},

    {"name":"The Giver", "author":"Louis Lowry"},
    {"name":"Gossamer", "author":"Louis Lowry"},
    
    {"name":"Bone, Vol, 1: Out from Boneville", "author":"Jeff Smith", "series":"Bone"},
    {"name":"Bone, Vol. 2: The Great Cow Race", "author":"Jeff Smith", "series":"Bone"},
    {"name":"Bone, Vol. 3: Eyes of the Storm", "author":"Jeff Smith", "series":"Bone"},
    {"name":"Bone, Vol. 4: The Dragonslayer", "author":"Jeff Smith", "series":"Bone"},
    {"name":"Bone, Vol. 5: Rock Jaw, Master of the Eastern Border", "author":"Jeff Smith", "series":"Bone"},
    {"name":"Bone, Vol. 6: Old Man's Cave", "author":"Jeff Smith", "series":"Bone"},
    {"name":"Bone, Vol. 7: Ghost Circles", "author":"Jeff Smith", "series":"Bone"},
    {"name":"Bone, Vol. 8: Treasure Hunters", "author":"Jeff Smith", "series":"Bone"},
    {"name":"Bone, Vol. 9: Crown of Horns", "author":"Jeff Smith", "series":"Bone"},
    {"name":"Rose", "author":"Jeff Smith", "series":"Bone"},
    {"name":"Tall Tales", "author":"Jeff Smith", "series":"Bone"},
    {"name":"Bone: Stupid Stupid Rat-Tails", "author":"Jeff Smith", "series":"Bone"},

    {"name":"Bone: Quest for the Spark, Vol. 1", "author":"Tom Sniegoski", "series":"Bone: Quest for the Spark"},
    {"name":"Bone: Quest for the Spark, Vol. 2", "author":"Tom Sniegoski", "series":"Bone: Quest for the Spark"},

    {"name":"Magyk", "author":"Angie Sage", "series":"Septimus Heap"},
    {"name":"The Darke Toad", "author":"Angie Sage", "series":"Septimus Heap"},
    {"name":"Flyte", "author":"Angie Sage", "series":"Septimus Heap"},
    {"name":"Physik", "author":"Angie Sage", "series":"Septimus Heap"},
    {"name":"Queste", "author":"Angie Sage", "series":"Septimus Heap"},
    {"name":"Syren", "author":"Angie Sage", "series":"Septimus Heap"},
    {"name":"Darke", "author":"Angie Sage", "series":"Septimus Heap"},
    {"name":"Fyre", "author":"Angie Sage", "series":"Septimus Heap"},


    {"name":"Peter and the Starcatchers", "author":"Dave Barry", "series":"Peter and the Starcatchers"},
    {"name":"Peter and the Shadow Thieves", "author":"Dave Barry", "series":"Peter and the Starcatchers"},
    {"name":"Peter and the Secret of Rundoon", "author":"Dave Barry", "series":"Peter and the Starcatchers"},
    {"name":"Peter and the Sword of Mercy", "author":"Dave Barry", "series":"Peter and the Starcatchers"},
    {"name":"The Bridge to Never Land", "author":"Dave Barry", "series":"Peter and the Starcatchers"},
    {"name":"Watchmen", "author":"Alan Moore"},

    {"name":"Legend", "author": "Marie Lu", "series":"Legend"},
    {"name":"Prodigy", "author": "Marie Lu", "series":"Legend"},
    {"name":"Champion", "author": "Marie Lu", "series":"Legend"},

    {"name":"Ready Player One", "author":"Ernest Cline"},

    {"name":"The Way of Kings", "author":"Brandon Sanderson", "series":"The Stormlight Archive"},
    {"name":"Words of Radiance", "author":"Brandon Sanderson", "series":"The Stormlight Archive"},

    {"name":"Fablehaven", "author":"Brandon Mull", "series":"Fablehaven"},
    {"name":"Fablehaven: Rise of the Evening Star", "author":"Brandon Mull", "series":"Fablehaven"},
    {"name":"Fablehaven: Grip of the Shadow Plague", "author":"Brandon Mull", "series":"Fablehaven"},
    {"name":"Fablehaven: Secrets of the Dragon Sanctuary", "author":"Brandon Mull", "series":"Fablehaven"},
    {"name":"Fablehaven: Keys to the Demon Prison", "author":"Brandon Mull", "series":"Fablehaven"},

    {"name":"Born a Crime", "author":"Trevor Noah"}, 
    {"name":"Because Internet", "author":"Gretchen McCulloch", "date":"2019/12/27"},
    {"name":"Persepolis", "author":"Marjane Satrapi", "date":"2019/12/27"},
    {"name":"What If?", "author":"Randall Munroe", "date":"2019/12/30"},
    {"name":"Blood, Sweat, and Pixels: The Triumphant, Turbulent Stories Behind How Video Games Are Made", "author":"Jason Schreier", "date":"2019/12/31"},
]

movie_list = document.getElementById("movie_list");
movie_div = document.getElementById("movies");

tv_list = document.getElementById("tv_list");
tv_div = document.getElementById("tv");


book_list = document.getElementById("book_list");
book_div = document.getElementById("books");

searchbar = document.getElementById("searchbar");

window.onload = function() {
    for(m of movies) {
        let n = document.createElement("li");
        n.setAttribute("class", "movie_item item");
        n.setAttribute("data-name", m['name'].toLowerCase())
        n.textContent = m['name'];
        movie_list.appendChild(n);    
    }

    for(t of tv) {
        let n = document.createElement("li")
        n.setAttribute("class", "tv_item item")
        n.setAttribute("data-name", (t.name).toLowerCase())
        n.textContent = t.name + " - [";
        console.log(t.total_seasons)
        for(let i = 1; i < (parseInt(t.total_seasons)+1); i++) {
            let sn = document.createElement("span");
            if(t.unwatched.includes(i)) {
                sn.setAttribute("class", "unwatched")
            } else if(t.in_progress == i) {
                sn.setAttribute("class", "in_progress")
            } else {
                sn.setAttribute("class", "watched")
            }
            sn.textContent = (i==t.total_seasons)?(i):(i+" ");
            n.appendChild(sn)
            if(i == t.total_seasons) {
                tn = document.createTextNode("]")
                n.appendChild(tn)
            }
        }

        tv_list.appendChild(n);
    }

    for(b of books) {
        console.log(b)
        let n = document.createElement("li")
        n.setAttribute("class", "book_item item")
        n.setAttribute("data-name", (b.name).toLowerCase())
        n.textContent = b.name + " - [";
        let sn = document.createElement("span");
        sn.textContent = b.author
        if(b.series != undefined) sn.textContent += " | " + b.series
        n.appendChild(sn)
        tn = document.createTextNode("]")
        n.appendChild(tn)
        book_list.appendChild(n);
    }   

    tv_div.style.display = "block";
    movie_div.style.display = "none";
    book_div.style.display = "none";

}

function filterItems() {
    let items = document.getElementsByClassName("item");
    if(searchbar.value == "") {
        for(let i = 0; i < items.length; i++) {
            items[i].style.display = "list-item";
        }
    } else {
        for(let i = 0; i < items.length; i++) {
            if(!items[i].getAttribute("data-name").includes(searchbar.value.toLowerCase())) {
                items[i].style.display = "none";
            } else {
                items[i].style.display = "list-item"
            }
        }
    }
}

document.getElementById("movie_button").addEventListener("click", function() {
   if(movie_div.style.display == "none") {
       movie_div.style.display = "block";
       tv_div.style.display = "none";
       book_div.style.display = "none";
   }
})

document.getElementById("tv_button").addEventListener("click", function() {
    if(tv_div.style.display == "none") {
        tv_div.style.display = "block";
        movie_div.style.display = "none";
        book_div.style.display = "none";
    }
})

document.getElementById("book_button").addEventListener("click", function() {
    if(book_div.style.display == "none") {
        tv_div.style.display = "none";
        movie_div.style.display = "none";
        book_div.style.display = "block";
    }
})




searchbar.addEventListener("keyup", filterItems);
