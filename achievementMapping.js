/**
 * Achievement Mapping Module
 * 
 * This file contains Steam achievement mappings and helper functions for managing
 * achievements in IdleOn. It should be injected into the game context along with cheats.js.
 * 
 * Total achievements: 276
 * Generated: 2025-12-22
 */

// ============================================================================
// STEAM ACHIEVEMENT MAPPINGS
// ============================================================================

const STEAM_ACHIEVEMENT_MAP = {
  "Achieve42": "Learn to Forge",
  "Achieve45": "Classy!",
  "Achieve14": "Another Me!",
  "Achieve3": "Rookie Player",
  "Achieve46": "Sleepy Gamer",
  "Achieve43": "Part 2: Learn to Entertain",
  "Achieve9": "Small Savings",
  "Achieve0": "The Sculpture Within",
  "Achieve4": "Average Player",
  "Kill0": "Mushrooms Defeated",
  "Achieve47": "Slumbering Gamer",
  "Achieve17": "Do What You're Told",
  "Achieve44": "Part 3: Learn to Translate",
  "Achieve38": "Pro Gamer Move",
  "Kill1": "Frogs Defeated",
  "Achieve1": "Down by the Desert",
  "Achieve15": "More and More Me!",
  "Kill2": "Beans Defeated",
  "Achieve20": "Card Collector",
  "Achieve33": "Crystal Beatdown",
  "Achieve10": "Retirement Fund",
  "Achieve5": "Elite Player",
  "Kill3": "Slimes Defeated",
  "Kill4": "Baby Boas Defeated",
  "Achieve23": "Anvil Expansion",
  "Kill5": "Carrotmen Defeated",
  "Kill6": "Glublins Defeated",
  "Achieve28": "Tree Top Dropout",
  "Achieve6": "Veteran Gamer",
  "Achieve21": "Card Enthusiast",
  "Achieve11": "Large Fortune",
  "_achA18": "Shut it Poochy",
  "Achieve2": "Snowy Wonderland",
  "Achieve25": "Boss Buster",
  "Achieve48": "Comatose Gamer",
  "Achieve53": "Powdered Neutronium",
  "_achA46": "Lucky 7s",
  "Achieve51": "My First Trophy!",
  "Achieve7": "Legendary Gamer",
  "Achieve18": "Bending over Backward to Help",
  "Achieve12": "Guild Member",
  "Achieve39": "Peanut Pioneer",
  "_achA10": "Copper 'Quipment",
  "_achB10": "Hybernation",
  "Achieve26": "Demon Demolisher",
  "Achieve24": "Anvil Expansion Again",
  "Achieve36": "Bad Doggy!",
  "Achieve8": "Mythical Gamer",
  "Achieve16": "A Family of Me!",
  "_achA17": "Giga Decimation",
  "_achA20": "Slimeicidal Endeavor",
  "_achB12": "Specializational!",
  "Achieve60": "Milky Wayfarer",
  "_achA31": "Tree Top Dropout",
  "_achA58": "Big Frog Angry",
  "Achieve34": "Crystal S-S-S-Suuuper Slam",
  "_achA24": "Colosseum Contender",
  "Achieve52": "Big Mobs, eek!",
  "_achA61": "2 Minute Meal",
  "_achA59": "Big Frog Furious",
  "_achA33": "House Flipper",
  "Achieve40": "Meel Time!",
  "Achieve37": "Dumbo the Destroyer",
  "Achieve41": "Meet the Dev",
  "_achA57": "Dungeon Pinch",
  "Achieve57": "Mutant Massacrer",
  "_achA56": "Based Roots",
  "_achB33": "Sweet Victory",
  "_achA60": "Big Frog Big Sad",
  "Achieve22": "Card Dude",
  "Achieve13": "Guild Higher-Up",
  "_achB27": "Coarse Cards",
  "Achieve58": "Lv.5 Nothing..?",
  "_achA21": "Right to Bear Iron",
  "_achC6": "Yawning Cogs",
  "Achieve19": "Simpin' for NPC's",
  "_achB11": "Vial Noob",
  "_achB25": "Pillars of Sand",
  "_achA6": "5 'hunned Copper",
  "Achieve49": "Hibernating Gamer",
  "_achB13": "Obols Oh Boy!",
  "_achB5": "Hammer Bub",
  "_achC14": "I Create...",
  "_achC13": "Cog in the System",
  "_achC43": "Cool Score!",
  "Achieve35": "Crystal Championship Bout",
  "_achB54": "Dungeon Slap",
  "_achC8": "Too Cute To Live",
  "_achA8": "1.5 Ki'log'grams",
  "_achA16": "2 Tons of Iron",
  "_achB46": "Bobjoepicklejar",
  "_achA41": "Nice Fur Suit",
  "_achB48": "Skill Maestro",
  "_achC11": "Soulslike",
  "_achA62": "Big Frog Big Mad",
  "_achC26": "Entangled Compounds",
  "_achC49": "Equinox Visitor",
  "_achA32": "Naked and Unafraid",
  "_achA4": "Hitting the Mark",
  "_achE5": "The Plateauourist",
  "_achC7": "Blunder Skull",
  "_achA48": "Cavernous Nook",
  "_achD21": "Good Plate",
  "_achD25": "Zero G Scoring",
  "_achE3": "Supernatural Gamer",
  "_achB49": "Tomb Raider",
  "_achB9": "Careful, it's Sharp!",
  "_achE12": "Glory To Nobisect",
  "_achD8": "I Like This Pet",
  "Achieve59": "Petless",
  "_achC18": "Saharan Skull",
  "_achF0": "Valley Visitor",
  "_achB14": "B-o-B to Help",
  "_achD14": "Cabbage Patch",
  "_achC23": "Geared for Success",
  "_achD32": "Veritable Master",
  "_achB26": "Vial Connoisseur",
  "_achA23": "20 Bundles of Jungle",
  "_achE19": "Bonsai Bonanza",
  "_achC20": "Borrowed Pens",
  "_achC3": "Croakin' Froge",
  "_achD22": "Great Plate",
  "_achC15": "I Sawed...",
  "_achB34": "Ink Blot",
  "_achA34": "Platinum 200G",
  "_achD10": "Shiny Shells",
  "_achC29": "Souped Up Salts",
  "_achB28": "Trial by Time",
  "_achA22": "5-6 Pick up Sticks",
  "_achC31": "Cogs Be Waitin'",
  "_achB7": "Gold School",
  "_achB4": "Golden Fly",
  "_achB24": "Rat-a-tat-tat",
  "_achC41": "Rattle them Bones",
  "_achC4": "Sad Souls",
  "Achieve56": "A Most Nice Sale",
  "_achE7": "Artifact Finder",
  "_achD23": "Best Plate",
  "_achB8": "Buzz Buzz",
  "_achA42": "Half a Mill-log",
  "_achA37": "Nutty Crafter",
  "_achB32": "Super Cereal",
  "_achA26": "Ten Trips of Gold",
  "_achD6": "Bland Dish",
  "Achieve55": "Blurple Skull",
  "_achB29": "Golden Obolden!",
  "_achF19": "Lucky Stealy",
  "_achB42": "Vial Junkee",
  "_achD17": "WOAH That's Fast",
  "_achE13": "All Hail Purrmep",
  "_achC45": "Boss Defeated",
  "_achB31": "Jellyfish Jelly",
  "_achB50": "Tomb Defiler",
  "_achA47": "What a View!",
  "_achD12": "Barley Lost",
  "_achC19": "Fat Souls",
  "_achE30": "Grand Captain",
  "_achC16": "Hairy Ice Comb",
  "_achD15": "Le Pretzel Bleu",
  "_achD1": "Channel Surfing",
  "_achE10": "Gilded Vessel",
  "_achC33": "Top Cogs",
  "_achA15": "Wode Together",
  "_achF16": "Ceramic Sneaking",
  "_achC5": "Checkout Takeout",
  "_achD19": "Chippin' Away",
  "_achC30": "I Constructed!",
  "_achE14": "Long Live Bagur",
  "_achF25": "Summoning CM",
  "_achF22": "Best Bloomie",
  "_achC44": "Dungeon Wallop",
  "_achF32": "Ghost Buster",
  "_achF5": "Lil' Overgrowth",
  "_achC46": "Manager Defeated",
  "_achA45": "Million Null 'n Void",
  "_achB38": "S-M-R-T",
  "Achieve27": "Spike Minigame Master",
  "_achE21": "True Naval Captain",
  "_achE8": "Artifact Enjoyer",
  "_achD11": "Gilded Shells",
  "_achE16": "Lucky Harvest",
  "_achD5": "Matrix Wickermen",
  "_achD24": "Space Party!!!",
  "_achF18": "Untying Extraordinaire",
  "_achF30": "Beanstacker Trainee",
  "_achB41": "Bigtime Bloacher",
  "_achE27": "Broken Controller",
  "_achD16": "Michelin Ranked",
  "_achF10": "Science Undergrad",
  "_achF26": "Summoning IM",
  "_achE18": "Voraci Vantasia",
  "_achE9": "Artifact Jones",
  "_achD2": "Bottle Capital",
  "_achA40": "Decked Out in Gold",
  "_achC12": "Good Times Roll",
  "Achieve50": "Guild Top Dawg",
  "_achE29": "Seaworthy Captain",
  "_achE26": "Sneaky Stealing",
  "_achA30": "Steppin' on the Rats",
  "_achF27": "Summoning GM",
  "_achB43": "Fruit Salad",
  "_achB40": "Nuget Nightmare",
  "_achC22": "Sqeakin' Mousey",
  "_achD18": "Stars Among Stars",
  "_achD29": "The True King",
  "_achB51": "Tomb Completionist",
  "_achF17": "Top Floor Sneaking",
  "_achE25": "Utter DISRESPECT",
  "Achieve30": "Choppin' to the Beat",
  "_achA54": "Heyo!",
  "_achE24": "Legendary Wormhole",
  "_achB30": "Monocle No More",
  "_achC36": "Smirky Souls",
  "_achE4": "Smokin' Stars",
  "_achF21": "Straw Hat Stacking",
  "Achieve54": "There Can Be Only One",
  "_achB6": "Wassup Yo!",
  "_achE22": "Legendary Orb",
  "_achE0": "Maple Logger",
  "_achA27": "Minecart Maniac",
  "_achF23": "Regalis My Beloved",
  "_achF11": "Science Graduate",
  "_achD3": "Too Many Tentacles",
  "_achF34": "W6 is Donezo",
  "_achC47": "Kingpin Defeated",
  "_achE28": "Lavathian Skulls",
  "_achD28": "Soda Poisoning",
  "_achC39": "The Goose is Loose",
  "_achF24": "This, is, Summoning!",
  "_achE1": "Vitamin D-licious",
  "_achF6": "Major Overgrowth",
  "_achE11": "Maroon Warship",
  "Achieve29": "Minecart Master",
  "_achF12": "Science Post Doc",
  "_achF1": "Scorin' the Ladies",
  "_achD31": "The True Emperor",
  "_achB44": "Your Skin, My Skin",
  "_achF15": "Big Time Land Owner",
  "_achF13": "Crop Flooding",
  "_achF8": "Doctor Repellant",
  "_achF2": "Effervess Enthusiess",
  "Achieve31": "Fishing Finesse",
  "_achB53": "Just Passing By",
  "_achC40": "Sepia Vision",
  "_achF29": "Spectre Stars",
  "_achB45": "WAAAAAAAHH!",
  "_achF33": "Beanstacker Prodigy",
  "_achF31": "Big Big Hampter",
  "Achieve32": "Catching Coronation",
  "_achF9": "Cob Enjoyer",
  "_achC38": "Knock on Wood",
  "_achE23": "Legendary Flag",
  "_achA44": "Two-Time Savior",
  "_achF7": "Unreal Overgrowth",
  "_achC17": "Giant Slayer",
  "_achD20": "Hunned Times a Day",
  "_achF3": "That's MY Crown",
  "_achB37": "Threadin' the Needle",
  "_achE2": "Wurm Wumbo",
  "_achF4": "Leet Lanterns",
  "_achF20": "Yellow Belt",
  "_achB23": "A Fish Too Far",
  "_achE17": "Chemical Collector",
  "_achE6": "No Krakens? ):",
  "_achE20": "Perfect Trade Deal",
  "_achA49": "Seriousleaf-ast!",
  "_achD9": "I LOVE These Pets",
  "_achF28": "Penta Defence",
  "_achB39": "Two Desserts!",
  "_achB47": "Fish Aint Biting",
  "_achF14": "Legumulucky",
  "_achC48": "Capitalist Win",
  "_achE31": "Hug_from_Timmy",
  "_achE15": "POiNG Champion",
  "_achD30": "The True Pirate",
  "_achB52": "Wazzzzam!",
};

