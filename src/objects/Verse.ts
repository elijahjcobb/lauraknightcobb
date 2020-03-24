/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export interface Verse {
	name: string;
	imageUrl: string;
	content: ((string[]) | ({title: string, lines: string[]}))[];
}

export const lyrics: Verse[] = [
	{
		name: "The Promise of Peace",
		imageUrl: "http://www.lauraknightcobb.com/uploads/1/3/9/9/13996040/editor/img-0281.jpeg?1562868233",
		content: [
			{
				title: "Chorus I",
				lines: [
					"Peace is a river",
					"Filled by God’s own hand",
					"The Son’s grace, the current",
					"Her flow, the Spirit’s command"
				]
			},
			{
				title: "Chorus II",
				lines: [
					"The river, she’s a calling",
					"Love too great, to ever cease",
					"Gotta rise up, claiming justice",
					"Hand n’ Hand, unite for peace"
				]
			},
			{
				title: "Verse I",
				lines: [
					"She wanders through the valleys",
					"Rolling ripples into streams",
					"Her purpose, to offer hope",
					"Rushing forth, she fills our dreams"
				]
			},
			{
				title: "Verse II",
				lines: [
					"Each drop, a tumblin' down",
					"From the mountain way up high",
					"It’s like she’s crying tears",
					"Of freedom’s promise in her sigh"
				]
			},
			{
				title: "Verse III",
				lines: [
					"Lift your words, but not your temper",
					"Thunder does not speak of love",
					"Don’t harden your heart to hatred",
					"Leave it open, to grace from above"
				]
			},
			{
				title: "Verse IV",
				lines: [
					"Never still, she keeps on running",
					"From what’s been too many wrongs",
					"Round each bend, her loves rejoicing'",
					"Gathering’ voices for our song"
				]
			},
			{
				title: "Outro",
				lines: [
					"We must come together",
					"With one vision, and one voice",
					"To awaken love’s compassion",
					"For, there is no other choice..."
				]
			}
		]
	},
	{
		name: "Luke's Doorway",
		imageUrl: "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
		content: [
			{
				title: "Chorus",
				lines: [
					"Render thy soul with gratitude – for the way is not always clear",
					"Embrace what is beyond thee – and accept your truths sincere",
					"Strive with courage to shift directions– with possibilities evermore",
					"Believing in the promise - that lies behind each door..."
				]
			},
			{
				title: "Verse I",
				lines: [
					"A labyrinth of eternal doors - lie deep within us all",
					"The doorman bids your knock - do you hear his faithful call?",
					"Patience shall be the lesson - of rusted hinges and broken keys",
					"Grapple not with the locked ones – they are not meant for thee"
				]
			},
			{
				title: "Verse II",
				lines: [
					"Fear not in asking for the way - you are often meant to be lost",
					"Not all wandering is aimless - not every bend must be crossed",
					"The truths are keenly heard - from the breath of utter silence",
					"No penalty for requests – for they seen without defiance"
				]
			},
			{
				title: "Verse III",
				lines: [
					"Seek the latch of chance - embrace your curious imagination",
					"Through the transome winds of time - will unfurl your transformation",
					"Life can be quite subtle - clarity blends with each new crossing",
					"Thresholds are often hidden -  veiled in slumbers blurry glossing"
				]
			},
			{
				title: "Verse IV",
				lines: [
					"Be bold in your rapping - bare knuckles and firm wrist",
					"You see, the wisdom of your soul - is clenched within your fist",
					"Unseen spirits divinely guide thee – support you to ascend",
					"Embrace yesterdays woes - with time, they will transcend"
				]
			},
			{
				title: "Verse V",
				lines: [
					"Longings for tomorrow  - can be masked with sweet illusion",
					"Memories once sought – diverge within many decades of diffusion",
					"Be mindful in thy seeking - for contentment is found today",
					"Therefore ask, seek, and knock  - for the doorman knows the way…"
				]
			}
		]
	},
	{
		name: "Triskele",
		imageUrl: "http://www.lauraknightcobb.com/uploads/1/3/9/9/13996040/background-images/945260723.jpg",
		content: [
			{
				title: "Chorus",
				lines: [
					"Oh Great Triple Goddess - who spirals throughout time",
					"Immortal are her cycles - her secrets held divine",
					"Three natural forms; maiden, mother, crone",
					"Time hails each phase - as she's summoned to the throne"
				]
			},
			{
				title: "Intro",
				lines: [
					"The ancient Celts revered - three hidden mythical reasons",
					"Mind, body, spirit, - marking each of life's seasons",
					"Reflecting forth the rhythm - of the moons lucent faces",
					"Sharing each wax and wane - in celestial embraces"
				]
			},
			{
				title: "Verse I",
				lines: [
					"The maiden sweetly sings - early in the dawn",
					"Pure mind of a dove - and carefree as a fawn",
					"With innocence a promise - she longs to keep",
					"Youthful is her forest - with answers yet to reap",
					"Her inception the spring - and for the wild pursuit",
					"Her songs of enchantment - ever tender plays her lute",
					"Her thoughts soar the skies - of tomorrow's dreams",
					"Under the waxing moon - shine her fresh pearly beams"
				]
			},
			{
				title: "Verse II",
				lines: [
					"The mothers devotion endless  - for all of Earth's needs",
					"The well-spring of life - ripeness rich in her deeds",
					"Governess of the sea - each wave has a purpose",
					"Deep waters of intuition - lie beneath the vast surface",
					"Her harp strums to nurture - with compassion profound",
					"Mighty Griffin protector - her solemn oath of trust hath bound",
					"Her abundance fully erotic - on fiery summer days",
					"At the heart of Triskele's soul - veils her full moons sure gaze"
				]
			},
			{
				title: "Verse III",
				lines: [
					"The crone, sage of knowing - the hidden passage of time",
					"As the raven, her counsel - ever poignant in her rhyme",
					"Gatekeeper of two worlds, both the living and the dead",
					"Her tapestry clandestine - wisdom woven by tiny threads",
					"She embodies earth’s winter - and rules over the sky at night",
					"Grateful for the waning - in the fragile moonlight",
					"Both joys and sorrows - culminate her visions",
					"Yesterday's lessons - teach tomorrow's decisions"
				]
			},
			{
				title: "Outro",
				lines: [
					"The mighty Triskele - ever swirling without measure",
					"Past, present, future - with unyielding strength to treasure",
					"Oh Holy Triple Goddess - who guards earth, sea, and sky",
					"Your great mysteries we covet - to seek balance and unify..."
				]
			}
		]
	},
	{
		name: "The Gift of Life",
		imageUrl: "http://www.lauraknightcobb.com/uploads/1/3/9/9/13996040/background-images/1809731157.jpg",
		content: [
			{
				title: "Chorus",
				lines: [
					"Hark! Thy kingdom shall reveal – peace on earth bow down to kneel",
					"Hush now babe, feel Mary’s love – from our father’s image above",
					"Precious lamb, redeemer, Christ – wondrous star that paid our price",
					"Emmanuel the gift of light – shall be glorified this holy night..."
				]
			},
			{
				title: "Verse I",
				lines: [
					"Ancient cosmos, still and wide – void of light and sound denied",
					"Time and space had no frame – weight and motion had no claim",
					"The Lord then lit the sun to shine – piercing darkness so divine",
					"Eternal God’s triumphant love – brought light to earth gleaned from above"
				]
			},
			{
				title: "Verse II",
				lines: [
					"The oceans filled as mountains rose – forests grew as rivers flowed",
					"Rock and wind and fire were cast – with mortal life created last",
					"Through many yesterdays hath passed – till souls grew broke, weary alas",
					"Lost in purpose, needing grace – grant thee mercy to embrace"
				]
			},
			{
				title: "Verse III",
				lines: [
					"Whispering angels from afar – guided Magi east by star",
					"A prophesy to redeem and bless – a savior’s birth for hope professed",
					"With eyes to see and ears to listen – to light our world with fairest vision",
					"Hands to heal and feet to lead – son of justice hath decreed"
				]
			}
		]
	},
	{
		name: "Thine Vagary",
		imageUrl: "https://images.unsplash.com/photo-1536846876246-34380361d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
		content: [
			{
				title: "Chorus",
				lines: [
					"Port nor starboard - bow nor stern",
					"Winds of fate - mercy bids return",
					"Binnacle mounted - within soul’s reach",
					"Steer ever onward - through swell and breach"
				]
			},
			{
				title: "Verse I",
				lines: [
					"A course due northward - voyage of thine heart",
					"Icy rusted binnacle - tend watch thy frozen chart",
					"Warped n’ bent rudder - cracked mast thou art",
					"Reckless sails do billow - o’er mark a swift depart"
				]
			},
			{
				title: "Verse II",
				lines: [
					"Southern coasts scorch anguish - as yardarm fears char thee",
					"Casting wicked tempests - doubts tacked regrettably",
					"Flogged by ghostly visions - fear the sightless to foresee",
					"Buoyed by love eternal - rise through leeward routes of plea"
				]
			},
			{
				title: "Verse III",
				lines: [
					"Journey headlong to the east - tender breezes kiss thy face",
					"Silent swells now carry -  grief’s unsullied sweet embrace",
					"Catch forgiving trade winds -  granting courage and healing grace",
					"Consoling white caps whisper - leaving scars yet to be traced"
				]
			},
			{
				title: "Verse IV",
				lines: [
					"Tarry thee on westward - leaving harbors of reprieve",
					"Neither moored nor anchored safely - upon shores nor sheltering reefs",
					"Sail not in fear or anger - nor mutiny God’s faith to cease",
					"At this mid-watch, fate-master, soul-captain - grant thy ever peace..."
				]
			}
		]
	},
	{
		name: "Lullaby for Sleep",
		imageUrl: "http://www.lauraknightcobb.com/uploads/1/3/9/9/13996040/background-images/120718711.jpg",
		content: [
			{
				title: "Chorus",
				lines: [
					"The stars keep silent vigil",
					"As I spin moon’s silver beams",
					"Weaving tapestries of illusion",
					"In the cosmos of thy dreams…"
				]
			},
			{
				title: "Verse I",
				lines: [
					"Cradle thy troubled head",
					"Let night’s restless mind unfold",
					"Hush-a-by thine weary eyes",
					"Grant mercy to be consoled"
				]
			},
			{
				title: "Verse II",
				lines: [
					"Faintly heard in whispers",
					"Angels sigh a reverie",
					"May I stir not, till I wake",
					"Neath the shadows of mystery"
				]
			},
			{
				title: "Verse III",
				lines: [
					"Now swaddled in soothing care",
					"Silenced mind - release all woes",
					"Bid surrender - oh stubborn will",
					"Cease my wandering thoughts repose"
				]
			}
		]
	},
	{
		name: "Life Everlasting",
		imageUrl: "http://www.lauraknightcobb.com/uploads/1/3/9/9/13996040/background-images/1125194858.jpg",
		content: [
			[
				"Oh Creator of the Universe - who set each star in the sky",
				"You give breath to life – and know our every heartbeat",
				"You silence the winds of doubt – as the sun shines beyond shadows",
				"On bended knee we seek thee – to heal our vulnerable spirit"
			],
			[
				"We praise your holiness and wisdom – and feel you’re ever present hand",
				"As we walk with you, guide our steps – so we may surrender our fears",
				"Let us behold your splendors – give us the courage to overcome our flaws",
				"Show us the way to your righteousness – bless us with joy and salvation"
			],
			[
				"Through your mercy and tenderness - you have sent us a savior",
				"The Prince of Peace brings us hope – and a promise that love conquers all",
				"Our Messiah wore a crown of thorns- His blood shed for all of mankind",
				"Sacrificed for all to see – so that we may wave palms of victory"
			],
			[
				"We honor his resurrection - and the miracle of spirit over flesh",
				"We are the branches and he the vine - for apart from him we grow scarcely",
				"All those lost will be found – and all wrongs will be made right",
				"Like the mighty sea, lift up our spirit – as the waves wash away our woes"
			],
			[
				"You have offered us seeds of salvation – Each sprout to reveal a hidden purpose",
				"For the garden of tomorrow – flourishes in what we sow today",
				"Like the lily that blossoms each spring – the roots of the soul are eternal",
				"As years fade into a thousand sunsets- the light of the world shines within us."
			]
		]
	}
];

