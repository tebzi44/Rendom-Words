const element = document.querySelector("#center");
const btn = document.getElementById("btn");

// console.log(randWord)
let array =[
    'bush','bush','certainly','compatriot','convince','cousin','cushin','debt','decent',
    'dodrknob','equal','forefinger','fowl','gate','gifted','howdy','insurance','kind','able','leaf',
    'luggage','länge','merely','mishap','mist','mortal','mutual',//-1-

    'scalability','query','provid','capabilities','community','dozens','weird','draught','excluding',
    'temporary','spurious','overt','confess','involves','feature','troubleshoot','prospective',//-2-

    'rebel','hideous','within','prior','prominent','empathy','revival','inhabit','intransigent','foreigner',
    'throne','pirce','acquisition','freighter','harsh','threshold','vague','proof','interrupt',
    'participant','conform','consists','purpose','headquarter','occasionally','datermine','involve',//-3-

    'native','overall','promote','access','execute','retire','serve','efficiently','just','predictable',
    'compose','assumption','stack','implement','forced','gravel','meek','ruthless','desire','poisonous',
    'obviously','especially','bounce','suffer','definitely','comfirm','tough','struggle',//-4-

    'sequence','thread','estate','handling','ordinance','appal','pronunciation','narrow','ostensible',
    'noteworthy','optional','nowhere','oneself','permanent','strax','vineyard','wage','penniless','residence',
    'obey','pertinent','worst','occur','pillow','shrub','wise','ring finger','wound','sen','overview',
    'major','sedan','suspense','surely','impact','sadden','gradual',//-5-

    'establish','intend','principal','alongside','entrant','preparation','approach','manufacture',
    'in addition to','concatenate','mutable','consider','messy','complicate','store','maintain','applies',
    'subtract','encounter','sample','prohibited','otherwise','get on','break down',//-6-

    'conscientions','datermined','thoughtful','trustworthy','nurse','secretery','excited','confused',
    'frightened','remind','recall','amused','delighted','embarrassed','fed up','homesick','irritated',
    'jealous','pleased','satisfied','accusation','upset','suddenly','cease',//-7-

    'mutiny','knicker','pantyhose','excuse','storage','ruckus','twist','negligence','substantial','fine',
    'hasty','personally','fear','just','fluff','assume','bother','investigation','pretend','ripping',
    'peat','moss','barnacles','cooperation','wheelchair','whole','seed','idly','proper','diligent',
    'grab','slight','halt','lay','sob','surveillance','unharmed','not to mention','snap',//-8-

    'bring up','find out','crowd','put off','cage','unpack','usually','various','utmost','thoroughly',
    'neddle','ahead','figure out','nonsense','fella','enjoy','snap','mine','measure','destruct','beyond',
    'sucker','hit the spot','blow up','fair','square','bitter','enemiy','delectable','odor','shack',
    'hand out',"tryin'",'loyal','nasty','same to you','aside','critic','do you mind?','trample','fool',
    'pointless','ridiculous','disguise','hire','whine','assignment','grade','rascal','triumph','such as',
    'for instance','bludgeon','often',//-9-

    'yell','whisper','passion','merrily','merchant','lean','kindness','illness','hoot','impress','highly',
    'gruel','hesitate','grass','gadfly','fur-coat','frost','explain','fellow','envelope','tremble',
    'entrance','delay','deer','dense','crunch','deny',//-10-

    'patch up','flavor','dental floss','stuff','interjection','booty','neat','even','bunch','rusty','tail',
    "oughta'",'though','meanwhile','suppose','toss','jovial','pearl','delinquent','obvious','concern',
    'no charge','mess','runny','riot',//-11-

    'pool','major','branch','competitive','strict','representative','dial','assign','durability','absorb',
    'capable','swap','preparation','characterise','comprise','district','adjacent','dispute',//-12-

    'pillar','guilt','pry','remedy','swing','absence','familiar','satisfactory','fence','neither',
    'obtain','odd','fluid','approximately','resistance','breakage','premium','insulate','reside',
    'estimate','worth','assets','rapid','relatively','interact','intersect','current','honest','rage',//-13-

    'sequel','stiff','wrangle','trim','wry','venal','compare','considerate','crawl','divers','edible',
    'estimation','wayman','lass','operate','manly','beast','whatever','anymore','wistful',
    'uncharacteristically','outcast','supposed to be','snuck','draw attention','shore','sway','pluck',
    'thrill','carrie','ravine','over','consider','entire','suspicious','sweat','actually',//-14-

    'pal','buddy','moron','the break of dawn','commend','suppose','curious','regret','approval',
    'prevail','bless','tranquility','maturity','nerly','barehead','hitherto','worn',
    'scuffl','rather','opportunity','addition','particularly','aging','plenty','in mind',
    'exclamation','certain','compulsory','admit','whom?','host','eventually','immensely','adjust',
    'unfortunately','distinguish','certainly',//-15-

    'stroll', 'seldom','weirdness','reflection','steering','fault','guess','whose?',
    'expect','relative','reveal','carriage','bury','including','admire','contest','run out of',
    'steal','treasure','despite','sour','demand','complain','complain','neither of them','fond of',
    'keep on','fold','unbearable','accurate','kind of','collect','bark','flat','right','shout',
    'take a sip','sticky','temple','rarely','the rest of','mistake','line up'//-16-
];


btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * array.length);
    let randWord = array[random];

    element.innerHTML = (randWord);
});