// this & OBJECT PROTOTYPES

/*
function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: "Kyle",
};

var you = {
  name: "Reader",
};

identify.call(me); // KYLE
identify.call(you); // READER
speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER
*/

function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = "Hello, I'm " + identify(context);
  console.log(greeting);
}

var me = {
  name: "Kyle",
};

var you = {
  name: "Reader",
};
identify(you); // READER
speak(me); // Hello, I'm KYLE


function spellName(spell) {
  return spell.name.toUpperCase();
}

function spellEffect(spell) {
  return spell.effect;
}

function pronounceSpell(spell) {
  var answer = "Это заклинание " + spellName(spell) + ", и оно " + spellEffect(spell);
  console.log(answer);
}

var expelliarmus = {
  name: "Экспеллиармус",
  effect: "обезоруживает противника."
}

pronounceSpell(expelliarmus);