export const poems: Verse[] = [
	{
		name: "Ubuntu",
		imageUrl: "http://www.lauraknightcobb.com/uploads/1/3/9/9/13996040/background-images/864890274.jpg",
		content: [
			[
				"For love to be rescued - it must be sent from above",
				"Grace is the seed - that is sowed from sacred love ",
				"It grows in the soil - of deliberate choice",
				"Through two hearts now broken - both have lost their voice"
			],
			[
				"It thrives only planted - with hope of will and chance",
				"Many, less loves shall perish - in defense of personal stance",
				"Profound, sacred, love - deeply burrows throughout time",
				"Its repeated sacrifice - accepts all selfish crimes"
			],
			[
				"Broken-sacred love - is devastation filled with grief",
				"For it lies along  with hate - and is masked with disbelief",
				"from the same valley of existence - it's often seen and found",
				"Out in the meadows of regret - with weeds, utterly profound"
			],
			[
				"The sorrow of each leaf - is as bitter as the tree",
				"The branches of deception - sway on ever cynically",
				"From the breezes of betrayal - fragile insights must be sought",
				"each tiny twig a wound - another struggle to be fought"
			],
			[
				"The depths, each truthful root - Relentless in the storm",
				"Agony and suspicion pierce - the process of reform",
				"Only then, death becomes the most beautiful of lies",
				"And life, the ugliest sacrifice - hidden in the whys"
			],
			[
				"Rescuing the sacred - means transforming both the souls",
				"Freely surrendering patience - takes the mightiest of tolls",
				"Vulnerable in each blossom - shame taints every move",
				"It cannot be averted - or justified to approve"
			],
			[
				"It cannot be salvaged - through acts of repentance",
				"Nor can be collected - from the sprouts of dependence",
				"Revenge or other pits of contempt - only blind",
				"The shadows of uncertainty - and resentment each will find",
			],
			[
				"Light can only be seen - once reflected from both hearts",
				"Each silhouette of doubt - yields new wisdoms to impart",
				"Like shattered diamonds - creating contrasts of new beginnings",
				"Each imperfection - reminds both of their human misgivings"
			],
			[
				"To accept one another - On the grounds of being mortal",
				"Allows the light of forgiveness in - it is... the secret portal",
				"Although revealed beyond dimensions - of much tragic despair",
				"Healing then can witness - when all the truths are fully clear",
			],
			[
				"This horrid image, now we see - in the mirror is but, thyself",
				"A war of mighty battles fought - to strike and challenge health",
				"Through painful scars of doubt - why hath forsaken thee?",
				"No longer can be carried - The cost is blind to see"
			],
			[
				"This lesson buried in darkness - for which can never understand",
				"Yet the purpose, sits quite earnestly - upon God's own right hand",
				"Can we see the light of love - that truly does exist?",
				"Can we have a greater faith - than what once lived within our midst?"
			],
			[
				"For mercy and grace - are but fruits that divinely grow",
				"What is slowly to be pardoned - shall once again flow",
				"It’s the release of the wound - from the burden of the spirit",
				"It’s about freeing the pain - and not allowing to inherit"
			],
			[
				"\"Ubuntu\" - the ultimate  act of selfless mercy for love",
				" The deepest expression to pardon – to rise above shared adversity",
				"It reunites the connectedness - the remedy for inner peace",
				"from the broken branches - lie the beauty of true release"
			],
			[
				"Transformation and hope - springs forth a new way of being",
				"Reconciliation is the bud - that unfolds gently towards believing",
				"Together again as one - but now knowing how tender life can be",
				"A reunited sacred love - lies in the spirit of Ubuntu to set one free..."
			]
		]
	},
	{
		name: "Wings of Freedom",
		imageUrl: "http://www.lauraknightcobb.com/uploads/1/3/9/9/13996040/background-images/515706593.jpg",
		content: [
			[
				"Coal mining elders, forgotten in time – yearnin’ for freedom, preach not of this crime",
				"A brutal necessity that hung in sills –  dainty canaries, with high-pitched trills",
				"Rise in the mornin’ cage n’ pail in hand – Muckmen stayed down, till whistle command",
				"No druthers for wings whose breath was a sign –  became a kin custom on down the drift line"
			],
			[
				"On yonder each foothill was airish with song – filled troubled spaces fret none of yer wrongs",
				"Every sonata, so sweetly rehearsed – but, the fugitive hearts heard their tongue-tied curse",
				"Bittersweet hymns in flat minor chord –  we’re crudely snubbed out, detained and ignored",
				"A lifetime sentence, the truth sadly hushed– witness to secrets and spirits seen crushed"
			],
			[
				"Fragile wings clipped for the keeping – despite cheerful tunes of pities false cheeping",
				"Selfishly barred and locked away – peer through the darkness, and skies turned ash gray",
				"Never knowing the joys of flight - suppressed and quelled from God’s own right",
				"Generations of miners all did the same – till those who dug none, still carried this shame"
			],
			[
				"Their Fluttering phantom cries can be heard – melodies that still echo from each fair songbird",
				"Feathers collected too precious a wage – for creatures with wings to be held in a cage",
				"Forefathers, no fixin' to justify – no excuse to keep robbing these innocent cries",
				"With no purpose left, likta' reason, these wrongs – best castoff this notion, and end these false songs!"
			]
		]
	},
	{
		name: "Nuntius Lucem",
		imageUrl: "http://www.lauraknightcobb.com/uploads/1/3/9/9/13996040/background-images/1367426549.jpg",
		content: [
			[
				"Divine herald of wisdom - to mysteries unknown",
				"Cradled in thy graces -  from earthly ways to throne",
				"Guardian of the prophets - with splendors to impart",
				"Keep watchful guard upon thee - hold steadfast in thy heart"
			],
			[
				"Angelic Uriel - whose divine wings adorn",
				"Sentry to spirits broken - ever tenderly transform",
				"Channel from thy heavens - surround and minister light",
				"Soothing human sorrow - through each sleepless twilight"
			],
			[
				"Fiery sword in Eden - presence thus revealed",
				"Enlightening visions to Ezra - winds of truth tis thy shield",
				"Guiding words to Enoch - Caution Noah of the flood",
				"Cain’s warning for redemption - to purify thy blood"
			],
			[
				"Lesser known Archangel - who takes no high acclaim",
				"Summon ten-fold whispers - at dawn I speak your name",
				"Carry on thy torch - bear Messiah’s ceaseless glow",
				"With blessings of freewill - your enduring love I know…"
			]
		]
	},
	{
		name: "Stairway to Peace",
		imageUrl: "http://www.lauraknightcobb.com/uploads/1/3/9/9/13996040/background-images/786612558.jpg",
		content: [
			[
				"Hallowed vestige whispers softly – silent echoes from that day",
				"Granite stacked in fixed flight - marked a safe passageway",
				"Thirty-eight crumbling steps – bestow grace of mercy, they say",
				"Held the Universe neath their arches – wilt descending this sacred way"
			],
			[
				"On ahead, the living - behind the menacing calls",
				"Gasping, weeping, gagging, shrieking – midst the collapsing walls",
				"Stumbling, tripping, mobs cascading – visions too grave to recall",
				"Blistered palms prey in vain – as demise ensued them all"
			],
			[
				"Desperate muffling’s still ensnared - wail out their silent fate",
				"Tangled souls surrender – as wild flames consecrate",
				"Jacob’s dream, now fulfilled - weeping angels illuminate",
				"A tribute forever etched in time – survivors commemorate"
			],
			[
				"Two towers collapsed in rubbled ruins – left clenched by utter chance",
				"Through eons of woe and sorrow – lie bitter shards of this circumstance",
				"Tis symbol of deliverance – from evils hateful glance",
				"The remedy of Hells charge – lies in the peace of mans advance..."
			]
		]
	},
	{
		name: "Rescue",
		imageUrl: "http://www.lauraknightcobb.com/uploads/1/3/9/9/13996040/background-images/3149192.jpg",
		content: [
			[
				"​Embrace the sheltering mercy of the Almighty one",
				"Call for deliverance, and it shall be done",
				"Salvation will transform, even the unjust",
				"A promise of redemption, aft we're nothing left but dust"
			],
			[
				"Lead us to your fortress of unwavering divine love",
				"A rampart and a shield, casting down from up above",
				"We need not tremble further, as arrows are cast our way",
				"Nor dread the lurid shadows that lead us to dismay"
			],
			[
				"Your mighty wings will cradle all our fears, sorrow, and threats",
				"Free-will allows our rescue, from the snares of fowlers nets",
				"We summon your swift flight oh Lord, grant salvation to appear",
				"With miracles everlasting, in faithful refuge we keep thee near..."
			]
		]
	}
];