const ACHIEVEMENT_NAME_TO_STEAM = {
  "Learn to Forge": "Achieve42",
  "Classy!": "Achieve45",
  "Another Me!": "Achieve14",
  "Rookie Player": "Achieve3",
  "Sleepy Gamer": "Achieve46",
  "Part 2: Learn to Entertain": "Achieve43",
  "Small Savings": "Achieve9",
  "The Sculpture Within": "Achieve0",
  "Average Player": "Achieve4",
  "Mushrooms Defeated": "Kill0",
  "Slumbering Gamer": "Achieve47",
  "Do What You're Told": "Achieve17",
  "Part 3: Learn to Translate": "Achieve44",
  "Pro Gamer Move": "Achieve38",
  "Frogs Defeated": "Kill1",
  "Down by the Desert": "Achieve1",
  "More and More Me!": "Achieve15",
  "Beans Defeated": "Kill2",
  "Card Collector": "Achieve20",
  "Crystal Beatdown": "Achieve33",
  "Retirement Fund": "Achieve10",
  "Elite Player": "Achieve5",
  "Slimes Defeated": "Kill3",
  "Baby Boas Defeated": "Kill4",
  "Anvil Expansion": "Achieve23",
  "Carrotmen Defeated": "Kill5",
  "Glublins Defeated": "Kill6",
  "Tree Top Dropout": "Achieve28",
  "Veteran Gamer": "Achieve6",
  "Card Enthusiast": "Achieve21",
  "Large Fortune": "Achieve11",
  "Shut it Poochy": "_achA18",
  "Snowy Wonderland": "Achieve2",
  "Boss Buster": "Achieve25",
  "Comatose Gamer": "Achieve48",
  "Powdered Neutronium": "Achieve53",
  "Lucky 7s": "_achA46",
  "My First Trophy!": "Achieve51",
  "Legendary Gamer": "Achieve7",
  "Bending over Backward to Help": "Achieve18",
  "Guild Member": "Achieve12",
  "Peanut Pioneer": "Achieve39",
  "Copper 'Quipment": "_achA10",
  "Hybernation": "_achB10",
  "Demon Demolisher": "Achieve26",
  "Anvil Expansion Again": "Achieve24",
  "Bad Doggy!": "Achieve36",
  "Mythical Gamer": "Achieve8",
  "A Family of Me!": "Achieve16",
  "Giga Decimation": "_achA17",
  "Slimeicidal Endeavor": "_achA20",
  "Specializational!": "_achB12",
  "Milky Wayfarer": "Achieve60",
  "Tree Top Dropout": "_achA31",
  "Big Frog Angry": "_achA58",
  "Crystal S-S-S-Suuuper Slam": "Achieve34",
  "Colosseum Contender": "_achA24",
  "Big Mobs, eek!": "Achieve52",
  "2 Minute Meal": "_achA61",
  "Big Frog Furious": "_achA59",
  "House Flipper": "_achA33",
  "Meel Time!": "Achieve40",
  "Dumbo the Destroyer": "Achieve37",
  "Meet the Dev": "Achieve41",
  "Dungeon Pinch": "_achA57",
  "Mutant Massacrer": "Achieve57",
  "Based Roots": "_achA56",
  "Sweet Victory": "_achB33",
  "Big Frog Big Sad": "_achA60",
  "Card Dude": "Achieve22",
  "Guild Higher-Up": "Achieve13",
  "Coarse Cards": "_achB27",
  "Lv.5 Nothing..?": "Achieve58",
  "Right to Bear Iron": "_achA21",
  "Yawning Cogs": "_achC6",
  "Simpin' for NPC's": "Achieve19",
  "Vial Noob": "_achB11",
  "Pillars of Sand": "_achB25",
  "5 'hunned Copper": "_achA6",
  "Hibernating Gamer": "Achieve49",
  "Obols Oh Boy!": "_achB13",
  "Hammer Bub": "_achB5",
  "I Create...": "_achC14",
  "Cog in the System": "_achC13",
  "Cool Score!": "_achC43",
  "Crystal Championship Bout": "Achieve35",
  "Dungeon Slap": "_achB54",
  "Too Cute To Live": "_achC8",
  "1.5 Ki'log'grams": "_achA8",
  "2 Tons of Iron": "_achA16",
  "Bobjoepicklejar": "_achB46",
  "Nice Fur Suit": "_achA41",
  "Skill Maestro": "_achB48",
  "Soulslike": "_achC11",
  "Big Frog Big Mad": "_achA62",
  "Entangled Compounds": "_achC26",
  "Equinox Visitor": "_achC49",
  "Naked and Unafraid": "_achA32",
  "Hitting the Mark": "_achA4",
  "The Plateauourist": "_achE5",
  "Blunder Skull": "_achC7",
  "Cavernous Nook": "_achA48",
  "Good Plate": "_achD21",
  "Zero G Scoring": "_achD25",
  "Supernatural Gamer": "_achE3",
  "Tomb Raider": "_achB49",
  "Careful, it's Sharp!": "_achB9",
  "Glory To Nobisect": "_achE12",
  "I Like This Pet": "_achD8",
  "Petless": "Achieve59",
  "Saharan Skull": "_achC18",
  "Valley Visitor": "_achF0",
  "B-o-B to Help": "_achB14",
  "Cabbage Patch": "_achD14",
  "Geared for Success": "_achC23",
  "Veritable Master": "_achD32",
  "Vial Connoisseur": "_achB26",
  "20 Bundles of Jungle": "_achA23",
  "Bonsai Bonanza": "_achE19",
  "Borrowed Pens": "_achC20",
  "Croakin' Froge": "_achC3",
  "Great Plate": "_achD22",
  "I Sawed...": "_achC15",
  "Ink Blot": "_achB34",
  "Platinum 200G": "_achA34",
  "Shiny Shells": "_achD10",
  "Souped Up Salts": "_achC29",
  "Trial by Time": "_achB28",
  "5-6 Pick up Sticks": "_achA22",
  "Cogs Be Waitin'": "_achC31",
  "Gold School": "_achB7",
  "Golden Fly": "_achB4",
  "Rat-a-tat-tat": "_achB24",
  "Rattle them Bones": "_achC41",
  "Sad Souls": "_achC4",
  "A Most Nice Sale": "Achieve56",
  "Artifact Finder": "_achE7",
  "Best Plate": "_achD23",
  "Buzz Buzz": "_achB8",
  "Half a Mill-log": "_achA42",
  "Nutty Crafter": "_achA37",
  "Super Cereal": "_achB32",
  "Ten Trips of Gold": "_achA26",
  "Bland Dish": "_achD6",
  "Blurple Skull": "Achieve55",
  "Golden Obolden!": "_achB29",
  "Lucky Stealy": "_achF19",
  "Vial Junkee": "_achB42",
  "WOAH That's Fast": "_achD17",
  "All Hail Purrmep": "_achE13",
  "Boss Defeated": "_achC45",
  "Jellyfish Jelly": "_achB31",
  "Tomb Defiler": "_achB50",
  "What a View!": "_achA47",
  "Barley Lost": "_achD12",
  "Fat Souls": "_achC19",
  "Grand Captain": "_achE30",
  "Hairy Ice Comb": "_achC16",
  "Le Pretzel Bleu": "_achD15",
  "Channel Surfing": "_achD1",
  "Gilded Vessel": "_achE10",
  "Top Cogs": "_achC33",
  "Wode Together": "_achA15",
  "Ceramic Sneaking": "_achF16",
  "Checkout Takeout": "_achC5",
  "Chippin' Away": "_achD19",
  "I Constructed!": "_achC30",
  "Long Live Bagur": "_achE14",
  "Summoning CM": "_achF25",
  "Best Bloomie": "_achF22",
  "Dungeon Wallop": "_achC44",
  "Ghost Buster": "_achF32",
  "Lil' Overgrowth": "_achF5",
  "Manager Defeated": "_achC46",
  "Million Null 'n Void": "_achA45",
  "S-M-R-T": "_achB38",
  "Spike Minigame Master": "Achieve27",
  "True Naval Captain": "_achE21",
  "Artifact Enjoyer": "_achE8",
  "Gilded Shells": "_achD11",
  "Lucky Harvest": "_achE16",
  "Matrix Wickermen": "_achD5",
  "Space Party!!!": "_achD24",
  "Untying Extraordinaire": "_achF18",
  "Beanstacker Trainee": "_achF30",
  "Bigtime Bloacher": "_achB41",
  "Broken Controller": "_achE27",
  "Michelin Ranked": "_achD16",
  "Science Undergrad": "_achF10",
  "Summoning IM": "_achF26",
  "Voraci Vantasia": "_achE18",
  "Artifact Jones": "_achE9",
  "Bottle Capital": "_achD2",
  "Decked Out in Gold": "_achA40",
  "Good Times Roll": "_achC12",
  "Guild Top Dawg": "Achieve50",
  "Seaworthy Captain": "_achE29",
  "Sneaky Stealing": "_achE26",
  "Steppin' on the Rats": "_achA30",
  "Summoning GM": "_achF27",
  "Fruit Salad": "_achB43",
  "Nuget Nightmare": "_achB40",
  "Sqeakin' Mousey": "_achC22",
  "Stars Among Stars": "_achD18",
  "The True King": "_achD29",
  "Tomb Completionist": "_achB51",
  "Top Floor Sneaking": "_achF17",
  "Utter DISRESPECT": "_achE25",
  "Choppin' to the Beat": "Achieve30",
  "Heyo!": "_achA54",
  "Legendary Wormhole": "_achE24",
  "Monocle No More": "_achB30",
  "Smirky Souls": "_achC36",
  "Smokin' Stars": "_achE4",
  "Straw Hat Stacking": "_achF21",
  "There Can Be Only One": "Achieve54",
  "Wassup Yo!": "_achB6",
  "Legendary Orb": "_achE22",
  "Maple Logger": "_achE0",
  "Minecart Maniac": "_achA27",
  "Regalis My Beloved": "_achF23",
  "Science Graduate": "_achF11",
  "Too Many Tentacles": "_achD3",
  "W6 is Donezo": "_achF34",
  "Kingpin Defeated": "_achC47",
  "Lavathian Skulls": "_achE28",
  "Soda Poisoning": "_achD28",
  "The Goose is Loose": "_achC39",
  "This, is, Summoning!": "_achF24",
  "Vitamin D-licious": "_achE1",
  "Major Overgrowth": "_achF6",
  "Maroon Warship": "_achE11",
  "Minecart Master": "Achieve29",
  "Science Post Doc": "_achF12",
  "Scorin' the Ladies": "_achF1",
  "The True Emperor": "_achD31",
  "Your Skin, My Skin": "_achB44",
  "Big Time Land Owner": "_achF15",
  "Crop Flooding": "_achF13",
  "Doctor Repellant": "_achF8",
  "Effervess Enthusiess": "_achF2",
  "Fishing Finesse": "Achieve31",
  "Just Passing By": "_achB53",
  "Sepia Vision": "_achC40",
  "Spectre Stars": "_achF29",
  "WAAAAAAAHH!": "_achB45",
  "Beanstacker Prodigy": "_achF33",
  "Big Big Hampter": "_achF31",
  "Catching Coronation": "Achieve32",
  "Cob Enjoyer": "_achF9",
  "Knock on Wood": "_achC38",
  "Legendary Flag": "_achE23",
  "Two-Time Savior": "_achA44",
  "Unreal Overgrowth": "_achF7",
  "Giant Slayer": "_achC17",
  "Hunned Times a Day": "_achD20",
  "That's MY Crown": "_achF3",
  "Threadin' the Needle": "_achB37",
  "Wurm Wumbo": "_achE2",
  "Leet Lanterns": "_achF4",
  "Yellow Belt": "_achF20",
  "A Fish Too Far": "_achB23",
  "Chemical Collector": "_achE17",
  "No Krakens? ):": "_achE6",
  "Perfect Trade Deal": "_achE20",
  "Seriousleaf-ast!": "_achA49",
  "I LOVE These Pets": "_achD9",
  "Penta Defence": "_achF28",
  "Two Desserts!": "_achB39",
  "Fish Aint Biting": "_achB47",
  "Legumulucky": "_achF14",
  "Capitalist Win": "_achC48",
  "Hug_from_Timmy": "_achE31",
  "POiNG Champion": "_achE15",
  "The True Pirate": "_achD30",
  "Wazzzzam!": "_achB52",
};

