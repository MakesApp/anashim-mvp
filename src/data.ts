import { Product } from './localTypes/product.types';
import globes from '@assets/icons/globes.svg';
import teamMe from '@assets/icons/products/teamme_logo.jpeg';
import beyondVirtual from '@assets/icons/products/beyond_virtual_logo.png';
import candiTech from '@assets/icons/products/Canditech.png';
import taoTio from '@assets/icons/products/TaTiO.png';
import metgaysim from '@assets/icons/products/metgaysim.webp';
import stellarNova from '@assets/icons/products/StellarNova.webp';
import startAlpha from '@assets/icons/products/StartAlpha.jpeg';
import magniLearn from '@assets/icons/products/MagniLearn.png';
import freshBoard from '@assets/icons/products/FreshBoard.jpeg';
import inBE from '@assets/icons/products/InBe_logo.jpeg';
import pathsCareers from '@assets/icons/products/paths_careers_logo.jpeg';
import Elevation from '@assets/icons/products/Elevation_logo.png';
import junoJourney from '@assets/icons/products/JunoJourney.svg';
import classMe from '@assets/icons/products/class.me.png';
import speak from '@assets/icons/products/speakLogo.svg';
import myInterview from '@assets/icons/products/Myinterview.png';
import talkingEnglish from '@assets/icons/products/talking-english.png';
import skillsup from '@assets/icons/products/Skillsup.png';
import campusIL from '@assets/icons/products/campusIL.png';
import avodata from '@assets/icons/products/avodata.png';
import skillIL from '@assets/icons/products/skillil-logo.png';
import job360 from '@assets/icons/products/JOB360.png';
import makes from '@assets/icons/products/Makes logo.svg';
import watoobi from '@assets/icons/products/Watoobi.webp';
import placeIL from '@assets/icons/products/placeIL.png';
import SFI from '@assets/icons/products/SFI.png';
import ovedLI from '@assets/icons/products/oved-li.webp';
import edge from '@assets/icons/products/edgeRethinking.jpeg';
import adHD from '@assets/icons/products/ADHDoTech.jpeg';
import AIJunk from '@assets/icons/products/AI-junk.webp';
import tovTech from '@assets/icons/products/Tov-Tech.png';
import bites from '@assets/icons/products/Bites-Logo.svg';
import youAco from '@assets/icons/products/YOUACO.png';
import articlePreview from '@assets/images/articles/Article-Preview-image.jpg';
import { IArticle } from './localTypes/article.types';
export const prodcuts = [
  {
    id: '1',
    name: 'Team.me',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '',
    shortDescription: `הגדלת גיוס העובדים בחברה ע"י יצירה והפצה של סרטונים ממותגים ומקצועיים כדי למשוך מועמדים מובילים.`,
    description: `כפלטפורמת גיוס וידאו, אנו מסייעים למיתוג מעסיק ולצוותי הגיוס להעלות את תהליך הגיוס שלהם על ידי מתן פלטפורמה ליצירה, ניהול והפצה של תוכן שנוצר על ידי עובדים. 
Team Me מאפשרת לחברות ליצור בקלות תוכן וידאו מקצועי וממותג המדגיש את תרבות החברה ואת חוויות העובדים שלהן. בכך, היא מסייעת למשוך מועמדים מובילים, לשמר עובדים נוכחיים ולשפר את מיתוג המעסיק הכולל. בנוסף, הפלטפורמה שלנו מספקת מערכת מרוכזת ומאורגנת לניהול והפצת תוכן וידאו, המבטיחה שסיפור החברה מועבר באופן עקבי ואפקטיבי למועמדים.`,
    link: 'https://www.teamme.io/',
    logo: teamMe,
    linkedIn: 'https://www.linkedin.com/company/teamme/?originalSubdomain=il',
    date: '2024-01-08',
  },
  {
    id: '2',
    name: 'Beyond Virtual',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['חינוך', 'למידה'],
    phone: '',
    email: 'eran@beyondvirtual.ai',
    shortDescription:
      'ב-Beyond Virtual, אנו מגשרים על הפער בין למידה וכישורים.  באמצעות בני אדם וירטואליים, אנו יוצרים מרחב בטוח ומהימן, המאפשר לכל אחד לתרגל ולשפר את כישורי השיחה והשפה שלו.',
    description: `ב-Beyond Virtual, אנו מגשרים על הפער בין למידה וכישורים. באמצעות בני אדם וירטואליים, אנו יוצרים מרחב בטוח ומהימן, המאפשר לכל אחד לתרגל ולשפר את כישורי השיחה והשפה שלו. מתלמידי בית ספר יסודי ועד סטודנטים באוניברסיטה ועובדי תאגידים - אנחנו כאן בשבילכם. אנו עוזרים ללומדים שלנו להתגבר על מחסומי חרדת שפה, לשפר את המעורבות שלהם, להשיג מיומנויות חדשות ולהגביר את הביטחון שלהם.`,
    link: 'https://beyondvirtual.ai/',
    logo: beyondVirtual,
    linkedIn: 'https://www.linkedin.com/company/beyondvirtual/',
    date: '2024-01-08',
    tempVariable: true,
  },
  {
    id: '3',
    name: 'Canditech',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '',
    shortDescription:
      'Canditech היא פלטפורמת הערכה המופעלת על ידי בינה מלאכותית המאפשרת לחברות להפוך את תהליך המיון לאוטומטי ולערב את המועמדים עם מבחנים יפים וממותגים המותאמים ב-100% לצרכים שלהם.',
    description:
      'Canditech מוציאה את הניחוש מתהליך המיון ומאפשרת לחברות בכל הגדלים להעסיק אנשים על סמך איך הם יבצעו את העבודה בפועל, ולא על סמך קורות חיים והצהרות.  Canditech היא פלטפורמת הערכה המופעלת על ידי בינה מלאכותית המאפשרת לחברות להפוך את תהליך המיון לאוטומטי ולערב את המועמדים עם מבחנים יפים וממותגים המותאמים ב-100% לצרכים שלהם. המבחנים נבדקים באופן אוטומטי ומכילים מגוון סוגי שאלות ותשובות: קוד, SQL, אקסל, וידאו, שאלות בחירה, שאלות טקסט פתוחות ועוד.',
    link: 'https://www.canditech.io/',
    logo: candiTech,
    linkedIn: 'https://www.linkedin.com/company/canditech/',
    date: '2024-01-08',
  },
  {
    id: '4',
    name: 'TaTiO',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['תעסוקה'],
    phone: '386-674-1793',
    email: 'info@tatio.il',
    shortDescription: 'יצירת מסעות גיוס בלתי נשכחים באמצעות הדמיות עבודה וירטואליות',
    description:
      'הסטארטאפ הישראלי TaTiO פיתח מערכת שרוצה לעזור לאנשי ה-HR בחברות לא לפספס את העובדים המוכשרים, ומחברת אותן לעובדים על סמך הכישורים שלהם בלבד. המערכת היא מעין מרקטפלייס, שבו בצד אחד מחפשי עבודה שנכנסים ויכולים להתנסות בסימולציות המדמות את המטלות המרכזיות של כל תפקיד. הביצועים של המועמד נבחנים באופן אוטומטי על ידי ניתוח של 150 נקודות דאטה, והמועמד מקבל דוח עם חוות דעת על ביצועים, יחד עם המלצות על משרות רלוונטיות עבורו, אליהם מומלץ לו להגיש מועמדות. בצד השני, חברות מקבלות גישה למערכת המכילה מאגר מועמדים מתעדכן, אנונימי ורלוונטי שמסווג על סמך כישורים בלבד. ההעסקה של העובדים מנוטרות לאורך זמן ומייצרות קטלוג של המועמדים המתאימים ביותר לתפקיד.',
    link: 'https://www.tatio.io/',
    logo: taoTio,
    linkedIn: 'https://www.linkedin.com/company/tatio/',
    date: '2024-01-08',
  },
  {
    id: '5',
    name: 'YouAco',
    type: 'פלטפורמה',
    sector: ['חברתי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '',
    shortDescription: `אפליקציה מותאמת לסלולר המבוססת על אבחון פסיכולוגי תעסוקתי לתכנון העתיד התעסוקתי שלך. תכנון מסלול לימודים, תעסוקה, עבודה וקריירה.`,
    description: `youaco היא מערכת מתקדמת, סלולרית לייעוץ קריירה. אנחנו מנגישים פסיכולוגיה ברמה גבוה לכל אדם שסלולר בידו. 
לאחרונה פיתחנו את "מרחב קריירה" (Career Space) עם אוניברסיטת רייכמן.`,
    link: 'https://www.youaco.com/',
    logo: youAco,
    linkedIn: '',
    date: '2024-01-08',
  },
  {
    id: '6',
    name: 'מתגייסים לתעסוקה',
    type: 'תוכנית',
    sector: ['חברתי', 'עסקי'],
    fields: ['תעסוקה'],
    phone: '052-3818988',
    email: 'Mitletaas@gmail.com',
    shortDescription: `מקום המייצר תעסוקה לבני נוער הממתינים לגיוסם לצבא`,
    description: `מתגייסים לתעסוקה היא התוכנית היחידה בארץ שנותנת מענה לבני הנוער הממתינים לגיוס במרץ ע"י הפעלת מודל עבודה "מועדפת" ברשויות מוניציפליות. 
מתגייסים לתעסוקה מחזקת את המשק העירוני לצד הכנה לצה"ל ולחיים כאנשים בוגרים, מובילים ומשפיעים. התוכנית הוקמה בכדי לתת מענה תעסוקתי, חברתי וחינוכי לתקופת ההמתנה עד הגיוס.`,
    link: 'https://www.mitgaisimletaasuka.co.il/',
    logo: metgaysim,
    linkedIn: '',
    date: '2024-01-08',
  },
  {
    id: '7',
    name: 'StellarNova',
    type: 'מיזם',
    sector: ['חברתי', 'עסקי'],
    fields: ['חינוך'],
    phone: '',
    email: 'info@stellarnova.co',
    shortDescription:
      'חברת מולטימדיה הפונה לילדים ליצירת השפעה חברתית מתמשכת בטיפוח לימודי המדעים. החברה מפתחת צעצועים מדעיים לילדות, במטרה לעודד את החשיפה של ילדות לתחומי המדע וההנדסה. הגישה הייחודית של החברה היא השילוב של הפעילות המדעית בתוך סיפור.',
    description:
      'חברת מולטימדיה הפונה לילדים ליצירת השפעה חברתית מתמשכת בטיפוח לימודי המדעים. החברה מפתחת צעצועים מדעיים לילדות, במטרה לעודד את החשיפה של ילדות לתחומי המדע וההנדסה. הגישה הייחודית של החברה היא השילוב של הפעילות המדעית בתוך סיפור.',
    link: 'https://stellarnova.co/',
    logo: stellarNova,
    linkedIn: 'https://il.linkedin.com/company/stellarnova',
    date: '2024-01-08',
  },
  {
    id: '8',
    name: 'StartAlpha',
    type: 'תוכנית',
    sector: ['ציבורי'],
    fields: ['חינוך', 'למידה', 'תעסוקה'],
    phone: '',
    email: '',
    shortDescription: 'חממת פיתוח לנוער למיזמי אד-טק',
    description:
      'היחידה לחדשנות טכנולוגית במשרד החינוך מקדמת חינוך רלוונטי במציאות משתנה בעזרת חדשנות ויזמות טכנולוגית מהארץ ומהעולם. בעזרתנו יזמים ויזמיות מקדמים רעיונות ופתרונות טכנולוגיים מהשטח ומחוללים שינוי אמיתי במערכת החינוך. בתוכנית StartAlpha אנחנו משתפים פעולה עם אמזון ישראל ומלווים את הדור הבא של הנוער היזמי בישראל.',
    link: 'https://startalpha.start-education.org/',
    logo: startAlpha,
    // linkedIn:
    //   'https://www.linkedin.com/company/start-%D7%94%D7%97%D7%98%D7%99%D7%91%D7%94-%D7%9C%D7%97%D7%93%D7%A9%D7%A0%D7%95%D7%AA-%D7%98%D7%9B%D7%A0%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%AA-%D7%91%D7%9E%D7%A9%D7%A8%D7%93-%D7%94%D7%97%D7%99%D7%A0%D7%95%D7%9A/',
    date: '2024-01-21',
  },
  {
    id: '9',
    name: 'MagniLearn',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['למידה', 'חינוך'],
    phone: '',
    email: 'contact@magnilearn.com',
    shortDescription: 'למידה מותאמת אישית מבוססת בינה מלאכותית',
    description:
      'החברה מפתחת פלטפורמת למידה פרסונלית ייחודית ללמידה מקוונת של אנגלית כשפה זרה, המיועדת ללומדים במוסדות החינוך ומהווה כלי משלים ומעצים למורה. המערכת משלבת בין טכנולוגיות ענן, תובנות מתחום מדעי הקוגניציה, ואלגוריתמים בתחום עיבוד שפה על מנת לאפשר למידה מרחוק, אישית וייעודית לכל תלמיד לפי הקצב והרמה של כל אחד ואחת, בשילוב ובהתאם לתכנית הלימודים של מוסד הלימוד. המערכת מבוססת על "מודל הידע האישי" - מנוע ייחודי המכיל אלגוריתמים מתקדמים שקובעים מה, איך ומתי ללמוד ולתרגל על סמך ניתוח רמת המיומנות של הלומד.',
    link: 'https://www.magnilearn.com/',
    logo: magniLearn,
    linkedIn: 'https://www.linkedin.com/company/magnilearn/',
    date: '2024-01-08',
  },
  {
    id: '10',
    name: 'Freshboard.city',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '',
    shortDescription: 'יצירת לוחות משרות עבודה אוטומטיים לערים וקהילות',
    description: `<div>החברה מפתחת מוצר לערים ומדינות כדי לקבל מידע עדכני ובזמן אמת על משרות ברחבי הארץ. המשרות נמשכות אוטומטית מאתרי החברות ובכך מכפילה את כמות המשרות הנגישות לרשות המקומית או לארגון המקצועי, ומשחררת את רכזי התעסוקה מהזמן היקר של רדיפה אחרי המעסיקים בשביל מעט משרות. 
</div>
<div>
ניתן להציג את המשרות לקהל בממשק של אתר החברה או אתר העיריה, ולקבל גישה למערכת שמציגה ניתוחים סטטיסטיים של היצע מול ביקוש. 
</div>
<div>
המערכת גם מגלה אלו מעסיקים יש בעיר, משרות מרחוק בכל הארץ למשיכה לעיר, מאפשרת ליצור דפי קריירה חינמיים לחברות שאין להן משרות באתר או אתר בכלל ועוד, כל זאת על מנת לתת לראש העיר או לארגון שליטה על מצב התעסוקה באופן שמתעדכן אוטומטי בשבילכם ובאפס מאמץ. עוזר גם לקביעת מדיניות כמו תכנון הכשרות.</div>
`,
    link: 'https://freshboard.city/',
    logo: freshBoard,
    linkedIn: 'https://www.linkedin.com/company/freshboard/',
    date: '2024-01-08',
  },
  {
    id: '11',
    name: 'InBe Tech',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '',
    shortDescription: `מדריך המותאם אישית למסע הצמיחה שלך בקריירה, מופעל על ידי AI ומשופר עם מגע אנושי`,
    description:
      'מוצר טכנולוגי המעניק לכל משתמש מסלול קריירה והתפתחות אישית בראייה עכשווית ועתידית. המוצר מנתח את עץ הכישורים ותחומי העניין של המשתמש, בונה לו מסלול ונותן המלצות פרסונליות ופרקטיות להמשך הדרך להרחבת סל הכישורים המקצועיים והרכים של המשתמש וכן לשמירה על חוסן נפשי וכלכלי לאורך זמן.',
    link: 'https://www.inbe.me/',
    logo: inBE,
    linkedIn: 'https://www.linkedin.com/company/inbe-tech/jobs/',
    date: '2024-01-08',
  },
  {
    id: '12',
    name: 'Paths.careers',
    type: 'פלטפורמה',
    sector: ['עסקי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '',
    shortDescription: 'שירות מקוון לאיתור מסלולי קריירה',
    description:
      'שירות מקוון לאיתור מסלולי קריירה המסייע לאלה שאינם בטוחים במה הם רוצים לעשות עבור הקריירה שלהם על ידי שימוש במאפיינים להערכת כושר של למעלה מאלף מקצועות ומתן הדרכה למעקב עם מאמן קריירה מוסמך בשוק paths.careers. עם ניסיון אקדמי ומקצועי, תוך שימוש ב-Big Data ואלגוריתמים מתקדמים, אנו מספקים מסע קריירה דיגיטלי ומבוסס אנושי כאחד.',
    link: 'https://paths.careers/',
    logo: pathsCareers,
    linkedIn: 'https://www.linkedin.com/company/paths-careers...',
    date: '2024-01-08',
  },
  {
    id: '13',
    name: 'Elevation',
    type: 'תוכנית',
    sector: ['עסקי'],
    fields: ['למידה', 'חינוך'],
    phone: '077-204-0996',
    email: 'hello@elevation.ac',
    shortDescription:
      'אנחנו כאן בשביל לשפר את הביצועים העסקיים שלכם, את שביעות רצון העובדים ואת הערך התעסוקתי שלהם, ואת מותג המעסיק. תוכניות ההדרכה שלנו העוסקות בהכשרת עובדים והכשרות ייעודיות למועמדים עוברות התאמה אישית ומועברות באמצעות למידה חווייתית בסביבות היברידיות.',
    description: `<div>אנחנו כאן בשביל לשפר את הביצועים העסקיים שלכם, את שביעות רצון העובדים ואת הערך התעסוקתי שלהם, ואת מותג המעסיק. 
</div>איך? באמצעות הפיכת העובדים שלכם למיומנים ביותר ולצוותים המעודכנים ביותר בשוק. אנחנו מאמינים שהמפתח להצלחה הוא ידע וכלים מתאימים. 
<div >
8 שנות פעילות ומעל 9,000 לומדים, מוכיחים שכשנותנים לצוותים את כוח הידע ואת הכלים להצלחה, זוכים בהכרת התודה הגדולה ביותר על ההשקעה בהם – גם מהעובדים וגם מהמועמדים הפוטנציאליים שלכם.
</div>
`,
    link: 'https://elevation.ac/he/about-heb/',
    logo: Elevation,
    linkedIn: 'https://www.linkedin.com/school/elevation-corp...',
    date: '2024-01-08',
  },
  {
    id: '14',
    name: 'Juno Journey',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['למידה', 'תעסוקה'],
    phone: '+972 543980807',
    email: '',
    shortDescription:
      'פלטפורמת פיתוח עובדים מותאמת אישית המספקת לעסקים את הכלים לקדם את האנשים שלהם ולהעצים אותם לצמיחה מקצועית על ידי האופן שבו הם - משולבים, מאפשרים, מפתחים ומשמרים אותם לאורך מחזור חיי העובדים.',
    description:
      'הפלטפורמה של Juno Journey מייצרת לארגונים מסלולי פיתוח ולמידה מותאמים-אישית, עבור כל אחד מהעובדים. המערכת של Juno Journey מייצרת עבור כל עובד חוויית למידה ופיתוח אישית משלו, על ידי מיפוי מיומנויות העובד, הנגשת המידע הפנים-ארגוני הרלוונטי בשילוב קורסים, מאמרים, פודקאסטים וחומרי קריאה חיצוניים.',
    link: 'https://junojourney.com/',
    logo: junoJourney,
    linkedIn: 'https://il.linkedin.com/company/junojourney',
    date: '2024-01-08',
    tempVariable: true,
  },
  {
    id: '15',
    name: 'Class.me',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['חינוך', 'למידה'],
    phone: '',
    email: '',
    shortDescription: 'פלטפורמה שמסייעת ללמידה משותפת מרחוק ולתקשורת בין מורים לתלמידים',
    description:
      'האפליקציה שמחברת בין תלמידים, מורים וסביבות חינוכיות, ויוצרת את חוויית הלמידה המשותפת והווירטואלית הראשונה. אנו עוזרים למורים ולמנהלים לנתח את רמת הלמידה של כל תלמיד, ומאפשרים לכל התלמידים למצות את הפוטנציאל הגבוה ביותר שלהם.',
    link: 'https://class.me/',
    logo: classMe,
    linkedIn: '',
    date: '2024-01-08',
  },
  {
    id: '16',
    name: 'Speak',
    type: 'תוכנית',
    sector: ['עסקי'],
    fields: ['למידה', 'תעסוקה'],
    phone: '+972779915411',
    email: 'info@speaknow.co.il',
    shortDescription:
      'שיטת הלימוד של speak מבוססת על מבחן בינה מלאכותית באנגלית ייחודי להערכת רמת האנגלית שלך. המבחן הוא היחיד שבודק את רמת האנגלית שלך מתוך דיבור חופשי',
    description:
      'חברת SPEAK הינה בית הספר המוביל ללימודי אנגלית בישראל. בזכות מבחן רמה ייחודי, מבוסס בינה מלאכותית (AI), אנו בית הספר היחיד בארץ המבסס את תהליכי הלמידה על הסטנדרט הבינלאומי ללימוד שפה, סולם ה- CEFR. בנוסף, אנו מתמחים ביצירת תוכניות לימוד אפקטיביות לתחום העניין והצרכים של כל אחד מלקוחותינו. אנו מציעים מגוון פתרונות לימוד- לימוד פרטני, סדנאות קבוצתיות ומודל משולב. בעזרת אפליקציה לתיאום שיעורים וסדנאות לימוד עם המורים המובילים בישראל, אנו מייצרים פלטפורמה נוחה, מקצועית ואנושית המאפשרת ללמוד את מיומנויות השפה האנגלית ושיפור הביטחון העצמי, הן למגזר הפרטי הן למגזר העסקי. בין לקוחותינו - רפאל, בנק לאומי, פניקס, מכבי שירותי בריאות, EY, משרד המשפטים, זרוע העבודה, החברה למתנ"סים, הרשות לניירות ערך, שירות התעסוקה ועוד חברות וארגונים רבים בישראל.',
    link: 'https://speaknow.co.il/',
    logo: speak,
    linkedIn: 'https://www.linkedin.com/company/speak-your-pe...',
    date: '2024-01-08',
  },
  {
    id: '17',
    name: 'myInterview',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '+61284173034',
    shortDescription:
      'פלטפורמת גיוס עובדים המתבססת על אוטומציה וסקייל גדול לייעול והגדלת גיוס העובדים ושיפור חווית המועמד',
    description:
      'myInterview  מפתחת פלטפורמה לביצוע ריאיונות עבודה בווידאו, שבאמצעותה שולחים המועמדים לחברות סרטונים, ובהם הם עונים על השאלות שהציגה החברה, לצד שליחת קורות החיים שלה למשרה הרלוונטית. משם יכולים בחברה לסנן את המועמדים על סמך הסרטונים, בזמן הנוח להם, על פני הזמנת מועמדים לריאיון פנים-אל-פנים.',
    link: 'https://myinterview.com/',
    logo: myInterview,
    linkedIn: 'https://www.linkedin.com/company/myinterview',
    date: '2024-01-08',
  },
  {
    id: '18',
    name: 'Talking English',
    type: 'פלטפורמה',
    sector: ['עסקי'],
    fields: ['למידה', 'תעסוקה'],
    phone: '',
    email: 'contact@class.me',
    shortDescription: ` הבית לשיפור האנגלית - קורסים אונליין מותאמים אישית בשיטת אחד-על-אחד עם מורה קבוע`,
    description:
      'Talking - בית הספר הבינלאומי לאנגלית אונליין. למדו עם מורים מקצועיים מרחבי העולם, דוברי אנגלית שפת אם שיתאימו את התוכן והרמה בהתאם לצרכים ולמטרות הספציפיות שלך. המורים של Talking יעצימו אותך ויאפשרו לך להגיע ולהגשים את המטרות שלך! אפשרויות ההדרכה שלנו כוללות מפגשים פרטיים מקוונים. אנו משלבים חדשנות, מקצועיות וגמישות לכל תלמיד. לא בטוחים מאיפה להתחיל? דברו איתנו! שיחת ייעוץ אישית עם היועצים המומחים שלנו תדריך אותך בדרך הנכונה למיצוי העצמי שלך בשפה האנגלית.',
    link: 'https://talking.co.il/',
    logo: talkingEnglish,
    linkedIn: 'https://www.linkedin.com/company/talking-english',
    date: '2024-01-08',
  },
  {
    id: '19',
    name: 'Skillsup',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '',
    shortDescription: `Skillsup מספקת לך מפת דרכים, אימון, כלים וקהילה כדי לעבור לקריירה חדשה בתחום הטכנולוגיה.`,
    description:
      'Skillsup היא הפלטפורמה הראשונה לשינוי קריירה, שעוזרת לאנשים למקסם את הפוטנציאל שלהם על ידי ניווט אותם לעבר יעד הקריירה הבא שלהם. המוצר הייחודי שלנו נועד לפתור את האתגרים המשמעותיים ביותר איתם מתמודדים בחיפוש העבודה ובמעבר הקריירה לעולם העבודה החדש. דרך המסע האישי שלנו, המסגרת והקהילה התומכת שלנו, Skillsups מסירה בלבול ואי ודאות תוך יצירת הביטחון והמוטיבציה הדרושים כדי להצליח. בנוסף לטכנולוגיה הייחודית מונעת השוק שלנו, קהילת Skillsup מספקת תמיכה מתמשכת ותחושת שייכות כדי להבטיח מוטיבציה ומחויבות מתמשכים. אנו מעצימים את המשתמשים לשפר את כישורי התעסוקה שלהם על ידי גישור על פערים במיומנויות ובניסיון כדי להשיג את מטרותיהם באמצעות תרגילים, אימון מיומנויות וחומרי למידה מיקרו.',
    link: 'https://www.skillsup.ai',
    logo: skillsup,
    linkedIn: 'https://www.linkedin.com/company/skillsup',
    date: '2024-01-08',
  },
  {
    id: '20',
    name: 'קמפוסIL',
    type: 'מיזם',
    sector: ['ציבורי'],
    fields: ['תעסוקה', 'למידה'],
    phone: '',
    email: '',
    shortDescription:
      'מיזם הלמידה הדיגיטלית הלאומי, מאפשר לכם ליהנות מחוויית למידה חדשנית ומותאמת אישית עם מגוון עצום של תכנים איכותיים המוגשים לכם על ידי אוניברסיטאות ומכללות מובילות בישראל, משרד החינוך ומשרדי ממשלה נוספים.',
    description:
      'קמפוס IL היא פלטפורמה דיגיטלית פתוחה המאפשרת חיבור של כל אזרחי מדינת ישראל, בפריפריה ובמרכז, לחוויית למידה מותאמת אישית, על ידי המרצים הטובים בתחומם - ובחינם. מטרת המיזם היא להגדיל את הנגישות להשכלה מקצועית ואקדמית לציבור הרחב ולהפוך את הלמידה להזדמנות הנמשכת לאורך מסלול חיים שלם (Life Long Learning).',
    link: 'https://campus.gov.il/',
    logo: campusIL,
    linkedIn: '',
    date: '2024-01-10',
    tempVariable: true,
  },
  {
    id: '21',
    name: 'עבודאטה',
    type: 'מיזם',
    sector: ['ציבורי'],
    fields: ['תעסוקה', 'למידה'],
    phone: '',
    email: '',
    shortDescription:
      'מיזם לאומי להנגשת נתונים ומידע על שוק העבודה, תעבוק ושכר במגוון רחב של עיסוקים ומסלולי לימוד, כדי לעזור לך לבחור',
    description: `מיזם להנגשת נתונים ומידע בהובלת זרוע העבודה במשרד הכלכלה ובשותפות עם ישראל דיגיטלית וג'וינט תבת. האתר נועד להנגיש נתונים מקיפים ומהימנים על שוק העבודה ומסלולי לימודים מרכזיים כדי לתת לציבור הרחב כלים לקבלת החלטות מושכלות בנוגע למסלולי הפיתוח האישי והקריירה שלהם. 
האתר נותן מידע נרחב על כ-300 תחומי עיסוק, הכולל את השכר הממוצע בכל תחום, שעות העבודה הממוצעות, רמות ההשכלה של העובדים בתחום זה, את הענפים המרכזיים שבהם השתלבו הבוגרים, את המיומנויות המרכזיות הנדרשות ועוד מגוון רחב של נתונים. 
באופן זה האתר מאפשר לכל אדם להכיר את העיסוקים השונים בשוק העבודה הישראלי דרך מגוון רחב של פרמטרים, ולקבל החלטות מושכלות ומבוססות נתונים לגבי בחירות הקריירה שלהם.
`,
    link: 'https://avodata.gov.il/',
    logo: avodata,
    linkedIn: '',
    date: '2024-01-18',
  },
  {
    id: '22',
    name: 'SkillIl',
    type: 'פלטפורמה',
    sector: ['ציבורי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '',
    shortDescription:
      'הכשרה בהתאמה אישית. משיבים על השאלון החכם ומקבלים המלצות למסלולי לימוד קצרים שמובילים לעבודה טובה יותר, במהירות.',
    description: `
Skill-IL הינו אתר חדשני שמאפשר באופן חכם, מותאם אישית וידידותי חיבור למידע עדכני על עולם ההכשרות המקצועיות בישראל. 
האתר מתאים באופן אישי הכשרות מקצועיות מתוך מאגר של אלפי הכשרות שמקורן במאות מוסדות הכשרה מוכרים ומאושרים, תוך ביצוע התאמה חכמה בין מיומנויות, נטיות והעדפות של מחפשי ההכשרה, לבין ההזדמנויות התעסוקתיות ולהכשרה המתאימה עבורן.
`,
    link: 'https://skillil.org/',
    logo: skillIL,
    linkedIn: 'https://www.linkedin.com/company/skillil',
    date: '2024-01-18',
  },
  {
    id: '23',
    name: 'Job360',
    type: 'מיזם',
    sector: ['חברתי'],
    fields: ['תעסוקה', 'למידה'],
    phone: '',
    email: '',
    shortDescription:
      'Job360 היא פלטפורמה אינטרנטית שמאפשרת היכרות עם סיטואציות מעולם העבודה ותרגול של ההתנהגויות הרצויות בהן, כדי לשפר את המסוגלות התעסוקתית ולהעלות את הסיכוי להצליח בראיונות עבודה.',
    description:
      'המיזם מאפשר התנסות בהכנה לראיונות עבודה באמצעות מערכת Web ואפשרות לשילוב משקפי VR. המיזם מאפשר שיפור מיומנויות וקבלת משוב מקדם למידה בסביבה בטוחה. המיזם נוצר בשיתוף פעולה ייחודי בין שתי יזמיות מהקהילה החרדית והערבית, אחת מתחום החינוך והשנייה מתחום התעסוקה, במטרה לקדם אוכלוסיות מוחלשות.',
    link: 'https://job360.co.il/',
    logo: job360,
    linkedIn: 'https://www.linkedin.com/company/job360',
    date: '2024-01-08',
  },
  {
    id: '24',
    name: 'Makes',
    type: 'מיזם',
    sector: ['חברתי'],
    fields: ['למידה', 'חינוך'],
    phone: '',
    email: '',
    shortDescription:
      'בני הנוער רוצים ללמוד אחרת. אז בנינו את Makes - פלטפורמה לבני נוער שמאפשרת להם ללמוד את מה שהם אוהבים, איך שהם אוהבים, עם מי שהם אוהבים',
    description:
      'הפלטפורמה עוצבה במטרה לקדם למידה עצמאית בקצב אישי לאורך זמן וכן שיתוף פעולה בין התלמידים. התקדמות במסלול הלמידה אצלנו מדמה חווית משחק המתגמלת את המשתמש במעבר משלב לשלב בתהליך הלמידה ומספקת חוויה המטפחת יכולות למידה, סקרנות ועצמאות של התלמידים.  התכנים הלימודיים המוצעים בה מתמקדים בכישוריי חיים רלוונטיים למאה ה-21 וסובבים סביב עולמות אוריינות פיננסית, טכנולוגית, ומדיה. התוכן מותאם לצרכי הנוער ובשפה שהנוער צורך ביוטיוב, טיקטוק ואינסטגרם - קולע ,קצר ובגובה העיניים.',
    link: 'https://www.makesapp.co',
    logo: makes,
    linkedIn: 'https://www.linkedin.com/company/makes',
    date: '2024-01-08',
  },
  {
    id: '25',
    name: 'Watoobi',
    type: 'פלטפורמה',
    sector: ['חברתי', 'עסקי'],
    fields: ['תעסוקה', 'למידה'],
    phone: '',
    email: '',
    shortDescription:
      'פלטפורמת המנטורינג הדיגיטלית הראשונה בישראל בונים מאפס או מרחיבים תוכניות מנטורינג לגופי תעסוקה ולמוסדות להשכלה גבוהה ומסייעים לצעירים להשתלב בשוק התעסוקה',
    description:
      'פלטפורמה שבאמצעותה החברה בונה תוכניות מנטורינג מאפס עבור גופי תעסוקה, מוסדות השכלה גבוהה, מרכזי צעירים ועוד. הפלטפורמה מנהלת את התהליך מקצה לקצה, מאפשרת מעקב אחר התקדמות המשתתפים ומדידת ההשפעה של התהליך עליהם. מטרת הפלטפורמה היא לעזור לצעירים (בעיקר מאוכלוסיות אשר נמצאות בתת-ייצוג במשק) לרכוש כלים פרקטיים, לפתח מיומנויות רכות, לצבור ביטחון, לייצר רשת קשרים ולהשתלב בהצלחה בתעסוקה איכותית.',
    link: 'https://watoobi.com/',
    logo: watoobi,
    linkedIn: 'https://www.linkedin.com/company/watoobi',
    date: '2024-01-08',
  },
  {
    id: '26',
    name: 'Bites',
    type: 'מיזם',
    sector: ['עסקי'],
    fields: ['תעסוקה', 'למידה'],
    phone: '',
    email: '',
    shortDescription:
      'בייטס מספקת פתרון אידיאלי לביצוע הדרכות מרחוק וליצירת קשר עם עובדים מחוץ למשרד בכל מקום בו הם נמצאים',
    description:
      'בייטס מספקת פתרון אידיאלי לביצוע הדרכות מרחוק וליצירת קשר עם עובדים מחוץ למשרד בכל מקום בו הם נמצאים. בייטס מגבירה את רמת המעורבות והשימור על פני מערכות ניהול למידה קיימות (LMS) על-ידי הצעת תוכן הדרכה משכנע בשילוב עם פעילויות שנועדו לחזק את הלמידה. האופי הגמיש של הפלטפורמה מאפשר לעובדים מרחוק להישאר מעודכנים בפרקטיקות, במדיניות ובמוצרים של החברה ללא צורך בהתקנה או אימוץ של אפליקציות או כלים חדשים.',
    link: 'https://mybites.io/',
    logo: bites,
    linkedIn: 'https://www.linkedin.com/company/bites-learning/',
    date: '2024-01-08',
  },
  {
    id: '27',
    name: 'PlaceIL',
    type: 'מיזם',
    sector: ['חברתי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '',
    shortDescription:
      'Place-IL היא יוזמה טכנולוגית ללא מטרות רווח המעצימה חברות טכנולוגיה ישראליות לגייס ביעילות כישרונות מאוכלוסיות חסרות ייצוג, בקנה מידה ובסיכון מינימלי.',
    description: `Place-IL היא יוזמה טכנולוגית ללא מטרות רווח המעצימה חברות טכנולוגיה ישראליות לגייס ביעילות כישרונות מאוכלוסיות חסרות ייצוג, בקנה מידה ובסיכון מינימלי. נוסדה על ידי מובילים באקוסיסטם הטכנולוגי.
 יחד עם גוגל כשותפה המייסדת שחלקה את החזון מההתחלה, Place-IL מביאה את חברות הטכנולוגיה הישראליות המובילות מכל המגזרים, עם ארגונים לא ממשלתיים מרחבי החברה בישראל, כדי לפתוח הזדמנויות לכולם ולאפשר לחברות למצוא את הכישרון הטכנולוגי המדויק הם צריכים.`,
    link: 'https://place-il.org/',
    logo: placeIL,
    linkedIn: 'https://www.linkedin.com/company/placeil',
    date: '2024-01-08',
  },
  {
    id: '28',
    name: 'SFI',
    type: 'פלטפורמה',
    sector: ['חברתי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '03-632-9881',
    shortDescription:
      'Social finance Israel הינה חברה לתועלת הציבור אשר הוקמה בשנת 2013 במטרה לקדם הזרמת הון לפתרון בעיות חברתיות בישראל דרך שימוש בכלי מימון חדשניים. SFI, הפועלת כבית ההשקעות החברתי הראשון בישראל, מפתחת את סקטור השקעות האימפקט בארץ, שצפוי להועיל לכלל אזרחי המדינה.',
    description:
      'Social finance Israel הינה חברה לתועלת הציבור אשר הוקמה בשנת 2013 במטרה לקדם הזרמת הון לפתרון בעיות חברתיות בישראל דרך שימוש בכלי מימון חדשניים. SFI, הפועלת כבית ההשקעות החברתי הראשון בישראל, מפתחת את סקטור השקעות האימפקט בארץ, שצפוי להועיל לכלל אזרחי המדינה. SFI אחראית לפיתוח והוצאתן לפועל של אגרות חוב חברתיות בישראל, ביניהן, אג"ח חברתית לצמצום נשירה מהשכלה גבוהה בקרב סטודנטים למדעי המחשב, אג"ח חברתית למניעת סוכרת מסוג 2 בקרב טרום סוכרתיים בסיכון גבוה ואג"ח להגברת היקף בוגרי מתמטיקה ברמות 4 ו-5 יח"ל בגרות בעיר רהט. באמצעות צוות של אנשי מקצוע מנוסים ממגוון רקעים חברתיים ופיננסיים, SFI מלווה משקיעים חברתיים, קרנות פילנתרופיות, יזמים, ממשלות וארגונים בארץ ובעולם, המעוניינים בהשגת תוצאות חברתיות מדידות ובתשואה חברתית לצד התשואה הכלכלית. כמתווך הפיננסי החברתי הראשון בישראל, SFI מרכזת את פעילות ´הצוות הישראלי לקידום השקעות אימפקט´ אשר חברים בו בכירים מן המגזר החברתי, הציבורי והפיננסי.',
    link: 'https://www.socialfinance.org.il/',
    logo: SFI,
    linkedIn: 'https://www.linkedin.com/company/social-finance-israel',
    date: '2024-01-08',
    tempVariable: true,
  },
  {
    id: '29',
    name: 'עובד לי',
    type: 'מיזם',
    sector: ['חברתי', 'עסקי'],
    fields: ['תעסוקה'],
    phone: '',
    email: '0775497716',
    shortDescription: `מנגיש מועמדים מגוונים למעסיקים. תשתית דיגיטלית ייעודית לחיבור בין מעסיקים, עובדים מגוונים וגופי השמה, ליווי והכשרה במקום אחד! כמו 'הלינקדאין' לאוכלוסיות הקידום. דגש על אנשים עם מוגבלויות`,
    description: `"עובד לי" זו רשת תעסוקתית חדשנית מבוססת AI אשר מחברת בין מועמדים מאוכלוסיות מגוונות שלא מיוצגות מספיק בשוק העבודה לבין המעסיקים בצורה נוחה, מהירה ומדויקת המותאמת לשוק התעסוקה המודרני ולצרכים של שני הצדדים. מיזם "עובד לי" הינו מיזם חברתי במודל Impact אשר מהווה הזדמנות מצוינת לשילוב אוכלוסיות מוחלשות וממודרות בשוק העבודה, צמצום פערים חברתיים, העצמה של אוכלוסיות מוחלשות ושת"פ עם מס' רב של גורמים.`,
    link: 'https://hackaveret.org/projects/oved-li/',
    logo: ovedLI,
    linkedIn: '',
    date: '2024-01-08',
  },
  {
    id: '30',
    name: 'Edge Rethinking Education',
    type: 'פלטפורמה',
    sector: ['חברתי', 'עסקי'],
    fields: ['חינוך', 'למידה'],
    phone: '',
    email: '',
    shortDescription:
      'סיוע למורים, ילדים והורים לעצב, ליישם ולנטר תהליכי למידה מותאמים אישית',
    description:
      'אנו מאמינים בפדגוגיה הוליסטית, המופעלת על ידי טכנולוגיה. אנו שואפים ליצור מערכת חינוך מעצימה ומגיבה המעניקה לילדים יכולות רלוונטיות להגיע למימוש עצמי ולהשתלב בחברה המודרנית. המשימה שלנו היא ליצור כלים ומשאבים קהילתיים המאפשרים למחנכים, ילדים והורים לעצב, ליישם ולנטר תהליכי למידה מותאמים אישית לכל ילד מנקודת מבט הוליסטית. החברה פיתחה את לאנה – מנטורית דיגיטלית מבוססת AI שמטרתה ללוות לומדים עצמאיים בתהליכי הלמידה המקוונת שלהם. בחברה שמים דגש על מיומנויות SRL והמטרה היא לעזור ללומדים לממש את היעדים שהם הציבו לעצמם לסיים את הקורס ולהמשיך לקורס הבא. AI שמטרתה ללוות לומדים עצמאיים בתהליכי הלמידה המקוונת שלהם. בחברה שמים דגש על מיומנויות SRL  והמטרה היא לעזור ללומדים לממש את היעדים שהם הציבו לעצמם לסיים את הקורס ולהמשיך לקורס הבא.',
    link: '',
    logo: edge,
    linkedIn: 'https://il.linkedin.com/company/rethinkedge',
    date: '2024-01-08',
  },
  {
    id: '31',
    name: 'ADHDoTech',
    type: 'מיזם',
    sector: ['חברתי', 'עסקי'],
    fields: ['תעסוקה'],
    phone: '',
    email: 'info@adhdotech.org',
    shortDescription:
      'ADHDoTech הוא ארגון ללא מטרות רווח המוקדש לתמיכה באנשים עם ADHD בחתירתם להצלחה בתעשיית ההיי-טק.',
    description:
      'האתגרים בעבודה בתעשיית ההייטק כוללים דרישה לניהול עצמי ופרודקטיביות גבוהה. מטרת החברה היא צמצום שיעור הנשירה והגדלת הפרודוקטיביות של מבוגרים עם ADHD שעובדים בתעשיית ההייטק על ידי פיתוח פלטפורמה המסייעת להם בניהול זמן בסביבה מרובת משימות Transforming ADHDer into-Tech Talents)).',
    link: 'https://adhdotech.org/',
    logo: adHD,
    linkedIn: 'https://www.linkedin.com/company/adhdotech/?originalSubdomain=il',
    date: '2024-01-08',
  },
  {
    id: '32',
    name: 'AI Junk',
    type: 'פלטפורמה',
    sector: ['עסקי'],
    fields: ['חינוך', 'למידה'],
    phone: '',
    email: 'tamir@ai-blog.co.il',
    shortDescription:
      'קהילת AI-JUNK נולדה כדי להנגיש לכל אדם משחק ולימוד של תיכנות ובינה מלאכותית עם רובוטים עשויים מגרוטאות.',
    description: `<div>
    קהילת AI-JUNK נולדה כדי להנגיש לכל אדם משחק ולימוד של תיכנות ובינה מלאכותית עם רובוטים עשויים מגרוטאות. 
</div>
<div>
למה גרוטאות? כי לכל אחד יש בבית וזה לא יקר, כי אם לא נעשה איתם משהו הם ייזרקו לפח ויפגעו בטבע, בחיות, ויזהמו את הסביבה של כולנו! כיוון שמאוד כיף וזול ליצור רובוטים מגרוטאות, ניתן גם להמציא משחקים ומשימות ובכך לעודד את היצירתיות שלנו ושל ילדינו! 
</div>
<div>
בשאיפה ניצור תרבות של לשחק במשחקים שאנחנו יוצרים ולא רק נצרוך צעצועים ומשחקים שלפעמים סתם מעלים אבק על המדף בחדרי הילדים. מהפיכת הבינה המלאכותית שהחלה ב 2012 מאפשרת לנו באמצעים פשוטים להפוך את הצעצועים שלנו לחכמים וזה לגמרי יכול להיות נחלת הכלל! 
</div>
ההורים שבינינו לרוב היו רוצים שילדיהם יהיו קצת פחות מול מסכים, כי יותר מידי מהם עשוי קצת לנוון לנו מיומנויות אנושיות תקשורתיות ומוטוריות. כשהאדם יוצר ומעצב במו ידיו צעצועים, הוא משתמש בחומרים, בגזירות ובהדבקות, הוא משחק במרחב הפיסי בעודו בתנועה, ואולי הכי חשוב הוא משחק יחד עם חברים לא וירטואליים, וכל זה בשילוב תיכנות ובינה מלאכותית.
`,
    link: 'https://www.ai-junk.com/',
    logo: AIJunk,
    linkedIn: 'https://www.linkedin.com/company/ai-junk/',
    date: '2024-01-08',
  },
  {
    id: '33',
    name: 'Tov Tech',
    type: 'מיזם',
    sector: ['חברתי', 'עסקי'],
    fields: ['תעסוקה'],
    phone: '',
    email: 'talya@tovtech.org',
    shortDescription: `שילוב אנשים עם מוגבלות במקצועות הייטק`,
    description: `טוב-טק היא חברה טכנולוגית העוסקת בתחום הדאטה, אוטומציה ובינה מלאכותית ומכשירה ומעסיקה אנשים עם מוגבלות.
אנו מאמינים כי באמצעות בניית תכנית מותאמת והכשרה מתאימה נוכל לממש את הפוטנציאל של אנשים רבים עם מוגבלות באמצעות שילובם במקצועות ההייטק. אנו שואפים לאפשר לכמה שיותר אנשים לקחת חלק, ולכן התוכניות שלנו מסובסדות, מקוונות ומופעלות בשיטות למידה מותאמות.`,
    link: 'https://tovtech.org/',
    logo: tovTech,
    linkedIn: 'https://www.linkedin.com/company/tovtech/',
    date: '2024-01-08',
  },
] as Product[];
export const articles = [
  {
    image: articlePreview,
    title: `﻿למצוא עבודה ל-12 אלף מפונים: כך נולד מיזם התעסוקה "710 מערב`,
    brief: `היזמת חנה רדו הקימה, בשיתוף קרן מיראז' ומועצה אזורית אשכול, מיזם שנועד לסייע למפונים במלונות ים המלח ואילת לחזור לשגרת עבודה • "התעסוקה הכרחית לבריאות הגוף והנפש", היא אומרת`,
    link: 'https://www.globes.co.il/news/article.aspx?did=1001464034',
    logo: globes,
  },
] as IArticle[];
