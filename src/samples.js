import { mean, flatten, sortBy } from "lodash-es"
import { range } from "d3"

const samples = [{
name: "A Christmas Carol",
text: `Marley was dead: to begin with. There is no doubt whatever about that. The register of his burial was signed by the clergyman, the clerk, the undertaker, and the chief mourner. Scrooge signed it: and Scrooge’s name was good upon ’Change, for anything he chose to put his hand to. Old Marley was as dead as a door-nail.

Mind! I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail. I might have been inclined, myself, to regard a coffin-nail as the deadest piece of ironmongery in the trade. But the wisdom of our ancestors is in the simile; and my unhallowed hands shall not disturb it, or the Country’s done for. You will therefore permit me to repeat, emphatically, that Marley was as dead as a door-nail.

Scrooge knew he was dead? Of course he did. How could it be otherwise? Scrooge and he were partners for I don’t know how many years. Scrooge was his sole executor, his sole administrator, his sole assign, his sole residuary legatee, his sole friend, and sole mourner. And even Scrooge was not so dreadfully cut up by the sad event, but that he was an excellent man of business on the very day of the funeral, and solemnised it with an undoubted bargain.

The mention of Marley’s funeral brings me back to the point I started from. There is no doubt that Marley was dead. This must be distinctly understood, or nothing wonderful can come of the story I am going to relate. If we were not perfectly convinced that Hamlet’s Father died before the play began, there would be nothing more remarkable in his taking a stroll at night, in an easterly wind, upon his own ramparts, than there would be in any other middle-aged gentleman rashly turning out after dark in a breezy spot—say Saint Paul’s Churchyard for instance—literally to astonish his son’s weak mind.

Scrooge never painted out Old Marley’s name. There it stood, years afterwards, above the warehouse door: Scrooge and Marley. The firm was known as Scrooge and Marley. Sometimes people new to the business called Scrooge Scrooge, and sometimes Marley, but he answered to both names. It was all the same to him.

Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster. The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice. A frosty rime was on his head, and on his eyebrows, and his wiry chin. He carried his own low temperature always about with him; he iced his office in the dog-days; and didn’t thaw it one degree at Christmas.

External heat and cold had little influence on Scrooge. No warmth could warm, no wintry weather chill him. No wind that blew was bitterer than he, no falling snow was more intent upon its purpose, no pelting rain less open to entreaty. Foul weather didn’t know where to have him. The heaviest rain, and snow, and hail, and sleet, could boast of the advantage over him in only one respect. They often “came down” handsomely, and Scrooge never did.

Nobody ever stopped him in the street to say, with gladsome looks, “My dear Scrooge, how are you? When will you come to see me?” No beggars implored him to bestow a trifle, no children asked him what it was o’clock, no man or woman ever once in all his life inquired the way to such and such a place, of Scrooge. Even the blind men’s dogs appeared to know him; and when they saw him coming on, would tug their owners into doorways and up courts; and then would wag their tails as though they said, “No eye at all is better than an evil eye, dark master!”

But what did Scrooge care! It was the very thing he liked. To edge his way along the crowded paths of life, warning all human sympathy to keep its distance, was what the knowing ones call “nuts” to Scrooge.

Once upon a time—of all the good days in the year, on Christmas Eve—old Scrooge sat busy in his counting-house. It was cold, bleak, biting weather: foggy withal: and he could hear the people in the court outside, go wheezing up and down, beating their hands upon their breasts, and stamping their feet upon the pavement stones to warm them. The city clocks had only just gone three, but it was quite dark already—it had not been light all day—and candles were flaring in the windows of the neighbouring offices, like ruddy smears upon the palpable brown air. The fog came pouring in at every chink and keyhole, and was so dense without, that although the court was of the narrowest, the houses opposite were mere phantoms. To see the dingy cloud come drooping down, obscuring everything, one might have thought that Nature lived hard by, and was brewing on a large scale.

The door of Scrooge’s counting-house was open that he might keep his eye upon his clerk, who in a dismal little cell beyond, a sort of tank, was copying letters. Scrooge had a very small fire, but the clerk’s fire was so very much smaller that it looked like one coal. But he couldn’t replenish it, for Scrooge kept the coal-box in his own room; and so surely as the clerk came in with the shovel, the master predicted that it would be necessary for them to part. Wherefore the clerk put on his white comforter, and tried to warm himself at the candle; in which effort, not being a man of a strong imagination, he failed.

“A merry Christmas, uncle! God save you!” cried a cheerful voice. It was the voice of Scrooge’s nephew, who came upon him so quickly that this was the first intimation he had of his approach.

“Bah!” said Scrooge, “Humbug!”

He had so heated himself with rapid walking in the fog and frost, this nephew of Scrooge’s, that he was all in a glow; his face was ruddy and handsome; his eyes sparkled, and his breath smoked again.

“Christmas a humbug, uncle!” said Scrooge’s nephew. “You don’t mean that, I am sure?”

“I do,” said Scrooge. “Merry Christmas! What right have you to be merry? What reason have you to be merry? You’re poor enough.”

“Come, then,” returned the nephew gaily. “What right have you to be dismal? What reason have you to be morose? You’re rich enough.”

Scrooge having no better answer ready on the spur of the moment, said, “Bah!” again; and followed it up with “Humbug.”

“Don’t be cross, uncle!” said the nephew.

“What else can I be,” returned the uncle, “when I live in such a world of fools as this? Merry Christmas! Out upon merry Christmas! What’s Christmas time to you but a time for paying bills without money; a time for finding yourself a year older, but not an hour richer; a time for balancing your books and having every item in ’em through a round dozen of months presented dead against you? If I could work my will,” said Scrooge indignantly, “every idiot who goes about with ‘Merry Christmas’ on his lips, should be boiled with his own pudding, and buried with a stake of holly through his heart. He should!”

“Uncle!” pleaded the nephew.

“Nephew!” returned the uncle sternly, “keep Christmas in your own way, and let me keep it in mine.”

“Keep it!” repeated Scrooge’s nephew. “But you don’t keep it.”

“Let me leave it alone, then,” said Scrooge. “Much good may it do you! Much good it has ever done you!”

“There are many things from which I might have derived good, by which I have not profited, I dare say,” returned the nephew. “Christmas among the rest. But I am sure I have always thought of Christmas time, when it has come round—apart from the veneration due to its sacred name and origin, if anything belonging to it can be apart from that—as a good time; a kind, forgiving, charitable, pleasant time; the only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely, and to think of people below them as if they really were fellow-passengers to the grave, and not another race of creatures bound on other journeys. And therefore, uncle, though it has never put a scrap of gold or silver in my pocket, I believe that it has done me good, and will do me good; and I say, God bless it!”

The clerk in the Tank involuntarily applauded. Becoming immediately sensible of the impropriety, he poked the fire, and extinguished the last frail spark for ever.

“Let me hear another sound from you,” said Scrooge, “and you’ll keep your Christmas by losing your situation! You’re quite a powerful speaker, sir,” he added, turning to his nephew. “I wonder you don’t go into Parliament.”

“Don’t be angry, uncle. Come! Dine with us to-morrow.”

Scrooge said that he would see him—yes, indeed he did. He went the whole length of the expression, and said that he would see him in that extremity first.

“But why?” cried Scrooge’s nephew. “Why?”

“Why did you get married?” said Scrooge.

“Because I fell in love.”

“Because you fell in love!” growled Scrooge, as if that were the only one thing in the world more ridiculous than a merry Christmas. “Good afternoon!”

“Nay, uncle, but you never came to see me before that happened. Why give it as a reason for not coming now?”

“Good afternoon,” said Scrooge.

“I want nothing from you; I ask nothing of you; why cannot we be friends?”

“Good afternoon,” said Scrooge.

“I am sorry, with all my heart, to find you so resolute. We have never had any quarrel, to which I have been a party. But I have made the trial in homage to Christmas, and I’ll keep my Christmas humour to the last. So A Merry Christmas, uncle!”

“Good afternoon!” said Scrooge.

“And A Happy New Year!”

“Good afternoon!” said Scrooge.

His nephew left the room without an angry word, notwithstanding. He stopped at the outer door to bestow the greetings of the season on the clerk, who, cold as he was, was warmer than Scrooge; for he returned them cordially.

“There’s another fellow,” muttered Scrooge; who overheard him: “my clerk, with fifteen shillings a week, and a wife and family, talking about a merry Christmas. I’ll retire to Bedlam.”

This lunatic, in letting Scrooge’s nephew out, had let two other people in. They were portly gentlemen, pleasant to behold, and now stood, with their hats off, in Scrooge’s office. They had books and papers in their hands, and bowed to him.

“Scrooge and Marley’s, I believe,” said one of the gentlemen, referring to his list. “Have I the pleasure of addressing Mr. Scrooge, or Mr. Marley?”

“Mr. Marley has been dead these seven years,” Scrooge replied. “He died seven years ago, this very night.”

“We have no doubt his liberality is well represented by his surviving partner,” said the gentleman, presenting his credentials.

It certainly was; for they had been two kindred spirits. At the ominous word “liberality,” Scrooge frowned, and shook his head, and handed the credentials back.

“At this festive season of the year, Mr. Scrooge,” said the gentleman, taking up a pen, “it is more than usually desirable that we should make some slight provision for the Poor and destitute, who suffer greatly at the present time. Many thousands are in want of common necessaries; hundreds of thousands are in want of common comforts, sir.”

“Are there no prisons?” asked Scrooge.

“Plenty of prisons,” said the gentleman, laying down the pen again.

“And the Union workhouses?” demanded Scrooge. “Are they still in operation?”

“They are. Still,” returned the gentleman, “I wish I could say they were not.”

“The Treadmill and the Poor Law are in full vigour, then?” said Scrooge.

“Both very busy, sir.”

“Oh! I was afraid, from what you said at first, that something had occurred to stop them in their useful course,” said Scrooge. “I’m very glad to hear it.”

“Under the impression that they scarcely furnish Christian cheer of mind or body to the multitude,” returned the gentleman, “a few of us are endeavouring to raise a fund to buy the Poor some meat and drink, and means of warmth. We choose this time, because it is a time, of all others, when Want is keenly felt, and Abundance rejoices. What shall I put you down for?”

“Nothing!” Scrooge replied.

“You wish to be anonymous?”

“I wish to be left alone,” said Scrooge. “Since you ask me what I wish, gentlemen, that is my answer. I don’t make merry myself at Christmas and I can’t afford to make idle people merry. I help to support the establishments I have mentioned—they cost enough; and those who are badly off must go there.”

“Many can’t go there; and many would rather die.”

“If they would rather die,” said Scrooge, “they had better do it, and decrease the surplus population. Besides—excuse me—I don’t know that.”

“But you might know it,” observed the gentleman.

“It’s not my business,” Scrooge returned. “It’s enough for a man to understand his own business, and not to interfere with other people’s. Mine occupies me constantly. Good afternoon, gentlemen!”

Seeing clearly that it would be useless to pursue their point, the gentlemen withdrew. Scrooge resumed his labours with an improved opinion of himself, and in a more facetious temper than was usual with him.

Meanwhile the fog and darkness thickened so, that people ran about with flaring links, proffering their services to go before horses in carriages, and conduct them on their way. The ancient tower of a church, whose gruff old bell was always peeping slily down at Scrooge out of a Gothic window in the wall, became invisible, and struck the hours and quarters in the clouds, with tremulous vibrations afterwards as if its teeth were chattering in its frozen head up there. The cold became intense. In the main street, at the corner of the court, some labourers were repairing the gas-pipes, and had lighted a great fire in a brazier, round which a party of ragged men and boys were gathered: warming their hands and winking their eyes before the blaze in rapture. The water-plug being left in solitude, its overflowings sullenly congealed, and turned to misanthropic ice. The brightness of the shops where holly sprigs and berries crackled in the lamp heat of the windows, made pale faces ruddy as they passed. Poulterers’ and grocers’ trades became a splendid joke: a glorious pageant, with which it was next to impossible to believe that such dull principles as bargain and sale had anything to do. The Lord Mayor, in the stronghold of the mighty Mansion House, gave orders to his fifty cooks and butlers to keep Christmas as a Lord Mayor’s household should; and even the little tailor, whom he had fined five shillings on the previous Monday for being drunk and bloodthirsty in the streets, stirred up to-morrow’s pudding in his garret, while his lean wife and the baby sallied out to buy the beef.

Foggier yet, and colder. Piercing, searching, biting cold. If the good Saint Dunstan had but nipped the Evil Spirit’s nose with a touch of such weather as that, instead of using his familiar weapons, then indeed he would have roared to lusty purpose. The owner of one scant young nose, gnawed and mumbled by the hungry cold as bones are gnawed by dogs, stooped down at Scrooge’s keyhole to regale him with a Christmas carol: but at the first sound of
“God bless you, merry gentleman!
May nothing you dismay!”
`
},{
name: "Frankenstein",
text: `To Mrs. Saville, England.

St. Petersburgh, Dec. 11th, 17—.

You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.

I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight. Do you understand this feeling? This breeze, which has travelled from the regions towards which I am advancing, gives me a foretaste of those icy climes. Inspirited by this wind of promise, my daydreams become more fervent and vivid. I try in vain to be persuaded that the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight. There, Margaret, the sun is for ever visible, its broad disk just skirting the horizon and diffusing a perpetual splendour. There—for with your leave, my sister, I will put some trust in preceding navigators—there snow and frost are banished; and, sailing over a calm sea, we may be wafted to a land surpassing in wonders and in beauty every region hitherto discovered on the habitable globe. Its productions and features may be without example, as the phenomena of the heavenly bodies undoubtedly are in those undiscovered solitudes. What may not be expected in a country of eternal light? I may there discover the wondrous power which attracts the needle and may regulate a thousand celestial observations that require only this voyage to render their seeming eccentricities consistent for ever. I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and may tread a land never before imprinted by the foot of man. These are my enticements, and they are sufficient to conquer all fear of danger or death and to induce me to commence this laborious voyage with the joy a child feels when he embarks in a little boat, with his holiday mates, on an expedition of discovery up his native river. But supposing all these conjectures to be false, you cannot contest the inestimable benefit which I shall confer on all mankind, to the last generation, by discovering a passage near the pole to those countries, to reach which at present so many months are requisite; or by ascertaining the secret of the magnet, which, if at all possible, can only be effected by an undertaking such as mine.

These reflections have dispelled the agitation with which I began my letter, and I feel my heart glow with an enthusiasm which elevates me to heaven, for nothing contributes so much to tranquillise the mind as a steady purpose—a point on which the soul may fix its intellectual eye. This expedition has been the favourite dream of my early years. I have read with ardour the accounts of the various voyages which have been made in the prospect of arriving at the North Pacific Ocean through the seas which surround the pole. You may remember that a history of all the voyages made for purposes of discovery composed the whole of our good Uncle Thomas’ library. My education was neglected, yet I was passionately fond of reading. These volumes were my study day and night, and my familiarity with them increased that regret which I had felt, as a child, on learning that my father’s dying injunction had forbidden my uncle to allow me to embark in a seafaring life.

These visions faded when I perused, for the first time, those poets whose effusions entranced my soul and lifted it to heaven. I also became a poet and for one year lived in a paradise of my own creation; I imagined that I also might obtain a niche in the temple where the names of Homer and Shakespeare are consecrated. You are well acquainted with my failure and how heavily I bore the disappointment. But just at that time I inherited the fortune of my cousin, and my thoughts were turned into the channel of their earlier bent.

Six years have passed since I resolved on my present undertaking. I can, even now, remember the hour from which I dedicated myself to this great enterprise. I commenced by inuring my body to hardship. I accompanied the whale-fishers on several expeditions to the North Sea; I voluntarily endured cold, famine, thirst, and want of sleep; I often worked harder than the common sailors during the day and devoted my nights to the study of mathematics, the theory of medicine, and those branches of physical science from which a naval adventurer might derive the greatest practical advantage. Twice I actually hired myself as an under-mate in a Greenland whaler, and acquitted myself to admiration. I must own I felt a little proud when my captain offered me the second dignity in the vessel and entreated me to remain with the greatest earnestness, so valuable did he consider my services.

And now, dear Margaret, do I not deserve to accomplish some great purpose? My life might have been passed in ease and luxury, but I preferred glory to every enticement that wealth placed in my path. Oh, that some encouraging voice would answer in the affirmative! My courage and my resolution is firm; but my hopes fluctuate, and my spirits are often depressed. I am about to proceed on a long and difficult voyage, the emergencies of which will demand all my fortitude: I am required not only to raise the spirits of others, but sometimes to sustain my own, when theirs are failing.

This is the most favourable period for travelling in Russia. They fly quickly over the snow in their sledges; the motion is pleasant, and, in my opinion, far more agreeable than that of an English stagecoach. The cold is not excessive, if you are wrapped in furs—a dress which I have already adopted, for there is a great difference between walking the deck and remaining seated motionless for hours, when no exercise prevents the blood from actually freezing in your veins. I have no ambition to lose my life on the post-road between St. Petersburgh and Archangel.

I shall depart for the latter town in a fortnight or three weeks; and my intention is to hire a ship there, which can easily be done by paying the insurance for the owner, and to engage as many sailors as I think necessary among those who are accustomed to the whale-fishing. I do not intend to sail until the month of June; and when shall I return? Ah, dear sister, how can I answer this question? If I succeed, many, many months, perhaps years, will pass before you and I may meet. If I fail, you will see me again soon, or never.

Farewell, my dear, excellent Margaret. Heaven shower down blessings on you, and save me, that I may again and again testify my gratitude for all your love and kindness.

Your affectionate brother,
R. Walton`,
},{
name: "Pride and Prejudice",
author: "Jane Austen",
text: `It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.

However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.

“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?”

Mr. Bennet replied that he had not.

“But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.”

Mr. Bennet made no answer.

“Do you not want to know who has taken it?” cried his wife impatiently.

“You want to tell me, and I have no objection to hearing it.”

This was invitation enough.

“Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it, that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.”

“What is his name?”

“Bingley.”

“Is he married or single?”

“Oh! Single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!”

“How so? How can it affect them?”

“My dear Mr. Bennet,” replied his wife, “how can you be so tiresome! You must know that I am thinking of his marrying one of them.”

“Is that his design in settling here?”

“Design! Nonsense, how can you talk so! But it is very likely that he may fall in love with one of them, and therefore you must visit him as soon as he comes.”

“I see no occasion for that. You and the girls may go, or you may send them by themselves, which perhaps will be still better, for as you are as handsome as any of them, Mr. Bingley may like you the best of the party.”

“My dear, you flatter me. I certainly have had my share of beauty, but I do not pretend to be anything extraordinary now. When a woman has five grown-up daughters, she ought to give over thinking of her own beauty.”

“In such cases, a woman has not often much beauty to think of.”

“But, my dear, you must indeed go and see Mr. Bingley when he comes into the neighbourhood.”

“It is more than I engage for, I assure you.”

“But consider your daughters. Only think what an establishment it would be for one of them. Sir William and Lady Lucas are determined to go, merely on that account, for in general, you know, they visit no newcomers. Indeed you must go, for it will be impossible for us to visit him if you do not.”

“You are over-scrupulous, surely. I dare say Mr. Bingley will be very glad to see you; and I will send a few lines by you to assure him of my hearty consent to his marrying whichever he chooses of the girls; though I must throw in a good word for my little Lizzy.”

“I desire you will do no such thing. Lizzy is not a bit better than the others; and I am sure she is not half so handsome as Jane, nor half so good-humoured as Lydia. But you are always giving her the preference.”

“They have none of them much to recommend them,” replied he; “they are all silly and ignorant like other girls; but Lizzy has something more of quickness than her sisters.”

“Mr. Bennet, how can you abuse your own children in such a way? You take delight in vexing me. You have no compassion for my poor nerves.”

“You mistake me, my dear. I have a high respect for your nerves. They are my old friends. I have heard you mention them with consideration these last twenty years at least.”

“Ah, you do not know what I suffer.”

“But I hope you will get over it, and live to see many young men of four thousand a year come into the neighbourhood.”

“It will be no use to us, if twenty such should come, since you will not visit them.”

“Depend upon it, my dear, that when there are twenty, I will visit them all.”

Mr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three-and-twenty years had been insufficient to make his wife understand his character. Her mind was less difficult to develop. She was a woman of mean understanding, little information, and uncertain temper. When she was discontented, she fancied herself nervous. The business of her life was to get her daughters married; its solace was visiting and news.
`,
},{
name: "The History of Modern Painting, Volume 3",
author: "Richard Muther",
text: `The year 1849 was made famous by a momentous interruption in the quiet course of English art brought about by the pre-Raphaelites. A movement, recalling the Renaissance, laid hold of the spirit of painters. In all studios artists spoke a language which had never been heard there before; all great reputations were overthrown; the most celebrated Cinquecentisti, whose names had hitherto been mentioned with respectful awe, were referred to with a shrug as bunglers. A miracle seemed to have taken place in the world, for the muse of painting was removed from the pedestal on which she had stood for three centuries and set up in triumph upon another.

To understand fully the aims of pre-Raphaelitism it is necessary to recall the character of the age which gave it birth.

After English art had had its beginning with the great national masters and enjoyed a prime of real splendour, it became, about the middle of the nineteenth century, the prey to a tedious disease. A series of crude historical painters endeavoured to fathom the noble style of the Italian Cinquecento, without rising above the level of intelligent plagiarism. As brilliant decorative artists possessed of pomp and majesty, and sensuously affected by plastic beauty, as worshippers of the nude human form, and as modern Greeks, the Italian classic painters were the worst conceivable guides for a people who in every artistic achievement have pursued spiritual expression in preference to plastic beauty. But in spite of the experiences gained since the time of Hogarth, they all went on the pilgrimage to Rome, as to a sacred spring, drank their fill in long draughts, and came back poisoned. Even Wilkie, that charming “little master,” who did the work of a pioneer so long as he followed the congenial Flemish painters and the Dutch, even Wilkie lost every trace of individuality after seeing Spain and Italy. As this imitation of the high Renaissance period led to forced and affected sentiment, it also developed an empty academical technique. In accordance with the precepts of the Cinquecento, artists proceeded with an affected ease to make brief work of everything, contenting themselves with a superficial façade effect. A painting based on dexterity of hand took the place of the religious study of nature, and a banal arrangement after celebrated models took the place of inward absorption.

It was to no purpose that certain painters, such as F. C. Horsley, J. R. Herbert, J. Tenniel, Edwin Long, E. M. Ward, and Eastlake, the English Piloty, 2by imitation of the Flemish and Venetian masters, made more of a return from idealism of form to colour, and that Edwin Armitage, who had studied in Paris and Munich, introduced Continental influences. They are the Delaroche, Gallait, and Bièfve of England. Their art was an imposing scene painting, their programme always that of the school of Bologna—the mother of all academies, great and small—borrowing drawing from Michael Angelo and colour from Titian; taking the best from every one, putting it all into a pot, and shaking it together. Thus English art lost the peculiar national stamp which it had had under Reynolds and Gainsborough, Constable and Turner. It became an insignificant tributary of the false art which then held sway over the Continent, insincere towards nature, full of empty rhetorical passion, and bound to the most vacant routine. And as the grand painting became hollow and mannered, genre painting grew Philistine and decrepit. Its innocent childishness and conventional optimism had led to a tedious anecdotic painting. It repeated, like a talkative old man, the most insipid tales, and did so with a complacency that never wavered and with an unpleasant motley of colour. The English school still existed in landscape, but for everything else it was dead.

A need for reform became urgent all the sooner because literature too had diverged into new lines. In poetry there was the influence of the Lake poets Wordsworth and Coleridge, who had simplicity, direct feeling for nature, and a Rousseau-like pantheism inscribed as a device upon their banner, and it came as a reaction against the dazzling imaginative fervour of those great and forceful men of genius Byron and Shelley. Keats had again uttered the phrase which had before been Shaftesbury’s gospel: “Beauty is truth, truth beauty.” In the year 1843 John Ruskin published the first volume of his Modern Painters, the æsthetic creed of which culminated in the tenet that nature alone could be the source of all true art.

This transitional spirit, which strove for liberty from the academical yoke, though diffidently at first, is represented in painting by the Scotch artist William Dyce. In England he pursued, though undoubtedly with greater ability, a course parallel to that of the German Nazarenes, whose faith he championed. Born in 1806, he had in Italy, in the year 1826, made the acquaintance of Overbeck, who won him over to Perugino and Raphael. Protesting against the histrionic emptiness of English historical painting, he took refuge with the Quattrocentisti and the young Raphael. His masterpiece, the Westminster frescoes, with the Arthurian legends as their subject, goes to some extent on parallel lines with Schnorr’s frescoes on the Nibelungen myths. The representation of vigorous manhood and tempestuous heroism has been here attempted without sentimentality or theatrical heroics. In his oil pictures—Madonnas, “Bacchus nursed by the Nymphs,” “The Woman of Samaria,” “Christ in Gethsemane,” “St. John leading Home the Virgin,” etc.—he makes a surprising effect by the graceful, sensuous charm of his women, by his exquisite landscapes and his tender idyllic characters. The charming 3work “Jacob and Rachel,” which represents him in the Hamburg Kunsthalle, might be ascribed to Führich, except that the developed feeling for colour bears witness to its English origin. With yearning the youth hastens to the maiden, who stands, leaning against the edge of the well, with her eyes cast down, half repulsing him in her austere chastity.

Where the Nazarenes obtain a pallid, corpse-like effect, a deep and luminous quality of colour delights one in his pictures. He is essentially graceful, and with this grace he combines the pure and quiet simplicity of the Umbrian masters. There is something touching in certain of his Madonnas, who, in long, clinging raiment, appeal to the Godhead with arms half lifted, devout lips parted in prayer, and mild glances lost in infinity. A dreamy loveliness brings the heavenly figures nearer to us. Dyce expresses the magic of downcast lids with long, dark lashes. Like the Umbrians, he delights in the elasticity of slender limbs and the chaste grace of blossoming maiden beauty. Many German fresco painters have become celebrated who never achieved anything equal in artistic merit to the Westminster pictures of Dyce. Yet 6he is to be reckoned with the Flandrin-Overbeck family, since he gives a repetition of the young Raphael, though he certainly does it well; but he only imitates and has not improved upon him.

The pictures of another Scotchman, Sir Joseph Noël Paton, born in 1821, appear at a rather later date. Most of them—“The Quarrel of Oberon and Titania,” “The Reconciliation of Oberon and Titania” in the Edinburgh Gallery, and his masterpiece, “The Fairy Queen”—have, from the æsthetic standpoint, little enjoyment to offer. The drawing is hard, the composition overladen, the colour scattered and motley. As in Ary Scheffer, all the figures have vapid, widely opened eyes. Elves, gnomes, women, knights, and fantastic rocks are crowded so tightly together that the frame scarcely holds them. But the loving study of nature in the separate parts is extraordinary. It is possible to give a botanical definition of each plant and each flower in the foreground, with so much character and such care has Paton executed every leaf and every blossom, even the tiny creeping things amid the meadow grass. Here and there a fresh ray of morning sun breaks through the light green and leaps from blade to blade. The landscapes of Albrecht Altdorfer are recalled to mind. Emancipation from empty, heroically impassioned emphasis, pantheistic adoration of nature, even a certain effort—unsuccessful indeed—after an independent sentiment for colour, are what his pictures seem to preach in their naïve angularity, their loving execution of detail, and their bright green motley.

This was the mood of the young artists who united to form the pre-Raphaelite group of 1848. They were students at the Royal Academy of from twenty to four-and-twenty years of age. The first of the group, Dante Gabriel Rossetti, had already written some of his poems. The second, Holman Hunt, had still a difficulty in overcoming the opposition of his father, who was not pleased to see him giving up a commercial career. John Everett Millais, the youngest, had made most progress as a painter, and was one of the best pupils at the Academy. But they were contented neither by the artistic achievement of their teachers nor by the method of instruction. Etty, the most valued of them all, according to the account of Holman Hunt, painted mythological pictures, full of empty affectation; Mulready drew in a diluted fashion, and sacrificed everything to elegance; Maclise had fallen into patriotic banalities; Dyce had stopped short in his course and begun again when it was too late. Thus they had of necessity to provide their own training for themselves. All three worked in the same studio; and it so happened that one day—in 1847 or 1848—chance threw into their hands some engravings of Benozzo Gozzoli’s Campo-Santo frescoes in Pisa. Nature and truth—everything which they had dimly surmised, and had missed in the productions of English art—here they were. Overcome with admiration for the sparkling life, the intensity of feeling, and the vigorous form of these works, which did not even shrink from the consequences of ugliness, they were agreed in recognising that art had always stood on the basis of nature 7until the end of the fifteenth century, or, more exactly, until the year 1508, when Raphael left Florence to paint in the Vatican in Rome. Since then everything had gone wrong; art had stripped off the simple garment of natural truthfulness and fallen into conventional phrases, which in the course of centuries had become more and more empty and repellent by vapid repetition. Was it necessary that the persons in pictures should, to the end of the world, stand and move just as they had done a thousand times in the works of the Cinquecentisti? Was it necessary that human emotions—love, boldness, remorse, and renunciation—should always be expressed by the same turn of the head, the same lift of the eyebrows, the same gesture of the arms, and the same folded hands, which came into vogue through the Cinquecentisti? Where in nature are the rounded forms which Raphael, the first Classicist, borrowed from the antique? And in the critical moments of life do people really form themselves into such carefully balanced groups, with the one who chances to have on the finest clothes in the centre?`,
},{
name: "A Modest Proposal",
author: "Jonathan Swift",
text: `It is a melancholy object to those, who walk through this great town, or travel in the country, when they see the streets, the roads, and cabbin-doors crowded with beggars of the female sex, followed by three, four, or six children, all in rags, and importuning every passenger for an alms. These mothers, instead of being able to work for their honest livelihood, are forced to employ all their time in stroling to beg sustenance for their helpless infants who, as they grow up, either turn thieves for want of work, or leave their dear native country, to fight for the Pretender in Spain, or sell themselves to the Barbadoes.

I think it is agreed by all parties, that this prodigious number of children in the arms, or on the backs, or at the heels of their mothers, and frequently of their fathers, is in the present deplorable state of the kingdom, a very great additional grievance; and therefore whoever could find out a fair, cheap and easy method of making these children sound and useful members of the commonwealth, would deserve so well of the publick, as to have his statue set up for a preserver of the nation.

But my intention is very far from being confined to provide only for the children of professed beggars: it is of a much greater extent, and shall take in the whole number of infants at a certain age, who are born of parents in effect as little able to support them, as those who demand our charity in the streets.

As to my own part, having turned my thoughts for many years upon this important subject, and maturely weighed the several schemes of our projectors, I have always found them grossly mistaken in their computation. It is true, a child just dropt from its dam, may be supported by her milk, for a solar year, with little other nourishment: at most not above the value of two shillings, which the mother may certainly get, or the value in scraps, by her lawful occupation of begging; and it is exactly at one year old that I propose to provide for them in such a manner, as, instead of being a charge upon their parents, or the parish, or wanting food and raiment for the rest of their lives, they shall, on the contrary, contribute to the feeding, and partly to the clothing of many thousands.

There is likewise another great advantage in my scheme, that it will prevent those voluntary abortions, and that horrid practice of women murdering their bastard children, alas! too frequent among us, sacrificing the poor innocent babes, I doubt, more to avoid the expence than the shame, which would move tears and pity in the most savage and inhuman breast.

The number of souls in this kingdom being usually reckoned one million and a half, of these I calculate there may be about two hundred thousand couple, whose wives are breeders; from which number I subtract thirty thousand couple, who are able to maintain their own children, (although I apprehend there cannot be so many under the present distresses of the kingdom) but this being granted, there will remain a hundred and seventy thousand breeders. I again subtract fifty thousand, for those women who miscarry, or whose children die by accident or disease within the year. There only remain a hundred and twenty thousand children of poor parents annually born. The question therefore is, How this number shall be reared and provided for? which, as I have already said, under the present situation of affairs, is utterly impossible by all the methods hitherto proposed. For we can neither employ them in handicraft or agriculture; they neither build houses, (I mean in the country) nor cultivate land: they can very seldom pick up a livelihood by stealing till they arrive at six years old; except where they are of towardly parts, although I confess they learn the rudiments much earlier; during which time they can however be properly looked upon only as probationers; as I have been informed by a principal gentleman in the county of Cavan, who protested to me, that he never knew above one or two instances under the age of six, even in a part of the kingdom so renowned for the quickest proficiency in that art.

I am assured by our merchants, that a boy or a girl, before twelve years old, is no saleable commodity, and even when they come to this age, they will not yield above three pounds, or three pounds and half a crown at most, on the exchange; which cannot turn to account either to the parents or kingdom, the charge of nutriments and rags having been at least four times that value.

I shall now therefore humbly propose my own thoughts, which I hope will not be liable to the least objection.

I have been assured by a very knowing American of my acquaintance in London, that a young healthy child well nursed, is, at a year old, a most delicious nourishing and wholesome food, whether stewed, roasted, baked, or boiled; and I make no doubt that it will equally serve in a fricasee, or a ragoust.

I do therefore humbly offer it to publick consideration, that of the hundred and twenty thousand children, already computed, twenty thousand may be reserved for breed, whereof only one fourth part to be males; which is more than we allow to sheep, black cattle, or swine, and my reason is, that these children are seldom the fruits of marriage, a circumstance not much regarded by our savages, therefore, one male will be sufficient to serve four females. That the remaining hundred thousand may, at a year old, be offered in sale to the persons of quality and fortune, through the kingdom, always advising the mother to let them suck plentifully in the last month, so as to render them plump, and fat for a good table. A child will make two dishes at an entertainment for friends, and when the family dines alone, the fore or hind quarter will make a reasonable dish, and seasoned with a little pepper or salt, will be very good boiled on the fourth day, especially in winter.

I have reckoned upon a medium, that a child just born will weigh 12 pounds, and in a solar year, if tolerably nursed, encreaseth to 28 pounds.

I grant this food will be somewhat dear, and therefore very proper for landlords, who, as they have already devoured most of the parents, seem to have the best title to the children.

Infant’s flesh will be in season throughout the year, but more plentiful in March, and a little before and after; for we are told by a grave author, an eminent French physician, that fish being a prolifick dyet, there are more children born in Roman Catholick countries about nine months after Lent, than at any other season; therefore, reckoning a year after Lent, the markets will be more glutted than usual, because the number of Popish infants, is at least three to one in this kingdom, and therefore it will have one other collateral advantage, by lessening the number of Papists among us.

I have already computed the charge of nursing a beggar’s child (in which list I reckon all cottagers, labourers, and four-fifths of the farmers) to be about two shillings per annum, rags included; and I believe no gentleman would repine to give ten shillings for the carcass of a good fat child, which, as I have said, will make four dishes of excellent nutritive meat, when he hath only some particular friend, or his own family to dine with him. Thus the squire will learn to be a good landlord, and grow popular among his tenants, the mother will have eight shillings neat profit, and be fit for work till she produces another child.

Those who are more thrifty (as I must confess the times require) may flay the carcass; the skin of which, artificially dressed, will make admirable gloves for ladies, and summer boots for fine gentlemen.

As to our City of Dublin, shambles may be appointed for this purpose, in the most convenient parts of it, and butchers we may be assured will not be wanting; although I rather recommend buying the children alive, and dressing them hot from the knife, as we do roasting pigs.

A very worthy person, a true lover of his country, and whose virtues I highly esteem, was lately pleased in discoursing on this matter, to offer a refinement upon my scheme. He said, that many gentlemen of this kingdom, having of late destroyed their deer, he conceived that the want of venison might be well supplied by the bodies of young lads and maidens, not exceeding fourteen years of age, nor under twelve; so great a number of both sexes in every county being now ready to starve for want of work and service: and these to be disposed of by their parents if alive, or otherwise by their nearest relations. But with due deference to so excellent a friend, and so deserving a patriot, I cannot be altogether in his sentiments; for as to the males, my American acquaintance assured me from frequent experience, that their flesh was generally tough and lean, like that of our schoolboys, by continual exercise, and their taste disagreeable, and to fatten them would not answer the charge. Then as to the females, it would, I think, with humble submission, be a loss to the publick, because they soon would become breeders themselves: and besides, it is not improbable that some scrupulous people might be apt to censure such a practice, (although indeed very unjustly) as a little bordering upon cruelty, which, I confess, hath always been with me the strongest objection against any project, how well soever intended.

But in order to justify my friend, he confessed, that this expedient was put into his head by the famous Psalmanaazor, a native of the island Formosa, who came from thence to London, above twenty years ago, and in conversation told my friend, that in his country, when any young person happened to be put to death, the executioner sold the carcass to persons of quality, as a prime dainty; and that, in his time, the body of a plump girl of fifteen, who was crucified for an attempt to poison the Emperor, was sold to his imperial majesty’s prime minister of state, and other great mandarins of the court in joints from the gibbet, at four hundred crowns. Neither indeed can I deny, that if the same use were made of several plump young girls in this town, who without one single groat to their fortunes, cannot stir abroad without a chair, and appear at a playhouse and assemblies in foreign fineries which they never will pay for, the kingdom would not be the worse.

Some persons of a desponding spirit are in great concern about that vast number of poor people, who are aged, diseased, or maimed; and I have been desired to employ my thoughts what course may be taken, to ease the nation of so grievous an incumbrance. But I am not in the least pain upon that matter, because it is very well known, that they are every day dying, and rotting, by cold and famine, and filth, and vermin, as fast as can be reasonably expected. And as to the young labourers, they are now in almost as hopeful a condition. They cannot get work, and consequently pine away from want of nourishment, to a degree, that if at any time they are accidentally hired to common labour, they have not strength to perform it, and thus the country and themselves are happily delivered from the evils to come.

I have too long digressed, and therefore shall return to my subject. I think the advantages by the proposal which I have made are obvious and many, as well as of the highest importance.

For first, as I have already observed, it would greatly lessen the number of Papists, with whom we are yearly overrun, being the principal breeders of the nation, as well as our most dangerous enemies, and who stay at home on purpose with a design to deliver the kingdom to the Pretender, hoping to take their advantage by the absence of so many good Protestants, who have chosen rather to leave their country, than stay at home and pay tithes against their conscience to an episcopal curate.

Secondly, The poorer tenants will have something valuable of their own, which by law may be made liable to a distress, and help to pay their landlord’s rent, their corn and cattle being already seized, and money a thing unknown.

Thirdly, Whereas the maintainance of a hundred thousand children, from two years old, and upwards, cannot be computed at less than ten shillings a piece per annum, the nation’s stock will be thereby encreased fifty thousand pounds per annum, besides the profit of a new dish, introduced to the tables of all gentlemen of fortune in the kingdom, who have any refinement in taste. And the money will circulate among our selves, the goods being entirely of our own growth and manufacture.

Fourthly, The constant breeders, besides the gain of eight shillings sterling per annum by the sale of their children, will be rid of the charge of maintaining them after the first year.

Fifthly, This food would likewise bring great custom to taverns, where the vintners will certainly be so prudent as to procure the best receipts for dressing it to perfection; and consequently have their houses frequented by all the fine gentlemen, who justly value themselves upon their knowledge in good eating; and a skilful cook, who understands how to oblige his guests, will contrive to make it as expensive as they please.

Sixthly, This would be a great inducement to marriage, which all wise nations have either encouraged by rewards, or enforced by laws and penalties. It would encrease the care and tenderness of mothers towards their children, when they were sure of a settlement for life to the poor babes, provided in some sort by the publick, to their annual profit instead of expence. We should soon see an honest emulation among the married women, which of them could bring the fattest child to the market. Men would become as fond of their wives, during the time of their pregnancy, as they are now of their mares in foal, their cows in calf, or sows when they are ready to farrow; nor offer to beat or kick them (as is too frequent a practice) for fear of a miscarriage.

Many other advantages might be enumerated. For instance, the addition of some thousand carcasses in our exportation of barrel’d beef: the propagation of swine’s flesh, and improvement in the art of making good bacon, so much wanted among us by the great destruction of pigs, too frequent at our tables; which are no way comparable in taste or magnificence to a well grown, fat yearling child, which roasted whole will make a considerable figure at a Lord Mayor’s feast, or any other publick entertainment. But this, and many others, I omit, being studious of brevity.

Supposing that one thousand families in this city, would be constant customers for infants flesh, besides others who might have it at merry meetings, particularly at weddings and christenings, I compute that Dublin would take off annually about twenty thousand carcasses; and the rest of the kingdom (where probably they will be sold somewhat cheaper) the remaining eighty thousand.

I can think of no one objection, that will possibly be raised against this proposal, unless it should be urged, that the number of people will be thereby much lessened in the kingdom. This I freely own, and was indeed one principal design in offering it to the world. I desire the reader will observe, that I calculate my remedy for this one individual Kingdom of Ireland, and for no other that ever was, is, or, I think, ever can be upon Earth. Therefore let no man talk to me of other expedients: Of taxing our absentees at five shillings a pound: Of using neither clothes, nor houshold furniture, except what is of our own growth and manufacture: Of utterly rejecting the materials and instruments that promote foreign luxury: Of curing the expensiveness of pride, vanity, idleness, and gaming in our women: Of introducing a vein of parsimony, prudence and temperance: Of learning to love our country, wherein we differ even from Laplanders, and the inhabitants of Topinamboo: Of quitting our animosities and factions, nor acting any longer like the Jews, who were murdering one another at the very moment their city was taken: Of being a little cautious not to sell our country and consciences for nothing: Of teaching landlords to have at least one degree of mercy towards their tenants. Lastly, of putting a spirit of honesty, industry, and skill into our shopkeepers, who, if a resolution could now be taken to buy only our native goods, would immediately unite to cheat and exact upon us in the price, the measure, and the goodness, nor could ever yet be brought to make one fair proposal of just dealing, though often and earnestly invited to it.

Therefore I repeat, let no man talk to me of these and the like expedients, till he hath at least some glympse of hope, that there will ever be some hearty and sincere attempt to put them into practice.

But, as to myself, having been wearied out for many years with offering vain, idle, visionary thoughts, and at length utterly despairing of success, I fortunately fell upon this proposal, which, as it is wholly new, so it hath something solid and real, of no expence and little trouble, full in our own power, and whereby we can incur no danger in disobliging England. For this kind of commodity will not bear exportation, and flesh being of too tender a consistence, to admit a long continuance in salt, although perhaps I could name a country, which would be glad to eat up our whole nation without it.

After all, I am not so violently bent upon my own opinion, as to reject any offer, proposed by wise men, which shall be found equally innocent, cheap, easy, and effectual. But before something of that kind shall be advanced in contradiction to my scheme, and offering a better, I desire the author or authors will be pleased maturely to consider two points. First, As things now stand, how they will be able to find food and raiment for a hundred thousand useless mouths and backs. And secondly, There being a round million of creatures in humane figure throughout this kingdom, whose whole subsistence put into a common stock, would leave them in debt two million of pounds sterling, adding those who are beggars by profession, to the bulk of farmers, cottagers and labourers, with their wives and children, who are beggars in effect; I desire those politicians who dislike my overture, and may perhaps be so bold to attempt an answer, that they will first ask the parents of these mortals, whether they would not at this day think it a great happiness to have been sold for food at a year old, in the manner I prescribe, and thereby have avoided such a perpetual scene of misfortunes, as they have since gone through, by the oppression of landlords, the impossibility of paying rent without money or trade, the want of common sustenance, with neither house nor clothes to cover them from the inclemencies of the weather, and the most inevitable prospect of intailing the like, or greater miseries, upon their breed for ever.

I profess in the sincerity of my heart, that I have not the least personal interest in endeavouring to promote this necessary work, having no other motive than the publick good of my country, by advancing our trade, providing for infants, relieving the poor, and giving some pleasure to the rich. I have no children, by which I can propose to get a single penny; the youngest being nine years old, and my wife past child-bearing.
`,
},{
name: "Heart of Darkness",
author: "Joseph Conrad",
text: `The Nellie, a cruising yawl, swung to her anchor without a flutter of the sails, and was at rest. The flood had made, the wind was nearly calm, and being bound down the river, the only thing for it was to come to and wait for the turn of the tide.

The sea-reach of the Thames stretched before us like the beginning of an interminable waterway. In the offing the sea and the sky were welded together without a joint, and in the luminous space the tanned sails of the barges drifting up with the tide seemed to stand still in red clusters of canvas sharply peaked, with gleams of varnished sprits. A haze rested on the low shores that ran out to sea in vanishing flatness. The air was dark above Gravesend, and farther back still seemed condensed into a mournful gloom, brooding motionless over the biggest, and the greatest, town on earth.

The Director of Companies was our captain and our host. We four affectionately watched his back as he stood in the bows looking to seaward. On the whole river there was nothing that looked half so nautical. He resembled a pilot, which to a seaman is trustworthiness personified. It was difficult to realize his work was not out there in the luminous estuary, but behind him, within the brooding gloom.

Between us there was, as I have already said somewhere, the bond of the sea. Besides holding our hearts together through long periods of separation, it had the effect of making us tolerant of each other's yarns—and even convictions. The Lawyer—the best of old fellows—had, because of his many years and many virtues, the only cushion on deck, and was lying on the only rug. The Accountant had brought out already a box of dominoes, and was toying architecturally with the bones. Marlow sat cross-legged right aft, leaning against the mizzen-mast. He had sunken cheeks, a yellow complexion, a straight back, an ascetic aspect, and, with his arms dropped, the palms of hands outwards, resembled an idol. The director, satisfied the anchor had good hold, made his way aft and sat down amongst us. We exchanged a few words lazily. Afterwards there was silence on board the yacht. For some reason or other we did not begin that game of dominoes. We felt meditative, and fit for nothing but placid staring. The day was ending in a serenity of still and exquisite brilliance. The water shone pacifically; the sky, without a speck, was a benign immensity of unstained light; the very mist on the Essex marsh was like a gauzy and radiant fabric, hung from the wooded rises inland, and draping the low shores in diaphanous folds. Only the gloom to the west, brooding over the upper reaches, became more sombre every minute, as if angered by the approach of the sun.

And at last, in its curved and imperceptible fall, the sun sank low, and from glowing white changed to a dull red without rays and without heat, as if about to go out suddenly, stricken to death by the touch of that gloom brooding over a crowd of men.

Forthwith a change came over the waters, and the serenity became less brilliant but more profound. The old river in its broad reach rested unruffled at the decline of day, after ages of good service done to the race that peopled its banks, spread out in the tranquil dignity of a waterway leading to the uttermost ends of the earth. We looked at the venerable stream not in the vivid flush of a short day that comes and departs for ever, but in the august light of abiding memories. And indeed nothing is easier for a man who has, as the phrase goes, “followed the sea” with reverence and affection, than to evoke the great spirit of the past upon the lower reaches of the Thames. The tidal current runs to and fro in its unceasing service, crowded with memories of men and ships it had borne to the rest of home or to the battles of the sea. It had known and served all the men of whom the nation is proud, from Sir Francis Drake to Sir John Franklin, knights all, titled and untitled—the great knights-errant of the sea. It had borne all the ships whose names are like jewels flashing in the night of time, from the Golden Hind returning with her rotund flanks full of treasure, to be visited by the Queen's Highness and thus pass out of the gigantic tale, to the Erebus and Terror, bound on other conquests—and that never returned. It had known the ships and the men. They had sailed from Deptford, from Greenwich, from Erith—the adventurers and the settlers; kings' ships and the ships of men on 'Change; captains, admirals, the dark “interlopers” of the Eastern trade, and the commissioned “generals” of East India fleets. Hunters for gold or pursuers of fame, they all had gone out on that stream, bearing the sword, and often the torch, messengers of the might within the land, bearers of a spark from the sacred fire. What greatness had not floated on the ebb of that river into the mystery of an unknown earth!... The dreams of men, the seed of commonwealths, the germs of empires.

The sun set; the dusk fell on the stream, and lights began to appear along the shore. The Chapman light-house, a three-legged thing erect on a mud-flat, shone strongly. Lights of ships moved in the fairway—a great stir of lights going up and going down. And farther west on the upper reaches the place of the monstrous town was still marked ominously on the sky, a brooding gloom in sunshine, a lurid glare under the stars.

“And this also,” said Marlow suddenly, “has been one of the dark places of the earth.”

He was the only man of us who still “followed the sea.” The worst that could be said of him was that he did not represent his class. He was a seaman, but he was a wanderer, too, while most seamen lead, if one may so express it, a sedentary life. Their minds are of the stay-at-home order, and their home is always with them—the ship; and so is their country—the sea. One ship is very much like another, and the sea is always the same. In the immutability of their surroundings the foreign shores, the foreign faces, the changing immensity of life, glide past, veiled not by a sense of mystery but by a slightly disdainful ignorance; for there is nothing mysterious to a seaman unless it be the sea itself, which is the mistress of his existence and as inscrutable as Destiny. For the rest, after his hours of work, a casual stroll or a casual spree on shore suffices to unfold for him the secret of a whole continent, and generally he finds the secret not worth knowing. The yarns of seamen have a direct simplicity, the whole meaning of which lies within the shell of a cracked nut. But Marlow was not typical (if his propensity to spin yarns be excepted), and to him the meaning of an episode was not inside like a kernel but outside, enveloping the tale which brought it out only as a glow brings out a haze, in the likeness of one of these misty halos that sometimes are made visible by the spectral illumination of moonshine.

His remark did not seem at all surprising. It was just like Marlow. It was accepted in silence. No one took the trouble to grunt even; and presently he said, very slow—“I was thinking of very old times, when the Romans first came here, nineteen hundred years ago—the other day .... Light came out of this river since—you say Knights? Yes; but it is like a running blaze on a plain, like a flash of lightning in the clouds. We live in the flicker—may it last as long as the old earth keeps rolling! But darkness was here yesterday. Imagine the feelings of a commander of a fine—what d'ye call 'em?—trireme in the Mediterranean, ordered suddenly to the north; run overland across the Gauls in a hurry; put in charge of one of these craft the legionaries—a wonderful lot of handy men they must have been, too—used to build, apparently by the hundred, in a month or two, if we may believe what we read. Imagine him here—the very end of the world, a sea the colour of lead, a sky the colour of smoke, a kind of ship about as rigid as a concertina—and going up this river with stores, or orders, or what you like. Sand-banks, marshes, forests, savages,—precious little to eat fit for a civilized man, nothing but Thames water to drink. No Falernian wine here, no going ashore. Here and there a military camp lost in a wilderness, like a needle in a bundle of hay—cold, fog, tempests, disease, exile, and death—death skulking in the air, in the water, in the bush. They must have been dying like flies here. Oh, yes—he did it. Did it very well, too, no doubt, and without thinking much about it either, except afterwards to brag of what he had gone through in his time, perhaps. They were men enough to face the darkness. And perhaps he was cheered by keeping his eye on a chance of promotion to the fleet at Ravenna by and by, if he had good friends in Rome and survived the awful climate. Or think of a decent young citizen in a toga—perhaps too much dice, you know—coming out here in the train of some prefect, or tax-gatherer, or trader even, to mend his fortunes. Land in a swamp, march through the woods, and in some inland post feel the savagery, the utter savagery, had closed round him—all that mysterious life of the wilderness that stirs in the forest, in the jungles, in the hearts of wild men. There's no initiation either into such mysteries. He has to live in the midst of the incomprehensible, which is also detestable. And it has a fascination, too, that goes to work upon him. The fascination of the abomination—you know, imagine the growing regrets, the longing to escape, the powerless disgust, the surrender, the hate.”

He paused.

“Mind,” he began again, lifting one arm from the elbow, the palm of the hand outwards, so that, with his legs folded before him, he had the pose of a Buddha preaching in European clothes and without a lotus-flower—“Mind, none of us would feel exactly like this. What saves us is efficiency—the devotion to efficiency. But these chaps were not much account, really. They were no colonists; their administration was merely a squeeze, and nothing more, I suspect. They were conquerors, and for that you want only brute force—nothing to boast of, when you have it, since your strength is just an accident arising from the weakness of others. They grabbed what they could get for the sake of what was to be got. It was just robbery with violence, aggravated murder on a great scale, and men going at it blind—as is very proper for those who tackle a darkness. The conquest of the earth, which mostly means the taking it away from those who have a different complexion or slightly flatter noses than ourselves, is not a pretty thing when you look into it too much. What redeems it is the idea only. An idea at the back of it; not a sentimental pretence but an idea; and an unselfish belief in the idea—something you can set up, and bow down before, and offer a sacrifice to....”`,
},{
name: "Moby Dick",
author: "Herman Melville",
text: `Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.

There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs—commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.

Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook to Coenties Slip, and from thence, by Whitehall, northward. What do you see?—Posted like silent sentinels all around the town, stand thousands upon thousands of mortal men fixed in ocean reveries. Some leaning against the spiles; some seated upon the pier-heads; some looking over the bulwarks of ships from China; some high aloft in the rigging, as if striving to get a still better seaward peep. But these are all landsmen; of week days pent up in lath and plaster—tied to counters, nailed to benches, clinched to desks. How then is this? Are the green fields gone? What do they here?

But look! here come more crowds, pacing straight for the water, and seemingly bound for a dive. Strange! Nothing will content them but the extremest limit of the land; loitering under the shady lee of yonder warehouses will not suffice. No. They must get just as nigh the water as they possibly can without falling in. And there they stand—miles of them—leagues. Inlanders all, they come from lanes and alleys, streets and avenues—north, east, south, and west. Yet here they all unite. Tell me, does the magnetic virtue of the needles of the compasses of all those ships attract them thither?

Once more. Say you are in the country; in some high land of lakes. Take almost any path you please, and ten to one it carries you down in a dale, and leaves you there by a pool in the stream. There is magic in it. Let the most absent-minded of men be plunged in his deepest reveries—stand that man on his legs, set his feet a-going, and he will infallibly lead you to water, if water there be in all that region. Should you ever be athirst in the great American desert, try this experiment, if your caravan happen to be supplied with a metaphysical professor. Yes, as every one knows, meditation and water are wedded for ever.

But here is an artist. He desires to paint you the dreamiest, shadiest, quietest, most enchanting bit of romantic landscape in all the valley of the Saco. What is the chief element he employs? There stand his trees, each with a hollow trunk, as if a hermit and a crucifix were within; and here sleeps his meadow, and there sleep his cattle; and up from yonder cottage goes a sleepy smoke. Deep into distant woodlands winds a mazy way, reaching to overlapping spurs of mountains bathed in their hill-side blue. But though the picture lies thus tranced, and though this pine-tree shakes down its sighs like leaves upon this shepherd’s head, yet all were vain, unless the shepherd’s eye were fixed upon the magic stream before him. Go visit the Prairies in June, when for scores on scores of miles you wade knee-deep among Tiger-lilies—what is the one charm wanting?—Water—there is not a drop of water there! Were Niagara but a cataract of sand, would you travel your thousand miles to see it? Why did the poor poet of Tennessee, upon suddenly receiving two handfuls of silver, deliberate whether to buy him a coat, which he sadly needed, or invest his money in a pedestrian trip to Rockaway Beach? Why is almost every robust healthy boy with a robust healthy soul in him, at some time or other crazy to go to sea? Why upon your first voyage as a passenger, did you yourself feel such a mystical vibration, when first told that you and your ship were now out of sight of land? Why did the old Persians hold the sea holy? Why did the Greeks give it a separate deity, and own brother of Jove? Surely all this is not without meaning. And still deeper the meaning of that story of Narcissus, who because he could not grasp the tormenting, mild image he saw in the fountain, plunged into it and was drowned. But that same image, we ourselves see in all rivers and oceans. It is the image of the ungraspable phantom of life; and this is the key to it all.

Now, when I say that I am in the habit of going to sea whenever I begin to grow hazy about the eyes, and begin to be over conscious of my lungs, I do not mean to have it inferred that I ever go to sea as a passenger. For to go as a passenger you must needs have a purse, and a purse is but a rag unless you have something in it. Besides, passengers get sea-sick—grow quarrelsome—don’t sleep of nights—do not enjoy themselves much, as a general thing;—no, I never go as a passenger; nor, though I am something of a salt, do I ever go to sea as a Commodore, or a Captain, or a Cook. I abandon the glory and distinction of such offices to those who like them. For my part, I abominate all honorable respectable toils, trials, and tribulations of every kind whatsoever. It is quite as much as I can do to take care of myself, without taking care of ships, barques, brigs, schooners, and what not. And as for going as cook,—though I confess there is considerable glory in that, a cook being a sort of officer on ship-board—yet, somehow, I never fancied broiling fowls;—though once broiled, judiciously buttered, and judgmatically salted and peppered, there is no one who will speak more respectfully, not to say reverentially, of a broiled fowl than I will. It is out of the idolatrous dotings of the old Egyptians upon broiled ibis and roasted river horse, that you see the mummies of those creatures in their huge bake-houses the pyramids.

No, when I go to sea, I go as a simple sailor, right before the mast, plumb down into the forecastle, aloft there to the royal mast-head. True, they rather order me about some, and make me jump from spar to spar, like a grasshopper in a May meadow. And at first, this sort of thing is unpleasant enough. It touches one’s sense of honor, particularly if you come of an old established family in the land, the Van Rensselaers, or Randolphs, or Hardicanutes. And more than all, if just previous to putting your hand into the tar-pot, you have been lording it as a country schoolmaster, making the tallest boys stand in awe of you. The transition is a keen one, I assure you, from a schoolmaster to a sailor, and requires a strong decoction of Seneca and the Stoics to enable you to grin and bear it. But even this wears off in time.

What of it, if some old hunks of a sea-captain orders me to get a broom and sweep down the decks? What does that indignity amount to, weighed, I mean, in the scales of the New Testament? Do you think the archangel Gabriel thinks anything the less of me, because I promptly and respectfully obey that old hunks in that particular instance? Who ain’t a slave? Tell me that. Well, then, however the old sea-captains may order me about—however they may thump and punch me about, I have the satisfaction of knowing that it is all right; that everybody else is one way or other served in much the same way—either in a physical or metaphysical point of view, that is; and so the universal thump is passed round, and all hands should rub each other’s shoulder-blades, and be content.

Again, I always go to sea as a sailor, because they make a point of paying me for my trouble, whereas they never pay passengers a single penny that I ever heard of. On the contrary, passengers themselves must pay. And there is all the difference in the world between paying and being paid. The act of paying is perhaps the most uncomfortable infliction that the two orchard thieves entailed upon us. But being paid,—what will compare with it? The urbane activity with which a man receives money is really marvellous, considering that we so earnestly believe money to be the root of all earthly ills, and that on no account can a monied man enter heaven. Ah! how cheerfully we consign ourselves to perdition!`,
},{
name: "A Tale of Two Cities",
author: "Charles Dickens",
text: `It was the best of times,
it was the worst of times,
it was the age of wisdom,
it was the age of foolishness,
it was the epoch of belief,
it was the epoch of incredulity,
it was the season of Light,
it was the season of Darkness,
it was the spring of hope,
it was the winter of despair,

we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way— in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.

There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.

It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-and-twentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster. Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.

France, less favoured on the whole as to matters spiritual than her sister of the shield and trident, rolled with exceeding smoothness down hill, making paper money and spending it. Under the guidance of her Christian pastors, she entertained herself, besides, with such humane achievements as sentencing a youth to have his hands cut off, his tongue torn out with pincers, and his body burned alive, because he had not kneeled down in the rain to do honour to a dirty procession of monks which passed within his view, at a distance of some fifty or sixty yards. It is likely enough that, rooted in the woods of France and Norway, there were growing trees, when that sufferer was put to death, already marked by the Woodman, Fate, to come down and be sawn into boards, to make a certain movable framework with a sack and a knife in it, terrible in history. It is likely enough that in the rough outhouses of some tillers of the heavy lands adjacent to Paris, there were sheltered from the weather that very day, rude carts, bespattered with rustic mire, snuffed about by pigs, and roosted in by poultry, which the Farmer, Death, had already set apart to be his tumbrils of the Revolution. But that Woodman and that Farmer, though they work unceasingly, work silently, and no one heard them as they went about with muffled tread: the rather, forasmuch as to entertain any suspicion that they were awake, was to be atheistical and traitorous.

In England, there was scarcely an amount of order and protection to justify much national boasting. Daring burglaries by armed men, and highway robberies, took place in the capital itself every night; families were publicly cautioned not to go out of town without removing their furniture to upholsterers' warehouses for security; the highwayman in the dark was a City tradesman in the light, and, being recognised and challenged by his fellow-tradesman whom he stopped in his character of “the Captain,” gallantly shot him through the head and rode away; the mail was waylaid by seven robbers, and the guard shot three dead, and then got shot dead himself by the other four, “in consequence of the failure of his ammunition:” after which the mail was robbed in peace; that magnificent potentate, the Lord Mayor of London, was made to stand and deliver on Turnham Green, by one highwayman, who despoiled the illustrious creature in sight of all his retinue; prisoners in London gaols fought battles with their turnkeys, and the majesty of the law fired blunderbusses in among them, loaded with rounds of shot and ball; thieves snipped off diamond crosses from the necks of noble lords at Court drawing-rooms; musketeers went into St. Giles's, to search for contraband goods, and the mob fired on the musketeers, and the musketeers fired on the mob, and nobody thought any of these occurrences much out of the common way. In the midst of them, the hangman, ever busy and ever worse than useless, was in constant requisition; now, stringing up long rows of miscellaneous criminals; now, hanging a housebreaker on Saturday who had been taken on Tuesday; now, burning people in the hand at Newgate by the dozen, and now burning pamphlets at the door of Westminster Hall; to-day, taking the life of an atrocious murderer, and to-morrow of a wretched pilferer who had robbed a farmer's boy of sixpence.

All these things, and a thousand like them, came to pass in and close upon the dear old year one thousand seven hundred and seventy-five. Environed by them, while the Woodman and the Farmer worked unheeded, those two of the large jaws, and those other two of the plain and the fair faces, trod with stir enough, and carried their divine rights with a high hand. Thus did the year one thousand seven hundred and seventy-five conduct their Greatnesses, and myriads of small creatures—the creatures of this chronicle among the rest—along the roads that lay before them.

II.

t was the Dover road that lay, on a Friday night late in November, before the first of the persons with whom this history has business. The Dover road lay, as to him, beyond the Dover mail, as it lumbered up Shooter's Hill. He walked up hill in the mire by the side of the mail, as the rest of the passengers did; not because they had the least relish for walking exercise, under the circumstances, but because the hill, and the harness, and the mud, and the mail, were all so heavy, that the horses had three times already come to a stop, besides once drawing the coach across the road, with the mutinous intent of taking it back to Blackheath. Reins and whip and coachman and guard, however, in combination, had read that article of war which forbade a purpose otherwise strongly in favour of the argument, that some brute animals are endued with Reason; and the team had capitulated and returned to their duty.

With drooping heads and tremulous tails, they mashed their way through the thick mud, floundering and stumbling between whiles, as if they were falling to pieces at the larger joints. As often as the driver rested them and brought them to a stand, with a wary “Wo-ho! so-ho-then!” the near leader violently shook his head and everything upon it—like an unusually emphatic horse, denying that the coach could be got up the hill. Whenever the leader made this rattle, the passenger started, as a nervous passenger might, and was disturbed in mind.

There was a steaming mist in all the hollows, and it had roamed in its forlornness up the hill, like an evil spirit, seeking rest and finding none. A clammy and intensely cold mist, it made its slow way through the air in ripples that visibly followed and overspread one another, as the waves of an unwholesome sea might do. It was dense enough to shut out everything from the light of the coach-lamps but these its own workings, and a few yards of road; and the reek of the labouring horses steamed into it, as if they had made it all.

Two other passengers, besides the one, were plodding up the hill by the side of the mail. All three were wrapped to the cheekbones and over the ears, and wore jack-boots. Not one of the three could have said, from anything he saw, what either of the other two was like; and each was hidden under almost as many wrappers from the eyes of the mind, as from the eyes of the body, of his two companions. In those days, travellers were very shy of being confidential on a short notice, for anybody on the road might be a robber or in league with robbers. As to the latter, when every posting-house and ale-house could produce somebody in “the Captain's” pay, ranging from the landlord to the lowest stable non-descript, it was the likeliest thing upon the cards. So the guard of the Dover mail thought to himself, that Friday night in November, one thousand seven hundred and seventy-five, lumbering up Shooter's Hill, as he stood on his own particular perch behind the mail, beating his feet, and keeping an eye and a hand on the arm-chest before him, where a loaded blunderbuss lay at the top of six or eight loaded horse-pistols, deposited on a substratum of cutlass.

The Dover mail was in its usual genial position that the guard suspected the passengers, the passengers suspected one another and the guard, they all suspected everybody else, and the coachman was sure of nothing but the horses; as to which cattle he could with a clear conscience have taken his oath on the two Testaments that they were not fit for the journey.

“Wo-ho!” said the coachman. “So, then! One more pull and you're at the top and be damned to you, for I have had trouble enough to get you to it!—Joe!”

“Halloa!” the guard replied.

“What o'clock do you make it, Joe?”

“Ten minutes, good, past eleven.”

“My blood!” ejaculated the vexed coachman, “and not atop of Shooter's yet! Tst! Yah! Get on with you!”

The emphatic horse, cut short by the whip in a most decided negative, made a decided scramble for it, and the three other horses followed suit. Once more, the Dover mail struggled on, with the jack-boots of its passengers squashing along by its side. They had stopped when the coach stopped, and they kept close company with it. If any one of the three had had the hardihood to propose to another to walk on a little ahead into the mist and darkness, he would have put himself in a fair way of getting shot instantly as a highwayman.

The last burst carried the mail to the summit of the hill. The horses stopped to breathe again, and the guard got down to skid the wheel for the descent, and open the coach-door to let the passengers in.

“Tst! Joe!” cried the coachman in a warning voice, looking down from his box.

“What do you say, Tom?”

They both listened.

“I say a horse at a canter coming up, Joe.”

“I say a horse at a gallop, Tom,” returned the guard, leaving his hold of the door, and mounting nimbly to his place. “Gentlemen! In the king's name, all of you!”

With this hurried adjuration, he cocked his blunderbuss, and stood on the offensive.

The passenger booked by this history, was on the coach-step, getting in; the two other passengers were close behind him, and about to follow. He remained on the step, half in the coach and half out of; they remained in the road below him. They all looked from the coachman to the guard, and from the guard to the coachman, and listened. The coachman looked back and the guard looked back, and even the emphatic leader pricked up his ears and looked back, without contradicting.

The stillness consequent on the cessation of the rumbling and labouring of the coach, added to the stillness of the night, made it very quiet indeed. The panting of the horses communicated a tremulous motion to the coach, as if it were in a state of agitation. The hearts of the passengers beat loud enough perhaps to be heard; but at any rate, the quiet pause was audibly expressive of people out of breath, and holding the breath, and having the pulses quickened by expectation.

The sound of a horse at a gallop came fast and furiously up the hill.

“So-ho!” the guard sang out, as loud as he could roar. “Yo there! Stand! I shall fire!”

The pace was suddenly checked, and, with much splashing and floundering, a man's voice called from the mist, “Is that the Dover mail?”

“Never you mind what it is!” the guard retorted. “What are you?”

“Is that the Dover mail?”

“Why do you want to know?”

“I want a passenger, if it is.”

“What passenger?”

“Mr. Jarvis Lorry.”

Our booked passenger showed in a moment that it was his name. The guard, the coachman, and the two other passengers eyed him distrustfully.

“Keep where you are,” the guard called to the voice in the mist, “because, if I should make a mistake, it could never be set right in your lifetime. Gentleman of the name of Lorry answer straight.”

“What is the matter?” asked the passenger, then, with mildly quavering speech. “Who wants me? Is it Jerry?”

(“I don't like Jerry's voice, if it is Jerry,” growled the guard to himself. “He's hoarser than suits me, is Jerry.”)

“Yes, Mr. Lorry.”

“What is the matter?”

“A despatch sent after you from over yonder. T. and Co.”

“I know this messenger, guard,” said Mr. Lorry, getting down into the road—assisted from behind more swiftly than politely by the other two passengers, who immediately scrambled into the coach, shut the door, and pulled up the window. “He may come close; there's nothing wrong.”

“I hope there ain't, but I can't make so 'Nation sure of that,” said the guard, in gruff soliloquy. “Hallo you!”

“Well! And hallo you!” said Jerry, more hoarsely than before.`,
},{
name: "Adventures of Huckleberry Finn",
author: "Mark Twain",
text: `You don’t know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain’t no matter.  That book was made by Mr. Mark Twain, and he told the truth, mainly.  There was things which he stretched, but mainly he told the truth.  That is nothing.  I never seen anybody but lied one time or another, without it was Aunt Polly, or the widow, or maybe Mary.  Aunt Polly—Tom’s Aunt Polly, she is—and Mary, and the Widow Douglas is all told about in that book, which is mostly a true book, with some stretchers, as I said before.

Now the way that the book winds up is this:  Tom and me found the money that the robbers hid in the cave, and it made us rich.  We got six thousand dollars apiece—all gold.  It was an awful sight of money when it was piled up.  Well, Judge Thatcher he took it and put it out at interest, and it fetched us a dollar a day apiece all the year round—more than a body could tell what to do with.  The Widow Douglas she took me for her son, and allowed she would sivilize me; but it was rough living in the house all the time, considering how dismal regular and decent the widow was in all her ways; and so when I couldn’t stand it no longer I lit out.  I got into my old rags and my sugar-hogshead again, and was free and satisfied.  But Tom Sawyer he hunted me up and said he was going to start a band of robbers, and I might join if I would go back to the widow and be respectable.  So I went back.

The widow she cried over me, and called me a poor lost lamb, and she called me a lot of other names, too, but she never meant no harm by it. She put me in them new clothes again, and I couldn’t do nothing but sweat and sweat, and feel all cramped up.  Well, then, the old thing commenced again.  The widow rung a bell for supper, and you had to come to time. When you got to the table you couldn’t go right to eating, but you had to wait for the widow to tuck down her head and grumble a little over the victuals, though there warn’t really anything the matter with them,—that is, nothing only everything was cooked by itself.  In a barrel of odds and ends it is different; things get mixed up, and the juice kind of swaps around, and the things go better.

After supper she got out her book and learned me about Moses and the Bulrushers, and I was in a sweat to find out all about him; but by and by she let it out that Moses had been dead a considerable long time; so then I didn’t care no more about him, because I don’t take no stock in dead people.

Pretty soon I wanted to smoke, and asked the widow to let me.  But she wouldn’t.  She said it was a mean practice and wasn’t clean, and I must try to not do it any more.  That is just the way with some people.  They get down on a thing when they don’t know nothing about it.  Here she was a-bothering about Moses, which was no kin to her, and no use to anybody, being gone, you see, yet finding a power of fault with me for doing a thing that had some good in it.  And she took snuff, too; of course that was all right, because she done it herself.

Her sister, Miss Watson, a tolerable slim old maid, with goggles on, had just come to live with her, and took a set at me now with a spelling-book. She worked me middling hard for about an hour, and then the widow made her ease up.  I couldn’t stood it much longer.  Then for an hour it was deadly dull, and I was fidgety.  Miss Watson would say, “Don’t put your feet up there, Huckleberry;” and “Don’t scrunch up like that, Huckleberry—set up straight;” and pretty soon she would say, “Don’t gap and stretch like that, Huckleberry—why don’t you try to behave?”  Then she told me all about the bad place, and I said I wished I was there. She got mad then, but I didn’t mean no harm.  All I wanted was to go somewheres; all I wanted was a change, I warn’t particular.  She said it was wicked to say what I said; said she wouldn’t say it for the whole world; she was going to live so as to go to the good place.  Well, I couldn’t see no advantage in going where she was going, so I made up my mind I wouldn’t try for it.  But I never said so, because it would only make trouble, and wouldn’t do no good.

Now she had got a start, and she went on and told me all about the good place.  She said all a body would have to do there was to go around all day long with a harp and sing, forever and ever.  So I didn’t think much of it. But I never said so.  I asked her if she reckoned Tom Sawyer would go there, and she said not by a considerable sight.  I was glad about that, because I wanted him and me to be together.

Miss Watson she kept pecking at me, and it got tiresome and lonesome.  By and by they fetched the niggers in and had prayers, and then everybody was off to bed.  I went up to my room with a piece of candle, and put it on the table.  Then I set down in a chair by the window and tried to think of something cheerful, but it warn’t no use.  I felt so lonesome I most wished I was dead.  The stars were shining, and the leaves rustled in the woods ever so mournful; and I heard an owl, away off, who-whooing about somebody that was dead, and a whippowill and a dog crying about somebody that was going to die; and the wind was trying to whisper something to me, and I couldn’t make out what it was, and so it made the cold shivers run over me. Then away out in the woods I heard that kind of a sound that a ghost makes when it wants to tell about something that’s on its mind and can’t make itself understood, and so can’t rest easy in its grave, and has to go about that way every night grieving.  I got so down-hearted and scared I did wish I had some company.  Pretty soon a spider went crawling up my shoulder, and I flipped it off and it lit in the candle; and before I could budge it was all shriveled up.  I didn’t need anybody to tell me that that was an awful bad sign and would fetch me some bad luck, so I was scared and most shook the clothes off of me. I got up and turned around in my tracks three times and crossed my breast every time; and then I tied up a little lock of my hair with a thread to keep witches away.  But I hadn’t no confidence.  You do that when you’ve lost a horseshoe that you’ve found, instead of nailing it up over the door, but I hadn’t ever heard anybody say it was any way to keep off bad luck when you’d killed a spider.

I set down again, a-shaking all over, and got out my pipe for a smoke; for the house was all as still as death now, and so the widow wouldn’t know. Well, after a long time I heard the clock away off in the town go boom—boom—boom—twelve licks; and all still again—stiller than ever. Pretty soon I heard a twig snap down in the dark amongst the trees—something was a stirring.  I set still and listened.  Directly I could just barely hear a “me-yow! me-yow!” down there.  That was good!  Says I, “me-yow! me-yow!” as soft as I could, and then I put out the light and scrambled out of the window on to the shed.  Then I slipped down to the ground and crawled in among the trees, and, sure enough, there was Tom Sawyer waiting for me.`
},{
name: "Walden",
author: "Henry David Thoreau",
text: `When I wrote the following pages, or rather the bulk of them, I lived alone, in the woods, a mile from any neighbor, in a house which I had built myself, on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by the labor of my hands only. I lived there two years and two months. At present I am a sojourner in civilized life again.

I should not obtrude my affairs so much on the notice of my readers if very particular inquiries had not been made by my townsmen concerning my mode of life, which some would call impertinent, though they do not appear to me at all impertinent, but, considering the circumstances, very natural and pertinent. Some have asked what I got to eat; if I did not feel lonesome; if I was not afraid; and the like. Others have been curious to learn what portion of my income I devoted to charitable purposes; and some, who have large families, how many poor children I maintained. I will therefore ask those of my readers who feel no particular interest in me to pardon me if I undertake to answer some of these questions in this book. In most books, the I, or first person, is omitted; in this it will be retained; that, in respect to egotism, is the main difference. We commonly do not remember that it is, after all, always the first person that is speaking. I should not talk so much about myself if there were anybody else whom I knew as well. Unfortunately, I am confined to this theme by the narrowness of my experience. Moreover, I, on my side, require of every writer, first or last, a simple and sincere account of his own life, and not merely what he has heard of other men’s lives; some such account as he would send to his kindred from a distant land; for if he has lived sincerely, it must have been in a distant land to me. Perhaps these pages are more particularly addressed to poor students. As for the rest of my readers, they will accept such portions as apply to them. I trust that none will stretch the seams in putting on the coat, for it may do good service to him whom it fits.

I would fain say something, not so much concerning the Chinese and Sandwich Islanders as you who read these pages, who are said to live in New England; something about your condition, especially your outward condition or circumstances in this world, in this town, what it is, whether it is necessary that it be as bad as it is, whether it cannot be improved as well as not. I have travelled a good deal in Concord; and everywhere, in shops, and offices, and fields, the inhabitants have appeared to me to be doing penance in a thousand remarkable ways. What I have heard of Brahmins sitting exposed to four fires and looking in the face of the sun; or hanging suspended, with their heads downward, over flames; or looking at the heavens over their shoulders “until it becomes impossible for them to resume their natural position, while from the twist of the neck nothing but liquids can pass into the stomach;” or dwelling, chained for life, at the foot of a tree; or measuring with their bodies, like caterpillars, the breadth of vast empires; or standing on one leg on the tops of pillars,—even these forms of conscious penance are hardly more incredible and astonishing than the scenes which I daily witness. The twelve labors of Hercules were trifling in comparison with those which my neighbors have undertaken; for they were only twelve, and had an end; but I could never see that these men slew or captured any monster or finished any labor. They have no friend Iolas to burn with a hot iron the root of the hydra’s head, but as soon as one head is crushed, two spring up.

I see young men, my townsmen, whose misfortune it is to have inherited farms, houses, barns, cattle, and farming tools; for these are more easily acquired than got rid of. Better if they had been born in the open pasture and suckled by a wolf, that they might have seen with clearer eyes what field they were called to labor in. Who made them serfs of the soil? Why should they eat their sixty acres, when man is condemned to eat only his peck of dirt? Why should they begin digging their graves as soon as they are born? They have got to live a man’s life, pushing all these things before them, and get on as well as they can. How many a poor immortal soul have I met well nigh crushed and smothered under its load, creeping down the road of life, pushing before it a barn seventy-five feet by forty, its Augean stables never cleansed, and one hundred acres of land, tillage, mowing, pasture, and wood-lot! The portionless, who struggle with no such unnecessary inherited encumbrances, find it labor enough to subdue and cultivate a few cubic feet of flesh.

But men labor under a mistake. The better part of the man is soon plowed into the soil for compost. By a seeming fate, commonly called necessity, they are employed, as it says in an old book, laying up treasures which moth and rust will corrupt and thieves break through and steal. It is a fool’s life, as they will find when they get to the end of it, if not before. It is said that Deucalion and Pyrrha created men by throwing stones over their heads behind them:—

Inde genus durum sumus, experiensque laborum,
Et documenta damus quâ simus origine nati.
Or, as Raleigh rhymes it in his sonorous way,—

“From thence our kind hard-hearted is, enduring pain and care,
Approving that our bodies of a stony nature are.”
So much for a blind obedience to a blundering oracle, throwing the stones over their heads behind them, and not seeing where they fell.

Most men, even in this comparatively free country, through mere ignorance and mistake, are so occupied with the factitious cares and superfluously coarse labors of life that its finer fruits cannot be plucked by them. Their fingers, from excessive toil, are too clumsy and tremble too much for that. Actually, the laboring man has not leisure for a true integrity day by day; he cannot afford to sustain the manliest relations to men; his labor would be depreciated in the market. He has no time to be anything but a machine. How can he remember well his ignorance—which his growth requires—who has so often to use his knowledge? We should feed and clothe him gratuitously sometimes, and recruit him with our cordials, before we judge of him. The finest qualities of our nature, like the bloom on fruits, can be preserved only by the most delicate handling. Yet we do not treat ourselves nor one another thus tenderly.

Some of you, we all know, are poor, find it hard to live, are sometimes, as it were, gasping for breath. I have no doubt that some of you who read this book are unable to pay for all the dinners which you have actually eaten, or for the coats and shoes which are fast wearing or are already worn out, and have come to this page to spend borrowed or stolen time, robbing your creditors of an hour. It is very evident what mean and sneaking lives many of you live, for my sight has been whetted by experience; always on the limits, trying to get into business and trying to get out of debt, a very ancient slough, called by the Latins æs alienum, another’s brass, for some of their coins were made of brass; still living, and dying, and buried by this other’s brass; always promising to pay, promising to pay, tomorrow, and dying today, insolvent; seeking to curry favor, to get custom, by how many modes, only not state-prison offences; lying, flattering, voting, contracting yourselves into a nutshell of civility or dilating into an atmosphere of thin and vaporous generosity, that you may persuade your neighbor to let you make his shoes, or his hat, or his coat, or his carriage, or import his groceries for him; making yourselves sick, that you may lay up something against a sick day, something to be tucked away in an old chest, or in a stocking behind the plastering, or, more safely, in the brick bank; no matter where, no matter how much or how little.

I sometimes wonder that we can be so frivolous, I may almost say, as to attend to the gross but somewhat foreign form of servitude called Negro Slavery, there are so many keen and subtle masters that enslave both north and south. It is hard to have a southern overseer; it is worse to have a northern one; but worst of all when you are the slave-driver of yourself. Talk of a divinity in man! Look at the teamster on the highway, wending to market by day or night; does any divinity stir within him? His highest duty to fodder and water his horses! What is his destiny to him compared with the shipping interests? Does not he drive for Squire Make-a-stir? How godlike, how immortal, is he? See how he cowers and sneaks, how vaguely all the day he fears, not being immortal nor divine, but the slave and prisoner of his own opinion of himself, a fame won by his own deeds. Public opinion is a weak tyrant compared with our own private opinion. What a man thinks of himself, that it is which determines, or rather indicates, his fate. Self-emancipation even in the West Indian provinces of the fancy and imagination,—what Wilberforce is there to bring that about? Think, also, of the ladies of the land weaving toilet cushions against the last day, not to betray too green an interest in their fates! As if you could kill time without injuring eternity.

The mass of men lead lives of quiet desperation. What is called resignation is confirmed desperation. From the desperate city you go into the desperate country, and have to console yourself with the bravery of minks and muskrats. A stereotyped but unconscious despair is concealed even under what are called the games and amusements of mankind. There is no play in them, for this comes after work. But it is a characteristic of wisdom not to do desperate things.

When we consider what, to use the words of the catechism, is the chief end of man, and what are the true necessaries and means of life, it appears as if men had deliberately chosen the common mode of living because they preferred it to any other. Yet they honestly think there is no choice left. But alert and healthy natures remember that the sun rose clear. It is never too late to give up our prejudices. No way of thinking or doing, however ancient, can be trusted without proof. What everybody echoes or in silence passes by as true to-day may turn out to be falsehood to-morrow, mere smoke of opinion, which some had trusted for a cloud that would sprinkle fertilizing rain on their fields. What old people say you cannot do you try and find that you can. Old deeds for old people, and new deeds for new. Old people did not know enough once, perchance, to fetch fresh fuel to keep the fire a-going; new people put a little dry wood under a pot, and are whirled round the globe with the speed of birds, in a way to kill old people, as the phrase is. Age is no better, hardly so well, qualified for an instructor as youth, for it has not profited so much as it has lost. One may almost doubt if the wisest man has learned any thing of absolute value by living. Practically, the old have no very important advice to give the young, their own experience has been so partial, and their lives have been such miserable failures, for private reasons, as they must believe; and it may be that they have some faith left which belies that experience, and they are only less young than they were. I have lived some thirty years on this planet, and I have yet to hear the first syllable of valuable or even earnest advice from my seniors. They have told me nothing, and probably cannot tell me any thing to the purpose. Here is life, an experiment to a great extent untried by me; but it does not avail me that they have tried it. If I have any experience which I think valuable, I am sure to reflect that this my Mentors said nothing about.

One farmer says to me, “You cannot live on vegetable food solely, for it furnishes nothing to make bones with;” and so he religiously devotes a part of his day to supplying his system with the raw material of bones; walking all the while he talks behind his oxen, which, with vegetable-made bones, jerk him and his lumbering plough along in spite of every obstacle. Some things are really necessaries of life in some circles, the most helpless and diseased, which in others are luxuries merely, and in others still are entirely unknown.

The whole ground of human life seems to some to have been gone over by their predecessors, both the heights and the valleys, and all things to have been cared for. According to Evelyn, “the wise Solomon prescribed ordinances for the very distances of trees; and the Roman prætors have decided how often you may go into your neighbor’s land to gather the acorns which fall on it without trespass, and what share belongs to that neighbor.” Hippocrates has even left directions how we should cut our nails; that is, even with the ends of the fingers, neither shorter nor longer. Undoubtedly the very tedium and ennui which presume to have exhausted the variety and the joys of life are as old as Adam. But man’s capacities have never been measured; nor are we to judge of what he can do by any precedents, so little has been tried. Whatever have been thy failures hitherto, “be not afflicted, my child, for who shall assign to thee what thou hast left undone?”

We might try our lives by a thousand simple tests; as, for instance, that the same sun which ripens my beans illumines at once a system of earths like ours. If I had remembered this it would have prevented some mistakes. This was not the light in which I hoed them. The stars are the apexes of what wonderful triangles! What distant and different beings in the various mansions of the universe are contemplating the same one at the same moment! Nature and human life are as various as our several constitutions. Who shall say what prospect life offers to another? Could a greater miracle take place than for us to look through each other’s eyes for an instant? We should live in all the ages of the world in an hour; ay, in all the worlds of the ages. History, Poetry, Mythology!—I know of no reading of another’s experience so startling and informing as this would be.

The greater part of what my neighbors call good I believe in my soul to be bad, and if I repent of anything, it is very likely to be my good behavior. What demon possessed me that I behaved so well? You may say the wisest thing you can, old man,—you who have lived seventy years, not without honor of a kind,—I hear an irresistible voice which invites me away from all that. One generation abandons the enterprises of another like stranded vessels.

I think that we may safely trust a good deal more than we do. We may waive just so much care of ourselves as we honestly bestow elsewhere. Nature is as well adapted to our weakness as to our strength. The incessant anxiety and strain of some is a well nigh incurable form of disease. We are made to exaggerate the importance of what work we do; and yet how much is not done by us! or, what if we had been taken sick? How vigilant we are! determined not to live by faith if we can avoid it; all the day long on the alert, at night we unwillingly say our prayers and commit ourselves to uncertainties. So thoroughly and sincerely are we compelled to live, reverencing our life, and denying the possibility of change. This is the only way, we say; but there are as many ways as there can be drawn radii from one centre. All change is a miracle to contemplate; but it is a miracle which is taking place every instant. Confucius said, “To know that we know what we know, and that we do not know what we do not know, that is true knowledge.” When one man has reduced a fact of the imagination to be a fact to his understanding, I foresee that all men at length establish their lives on that basis.
`,
},{
name: "The Adventures of Sherlock Holmes",
author: "Arthur Conan Doyle",
text: `To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer—excellent for drawing the veil from men’s motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory.

I had seen little of Holmes lately. My marriage had drifted us away from each other. My own complete happiness, and the home-centred interests which rise up around the man who first finds himself master of his own establishment, were sufficient to absorb all my attention, while Holmes, who loathed every form of society with his whole Bohemian soul, remained in our lodgings in Baker Street, buried among his old books, and alternating from week to week between cocaine and ambition, the drowsiness of the drug, and the fierce energy of his own keen nature. He was still, as ever, deeply attracted by the study of crime, and occupied his immense faculties and extraordinary powers of observation in following out those clues, and clearing up those mysteries which had been abandoned as hopeless by the official police. From time to time I heard some vague account of his doings: of his summons to Odessa in the case of the Trepoff murder, of his clearing up of the singular tragedy of the Atkinson brothers at Trincomalee, and finally of the mission which he had accomplished so delicately and successfully for the reigning family of Holland. Beyond these signs of his activity, however, which I merely shared with all the readers of the daily press, I knew little of my former friend and companion.

One night—it was on the twentieth of March, 1888—I was returning from a journey to a patient (for I had now returned to civil practice), when my way led me through Baker Street. As I passed the well-remembered door, which must always be associated in my mind with my wooing, and with the dark incidents of the Study in Scarlet, I was seized with a keen desire to see Holmes again, and to know how he was employing his extraordinary powers. His rooms were brilliantly lit, and, even as I looked up, I saw his tall, spare figure pass twice in a dark silhouette against the blind. He was pacing the room swiftly, eagerly, with his head sunk upon his chest and his hands clasped behind him. To me, who knew his every mood and habit, his attitude and manner told their own story. He was at work again. He had risen out of his drug-created dreams and was hot upon the scent of some new problem. I rang the bell and was shown up to the chamber which had formerly been in part my own.

His manner was not effusive. It seldom was; but he was glad, I think, to see me. With hardly a word spoken, but with a kindly eye, he waved me to an armchair, threw across his case of cigars, and indicated a spirit case and a gasogene in the corner. Then he stood before the fire and looked me over in his singular introspective fashion.

“Wedlock suits you,” he remarked. “I think, Watson, that you have put on seven and a half pounds since I saw you.”

“Seven!” I answered.

“Indeed, I should have thought a little more. Just a trifle more, I fancy, Watson. And in practice again, I observe. You did not tell me that you intended to go into harness.”

“Then, how do you know?”

“I see it, I deduce it. How do I know that you have been getting yourself very wet lately, and that you have a most clumsy and careless servant girl?”

“My dear Holmes,” said I, “this is too much. You would certainly have been burned, had you lived a few centuries ago. It is true that I had a country walk on Thursday and came home in a dreadful mess, but as I have changed my clothes I can’t imagine how you deduce it. As to Mary Jane, she is incorrigible, and my wife has given her notice, but there, again, I fail to see how you work it out.”

He chuckled to himself and rubbed his long, nervous hands together.

“It is simplicity itself,” said he; “my eyes tell me that on the inside of your left shoe, just where the firelight strikes it, the leather is scored by six almost parallel cuts. Obviously they have been caused by someone who has very carelessly scraped round the edges of the sole in order to remove crusted mud from it. Hence, you see, my double deduction that you had been out in vile weather, and that you had a particularly malignant boot-slitting specimen of the London slavey. As to your practice, if a gentleman walks into my rooms smelling of iodoform, with a black mark of nitrate of silver upon his right forefinger, and a bulge on the right side of his top-hat to show where he has secreted his stethoscope, I must be dull, indeed, if I do not pronounce him to be an active member of the medical profession.”

I could not help laughing at the ease with which he explained his process of deduction. “When I hear you give your reasons,” I remarked, “the thing always appears to me to be so ridiculously simple that I could easily do it myself, though at each successive instance of your reasoning I am baffled until you explain your process. And yet I believe that my eyes are as good as yours.”

“Quite so,” he answered, lighting a cigarette, and throwing himself down into an armchair. “You see, but you do not observe. The distinction is clear. For example, you have frequently seen the steps which lead up from the hall to this room.”

“Frequently.”

“How often?”

“Well, some hundreds of times.”

“Then how many are there?”

“How many? I don’t know.”

“Quite so! You have not observed. And yet you have seen. That is just my point. Now, I know that there are seventeen steps, because I have both seen and observed. By the way, since you are interested in these little problems, and since you are good enough to chronicle one or two of my trifling experiences, you may be interested in this.” He threw over a sheet of thick, pink-tinted notepaper which had been lying open upon the table. “It came by the last post,” said he. “Read it aloud.”

The note was undated, and without either signature or address.

“There will call upon you to-night, at a quarter to eight o’clock,” it said, “a gentleman who desires to consult you upon a matter of the very deepest moment. Your recent services to one of the royal houses of Europe have shown that you are one who may safely be trusted with matters which are of an importance which can hardly be exaggerated. This account of you we have from all quarters received. Be in your chamber then at that hour, and do not take it amiss if your visitor wear a mask.”

“This is indeed a mystery,” I remarked. “What do you imagine that it means?”

“I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts. But the note itself. What do you deduce from it?”

I carefully examined the writing, and the paper upon which it was written.

“The man who wrote it was presumably well to do,” I remarked, endeavouring to imitate my companion’s processes. “Such paper could not be bought under half a crown a packet. It is peculiarly strong and stiff.”

“Peculiar—that is the very word,” said Holmes. “It is not an English paper at all. Hold it up to the light.”

I did so, and saw a large “E” with a small “g,” a “P,” and a large “G” with a small “t” woven into the texture of the paper.

“What do you make of that?” asked Holmes.

“The name of the maker, no doubt; or his monogram, rather.”

“Not at all. The ‘G’ with the small ‘t’ stands for ‘Gesellschaft,’ which is the German for ‘Company.’ It is a customary contraction like our ‘Co.’ ‘P,’ of course, stands for ‘Papier.’ Now for the ‘Eg.’ Let us glance at our Continental Gazetteer.” He took down a heavy brown volume from his shelves. “Eglow, Eglonitz—here we are, Egria. It is in a German-speaking country—in Bohemia, not far from Carlsbad. ‘Remarkable as being the scene of the death of Wallenstein, and for its numerous glass-factories and paper-mills.’ Ha, ha, my boy, what do you make of that?” His eyes sparkled, and he sent up a great blue triumphant cloud from his cigarette.

“The paper was made in Bohemia,” I said.

“Precisely. And the man who wrote the note is a German. Do you note the peculiar construction of the sentence—‘This account of you we have from all quarters received.’ A Frenchman or Russian could not have written that. It is the German who is so uncourteous to his verbs. It only remains, therefore, to discover what is wanted by this German who writes upon Bohemian paper and prefers wearing a mask to showing his face. And here he comes, if I am not mistaken, to resolve all our doubts.”

As he spoke there was the sharp sound of horses’ hoofs and grating wheels against the curb, followed by a sharp pull at the bell. Holmes whistled.

“A pair, by the sound,” said he. “Yes,” he continued, glancing out of the window. “A nice little brougham and a pair of beauties. A hundred and fifty guineas apiece. There’s money in this case, Watson, if there is nothing else.”

“I think that I had better go, Holmes.”

“Not a bit, Doctor. Stay where you are. I am lost without my Boswell. And this promises to be interesting. It would be a pity to miss it.”

“But your client—”

“Never mind him. I may want your help, and so may he. Here he comes. Sit down in that armchair, Doctor, and give us your best attention.”

A slow and heavy step, which had been heard upon the stairs and in the passage, paused immediately outside the door. Then there was a loud and authoritative tap.

“Come in!” said Holmes.`,
},{
name: "The Raven",
author: "Edgar Allan Poe",
text: ` Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore,
While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.
“‘Tis some visiter,” I muttered, “tapping at my chamber door—
                    Only this, and nothing more.”

Ah, distinctly I remember it was in the bleak December,
And each separate dying ember wrought its ghost upon the floor.
Eagerly I wished the morrow;—vainly I had sought to borrow
From my books surcease of sorrow—sorrow for the lost Lenore—
For the rare and radiant maiden whom the angels name Lenore—
                    Nameless here for evermore.

And the silken sad uncertain rustling of each purple curtain
Thrilled me—filled me with fantastic terrors never felt before;
So that now, to still the beating of my heart, I stood repeating
“‘Tis some visiter entreating entrance at my chamber door—
Some late visiter entreating entrance at my chamber door;—
                    This it is, and nothing more.”

Presently my soul grew stronger; hesitating then no longer,
“Sir,” said I, “or Madam, truly your forgiveness I implore;
But the fact is I was napping, and so gently you came rapping,
And so faintly you came tapping, tapping at my chamber door,
That I scarce was sure I heard you “—here I opened wide the door;——
                    Darkness there and nothing more.

Deep into that darkness peering, long I stood there wondering, fearing,
Doubting, dreaming dreams no mortal ever dared to dream before;
But the silence was unbroken, and the darkness gave no token,
And the only word there spoken was the whispered word, “Lenore!”
This I whispered, and an echo murmured back the word, “Lenore!”—
                    Merely this, and nothing more.

Back into the chamber turning, all my soul within me burning,
Soon I heard again a tapping somewhat louder than before.
“Surely,” said I, “surely that is something at my window lattice;
Let me see, then, what thereat is, and this mystery explore—
Let my heart be still a moment and this mystery explore;—
                    ‘Tis the wind and nothing more!”

Open here I flung the shutter, when, with many a flirt and flutter,
In there stepped a stately raven of the saintly days of yore;
Not the least obeisance made he; not an instant stopped or stayed he;
But, with mien of lord or lady, perched above my chamber door—
Perched upon a bust of Pallas just above my chamber door—
                    Perched, and sat, and nothing more.

Then this ebony bird beguiling my sad fancy into smiling,
By the grave and stern decorum of the countenance it wore,
“Though thy crest be shorn and shaven, thou,” I said, “art sure no craven,
Ghastly grim and ancient raven wandering from the Nightly shore—
Tell me what thy lordly name is on the Night’s Plutonian shore!”
                    Quoth the raven “Nevermore.”

Much I marvelled this ungainly fowl to hear discourse so plainly,
Though its answer little meaning—little relevancy bore;
For we cannot help agreeing that no living human being
Ever yet was blessed with seeing bird above his chamber door—
Bird or beast upon the sculptured bust above his chamber door,
                  With such name as “Nevermore.”

But the raven, sitting lonely on the placid bust, spoke only
That one word, as if his soul in that one word he did outpour.
Nothing farther then he uttered—not a feather then he fluttered—
Till I scarcely more than muttered “Other friends have flown before—
On the morrow he will leave me, as my hopes have flown before.”
                    Then the bird said “Nevermore.”

Startled at the stillness broken by reply so aptly spoken,
“Doubtless,” said I, “what it utters is its only stock and store
Caught from some unhappy master whom unmerciful Disaster
Followed fast and followed faster till his songs one burden bore—
Till the dirges of his Hope that melancholy burden bore
                  Of “Never—nevermore.”

But the raven still beguiling all my sad soul into smiling,
Straight I wheeled a cushioned seat in front of bird, and bust and door;
Then, upon the velvet sinking, I betook myself to thinking
Fancy unto fancy, thinking what this ominous bird of yore—
What this grim, ungainly, ghastly, gaunt and ominous bird of yore
                  Meant in croaking “Nevermore.”

This I sat engaged in guessing, but no syllable expressing
To the fowl whose fiery eyes now burned into my bosom’s core;
This and more I sat divining, with my head at ease reclining
On the cushion’s velvet lining that the lamplght gloated o’er,
But whose velvet violet lining with the lamplight gloating o’er,
                    She shall press, ah, nevermore!

Then, methought, the air grew denser, perfumed from an unseen censer
Swung by Angels whose faint foot-falls tinkled on the tufted floor.
“Wretch,” I cried, “thy God hath lent thee—by these angels he hath sent
thee
Respite—respite and nepenthe from thy memories of Lenore;
Quaff, oh quaff this kind nepenthe and forget this lost Lenore!”
                    Quoth the raven, “Nevermore.”

“Prophet!” said I, “thing of evil!—prophet still, if bird or devil!—
Whether Tempter sent, or whether tempest tossed thee here ashore,
Desolate yet all undaunted, on this desert land enchanted—
On this home by Horror haunted—tell me truly, I implore—
Is there—is there balm in Gilead?—tell me—tell me, I implore!”
                    Quoth the raven, “Nevermore.”

“Prophet!” said I, “thing of evil—prophet still, if bird or devil!
By that Heaven that bends above us—by that God we both adore—
Tell this soul with sorrow laden if, within the distant Aidenn,
It shall clasp a sainted maiden whom the angels name Lenore—
Clasp a rare and radiant maiden whom the angels name Lenore.”
                    Quoth the raven, “Nevermore.”

“Be that word our sign of parting, bird or fiend!” I shrieked, upstarting—
“Get thee back into the tempest and the Night’s Plutonian shore!
Leave no black plume as a token of that lie thy soul hath spoken!
Leave my loneliness unbroken!—quit the bust above my door!
Take thy beak from out my heart, and take thy form from off my door!”
                    Quoth the raven, “Nevermore.”

And the raven, never flitting, still is sitting, still is sitting
On the pallid bust of Pallas just above my chamber door;
And his eyes have all the seeming of a demon’s that is dreaming,
And the lamp-light o’er him streaming throws his shadow on the floor;
And my soul from out that shadow that lies floating on the floor
                    Shall be lifted—nevermore!`,
},{
name: "Alice's Adventures in Wonderland",
author: "Lewis Carroll",
text: `Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, ‘and what is the use of a book,’ thought Alice ‘without pictures or conversations?’

So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.

There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, ‘Oh dear! Oh dear! I shall be late!’ (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.

In another moment down went Alice after it, never once considering how in the world she was to get out again.

The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.

Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled ‘ORANGE MARMALADE’, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.

‘Well!’ thought Alice to herself, ‘after such a fall as this, I shall think nothing of tumbling down stairs! How brave they’ll all think me at home! Why, I wouldn’t say anything about it, even if I fell off the top of the house!’ (Which was very likely true.)

Down, down, down. Would the fall never come to an end! ‘I wonder how many miles I’ve fallen by this time?’ she said aloud. ‘I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think—’ (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a very good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) ‘—yes, that’s about the right distance—but then I wonder what Latitude or Longitude I’ve got to?’ (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)

Presently she began again. ‘I wonder if I shall fall right through the earth! How funny it’ll seem to come out among the people that walk with their heads downward! The Antipathies, I think—’ (she was rather glad there was no one listening, this time, as it didn’t sound at all the right word) ‘—but I shall have to ask them what the name of the country is, you know. Please, Ma’am, is this New Zealand or Australia?’ (and she tried to curtsey as she spoke—fancy curtseying as you’re falling through the air! Do you think you could manage it?) ‘And what an ignorant little girl she’ll think me for asking! No, it’ll never do to ask: perhaps I shall see it written up somewhere.’

Down, down, down. There was nothing else to do, so Alice soon began talking again. ‘Dinah’ll miss me very much to-night, I should think!’ (Dinah was the cat.) ‘I hope they’ll remember her saucer of milk at tea-time. Dinah my dear! I wish you were down here with me! There are no mice in the air, I’m afraid, but you might catch a bat, and that’s very like a mouse, you know. But do cats eat bats, I wonder?’ And here Alice began to get rather sleepy, and went on saying to herself, in a dreamy sort of way, ‘Do cats eat bats? Do cats eat bats?’ and sometimes, ‘Do bats eat cats?’ for, you see, as she couldn’t answer either question, it didn’t much matter which way she put it. She felt that she was dozing off, and had just begun to dream that she was walking hand in hand with Dinah, and saying to her very earnestly, ‘Now, Dinah, tell me the truth: did you ever eat a bat?’ when suddenly, thump! thump! down she came upon a heap of sticks and dry leaves, and the fall was over.

Alice was not a bit hurt, and she jumped up on to her feet in a moment: she looked up, but it was all dark overhead; before her was another long passage, and the White Rabbit was still in sight, hurrying down it. There was not a moment to be lost: away went Alice like the wind, and was just in time to hear it say, as it turned a corner, ‘Oh my ears and whiskers, how late it’s getting!’ She was close behind it when she turned the corner, but the Rabbit was no longer to be seen: she found herself in a long, low hall, which was lit up by a row of lamps hanging from the roof.

There were doors all round the hall, but they were all locked; and when Alice had been all the way down one side and up the other, trying every door, she walked sadly down the middle, wondering how she was ever to get out again.

Suddenly she came upon a little three-legged table, all made of solid glass; there was nothing on it except a tiny golden key, and Alice’s first thought was that it might belong to one of the doors of the hall; but, alas! either the locks were too large, or the key was too small, but at any rate it would not open any of them. However, on the second time round, she came upon a low curtain she had not noticed before, and behind it was a little door about fifteen inches high: she tried the little golden key in the lock, and to her great delight it fitted!

Alice opened the door and found that it led into a small passage, not much larger than a rat-hole: she knelt down and looked along the passage into the loveliest garden you ever saw. How she longed to get out of that dark hall, and wander about among those beds of bright flowers and those cool fountains, but she could not even get her head through the doorway; ‘and even if my head would go through,’ thought poor Alice, ‘it would be of very little use without my shoulders. Oh, how I wish I could shut up like a telescope! I think I could, if I only knew how to begin.’ For, you see, so many out-of-the-way things had happened lately, that Alice had begun to think that very few things indeed were really impossible.

There seemed to be no use in waiting by the little door, so she went back to the table, half hoping she might find another key on it, or at any rate a book of rules for shutting people up like telescopes: this time she found a little bottle on it, (‘which certainly was not here before,’ said Alice,) and round the neck of the bottle was a paper label, with the words ‘DRINK ME’ beautifully printed on it in large letters.

It was all very well to say ‘Drink me,’ but the wise little Alice was not going to do that in a hurry. ‘No, I’ll look first,’ she said, ‘and see whether it’s marked “poison” or not’; for she had read several nice little histories about children who had got burnt, and eaten up by wild beasts and other unpleasant things, all because they would not remember the simple rules their friends had taught them: such as, that a red-hot poker will burn you if you hold it too long; and that if you cut your finger very deeply with a knife, it usually bleeds; and she had never forgotten that, if you drink much from a bottle marked ‘poison,’ it is almost certain to disagree with you, sooner or later.

However, this bottle was not marked ‘poison,’ so Alice ventured to taste it, and finding it very nice, (it had, in fact, a sort of mixed flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, and hot buttered toast,) she very soon finished it off.

*    *    *    *    *    *    *

*    *    *    *    *    *

*    *    *    *    *    *    *
‘What a curious feeling!’ said Alice; ‘I must be shutting up like a telescope.’

And so it was indeed: she was now only ten inches high, and her face brightened up at the thought that she was now the right size for going through the little door into that lovely garden. First, however, she waited for a few minutes to see if she was going to shrink any further: she felt a little nervous about this; ‘for it might end, you know,’ said Alice to herself, ‘in my going out altogether, like a candle. I wonder what I should be like then?’ And she tried to fancy what the flame of a candle is like after the candle is blown out, for she could not remember ever having seen such a thing.

After a while, finding that nothing more happened, she decided on going into the garden at once; but, alas for poor Alice! when she got to the door, she found she had forgotten the little golden key, and when she went back to the table for it, she found she could not possibly reach it: she could see it quite plainly through the glass, and she tried her best to climb up one of the legs of the table, but it was too slippery; and when she had tired herself out with trying, the poor little thing sat down and cried.

‘Come, there’s no use in crying like that!’ said Alice to herself, rather sharply; ‘I advise you to leave off this minute!’ She generally gave herself very good advice, (though she very seldom followed it), and sometimes she scolded herself so severely as to bring tears into her eyes; and once she remembered trying to box her own ears for having cheated herself in a game of croquet she was playing against herself, for this curious child was very fond of pretending to be two people. ‘But it’s no use now,’ thought poor Alice, ‘to pretend to be two people! Why, there’s hardly enough of me left to make one respectable person!’

Soon her eye fell on a little glass box that was lying under the table: she opened it, and found in it a very small cake, on which the words ‘EAT ME’ were beautifully marked in currants. ‘Well, I’ll eat it,’ said Alice, ‘and if it makes me grow larger, I can reach the key; and if it makes me grow smaller, I can creep under the door; so either way I’ll get into the garden, and I don’t care which happens!’

She ate a little bit, and said anxiously to herself, ‘Which way? Which way?’, holding her hand on the top of her head to feel which way it was growing, and she was quite surprised to find that she remained the same size: to be sure, this generally happens when one eats cake, but Alice had got so much into the way of expecting nothing but out-of-the-way things to happen, that it seemed quite dull and stupid for life to go on in the common way.

So she set to work, and very soon finished off the cake.

*    *    *    *    *    *    *

*    *    *    *    *    *

*    *    *    *    *    *    *`,
},{
name: "Grimms' Fairy Tales - The Golden Bird",
author: "Jacob Grimm and Wilhelm Grimm",
text: `A certain king had a beautiful garden, and in the garden stood a tree which bore golden apples. These apples were always counted, and about the time when they began to grow ripe it was found that every night one of them was gone. The king became very angry at this, and ordered the gardener to keep watch all night under the tree. The gardener set his eldest son to watch; but about twelve o’clock he fell asleep, and in the morning another of the apples was missing. Then the second son was ordered to watch; and at midnight he too fell asleep, and in the morning another apple was gone. Then the third son offered to keep watch; but the gardener at first would not let him, for fear some harm should come to him: however, at last he consented, and the young man laid himself under the tree to watch. As the clock struck twelve he heard a rustling noise in the air, and a bird came flying that was of pure gold; and as it was snapping at one of the apples with its beak, the gardener’s son jumped up and shot an arrow at it. But the arrow did the bird no harm; only it dropped a golden feather from its tail, and then flew away. The golden feather was brought to the king in the morning, and all the council was called together. Everyone agreed that it was worth more than all the wealth of the kingdom: but the king said, ‘One feather is of no use to me, I must have the whole bird.’

Then the gardener’s eldest son set out and thought to find the golden bird very easily; and when he had gone but a little way, he came to a wood, and by the side of the wood he saw a fox sitting; so he took his bow and made ready to shoot at it. Then the fox said, ‘Do not shoot me, for I will give you good counsel; I know what your business is, and that you want to find the golden bird. You will reach a village in the evening; and when you get there, you will see two inns opposite to each other, one of which is very pleasant and beautiful to look at: go not in there, but rest for the night in the other, though it may appear to you to be very poor and mean.’ But the son thought to himself, ‘What can such a beast as this know about the matter?’ So he shot his arrow at the fox; but he missed it, and it set up its tail above its back and ran into the wood. Then he went his way, and in the evening came to the village where the two inns were; and in one of these were people singing, and dancing, and feasting; but the other looked very dirty, and poor. ‘I should be very silly,’ said he, ‘if I went to that shabby house, and left this charming place’; so he went into the smart house, and ate and drank at his ease, and forgot the bird, and his country too.

Time passed on; and as the eldest son did not come back, and no tidings were heard of him, the second son set out, and the same thing happened to him. He met the fox, who gave him the good advice: but when he came to the two inns, his eldest brother was standing at the window where the merrymaking was, and called to him to come in; and he could not withstand the temptation, but went in, and forgot the golden bird and his country in the same manner.

Time passed on again, and the youngest son too wished to set out into the wide world to seek for the golden bird; but his father would not listen to it for a long while, for he was very fond of his son, and was afraid that some ill luck might happen to him also, and prevent his coming back. However, at last it was agreed he should go, for he would not rest at home; and as he came to the wood, he met the fox, and heard the same good counsel. But he was thankful to the fox, and did not attempt his life as his brothers had done; so the fox said, ‘Sit upon my tail, and you will travel faster.’ So he sat down, and the fox began to run, and away they went over stock and stone so quick that their hair whistled in the wind.

When they came to the village, the son followed the fox’s counsel, and without looking about him went to the shabby inn and rested there all night at his ease. In the morning came the fox again and met him as he was beginning his journey, and said, ‘Go straight forward, till you come to a castle, before which lie a whole troop of soldiers fast asleep and snoring: take no notice of them, but go into the castle and pass on and on till you come to a room, where the golden bird sits in a wooden cage; close by it stands a beautiful golden cage; but do not try to take the bird out of the shabby cage and put it into the handsome one, otherwise you will repent it.’ Then the fox stretched out his tail again, and the young man sat himself down, and away they went over stock and stone till their hair whistled in the wind.

Before the castle gate all was as the fox had said: so the son went in and found the chamber where the golden bird hung in a wooden cage, and below stood the golden cage, and the three golden apples that had been lost were lying close by it. Then thought he to himself, ‘It will be a very droll thing to bring away such a fine bird in this shabby cage’; so he opened the door and took hold of it and put it into the golden cage. But the bird set up such a loud scream that all the soldiers awoke, and they took him prisoner and carried him before the king. The next morning the court sat to judge him; and when all was heard, it sentenced him to die, unless he should bring the king the golden horse which could run as swiftly as the wind; and if he did this, he was to have the golden bird given him for his own.

So he set out once more on his journey, sighing, and in great despair, when on a sudden his friend the fox met him, and said, ‘You see now what has happened on account of your not listening to my counsel. I will still, however, tell you how to find the golden horse, if you will do as I bid you. You must go straight on till you come to the castle where the horse stands in his stall: by his side will lie the groom fast asleep and snoring: take away the horse quietly, but be sure to put the old leathern saddle upon him, and not the golden one that is close by it.’ Then the son sat down on the fox’s tail, and away they went over stock and stone till their hair whistled in the wind.

All went right, and the groom lay snoring with his hand upon the golden saddle. But when the son looked at the horse, he thought it a great pity to put the leathern saddle upon it. ‘I will give him the good one,’ said he; ‘I am sure he deserves it.’ As he took up the golden saddle the groom awoke and cried out so loud, that all the guards ran in and took him prisoner, and in the morning he was again brought before the court to be judged, and was sentenced to die. But it was agreed, that, if he could bring thither the beautiful princess, he should live, and have the bird and the horse given him for his own.

Then he went his way very sorrowful; but the old fox came and said, ‘Why did not you listen to me? If you had, you would have carried away both the bird and the horse; yet will I once more give you counsel. Go straight on, and in the evening you will arrive at a castle. At twelve o’clock at night the princess goes to the bathing-house: go up to her and give her a kiss, and she will let you lead her away; but take care you do not suffer her to go and take leave of her father and mother.’ Then the fox stretched out his tail, and so away they went over stock and stone till their hair whistled again.

As they came to the castle, all was as the fox had said, and at twelve o’clock the young man met the princess going to the bath and gave her the kiss, and she agreed to run away with him, but begged with many tears that he would let her take leave of her father. At first he refused, but she wept still more and more, and fell at his feet, till at last he consented; but the moment she came to her father’s house the guards awoke and he was taken prisoner again.

Then he was brought before the king, and the king said, ‘You shall never have my daughter unless in eight days you dig away the hill that stops the view from my window.’ Now this hill was so big that the whole world could not take it away: and when he had worked for seven days, and had done very little, the fox came and said. ‘Lie down and go to sleep; I will work for you.’ And in the morning he awoke and the hill was gone; so he went merrily to the king, and told him that now that it was removed he must give him the princess.

Then the king was obliged to keep his word, and away went the young man and the princess; and the fox came and said to him, ‘We will have all three, the princess, the horse, and the bird.’ ‘Ah!’ said the young man, ‘that would be a great thing, but how can you contrive it?’

‘If you will only listen,’ said the fox, ‘it can be done. When you come to the king, and he asks for the beautiful princess, you must say, “Here she is!” Then he will be very joyful; and you will mount the golden horse that they are to give you, and put out your hand to take leave of them; but shake hands with the princess last. Then lift her quickly on to the horse behind you; clap your spurs to his side, and gallop away as fast as you can.’

All went right: then the fox said, ‘When you come to the castle where the bird is, I will stay with the princess at the door, and you will ride in and speak to the king; and when he sees that it is the right horse, he will bring out the bird; but you must sit still, and say that you want to look at it, to see whether it is the true golden bird; and when you get it into your hand, ride away.’

This, too, happened as the fox said; they carried off the bird, the princess mounted again, and they rode on to a great wood. Then the fox came, and said, ‘Pray kill me, and cut off my head and my feet.’ But the young man refused to do it: so the fox said, ‘I will at any rate give you good counsel: beware of two things; ransom no one from the gallows, and sit down by the side of no river.’ Then away he went. ‘Well,’ thought the young man, ‘it is no hard matter to keep that advice.’

He rode on with the princess, till at last he came to the village where he had left his two brothers. And there he heard a great noise and uproar; and when he asked what was the matter, the people said, ‘Two men are going to be hanged.’ As he came nearer, he saw that the two men were his brothers, who had turned robbers; so he said, ‘Cannot they in any way be saved?’ But the people said ‘No,’ unless he would bestow all his money upon the rascals and buy their liberty. Then he did not stay to think about the matter, but paid what was asked, and his brothers were given up, and went on with him towards their home.

And as they came to the wood where the fox first met them, it was so cool and pleasant that the two brothers said, ‘Let us sit down by the side of the river, and rest a while, to eat and drink.’ So he said, ‘Yes,’ and forgot the fox’s counsel, and sat down on the side of the river; and while he suspected nothing, they came behind, and threw him down the bank, and took the princess, the horse, and the bird, and went home to the king their master, and said. ‘All this have we won by our labour.’ Then there was great rejoicing made; but the horse would not eat, the bird would not sing, and the princess wept.

The youngest son fell to the bottom of the river’s bed: luckily it was nearly dry, but his bones were almost broken, and the bank was so steep that he could find no way to get out. Then the old fox came once more, and scolded him for not following his advice; otherwise no evil would have befallen him: ‘Yet,’ said he, ‘I cannot leave you here, so lay hold of my tail and hold fast.’ Then he pulled him out of the river, and said to him, as he got upon the bank, ‘Your brothers have set watch to kill you, if they find you in the kingdom.’ So he dressed himself as a poor man, and came secretly to the king’s court, and was scarcely within the doors when the horse began to eat, and the bird to sing, and the princess left off weeping. Then he went to the king, and told him all his brothers’ roguery; and they were seized and punished, and he had the princess given to him again; and after the king’s death he was heir to his kingdom.

A long while after, he went to walk one day in the wood, and the old fox met him, and besought him with tears in his eyes to kill him, and cut off his head and feet. And at last he did so, and in a moment the fox was changed into a man, and turned out to be the brother of the princess, who had been lost a great many many years.`,
},{
name: "Peter Pan",
author: "J. M. Barrie",
text: `All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother. I suppose she must have looked rather delightful, for Mrs. Darling put her hand to her heart and cried, “Oh, why can't you remain like this for ever!” This was all that passed between them on the subject, but henceforth Wendy knew that she must grow up. You always know after you are two. Two is the beginning of the end.

Of course they lived at 14 [their house number on their street], and until Wendy came her mother was the chief one. She was a lovely lady, with a romantic mind and such a sweet mocking mouth. Her romantic mind was like the tiny boxes, one within the other, that come from the puzzling East, however many you discover there is always one more; and her sweet mocking mouth had one kiss on it that Wendy could never get, though there it was, perfectly conspicuous in the right-hand corner.

The way Mr. Darling won her was this: the many gentlemen who had been boys when she was a girl discovered simultaneously that they loved her, and they all ran to her house to propose to her except Mr. Darling, who took a cab and nipped in first, and so he got her. He got all of her, except the innermost box and the kiss. He never knew about the box, and in time he gave up trying for the kiss. Wendy thought Napoleon could have got it, but I can picture him trying, and then going off in a passion, slamming the door.

Mr. Darling used to boast to Wendy that her mother not only loved him but respected him. He was one of those deep ones who know about stocks and shares. Of course no one really knows, but he quite seemed to know, and he often said stocks were up and shares were down in a way that would have made any woman respect him.

Mrs. Darling was married in white, and at first she kept the books perfectly, almost gleefully, as if it were a game, not so much as a Brussels sprout was missing; but by and by whole cauliflowers dropped out, and instead of them there were pictures of babies without faces. She drew them when she should have been totting up. They were Mrs. Darling's guesses.

Wendy came first, then John, then Michael.

For a week or two after Wendy came it was doubtful whether they would be able to keep her, as she was another mouth to feed. Mr. Darling was frightfully proud of her, but he was very honourable, and he sat on the edge of Mrs. Darling's bed, holding her hand and calculating expenses, while she looked at him imploringly. She wanted to risk it, come what might, but that was not his way; his way was with a pencil and a piece of paper, and if she confused him with suggestions he had to begin at the beginning again.

“Now don't interrupt,” he would beg of her.

“I have one pound seventeen here, and two and six at the office; I can cut off my coffee at the office, say ten shillings, making two nine and six, with your eighteen and three makes three nine seven, with five naught naught in my cheque-book makes eight nine seven—who is that moving?—eight nine seven, dot and carry seven—don't speak, my own—and the pound you lent to that man who came to the door—quiet, child—dot and carry child—there, you've done it!—did I say nine nine seven? yes, I said nine nine seven; the question is, can we try it for a year on nine nine seven?”

“Of course we can, George,” she cried. But she was prejudiced in Wendy's favour, and he was really the grander character of the two.

“Remember mumps,” he warned her almost threateningly, and off he went again. “Mumps one pound, that is what I have put down, but I daresay it will be more like thirty shillings—don't speak—measles one five, German measles half a guinea, makes two fifteen six—don't waggle your finger—whooping-cough, say fifteen shillings”—and so on it went, and it added up differently each time; but at last Wendy just got through, with mumps reduced to twelve six, and the two kinds of measles treated as one.

There was the same excitement over John, and Michael had even a narrower squeak; but both were kept, and soon, you might have seen the three of them going in a row to Miss Fulsom's Kindergarten school, accompanied by their nurse.

Mrs. Darling loved to have everything just so, and Mr. Darling had a passion for being exactly like his neighbours; so, of course, they had a nurse. As they were poor, owing to the amount of milk the children drank, this nurse was a prim Newfoundland dog, called Nana, who had belonged to no one in particular until the Darlings engaged her. She had always thought children important, however, and the Darlings had become acquainted with her in Kensington Gardens, where she spent most of her spare time peeping into perambulators, and was much hated by careless nursemaids, whom she followed to their homes and complained of to their mistresses. She proved to be quite a treasure of a nurse. How thorough she was at bath-time, and up at any moment of the night if one of her charges made the slightest cry. Of course her kennel was in the nursery. She had a genius for knowing when a cough is a thing to have no patience with and when it needs stocking around your throat. She believed to her last day in old-fashioned remedies like rhubarb leaf, and made sounds of contempt over all this new-fangled talk about germs, and so on. It was a lesson in propriety to see her escorting the children to school, walking sedately by their side when they were well behaved, and butting them back into line if they strayed. On John's footer [in England soccer was called football, “footer” for short] days she never once forgot his sweater, and she usually carried an umbrella in her mouth in case of rain. There is a room in the basement of Miss Fulsom's school where the nurses wait. They sat on forms, while Nana lay on the floor, but that was the only difference. They affected to ignore her as of an inferior social status to themselves, and she despised their light talk. She resented visits to the nursery from Mrs. Darling's friends, but if they did come she first whipped off Michael's pinafore and put him into the one with blue braiding, and smoothed out Wendy and made a dash at John's hair.

No nursery could possibly have been conducted more correctly, and Mr. Darling knew it, yet he sometimes wondered uneasily whether the neighbours talked.

He had his position in the city to consider.

Nana also troubled him in another way. He had sometimes a feeling that she did not admire him. “I know she admires you tremendously, George,” Mrs. Darling would assure him, and then she would sign to the children to be specially nice to father. Lovely dances followed, in which the only other servant, Liza, was sometimes allowed to join. Such a midget she looked in her long skirt and maid's cap, though she had sworn, when engaged, that she would never see ten again. The gaiety of those romps! And gayest of all was Mrs. Darling, who would pirouette so wildly that all you could see of her was the kiss, and then if you had dashed at her you might have got it. There never was a simpler happier family until the coming of Peter Pan.

Mrs. Darling first heard of Peter when she was tidying up her children's minds. It is the nightly custom of every good mother after her children are asleep to rummage in their minds and put things straight for next morning, repacking into their proper places the many articles that have wandered during the day. If you could keep awake (but of course you can't) you would see your own mother doing this, and you would find it very interesting to watch her. It is quite like tidying up drawers. You would see her on her knees, I expect, lingering humorously over some of your contents, wondering where on earth you had picked this thing up, making discoveries sweet and not so sweet, pressing this to her cheek as if it were as nice as a kitten, and hurriedly stowing that out of sight. When you wake in the morning, the naughtiness and evil passions with which you went to bed have been folded up small and placed at the bottom of your mind and on the top, beautifully aired, are spread out your prettier thoughts, ready for you to put on.

I don't know whether you have ever seen a map of a person's mind. Doctors sometimes draw maps of other parts of you, and your own map can become intensely interesting, but catch them trying to draw a map of a child's mind, which is not only confused, but keeps going round all the time. There are zigzag lines on it, just like your temperature on a card, and these are probably roads in the island, for the Neverland is always more or less an island, with astonishing splashes of colour here and there, and coral reefs and rakish-looking craft in the offing, and savages and lonely lairs, and gnomes who are mostly tailors, and caves through which a river runs, and princes with six elder brothers, and a hut fast going to decay, and one very small old lady with a hooked nose. It would be an easy map if that were all, but there is also first day at school, religion, fathers, the round pond, needle-work, murders, hangings, verbs that take the dative, chocolate pudding day, getting into braces, say ninety-nine, three-pence for pulling out your tooth yourself, and so on, and either these are part of the island or they are another map showing through, and it is all rather confusing, especially as nothing will stand still.

Of course the Neverlands vary a good deal. John's, for instance, had a lagoon with flamingoes flying over it at which John was shooting, while Michael, who was very small, had a flamingo with lagoons flying over it. John lived in a boat turned upside down on the sands, Michael in a wigwam, Wendy in a house of leaves deftly sewn together. John had no friends, Michael had friends at night, Wendy had a pet wolf forsaken by its parents, but on the whole the Neverlands have a family resemblance, and if they stood still in a row you could say of them that they have each other's nose, and so forth. On these magic shores children at play are for ever beaching their coracles [simple boat]. We too have been there; we can still hear the sound of the surf, though we shall land no more.

Of all delectable islands the Neverland is the snuggest and most compact, not large and sprawly, you know, with tedious distances between one adventure and another, but nicely crammed. When you play at it by day with the chairs and table-cloth, it is not in the least alarming, but in the two minutes before you go to sleep it becomes very real. That is why there are night-lights.

Occasionally in her travels through her children's minds Mrs. Darling found things she could not understand, and of these quite the most perplexing was the word Peter. She knew of no Peter, and yet he was here and there in John and Michael's minds, while Wendy's began to be scrawled all over with him. The name stood out in bolder letters than any of the other words, and as Mrs. Darling gazed she felt that it had an oddly cocky appearance.

“Yes, he is rather cocky,” Wendy admitted with regret. Her mother had been questioning her.

“But who is he, my pet?”

“He is Peter Pan, you know, mother.”

At first Mrs. Darling did not know, but after thinking back into her childhood she just remembered a Peter Pan who was said to live with the fairies. There were odd stories about him, as that when children died he went part of the way with them, so that they should not be frightened. She had believed in him at the time, but now that she was married and full of sense she quite doubted whether there was any such person.

“Besides,” she said to Wendy, “he would be grown up by this time.”

“Oh no, he isn't grown up,” Wendy assured her confidently, “and he is just my size.” She meant that he was her size in both mind and body; she didn't know how she knew, she just knew it.

Mrs. Darling consulted Mr. Darling, but he smiled pooh-pooh. “Mark my words,” he said, “it is some nonsense Nana has been putting into their heads; just the sort of idea a dog would have. Leave it alone, and it will blow over.”

But it would not blow over and soon the troublesome boy gave Mrs. Darling quite a shock.

Children have the strangest adventures without being troubled by them. For instance, they may remember to mention, a week after the event happened, that when they were in the wood they had met their dead father and had a game with him. It was in this casual way that Wendy one morning made a disquieting revelation. Some leaves of a tree had been found on the nursery floor, which certainly were not there when the children went to bed, and Mrs. Darling was puzzling over them when Wendy said with a tolerant smile:

“I do believe it is that Peter again!”

“Whatever do you mean, Wendy?”

“It is so naughty of him not to wipe his feet,” Wendy said, sighing. She was a tidy child.

She explained in quite a matter-of-fact way that she thought Peter sometimes came to the nursery in the night and sat on the foot of her bed and played on his pipes to her. Unfortunately she never woke, so she didn't know how she knew, she just knew.

“What nonsense you talk, precious. No one can get into the house without knocking.”

“I think he comes in by the window,” she said.

“My love, it is three floors up.”

“Were not the leaves at the foot of the window, mother?”

It was quite true; the leaves had been found very near the window.

Mrs. Darling did not know what to think, for it all seemed so natural to Wendy that you could not dismiss it by saying she had been dreaming.

“My child,” the mother cried, “why did you not tell me of this before?”

“I forgot,” said Wendy lightly. She was in a hurry to get her breakfast.

Oh, surely she must have been dreaming.

But, on the other hand, there were the leaves. Mrs. Darling examined them very carefully; they were skeleton leaves, but she was sure they did not come from any tree that grew in England. She crawled about the floor, peering at it with a candle for marks of a strange foot. She rattled the poker up the chimney and tapped the walls. She let down a tape from the window to the pavement, and it was a sheer drop of thirty feet, without so much as a spout to climb up by.

Certainly Wendy had been dreaming.

But Wendy had not been dreaming, as the very next night showed, the night on which the extraordinary adventures of these children may be said to have begun.

On the night we speak of all the children were once more in bed. It happened to be Nana's evening off, and Mrs. Darling had bathed them and sung to them till one by one they had let go her hand and slid away into the land of sleep.

All were looking so safe and cosy that she smiled at her fears now and sat down tranquilly by the fire to sew.

It was something for Michael, who on his birthday was getting into shirts. The fire was warm, however, and the nursery dimly lit by three night-lights, and presently the sewing lay on Mrs. Darling's lap. Then her head nodded, oh, so gracefully. She was asleep. Look at the four of them, Wendy and Michael over there, John here, and Mrs. Darling by the fire. There should have been a fourth night-light.

While she slept she had a dream. She dreamt that the Neverland had come too near and that a strange boy had broken through from it. He did not alarm her, for she thought she had seen him before in the faces of many women who have no children. Perhaps he is to be found in the faces of some mothers also. But in her dream he had rent the film that obscures the Neverland, and she saw Wendy and John and Michael peeping through the gap.

The dream by itself would have been a trifle, but while she was dreaming the window of the nursery blew open, and a boy did drop on the floor. He was accompanied by a strange light, no bigger than your fist, which darted about the room like a living thing and I think it must have been this light that wakened Mrs. Darling.

She started up with a cry, and saw the boy, and somehow she knew at once that he was Peter Pan. If you or I or Wendy had been there we should have seen that he was very like Mrs. Darling's kiss. He was a lovely boy, clad in skeleton leaves and the juices that ooze out of trees but the most entrancing thing about him was that he had all his first teeth. When he saw she was a grown-up, he gnashed the little pearls at her.
`,
},{
name: "The Picture of Dorian Gray",
author: "Oscar Wilde",
text: `The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.

From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs; and now and then the fantastic shadows of birds in flight flitted across the long tussore-silk curtains that were stretched in front of the huge window, producing a kind of momentary Japanese effect, and making him think of those pallid, jade-faced painters of Tokyo who, through the medium of an art that is necessarily immobile, seek to convey the sense of swiftness and motion. The sullen murmur of the bees shouldering their way through the long unmown grass, or circling with monotonous insistence round the dusty gilt horns of the straggling woodbine, seemed to make the stillness more oppressive. The dim roar of London was like the bourdon note of a distant organ.

In the centre of the room, clamped to an upright easel, stood the full-length portrait of a young man of extraordinary personal beauty, and in front of it, some little distance away, was sitting the artist himself, Basil Hallward, whose sudden disappearance some years ago caused, at the time, such public excitement and gave rise to so many strange conjectures.

As the painter looked at the gracious and comely form he had so skilfully mirrored in his art, a smile of pleasure passed across his face, and seemed about to linger there. But he suddenly started up, and closing his eyes, placed his fingers upon the lids, as though he sought to imprison within his brain some curious dream from which he feared he might awake.

"It is your best work, Basil, the best thing you have ever done," said Lord Henry languidly. "You must certainly send it next year to the Grosvenor. The Academy is too large and too vulgar. Whenever I have gone there, there have been either so many people that I have not been able to see the pictures, which was dreadful, or so many pictures that I have not been able to see the people, which was worse. The Grosvenor is really the only place."

"I don't think I shall send it anywhere," he answered, tossing his head back in that odd way that used to make his friends laugh at him at Oxford. "No, I won't send it anywhere."

Lord Henry elevated his eyebrows and looked at him in amazement through the thin blue wreaths of smoke that curled up in such fanciful whorls from his heavy, opium-tainted cigarette. "Not send it anywhere? My dear fellow, why? Have you any reason? What odd chaps you painters are! You do anything in the world to gain a reputation. As soon as you have one, you seem to want to throw it away. It is silly of you, for there is only one thing in the world worse than being talked about, and that is not being talked about. A portrait like this would set you far above all the young men in England, and make the old men quite jealous, if old men are ever capable of any emotion."

"I know you will laugh at me," he replied, "but I really can't exhibit it. I have put too much of myself into it."

Lord Henry stretched himself out on the divan and laughed.

"Yes, I knew you would; but it is quite true, all the same."

"Too much of yourself in it! Upon my word, Basil, I didn't know you were so vain; and I really can't see any resemblance between you, with your rugged strong face and your coal-black hair, and this young Adonis, who looks as if he was made out of ivory and rose-leaves. Why, my dear Basil, he is a Narcissus, and you—well, of course you have an intellectual expression and all that. But beauty, real beauty, ends where an intellectual expression begins. Intellect is in itself a mode of exaggeration, and destroys the harmony of any face. The moment one sits down to think, one becomes all nose, or all forehead, or something horrid. Look at the successful men in any of the learned professions. How perfectly hideous they are! Except, of course, in the Church. But then in the Church they don't think. A bishop keeps on saying at the age of eighty what he was told to say when he was a boy of eighteen, and as a natural consequence he always looks absolutely delightful. Your mysterious young friend, whose name you have never told me, but whose picture really fascinates me, never thinks. I feel quite sure of that. He is some brainless beautiful creature who should be always here in winter when we have no flowers to look at, and always here in summer when we want something to chill our intelligence. Don't flatter yourself, Basil: you are not in the least like him."

"You don't understand me, Harry," answered the artist. "Of course I am not like him. I know that perfectly well. Indeed, I should be sorry to look like him. You shrug your shoulders? I am telling you the truth. There is a fatality about all physical and intellectual distinction, the sort of fatality that seems to dog through history the faltering steps of kings. It is better not to be different from one's fellows. The ugly and the stupid have the best of it in this world. They can sit at their ease and gape at the play. If they know nothing of victory, they are at least spared the knowledge of defeat. They live as we all should live—undisturbed, indifferent, and without disquiet. They neither bring ruin upon others, nor ever receive it from alien hands. Your rank and wealth, Harry; my brains, such as they are—my art, whatever it may be worth; Dorian Gray's good looks—we shall all suffer for what the gods have given us, suffer terribly."

"Dorian Gray? Is that his name?" asked Lord Henry, walking across the studio towards Basil Hallward.

"Yes, that is his name. I didn't intend to tell it to you."

"But why not?"

"Oh, I can't explain. When I like people immensely, I never tell their names to any one. It is like surrendering a part of them. I have grown to love secrecy. It seems to be the one thing that can make modern life mysterious or marvellous to us. The commonest thing is delightful if one only hides it. When I leave town now I never tell my people where I am going. If I did, I would lose all my pleasure. It is a silly habit, I dare say, but somehow it seems to bring a great deal of romance into one's life. I suppose you think me awfully foolish about it?"

"Not at all," answered Lord Henry, "not at all, my dear Basil. You seem to forget that I am married, and the one charm of marriage is that it makes a life of deception absolutely necessary for both parties. I never know where my wife is, and my wife never knows what I am doing. When we meet—we do meet occasionally, when we dine out together, or go down to the Duke's—we tell each other the most absurd stories with the most serious faces. My wife is very good at it—much better, in fact, than I am. She never gets confused over her dates, and I always do. But when she does find me out, she makes no row at all. I sometimes wish she would; but she merely laughs at me."

"I hate the way you talk about your married life, Harry," said Basil Hallward, strolling towards the door that led into the garden. "I believe that you are really a very good husband, but that you are thoroughly ashamed of your own virtues. You are an extraordinary fellow. You never say a moral thing, and you never do a wrong thing. Your cynicism is simply a pose."

"Being natural is simply a pose, and the most irritating pose I know," cried Lord Henry, laughing; and the two young men went out into the garden together and ensconced themselves on a long bamboo seat that stood in the shade of a tall laurel bush. The sunlight slipped over the polished leaves. In the grass, white daisies were tremulous.

After a pause, Lord Henry pulled out his watch. "I am afraid I must be going, Basil," he murmured, "and before I go, I insist on your answering a question I put to you some time ago."

"What is that?" said the painter, keeping his eyes fixed on the ground.

"You know quite well."

"I do not, Harry."

"Well, I will tell you what it is. I want you to explain to me why you won't exhibit Dorian Gray's picture. I want the real reason."

"I told you the real reason."

"No, you did not. You said it was because there was too much of yourself in it. Now, that is childish."

"Harry," said Basil Hallward, looking him straight in the face, "every portrait that is painted with feeling is a portrait of the artist, not of the sitter. The sitter is merely the accident, the occasion. It is not he who is revealed by the painter; it is rather the painter who, on the coloured canvas, reveals himself. The reason I will not exhibit this picture is that I am afraid that I have shown in it the secret of my own soul."

Lord Henry laughed. "And what is that?" he asked.

"I will tell you," said Hallward; but an expression of perplexity came over his face.

"I am all expectation, Basil," continued his companion, glancing at him.

"Oh, there is really very little to tell, Harry," answered the painter; "and I am afraid you will hardly understand it. Perhaps you will hardly believe it."

Lord Henry smiled, and leaning down, plucked a pink-petalled daisy from the grass and examined it. "I am quite sure I shall understand it," he replied, gazing intently at the little golden, white-feathered disk, "and as for believing things, I can believe anything, provided that it is quite incredible."

The wind shook some blossoms from the trees, and the heavy lilac-blooms, with their clustering stars, moved to and fro in the languid air. A grasshopper began to chirrup by the wall, and like a blue thread a long thin dragon-fly floated past on its brown gauze wings. Lord Henry felt as if he could hear Basil Hallward's heart beating, and wondered what was coming.

"The story is simply this," said the painter after some time. "Two months ago I went to a crush at Lady Brandon's. You know we poor artists have to show ourselves in society from time to time, just to remind the public that we are not savages. With an evening coat and a white tie, as you told me once, anybody, even a stock-broker, can gain a reputation for being civilized. Well, after I had been in the room about ten minutes, talking to huge overdressed dowagers and tedious academicians, I suddenly became conscious that some one was looking at me. I turned half-way round and saw Dorian Gray for the first time. When our eyes met, I felt that I was growing pale. A curious sensation of terror came over me. I knew that I had come face to face with some one whose mere personality was so fascinating that, if I allowed it to do so, it would absorb my whole nature, my whole soul, my very art itself. I did not want any external influence in my life. You know yourself, Harry, how independent I am by nature. I have always been my own master; had at least always been so, till I met Dorian Gray. Then—but I don't know how to explain it to you. Something seemed to tell me that I was on the verge of a terrible crisis in my life. I had a strange feeling that fate had in store for me exquisite joys and exquisite sorrows. I grew afraid and turned to quit the room. It was not conscience that made me do so: it was a sort of cowardice. I take no credit to myself for trying to escape."

"Conscience and cowardice are really the same things, Basil. Conscience is the trade-name of the firm. That is all."

"I don't believe that, Harry, and I don't believe you do either. However, whatever was my motive—and it may have been pride, for I used to be very proud—I certainly struggled to the door. There, of course, I stumbled against Lady Brandon. 'You are not going to run away so soon, Mr. Hallward?' she screamed out. You know her curiously shrill voice?"

"Yes; she is a peacock in everything but beauty," said Lord Henry, pulling the daisy to bits with his long nervous fingers.

"I could not get rid of her. She brought me up to royalties, and people with stars and garters, and elderly ladies with gigantic tiaras and parrot noses. She spoke of me as her dearest friend. I had only met her once before, but she took it into her head to lionize me. I believe some picture of mine had made a great success at the time, at least had been chattered about in the penny newspapers, which is the nineteenth-century standard of immortality. Suddenly I found myself face to face with the young man whose personality had so strangely stirred me. We were quite close, almost touching. Our eyes met again. It was reckless of me, but I asked Lady Brandon to introduce me to him. Perhaps it was not so reckless, after all. It was simply inevitable. We would have spoken to each other without any introduction. I am sure of that. Dorian told me so afterwards. He, too, felt that we were destined to know each other."

"And how did Lady Brandon describe this wonderful young man?" asked his companion. "I know she goes in for giving a rapid precis of all her guests. I remember her bringing me up to a truculent and red-faced old gentleman covered all over with orders and ribbons, and hissing into my ear, in a tragic whisper which must have been perfectly audible to everybody in the room, the most astounding details. I simply fled. I like to find out people for myself. But Lady Brandon treats her guests exactly as an auctioneer treats his goods. She either explains them entirely away, or tells one everything about them except what one wants to know."

"Poor Lady Brandon! You are hard on her, Harry!" said Hallward listlessly.

"My dear fellow, she tried to found a salon, and only succeeded in opening a restaurant. How could I admire her? But tell me, what did she say about Mr. Dorian Gray?"

"Oh, something like, 'Charming boy—poor dear mother and I absolutely inseparable. Quite forget what he does—afraid he—doesn't do anything—oh, yes, plays the piano—or is it the violin, dear Mr. Gray?' Neither of us could help laughing, and we became friends at once."

"Laughter is not at all a bad beginning for a friendship, and it is far the best ending for one," said the young lord, plucking another daisy.

Hallward shook his head. "You don't understand what friendship is, Harry," he murmured—"or what enmity is, for that matter. You like every one; that is to say, you are indifferent to every one."

"How horribly unjust of you!" cried Lord Henry, tilting his hat back and looking up at the little clouds that, like ravelled skeins of glossy white silk, were drifting across the hollowed turquoise of the summer sky. "Yes; horribly unjust of you. I make a great difference between people. I choose my friends for their good looks, my acquaintances for their good characters, and my enemies for their good intellects. A man cannot be too careful in the choice of his enemies. I have not got one who is a fool. They are all men of some intellectual power, and consequently they all appreciate me. Is that very vain of me? I think it is rather vain."

"I should think it was, Harry. But according to your category I must be merely an acquaintance."

"My dear old Basil, you are much more than an acquaintance."`,
},{
name: "The Yellow Wallpaper",
author: "Charlotte Perkins Gilman",
text: `It is very seldom that mere ordinary people like John and myself secure ancestral halls for the summer.

A colonial mansion, a hereditary estate, I would say a haunted house, and reach the height of romantic felicity—but that would be asking too much of fate!

Still I will proudly declare that there is something queer about it.

Else, why should it be let so cheaply? And why have stood so long untenanted?

John laughs at me, of course, but one expects that in marriage.

John is practical in the extreme. He has no patience with faith, an intense horror of superstition, and he scoffs openly at any talk of things not to be felt and seen and put down in figures.

John is a physician, and perhaps—(I would not say it to a living soul, of course, but this is dead paper and a great relief to my mind)—perhaps that is one reason I do not get well faster.

You see, he does not believe I am sick!

And what can one do?

If a physician of high standing, and one’s own husband, assures friends and relatives that there is really nothing the matter with one but temporary nervous depression—a slight hysterical tendency—what is one to do?

My brother is also a physician, and also of high standing, and he says the same thing.

So I take phosphates or phosphites—whichever it is, and tonics, and journeys, and air, and exercise, and am absolutely forbidden to “work” until I am well again.

Personally, I disagree with their ideas.

Personally, I believe that congenial work, with excitement and change, would do me good.

But what is one to do?

I did write for a while in spite of them; but it does exhaust me a good deal—having to be so sly about it, or else meet with heavy opposition.

I sometimes fancy that in my condition if I had less opposition and more society and stimulus—but John says the very worst thing I can do is to think about my condition, and I confess it always makes me feel bad.

So I will let it alone and talk about the house.

The most beautiful place! It is quite alone, standing well back from the road, quite three miles from the village. It makes me think of English places that you read about, for there are hedges and walls and gates that lock, and lots of separate little houses for the gardeners and people.

There is a delicious garden! I never saw such a garden—large and shady, full of box-bordered paths, and lined with long grape-covered arbors with seats under them.

There were greenhouses, too, but they are all broken now.

There was some legal trouble, I believe, something about the heirs and co-heirs; anyhow, the place has been empty for years.

That spoils my ghostliness, I am afraid; but I don’t care—there is something strange about the house—I can feel it.

I even said so to John one moonlight evening, but he said what I felt was a draught, and shut the window.

I get unreasonably angry with John sometimes. I’m sure I never used to be so sensitive. I think it is due to this nervous condition.

But John says if I feel so I shall neglect proper self-control; so I take pains to control myself,—before him, at least,—and that makes me very tired.

I don’t like our room a bit. I wanted one downstairs that opened on the piazza and had roses all over the window, and such pretty old-fashioned chintz hangings! but John would not hear of it.

He said there was only one window and not room for two beds, and no near room for him if he took another.

He is very careful and loving, and hardly lets me stir without special direction.

I have a schedule prescription for each hour in the day; he takes all care from me, and so I feel basely ungrateful not to value it more.

He said we came here solely on my account, that I was to have perfect rest and all the air I could get. “Your exercise depends on your strength, my dear,” said he, “and your food somewhat on your appetite; but air you can absorb all the time.” So we took the nursery, at the top of the house.

It is a big, airy room, the whole floor nearly, with windows that look all ways, and air and sunshine galore. It was nursery first and then playground and gymnasium, I should judge; for the windows are barred for little children, and there are rings and things in the walls.

The paint and paper look as if a boys’ school had used it. It is stripped off—the paper—in great patches all around the head of my bed, about as far as I can reach, and in a great place on the other side of the room low down. I never saw a worse paper in my life.

One of those sprawling flamboyant patterns committing every artistic sin.

It is dull enough to confuse the eye in following, pronounced enough to constantly irritate, and provoke study, and when you follow the lame, uncertain curves for a little distance they suddenly commit suicide—plunge off at outrageous angles, destroy themselves in unheard-of contradictions.

The color is repellant, almost revolting; a smouldering, unclean yellow, strangely faded by the slow-turning sunlight.

It is a dull yet lurid orange in some places, a sickly sulphur tint in others.

No wonder the children hated it! I should hate it myself if I had to live in this room long.

There comes John, and I must put this away,—he hates to have me write a word.





We have been here two weeks, and I haven’t felt like writing before, since that first day.

I am sitting by the window now, up in this atrocious nursery, and there is nothing to hinder my writing as much as I please, save lack of strength.

John is away all day, and even some nights when his cases are serious.

I am glad my case is not serious!

But these nervous troubles are dreadfully depressing.

John does not know how much I really suffer. He knows there is no reason to suffer, and that satisfies him.

Of course it is only nervousness. It does weigh on me so not to do my duty in any way!

I meant to be such a help to John, such a real rest and comfort, and here I am a comparative burden already!

Nobody would believe what an effort it is to do what little I am able—to dress and entertain, and order things.

It is fortunate Mary is so good with the baby. Such a dear baby!

And yet I cannot be with him, it makes me so nervous.

I suppose John never was nervous in his life. He laughs at me so about this wallpaper!

At first he meant to repaper the room, but afterwards he said that I was letting it get the better of me, and that nothing was worse for a nervous patient than to give way to such fancies.

He said that after the wallpaper was changed it would be the heavy bedstead, and then the barred windows, and then that gate at the head of the stairs, and so on.

“You know the place is doing you good,” he said, “and really, dear, I don’t care to renovate the house just for a three months’ rental.”

“Then do let us go downstairs,” I said, “there are such pretty rooms there.”

Then he took me in his arms and called me a blessed little goose, and said he would go down cellar if I wished, and have it whitewashed into the bargain.

But he is right enough about the beds and windows and things.

It is as airy and comfortable a room as any one need wish, and, of course, I would not be so silly as to make him uncomfortable just for a whim.

I’m really getting quite fond of the big room, all but that horrid paper.

Out of one window I can see the garden, those mysterious deep-shaded arbors, the riotous old-fashioned flowers, and bushes and gnarly trees.

Out of another I get a lovely view of the bay and a little private wharf belonging to the estate. There is a beautiful shaded lane that runs down there from the house. I always fancy I see people walking in these numerous paths and arbors, but John has cautioned me not to give way to fancy in the least. He says that with my imaginative power and habit of story-making a nervous weakness like mine is sure to lead to all manner of excited fancies, and that I ought to use my will and good sense to check the tendency. So I try.

I think sometimes that if I were only well enough to write a little it would relieve the press of ideas and rest me.

But I find I get pretty tired when I try.

It is so discouraging not to have any advice and companionship about my work. When I get really well John says we will ask Cousin Henry and Julia down for a long visit; but he says he would as soon put fire-works in my pillow-case as to let me have those stimulating people about now.

I wish I could get well faster.

But I must not think about that. This paper looks to me as if it knew what a vicious influence it had!

There is a recurrent spot where the pattern lolls like a broken neck and two bulbous eyes stare at you upside-down.

I get positively angry with the impertinence of it and the everlastingness. Up and down and sideways they crawl, and those absurd, unblinking eyes are everywhere. There is one place where two breadths didn’t match, and the eyes go all up and down the line, one a little higher than the other.

I never saw so much expression in an inanimate thing before, and we all know how much expression they have! I used to lie awake as a child and get more entertainment and terror out of blank walls and plain furniture than most children could find in a toy-store.

I remember what a kindly wink the knobs of our big old bureau used to have, and there was one chair that always seemed like a strong friend.

I used to feel that if any of the other things looked too fierce I could always hop into that chair and be safe.

The furniture in this room is no worse than inharmonious, however, for we had to bring it all from downstairs. I suppose when this was used as a playroom they had to take the nursery things out, and no wonder! I never saw such ravages as the children have made here.

The wallpaper, as I said before, is torn off in spots, and it sticketh closer than a brother—they must have had perseverance as well as hatred.

Then the floor is scratched and gouged and splintered, the plaster itself is dug out here and there, and this great heavy bed, which is all we found in the room, looks as if it had been through the wars.

But I don’t mind it a bit—only the paper.

There comes John’s sister. Such a dear girl as she is, and so careful of me! I must not let her find me writing.

She is a perfect, and enthusiastic housekeeper, and hopes for no better profession. I verily believe she thinks it is the writing which made me sick!

But I can write when she is out, and see her a long way off from these windows.

There is one that commands the road, a lovely, shaded, winding road, and one that just looks off over the country. A lovely country, too, full of great elms and velvet meadows.

This wallpaper has a kind of sub-pattern in a different shade, a particularly irritating one, for you can only see it in certain lights, and not clearly then.

But in the places where it isn’t faded, and where the sun is just so, I can see a strange, provoking, formless sort of figure, that seems to sulk about behind that silly and conspicuous front design.

There’s sister on the stairs!
`,
},{
name: "The Souls of Black Folk",
author: "W. E. B. Du Bois",
text: `O water, voice of my heart, crying in the sand,
All night long crying with a mournful cry,
As I lie and listen, and cannot understand
The voice of my heart in my side or the voice of the sea,
O water, crying for rest, is it I, is it I?
All night long the water is crying to me.

Unresting water, there shall never be rest
Till the last moon droop and the last tide fail,
And the fire of the end begin to burn in the west;
And the heart shall be weary and wonder and cry like the sea,
All life long crying without avail,
As the water all night long is crying to me.

ARTHUR SYMONS.

musical score

Between me and the other world there is ever an unasked question: unasked by some through feelings of delicacy; by others through the difficulty of rightly framing it. All, nevertheless, flutter round it. They approach me in a half-hesitant sort of way, eye me curiously or compassionately, and then, instead of saying directly, How does it feel to be a problem? they say, I know an excellent colored man in my town; or, I fought at Mechanicsville; or, Do not these Southern outrages make your blood boil? At these I smile, or am interested, or reduce the boiling to a simmer, as the occasion may require. To the real question, How does it feel to be a problem? I answer seldom a word.

And yet, being a problem is a strange experience,—peculiar even for one who has never been anything else, save perhaps in babyhood and in Europe. It is in the early days of rollicking boyhood that the revelation first bursts upon one, all in a day, as it were. I remember well when the shadow swept across me. I was a little thing, away up in the hills of New England, where the dark Housatonic winds between Hoosac and Taghkanic to the sea. In a wee wooden schoolhouse, something put it into the boys’ and girls’ heads to buy gorgeous visiting-cards—ten cents a package—and exchange. The exchange was merry, till one girl, a tall newcomer, refused my card,—refused it peremptorily, with a glance. Then it dawned upon me with a certain suddenness that I was different from the others; or like, mayhap, in heart and life and longing, but shut out from their world by a vast veil. I had thereafter no desire to tear down that veil, to creep through; I held all beyond it in common contempt, and lived above it in a region of blue sky and great wandering shadows. That sky was bluest when I could beat my mates at examination-time, or beat them at a foot-race, or even beat their stringy heads. Alas, with the years all this fine contempt began to fade; for the words I longed for, and all their dazzling opportunities, were theirs, not mine. But they should not keep these prizes, I said; some, all, I would wrest from them. Just how I would do it I could never decide: by reading law, by healing the sick, by telling the wonderful tales that swam in my head,—some way. With other black boys the strife was not so fiercely sunny: their youth shrunk into tasteless sycophancy, or into silent hatred of the pale world about them and mocking distrust of everything white; or wasted itself in a bitter cry, Why did God make me an outcast and a stranger in mine own house? The shades of the prison-house closed round about us all: walls strait and stubborn to the whitest, but relentlessly narrow, tall, and unscalable to sons of night who must plod darkly on in resignation, or beat unavailing palms against the stone, or steadily, half hopelessly, watch the streak of blue above.

After the Egyptian and Indian, the Greek and Roman, the Teuton and Mongolian, the Negro is a sort of seventh son, born with a veil, and gifted with second-sight in this American world,—a world which yields him no true self-consciousness, but only lets him see himself through the revelation of the other world. It is a peculiar sensation, this double-consciousness, this sense of always looking at one’s self through the eyes of others, of measuring one’s soul by the tape of a world that looks on in amused contempt and pity. One ever feels his twoness,—an American, a Negro; two souls, two thoughts, two unreconciled strivings; two warring ideals in one dark body, whose dogged strength alone keeps it from being torn asunder.

The history of the American Negro is the history of this strife,—this longing to attain self-conscious manhood, to merge his double self into a better and truer self. In this merging he wishes neither of the older selves to be lost. He would not Africanize America, for America has too much to teach the world and Africa. He would not bleach his Negro soul in a flood of white Americanism, for he knows that Negro blood has a message for the world. He simply wishes to make it possible for a man to be both a Negro and an American, without being cursed and spit upon by his fellows, without having the doors of Opportunity closed roughly in his face.

This, then, is the end of his striving: to be a co-worker in the kingdom of culture, to escape both death and isolation, to husband and use his best powers and his latent genius. These powers of body and mind have in the past been strangely wasted, dispersed, or forgotten. The shadow of a mighty Negro past flits through the tale of Ethiopia the Shadowy and of Egypt the Sphinx. Through history, the powers of single black men flash here and there like falling stars, and die sometimes before the world has rightly gauged their brightness. Here in America, in the few days since Emancipation, the black man’s turning hither and thither in hesitant and doubtful striving has often made his very strength to lose effectiveness, to seem like absence of power, like weakness. And yet it is not weakness,—it is the contradiction of double aims. The double-aimed struggle of the black artisan—on the one hand to escape white contempt for a nation of mere hewers of wood and drawers of water, and on the other hand to plough and nail and dig for a poverty-stricken horde—could only result in making him a poor craftsman, for he had but half a heart in either cause. By the poverty and ignorance of his people, the Negro minister or doctor was tempted toward quackery and demagogy; and by the criticism of the other world, toward ideals that made him ashamed of his lowly tasks. The would-be black savant was confronted by the paradox that the knowledge his people needed was a twice-told tale to his white neighbors, while the knowledge which would teach the white world was Greek to his own flesh and blood. The innate love of harmony and beauty that set the ruder souls of his people a-dancing and a-singing raised but confusion and doubt in the soul of the black artist; for the beauty revealed to him was the soul-beauty of a race which his larger audience despised, and he could not articulate the message of another people. This waste of double aims, this seeking to satisfy two unreconciled ideals, has wrought sad havoc with the courage and faith and deeds of ten thousand thousand people,—has sent them often wooing false gods and invoking false means of salvation, and at times has even seemed about to make them ashamed of themselves.

Away back in the days of bondage they thought to see in one divine event the end of all doubt and disappointment; few men ever worshipped Freedom with half such unquestioning faith as did the American Negro for two centuries. To him, so far as he thought and dreamed, slavery was indeed the sum of all villainies, the cause of all sorrow, the root of all prejudice; Emancipation was the key to a promised land of sweeter beauty than ever stretched before the eyes of wearied Israelites. In song and exhortation swelled one refrain—Liberty; in his tears and curses the God he implored had Freedom in his right hand. At last it came,—suddenly, fearfully, like a dream. With one wild carnival of blood and passion came the message in his own plaintive cadences:—

“Shout, O children!
Shout, you’re free!
For God has bought your liberty!”

Years have passed away since then,—ten, twenty, forty; forty years of national life, forty years of renewal and development, and yet the swarthy spectre sits in its accustomed seat at the Nation’s feast. In vain do we cry to this our vastest social problem:—

“Take any shape but that, and my firm nerves
Shall never tremble!”`,
},{
name: "Uncle Tom's Cabin",
author: "Harriet Beecher Stowe",
text: `In Which the Reader Is Introduced to a Man of Humanity.

Late in the afternoon of a chilly day in February, two gentlemen were sitting alone over their wine, in a well-furnished dining parlor, in the town of P——, in Kentucky. There were no servants present, and the gentlemen, with chairs closely approaching, seemed to be discussing some subject with great earnestness.

For convenience sake, we have said, hitherto, two gentlemen. One of the parties, however, when critically examined, did not seem, strictly speaking, to come under the species. He was a short, thick-set man, with coarse, commonplace features, and that swaggering air of pretension which marks a low man who is trying to elbow his way upward in the world. He was much over-dressed, in a gaudy vest of many colors, a blue neckerchief, bedropped gayly with yellow spots, and arranged with a flaunting tie, quite in keeping with the general air of the man. His hands, large and coarse, were plentifully bedecked with rings; and he wore a heavy gold watch-chain, with a bundle of seals of portentous size, and a great variety of colors, attached to it,—which, in the ardor of conversation, he was in the habit of flourishing and jingling with evident satisfaction. His conversation was in free and easy defiance of Murray’s Grammar,* and was garnished at convenient intervals with various profane expressions, which not even the desire to be graphic in our account shall induce us to transcribe.

  * English Grammar (1795), by Lindley Murray (1745-1826), the
  most authoritative American grammarian of his day.
His companion, Mr. Shelby, had the appearance of a gentleman; and the arrangements of the house, and the general air of the housekeeping, indicated easy, and even opulent circumstances. As we before stated, the two were in the midst of an earnest conversation.

“That is the way I should arrange the matter,” said Mr. Shelby.

“I can’t make trade that way—I positively can’t, Mr. Shelby,” said the other, holding up a glass of wine between his eye and the light.

“Why, the fact is, Haley, Tom is an uncommon fellow; he is certainly worth that sum anywhere,—steady, honest, capable, manages my whole farm like a clock.”

“You mean honest, as niggers go,” said Haley, helping himself to a glass of brandy.

“No; I mean, really, Tom is a good, steady, sensible, pious fellow. He got religion at a camp-meeting, four years ago; and I believe he really did get it. I’ve trusted him, since then, with everything I have,—money, house, horses,—and let him come and go round the country; and I always found him true and square in everything.”

“Some folks don’t believe there is pious niggers Shelby,” said Haley, with a candid flourish of his hand, “but I do. I had a fellow, now, in this yer last lot I took to Orleans—‘t was as good as a meetin, now, really, to hear that critter pray; and he was quite gentle and quiet like. He fetched me a good sum, too, for I bought him cheap of a man that was ’bliged to sell out; so I realized six hundred on him. Yes, I consider religion a valeyable thing in a nigger, when it’s the genuine article, and no mistake.”

“Well, Tom’s got the real article, if ever a fellow had,” rejoined the other. “Why, last fall, I let him go to Cincinnati alone, to do business for me, and bring home five hundred dollars. ‘Tom,’ says I to him, ‘I trust you, because I think you’re a Christian—I know you wouldn’t cheat.’ Tom comes back, sure enough; I knew he would. Some low fellows, they say, said to him—Tom, why don’t you make tracks for Canada?’ ’Ah, master trusted me, and I couldn’t,’—they told me about it. I am sorry to part with Tom, I must say. You ought to let him cover the whole balance of the debt; and you would, Haley, if you had any conscience.”

“Well, I’ve got just as much conscience as any man in business can afford to keep,—just a little, you know, to swear by, as ’t were,” said the trader, jocularly; “and, then, I’m ready to do anything in reason to ’blige friends; but this yer, you see, is a leetle too hard on a fellow—a leetle too hard.” The trader sighed contemplatively, and poured out some more brandy.

“Well, then, Haley, how will you trade?” said Mr. Shelby, after an uneasy interval of silence.

“Well, haven’t you a boy or gal that you could throw in with Tom?”

“Hum!—none that I could well spare; to tell the truth, it’s only hard necessity makes me willing to sell at all. I don’t like parting with any of my hands, that’s a fact.”

Here the door opened, and a small quadroon boy, between four and five years of age, entered the room. There was something in his appearance remarkably beautiful and engaging. His black hair, fine as floss silk, hung in glossy curls about his round, dimpled face, while a pair of large dark eyes, full of fire and softness, looked out from beneath the rich, long lashes, as he peered curiously into the apartment. A gay robe of scarlet and yellow plaid, carefully made and neatly fitted, set off to advantage the dark and rich style of his beauty; and a certain comic air of assurance, blended with bashfulness, showed that he had been not unused to being petted and noticed by his master.

“Hulloa, Jim Crow!” said Mr. Shelby, whistling, and snapping a bunch of raisins towards him, “pick that up, now!”

The child scampered, with all his little strength, after the prize, while his master laughed.

“Come here, Jim Crow,” said he. The child came up, and the master patted the curly head, and chucked him under the chin.

“Now, Jim, show this gentleman how you can dance and sing.” The boy commenced one of those wild, grotesque songs common among the negroes, in a rich, clear voice, accompanying his singing with many comic evolutions of the hands, feet, and whole body, all in perfect time to the music.

“Bravo!” said Haley, throwing him a quarter of an orange.

“Now, Jim, walk like old Uncle Cudjoe, when he has the rheumatism,” said his master.

Instantly the flexible limbs of the child assumed the appearance of deformity and distortion, as, with his back humped up, and his master’s stick in his hand, he hobbled about the room, his childish face drawn into a doleful pucker, and spitting from right to left, in imitation of an old man.

Both gentlemen laughed uproariously.

“Now, Jim,” said his master, “show us how old Elder Robbins leads the psalm.” The boy drew his chubby face down to a formidable length, and commenced toning a psalm tune through his nose, with imperturbable gravity.

“Hurrah! bravo! what a young ’un!” said Haley; “that chap’s a case, I’ll promise. Tell you what,” said he, suddenly clapping his hand on Mr. Shelby’s shoulder, “fling in that chap, and I’ll settle the business—I will. Come, now, if that ain’t doing the thing up about the rightest!”

At this moment, the door was pushed gently open, and a young quadroon woman, apparently about twenty-five, entered the room.

There needed only a glance from the child to her, to identify her as its mother. There was the same rich, full, dark eye, with its long lashes; the same ripples of silky black hair. The brown of her complexion gave way on the cheek to a perceptible flush, which deepened as she saw the gaze of the strange man fixed upon her in bold and undisguised admiration. Her dress was of the neatest possible fit, and set off to advantage her finely moulded shape;—a delicately formed hand and a trim foot and ankle were items of appearance that did not escape the quick eye of the trader, well used to run up at a glance the points of a fine female article.

“Well, Eliza?” said her master, as she stopped and looked hesitatingly at him.

“I was looking for Harry, please, sir;” and the boy bounded toward her, showing his spoils, which he had gathered in the skirt of his robe.

“Well, take him away then,” said Mr. Shelby; and hastily she withdrew, carrying the child on her arm.

“By Jupiter,” said the trader, turning to him in admiration, “there’s an article, now! You might make your fortune on that ar gal in Orleans, any day. I’ve seen over a thousand, in my day, paid down for gals not a bit handsomer.”

“I don’t want to make my fortune on her,” said Mr. Shelby, dryly; and, seeking to turn the conversation, he uncorked a bottle of fresh wine, and asked his companion’s opinion of it.

“Capital, sir,—first chop!” said the trader; then turning, and slapping his hand familiarly on Shelby’s shoulder, he added—

“Come, how will you trade about the gal?—what shall I say for her—what’ll you take?”

“Mr. Haley, she is not to be sold,” said Shelby. “My wife would not part with her for her weight in gold.”

“Ay, ay! women always say such things, cause they ha’nt no sort of calculation. Just show ’em how many watches, feathers, and trinkets, one’s weight in gold would buy, and that alters the case, I reckon.”

“I tell you, Haley, this must not be spoken of; I say no, and I mean no,” said Shelby, decidedly.

“Well, you’ll let me have the boy, though,” said the trader; “you must own I’ve come down pretty handsomely for him.”

“What on earth can you want with the child?” said Shelby.

“Why, I’ve got a friend that’s going into this yer branch of the business—wants to buy up handsome boys to raise for the market. Fancy articles entirely—sell for waiters, and so on, to rich ’uns, that can pay for handsome ’uns. It sets off one of yer great places—a real handsome boy to open door, wait, and tend. They fetch a good sum; and this little devil is such a comical, musical concern, he’s just the article!’

“I would rather not sell him,” said Mr. Shelby, thoughtfully; “the fact is, sir, I’m a humane man, and I hate to take the boy from his mother, sir.”

“O, you do?—La! yes—something of that ar natur. I understand, perfectly. It is mighty onpleasant getting on with women, sometimes, I al’ays hates these yer screechin,’ screamin’ times. They are mighty onpleasant; but, as I manages business, I generally avoids ’em, sir. Now, what if you get the girl off for a day, or a week, or so; then the thing’s done quietly,—all over before she comes home. Your wife might get her some ear-rings, or a new gown, or some such truck, to make up with her.”

“I’m afraid not.”`,
},{
name: "The Republic",
author: "Plato",
text: `I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess (Bendis, the Thracian Artemis.); and also because I wanted to see in what manner they would celebrate the festival, which was a new thing. I was delighted with the procession of the inhabitants; but that of the Thracians was equally, if not more, beautiful. When we had finished our prayers and viewed the spectacle, we turned in the direction of the city; and at that instant Polemarchus the son of Cephalus chanced to catch sight of us from a distance as we were starting on our way home, and told his servant to run and bid us wait for him. The servant took hold of me by the cloak behind, and said: Polemarchus desires you to wait.

I turned round, and asked him where his master was.

There he is, said the youth, coming after you, if you will only wait.

Certainly we will, said Glaucon; and in a few minutes Polemarchus appeared, and with him Adeimantus, Glaucon's brother, Niceratus the son of Nicias, and several others who had been at the procession.

Polemarchus said to me: I perceive, Socrates, that you and your companion are already on your way to the city.

You are not far wrong, I said.

But do you see, he rejoined, how many we are?

Of course.

And are you stronger than all these? for if not, you will have to remain where you are.

May there not be the alternative, I said, that we may persuade you to let us go?

But can you persuade us, if we refuse to listen to you? he said.

Certainly not, replied Glaucon.

Then we are not going to listen; of that you may be assured.

Adeimantus added: Has no one told you of the torch-race on horseback in honour of the goddess which will take place in the evening?

With horses! I replied: That is a novelty. Will horsemen carry torches and pass them one to another during the race?

Yes, said Polemarchus, and not only so, but a festival will be celebrated at night, which you certainly ought to see. Let us rise soon after supper and see this festival; there will be a gathering of young men, and we will have a good talk. Stay then, and do not be perverse.

Glaucon said: I suppose, since you insist, that we must.

Very good, I replied.

Accordingly we went with Polemarchus to his house; and there we found his brothers Lysias and Euthydemus, and with them Thrasymachus the Chalcedonian, Charmantides the Paeanian, and Cleitophon the son of Aristonymus. There too was Cephalus the father of Polemarchus, whom I had not seen for a long time, and I thought him very much aged. He was seated on a cushioned chair, and had a garland on his head, for he had been sacrificing in the court; and there were some other chairs in the room arranged in a semicircle, upon which we sat down by him. He saluted me eagerly, and then he said:—

You don't come to see me, Socrates, as often as you ought: If I were still able to go and see you I would not ask you to come to me. But at my age I can hardly get to the city, and therefore you should come oftener to the Piraeus. For let me tell you, that the more the pleasures of the body fade away, the greater to me is the pleasure and charm of conversation. Do not then deny my request, but make our house your resort and keep company with these young men; we are old friends, and you will be quite at home with us.

I replied: There is nothing which for my part I like better, Cephalus, than conversing with aged men; for I regard them as travellers who have gone a journey which I too may have to go, and of whom I ought to enquire, whether the way is smooth and easy, or rugged and difficult. And this is a question which I should like to ask of you who have arrived at that time which the poets call the 'threshold of old age'—Is life harder towards the end, or what report do you give of it?

I will tell you, Socrates, he said, what my own feeling is. Men of my age flock together; we are birds of a feather, as the old proverb says; and at our meetings the tale of my acquaintance commonly is—I cannot eat, I cannot drink; the pleasures of youth and love are fled away: there was a good time once, but now that is gone, and life is no longer life. Some complain of the slights which are put upon them by relations, and they will tell you sadly of how many evils their old age is the cause. But to me, Socrates, these complainers seem to blame that which is not really in fault. For if old age were the cause, I too being old, and every other old man, would have felt as they do. But this is not my own experience, nor that of others whom I have known. How well I remember the aged poet Sophocles, when in answer to the question, How does love suit with age, Sophocles,—are you still the man you were? Peace, he replied; most gladly have I escaped the thing of which you speak; I feel as if I had escaped from a mad and furious master. His words have often occurred to my mind since, and they seem as good to me now as at the time when he uttered them. For certainly old age has a great sense of calm and freedom; when the passions relax their hold, then, as Sophocles says, we are freed from the grasp not of one mad master only, but of many. The truth is, Socrates, that these regrets, and also the complaints about relations, are to be attributed to the same cause, which is not old age, but men's characters and tempers; for he who is of a calm and happy nature will hardly feel the pressure of age, but to him who is of an opposite disposition youth and age are equally a burden.

I listened in admiration, and wanting to draw him out, that he might go on—Yes, Cephalus, I said: but I rather suspect that people in general are not convinced by you when you speak thus; they think that old age sits lightly upon you, not because of your happy disposition, but because you are rich, and wealth is well known to be a great comforter.

You are right, he replied; they are not convinced: and there is something in what they say; not, however, so much as they imagine. I might answer them as Themistocles answered the Seriphian who was abusing him and saying that he was famous, not for his own merits but because he was an Athenian: 'If you had been a native of my country or I of yours, neither of us would have been famous.' And to those who are not rich and are impatient of old age, the same reply may be made; for to the good poor man old age cannot be a light burden, nor can a bad rich man ever have peace with himself.

May I ask, Cephalus, whether your fortune was for the most part inherited or acquired by you?

Acquired! Socrates; do you want to know how much I acquired? In the art of making money I have been midway between my father and grandfather: for my grandfather, whose name I bear, doubled and trebled the value of his patrimony, that which he inherited being much what I possess now; but my father Lysanias reduced the property below what it is at present: and I shall be satisfied if I leave to these my sons not less but a little more than I received.

That was why I asked you the question, I replied, because I see that you are indifferent about money, which is a characteristic rather of those who have inherited their fortunes than of those who have acquired them; the makers of fortunes have a second love of money as a creation of their own, resembling the affection of authors for their own poems, or of parents for their children, besides that natural love of it for the sake of use and profit which is common to them and all men. And hence they are very bad company, for they can talk about nothing but the praises of wealth.

That is true, he said.

Yes, that is very true, but may I ask another question?—What do you consider to be the greatest blessing which you have reaped from your wealth?

One, he said, of which I could not expect easily to convince others. For let me tell you, Socrates, that when a man thinks himself to be near death, fears and cares enter into his mind which he never had before; the tales of a world below and the punishment which is exacted there of deeds done here were once a laughing matter to him, but now he is tormented with the thought that they may be true: either from the weakness of age, or because he is now drawing nearer to that other place, he has a clearer view of these things; suspicions and alarms crowd thickly upon him, and he begins to reflect and consider what wrongs he has done to others. And when he finds that the sum of his transgressions is great he will many a time like a child start up in his sleep for fear, and he is filled with dark forebodings. But to him who is conscious of no sin, sweet hope, as Pindar charmingly says, is the kind nurse of his age:

'Hope,' he says, 'cherishes the soul of him who lives in justice and holiness, and is the nurse of his age and the companion of his journey;—hope which is mightiest to sway the restless soul of man.'

How admirable are his words! And the great blessing of riches, I do not say to every man, but to a good man, is, that he has had no occasion to deceive or to defraud others, either intentionally or unintentionally; and when he departs to the world below he is not in any apprehension about offerings due to the gods or debts which he owes to men. Now to this peace of mind the possession of wealth greatly contributes; and therefore I say, that, setting one thing against another, of the many advantages which wealth has to give, to a man of sense this is in my opinion the greatest.

Well said, Cephalus, I replied; but as concerning justice, what is it?—to speak the truth and to pay your debts—no more than this? And even to this are there not exceptions? Suppose that a friend when in his right mind has deposited arms with me and he asks for them when he is not in his right mind, ought I to give them back to him? No one would say that I ought or that I should be right in doing so, any more than they would say that I ought always to speak the truth to one who is in his condition.

You are quite right, he replied.

But then, I said, speaking the truth and paying your debts is not a correct definition of justice.

Quite correct, Socrates, if Simonides is to be believed, said Polemarchus interposing.

I fear, said Cephalus, that I must go now, for I have to look after the sacrifices, and I hand over the argument to Polemarchus and the company.

Is not Polemarchus your heir? I said.

To be sure, he answered, and went away laughing to the sacrifices.

Tell me then, O thou heir of the argument, what did Simonides say, and according to you truly say, about justice?

He said that the repayment of a debt is just, and in saying so he appears to me to be right.

I should be sorry to doubt the word of such a wise and inspired man, but his meaning, though probably clear to you, is the reverse of clear to me. For he certainly does not mean, as we were just now saying, that I ought to return a deposit of arms or of anything else to one who asks for it when he is not in his right senses; and yet a deposit cannot be denied to be a debt.

True.

Then when the person who asks me is not in his right mind I am by no means to make the return?

Certainly not.

When Simonides said that the repayment of a debt was justice, he did not mean to include that case?

Certainly not; for he thinks that a friend ought always to do good to a friend and never evil.

You mean that the return of a deposit of gold which is to the injury of the receiver, if the two parties are friends, is not the repayment of a debt,—that is what you would imagine him to say?

Yes.

And are enemies also to receive what we owe to them?

To be sure, he said, they are to receive what we owe them, and an enemy, as I take it, owes to an enemy that which is due or proper to him—that is to say, evil.

Simonides, then, after the manner of poets, would seem to have spoken darkly of the nature of justice; for he really meant to say that justice is the giving to each man what is proper to him, and this he termed a debt.

That must have been his meaning, he said.

By heaven! I replied; and if we asked him what due or proper thing is given by medicine, and to whom, what answer do you think that he would make to us?

He would surely reply that medicine gives drugs and meat and drink to human bodies.

And what due or proper thing is given by cookery, and to what?

Seasoning to food.

And what is that which justice gives, and to whom?

If, Socrates, we are to be guided at all by the analogy of the preceding instances, then justice is the art which gives good to friends and evil to enemies.

That is his meaning then?

I think so.

And who is best able to do good to his friends and evil to his enemies in time of sickness?

The physician.

Or when they are on a voyage, amid the perils of the sea?

The pilot.

And in what sort of actions or with a view to what result is the just man most able to do harm to his enemy and good to his friend?

In going to war against the one and in making alliances with the other.

But when a man is well, my dear Polemarchus, there is no need of a physician?

No.

And he who is not on a voyage has no need of a pilot?

No.

Then in time of peace justice will be of no use?

I am very far from thinking so.

You think that justice may be of use in peace as well as in war?

Yes.`,
},{
name: "The Call of the Wild",
author: "Jack London",
text: `Into the Primitive.

“Old longings nomadic leap,
Chafing at custom’s chain;
Again from its brumal sleep
Wakens the ferine strain.”

Buck did not read the newspapers, or he would have known that trouble was brewing, not alone for himself, but for every tide-water dog, strong of muscle and with warm, long hair, from Puget Sound to San Diego. Because men, groping in the Arctic darkness, had found a yellow metal, and because steamship and transportation companies were booming the find, thousands of men were rushing into the Northland. These men wanted dogs, and the dogs they wanted were heavy dogs, with strong muscles by which to toil, and furry coats to protect them from the frost.

Buck lived at a big house in the sun-kissed Santa Clara Valley. Judge Miller’s place, it was called. It stood back from the road, half hidden among the trees, through which glimpses could be caught of the wide cool veranda that ran around its four sides. The house was approached by gravelled driveways which wound about through wide-spreading lawns and under the interlacing boughs of tall poplars. At the rear things were on even a more spacious scale than at the front. There were great stables, where a dozen grooms and boys held forth, rows of vine-clad servants’ cottages, an endless and orderly array of outhouses, long grape arbors, green pastures, orchards, and berry patches. Then there was the pumping plant for the artesian well, and the big cement tank where Judge Miller’s boys took their morning plunge and kept cool in the hot afternoon.

And over this great demesne Buck ruled. Here he was born, and here he had lived the four years of his life. It was true, there were other dogs, There could not but be other dogs on so vast a place, but they did not count. They came and went, resided in the populous kennels, or lived obscurely in the recesses of the house after the fashion of Toots, the Japanese pug, or Ysabel, the Mexican hairless,—strange creatures that rarely put nose out of doors or set foot to ground. On the other hand, there were the fox terriers, a score of them at least, who yelped fearful promises at Toots and Ysabel looking out of the windows at them and protected by a legion of housemaids armed with brooms and mops.

But Buck was neither house-dog nor kennel-dog. The whole realm was his. He plunged into the swimming tank or went hunting with the Judge’s sons; he escorted Mollie and Alice, the Judge’s daughters, on long twilight or early morning rambles; on wintry nights he lay at the Judge’s feet before the roaring library fire; he carried the Judge’s grandsons on his back, or rolled them in the grass, and guarded their footsteps through wild adventures down to the fountain in the stable yard, and even beyond, where the paddocks were, and the berry patches. Among the terriers he stalked imperiously, and Toots and Ysabel he utterly ignored, for he was king,—king over all creeping, crawling, flying things of Judge Miller’s place, humans included.

His father, Elmo, a huge St. Bernard, had been the Judge’s inseparable companion, and Buck bid fair to follow in the way of his father. He was not so large,—he weighed only one hundred and forty pounds,—for his mother, Shep, had been a Scotch shepherd dog. Nevertheless, one hundred and forty pounds, to which was added the dignity that comes of good living and universal respect, enabled him to carry himself in right royal fashion. During the four years since his puppyhood he had lived the life of a sated aristocrat; he had a fine pride in himself, was even a trifle egotistical, as country gentlemen sometimes become because of their insular situation. But he had saved himself by not becoming a mere pampered house-dog. Hunting and kindred outdoor delights had kept down the fat and hardened his muscles; and to him, as to the cold-tubbing races, the love of water had been a tonic and a health preserver.

And this was the manner of dog Buck was in the fall of 1897, when the Klondike strike dragged men from all the world into the frozen North. But Buck did not read the newspapers, and he did not know that Manuel, one of the gardener’s helpers, was an undesirable acquaintance. Manuel had one besetting sin. He loved to play Chinese lottery. Also, in his gambling, he had one besetting weakness—faith in a system; and this made his damnation certain. For to play a system requires money, while the wages of a gardener’s helper do not lap over the needs of a wife and numerous progeny.

The Judge was at a meeting of the Raisin Growers’ Association, and the boys were busy organizing an athletic club, on the memorable night of Manuel’s treachery. No one saw him and Buck go off through the orchard on what Buck imagined was merely a stroll. And with the exception of a solitary man, no one saw them arrive at the little flag station known as College Park. This man talked with Manuel, and money chinked between them.

“You might wrap up the goods before you deliver ’m,” the stranger said gruffly, and Manuel doubled a piece of stout rope around Buck’s neck under the collar.

“Twist it, an’ you’ll choke ’m plentee,” said Manuel, and the stranger grunted a ready affirmative.

Buck had accepted the rope with quiet dignity. To be sure, it was an unwonted performance: but he had learned to trust in men he knew, and to give them credit for a wisdom that outreached his own. But when the ends of the rope were placed in the stranger’s hands, he growled menacingly. He had merely intimated his displeasure, in his pride believing that to intimate was to command. But to his surprise the rope tightened around his neck, shutting off his breath. In quick rage he sprang at the man, who met him halfway, grappled him close by the throat, and with a deft twist threw him over on his back. Then the rope tightened mercilessly, while Buck struggled in a fury, his tongue lolling out of his mouth and his great chest panting futilely. Never in all his life had he been so vilely treated, and never in all his life had he been so angry. But his strength ebbed, his eyes glazed, and he knew nothing when the train was flagged and the two men threw him into the baggage car.

The next he knew, he was dimly aware that his tongue was hurting and that he was being jolted along in some kind of a conveyance. The hoarse shriek of a locomotive whistling a crossing told him where he was. He had travelled too often with the Judge not to know the sensation of riding in a baggage car. He opened his eyes, and into them came the unbridled anger of a kidnapped king. The man sprang for his throat, but Buck was too quick for him. His jaws closed on the hand, nor did they relax till his senses were choked out of him once more.

“Yep, has fits,” the man said, hiding his mangled hand from the baggageman, who had been attracted by the sounds of struggle. “I’m takin’ ’m up for the boss to ’Frisco. A crack dog-doctor there thinks that he can cure ’m.”

Concerning that night’s ride, the man spoke most eloquently for himself, in a little shed back of a saloon on the San Francisco water front.

“All I get is fifty for it,” he grumbled; “an’ I wouldn’t do it over for a thousand, cold cash.”

His hand was wrapped in a bloody handkerchief, and the right trouser leg was ripped from knee to ankle.

“How much did the other mug get?” the saloon-keeper demanded.

“A hundred,” was the reply. “Wouldn’t take a sou less, so help me.”

“That makes a hundred and fifty,” the saloon-keeper calculated; “and he’s worth it, or I’m a squarehead.”

The kidnapper undid the bloody wrappings and looked at his lacerated hand. “If I don’t get the hydrophoby—”

“It’ll be because you was born to hang,” laughed the saloon-keeper. “Here, lend me a hand before you pull your freight,” he added.

Dazed, suffering intolerable pain from throat and tongue, with the life half throttled out of him, Buck attempted to face his tormentors. But he was thrown down and choked repeatedly, till they succeeded in filing the heavy brass collar from off his neck. Then the rope was removed, and he was flung into a cagelike crate.

There he lay for the remainder of the weary night, nursing his wrath and wounded pride. He could not understand what it all meant. What did they want with him, these strange men? Why were they keeping him pent up in this narrow crate? He did not know why, but he felt oppressed by the vague sense of impending calamity. Several times during the night he sprang to his feet when the shed door rattled open, expecting to see the Judge, or the boys at least. But each time it was the bulging face of the saloon-keeper that peered in at him by the sickly light of a tallow candle. And each time the joyful bark that trembled in Buck’s throat was twisted into a savage growl.

But the saloon-keeper let him alone, and in the morning four men entered and picked up the crate. More tormentors, Buck decided, for they were evil-looking creatures, ragged and unkempt; and he stormed and raged at them through the bars. They only laughed and poked sticks at him, which he promptly assailed with his teeth till he realized that that was what they wanted. Whereupon he lay down sullenly and allowed the crate to be lifted into a wagon. Then he, and the crate in which he was imprisoned, began a passage through many hands. Clerks in the express office took charge of him; he was carted about in another wagon; a truck carried him, with an assortment of boxes and parcels, upon a ferry steamer; he was trucked off the steamer into a great railway depot, and finally he was deposited in an express car.

For two days and nights this express car was dragged along at the tail of shrieking locomotives; and for two days and nights Buck neither ate nor drank. In his anger he had met the first advances of the express messengers with growls, and they had retaliated by teasing him. When he flung himself against the bars, quivering and frothing, they laughed at him and taunted him. They growled and barked like detestable dogs, mewed, and flapped their arms and crowed. It was all very silly, he knew; but therefore the more outrage to his dignity, and his anger waxed and waxed. He did not mind the hunger so much, but the lack of water caused him severe suffering and fanned his wrath to fever-pitch. For that matter, high-strung and finely sensitive, the ill treatment had flung him into a fever, which was fed by the inflammation of his parched and swollen throat and tongue.

He was glad for one thing: the rope was off his neck. That had given them an unfair advantage; but now that it was off, he would show them. They would never get another rope around his neck. Upon that he was resolved. For two days and nights he neither ate nor drank, and during those two days and nights of torment, he accumulated a fund of wrath that boded ill for whoever first fell foul of him. His eyes turned blood-shot, and he was metamorphosed into a raging fiend. So changed was he that the Judge himself would not have recognized him; and the express messengers breathed with relief when they bundled him off the train at Seattle.

Four men gingerly carried the crate from the wagon into a small, high-walled back yard. A stout man, with a red sweater that sagged generously at the neck, came out and signed the book for the driver. That was the man, Buck divined, the next tormentor, and he hurled himself savagely against the bars. The man smiled grimly, and brought a hatchet and a club.

“You ain’t going to take him out now?” the driver asked.

“Sure,” the man replied, driving the hatchet into the crate for a pry.

There was an instantaneous scattering of the four men who had carried it in, and from safe perches on top the wall they prepared to watch the performance.

Buck rushed at the splintering wood, sinking his teeth into it, surging and wrestling with it. Wherever the hatchet fell on the outside, he was there on the inside, snarling and growling, as furiously anxious to get out as the man in the red sweater was calmly intent on getting him out.

“Now, you red-eyed devil,” he said, when he had made an opening sufficient for the passage of Buck’s body. At the same time he dropped the hatchet and shifted the club to his right hand.

And Buck was truly a red-eyed devil, as he drew himself together for the spring, hair bristling, mouth foaming, a mad glitter in his blood-shot eyes. Straight at the man he launched his one hundred and forty pounds of fury, surcharged with the pent passion of two days and nights. In mid air, just as his jaws were about to close on the man, he received a shock that checked his body and brought his teeth together with an agonizing clip. He whirled over, fetching the ground on his back and side. He had never been struck by a club in his life, and did not understand. With a snarl that was part bark and more scream he was again on his feet and launched into the air. And again the shock came and he was brought crushingly to the ground. This time he was aware that it was the club, but his madness knew no caution. A dozen times he charged, and as often the club broke the charge and smashed him down.

After a particularly fierce blow, he crawled to his feet, too dazed to rush. He staggered limply about, the blood flowing from nose and mouth and ears, his beautiful coat sprayed and flecked with bloody slaver. Then the man advanced and deliberately dealt him a frightful blow on the nose. All the pain he had endured was as nothing compared with the exquisite agony of this. With a roar that was almost lionlike in its ferocity, he again hurled himself at the man. But the man, shifting the club from right to left, coolly caught him by the under jaw, at the same time wrenching downward and backward. Buck described a complete circle in the air, and half of another, then crashed to the ground on his head and chest.

For the last time he rushed. The man struck the shrewd blow he had purposely withheld for so long, and Buck crumpled up and went down, knocked utterly senseless.

“He’s no slouch at dog-breakin’, that’s wot I say,” one of the men on the wall cried enthusiastically.

“Druther break cayuses any day, and twice on Sundays,” was the reply of the driver, as he climbed on the wagon and started the horses.

Buck’s senses came back to him, but not his strength. He lay where he had fallen, and from there he watched the man in the red sweater.

“‘Answers to the name of Buck,’” the man soliloquized, quoting from the saloon-keeper’s letter which had announced the consignment of the crate and contents. “Well, Buck, my boy,” he went on in a genial voice, “we’ve had our little ruction, and the best thing we can do is to let it go at that. You’ve learned your place, and I know mine. Be a good dog and all ’ll go well and the goose hang high. Be a bad dog, and I’ll whale the stuffin’ outa you. Understand?”

As he spoke he fearlessly patted the head he had so mercilessly pounded, and though Buck’s hair involuntarily bristled at touch of the hand, he endured it without protest. When the man brought him water he drank eagerly, and later bolted a generous meal of raw meat, chunk by chunk, from the man’s hand.`,
},{
name: "Siddhartha",
author: "Hermann Hesse",
text: `THE SON OF THE BRAHMAN
In the shade of the house, in the sunshine of the riverbank near the boats, in the shade of the Sal-wood forest, in the shade of the fig tree is where Siddhartha grew up, the handsome son of the Brahman, the young falcon, together with his friend Govinda, son of a Brahman. The sun tanned his light shoulders by the banks of the river when bathing, performing the sacred ablutions, the sacred offerings. In the mango grove, shade poured into his black eyes, when playing as a boy, when his mother sang, when the sacred offerings were made, when his father, the scholar, taught him, when the wise men talked. For a long time, Siddhartha had been partaking in the discussions of the wise men, practising debate with Govinda, practising with Govinda the art of reflection, the service of meditation. He already knew how to speak the Om silently, the word of words, to speak it silently into himself while inhaling, to speak it silently out of himself while exhaling, with all the concentration of his soul, the forehead surrounded by the glow of the clear-thinking spirit. He already knew to feel Atman in the depths of his being, indestructible, one with the universe.

Joy leapt in his father's heart for his son who was quick to learn, thirsty for knowledge; he saw him growing up to become great wise man and priest, a prince among the Brahmans.

Bliss leapt in his mother's breast when she saw him, when she saw him walking, when she saw him sit down and get up, Siddhartha, strong, handsome, he who was walking on slender legs, greeting her with perfect respect.

Love touched the hearts of the Brahmans' young daughters when Siddhartha walked through the lanes of the town with the luminous forehead, with the eye of a king, with his slim hips.

But more than all the others he was loved by Govinda, his friend, the son of a Brahman. He loved Siddhartha's eye and sweet voice, he loved his walk and the perfect decency of his movements, he loved everything Siddhartha did and said and what he loved most was his spirit, his transcendent, fiery thoughts, his ardent will, his high calling. Govinda knew: he would not become a common Brahman, not a lazy official in charge of offerings; not a greedy merchant with magic spells; not a vain, vacuous speaker; not a mean, deceitful priest; and also not a decent, stupid sheep in the herd of the many. No, and he, Govinda, as well did not want to become one of those, not one of those tens of thousands of Brahmans. He wanted to follow Siddhartha, the beloved, the splendid. And in days to come, when Siddhartha would become a god, when he would join the glorious, then Govinda wanted to follow him as his friend, his companion, his servant, his spear-carrier, his shadow.

Siddhartha was thus loved by everyone. He was a source of joy for everybody, he was a delight for them all.

But he, Siddhartha, was not a source of joy for himself, he found no delight in himself. Walking the rosy paths of the fig tree garden, sitting in the bluish shade of the grove of contemplation, washing his limbs daily in the bath of repentance, sacrificing in the dim shade of the mango forest, his gestures of perfect decency, everyone's love and joy, he still lacked all joy in his heart. Dreams and restless thoughts came into his mind, flowing from the water of the river, sparkling from the stars of the night, melting from the beams of the sun, dreams came to him and a restlessness of the soul, fuming from the sacrifices, breathing forth from the verses of the Rig-Veda, being infused into him, drop by drop, from the teachings of the old Brahmans.

Siddhartha had started to nurse discontent in himself, he had started to feel that the love of his father and the love of his mother, and also the love of his friend, Govinda, would not bring him joy for ever and ever, would not nurse him, feed him, satisfy him. He had started to suspect that his venerable father and his other teachers, that the wise Brahmans had already revealed to him the most and best of their wisdom, that they had already filled his expecting vessel with their richness, and the vessel was not full, the spirit was not content, the soul was not calm, the heart was not satisfied. The ablutions were good, but they were water, they did not wash off the sin, they did not heal the spirit's thirst, they did not relieve the fear in his heart. The sacrifices and the invocation of the gods were excellent—but was that all? Did the sacrifices give a happy fortune? And what about the gods? Was it really Prajapati who had created the world? Was it not the Atman, He, the only one, the singular one? Were the gods not creations, created like me and you, subject to time, mortal? Was it therefore good, was it right, was it meaningful and the highest occupation to make offerings to the gods? For whom else were offerings to be made, who else was to be worshipped but Him, the only one, the Atman? And where was Atman to be found, where did He reside, where did his eternal heart beat, where else but in one's own self, in its innermost part, in its indestructible part, which everyone had in himself? But where, where was this self, this innermost part, this ultimate part? It was not flesh and bone, it was neither thought nor consciousness, thus the wisest ones taught. So, where, where was it? To reach this place, the self, myself, the Atman, there was another way, which was worthwhile looking for? Alas, and nobody showed this way, nobody knew it, not the father, and not the teachers and wise men, not the holy sacrificial songs! They knew everything, the Brahmans and their holy books, they knew everything, they had taken care of everything and of more than everything, the creation of the world, the origin of speech, of food, of inhaling, of exhaling, the arrangement of the senses, the acts of the gods, they knew infinitely much—but was it valuable to know all of this, not knowing that one and only thing, the most important thing, the solely important thing?

Surely, many verses of the holy books, particularly in the Upanishades of Samaveda, spoke of this innermost and ultimate thing, wonderful verses. "Your soul is the whole world", was written there, and it was written that man in his sleep, in his deep sleep, would meet with his innermost part and would reside in the Atman. Marvellous wisdom was in these verses, all knowledge of the wisest ones had been collected here in magic words, pure as honey collected by bees. No, not to be looked down upon was the tremendous amount of enlightenment which lay here collected and preserved by innumerable generations of wise Brahmans.— But where were the Brahmans, where the priests, where the wise men or penitents, who had succeeded in not just knowing this deepest of all knowledge but also to live it? Where was the knowledgeable one who wove his spell to bring his familiarity with the Atman out of the sleep into the state of being awake, into the life, into every step of the way, into word and deed? Siddhartha knew many venerable Brahmans, chiefly his father, the pure one, the scholar, the most venerable one. His father was to be admired, quiet and noble were his manners, pure his life, wise his words, delicate and noble thoughts lived behind its brow —but even he, who knew so much, did he live in blissfulness, did he have peace, was he not also just a searching man, a thirsty man? Did he not, again and again, have to drink from holy sources, as a thirsty man, from the offerings, from the books, from the disputes of the Brahmans? Why did he, the irreproachable one, have to wash off sins every day, strive for a cleansing every day, over and over every day? Was not Atman in him, did not the pristine source spring from his heart? It had to be found, the pristine source in one's own self, it had to be possessed! Everything else was searching, was a detour, was getting lost.

Thus were Siddhartha's thoughts, this was his thirst, this was his suffering.

Often he spoke to himself from a Chandogya-Upanishad the words: "Truly, the name of the Brahman is satyam—verily, he who knows such a thing, will enter the heavenly world every day." Often, it seemed near, the heavenly world, but never he had reached it completely, never he had quenched the ultimate thirst. And among all the wise and wisest men, he knew and whose instructions he had received, among all of them there was no one, who had reached it completely, the heavenly world, who had quenched it completely, the eternal thirst.

"Govinda," Siddhartha spoke to his friend, "Govinda, my dear, come with me under the Banyan tree, let's practise meditation."

They went to the Banyan tree, they sat down, Siddhartha right here, Govinda twenty paces away. While putting himself down, ready to speak the Om, Siddhartha repeated murmuring the verse:

Om is the bow, the arrow is soul, The Brahman is the arrow's target, That one should incessantly hit.

After the usual time of the exercise in meditation had passed, Govinda rose. The evening had come, it was time to perform the evening's ablution. He called Siddhartha's name. Siddhartha did not answer. Siddhartha sat there lost in thought, his eyes were rigidly focused towards a very distant target, the tip of his tongue was protruding a little between the teeth, he seemed not to breathe. Thus sat he, wrapped up in contemplation, thinking Om, his soul sent after the Brahman as an arrow.

Once, Samanas had travelled through Siddhartha's town, ascetics on a pilgrimage, three skinny, withered men, neither old nor young, with dusty and bloody shoulders, almost naked, scorched by the sun, surrounded by loneliness, strangers and enemies to the world, strangers and lank jackals in the realm of humans. Behind them blew a hot scent of quiet passion, of destructive service, of merciless self-denial.

In the evening, after the hour of contemplation, Siddhartha spoke to Govinda: "Early tomorrow morning, my friend, Siddhartha will go to the Samanas. He will become a Samana."

Govinda turned pale, when he heard these words and read the decision in the motionless face of his friend, unstoppable like the arrow shot from the bow. Soon and with the first glance, Govinda realized: Now it is beginning, now Siddhartha is taking his own way, now his fate is beginning to sprout, and with his, my own. And he turned pale like a dry banana-skin.

"O Siddhartha," he exclaimed, "will your father permit you to do that?"

Siddhartha looked over as if he was just waking up. Arrow-fast he read in Govinda's soul, read the fear, read the submission.

"O Govinda," he spoke quietly, "let's not waste words. Tomorrow, at daybreak I will begin the life of the Samanas. Speak no more of it."

Siddhartha entered the chamber, where his father was sitting on a mat of bast, and stepped behind his father and remained standing there, until his father felt that someone was standing behind him. Quoth the Brahman: "Is that you, Siddhartha? Then say what you came to say."

Quoth Siddhartha: "With your permission, my father. I came to tell you that it is my longing to leave your house tomorrow and go to the ascetics. My desire is to become a Samana. May my father not oppose this."

The Brahman fell silent, and remained silent for so long that the stars in the small window wandered and changed their relative positions, 'ere the silence was broken. Silent and motionless stood the son with his arms folded, silent and motionless sat the father on the mat, and the stars traced their paths in the sky. Then spoke the father: "Not proper it is for a Brahman to speak harsh and angry words. But indignation is in my heart. I wish not to hear this request for a second time from your mouth."

Slowly, the Brahman rose; Siddhartha stood silently, his arms folded.

"What are you waiting for?" asked the father.

Quoth Siddhartha: "You know what."

Indignant, the father left the chamber; indignant, he went to his bed and lay down.

After an hour, since no sleep had come over his eyes, the Brahman stood up, paced to and fro, and left the house. Through the small window of the chamber he looked back inside, and there he saw Siddhartha standing, his arms folded, not moving from his spot. Pale shimmered his bright robe. With anxiety in his heart, the father returned to his bed.

After another hour, since no sleep had come over his eyes, the Brahman stood up again, paced to and fro, walked out of the house and saw that the moon had risen. Through the window of the chamber he looked back inside; there stood Siddhartha, not moving from his spot, his arms folded, moonlight reflecting from his bare shins. With worry in his heart, the father went back to bed.

And he came back after an hour, he came back after two hours, looked through the small window, saw Siddhartha standing, in the moon light, by the light of the stars, in the darkness. And he came back hour after hour, silently, he looked into the chamber, saw him standing in the same place, filled his heart with anger, filled his heart with unrest, filled his heart with anguish, filled it with sadness.

And in the night's last hour, before the day began, he returned, stepped into the room, saw the young man standing there, who seemed tall and like a stranger to him.

"Siddhartha," he spoke, "what are you waiting for?"

"You know what."

"Will you always stand that way and wait, until it'll becomes morning, noon, and evening?"

"I will stand and wait.

"You will become tired, Siddhartha."

"I will become tired."

"You will fall asleep, Siddhartha."

"I will not fall asleep."

"You will die, Siddhartha."

"I will die."

"And would you rather die, than obey your father?"

"Siddhartha has always obeyed his father."

"So will you abandon your plan?"

"Siddhartha will do what his father will tell him to do."

The first light of day shone into the room. The Brahman saw that Siddhartha was trembling softly in his knees. In Siddhartha's face he saw no trembling, his eyes were fixed on a distant spot. Then his father realized that even now Siddhartha no longer dwelt with him in his home, that he had already left him.

The Father touched Siddhartha's shoulder.

"You will," he spoke, "go into the forest and be a Samana. When you'll have found blissfulness in the forest, then come back and teach me to be blissful. If you'll find disappointment, then return and let us once again make offerings to the gods together. Go now and kiss your mother, tell her where you are going to. But for me it is time to go to the river and to perform the first ablution."

He took his hand from the shoulder of his son and went outside. Siddhartha wavered to the side, as he tried to walk. He put his limbs back under control, bowed to his father, and went to his mother to do as his father had said.

As he slowly left on stiff legs in the first light of day the still quiet town, a shadow rose near the last hut, who had crouched there, and joined the pilgrim—Govinda.

"You have come," said Siddhartha and smiled.

"I have come," said Govinda.`,
}]