// ============================================================================
// ACHIEVEMENT HELPER FUNCTIONS
// ============================================================================

/**
 * Get all Steam achievements with their unlock status
 * @returns {Array} Array of achievement objects with name, code, and status
 */
function getAllAchievements() {
  const achievements = [];
  const steamAchieve = bEngine.getGameAttribute("SteamAchieve");
  const achieveReg = bEngine.getGameAttribute("AchieveReg");
  const steamAchieves = CList.SteamAchieves;
  
  // SteamAchieve and AchieveReg track unlock status
  // Index 0-60 for Steam achievements, 61+ for internal achievements
  for (let i = 0; i < Math.min(61, steamAchieves.length); i++) {
    const metadata = steamAchieves[i];
    achievements.push({
      index: i,
      name: metadata[0],
      description: metadata[1],
      hidden: metadata[2] === 1,
      unlocked: steamAchieve[i] === 1,
      steamCode: findSteamCodeByIndex(i)
    });
  }
  
  return achievements;
}

/**
 * Find Steam code by achievement index through name matching
 * @param {number} index - Achievement index in SteamAchieves array
 * @returns {string} Steam achievement code or placeholder
 */
function findSteamCodeByIndex(index) {
  try {
    const achievementName = CList.SteamAchieves[index][0];
    return ACHIEVEMENT_NAME_TO_STEAM[achievementName] || `[unknown_${index}]`;
  } catch (e) {
    return `[error_${index}]`;
  }
}

