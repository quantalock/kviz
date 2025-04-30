const otazky = [
  {
    id: 1,
    obtiznost: 3,
    nazev: "Mlynářův kámen",
    otazka: "Nad Moravanským potokem nedaleko Dubic je krásný výhled na údolí Labe z vyhlídky, která připomíná zašlé řemeslo.",
    moznosti: ["Kovářský kámen", "Mlynářský kámen", "Uhelný kámen"],
    spravna: "Mlynářský kámen"
  },
  {
    id: 2,
    obtiznost: 1,
    nazev: "Milešovka",
    otazka: "Královna středohoří dosahuje výšky 837 m n.m. Dlouho byla považována za nejvyšší horu Čech.",
    moznosti: ["Milešovka", "Albertovka", "Kletečná"],
    spravna: "Milešovka"
  },
  {
    id: 3,
    obtiznost: 2,
    nazev: "Kletečná",
    otazka: "Sestra Milešovky, Malá Milešovka, to jsou jiná jména této 706 m n.m. vysoké hory se zalesněnou špičkou.",
    moznosti: ["Panna", "Vysoká", "Kletečná"],
    spravna: "Kletečná"
  },
    {
    id: 4,
    obtiznost: 1,
    nazev: "Porta Bohemica",
    otazka: "Brána Čech je rulový kaňon Labe mezi Žernoseky a Libochovany. Latinský název jistě znáte také. Vyhlídka je tady nádherná.",
    moznosti: ["Bohemicana", "Porta Bohemica", "Porta Cechia"],
    spravna: "Porta Bohemica"
  },
  {
    id: 5,
    obtiznost: 2,
    nazev: "Lovoš",
    otazka: "Nad Lovosicemi se tyčí dvojvršek. Menší se jmenuje Kibička, na název většího se ptáme. Doshuje 570 m n.m. a je tu turistická chata.",
    moznosti: ["Lovoš", "Ostrý", "Hradiště"],
    spravna: "Lovoš"
  },
  {
    id: 6,
    obtiznost: 3,
    nazev: "Boreč",
    otazka: "Ventaroly, ze kterých za mrazivých dní dýmá teplý vzduch nasátý na úpatí, jsou ozdobou tohoto 450 m n.m. vysokého kopce nedaleko Lovosic.",
    moznosti: ["Kamýk", "Sutom", "Boreč"],
    spravna: "Boreč"
  },
  {
    id: 7,
    obtiznost: 3,
    nazev: "Holý vrch",
    otazka: "Nad obcí Sutom bývala jedinečná vyhlídka na Sutomském vrchu, který je dnes zarostlý. Jeho roli převzal nedaleký 458 m n.m. vysoký kopec.",
    moznosti: ["Plešivec", "Pustý vrch", "Holý vrch"],
    spravna: "Holý vrch"
  },
  {
    id: 8,
    obtiznost: 2,
    nazev: "Košťál",
    otazka: "Název hradu a kopce se občas plete. Co je ale jisté - kopec leží nad Třebenicemi, dosahuje 481 m n.m. a je odsud nádherný výhled.",
    moznosti: ["Oltářík", "Košťál", "Ostrý"],
    spravna: "Košťál"
  },
  {
    id: 9,
    obtiznost: 3,
    nazev: "Plešivec",
    otazka: "Abyste se dostali na tento 477 m n.m. vysoký vrch jihozápadně od Vlastislavy, musíte přelézt plot obory. Holá homole nabízí kruhový výhled.",
    moznosti: ["Holý vrch", "Plešivec", "Pustý vrch"],
    spravna: "Plešivec"
  },
  {
    id: 10,
    obtiznost: 2,
    nazev: "Oltářík",
    otazka: "Bájemi opředená zřícenina s nejasným původem názvu se tyčí nad obcí Děkovka. Kopec se jmenuje Hrádek, my se ale ptáme na jméno hradu.",
    moznosti: ["Ostrý", "Oltářík", "Panna"],
    spravna: "Oltářík"
  },
  {
    id: 11,
    obtiznost: 2,
    nazev: "Lipská hora",
    otazka: "Tvarem připomíná žraloží ploutev. S 689 m n.m. je osmou nejvyšší horou Českého středohoří. Roste tu mj. ve velkém medvědice lékařská.",
    moznosti: ["Lipská hora", "Solanská hora", "Doubravská hora"],
    spravna: "Lipská hora"
  },
  {
    id: 12,
    obtiznost: 3,
    nazev: "Hrad Ostrý",
    otazka: "Název hradu i 553 m n.m. vysokého kopce je odvozen od jeho tvaru. Leží nedaleko Milešova a je odsud výhled na Vlastislavskou kotlinu.",
    moznosti: ["Kalich", "Oltářík", "Ostrý"],
    spravna: "Ostrý"
  },
  {
    id: 13,
    obtiznost: 3,
    nazev: "Solanská hora",
    otazka: "Trojvrší, jehož východní výběžek se jmenuje Třtín a prostřední Dlouhý vrch. Nejvyšší (638 m n.m.) je ten západní, na jehož jméno se ptáme.",
    moznosti: ["Solanská hora", "Trojhora", "Vraník"],
    spravna: "Solanská hora"
  },
  {
    id: 14,
    obtiznost: 2,
    nazev: "Tři kříže",
    otazka: "Nedaleký vrchol se jmenuje Kalvárie, jak se říká tomuto kouzelnému místu u vstupu do Brány Čech není těžké uhodnout.",
    moznosti: ["Tři sestry", "Tři kříže", "Tři studánky"],
    spravna: "Tři kříže"
  },
  {
    id: 15,
    obtiznost: 1,
    nazev: "Radobýl",
    otazka: "Karel Hynek Mácha seděl na tomto kopci, když v nedalekých Litoměřicích vypukl požár. Obdivovat záři vycházejícího slunce můžete i vy.",
    moznosti: ["Radobýl", "Říp", "Varhošť"],
    spravna: "Radobýl"
  },
  {
    id: 16,
    obtiznost: 2,
    nazev: "Kamýk",
    otazka: "Hrad, kde se střídá bílý a černý kámen, je díky typickému tvaru skvělým orientačním bodem na pravém břehu Labe nad Litoměřicemi.",
    moznosti: ["Panna", "Kamýk", "Kalich"],
    spravna: "Kamýk"
  },
  {
    id: 17,
    obtiznost: 3,
    nazev: "Plešivec",
    otazka: "Ohromné kamené moře, ve kterém se drží led i v létě, je poznávacím znakem tohoto 510 m n.m. vysokého vrchu nedaleko Litoměřic.",
    moznosti: ["Hradiště", "Strážiště", "Plešivec"],
    spravna: "Plešivec"
  },
  {
    id: 18,
    obtiznost: 1,
    nazev: "Raná",
    otazka: "Když prozradíme, že je tento 457 m n.m. vysoký kopec u Loun rájem pro bezmotorové létaní, nemusíme asi více dodávat.",
    moznosti: ["Raná", "Milá", "Číčov"],
    spravna: "Raná"
  },
  {
    id: 19,
    obtiznost: 2,
    nazev: "Oblík",
    otazka: "Nejvyšší (509 m n.m.) a nejmohutnější z trojvrší severně od Loun. Těm zbylým dvěma se říká Dědek a Bába, je tu nefalšovaná step.",
    moznosti: ["Milá", "Oblík", "Raná"],
    spravna: "Oblík"
  },
  {
    id: 20,
    obtiznost: 2,
    nazev: "Hněvín",
    otazka: "Tento hrad nad Mostem viděl veliké změny krajiny pod sebou, včetně stěhování kostela. Je tu plno krásných výhledů.",
    moznosti: ["Děvín", "Levín", "Hněvín"],
    spravna: "Hněvín"
  },
  {
    id: 21,
    obtiznost: 2,
    nazev: "Zlatník",
    otazka: "Na pravém břehu Bíliny za obcí Obrnice je tento 522 m n.m. vysoký vrch, jehož název připomíná drahý kov.",
    moznosti: ["Zlatník", "Stříbrník", "Mědník"],
    spravna: "Zlatník"
  },
  {
    id: 22,
    obtiznost: 1,
    nazev: "Bořeň",
    otazka: "Unikátní 539 m n.m. vysoký skalní suk se tyčí nad Bílinou. Je srovnáván s Ďábelskou věží ve Wyomingu. Jedna z ikon Českého středohoří.",
    moznosti: ["Košťál", "Bořeň", "Špičák"],
    spravna: "Bořeň"
  },
  {
    id: 23,
    obtiznost: 2,
    nazev: "Doubravská hora",
    otazka: "Nad Teplicemi je časté výletní místo místních obyvatel. Vrch (393 m n.m.) dostal jméno od jednoho druhu stromů.",
    moznosti: ["Smrk", "Buková hora", "Doubravská hora"],
    spravna: "Doubravská hora"
  },
  {
    id: 24,
    obtiznost: 1,
    nazev: "Mariánská skála",
    otazka: "Dominanta Ústí nad Labem, ve které je i velký lom. Je na levém břehu Labe, má bohatou historii a je z ní výhled nejen na Střekov.",
    moznosti: ["Mariánská skála", "Annenská skála", "Eliščina skála"],
    spravna: "Mariánská skála"
  },
  {
    id: 25,
    obtiznost: 2,
    nazev: "Blansko",
    otazka: "Zřícenina hradu (545 m n.m.) je ve skvělé kondici. Dostanete se sem z Ústí nad Labem od konečné trolejbusu na Skalce.",
    moznosti: ["Slavošov", "Blansko", "Výrov"],
    spravna: "Blansko"
  },
  {
    id: 26,
    obtiznost: 3,
    nazev: "Deblík",
    otazka: "Naproti Dubickému kostelíku přes Labe je kopec silně poznamenaný těžbou. Má více vrcholů, takových růžků, z většiny je výhled do údolí.",
    moznosti: ["Ostrý", "Matrý", "Deblík"],
    spravna: "Deblík"
  },
  {
    id: 27,
    obtiznost: 2,
    nazev: "Kalich",
    otazka: "Tento hrad (536 m n.m.) stavěl Jan Žižka, tedy jeho lidé. Vymyšlený je chytře a výhled z něho je daleko do kraje. Chodí se sem z Třebušína.",
    moznosti: ["Kalich", "Tábor", "Litýš"],
    spravna: "Kalich"
  },
  {
    id: 28,
    obtiznost: 1,
    nazev: "Varhošť",
    otazka: "Rozhledna nemění z dálky ráz kopce. Ten je s 638 m n.m. výraznou dominantou severně od Litoměřic. Výhled je jeden z nejhezčích ve Středohoří.",
    moznosti: ["Strážiště", "Varhošť", "Pahorek"],
    spravna: "Varhošť"
  },
  {
    id: 29,
    obtiznost: 2,
    nazev: "Vrabinec",
    otazka: "Vyvřelé sopouchy a na nich býval hrad (400 m n.m.). Místo u Těchlovic je opředeno řadou pověstí, nahoru se budete škrábat s pomocí řetězů.",
    moznosti: ["Stříbrný roh", "Klobouk", "Vrabinec"],
    spravna: "Vrabinec"
  },
  {
    id: 30,
    obtiznost: 3,
    nazev: "Chmelník",
    otazka: "Jihozápadně od Děčína jsou tři kopce přesahující 500 m n.m. Lotarův vrch, Klobouk a ten, na který se ptáme. Jeho název jistě potěší pivaře.",
    moznosti: ["Chmelník", "Sladovník", "Pěnovník"],
    spravna: "Chmelník"
  },
  {
    id: 31,
    obtiznost: 3,
    nazev: "Javorský vrch",
    otazka: "Z nejvyššího vrchu Ústeckého středohoří (617 m n.m.) jsou vidět i Krkonoše. Kopec sám není moc známý, je to mírná táhlina bez vrcholu.",
    moznosti: ["Dubovský vrch", "Javorský vrch", "Habrovský vrch"],
    spravna: "Javorský vrch"
  },
  {
    id: 32,
    obtiznost: 2,
    nazev: "Lysá hora",
    otazka: "Přírodní rezervace s konikleci se jmenuje Holý vrch, kopec (577 m n.m.) má ale jiné jméno. Vidět tu můžete skály (Učitel a žáci) a pást se ovce.",
    moznosti: ["Holá hora", "Skalnatá hora", "Lysá hora"],
    spravna: "Lysá hora"
  },
  {
    id: 33,
    obtiznost: 3,
    nazev: "Laffitova vyhlídka",
    otazka: "Tato vyhlídka je na úbočí Křížové hory nad obcí Pohořany u Žitenic. Původ názvu neznám, je tu krásné posezení s výhledem do kraje.",
    moznosti: ["Laffitova vyhlídka", "Berettova vyhlídka", "Pokaryho vyhlídka"],
    spravna: "Laffitova vyhlídka"
  },
  {
    id: 34,
    obtiznost: 2,
    nazev: "Hradiště",
    otazka: "Nad obcí Hlinná se strmí vrch (545 m n.m.), který můžete obdivovat už cestou do Litoměřic. Svým nezaměnitelným tvarem na sebe hned upozorní.",
    moznosti: ["Lázek", "Hradiště", "Pahorek"],
    spravna: "Hradiště"
  },
  {
    id: 35,
    obtiznost: 2,
    nazev: "Krkavčí skála",
    otazka: "Jihozápadní výběžek Varhoště je tvořený mohutnou skálou, která dostala ptačí jméno. Nad Tlučeňským potokem se zvedá do výše 445 m n.m.",
    moznosti: ["Skřivánčí vrch", "Sojčí skaliska", "Krkavčí skála"],
    spravna: "Krkavčí skála"
  },
  {
    id: 36,
    obtiznost: 3,
    nazev: "Poradní skála",
    otazka: "Skaliska nad Sebuzínem ohrazují plošinu dříve zvanou Macha. Naše místo připomíná práci, se skvostným výhledem na Kostomlatské středohoří.",
    moznosti: ["Poradní skála", "Porada", "Poradiště"],
    spravna: "Poradní skála"
  },
  {
    id: 37,
    obtiznost: 1,
    nazev: "Vysoký Ostrý",
    otazka: "Špička jižně od Ústí, kterou z tohoto města uvidíte skoro odevšad. Má charakteristický tvar. Je to jedna z nejhezčích vyhlídek ve Středohoří vůbec.",
    moznosti: ["Vysoký Tupý", "Vysoký Ostrý", "Vysoký Jalovec"],
    spravna: "Vysoký Ostrý"
  },
  {
    id: 38,
    obtiznost: 1,
    nazev: "Střekov",
    otazka: "Hrad nad ústeckými zdymadly. Nechal ho postavit Jan Lucemburský. Každý duben můžete obdivovat tařici na skalách spadajících pod hrad.",
    moznosti: ["Bekov", "Rekov", "Střekov"],
    spravna: "Střekov"
  },
  {
    id: 39,
    obtiznost: 3,
    nazev: "Lucemburkův kopec",
    otazka: "Nová rozhledna na kopci nad Tašovem nedaleko Malečova. Z dřevěné konstrukce je vidět daleko k Českému ráji nebo na německé stolové hory.",
    moznosti: ["Lucemburkův kopec", "Jageleoncův kopec", "Habsburkův kopec"],
    spravna: "Lucemburkův kopec"
  },
  {
    id: 40,
    obtiznost: 3,
    nazev: "Panna",
    otazka: "I když je kopec vyšší (594 m n.m.) než nedaleký Kalich, hrad zde postavený Kalich nepředčil. Na severu i na jihu uvidíte odsud téct Labe.",
    moznosti: ["Hrádek", "Panna", "Ostrý"],
    spravna: "Panna"
  },
  {
    id: 41,
    obtiznost: 3,
    nazev: "Trojhora",
    otazka: "Jihozápadně od Třebušína můžete zažít nefalšovaný horský štít, tedy jako břitva úzkou hřebínkovku (451 m n.m.) Hůře přístupná vyhlídka.",
    moznosti: ["Třívrší", "Tři skály", "Trojhora"],
    spravna: "Trojhora"
  },
  {
    id: 42,
    obtiznost: 2,
    nazev: "Sedlo",
    otazka: "Nejvyšší hora Českého středohoří na pravé straně Labe (726 m n.m.), Nadchne vás nejen vyhlídka, ale i vrcholové skály.",
    moznosti: ["Sedlo", "Buková hora", "Varhošť"],
    spravna: "Sedlo"
  },
  {
    id: 43,
    obtiznost: 3,
    nazev: "Víťova rozhledna",
    otazka: "Nad obcí Náčkovice nedaleko Verneřic stojí tato rozhledna pojmenovaná po svém staviteli. Je přístupná jen v otvírací době nebo po dohodě.",
    moznosti: ["Láďova rozhledna", "Víťova rozhledna", "Pepova rozhledna"],
    spravna: "Víťova rozhledna"
  },
  {
    id: 44,
    obtiznost: 3,
    nazev: "Strážný vrch",
    otazka: "Jen o metr se tento vrchol nevešel mezi šestistovky. Z rozhledny nad Merbolticemi je krásně vidět do Lužických hor, třeba takto na Hvozd.",
    moznosti: ["Ostrý vrch", "Varta", "Strážný vrch"],
    spravna: "Strážný vrch"
  },
  {
    id: 45,
    obtiznost: 3,
    nazev: "Kohout",
    otazka: "Z Valkeřic se dostaneme na tuto rozhlednu se zvířecím názvem (589 m n.m.). Ta má vrchol slávy za sebou, ale cesta sem není rozhodně zbytečná.",
    moznosti: ["Kohout", "Kocour", "Kobyla"],
    spravna: "Kohout"
  },
  {
    id: 46,
    obtiznost: 3,
    nazev: "Velký Chlum",
    otazka: "Tato rozhledna není v nejvyšším místě kopce, ale na jeho hraně. Shlíží tak na údolí Labem u Děčína i na kopce na druhé straně (např. Chmelník)",
    moznosti: ["Stradonka", "Velký Chlum", "Varhošť"],
    spravna: "Velký Chlum"
  },
  {
    id: 47,
    obtiznost: 2,
    nazev: "Benešov nad Ploučnicí",
    otazka: "Průmyslový rozmach dal vzniknout i spoustě vyhlídkových míst na toto městečko (Kačenky, Grohmannova, Medvědova atd.) Jak se město jmenuje?",
    moznosti: ["Žandov", "Františkov nad Ploučnicí", "Benešov nad Ploučnicí"],
    spravna: "Benešov nad Ploučnicí"
  },
  {
    id: 48,
    obtiznost: 2,
    nazev: "Sokolí vrch",
    otazka: "Moderní rozhledna a stanice operátorů (500 m n.m.) nad Děčínem má dravčí název. Výhled patří k tomu nejlepšímu v Českém středohoří.",
    moznosti: ["Sokolí vrch", "Orlí vrch", "Poštolčí vrch"],
    spravna: "Sokolí vrch"
  },
  {
    id: 49,
    obtiznost: 1,
    nazev: "Panská skála",
    otazka: "Z filmu Pyšná princezna ji zná každý. U Práchně leží skála, kde uvidíte sloupcovou odlučnost čediče. Jeden ze symbolů Českého středohoří.",
    moznosti: ["Netopýří skála", "Panská skála", "Čedičová hora"],
    spravna: "Panská skála"
  },
  {
    id: 50,
    obtiznost: 3,
    nazev: "Polevský vrch",
    otazka: "Obec se stejnojmeným názvem je rájem běžkařů. Kraj sklářů, ale i dalekých výhledů. Vidět je nejen sousední Klíč, ale třeba i Ralsko nebo Trosky.",
    moznosti: ["Medvědí vrch", "Borská skála", "Polevský vrch"],
    spravna: "Polevský vrch"
  }
];