const splitIntoParagraphs = str => (
  str.split(/(.+)((\r?\n.+)*)/gm).filter(d => d && d.length > 2)
)
const splitIntoSentences = str => {
  const naiveSentences = (str.match( /[^\.!\?]+[\.!\?]+/g ) || []).filter(d => d).map(d => d.trim())

  let holding = []
  let parsedSentences = []
  naiveSentences.forEach((sentence, i) => {
    if (["Ms", "Mrs", "Mr", "Dr"].includes(sentence.split(/ /g).slice(-1)[0].slice(0, -1))) {
      holding.push(sentence)
    } else {
      parsedSentences.push([holding, sentence].join(" "))

      holding = []
    }
  })
  if (holding.length) {
    parsedSentences = [...parsedSentences, ...holding]
  }
  return parsedSentences.filter(d => d)
}

const buckets = range(0, 50, 6)
const parsedSamples = sortBy(
  samples.map(sample => {
    const paragraphs = splitIntoParagraphs(sample.text).map(splitIntoSentences)
    const sentences = flatten(paragraphs).filter(d => d)
    const sentenceLengths = sentences.map(sentence => sentence.split(" ").length)
    const averageLength = mean(sentenceLengths)

    return {
      ...sample,
      paragraphs,
      counts: buckets.map(bucket => (
        sentenceLengths.filter(length => (
          length >= bucket
          && length < bucket + 6
        )).length / sentences.length
      )),
      averageLength,
    }
  }), d => d.averageLength)
console.log(parsedSamples)

export default parsedSamples