/**
 * Find achievement index by Steam code through name matching
 * @param {string} steamCode - Steam achievement code
 * @returns {number} Index or -1 if not found
 */
function findIndexBySteamCode(steamCode) {
  const targetName = STEAM_ACHIEVEMENT_MAP[steamCode];
  if (!targetName) return -1;
  
  // Search through CList.SteamAchieves for matching name
  for (let i = 0; i < CList.SteamAchieves.length; i++) {
    if (CList.SteamAchieves[i][0] === targetName) {
      return i;
    }
  }
  
  return -1;
}

/**
 * Unlock achievement by Steam code
 * @param {string} steamCode - Steam achievement code (e.g., "Achieve42", "_achA48")
 * @returns {string} Result message
 */
function unlockAchievementByCode(steamCode) {
  if (!STEAM_ACHIEVEMENT_MAP[steamCode]) {
    return `Unknown Steam achievement code: ${steamCode}`;
  }
  
  const index = findIndexBySteamCode(steamCode);
  
  if (index === -1) {
    return `Could not find achievement index for Steam code: ${steamCode}`;
  }
  
  return unlockAchievementByIndex(index);
}

/**
 * Unlock achievement by array index
 * @param {number} index - Index in SteamAchieve/AchieveReg arrays
 * @returns {string} Result message
 */
