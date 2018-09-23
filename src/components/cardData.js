import Fool from '../images/Fool.jpg';
import HighPriestess from '../images/HighPriestess.jpg';
import Empress from '../images/Empress.jpg';
import Emperor from '../images/Emperor.jpg';
import Magician from '../images/Magician.jpg';
import Hierophant from '../images/Hierophant.jpg';
import Lovers from '../images/Lovers.jpg';
import Chariot from '../images/Chariot.jpg';
import Strength from '../images/Strength.jpg';
import Hermit from '../images/Hermit.jpg';
import Wheel from '../images/WheelOfFortune.jpg';
import Justice from '../images/Justice.jpg';
import Hanged from '../images/HangedMan.jpg';
import Death from '../images/Death.jpg';
import Temperance from '../images/Temperance.jpg';
import Devil from '../images/Devil.jpg';
import Tower from '../images/Tower.jpg';
import Star from '../images/Star.jpg';
import Moon from '../images/Moon.jpg';
import Sun from '../images/Sun.jpg';
import Judgement from '../images/Judgement.jpg';
import World from '../images/World.jpg';

const CARDDATA =
  [
    {
        id: 1,
        title: 'The Fool',
        numericValue: 0,
        message: 'The fool represents new possibilities and new beginnings. Adventure awaits! Let go of preconceived notions, these are folding you back. Rather than looking at uncertainty with fear and unease, see uncertainty as a child would; fresh and boundless possibility.',
        src: Fool,
    },
    {
      id: 2,
      title: 'The Magician',
      numericValue: 1,
      message: 'Magicians create new realities by instantiating ideas into matter itself. With a sharp wit and restless determination, the Magician heralds a new possibility within your reach. Trust your intuitions and see your projects through. Fortune awaits!',
      src: Magician,
    },
    {
      id: 3,
      title: 'The High Priestess',
      numericValue: 2,
      message: 'The High Priestess represents discipline and the contemplative life. Your dreams are possible, but they will need work. Only by buckling down and gearing up will you realize your true potential.',
      src: HighPriestess,
    },
    {
      id: 4,
      title: 'The Empress',
      numericValue: 3,
      message: 'Act from the guts. The Empress shows you that you need not doubt yourself; your intentions have been fair and true. If self doubt has been plaguing you, now is the time to let go.',
      src: Empress,
    },
    {
      id: 5,
      title: 'The Emperor',
      numericValue: 4,
      message: 'The Emperor is as the Emperor does. Show strong leadership and determination to see your wishes come true. Articulate your goals and act with royalty. Now is not the time for skepticism or doubt.',
      src: Emperor,
    },
    {
      id: 6,
      title: 'The Hierophant',
      numericValue: 5,
      message: 'With blessings from Beyond, the Hierophant beckons you to establish yourself in your craft or expertise. Respect, education, and spiritual growth await those that work diligently, ardently, to realize their inner potential.',
      src: Hierophant,
    },
    {
      id: 7,
      title: 'The Lovers',
      numericValue: 6,
      message: 'Caught between opposing forces, this World or the Next, knowledge or ignorance, evolution or stagnation, the Lovers conjures up images of paths dividing and converging. As in the Garden before the Fall, the Lovers represent the need for care deliberation. There are many possibilities ahead, not all of which are desirable. Beware those ideas that sound too good to be true, a snake lurks behind every apple.',
      src: Lovers,
    },
    {
      id: 8,
      title: 'The Chariot',
      numericValue: 7,
      message: 'With a crack of the whip and a plume or dust in its wake, the Chariot hurdles you forward. Tumultuous and uncertain as things may seem, let them rush by you without care. Something bigger is ahead, just there, over the horizon. Let\'s be quick about it!',
      src: Chariot,
    },
    {
      id: 9,
      title: 'Strength',
      numericValue: 8,
      message: 'Inner strength radiates forth, the everflowing stream of natures might. Focus on yourself rather than others. Remember who is in control and what there is to control; you may find things are much simpler when you let go of those things you cannot change. There is hope in persistence, salvation in integrity.',
      src: Strength,
    },
    {
      id: 10,
      title: 'The Hermit',
      numericValue: 9,
      message: 'Careful and quite, the Hermits drifts in solitude. The hermit lives a peaceful life, slow, but intentional, aware of the things before and after. Perhaps you should try following his example.',
      src: Hermit,
    },
    {
      id: 11,
      title: 'Wheel of Fortune',
      numericValue: 10,
      message: 'The wheel in the sky keeps-a-turnin\'! Change is imminent. Are you prepared?',
      src: Wheel
    },
    {
      id: 12,
      title: 'Justice',
      numericValue: 11,
      message: 'Your role is to observe and listen, not pontificate. There may be many parties involved with vastly different perspective. Hear them out with careful deliberation and you just may learn something. The time is high for you to expand your awareness. There are subtle, complex, and wonderful realizations in puzzles. Be fair.',
      src: Justice,
    },
    {
      id: 13,
      title: 'The Hanged Man',
      numericValue: 12,
      message: 'Although intimidating, you need not worry. Why worry about what you cannot control? Your current predicaments may not be your desire, but perhaps the perspective they offer is what you\'ve needed all along. Stop resisting. There is no need to suffer twice; once from the injury, once more from the contemplation of it.',
      src: Hanged
    },
    {
      id: 14,
      title: 'Death',
      numericValue: 13,
      message: 'Death has come. But did it ever leave? Use Death\'s manifestation to signal new beginnings. What once was is gone, let it go.',
      src: Death,
    },
    {
      id: 15,
      title: 'Temperance',
      numericValue: 14,
      message: 'If you seek fulfillment, you\'re going to need to learn how to separate the good from the bad, the useful from the useless. Like refining steel, impurities will weaken your resolve. Reduce to only what is necessary and good fortune will surely be yours.',
      src: Temperance,
    },
    {
      id: 16,
      title: 'The Devil',
      numericValue: 15,
      message: 'The Devil, Baphomet, signals passion and unrelenting desire. Life\'s not all about work you know! What\'s wrong with a little fun?',
      src: Devil,
    },
    {
      id: 17,
      title: 'The Tower',
      numericValue: 16,
      message: 'You know the saying, the bigger they are, the harder they fall! It seems you\'ve built up quite a bit here. Proceed cautiously. Egos, like towers, attract the forces of nature when they get too big. Nothing is ever completely controllable.',
      src: Tower,
    },
    {
      id: 18,
      title: 'The Star',
      numericValue: 17,
      message: 'Keeping your eyes on the ground, focused on your everyday comings and goings...when\'s the last time you looked upwards? There\'s a bigger picture you may be missing. Reconnect with your spiritual core.',
      src: Star,
    },
    {
      id: 19,
      title: 'The Moon',
      numericValue: 18,
      message: 'Beautiful and serene, the Moon represnts the unconscious, the things that move in the dark. Trust your body, your gut, your own inner wisdom to guide you forward.',
      src: Moon,
    },
    {
      id: 20,
      title: 'The Sun',
      numericValue: 19,
      message: 'High Noon. The Sun shines down on you in this wondrous moment. Everything is as it seems to be, everything is where it needs to be.',
      src: Sun,
    },
    {
      id: 21,
      title: 'Judgement',
      numericValue: 20,
      message: 'A decision is to be made. Have you been holding yourself back. Judgement guides you forward, untangling you from the snare of past delusions. Sort things out and move forward with confidence.',
      src: Judgement
    },
    {
      id: 22,
      title: 'The World',
      numericValue: 21,
      message: 'The World. What more is there to give? Reap the benefits of your trials and tribulations.',
      src: World,
    },
  ]

export default CARDDATA;
