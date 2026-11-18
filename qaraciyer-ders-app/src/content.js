/** Dərs məzmunu — mənbə: qaraciyer-asan-ders.md (Parviz Babayev, 21-ci dərs). Uydurma yoxdur. */

export const meta = {
  title: "Qaraciyər",
  subtitle: "21-ci dərs — asandan çətinə",
  forWhom: "Qaraciyərdən heç nə bilməyən tibbi tələbə / öyrənən",
  source: "Parviz Babayev — Qaraciyər xəstəlikləri (21-ci dərs)",
  howTo:
    "Hər bölməni sırayla keç; özünü yoxla suallarını cavabla, sonra cavablara bax. Sonda ümumi testi ver.",
};

export const sections = [
  {
    id: "0",
    title: "Bölmə 0: Nə öyrənəcəyik (xəritə)",
    goal: "Dərsin ümumi şəklini görmək — haradan başlayıb hara gedəcəyimizi bilmək.",
    blocks: [
      {
        type: "p",
        text: "Bu dərsdə qaraciyəri “fabrika” kimi düşünəcəyik. Əvvəl fabrik haradadır və nə iş görür onu öyrənəcəyik; sonra zədələnmə səbəblərini, hepatit və sirrozu, çatışmazlığı və ağırlaşmaları; sonda laboratoriya göstəriciləri və maddələr mübadiləsindəki dəyişiklikləri.",
      },
      {
        type: "h",
        text: "Öyrənmə sırası",
      },
      {
        type: "ol",
        items: [
          "Qaraciyər nədir, haradadır, nə iş görür",
          "Anatomiya (sadəcə lazım olan)",
          "Funksiyalar (detoks, öd, zülal, qlükoza və s.)",
          "Patologiya və klinika (hepatit, sirroz, çatışmazlıq)",
          "Əlaqələr və çətin hissələr (ensefalopatiya, koma, hepatorenal sindrom, ALT/AST)",
          "Mini xülasə + ümumi yoxlama",
        ],
      },
      {
        type: "h",
        text: "Yadda saxla",
      },
      {
        type: "ul",
        items: [
          "Dərs “anatomiya dərsi” deyil — əsasən funksiya → zədələnmə → nəticə məntiqidir.",
          "Əsas xəstəliklər: hepatit və sirroz.",
          "Ən ağır nəticə: qaraciyər çatışmazlığı və onun ağırlaşmaları.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Bu dərsdə iki ən çox rast gəlinən qaraciyər patologiyası hansılardır?",
        a: "Hepatitlər və qaraciyər sirrozu.",
      },
      {
        q: "“Qaraciyər orqanizmin kimyəvi laboratoriyasıdır” nə deməkdir?",
        a: "Çoxlu kimyəvi işlər (detoks, sintez, ehtiyat) burada gedir.",
      },
      {
        q: "Öyrənməni niyə funksiyadan başlamaq yaxşıdır?",
        a: "Zədələnməni başa düşmək üçün əvvəl “normalda nə işləyir” bilmək lazımdır.",
      },
    ],
  },
  {
    id: "1",
    title: "Bölmə 1: Qaraciyər nədir, haradadır, nə iş görür",
    goal: "Qaraciyəri tanımaq — böyük, həyati vacib orqan olduğunu və əsas “işlərini” sadə dilə salmaq.",
    blocks: [
      {
        type: "p",
        text: "Qaraciyər bədənin ən böyük daxili orqanlarından biridir və ümumi bədən kütləsinin təxminən 2%-ni təşkil edir. Onu orqanizmin mühüm “kimyəvi laboratoriyası” hesab edirlər: qanı təmizləyir, öd hazırlayır, zülal və digər maddələr sintez edir, ehtiyat saxlayır.",
      },
      {
        type: "callout",
        label: "Analoq",
        text: "Qaraciyər = şəhərin təmizlik + anbar + fabrika kompleksi. Küçələrdən (qandan) gələn tullantıları emal edir, lazımi məhsulları istehsal edir, ehtiyat saxlayır.",
      },
      {
        type: "h",
        text: "Əsas anlayışlar",
      },
      {
        type: "ul",
        items: [
          "Qaraciyər (hepar / liver) — böyük metabolik orqan",
          "Hepatosit — qaraciyərin əsas işçi hüceyrəsi (böyrəkdə nefron, sinir sistemində neyron kimi)",
          "Öd (bile) — yağların həzminə kömək edən maye",
          "Detoksikasiya — toksinləri zərərsizləşdirmə",
          "Depolama — vitamin, mineral, qlikogen ehtiyatı saxlama",
        ],
      },
      {
        type: "h",
        text: "Yadda saxla / Diqqət",
      },
      {
        type: "ul",
        items: [
          "Dərmanlar tez-tez 2 orqanı zədələyə bilər: qaraciyər və böyrək.",
          "Qaraciyər yalnız “təmizləyici” deyil — həm də sintez və ehtiyat orqanıdır.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Qaraciyər bədən kütləsinin təxminən neçə faizini təşkil edir?",
        a: "Təxminən 2%.",
      },
      {
        q: "Hepatosit nədir?",
        a: "Qaraciyərin əsas funksional hüceyrəsi.",
      },
      {
        q: "“Kimyəvi laboratoriya” metaforası nəyi vurğulayır?",
        a: "Sintez, detoks və metabolik emal funksiyalarını.",
      },
      {
        q: "Hansı iki orqan dərman zədələnməsinə daha həssasdır?",
        a: "Qaraciyər və böyrək.",
      },
    ],
  },
  {
    id: "2",
    title: "Bölmə 2: Anatomiya sadəcə",
    goal: "Yalnız patologiyanı başa düşmək üçün lazım olan “yerləşmə və hissə” biliklərini almaq.",
    blocks: [
      {
        type: "p",
        text: "Bu dərsdə ətraflı topografik anatomiya yoxdur. Amma 3 şeyi bilmək kifayətdir:",
      },
      {
        type: "ol",
        items: [
          "Hepatositlər — “işçi fabrik işçiləri”. Onlar ölürsə, funksiya düşür.",
          "Öd sistemi — öd hepatositlərdə əmələ gəlir və öd yolları ilə axır. Axın pozulsa → xolestaz / mexaniki sarılıq riski.",
          "Portal qan dövranı — bağırsaqdan gələn qanın böyük hissəsi əvvəl qaraciyərdən keçir. Bu yol tıxansa və ya təzyiq artsa → portal hipertenziya.",
        ],
      },
      {
        type: "callout",
        label: "Analoq",
        text: "Hepatosit = fabrik dəzgahı · Öd yolları = kanalizasiya/boru xətti · Portal vena = fabrikaə girən əsas xammal yolu",
      },
      {
        type: "h",
        text: "Əsas anlayışlar",
      },
      {
        type: "ul",
        items: [
          "Parenxima — orqanın funksional toxuması (əsasən hepatositlər)",
          "Fibroz — normal hüceyrələrin yerini funksiyasız birləşdirici toxumanın tutması",
          "Stellat hüceyrələr — uzunmüddətli zədələnmədə kollagen (fibroz) istehsalına keçə bilər",
          "Kupfer hüceyrələri — qaraciyərdə faqositoz (müdafiə) edən hüceyrələr",
        ],
      },
      {
        type: "h",
        text: "Yadda saxla / Diqqət",
      },
      {
        type: "ul",
        items: [
          "Fibroz = “sağalma cəhdi”, amma çox vaxt funksiyanı azalır.",
          "Dərsdə qeyd: fibrozlaşma geriyə dönməyən proses kimi qiymətləndirilir (klinikada erkən mərhələdə bəzi yaxşılaşmalar mümkün olsa da, bu dərsdə vurğu geridönməzlik üzərindədir).",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Portal hipertenziya nə ilə bağlıdır?",
        a: "Portal qan dövranında təzyiqin artması / axının pozulması.",
      },
      {
        q: "Fibroz nə deməkdir?",
        a: "Normal toxumanın birləşdirici (funksiyasız) toxuma ilə əvəz olunması.",
      },
      {
        q: "Kupfer hüceyrələrinin rolu nədir?",
        a: "Faqositar müdafiə (mikroorqanizm/toksinlərin tutulması).",
      },
      {
        q: "Öd axını pozulduqda əsas risk nədir?",
        a: "Xolestaz və mexaniki sarılıq.",
      },
    ],
  },
  {
    id: "3",
    title: "Bölmə 3: Funksiyalar",
    goal: "Qaraciyərin əsas işlərini siyahı kimi yox, “pozulsa nə olar” məntiqilə öyrənmək.",
    blocks: [
      {
        type: "h",
        text: "3.1. Öd əmələ gəlməsi və sekresiyası",
      },
      {
        type: "p",
        text: "Öd yağların həzminə və bəzi maddələrin xaric olunmasına kömək edir. Öd əmələ gəlməsi/ifrazı pozulsa → həzm və sarılıq problemləri.",
      },
      {
        type: "h",
        text: "3.2. Detoksikasiya (zərərsizləşdirmə)",
      },
      {
        type: "p",
        text: "Qaraciyər toksinləri, dərmanları, ammonyakı, bəzi bakterial toksinləri emal edir. Pozulsa → qanda toksik maddələr yığılır → ensefalopatiya, autointoksikasiya.",
      },
      {
        type: "h",
        text: "3.3. Zülal sintezi",
      },
      {
        type: "ul",
        items: [
          "Albumin — mayeni damarlarda saxlayır. Azalsa → ödem, assit (qarında maye).",
          "Laxtalanma amilləri (məs. fibrinogen) — azalsa → qanaxma meylliyi (hemorragik sindrom).",
          "Plazma zülallarının böyük hissəsi qaraciyərdə hazırlanır: bütün albuminlər və qlobulinlərin təxminən 2/3-ü.",
        ],
      },
      {
        type: "h",
        text: "3.4. Azot mübadiləsi",
      },
      {
        type: "p",
        text: "Amin turşularının yenidən aminləşməsi/dezaminləşməsi, sidik cövhəri (urea) əmələ gəlməsi, kreatin sintezi. Amonyak normada ureaya çevrilir; qaraciyər zədələndikdə amonyak qanda qalır → beyinə ziyan.",
      },
      {
        type: "h",
        text: "3.5. Karbohidrat mübadiləsi",
      },
      {
        type: "ul",
        items: [
          "Qlikogenez — qlükoza → qlikogen (ehtiyat)",
          "Qlikogenoliz — qlikogen → qlükoza",
          "Qlükoneogenez — qeyri-karbohidratlardan (laktat, pirüvat, amin turşuları) qlükoza",
        ],
      },
      {
        type: "p",
        text: "Pozulsa → tez-tez hipoqlikemiya (qanda şəkərin düşməsi).",
      },
      {
        type: "h",
        text: "3.6. Yağ və xolesterin mübadiləsi",
      },
      {
        type: "p",
        text: "Yağ turşılarının oksidləşməsi; xolesterin, fosfolipid, lipoprotein sintezi (ASLP/LDL, ÇASLP/VLDL, YSLP/HDL). Pozulsa → piy infiltrasiyası (yağlı qaraciyər), lipid profilinin pozulması.",
      },
      {
        type: "h",
        text: "3.7. Digər mühüm funksiyalar",
      },
      {
        type: "ul",
        items: [
          "Ferment sintezi",
          "Vitaminlərin (A, D, E, K, B12, fol turşusu) və mikroelementlərin (Fe, Zn, Mo, Cu) depolanması/mübadiləsi",
          "Mikroorqanizm və toksinlərin parçalanması",
          "Qanın depolanması",
          "Hormonların metabolizmi (tiroksin, insulin, katexolaminlər, steroidlər və s.)",
        ],
      },
      {
        type: "h",
        text: "Əsas anlayışlar",
      },
      {
        type: "ul",
        items: [
          "Albumin ↓ → assit/ödem",
          "Laxtalanma amilləri ↓ → qanaxma",
          "Amonyak ↑ → ensefalopatiya",
          "Qlükoza sintezi ↓ → hipoqlikemiya",
          "Öd ↓/axın pozulması → həzm + sarılıq",
        ],
      },
      {
        type: "h",
        text: "Yadda saxla / Diqqət",
      },
      {
        type: "ul",
        items: [
          "“Qaraciyər sıradan çıxdı” demək bir şeyin pozulması deyil — bir çox funksiyanın eyni anda zəifləməsidir.",
          "Assiti yalnız “qarın şişməsi” kimi yadda saxlama; səbəb çox vaxt albumin çatışmazlığı + portal hipertenziyadır.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Albumin azalanda niyə assit olur?",
        a: "Maye damarda tutula bilmir, toxuma/qarın boşluğuna keçir.",
      },
      {
        q: "Amonyak niyə təhlükəlidir?",
        a: "Beyinə təsir edib ensefalopatiyaya səbəb ola bilər.",
      },
      {
        q: "Qlikogenez ilə qlikogenoliz fərqi nədir?",
        a: "Birincisi ehtiyat yığır, ikincisi ehtiyatı parçalayıb qlükoza verir.",
      },
      {
        q: "Yağda həll olan vitaminlər hansılardır?",
        a: "A, D, E, K.",
      },
      {
        q: "Laxtalanma amilləri azalanda hansı sindrom yaranır?",
        a: "Hemorragik sindrom (qanaxma meylliyi).",
      },
    ],
  },
  {
    id: "4",
    title: "Bölmə 4: Patologiya və klinika (asan dil)",
    goal: "Etiologiya → hepatit → sirroz → çatışmazlıq zəncirini başa düşmək.",
    blocks: [
      {
        type: "h",
        text: "4.1. Ümumi etiologiya (səbəblər)",
      },
      {
        type: "p",
        text: "Qaraciyər patologiyasını yaradan əsas amillər:",
      },
      {
        type: "h3",
        text: "İnfeksion amillər",
      },
      {
        type: "ul",
        items: [
          "Viruslar: hepatit A, B, C, D; infeksiöz mononukleoz və s.",
          "İbtidailər: lyambliya, amöb (qaraciyərdə çoxalıb zədələyə bilər)",
          "Göbələklər (az hallarda)",
          "Helmintlər (qurdlar): exinokokk, askarid və s.",
        ],
      },
      {
        type: "h3",
        text: "Hepatotoksik maddələr",
      },
      {
        type: "ul",
        items: [
          "Alkoqol (yağlanma çox vaxt karbohidrat/alkoqol mənşəli mexanizmlərlə əlaqələndirilir)",
          "İstehsalat zəhərləri: fosfor, civə, qurğuşun, CCl₄, benzol törəmələri",
          "Dərmanlar: antibiotiklər, ağrıkəsicilər, sulfanilamidlər",
          "Boyaq və digər kimyəvi maddələr",
        ],
      },
      {
        type: "h3",
        text: "Digər səbəblər",
      },
      {
        type: "ul",
        items: [
          "Qaraciyər şişləri və digər orqanlardan metastazlar",
          "Ödün xaric olmasının pozulması",
          "Qan dövranının pozulması",
          "İrsi metabolizm pozuntuları: Vilson–Konovalov (misin orqanizmdə yığılması)",
        ],
      },
      {
        type: "h",
        text: "4.2. Hepatit nədir?",
      },
      {
        type: "p",
        text: "Hepatit — qaraciyər hüceyrələrinin (hepatositlərin) zədələnməsi və iltihabıdır. Bu zaman detoksikasiya, maddələr mübadiləsi və öd sintezi pozulur.",
      },
      {
        type: "h3",
        text: "Növləri",
      },
      {
        type: "ul",
        items: [
          "Virus hepatitləri (ən çox)",
          "Autoimmun hepatit — immun sistem qaraciyərə hücum edir (dərs qeydində: əsasən uşaqlarda vurğulanır)",
          "Dərman hepatiti — parasetamol, antibiotiklər və s.",
          "Alkoqollu hepatit — yüksək miqdarda spirt",
          "Toksik hepatit — kimyəvi zəhərlər",
        ],
      },
      {
        type: "p",
        text: "Laboratoriya: ALAT, ASAT, ALP (qələvi fosfataza), GGT artır; sərbəst və birləşmiş bilirubin yüksələ bilər.",
      },
      {
        type: "h",
        text: "4.3. Virus hepatitləri — yoluxma və xronikləşmə",
      },
      {
        type: "table",
        headers: ["Növ", "Yoluxma yolu", "Xronikləşmə"],
        rows: [
          ["HAV", "Çirkli su, qida", "Adətən yox (tam sağalma)"],
          ["HBV", "Qan, cinsi yol, ana–uşaq", "Ola bilər"],
          ["HCV", "Qan", "Çox vaxt xronik"],
          ["HDV", "Yalnız HBV ilə birlikdə", "Bəli, daha ağır"],
          ["HEV", "Su, qida", "Adətən yox (hamilədə ağır ola bilər)"],
        ],
      },
      {
        type: "h",
        text: "4.4. Virus hepatitinin patogenetik addımları",
      },
      {
        type: "ol",
        items: [
          "Virus hepatositə daxil olur və çoxalır — HAV, HEV sitoplazmada; HBV, HDV nüvəyə daxil ola bilir; HCV sitoplazmada replikasiya.",
          "İmmun cavab əsas zədələyicidir — yoluxmuş hüceyrə səthində virus antigenləri görünür → CD8⁺ T-limfositlər və NK hüceyrələri hüceyrəni öldürür; IFN-γ, TNF-α iltihabı gücləndirir → nekroz və apoptoz.",
          "İltihab (hepatit) — ALT/AST qana çıxır; detoks və metabolizm zəifləyir.",
          "Xronikləşmə (xüsusən HBV, HCV) — davamlı immun hücum → stellat hüceyrə aktivləşməsi → kollagen → fibroz → sirroz.",
          "Xərçəng riski — xronik hepatitdə (xüsusən HBV/HCV) davamlı hüceyrə yenilənməsi + mutasiyalar (+ HBV-də DNT inteqrasiyası) → hepatosellulyar karsinoma (HCC).",
        ],
      },
      {
        type: "callout",
        label: "Yekun fikir",
        text: "Zədələnmə çox vaxt “virusun özü”ndən çox immun sistemin cavabı ilə bağlıdır. Xronik iltihab fibroz, sirroz və xərçəngə apara bilər.",
      },
      {
        type: "h",
        text: "4.5. Qaraciyər sirrozu",
      },
      {
        type: "p",
        text: "Sirroz — xroniki, polietioloji, proqressiv xəstəlikdir. Qaraciyər toxuması tədricən fibroz toxuma ilə əvəz olunur, funksional hepatosit sayı azalır.",
      },
      {
        type: "h3",
        text: "Əsas tiplər",
      },
      {
        type: "ul",
        items: [
          "Postnekrotik — hissə-hissə nekroz sonrası",
          "Portal — damar/portal mexanizm",
          "Biliar — öd problemləri",
          "Qarışıq",
        ],
      },
      {
        type: "h3",
        text: "Əsas ağırlaşmalar",
      },
      {
        type: "ul",
        items: [
          "Qaraciyər çatışmazlığı",
          "Portal hipertenziya",
          "Hepatosellulyar karsinoma",
        ],
      },
      {
        type: "h3",
        text: "Əlamətlər",
      },
      {
        type: "ul",
        items: [
          "Sarılıq",
          "Dəri qaşınması (toksiklərin/öd komponentlərinin yığılması)",
          "Astenovegetativ sindrom: zəiflik, yorğunluq, emosional qeyri-sabitlik",
          "Hemorragik sindrom və digər simptomlar",
        ],
      },
      {
        type: "h",
        text: "4.6. Qaraciyər çatışmazlığı",
      },
      {
        type: "p",
        text: "Patologiyaların ən ciddi ağırlaşmalarından biri.",
      },
      {
        type: "h3",
        text: "Növlər (zədələnmə mexanizminə görə)",
      },
      {
        type: "ul",
        items: [
          "Hepatosellulyar — virus, zəhər, şüa və s. birbaşa hepatositə təsir (hepatit, piy hepatozu, Reye sindromu, abses, sirroz…)",
          "Xolestatik — öd əmələ gəlməsi/ifrazı pozulur (məs. mexaniki sarılıq); uzun xolestazda öd komponentləri hüceyrəni zədələyir",
          "Qaraciyər-damar — qan dövranı pozulur (portal hipertenziya, işemiya və s.)",
        ],
      },
      {
        type: "p",
        text: "Gedişinə görə: ildırımsürətli, kəskin, xroniki. Dərəcəyə görə: geridönən / geridönməyən.",
      },
      {
        type: "callout",
        label: "Reye sindromu (dərs qeydi)",
        text: "Əsasən 4 yaşa qədər uşaqlarda kəskin virus infeksiyası zamanı aspirin qəbulu ilə əlaqələndirilir.",
      },
      {
        type: "h",
        text: "4.7. Çatışmazlığın ağırlaşmaları",
      },
      {
        type: "h3",
        text: "A) Qaraciyər ensefalopatiyası (hepatoserebral sindrom)",
      },
      {
        type: "p",
        text: "Detoks pozulur → qanda ammonyak, fenol, indol, qısa zəncirli yağ turşuları (QAYT), merkaptan və s. toplanır → MSS zədələnir. Əlamətlər: psixi pozuntular, şüur dəyişməsi, titrəmə, ataksiya, əzələ rigidliyi. Ağırlaşa bilər → qaraciyər koması.",
      },
      {
        type: "h3",
        text: "B) Qaraciyər koması",
      },
      {
        type: "p",
        text: "Şüurun tam itməsi, sinir-psixi fəaliyyətin dayanması, həyati funksiyaların pozulması.",
      },
      {
        type: "ul",
        items: [
          "Qaraciyər-hüceyrə koması — parenxima nekrozu/travma/rezeksiya → detoks pozulur",
          "Qaraciyər-şunt koması — toksinlər portokaval anastomozlarla qaraciyərdən yan keçib birbaşa sistemik qana düşür",
        ],
      },
      {
        type: "h3",
        text: "C) Hepatorenal sindrom",
      },
      {
        type: "p",
        text: "Qaraciyər çatışmazlığı fonunda funksional böyrək pozuntusu. Tez-tez assitlə birlikdə; böyrək perfuziyası azalır. Əlamətlər: proqressiv azotemiya, kreatinin ↑, oliquriya (sidik azalması). Dərs qeydi: amonyak/azotlu birləşmələrin atılmaması komaya aparan vacib mexanizmlərdəndir.",
      },
      {
        type: "h",
        text: "4.8. Maddələr mübadiləsində dəyişikliklər (patologiya zamanı)",
      },
      {
        type: "ul",
        items: [
          "Karbohidrat: qlikogenez/qlikogenoliz/qlükoneogenez zəifləyir → hipoqlikemiya.",
          "Yağ: lipoprotein sintezi pozulur; ASLP və ÇASLP ↑, YSLP ↓; keton cisimcikləri ↑; xolesterin ↓ ola bilər → piy distrofiyası/infiltrasiya.",
          "Zülal: albumin ↓ → hipoalbuminemiya, disproteinemiya, ödem/assit; BCC ↓ → ikincili aldosteronizm → Na saxlanır, K itirilir → hipokaliemiya + alkaloz; koaqulyasiya zülalları ↓ → qanaxma; amonyak ↑; sidik turşusu ↓ ola bilər.",
          "Hormon: steroidlərin oksidləşməsi pozulur → kişilərdə estrogen ↑ (ginekomastiya, testikulyar atrofiya), qadınlarda menstrual pozuntu.",
          "Vitamin / mikroelement / detoks: A,D,E,K sorulması və depolama zəifləyir; Fe, Zn, Cu, Mo mübadiləsi pozulur; endogen və ekzogen toksinlər neytrallaşmır; Kupfer faqositozu zəifləyir.",
        ],
      },
      {
        type: "p",
        text: "Piy distrofiyasının səbəblərinə dərsdə daxil edilib: həddindən artıq yağ/karbohidrat qəbulu, TG sintezinin artması, fosfolipid ↓, oksidləşmə/lipoliz ↓, ÇASLP ↓ (yağın daşınması pozulur), lipokain çatışmazlığı.",
      },
      {
        type: "h",
        text: "4.9. ALT və AST — sadə oxu",
      },
      {
        type: "ul",
        items: [
          "ALAT (ALT) — alanin aminotransferaza: daha çox hepatositdə; ↑ → adətən qaraciyər mənşəli zədələnməyə işarə. Artır: virus hepatiti, toksik/dərman zədələnməsi, yağlı qaraciyər, sirroz, şiş.",
          "ASAT (AST) — aspartat aminotransferaza: qaraciyər + ürək + əzələ + beyin + böyrək… Yalnız qaraciyərə spesifik deyil. Artır: qaraciyər xəstəlikləri, infarkt, əzələ travması, hemoliz.",
        ],
      },
      {
        type: "h",
        text: "Əsas anlayışlar",
      },
      {
        type: "ul",
        items: [
          "Hepatit = iltihab + hepatosit zədələnməsi",
          "Sirroz = xroniki fibroz + funksiya itkisi",
          "Portal hipertenziya, assit, ensefalopatiya, hepatorenal sindrom — ağırlaşmalar zənciri",
          "ALT daha “qaraciyərçi”, AST daha “ümumi”",
        ],
      },
      {
        type: "h",
        text: "Yadda saxla / Diqqət",
      },
      {
        type: "ul",
        items: [
          "HAV/HEV adətən kəskin qalır; HBV/HCV xronikləşmə riski yüksəkdir; HDV yalnız HBV ilə və daha ağırdır.",
          "Xronik iltihabın sonu: fibroz → sirroz → HCC.",
          "Assit görəndə düşün: albumin + portal təzyiq + aldosteron oxu.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Hepatitlə sirrozun əsas fərqi nədir?",
        a: "Hepatit iltihab/zədələnmədir; sirroz isə xroniki fibrozla strukturun daimi dəyişməsidir.",
      },
      {
        q: "Niyə deyilir ki, virus hepatitində zədələnmənin əsasını immun cavab təşkil edir?",
        a: "CD8/NK yoluxmuş hepatositləri öldürür.",
      },
      {
        q: "Portal hipertenziyanın hansı nəticələri olur?",
        a: "Assit, şuntlar, qanaxma riski və digər hemodinamik pozuntular (dərs kontekstində əsasən portal hipertenziya ağırlaşması kimi).",
      },
      {
        q: "Hepatorenal sindromda böyrək “organik”mi dağılır?",
        a: "Əsasən funksional pozuntu (perfuziya azalması).",
      },
      {
        q: "ALT yüksək, amma klinika ürək infarktına oxşayırsa nə düşünmək lazımdır?",
        a: "AST/digər orqan mənbələrini də nəzərə al; AST tək başına qaraciyərə spesifik deyil.",
      },
    ],
  },
  {
    id: "5",
    title: "Bölmə 5: Əlaqələr və çətin hissələr",
    goal: "Ayrı-ayrı faktları birləşdirib “klinik məntiq xəritəsi” qurmaq.",
    blocks: [
      {
        type: "h",
        text: "5.1. Əsas zəncir (yadda saxla)",
      },
      {
        type: "pre",
        text: `Səbəb (virus/toksin/öd/damar/irsi)
        ↓
Hepatosit zədələnməsi + iltihab (hepatit)
        ↓
ALT/AST ↑, bilirubin ↑, funksiyalar ↓
        ↓
Xronik davam → stellat aktivləşmə → fibroz
        ↓
Sirroz
        ↓
Çatışmazlıq + portal hipertenziya
        ↓
Assit, qanaxma, ensefalopatiya/koma, hepatorenal, HCC`,
      },
      {
        type: "h",
        text: "5.2. “Maye damardan niyə çıxır?” — assit mexanizmi",
      },
      {
        type: "ol",
        items: [
          "Albumin ↓ → onkotik təzyiq ↓ → maye damardan çıxır",
          "Portal təzyiq ↑ → maye qarın boşluğuna sızır",
          "Dövr edən qan həcmi ↓ → aldosteron ↑ → Na/su saxlanır → vəziyyət ağırlaşır",
          "Hipokaliemiya və alkaloz da bu zəncirə qoşula bilər",
        ],
      },
      {
        type: "h",
        text: "5.3. “Beyin niyə pozulur?” — ensefalopatiya",
      },
      {
        type: "p",
        text: "Qaraciyər amonyakı ureaya çevirə bilmir / şuntlarla yan keçilir → toksinlər MSS-ə gedir → şüur, psixika, hərəkət pozulur → koma riski.",
      },
      {
        type: "ul",
        items: [
          "Hüceyrə koması = fabrika dağılıb",
          "Şunt koması = tullantı fabrikanı keçib birbaşa şəhərə gedir",
        ],
      },
      {
        type: "h",
        text: "5.4. Fibroz dərəcələri (dərs qeydi)",
      },
      {
        type: "p",
        text: "Dərsdə F1, F2, F3, F4 qeyd olunub; F4 ən ağırdır (sirroz səviyyəsi kimi düşün).",
      },
      {
        type: "h",
        text: "5.5. Orijinaldakı əlavə praktik qeydlər (ehtiyatla)",
      },
      {
        type: "callout",
        label: "Diqqət",
        text: "Docx-in sonunda öd polipi / hepatit üçün bitki yağları və xalq vasitələri (zeytun yağı, şüyüd suyu, alaqanqal, qarazirə, alma sirkəsi və s.) qeyd olunub. Bunlar standart patofizioloji dərs nüvəsi deyil; sübut səviyyəsi və təhlükəsizlik dərsdə açıqlanmayıb. Öyrənərkən əsas kimi viruslar, sirroz, çatışmazlıq və laboratoriya göstəricilərini götür.",
      },
    ],
    selfCheck: [
      {
        q: "Fibrozdan sirroza keçidi bir cümlə ilə izah et.",
        a: "Uzunmüddətli zədələnmə stellat hüceyrələri aktivləşdirir, kollagen yığılır, toxuma yenidən qurulur və funksiya daimi azalır.",
      },
      {
        q: "Şunt koması ilə hüceyrə komasının fərqi?",
        a: "Birində toksinlər yan keçidlə sistemə düşür, digərində parenxima zədələndiyi üçün detoks dayanır.",
      },
      {
        q: "Assitdə aldosteronun rolu nədir?",
        a: "Na və su saxlayıb maye yığılmasını artırır.",
      },
      {
        q: "F4 nə deməkdir?",
        a: "Fibrozun ən ağır dərəcəsi.",
      },
      {
        q: "Niyə HBV + HDV birlikdə daha təhlükəlidir?",
        a: "HDV yalnız HBV ilə olur və gedişi daha ağır/xronik ola bilir.",
      },
    ],
  },
  {
    id: "xulosa",
    title: "Mini xülasə",
    goal: "Bütün dərsin əsas məqamlarını bir yerdə təkrarlamaq.",
    blocks: [
      {
        type: "ol",
        items: [
          "Qaraciyər = detoks + sintez + ehtiyat + öd fabriki.",
          "Əsas işçi hüceyrə = hepatosit.",
          "Səbəblər: virus, toksin/dərman/alkoqol, öd axını, qan dövranı, şiş, irsi (Vilson).",
          "Hepatit → xronik iltihab → fibroz → sirroz → çatışmazlıq/HCC.",
          "Virus zədələnməsində əsas “baltanı” çox vaxt immun sistem vurur.",
          "Assit = albumin ↓ + portal hipertenziya (+ aldosteron).",
          "Ensefalopatiya = detoks pozulması + amonyak/toksinlərin MSS-ə təsiri.",
          "ALT daha qaraciyərə yaxın göstərici; AST çoxorqanlıdır.",
          "HAV/HEV adətən kəskin; HBV/HCV xronik riskli; HDV = HBV-asılı və ağır.",
          "Ən ciddi sonluqlar: qaraciyər çatışmazlığı, koma, hepatorenal sindrom, HCC.",
        ],
      },
    ],
    selfCheck: [],
  },
];

export const glossary = [
  { term: "Hepatosit", meaning: "Qaraciyər hüceyrəsi" },
  { term: "Hepatit", meaning: "Qaraciyər iltihabı" },
  { term: "Sirroz", meaning: "Xroniki fibroz + funksiya itkisi" },
  { term: "Fibroz", meaning: "Birləşdirici toxuma ilə əvəzlənmə" },
  { term: "Assit", meaning: "Qarında maye toplanması" },
  { term: "Portal hipertenziya", meaning: "Portal sistemdə təzyiq artması" },
  { term: "Xolestaz", meaning: "Ödün əmələ gəlməsi/axınının pozulması" },
  { term: "Ensefalopatiya", meaning: "Toksinlərin beyinə təsiri" },
  {
    term: "Hepatorenal sindrom",
    meaning:
      "Qaraciyər çatışmazlığı fonunda funksional böyrək pozuntusu",
  },
  { term: "HCC", meaning: "Hepatosellulyar karsinoma (qaraciyər xərçəngi)" },
  {
    term: "ALT / AST",
    meaning: "Qaraciyər zədələnməsi ferment göstəriciləri",
  },
];

/**
 * Ümumi yoxlama — cavablar mənbəyə uyğundur.
 * Seçimli format üçün digər variantlar eyni dərs anlayışlarından (səhv əlaqələr) götürülüb.
 */
export const quiz = [
  {
    id: "q1",
    q: "Qaraciyərin 5 əsas funksiyasını hansı sıra düzgün əks etdirir?",
    options: [
      "Öd sintezi/sekresiyası; detoks; zülal/laxtalanma amilləri sintezi; karbohidrat-yağ mübadiləsi; vitamin/mikroelement depolanması",
      "Yalnız detoksikasiya və öd sintezi; digər funksiyalar böyrəyə aiddir",
      "Yalnız qan depolanması və hormon sintezi",
      "Yalnız fibroz və portal hipertenziyanın tənzimlənməsi",
    ],
    correct: 0,
    explain:
      "Cavab: Öd sintezi/sekresiyası; detoks; zülal/laxtalanma amilləri sintezi; karbohidrat-yağ mübadiləsi; vitamin/mikroelement depolanması (və digər metabolik işlər).",
  },
  {
    id: "q2",
    q: "Albumin azalmasının iki klinik nəticəsi hansılardır?",
    options: [
      "Ödem və assit (hipoalbuminemiya)",
      "Yalnız hipoqlikemiya və sarılıq",
      "Yalnız ürək infarktı və hemoliz",
      "Yalnız F4 fibroz və HCC",
    ],
    correct: 0,
    explain: "Cavab: Ödem və assit (hipoalbuminemiya).",
  },
  {
    id: "q3",
    q: "Hansı hepatit virusları adətən xronikləşmir?",
    options: ["HAV və HEV", "HBV və HCV", "HDV və HBV", "HCV və HDV"],
    correct: 0,
    explain: "Cavab: HAV və HEV.",
  },
  {
    id: "q4",
    q: "Sirrozun 3 əsas ağırlaşması hansılardır?",
    options: [
      "Qaraciyər çatışmazlığı, portal hipertenziya, hepatosellulyar karsinoma",
      "Yalnız assit, hipoqlikemiya və Reye sindromu",
      "Yalnız HAV, HEV və autoimmun hepatit",
      "Yalnız ALT azalması, AST azalması və bilirubin azalması",
    ],
    correct: 0,
    explain:
      "Cavab: Qaraciyər çatışmazlığı, portal hipertenziya, hepatosellulyar karsinoma.",
  },
  {
    id: "q5",
    q: "Hepatosellulyar, xolestatik və qaraciyər-damar çatışmazlığını necə ayırmaq olar?",
    options: [
      "Birbaşa hüceyrə zədələnməsi / öd əmələgəlmə-ifraz pozuntusu / qan dövranı pozuntusu",
      "Hamısı eyni mexanizmdir — yalnız virusdan yaranır",
      "Yalnız alkoqol / yalnız dərman / yalnız şiş",
      "Yalnız F1 / F2 / F3 fibroz dərəcələri ilə eynidir",
    ],
    correct: 0,
    explain:
      "Cavab: Birbaşa hüceyrə zədələnməsi / öd əmələgəlmə-ifraz pozuntusu / qan dövranı pozuntusu.",
  },
  {
    id: "q6",
    q: "Ensefalopatiyada qanda nə toplanır?",
    options: [
      "Ammonyak, fenol, indol, QAYT, merkaptan və digər toksinlər",
      "Yalnız albumin və laxtalanma amilləri",
      "Yalnız A, D, E, K vitaminləri",
      "Yalnız LDL və HDL lipoproteinləri",
    ],
    correct: 0,
    explain:
      "Cavab: Ammonyak, fenol, indol, QAYT, merkaptan və digər toksinlər.",
  },
  {
    id: "q7",
    q: "ALT niyə AST-dən daha “qaraciyər spesifik” sayılır?",
    options: [
      "ALT daha çox hepatositdə cəmləşir; AST bir çox orqanda var",
      "AST yalnız qaraciyərdədir, ALT isə ürəkdədir",
      "ALT yalnız virus hepatitində artır, AST heç vaxt artmır",
      "İkisi də eyni orqanlara spesifikdir — fərq yoxdur",
    ],
    correct: 0,
    explain:
      "Cavab: ALT daha çox hepatositdə cəmləşir; AST bir çox orqanda var.",
  },
  {
    id: "q8",
    q: "Vilson–Konovalov xəstəliyində nə yığılır?",
    options: ["Mis", "Dəmir", "Sink", "Natrium"],
    correct: 0,
    explain: "Cavab: Mis.",
  },
  {
    id: "q9",
    q: "Reye sindromu dərsdə nə ilə əlaqələndirilir?",
    options: [
      "Kiçik uşaqlarda virus infeksiyası zamanı aspirin qəbulu",
      "Yalnız HBV + HDV koinfeksiyası",
      "Yalnız portal hipertenziya və assit",
      "Yalnız F4 fibroz dərəcəsi",
    ],
    correct: 0,
    explain:
      "Cavab: Kiçik uşaqlarda virus infeksiyası zamanı aspirin qəbulu.",
  },
  {
    id: "q10",
    q: "“Qaraciyərin zədələnməsi əsasən virusdan çox immun cavabla bağlıdır” cümləsi hansı prosesi izah edir?",
    options: [
      "CD8⁺/NK hüceyrələrinin yoluxmuş hepatositləri məhv etməsi",
      "Yalnız öd yollarının mexaniki tıxanması",
      "Yalnız albumin sintezinin artması",
      "Yalnız qlükoneogenezin güclənməsi",
    ],
    correct: 0,
    explain:
      "Cavab: CD8⁺/NK hüceyrələrinin yoluxmuş hepatositləri məhv etməsi.",
  },
];

export const STORAGE_KEY = "qaraciyer-ders-progress-v1";