function unlockAchievementByIndex(index) {
  const steamAchieve = bEngine.getGameAttribute("SteamAchieve");
  const achieveReg = bEngine.getGameAttribute("AchieveReg");
  
  if (index < 0 || index >= steamAchieve.length) {
    return `Invalid achievement index: ${index}`;
  }
  
  const wasUnlocked = steamAchieve[index] === 1;
  
  // Unlock the achievement
  steamAchieve[index] = 1;
  achieveReg[index] = 1;
  
  const name = CList.SteamAchieves[index] ? CList.SteamAchieves[index][0] : "Unknown";
  const steamCode = findSteamCodeByIndex(index);
  
  if (wasUnlocked) {
    return `Achievement already unlocked: ${name} (${steamCode}, index ${index})`;
  }
  
  return `Achievement unlocked: ${name} (${steamCode}, index ${index})`;
}

/**
 * Lock/reset achievement by index
 * @param {number} index - Index in SteamAchieve/AchieveReg arrays
 * @returns {string} Result message
 */
function lockAchievementByIndex(index) {
  const steamAchieve = bEngine.getGameAttribute("SteamAchieve");
  const achieveReg = bEngine.getGameAttribute("AchieveReg");
  
  if (index < 0 || index >= steamAchieve.length) {
    return `Invalid achievement index: ${index}`;
  }
  
  steamAchieve[index] = 0;
  achieveReg[index] = 0;
  
  const name = CList.SteamAchieves[index] ? CList.SteamAchieves[index][0] : "Unknown";
  const steamCode = findSteamCodeByIndex(index);
  
  return `Achievement locked: ${name} (${steamCode}, index ${index})`;
}

/**
 * Lock/reset achievement by Steam code
 * @param {string} steamCode - Steam achievement code
 * @returns {string} Result message
 */
function lockAchievementByCode(steamCode) {
  if (!STEAM_ACHIEVEMENT_MAP[steamCode]) {
    return `Unknown Steam achievement code: ${steamCode}`;
  }
  
  const index = findIndexBySteamCode(steamCode);
  
  if (index === -1) {
    return `Could not find achievement index for Steam code: ${steamCode}`;
  }
  
  return lockAchievementByIndex(index);
}

/**
 * Get achievement info by index
 * @param {number} index - Achievement index
 * @returns {string} Formatted achievement information
 */
function getAchievementInfo(index) {
  const steamAchieve = bEngine.getGameAttribute("SteamAchieve");
  const metadata = CList.SteamAchieves[index];
  
  if (!metadata) {
    return `No achievement found at index ${index}`;
  }
  
  const steamCode = findSteamCodeByIndex(index);
  
  return [
    `Achievement Index: ${index}`,
    `Steam Code: ${steamCode}`,
    `Name: ${metadata[0]}`,
    `Description: ${metadata[1]}`,
    `Hidden: ${metadata[2] === 1 ? "Yes" : "No"}`,
    `Unlocked: ${steamAchieve[index] === 1 ? "Yes" : "No"}`
  ].join("\n");
}

/**
 * List all achievements with status
 * @returns {string} Formatted list of achievements
 */
function listAchievements() {
  const achievements = getAllAchievements();
  const lines = ["Index | Status | Steam Code    | Name"];
  lines.push("-".repeat(80));
  
  for (const ach of achievements) {
    const status = ach.unlocked ? "[✓]" : "[ ]";
    const codeDisplay = ach.steamCode.padEnd(13);
    lines.push(`${ach.index.toString().padStart(3)} | ${status} | ${codeDisplay} | ${ach.name}`);
  }
  
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  lines.push("-".repeat(80));
  lines.push(`Total: ${achievements.length} achievements | Unlocked: ${unlockedCount}`);
  
  return lines.join("\n");
}

/**
 * Unlock all achievements (use with caution!)
 * @returns {string} Result message
 */
function unlockAllAchievements() {
  const steamAchieve = bEngine.getGameAttribute("SteamAchieve");
  const achieveReg = bEngine.getGameAttribute("AchieveReg");
  
  let count = 0;
  for (let i = 0; i < Math.min(61, CList.SteamAchieves.length); i++) {
    if (steamAchieve[i] !== 1) {
      steamAchieve[i] = 1;
      achieveReg[i] = 1;
      count++;
    }
  }
  
  return `Unlocked ${count} achievements. Total achievements: ${Math.min(61, CList.SteamAchieves.length)}`;
}

/**
 * Lock all achievements (use with caution!)
 * @returns {string} Result message
 */
function lockAllAchievements() {
  const steamAchieve = bEngine.getGameAttribute("SteamAchieve");
  const achieveReg = bEngine.getGameAttribute("AchieveReg");
  
  for (let i = 0; i < Math.min(61, CList.SteamAchieves.length); i++) {
    steamAchieve[i] = 0;
    achieveReg[i] = 0;
  }
  
  return `All ${Math.min(61, CList.SteamAchieves.length)} achievements have been locked.`;
}