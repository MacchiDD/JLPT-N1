// words.js 词库文件
const hiraganaBank = [
    { 
        id: 1, 
        word: "みやびやか", 
        kanji: "雅やか", 
        kana: "みやびやか", 
        meaning: "优雅，高雅，风雅",
        example_jp: "彼女はみやびやかな衣装を身にまとっていた。",
        example_cn: "她身穿优雅的服装。"
    },
    { 
        id: 2, 
        word: "くらます", 
        kanji: "晦ます / 眩ます", 
        kana: "くらます", 
        meaning: "隐藏，掩盖，欺骗",
        example_jp: "彼は借金を抱えたまま、行方をくらました。",
        example_cn: "他背负着债务，隐藏了行踪（下落不明）。"
    },
    { 
        id: 3, 
        word: "ややこしい", 
        kanji: "ややこしい", 
        kana: "ややこしい", 
        meaning: "复杂，麻烦，难办",
        example_jp: "人間関係がややこしい職場には行きたくない。",
        example_cn: "我不想去人际关系复杂的职场。"
    },
    { 
        id: 4, 
        word: "むっちり", 
        kanji: "むっちり", 
        kana: "むっちり", 
        meaning: "丰满，肉感，严实",
        example_jp: "赤ちゃんのむっちりとした腕が可愛い。",
        example_cn: "婴儿肉嘟嘟（丰满）的手臂很可爱。"
    },
    { 
        id: 5, 
        word: "そこら", 
        kanji: "其処ら", 
        kana: "そこら", 
        meaning: "那一带，附近，左右",
        example_jp: "鍵はそのそこらに置いたはずだが、見当たらない。",
        example_cn: "钥匙应该放在那一带了，但找不到。"
    },
    { 
        id: 6, 
        word: "おめかし", 
        kanji: "おめかし", 
        kana: "おめかし", 
        meaning: "打扮，修饰",
        example_jp: "彼女はパーティーのためにおめかしをした。",
        example_cn: "她为了聚会精心打扮了一番。"
    },
    { 
        id: 7, 
        word: "がつがつ", 
        kanji: "がつがつ", 
        kana: "がつがつ", 
        meaning: "贪婪，狼吞虎咽",
        example_jp: "三日間何も食べていなかったので、がつがつと料理を食べた。",
        example_cn: "因为三天没吃东西了，狼吞虎咽地吃起了饭菜。"
    },
    { 
        id: 8, 
        word: "ひらめき", 
        kanji: "閃き", 
        kana: "ひらめき", 
        meaning: "闪念，灵光一现",
        example_jp: "ふとした瞬間に、素晴らしいアイデアのひらめきがあった。",
        example_cn: "在不经意的瞬间，突然闪过一个极好的主意。"
    },
    { 
        id: 9, 
        word: "ちょきちょき", 
        kanji: "ちょきちょき", 
        kana: "ちょきちょき", 
        meaning: "咔嚓咔嚓（剪刀剪东西的声音）",
        example_jp: "美容師が髪をちょきちょきと切る音が聞こえる。",
        example_cn: "能听到理发师咔嚓咔嚓剪头发的声音。"
    },
    { 
        id: 10, 
        word: "にんまり", 
        kanji: "にんまり", 
        kana: "にんまり", 
        meaning: "满意地笑，窃笑",
        example_jp: "自分の計画通りに事が進み、彼はにんまりと笑った。",
        example_cn: "事情按自己的计划发展，他满意地笑了。"
    },
    { 
        id: 11, 
        word: "のそのそ", 
        kanji: "のそのそ", 
        kana: "のそのそ", 
        meaning: "迟缓，慢吞吞",
        example_jp: "大きな熊が森の中からのそのそと姿を現した。",
        example_cn: "一只大熊慢吞吞地从森林里现身了。"
    },
    { 
        id: 12, 
        word: "へこむ", 
        kanji: "凹む", 
        kana: "へこむ", 
        meaning: "凹陷，退缩，沮丧",
        example_jp: "試験に落ちて、すっかりへこんでしまった。",
        example_cn: "考试落榜了，彻底沮丧了。"
    },
    { 
        id: 13, 
        word: "もがく", 
        kanji: "踠く", 
        kana: "もがく", 
        meaning: "挣扎，焦急，拼命",
        example_jp: "借金を返そうと必死にもがいている。",
        example_cn: "为了还清债务正在拼命挣扎。"
    },
    { 
        id: 14, 
        word: "れんが", 
        kanji: "煉瓦", 
        kana: "れんが", 
        meaning: "砖，砖块",
        example_jp: "この建物は古いれんが造りだ。",
        example_cn: "这座建筑物是古老的砖瓦结构。"
    },
    { 
        id: 15, 
        word: "かさむ", 
        kanji: "嵩む", 
        kana: "かさむ", 
        meaning: "增多，增大（多指开销、利息等负担）",
        example_jp: "物価が上がり、生活費がかさむ一方だ。",
        example_cn: "物价上涨，生活费不断增加。"
    },
    { 
        id: 16, 
        word: "ぽろぽろ", 
        kanji: "ぽろぽろ", 
        kana: "ぽろぽろ", 
        meaning: "簌簌地（掉下），纷纷落下",
        example_jp: "悲しい映画を見て、涙がぽろぽろとこぼれた。",
        example_cn: "看了悲伤的电影，眼泪簌簌地落了下来。"
    },
    { 
        id: 17, 
        word: "にじみ出る", 
        kanji: "滲み出る", 
        kana: "にじみでる", 
        meaning: "渗出，流露，显露",
        example_jp: "彼の手紙には、妻への深い愛情がにじみ出ている。",
        example_cn: "他的信中流露出对妻子深厚的爱。"
    },
    { 
        id: 18, 
        word: "たらし込む", 
        kanji: "垂らし込む / 誑し込む", 
        kana: "たらしこむ", 
        meaning: "欺骗，诱骗，勾引",
        example_jp: "甘い言葉で女性をたらし込む詐欺師。",
        example_cn: "用甜言蜜语诱骗女性的骗子。"
    },
    { 
        id: 19, 
        word: "ならびに", 
        kanji: "並びに", 
        kana: "ならびに", 
        meaning: "以及，和（郑重书面语）",
        example_jp: "社長ならびに役員一同、心よりお詫び申し上げます。",
        example_cn: "总经理及全体董事，由衷地表示歉意。"
    },
    { 
        id: 20, 
        word: "くるむ", 
        kanji: "包む", 
        kana: "くるむ", 
        meaning: "包，裹",
        example_jp: "寒くないように、赤ん坊を毛布でくるんだ。",
        example_cn: "为了不让婴儿受凉，用毛毯把他裹了起来。"
    },
    { 
        id: 21, 
        word: "ばたばた", 
        kanji: "ばたばた", 
        kana: "ばたばた", 
        meaning: "慌慌张张，拍打，接连倒下",
        example_jp: "出発の準備で、朝からばたばたしている。",
        example_cn: "为了准备出发，从早上开始就忙得团团转。"
    },
    { 
        id: 22, 
        word: "すっぽかす", 
        kanji: "すっぽかす", 
        kana: "すっぽかす", 
        meaning: "爽约，放鸽子，置之不理",
        example_jp: "彼はデートの約束をすっぽかした。",
        example_cn: "他约会爽约（放了鸽子）了。"
    },
    { 
        id: 23, 
        word: "それでいて", 
        kanji: "其れで居て", 
        kana: "それでいて", 
        meaning: "尽管如此，可是",
        example_jp: "この仕事は給料が安い。それでいて責任は重い。",
        example_cn: "这份工作工资低。尽管如此，责任却很重。"
    },
    { 
        id: 24, 
        word: "さくら", 
        kanji: "偽客", 
        kana: "さくら", 
        meaning: "托儿（伪装的客人）",
        example_jp: "あの店に行列ができているが、半分はさくららしい。",
        example_cn: "那家店虽然排着长队，但据说一半是托儿。"
    },
    { 
        id: 25, 
        word: "もろい", 
        kanji: "脆い", 
        kana: "もろい", 
        meaning: "脆弱，易坏，易受感动",
        example_jp: "年を取って、すっかり涙もろくなった。",
        example_cn: "上了年纪，变得非常容易掉眼泪（脆弱）。"
    },
    { 
        id: 26, 
        word: "そろり", 
        kanji: "そろり", 
        kana: "そろり", 
        meaning: "轻轻地，缓慢地",
        example_jp: "赤ちゃんを起こさないように、そろりと部屋を出た。",
        example_cn: "为了不吵醒婴儿，蹑手蹑脚地走出了房间。"
    },
    { 
        id: 27, 
        word: "なぞらえる", 
        kanji: "準える", 
        kana: "なぞらえる", 
        meaning: "仿造，比拟，比作",
        example_jp: "人生をしばしば航海になぞらえることがある。",
        example_cn: "人们经常把人生比作航海。"
    },
    { 
        id: 28, 
        word: "ぼろ", 
        kanji: "襤褸", 
        kana: "ぼろ", 
        meaning: "破烂，缺点，破绽",
        example_jp: "言い訳をすればするほど、ぼろを出す結果になる。",
        example_cn: "越是辩解，结果越是露出破绽。"
    },
    { 
        id: 29, 
        word: "やけに", 
        kanji: "焼けに", 
        kana: "やけに", 
        meaning: "非常，极其（常伴随不寻常的感觉）",
        example_jp: "今日はやけに喉が渇く。",
        example_cn: "今天口渴得要命。"
    },
    { 
        id: 30, 
        word: "たらたら", 
        kanji: "たらたら", 
        kana: "たらたら", 
        meaning: "滴答滴答，喋喋不休，磨磨蹭蹭",
        example_jp: "不満をたらたらこぼす。",
        example_cn: "喋喋不休地发牢骚。"
    },
    { 
        id: 31, 
        word: "わざわざ", 
        kanji: "態々", 
        kana: "わざわざ", 
        meaning: "特意，专程",
        example_jp: "雨の中をわざわざお越しいただき、ありがとうございます。",
        example_cn: "感谢您冒雨特意前来。"
    },
    { 
        id: 32, 
        word: "ぎごちない", 
        kanji: "ぎごちない", 
        kana: "ぎごちない", 
        meaning: "笨拙，生硬，不自然",
        example_jp: "彼は英語を話す時、いつもぎごちない。",
        example_cn: "他说英语时总是很生硬。"
    },
    { 
        id: 33, 
        word: "あたふた", 
        kanji: "あたふた", 
        kana: "あたふた", 
        meaning: "慌慌张张，急急忙忙",
        example_jp: "突然の指名に、あたふたしてしまった。",
        example_cn: "突然被点名，弄得我慌慌张张的。"
    },
    { 
        id: 34, 
        word: "なだめる", 
        kanji: "宥める", 
        kana: "なだめる", 
        meaning: "劝慰，安抚，平息",
        example_jp: "怒っている客をなんとかしてなだめた。",
        example_cn: "想办法安抚了生气的客人。"
    },
    { 
        id: 35, 
        word: "あがめる", 
        kanji: "崇める", 
        kana: "あがめる", 
        meaning: "崇拜，尊敬",
        example_jp: "彼は村人から神のようにあがめられている。",
        example_cn: "他被村民们像神一样崇拜着。"
    },
    { 
        id: 36, 
        word: "さも", 
        kanji: "然も", 
        kana: "さも", 
        meaning: "仿佛，确实，非常",
        example_jp: "彼はさも知っているかのような顔をして話した。",
        example_cn: "他装出一副仿佛什么都知道的表情在说话。"
    },
    { 
        id: 37, 
        word: "さっと", 
        kanji: "さっと", 
        kana: "さっと", 
        meaning: "迅速地，一下子",
        example_jp: "自転車がさっと通り過ぎた。",
        example_cn: "自行车嗖地一下开过去了。"
    },
    { 
        id: 38, 
        word: "じくじく", 
        kanji: "じくじく", 
        kana: "じくじく", 
        meaning: "湿漉漉，渗水，隐隐作痛",
        example_jp: "雨で靴の中がじくじくしている。",
        example_cn: "因为下雨，鞋里湿漉漉的。"
    },
    { 
        id: 39, 
        word: "つるつる", 
        kanji: "つるつる", 
        kana: "つるつる", 
        meaning: "光滑，溜滑",
        example_jp: "道が凍ってつるつる滑る。",
        example_cn: "道路结冰了，非常滑。"
    },
    { 
        id: 40, 
        word: "やきもき", 
        kanji: "やきもき", 
        kana: "やきもき", 
        meaning: "焦虑，焦急，坐立不安",
        example_jp: "試験の結果がなかなか来なくてやきもきする。",
        example_cn: "考试结果迟迟没来，急得坐立不安。"
    },
    { 
        id: 41, 
        word: "こぞって", 
        kanji: "挙って", 
        kana: "こぞって", 
        meaning: "全部，全都",
        example_jp: "町の人はこぞって祭りに参加した。",
        example_cn: "镇上的人全都参加了祭典。"
    },
    { 
        id: 42, 
        word: "それにしては", 
        kanji: "其れにしては", 
        kana: "それにしては", 
        meaning: "照那样说来，（虽然...）却...",
        example_jp: "彼はアメリカに5年もいたが、それにしては英語が下手だ。",
        example_cn: "他在美国呆了5年，照理说英语应该不错，却很差。"
    },
    { 
        id: 43, 
        word: "かねがね", 
        kanji: "予々", 
        kana: "かねがね", 
        meaning: "以前，早就",
        example_jp: "先生のお名前はかねがね伺っております。",
        example_cn: "老师的大名，我早就久仰了。"
    },
    { 
        id: 44, 
        word: "いたたまれない", 
        kanji: "居堪れない", 
        kana: "いたたまれない", 
        meaning: "无地自容，待不下去",
        example_jp: "あまりの恥ずかしさに、その場にいたたまれなくなった。",
        example_cn: "因为太丢人了，在那个地方实在待不下去了。"
    },
    { 
        id: 45, 
        word: "じたばた", 
        kanji: "じたばた", 
        kana: "じたばた", 
        meaning: "挣扎，慌张，手忙脚乱",
        example_jp: "今さらじたばたしても始まらない。",
        example_cn: "事到如今再怎么挣扎也无济于事了。"
    },
    { 
        id: 46, 
        word: "びくとも", 
        kanji: "びくとも", 
        kana: "びくとも", 
        meaning: "丝毫（不动）",
        example_jp: "大風が吹いても、その木はびくともしない。",
        example_cn: "即使刮大风，那棵树也丝毫不动。"
    },
    { 
        id: 47, 
        word: "おびえる", 
        kanji: "怯える", 
        kana: "おびえる", 
        meaning: "害怕，胆怯，发怵",
        example_jp: "小鳥は大きな音におびえているようだった。",
        example_cn: "小鸟好像被巨大的声音吓坏了。"
    },
    { 
        id: 48, 
        word: "あえて", 
        kanji: "敢えて", 
        kana: "あえて", 
        meaning: "敢于，硬要，勉强",
        example_jp: "反対されるのはわかっているが、あえて提案する。",
        example_cn: "明知道会被反对，但我还是敢于提出这个建议。"
    },
    { 
        id: 49, 
        word: "てかてか", 
        kanji: "てかてか", 
        kana: "てかてか", 
        meaning: "发亮，油光闪亮",
        example_jp: "油で顔がてかてかしている。",
        example_cn: "脸上满是油，油光发亮的。"
    },
    { 
        id: 50, 
        word: "たくらむ", 
        kanji: "企む", 
        kana: "たくらむ", 
        meaning: "企图，图谋",
        example_jp: "彼は陰で何か悪いことをたくらんでいるらしい。",
        example_cn: "他好像在背地里图谋什么坏事。"
    },
{ 
        id: 51, 
        word: "うきうき", 
        kanji: "浮き浮き", 
        kana: "うきうき", 
        pos: "副词 / 自动词・サ变",
        meaning: "兴高采烈，欢欣雀跃",
        example_jp: "明日はデートなので、彼女はうきうきしている。",
        example_cn: "因为明天要约会，她显得兴高采烈。"
    },
    { 
        id: 52, 
        word: "へなへな", 
        kanji: "へなへな", 
        kana: "へなへな", 
        pos: "副词 / 形容动词 / 自动词・サ变",
        meaning: "软弱无力，瘫软",
        example_jp: "ショックな知らせを聞いて、へなへなと座り込んだ。",
        example_cn: "听到令人震惊的消息，瘫软地跌坐在地上。"
    },
    { 
        id: 53, 
        word: "むしゃくしゃ", 
        kanji: "むしゃくしゃ", 
        kana: "むしゃくしゃ", 
        pos: "副词 / 自动词・サ变",
        meaning: "心烦意乱，烦躁",
        example_jp: "上司に理不尽な怒られ方をして、むしゃくしゃする。",
        example_cn: "被上司无理地训斥了一顿，心里很烦躁。"
    },
    { 
        id: 54, 
        word: "〜じみる", 
        kanji: "〜染みる", 
        kana: "〜じみる", 
        pos: "接尾词 / 自动词・一段",
        meaning: "沾染…，带有…气息/倾向",
        example_jp: "彼の言うことは、いつも説教じみている。",
        example_cn: "他说的话总是带着说教的意味。"
    },
    { 
        id: 55, 
        word: "こじらせる", 
        kanji: "拗らせる", 
        kana: "こじらせる", 
        pos: "他动词・一段",
        meaning: "使复杂化，使恶化",
        example_jp: "風邪をこじらせて、肺炎になってしまった。",
        example_cn: "感冒恶化，变成了肺炎。"
    },
    { 
        id: 56, 
        word: "うらうら", 
        kanji: "麗らか / うらうら", 
        kana: "うらうら", 
        pos: "副词",
        meaning: "晴朗，和煦",
        example_jp: "春のうらうらとした陽気に誘われて散歩に出た。",
        example_cn: "被春日和煦的阳光吸引，出门散步了。"
    },
    { 
        id: 57, 
        word: "おっかない", 
        kanji: "おっかない", 
        kana: "おっかない", 
        pos: "形容词",
        meaning: "可怕，令人害怕",
        example_jp: "あの先生は怒ると本当におっかない。",
        example_cn: "那位老师发脾气时真的很可怕。"
    },
    { 
        id: 58, 
        word: "とどめる", 
        kanji: "留める / 止める", 
        kana: "とどめる", 
        pos: "他动词・一段",
        meaning: "保留，停留在...",
        example_jp: "被害を最小限にとどめるよう努力する。",
        example_cn: "努力将损失控制在最小限度。"
    },
    { 
        id: 59, 
        word: "はるか", 
        kanji: "遥か", 
        kana: "はるか", 
        pos: "形容动词 / 副词",
        meaning: "遥远",
        example_jp: "はるか遠くの山々に雪が積もっている。",
        example_cn: "遥远的群山上积着雪。"
    },
    { 
        id: 60, 
        word: "おおしけ", 
        kanji: "大時化", 
        kana: "おおしけ", 
        pos: "名词",
        meaning: "狂风巨浪",
        example_jp: "おおしけのため、漁船は港から出られなかった。",
        example_cn: "因为狂风巨浪，渔船无法出港。"
    },
    { 
        id: 61, 
        word: "よたよた", 
        kanji: "よたよた", 
        kana: "よたよた", 
        pos: "副词 / 自动词・サ变",
        meaning: "摇摇晃晃，步履蹒跚",
        example_jp: "お酒に酔って、よたよたと歩く。",
        example_cn: "喝醉了酒，走路摇摇晃晃的。"
    },
    { 
        id: 62, 
        word: "〜がましい", 
        kanji: "〜がましい", 
        kana: "〜がましい", 
        pos: "接尾词 / 形容词",
        meaning: "近似...，有...之嫌",
        example_jp: "押し付けがましい態度は嫌われる。",
        example_cn: "强加于人的态度会惹人讨厌。"
    },
    { 
        id: 63, 
        word: "じんわり", 
        kanji: "じんわり", 
        kana: "じんわり", 
        pos: "副词",
        meaning: "渐渐地，慢慢渗出",
        example_jp: "感動して、目に涙がじんわりと浮かんだ。",
        example_cn: "深受感动，眼泪渐渐在眼眶里打转。"
    },
    { 
        id: 64, 
        word: "わらび", 
        kanji: "蕨", 
        kana: "わらび", 
        pos: "名词",
        meaning: "蕨菜",
        example_jp: "春になると、山へわらびを採りに行く。",
        example_cn: "一到春天，就去山里采蕨菜。"
    },
    { 
        id: 65, 
        word: "いろは", 
        kanji: "伊呂波 / 色葉", 
        kana: "いろは", 
        pos: "名词",
        meaning: "入门，基础",
        example_jp: "仕事のいろはから丁寧に教える。",
        example_cn: "从工作的基础开始认真教起。"
    },
    { 
        id: 66, 
        word: "せかせる", 
        kanji: "急かせる", 
        kana: "せかせる", 
        pos: "他动词・一段",
        meaning: "催促",
        example_jp: "あまり人をせかせないでください。",
        example_cn: "请不要总是催促别人。"
    },
    { 
        id: 67, 
        word: "ねじれる", 
        kanji: "捩れる", 
        kana: "ねじれる", 
        pos: "自动词・一段",
        meaning: "扭曲，别扭",
        example_jp: "ネクタイがねじれていますよ。",
        example_cn: "你的领带扭曲了哦。"
    },
    { 
        id: 68, 
        word: "ずれ", 
        kanji: "ズレ / 擦れ", 
        kana: "ずれ", 
        pos: "名词",
        meaning: "偏差，错位",
        example_jp: "理想と現実の間に大きなずれがある。",
        example_cn: "理想与现实之间存在很大的偏差。"
    },
    { 
        id: 69, 
        word: "だるい", 
        kanji: "怠い", 
        kana: "だるい", 
        pos: "形容词",
        meaning: "慵懒，乏力",
        example_jp: "熱があって、体全体がだるい。",
        example_cn: "发烧了，全身乏力。"
    },
    { 
        id: 70, 
        word: "のめり込む", 
        kanji: "のめり込む / 滑り込む", 
        kana: "のめりこむ", 
        pos: "自动词・五段",
        meaning: "沉迷，陷入",
        example_jp: "彼はオンラインゲームに完全にのめり込んでいる。",
        example_cn: "他完全沉迷于网络游戏之中。"
    },
    { 
        id: 71, 
        word: "いかだ", 
        kanji: "筏", 
        kana: "いかだ", 
        pos: "名词",
        meaning: "木筏",
        example_jp: "木を組んでいかだを作り、川を下った。",
        example_cn: "把木头绑在一起做成木筏，顺流而下。"
    },
    { 
        id: 72, 
        word: "さびる", 
        kanji: "錆びる", 
        kana: "さびる", 
        pos: "自动词・一段",
        meaning: "生锈",
        example_jp: "雨ざらしにしておいた自転車がさびてしまった。",
        example_cn: "放在外面任凭风吹雨打的自行车生锈了。"
    },
    { 
        id: 73, 
        word: "おまけ", 
        kanji: "お負け / 御負け", 
        kana: "おまけ", 
        pos: "名词 / 自动词・サ变",
        meaning: "附赠品，减价",
        example_jp: "お菓子を買うと、可愛いおまけがついてくる。",
        example_cn: "买点心会附赠可爱的小赠品。"
    },
    { 
        id: 74, 
        word: "しばし", 
        kanji: "暫し", 
        kana: "しばし", 
        pos: "副词",
        meaning: "片刻，暂且",
        example_jp: "彼はその美しい景色を前に、しばし立ち止まった。",
        example_cn: "面对那美丽的景色，他停下了片刻的脚步。"
    },
    { 
        id: 75, 
        word: "とろとろ", 
        kanji: "とろとろ", 
        kana: "とろとろ", 
        pos: "副词 / 自动词・サ变",
        meaning: "浓稠，微火，昏昏欲睡",
        example_jp: "チーズがとろとろに溶けて美味しそうだ。",
        example_cn: "奶酪融化得十分浓稠，看起来很好吃。"
    },
    { 
        id: 76, 
        word: "そろい", 
        kanji: "揃い", 
        kana: "そろい", 
        pos: "名词 / 接尾词",
        meaning: "成套，齐全",
        example_jp: "家族でおそろいのTシャツを着て出かける。",
        example_cn: "一家人穿着成套的T恤出门。"
    },
    { 
        id: 77, 
        word: "したたか", 
        kanji: "強か / 健か", 
        kana: "したたか", 
        pos: "形容动词 / 副词",
        meaning: "极其，顽强，厉害",
        example_jp: "彼女は大人しそうに見えて、実はしたたかな女性だ。",
        example_cn: "她看起来很老实，实际上是个厉害（顽强）的女人。"
    },
    { 
        id: 78, 
        word: "どうやら", 
        kanji: "どうやら", 
        kana: "どうやら", 
        pos: "副词",
        meaning: "看来，总算",
        example_jp: "雲行きが怪しい。どうやら雨が降りそうだ。",
        example_cn: "天色阴沉，看来要下雨了。"
    },
    { 
        id: 79, 
        word: "もぎ取る", 
        kanji: "捥ぎ取る", 
        kana: "もぎとる", 
        pos: "他动词・五段",
        meaning: "夺取，强行摘下",
        example_jp: "敵からボールをもぎ取ってゴールを決めた。",
        example_cn: "从敌人那里夺下球并进了球。"
    },
    { 
        id: 80, 
        word: "しぶとい", 
        kanji: "しぶとい", 
        kana: "しぶとい", 
        pos: "形容词",
        meaning: "顽固，百折不挠",
        example_jp: "何度失敗してもしぶとく挑戦し続ける。",
        example_cn: "无论失败多少次，都百折不挠地继续挑战。"
    },
    { 
        id: 81, 
        word: "けなす", 
        kanji: "貶す", 
        kana: "けなす", 
        pos: "他动词・五段",
        meaning: "贬低，诽谤",
        example_jp: "他人の努力をけなすのは良くない。",
        example_cn: "贬低他人的努力是不好的。"
    },
    { 
        id: 82, 
        word: "ようこそ", 
        kanji: "ようこそ", 
        kana: "ようこそ", 
        pos: "感叹词",
        meaning: "欢迎",
        example_jp: "日本へようこそいらっしゃいました。",
        example_cn: "欢迎来到日本。"
    },
    { 
        id: 83, 
        word: "お参り", 
        kanji: "お参り / 御参り", 
        kana: "おまいり", 
        pos: "名词 / 自动词・サ变",
        meaning: "参拜",
        example_jp: "お正月には家族で神社にお参りに行く。",
        example_cn: "新年时和家人一起去神社参拜。"
    },
    { 
        id: 84, 
        word: "いとおしい", 
        kanji: "愛おしい", 
        kana: "いとおしい", 
        pos: "形容词",
        meaning: "值得怜爱，极其可爱",
        example_jp: "すやすやと眠る子供の顔がいとおしい。",
        example_cn: "孩子香甜入睡的脸庞真是惹人怜爱。"
    },
    { 
        id: 85, 
        word: "ひずみ", 
        kanji: "歪み", 
        kana: "ひずみ", 
        pos: "名词",
        meaning: "变形，不良影响",
        example_jp: "急激な経済成長が社会にひずみをもたらした。",
        example_cn: "急剧的经济增长给社会带来了不良影响。"
    },
    { 
        id: 86, 
        word: "かいつまむ", 
        kanji: "掻い摘む", 
        kana: "かいつまむ", 
        pos: "他动词・五段",
        meaning: "概括，简明扼要",
        example_jp: "要点だけをかいつまんでご説明します。",
        example_cn: "我只挑要点简明扼要地说明一下。"
    },
    { 
        id: 87, 
        word: "いちゃいちゃ", 
        kanji: "いちゃいちゃ", 
        kana: "いちゃいちゃ", 
        pos: "副词 / 自动词・サ变",
        meaning: "打情骂俏",
        example_jp: "人前でいちゃいちゃするのはやめてほしい。",
        example_cn: "希望你们不要在人前打情骂俏。"
    },
    { 
        id: 88, 
        word: "ほかほか", 
        kanji: "ほかほか", 
        kana: "ほかほか", 
        pos: "副词 / 形容动词 / 自动词・サ变",
        meaning: "热乎乎",
        example_jp: "炊きたてのほかほかご飯を食べる。",
        example_cn: "吃刚煮好的热乎乎的米饭。"
    },
    { 
        id: 89, 
        word: "いざという時", 
        kanji: "いざと言う時", 
        kana: "いざというとき", 
        pos: "名词 / 惯用语",
        meaning: "关键时刻，万一的时候",
        example_jp: "いざという時のために、非常食を用意しておく。",
        example_cn: "为了以防万一，准备好应急食品。"
    },
    { 
        id: 90, 
        word: "ひらめく", 
        kanji: "閃く", 
        kana: "ひらめく", 
        pos: "自动词・五段",
        meaning: "闪烁，闪念",
        example_jp: "いいアイデアが頭にひらめいた。",
        example_cn: "脑海中闪过一个好主意。"
    },
    { 
        id: 91, 
        word: "こんもり", 
        kanji: "こんもり", 
        kana: "こんもり", 
        pos: "副词 / 自动词・サ变",
        meaning: "茂密，隆起",
        example_jp: "木がこんもりと茂っている森の中に入る。",
        example_cn: "走入树木繁茂的森林。"
    },
    { 
        id: 92, 
        word: "ぼやける", 
        kanji: "ぼやける", 
        kana: "ぼやける", 
        pos: "自动词・一段",
        meaning: "模糊，发晕",
        example_jp: "霧で遠くの景色がぼやけて見える。",
        example_cn: "因为起雾，远处的景色看起来很模糊。"
    },
    { 
        id: 93, 
        word: "すっぽり", 
        kanji: "すっぽり", 
        kana: "すっぽり", 
        pos: "副词",
        meaning: "完全包住，整个套上",
        example_jp: "雪で町がすっぽりと覆われた。",
        example_cn: "小镇被大雪整个覆盖了。"
    },
    { 
        id: 94, 
        word: "おぞましい", 
        kanji: "悍ましい", 
        kana: "おぞましい", 
        pos: "形容词",
        meaning: "令人厌恶，极可怕的",
        example_jp: "その事件の詳細は、聞くもおぞましいものであった。",
        example_cn: "那起事件的细节，听起来都令人毛骨悚然。"
    },
    { 
        id: 95, 
        word: "やりくり", 
        kanji: "遣り繰り / やり繰り", 
        kana: "やりくり", 
        pos: "名词 / 他动词・サ变",
        meaning: "筹措，设法安排",
        example_jp: "少ない給料でなんとか家計をやりくりしている。",
        example_cn: "靠着微薄的工资想方设法维持家计。"
    },
    { 
        id: 96, 
        word: "〜がらみ", 
        kanji: "〜絡み", 
        kana: "〜がらみ", 
        pos: "接尾词",
        meaning: "与...有关，大概...",
        example_jp: "これは金銭がらみのトラブルのようだ。",
        example_cn: "这似乎是与金钱有关的纠纷。"
    },
    { 
        id: 97, 
        word: "ずっぷり", 
        kanji: "ずっぷり", 
        kana: "ずっぷり", 
        pos: "副词",
        meaning: "彻底，深深地（沉浸）",
        example_jp: "冷たい海の水にずっぷりと浸かる。",
        example_cn: "整个人完全浸泡在冰冷的海水中。"
    },
    { 
        id: 98, 
        word: "メンツ", 
        kanji: "面子", 
        kana: "メンツ", 
        pos: "名词",
        meaning: "面子，体面",
        example_jp: "ここで引き下がったらメンツが丸潰れだ。",
        example_cn: "如果在这里退缩的话，面子就全丢光了。"
    },
    { 
        id: 99, 
        word: "サラ金", 
        kanji: "サラ金", 
        kana: "サラきん", 
        pos: "名词",
        meaning: "上班族贷款（高利贷）",
        example_jp: "彼はギャンブルの借金でサラ金に手を出した。",
        example_cn: "他因为赌博欠债而借了高利贷。"
    },
    { 
        id: 100, 
        word: "ことごとく", 
        kanji: "悉く / 尽く", 
        kana: "ことごとく", 
        pos: "副词",
        meaning: "全部，统统",
        example_jp: "私の提案はことごとく却下された。",
        example_cn: "我的提案被统统驳回了。"
    },
{ 
        id: 101, 
        word: "がやがや", 
        kanji: "喧々 / がやがや", 
        kana: "がやがや", 
        pos: "副词 / 自动词・サ变",
        meaning: "喧闹，吵嚷",
        example_jp: "教室の中で生徒たちががやがやと騒いでいる。",
        example_cn: "学生们在教室里吵吵嚷嚷的。"
    },
    { 
        id: 102, 
        word: "ばね", 
        kanji: "発条 / 弾み", 
        kana: "ばね", 
        pos: "名词",
        meaning: "弹簧，发条，（身体的）弹性",
        example_jp: "失敗をばねにして、さらに頑張る。",
        example_cn: "将失败转化为动力（弹簧），更加努力。"
    },
    { 
        id: 103, 
        word: "あながち", 
        kanji: "強ち", 
        kana: "あながち", 
        pos: "副词",
        meaning: "（下接否定）未必，不一定，不见得",
        example_jp: "彼の意見もあながち間違っているとは言えない。",
        example_cn: "他的意见也未必可以说就是错的。"
    },
    { 
        id: 104, 
        word: "はらむ", 
        kanji: "孕む", 
        kana: "はらむ", 
        pos: "自动词・他动词・五段",
        meaning: "怀胎，包含，孕育",
        example_jp: "この計画は多くの危険をはらんでいる。",
        example_cn: "这个计划包含着许多危险。"
    },
    { 
        id: 105, 
        word: "もどかしい", 
        kanji: "擬かしい / 悶かしい", 
        kana: "もどかしい", 
        pos: "形容词",
        meaning: "令人焦急的，不耐烦的",
        example_jp: "言葉が通じなくてもどかしい思いをした。",
        example_cn: "因为语言不通而感到十分焦急。"
    },
    { 
        id: 106, 
        word: "うたた寝", 
        kanji: "転寝", 
        kana: "うたたね", 
        pos: "名词 / 自动词・サ变",
        meaning: "打盹，假寐",
        example_jp: "テレビを見ながらソファでうたた寝をしてしまった。",
        example_cn: "一边看电视一边在沙发上打了个盹。"
    },
    { 
        id: 107, 
        word: "くっきり", 
        kanji: "くっきり", 
        kana: "くっきり", 
        pos: "副词 / 自动词・サ变",
        meaning: "清清楚楚，鲜明",
        example_jp: "晴れた日には富士山がくっきりと見える。",
        example_cn: "晴天时能清楚地看到富士山。"
    },
    { 
        id: 108, 
        word: "のっそり", 
        kanji: "のっそり", 
        kana: "のっそり", 
        pos: "副词 / 自动词・サ变",
        meaning: "迟缓，慢吞吞",
        example_jp: "大きな男がのっそりと立ち上がった。",
        example_cn: "一个大块头男人慢吞吞地站了起来。"
    },
    { 
        id: 109, 
        word: "ずたずた", 
        kanji: "寸々", 
        kana: "ずたずた", 
        pos: "形容动词 / 名词",
        meaning: "破破烂烂，碎裂",
        example_jp: "手紙をずたずたに引き裂いた。",
        example_cn: "把信撕得粉碎。"
    },
    { 
        id: 110, 
        word: "いやに", 
        kanji: "嫌に", 
        kana: "いやに", 
        pos: "副词",
        meaning: "异常地，特别（多指不自然或奇怪的感觉）",
        example_jp: "今日はいやに静かだ。",
        example_cn: "今天出奇地安静。"
    },
    { 
        id: 111, 
        word: "ほんのり", 
        kanji: "ほんのり", 
        kana: "ほんのり", 
        pos: "副词 / 自动词・サ变",
        meaning: "微微，隐约",
        example_jp: "ほんのりと甘い香りが漂ってくる。",
        example_cn: "飘荡着微微的甜香。"
    },
    { 
        id: 112, 
        word: "うぬぼれ", 
        kanji: "自惚れ / 己惚れ", 
        kana: "うぬぼれ", 
        pos: "名词",
        meaning: "自大，自负",
        example_jp: "彼はうぬぼれが強い。",
        example_cn: "他非常自负。"
    },
    { 
        id: 113, 
        word: "へこたれる", 
        kanji: "凹垂れる", 
        kana: "へこたれる", 
        pos: "自动词・一段",
        meaning: "气馁，灰心，疲惫不堪",
        example_jp: "どんな困難にもへこたれない。",
        example_cn: "无论遇到什么困难都不气馁。"
    },
    { 
        id: 114, 
        word: "うなだれる", 
        kanji: "項垂れる", 
        kana: "うなだれる", 
        pos: "自动词・一段",
        meaning: "垂头丧气，低着头",
        example_jp: "試験に落ちて、がっかりしてうなだれる。",
        example_cn: "因为考试落榜而失望地垂头丧气。"
    },
    { 
        id: 115, 
        word: "ばさばさ", 
        kanji: "ばさばさ", 
        kana: "ばさばさ", 
        pos: "副词 / 形容动词 / 自动词・サ变",
        meaning: "干燥蓬松，（鸟类）拍打翅膀的声音",
        example_jp: "髪の毛が傷んでばさばさだ。",
        example_cn: "头发受损，变得干枯蓬松。"
    },
    { 
        id: 116, 
        word: "だらだら", 
        kanji: "だらだら", 
        kana: "だらだら", 
        pos: "副词 / 自动词・サ变",
        meaning: "滴滴答答，拖拖拉拉，冗长",
        example_jp: "休みの日をだらだらと過ごしてしまった。",
        example_cn: "拖拖拉拉地度过了休息日。"
    },
    { 
        id: 117, 
        word: "なれなれしい", 
        kanji: "馴れ馴れしい", 
        kana: "なれなれしい", 
        pos: "形容词",
        meaning: "狎昵的，过于亲密的，自来熟的",
        example_jp: "初対面なのになれなれしい態度をとる。",
        example_cn: "明明是初次见面，态度却过于亲昵。"
    },
    { 
        id: 118, 
        word: "でっぷり", 
        kanji: "でっぷり", 
        kana: "でっぷり", 
        pos: "副词 / 自动词・サ变",
        meaning: "胖乎乎，大腹便便",
        example_jp: "彼はでっぷりと太っている。",
        example_cn: "他胖乎乎的。"
    },
    { 
        id: 119, 
        word: "あけぼの", 
        kanji: "曙", 
        kana: "あけぼの", 
        pos: "名词",
        meaning: "黎明，拂晓",
        example_jp: "春はあけぼの。（枕草子）",
        example_cn: "春天最美是黎明。（选自《枕草子》）"
    },
    { 
        id: 120, 
        word: "がなり立てる", 
        kanji: "喚り立てる", 
        kana: "がなりたてる", 
        pos: "他动词・一段",
        meaning: "大声喧哗，大声吼叫",
        example_jp: "酔っ払いが大声でがなり立てている。",
        example_cn: "醉汉在扯着嗓子大声吼叫。"
    },
    { 
        id: 121, 
        word: "つれない", 
        kanji: "連れない / 伴無い", 
        kana: "つれない", 
        pos: "形容词",
        meaning: "冷淡的，薄情的",
        example_jp: "そんなつれないことを言わないでくれ。",
        example_cn: "别说那么冷淡的话。"
    },
    { 
        id: 122, 
        word: "ずきずき", 
        kanji: "ずきずき", 
        kana: "ずきずき", 
        pos: "副词 / 自动词・サ变",
        meaning: "阵痛，隐隐作痛",
        example_jp: "虫歯がずきずきと痛む。",
        example_cn: "蛀牙阵阵作痛。"
    },
    { 
        id: 123, 
        word: "やってのける", 
        kanji: "遣って退ける", 
        kana: "やってのける", 
        pos: "他动词・一段",
        meaning: "做完，成功完成（常指困难的事）",
        example_jp: "彼は困難な仕事を一人でやってのけた。",
        example_cn: "他独自一人干完了一项困难的工作。"
    },
    { 
        id: 124, 
        word: "おべっか", 
        kanji: "御平目 / 追従", 
        kana: "おべっか", 
        pos: "名词",
        meaning: "奉承，谄媚",
        example_jp: "上司におべっかを使って出世しようとする。",
        example_cn: "企图靠向上司拍马屁来出人头地。"
    },
    { 
        id: 125, 
        word: "かぐわしい", 
        kanji: "芳しい / 馨しい", 
        kana: "かぐわしい", 
        pos: "形容词",
        meaning: "芳香的，香甜的",
        example_jp: "かぐわしい花の香りが漂う。",
        example_cn: "飘荡着芳香的花气。"
    },
    { 
        id: 126, 
        word: "しわくちゃ", 
        kanji: "皺くちゃ", 
        kana: "しわくちゃ", 
        pos: "名词 / 形容动词",
        meaning: "满是皱纹，皱皱巴巴",
        example_jp: "洗濯した服がしわくちゃになってしまった。",
        example_cn: "洗过的衣服变得皱皱巴巴的。"
    },
    { 
        id: 127, 
        word: "かっきり", 
        kanji: "恰切り", 
        kana: "かっきり", 
        pos: "副词",
        meaning: "恰好，整（多用于时间、数量）",
        example_jp: "10時かっきりに到着した。",
        example_cn: "十点整到达了。"
    },
    { 
        id: 128, 
        word: "ぬめぬめ", 
        kanji: "滑々", 
        kana: "ぬめぬめ", 
        pos: "副词 / 自动词・サ变",
        meaning: "滑溜溜，黏糊糊",
        example_jp: "蛇の体がぬめぬめしている。",
        example_cn: "蛇的身体滑溜溜的。"
    },
    { 
        id: 129, 
        word: "びしっと", 
        kanji: "びしっと", 
        kana: "びしっと", 
        pos: "副词",
        meaning: "严厉地，整齐地，恰好",
        example_jp: "ルールを守らない部下をびしっと叱る。",
        example_cn: "严厉地训斥不遵守规则的部下。"
    },
    { 
        id: 130, 
        word: "わさわさ", 
        kanji: "わさわさ", 
        kana: "わさわさ", 
        pos: "副词 / 自动词・サ变",
        meaning: "摇动出声，心中不安，熙熙攘攘",
        example_jp: "人が多くてわさわさしている。",
        example_cn: "人很多，熙熙攘攘的。"
    },
    { 
        id: 131, 
        word: "とがめる", 
        kanji: "咎める", 
        kana: "とがめる", 
        pos: "自动词・他动词・一段",
        meaning: "责备，内疚，发炎",
        example_jp: "嘘をついたことで良心がとがめる。",
        example_cn: "因为撒谎而受到良心的谴责（内疚）。"
    },
    { 
        id: 132, 
        word: "こっくり", 
        kanji: "こっくり", 
        kana: "こっくり", 
        pos: "副词 / 自动词・サ变",
        meaning: "点头，打瞌睡",
        example_jp: "彼は納得したようにこっくりと頷いた。",
        example_cn: "他仿佛理解了似的点了点头。"
    },
    { 
        id: 133, 
        word: "とことんまで", 
        kanji: "到底まで", 
        kana: "とことんまで", 
        pos: "副词短语",
        meaning: "到底，直到最后",
        example_jp: "諦めずに、とことんまでやり抜く。",
        example_cn: "不放弃，坚持到底。"
    },
    { 
        id: 134, 
        word: "よちよち", 
        kanji: "よちよち", 
        kana: "よちよち", 
        pos: "副词 / 自动词・サ变",
        meaning: "步履蹒跚（多指幼儿等）",
        example_jp: "赤ちゃんがよちよち歩く。",
        example_cn: "婴儿步履蹒跚地走着。"
    },
    { 
        id: 135, 
        word: "めろめろ", 
        kanji: "滅茶滅茶 / めろめろ", 
        kana: "めろめろ", 
        pos: "形容动词 / 自动词・サ变",
        meaning: "软弱无力，痴迷，极度喜爱",
        example_jp: "初孫の可愛さにすっかりめろめろだ。",
        example_cn: "被第一个孙子的可爱迷得神魂颠倒。"
    },
    { 
        id: 136, 
        word: "みずみずしい", 
        kanji: "瑞々しい", 
        kana: "みずみずしい", 
        pos: "形容词",
        meaning: "水灵，娇嫩，新鲜",
        example_jp: "朝採れの野菜はみずみずしい。",
        example_cn: "早上刚采摘的蔬菜非常水灵。"
    },
    { 
        id: 137, 
        word: "いかにも", 
        kanji: "如何にも", 
        kana: "いかにも", 
        pos: "副词",
        meaning: "简直，的确，实在是",
        example_jp: "彼がいかにも言いそうなことだ。",
        example_cn: "简直就是他会说的话。"
    },
    { 
        id: 138, 
        word: "よみがえる", 
        kanji: "蘇る / 甦る", 
        kana: "よみがえる", 
        pos: "自动词・五段",
        meaning: "复苏，复活，死灰复燃",
        example_jp: "あの時の記憶が鮮やかに蘇る。",
        example_cn: "那时的记忆鲜明地复苏了。"
    },
    { 
        id: 139, 
        word: "ずかずか", 
        kanji: "ずかずか", 
        kana: "ずかずか", 
        pos: "副词",
        meaning: "冒冒失失，粗暴地（闯入等）",
        example_jp: "他人の部屋にノックもせずにずかずかと入ってくる。",
        example_cn: "连门都不敲就冒冒失失地闯进别人的房间。"
    },
    { 
        id: 140, 
        word: "しごく", 
        kanji: "至極 / 扱く", 
        kana: "しごく", 
        pos: "副词 / 他动词・五段",
        meaning: "极，最（至極） / 严厉训练，撸下（扱く）",
        example_jp: "それはしごく（至極）当然の意見だ。 / 新入生を厳しくしごく（扱く）。",
        example_cn: "那是极其理所当然的意见。 / 严厉地训练新生。"
    },
    { 
        id: 141, 
        word: "どうにかこうにか", 
        kanji: "如何にか斯うにか", 
        kana: "どうにかこうにか", 
        pos: "副词",
        meaning: "好歹，总算，勉勉强强",
        example_jp: "どうにかこうにか試験に合格した。",
        example_cn: "好歹算是通过了考试。"
    },
    { 
        id: 142, 
        word: "ちらっと", 
        kanji: "ちらっと", 
        kana: "ちらっと", 
        pos: "副词",
        meaning: "一闪，瞥见",
        example_jp: "彼が通り過ぎるのをちらっと見た。",
        example_cn: "瞥见他走了过去。"
    },
    { 
        id: 143, 
        word: "ギフト券", 
        kanji: "ギフト券", 
        kana: "ギフトけん", 
        pos: "名词",
        meaning: "礼品券",
        example_jp: "結婚のお祝いでギフト券をもらった。",
        example_cn: "作为结婚贺礼收到了礼品券。"
    },
    { 
        id: 144, 
        word: "のこぎり", 
        kanji: "鋸", 
        kana: "のこぎり", 
        pos: "名词",
        meaning: "锯子",
        example_jp: "のこぎりで木を切る。",
        example_cn: "用锯子锯木头。"
    },
    { 
        id: 145, 
        word: "おどおど", 
        kanji: "おどおど", 
        kana: "おどおど", 
        pos: "副词 / 自动词・サ变",
        meaning: "战战兢兢，提心吊胆",
        example_jp: "面接で緊張しておどおどする。",
        example_cn: "面试时紧张得战战兢兢。"
    },
    { 
        id: 146, 
        word: "てらてら", 
        kanji: "照ら照ら", 
        kana: "てらてら", 
        pos: "副词 / 自动词・サ变",
        meaning: "油光发亮",
        example_jp: "暑さで顔がてらてらと光っている。",
        example_cn: "因为炎热，脸上泛着油光。"
    },
    { 
        id: 147, 
        word: "たわいない", 
        kanji: "他愛ない", 
        kana: "たわいない", 
        pos: "形容词",
        meaning: "无聊的，幼稚的，微不足道的",
        example_jp: "たわいない冗談で笑い合う。",
        example_cn: "因为无聊的玩笑而相视大笑。"
    },
    { 
        id: 148, 
        word: "けだるい", 
        kanji: "気怠い", 
        kana: "けだるい", 
        pos: "形容词",
        meaning: "慵懒的，倦怠的",
        example_jp: "休み明けで少しけだるい気分だ。",
        example_cn: "刚休完假，感觉有些慵懒。"
    },
    { 
        id: 149, 
        word: "たった", 
        kanji: "只 / 唯", 
        kana: "たった", 
        pos: "副词",
        meaning: "仅仅，只",
        example_jp: "たった一つの命を大切にする。",
        example_cn: "珍惜仅仅一次的生命。"
    },
    { 
        id: 150, 
        word: "げらげら", 
        kanji: "げらげら", 
        kana: "げらげら", 
        pos: "副词 / 自动词・サ变",
        meaning: "哈哈大笑",
        example_jp: "テレビを見てげらげらと笑う。",
        example_cn: "看电视看得哈哈大笑。"
    },
{ 
        id: 151, 
        word: "すする", 
        kanji: "啜る", 
        kana: "すする", 
        pos: "他动词・五段",
        meaning: "吸，啜饮，抽泣",
        example_jp: "熱いお茶を音を立ててすする。",
        example_cn: "出声地吸溜着喝热茶。"
    },
    { 
        id: 152, 
        word: "しかるべき", 
        kanji: "然るべき", 
        kana: "しかるべき", 
        pos: "连体词",
        meaning: "适当的，应有的，理所当然的",
        example_jp: "問題があれば、しかるべき処置をとる。",
        example_cn: "如果存在问题，将采取适当的措施。"
    },
    { 
        id: 153, 
        word: "びっしょり", 
        kanji: "びっしょり", 
        kana: "びっしょり", 
        pos: "副词",
        meaning: "湿透",
        example_jp: "急な雨で、服がびっしょり濡れてしまった。",
        example_cn: "因为突如其来的雨，衣服完全湿透了。"
    },
    { 
        id: 154, 
        word: "じっくり", 
        kanji: "じっくり", 
        kana: "じっくり", 
        pos: "副词",
        meaning: "慢慢地，仔细地，不慌不忙地",
        example_jp: "将来のことについて、じっくり考える必要がある。",
        example_cn: "关于将来的事情，有必要仔细考虑。"
    },
    { 
        id: 155, 
        word: "ぶら下がる", 
        kanji: "ぶら下がる", 
        kana: "ぶらさがる", 
        pos: "自动词・五段",
        meaning: "悬挂，垂下，吊着",
        example_jp: "天井から綺麗なランプがぶら下がっている。",
        example_cn: "天花板上悬挂着一盏漂亮的灯。"
    },
    { 
        id: 156, 
        word: "〜ずくめ", 
        kanji: "〜尽くめ", 
        kana: "〜ずくめ", 
        pos: "接尾词",
        meaning: "清一色，全是，满是（多接在名词后）",
        example_jp: "今年は昇進や結婚など、良いことずくめの一年だった。",
        example_cn: "今年有升职和结婚等，是好事连连（全是好事）的一年。"
    },
    { 
        id: 157, 
        word: "にもかかわらず", 
        kanji: "にも拘らず", 
        kana: "にもかかわらず", 
        pos: "接续词 / 词组",
        meaning: "尽管如此，虽然...但是...",
        example_jp: "悪天候にもかかわらず、多くの人が集まった。",
        example_cn: "尽管天气不好，还是聚集了很多人。"
    },
    { 
        id: 158, 
        word: "ぴりぴり", 
        kanji: "ぴりぴり", 
        kana: "ぴりぴり", 
        pos: "副词 / 自动词・サ变",
        meaning: "刺痛，辣乎乎，神经高度紧张",
        example_jp: "試験前で、クラス中がぴりぴりしている。",
        example_cn: "考试前，整个班级都神经紧绷。"
    },
    { 
        id: 159, 
        word: "ちょこちょこ", 
        kanji: "ちょこちょこ", 
        kana: "ちょこちょこ", 
        pos: "副词",
        meaning: "频繁地，不时地，碎步走",
        example_jp: "彼は仕事の合間にちょこちょこお菓子を食べる。",
        example_cn: "他在工作间隙频繁地吃零食。"
    },
    { 
        id: 160, 
        word: "ちらほら", 
        kanji: "ちらほら", 
        kana: "ちらほら", 
        pos: "副词",
        meaning: "稀稀落落，星星点点，偶尔",
        example_jp: "桜の花がちらほら咲き始めた。",
        example_cn: "樱花开始稀稀落落地绽放了。"
    },
    { 
        id: 161, 
        word: "がさがさ", 
        kanji: "がさがさ", 
        kana: "がさがさ", 
        pos: "副词 / 形容动词 / 自动词・サ变",
        meaning: "干燥粗糙，沙沙作响",
        example_jp: "冬は手が乾燥してがさがさになる。",
        example_cn: "冬天手很干燥，变得十分粗糙。"
    },
    { 
        id: 162, 
        word: "ひしめく", 
        kanji: "犇めく", 
        kana: "ひしめく", 
        pos: "自动词・五段",
        meaning: "拥挤，喧闹",
        example_jp: "バーゲン会場には人がひしめいていた。",
        example_cn: "大特卖会场里挤满了人。"
    },
    { 
        id: 163, 
        word: "もってのほか", 
        kanji: "以ての外", 
        kana: "もってのほか", 
        pos: "名词 / 形容动词",
        meaning: "岂有此理，荒谬，绝对不行",
        example_jp: "親に暴力を振るうなど、もってのほかだ。",
        example_cn: "对父母施暴什么的，简直岂有此理。"
    },
    { 
        id: 164, 
        word: "どっしり", 
        kanji: "どっしり", 
        kana: "どっしり", 
        pos: "副词 / 自动词・サ变",
        meaning: "沉甸甸，稳重，庄重",
        example_jp: "彼はどっしりと構えて、少しも動じない。",
        example_cn: "他从容沉稳，丝毫没有动摇。"
    },
    { 
        id: 165, 
        word: "とかく", 
        kanji: "兎角", 
        kana: "とかく", 
        pos: "副词",
        meaning: "动辄，往往，总是（多带贬义）",
        example_jp: "人はとかく他人の欠点に目が行きがちだ。",
        example_cn: "人们往往容易关注他人的缺点。"
    },
    { 
        id: 166, 
        word: "ざく切り", 
        kanji: "ざく切り", 
        kana: "ざくぎり", 
        pos: "名词",
        meaning: "切成大块，粗切（指蔬菜等）",
        example_jp: "キャベツをざく切りにして鍋に入れる。",
        example_cn: "把卷心菜切成大块放入锅中。"
    },
    { 
        id: 167, 
        word: "なにがし", 
        kanji: "某", 
        kana: "なにがし", 
        pos: "代词",
        meaning: "某人，某物，某某",
        example_jp: "山田なにがしという人から電話がありました。",
        example_cn: "有个叫山田某某的人打来了电话。"
    },
    { 
        id: 168, 
        word: "そのもの", 
        kanji: "其の物", 
        kana: "そのもの", 
        pos: "名词 / 代词",
        meaning: "本身",
        example_jp: "彼女の存在そのものが皆を癒している。",
        example_cn: "她的存在本身就治愈了大家。"
    },
    { 
        id: 169, 
        word: "ぶかぶか", 
        kanji: "ぶかぶか", 
        kana: "ぶかぶか", 
        pos: "副词 / 形容动词 / 自动词・サ变",
        meaning: "（衣服、鞋子等）肥大，宽松",
        example_jp: "兄のお下がりなので、この服は私にはぶかぶかだ。",
        example_cn: "因为是哥哥穿下来的，这件衣服我穿太肥大了。"
    },
    { 
        id: 170, 
        word: "たたずまい", 
        kanji: "佇まい", 
        kana: "たたずまい", 
        pos: "名词",
        meaning: "氛围，姿态，容貌",
        example_jp: "古い街並みが昔のたたずまいを残している。",
        example_cn: "古老的街道依然保留着昔日的风貌。"
    },
    { 
        id: 171, 
        word: "わきまえる", 
        kanji: "弁える", 
        kana: "わきまえる", 
        pos: "他动词・一段",
        meaning: "辨别，明辨事理，懂规矩",
        example_jp: "自分の立場をわきまえて発言しなさい。",
        example_cn: "请弄清自己的立场再发言。"
    },
    { 
        id: 172, 
        word: "あだ名", 
        kanji: "渾名 / 仇名", 
        kana: "あだな", 
        pos: "名词",
        meaning: "绰号，外号",
        example_jp: "彼はクラスメイトから面白いあだ名で呼ばれている。",
        example_cn: "他被同班同学叫着有趣的外号。"
    },
    { 
        id: 173, 
        word: "ふんだんに", 
        kanji: "ふんだんに", 
        kana: "ふんだんに", 
        pos: "副词",
        meaning: "大量地，丰富地",
        example_jp: "イチゴをふんだんに使ったケーキ。",
        example_cn: "大量使用了草莓的蛋糕。"
    },
    { 
        id: 174, 
        word: "こき使う", 
        kanji: "扱き使う", 
        kana: "こきつかう", 
        pos: "他动词・五段",
        meaning: "苛使，随意驱使，使唤",
        example_jp: "新人を朝から晩までこき使うブラック企業。",
        example_cn: "从早到晚苛使新人的黑心企业。"
    },
    { 
        id: 175, 
        word: "くちばし", 
        kanji: "嘴", 
        kana: "くちばし", 
        pos: "名词",
        meaning: "鸟喙，嘴",
        example_jp: "カラスがくちばしでゴミ袋をつついている。",
        example_cn: "乌鸦正在用嘴啄垃圾袋。"
    },
    { 
        id: 176, 
        word: "いんちき", 
        kanji: "いんちき", 
        kana: "いんちき", 
        pos: "名词 / 形容动词",
        meaning: "骗人，弄虚作假，假货",
        example_jp: "あの占い師はいんちきだ。",
        example_cn: "那个占卜师是骗人的。"
    },
    { 
        id: 177, 
        word: "かいま見る", 
        kanji: "垣間見る", 
        kana: "かいまみる", 
        pos: "他动词・一段",
        meaning: "偷窥，略见一斑，窥见",
        example_jp: "彼の発言から、その深い教養をかいま見ることができる。",
        example_cn: "从他的发言中可以窥见他深厚的教养。"
    },
    { 
        id: 178, 
        word: "ぽっくり", 
        kanji: "ぽっくり", 
        kana: "ぽっくり", 
        pos: "副词",
        meaning: "突然去世（无痛苦地），折断貌",
        example_jp: "病気もせずに、ある日ぽっくりと逝ってしまった。",
        example_cn: "也没生病，某天就突然去世了。"
    },
    { 
        id: 179, 
        word: "あっけない", 
        kanji: "呆気ない", 
        kana: "あっけない", 
        pos: "形容词",
        meaning: "没意思，太快结束，不尽兴的",
        example_jp: "強い相手だと思っていたが、あっけない幕切れだった。",
        example_cn: "原以为是个强敌，结果结束得太草率（没意思）了。"
    },
    { 
        id: 180, 
        word: "そびえる", 
        kanji: "聳える", 
        kana: "そびえる", 
        pos: "自动词・一段",
        meaning: "耸立，峙立",
        example_jp: "街の中心に高層ビルがそびえている。",
        example_cn: "市中心耸立着高层建筑。"
    },
    { 
        id: 181, 
        word: "ちんけ", 
        kanji: "ちんけ", 
        kana: "ちんけ", 
        pos: "形容动词",
        meaning: "寒酸，低劣，微不足道",
        example_jp: "あんなちんけなプライドは捨ててしまえ。",
        example_cn: "把那种微不足道的自尊心扔掉吧。"
    },
    { 
        id: 182, 
        word: "よれよれ", 
        kanji: "よれよれ", 
        kana: "よれよれ", 
        pos: "形容动词 / 名词",
        meaning: "皱皱巴巴，破旧，老态龙钟",
        example_jp: "何年も着てよれよれになったTシャツ。",
        example_cn: "穿了好几年，变得皱皱巴巴的T恤。"
    },
    { 
        id: 183, 
        word: "おいて", 
        kanji: "於いて", 
        kana: "おいて", 
        pos: "连语",
        meaning: "在...（表示场所、时间、状况、领域等，多用于「〜において」）",
        example_jp: "会議は第一会議室において行われる。",
        example_cn: "会议将在第一会议室举行。"
    },
    { 
        id: 184, 
        word: "とどろく", 
        kanji: "轟く", 
        kana: "とどろく", 
        pos: "自动词・五段",
        meaning: "轰鸣，响彻，驰名",
        example_jp: "雷鳴が遠くに轟いている。",
        example_cn: "雷声在远处轰鸣。"
    },
    { 
        id: 185, 
        word: "きしきし", 
        kanji: "軋軋 / きしきし", 
        kana: "きしきし", 
        pos: "副词",
        meaning: "嘎吱嘎吱作响",
        example_jp: "古い木の床がきしきしと鳴る。",
        example_cn: "古老的木地板发出嘎吱嘎吱的声音。"
    },
    { 
        id: 186, 
        word: "やる気", 
        kanji: "遣る気", 
        kana: "やるき", 
        pos: "名词",
        meaning: "干劲，想要去做的意愿",
        example_jp: "褒められるとやる気が出る。",
        example_cn: "受到表扬就会有干劲。"
    },
    { 
        id: 187, 
        word: "かしましい", 
        kanji: "姦しい / 喧しい", 
        kana: "かしましい", 
        pos: "形容词",
        meaning: "吵闹，喧嚣",
        example_jp: "女三人寄ればかしましい。",
        example_cn: "三个女人一台戏（聚在一起就很吵闹）。"
    },
    { 
        id: 188, 
        word: "こぢんまり", 
        kanji: "小ぢんまり", 
        kana: "こぢんまり", 
        pos: "副词 / 自动词・サ变",
        meaning: "小巧玲珑，整洁紧凑",
        example_jp: "こぢんまりとしたアットホームなレストラン。",
        example_cn: "小巧而温馨的餐厅。"
    },
    { 
        id: 189, 
        word: "もだえる", 
        kanji: "悶える", 
        kana: "もだえる", 
        pos: "自动词・一段",
        meaning: "挣扎，痛苦，苦闷",
        example_jp: "激しい痛みに身をもだえる。",
        example_cn: "疼得身体直打滚（挣扎）。"
    },
    { 
        id: 190, 
        word: "ずる賢い", 
        kanji: "狡賢い", 
        kana: "ずるがしこい", 
        pos: "形容词",
        meaning: "狡猾，奸诈",
        example_jp: "あの商人はずる賢い手を使って儲けている。",
        example_cn: "那个商人用狡猾的手段赚钱。"
    },
    { 
        id: 191, 
        word: "てこ入れ", 
        kanji: "梃子入れ", 
        kana: "てこいれ", 
        pos: "名词 / 自动词・サ变",
        meaning: "扶植，支援，注资（多指为了挽救颓势）",
        example_jp: "赤字の事業にてこ入れをする。",
        example_cn: "对亏损的业务进行注资支援。"
    },
    { 
        id: 192, 
        word: "おびただしい", 
        kanji: "夥しい", 
        kana: "おびただしい", 
        pos: "形容词",
        meaning: "大量，非常多，厉害",
        example_jp: "事故現場にはおびただしい数の血痕が残っていた。",
        example_cn: "事故现场留有大量的血迹。"
    },
    { 
        id: 193, 
        word: "そそくさ", 
        kanji: "そそくさ", 
        kana: "そそくさ", 
        pos: "副词",
        meaning: "匆忙，慌张",
        example_jp: "用事が終わると、彼はそそくさと帰っていった。",
        example_cn: "事情一办完，他就匆匆忙忙地回去了。"
    },
    { 
        id: 194, 
        word: "もしくは", 
        kanji: "若しくは", 
        kana: "もしくは", 
        pos: "接续词",
        meaning: "或者，若是",
        example_jp: "日本語、もしくは英語で書類を提出してください。",
        example_cn: "请用日语或者英语提交文件。"
    },
    { 
        id: 195, 
        word: "やたら", 
        kanji: "矢鱈", 
        kana: "やたら", 
        pos: "副词 / 形容动词",
        meaning: "胡乱，非常，随便",
        example_jp: "今日はやたらに喉が渇く。",
        example_cn: "今天特别（非常）口渴。"
    },
    { 
        id: 196, 
        word: "かたつむり", 
        kanji: "蝸牛", 
        kana: "かたつむり", 
        pos: "名词",
        meaning: "蜗牛",
        example_jp: "雨上がりの葉っぱにかたつむりがいる。",
        example_cn: "雨后的叶子上有一只蜗牛。"
    },
    { 
        id: 197, 
        word: "しんみり", 
        kanji: "しんみり", 
        kana: "しんみり", 
        pos: "副词 / 自动词・サ变",
        meaning: "幽静，沉静，平心静气地",
        example_jp: "久しぶりに会った友人と、夜遅くまでしんみりと語り合った。",
        example_cn: "和久别重逢的朋友，心平气和地聊到了深夜。"
    },
    { 
        id: 198, 
        word: "かつかつ", 
        kanji: "かつかつ", 
        kana: "かつかつ", 
        pos: "副词",
        meaning: "勉勉强强，仅能维持",
        example_jp: "給料が安くて、毎月の生活がかつかつだ。",
        example_cn: "工资很低，每个月的生活都紧巴巴的。"
    },
    { 
        id: 199, 
        word: "かっちり", 
        kanji: "かっちり", 
        kana: "かっちり", 
        pos: "副词 / 自动词・サ变",
        meaning: "紧紧地，严丝合缝，准确无误",
        example_jp: "この蓋は瓶にかっちりとはまる。",
        example_cn: "这个盖子严丝合缝地扣在瓶子上。"
    },
    { 
        id: 200, 
        word: "ひたすら", 
        kanji: "只管 / 頓", 
        kana: "ひたすら", 
        pos: "副词 / 形容动词",
        meaning: "一味地，专心致志地",
        example_jp: "合格を目指して、ひたすら勉強する。",
        example_cn: "以合格为目标，一味地努力学习。"
    },
    { 
        id: 201, 
        word: "せわしい", 
        kanji: "忙しい", 
        kana: "せわしい", 
        pos: "イ形容词",
        meaning: "忙碌，不停息",
        example_jp: "年末は何かとせわしい。",
        example_cn: "年末总是这忙那忙的。"
    },
    { 
        id: 202, 
        word: "さして", 
        kanji: "然して / 敢して", 
        kana: "さして", 
        pos: "副词",
        meaning: "（后接否定）并不那么...，并不怎么...",
        example_jp: "その問題はさして重要ではない。",
        example_cn: "那个问题并没有那么重要。"
    },
    { 
        id: 203, 
        word: "へたへた", 
        kanji: "へたへた", 
        kana: "へたへた", 
        pos: "副词 / 自动词・サ变",
        meaning: "累得瘫倒在地；弯曲折断",
        example_jp: "マラソンを完走して、その場にへたへたと座り込んだ。",
        example_cn: "跑完马拉松后，累得瘫坐在原地。"
    },
    { 
        id: 204, 
        word: "げたげた", 
        kanji: "げたげた", 
        kana: "げたげた", 
        pos: "副词",
        meaning: "大声傻笑，格格地笑",
        example_jp: "彼女はテレビを見てげたげた笑っている。",
        example_cn: "她看着电视，格格地大笑。"
    },
    { 
        id: 205, 
        word: "どっさり", 
        kanji: "どっさり", 
        kana: "どっさり", 
        pos: "副词",
        meaning: "很多，大量",
        example_jp: "庭に落ち葉がどっさり積まっている。",
        example_cn: "院子里堆积了大量的落叶。"
    },
    { 
        id: 206, 
        word: "おろおろ", 
        kanji: "おろおろ", 
        kana: "おろおろ", 
        pos: "副词 / 自动词・サ变",
        meaning: "不知所措，慌慌张张，抽泣",
        example_jp: "突然の事故に、ただおろおろするばかりだった。",
        example_cn: "面对突发事故，只能不知所措地慌作一团。"
    },
    { 
        id: 207, 
        word: "まんざら", 
        kanji: "満更", 
        kana: "まんざら", 
        pos: "副词",
        meaning: "（后接否定）未必，不一定，并不完全",
        example_jp: "彼の提案もまんざら悪くない。",
        example_cn: "他的提案也未必就不好。"
    },
    { 
        id: 208, 
        word: "うろたえる", 
        kanji: "狼狽える", 
        kana: "うろたえる", 
        pos: "自动词・一段",
        meaning: "惊慌失措，慌张",
        example_jp: "予想外の質問にすっかりうろたえてしまった。",
        example_cn: "被意料之外的问题问得完全慌了神。"
    },
    { 
        id: 209, 
        word: "そよぐ", 
        kanji: "戦ぐ", 
        kana: "そよぐ", 
        pos: "自动词・五段",
        meaning: "微风吹拂，随风摇曳",
        example_jp: "風にススキがそよいでいる。",
        example_cn: "芒草在风中摇曳。"
    },
    { 
        id: 210, 
        word: "か弱い", 
        kanji: "か弱い", 
        kana: "かよわい", 
        pos: "イ形容词",
        meaning: "纤弱的，柔弱的",
        example_jp: "彼女はか弱い声で助けを求めた。",
        example_cn: "她用柔弱的声音呼救。"
    },
    { 
        id: 211, 
        word: "うぬぼれる", 
        kanji: "自惚れる", 
        kana: "うぬぼれる", 
        pos: "自动词・一段",
        meaning: "自负，骄傲，自我陶醉",
        example_jp: "彼女は自分が一番美しいとうぬぼれている。",
        example_cn: "她自负地认为自己是最美的。"
    },
    { 
        id: 212, 
        word: "ささやか", 
        kanji: "細やか", 
        kana: "ささやか", 
        pos: "ナ形容词",
        meaning: "微薄的，细小的，小规模的",
        example_jp: "家族でささやかなお祝いのパーティーを開いた。",
        example_cn: "家人一起办了个小规模的庆祝派对。"
    },
    { 
        id: 213, 
        word: "ゆるゆる", 
        kanji: "緩々", 
        kana: "ゆるゆる", 
        pos: "副词 / ナ形容词",
        meaning: "宽松，缓慢，慢腾腾",
        example_jp: "休日なので、家でゆるゆると過ごしている。",
        example_cn: "因为是休息日，所以在家慢腾腾地度过。"
    },
    { 
        id: 214, 
        word: "こまめ", 
        kanji: "小まめ", 
        kana: "こまめ", 
        pos: "ナ形容词",
        meaning: "勤快，勤奋，周到",
        example_jp: "健康のために、こまめに水分を補給する。",
        example_cn: "为了健康，勤补水。"
    },
    { 
        id: 215, 
        word: "くみ上げる", 
        kanji: "汲み上げる", 
        kana: "くみあげる", 
        pos: "他动词・一段",
        meaning: "打水，汲取；提拔，听取（意见等）",
        example_jp: "若手社員の意見を経営にくみ上げる。",
        example_cn: "在经营中听取并采纳年轻员工的意见。"
    },
    { 
        id: 216, 
        word: "コツ", 
        kanji: "骨", 
        kana: "こつ", 
        pos: "名词",
        meaning: "诀窍，窍门，要领",
        example_jp: "料理のコツを母に教わった。",
        example_cn: "向母亲请教了做菜的诀窍。"
    },
    { 
        id: 217, 
        word: "うずうず", 
        kanji: "うずうず", 
        kana: "うずうず", 
        pos: "副词 / 自动词・サ变",
        meaning: "心里发痒，迫不及待，跃跃欲试",
        example_jp: "早く新しいゲームで遊びたくて、うずうずしている。",
        example_cn: "想快点玩上新游戏，心里痒痒得迫不及待。"
    },
    { 
        id: 218, 
        word: "まちまち", 
        kanji: "区々", 
        kana: "まちまち", 
        pos: "名词 / ナ形容词",
        meaning: "形形色色，各不相同，意见不一",
        example_jp: "この問題に対する人の意見はまちまちだ。",
        example_cn: "人们对这个问题的意见各不相同。"
    },
    { 
        id: 219, 
        word: "ひたむき", 
        kanji: "直向き", 
        kana: "ひたむき", 
        pos: "ナ形容词",
        meaning: "一心一意，全神贯注",
        example_jp: "彼女のひたむきな努力が実を結んだ。",
        example_cn: "她一心一意的努力结出了果实。"
    },
    { 
        id: 220, 
        word: "つくづく", 
        kanji: "熟々", 
        kana: "つくづく", 
        pos: "副词",
        meaning: "仔细地，深切地，痛切地",
        example_jp: "自分の才能のなさをつくづく思い知らされた。",
        example_cn: "让我痛切地体会到了自己毫无才能。"
    },
    { 
        id: 221, 
        word: "でかい", 
        kanji: "でかい", 
        kana: "でかい", 
        pos: "イ形容词",
        meaning: "大，庞大（口语）",
        example_jp: "あの建物はとにかくでかい。",
        example_cn: "那栋建筑总之就是巨大。"
    },
    { 
        id: 222, 
        word: "くり抜く", 
        kanji: "刳り貫く", 
        kana: "くりぬく", 
        pos: "他动词・五段",
        meaning: "挖空，掏空",
        example_jp: "かぼちゃの中身をくり抜いて、ランタンを作る。",
        example_cn: "挖空南瓜的内心制作灯笼。"
    },
    { 
        id: 223, 
        word: "うかうか", 
        kanji: "うかうか", 
        kana: "うかうか", 
        pos: "副词 / 自动词・サ变",
        meaning: "漫不经心，疏忽大意",
        example_jp: "うかうかしていると、チャンスを逃してしまう。",
        example_cn: "要是漫不经心的话，就会错失良机。"
    },
    { 
        id: 224, 
        word: "はじける", 
        kanji: "弾ける", 
        kana: "はじける", 
        pos: "自动词・一段",
        meaning: "裂开，破裂；蹦跳",
        example_jp: "若さがはじけるような笑顔だ。",
        example_cn: "仿佛青春迸发般的笑容。"
    },
    { 
        id: 225, 
        word: "まばら", 
        kanji: "疎ら", 
        kana: "まばら", 
        pos: "ナ形容词",
        meaning: "稀疏，稀稀拉拉",
        example_jp: "早朝のバスは乗客もまばらだった。",
        example_cn: "清晨的公交车上乘客也稀稀拉拉的。"
    },
    { 
        id: 226, 
        word: "がりがり", 
        kanji: "がりがり", 
        kana: "がりがり", 
        pos: "ナ形容词 / 副词",
        meaning: "骨瘦如柴；咬牙切齿；嘎吱嘎吱响",
        example_jp: "彼は病気ですっかりがりがりになってしまった。",
        example_cn: "他因为生病变得瘦骨嶙峋了。"
    },
    { 
        id: 227, 
        word: "よりによって", 
        kanji: "選りに選って", 
        kana: "よりによって", 
        pos: "副词",
        meaning: "偏偏，挑来挑去偏偏",
        example_jp: "よりによってこんな忙しい日に風邪をひくなんて。",
        example_cn: "偏偏在这么忙的日子里感冒了。"
    },
    { 
        id: 228, 
        word: "たやすい", 
        kanji: "容易い", 
        kana: "たやすい", 
        pos: "イ形容词",
        meaning: "容易的，轻易的",
        example_jp: "その問題を解決するのはたやすいことではない。",
        example_cn: "解决那个问题并不是一件容易的事。"
    },
    { 
        id: 229, 
        word: "しゃきしゃき", 
        kanji: "しゃきしゃき", 
        kana: "しゃきしゃき", 
        pos: "副词 / 自动词・サ变",
        meaning: "脆生生；动作麻利，干脆",
        example_jp: "レタスのしゃきしゃきとした食感が好きだ。",
        example_cn: "我喜欢生菜清脆的口感。"
    },
    { 
        id: 230, 
        word: "〜びる", 
        kanji: "〜びる", 
        kana: "〜びる", 
        pos: "后缀 / 自动词・一段",
        meaning: "带有...样子，显得...（接在名词或词干后，如大人びる）",
        example_jp: "彼はすっかり大人びた顔つきになった。",
        example_cn: "他完全长成了一副大人的模样。"
    },
    { 
        id: 231, 
        word: "くさくさ", 
        kanji: "くさくさ", 
        kana: "くさくさ", 
        pos: "副词 / 自动词・サ变",
        meaning: "心情烦闷，郁闷",
        example_jp: "雨続きで気分がくさくさする。",
        example_cn: "阴雨连绵让人心情烦闷。"
    },
    { 
        id: 232, 
        word: "うっとうしい", 
        kanji: "鬱陶しい", 
        kana: "うっとうしい", 
        pos: "イ形容词",
        meaning: "烦闷，阴郁，沉闷；碍眼，烦人",
        example_jp: "梅雨のうっとうしい天気が続く。",
        example_cn: "梅雨季阴郁沉闷的天气还在持续。"
    },
    { 
        id: 233, 
        word: "つまむ", 
        kanji: "摘まむ / 撮む", 
        kana: "つまむ", 
        pos: "他动词・五段",
        meaning: "捏，夹；摘取；吃（一点），拈取",
        example_jp: "ひどい悪臭に思わず鼻をつまんだ。",
        example_cn: "恶臭难闻，不由得捏住了鼻子。"
    },
    { 
        id: 234, 
        word: "ずばり", 
        kanji: "ずばり", 
        kana: "ずばり", 
        pos: "副词",
        meaning: "一针见血地，直截了当地；一刀切下",
        example_jp: "専門家にずばり意見を聞いてみた。",
        example_cn: "直截了当地向专家征求了意见。"
    },
    { 
        id: 235, 
        word: "がくん", 
        kanji: "がくん", 
        kana: "がくん", 
        pos: "副词",
        meaning: "突然（减少、下降）；猛然折断或弯曲",
        example_jp: "モチベーションががくんと落ちた。",
        example_cn: "动力突然大幅下降。"
    },
    { 
        id: 236, 
        word: "ぼけ", 
        kanji: "惚け / 呆け", 
        kana: "ぼけ", 
        pos: "名词",
        meaning: "发呆，糊涂；迟钝",
        example_jp: "時差ぼけで頭が全然働かない。",
        example_cn: "受时差影响，大脑完全不转了。"
    },
    { 
        id: 237, 
        word: "よじ登る", 
        kanji: "攀じ登る", 
        kana: "よじのぼる", 
        pos: "他动词・五段",
        meaning: "攀登，爬上去",
        example_jp: "ロープを使って急な崖をよじ登る。",
        example_cn: "用绳索攀爬陡峭的悬崖。"
    },
    { 
        id: 238, 
        word: "しおれる", 
        kanji: "萎れる", 
        kana: "しおれる", 
        pos: "自动词・一段",
        meaning: "枯萎，凋谢；沮丧，气馁",
        example_jp: "水をやり忘れて、花がしおれてしまった。",
        example_cn: "忘了浇水，花枯萎了。"
    },
    { 
        id: 239, 
        word: "さながら", 
        kanji: "宛ら", 
        kana: "さながら", 
        pos: "副词",
        meaning: "宛如，仿佛，简直",
        example_jp: "その悲惨な光景は、さながら地獄絵図のようだった。",
        example_cn: "那悲惨的光景简直就像地狱绘卷一般。"
    },
    { 
        id: 240, 
        word: "とげとげ", 
        kanji: "刺々", 
        kana: "とげとげ", 
        pos: "名词",
        meaning: "多刺；尖酸刻薄",
        example_jp: "彼女の言い方はいつもとげとげしている。",
        example_cn: "她说话总是带刺（尖酸刻薄）。"
    },
    { 
        id: 241, 
        word: "びり", 
        kanji: "びり", 
        kana: "びり", 
        pos: "名词",
        meaning: "倒数第一，最后一名",
        example_jp: "徒競走でびりになった。",
        example_cn: "在赛跑中拿了倒数第一。"
    },
    { 
        id: 242, 
        word: "たるむ", 
        kanji: "弛む", 
        kana: "たるむ", 
        pos: "自动词・五段",
        meaning: "松弛，松懈",
        example_jp: "目標を達成して、少し気がたるんでいる。",
        example_cn: "达成目标后，神经稍微有些松懈了。"
    },
    { 
        id: 243, 
        word: "ずぶぬれ", 
        kanji: "ずぶ濡れ", 
        kana: "ずぶぬれ", 
        pos: "名词",
        meaning: "浑身湿透",
        example_jp: "突然の雨でずぶ濡れになった。",
        example_cn: "被突如其来的雨淋得浑身湿透。"
    },
    { 
        id: 244, 
        word: "ひとえに", 
        kanji: "偏に", 
        kana: "ひとえに", 
        pos: "副词",
        meaning: "完全，全凭，专心一意",
        example_jp: "今回の成功はひとえに皆様のおかげです。",
        example_cn: "这次的成功全凭大家的帮助。"
    },
    { 
        id: 245, 
        word: "にじむ", 
        kanji: "滲む", 
        kana: "にじむ", 
        pos: "自动词・五段",
        meaning: "渗出，晕开；流露",
        example_jp: "彼の言葉には怒りがにじんでいた。",
        example_cn: "他的话语中流露出了愤怒。"
    },
    { 
        id: 246, 
        word: "わざとらしい", 
        kanji: "態とらしい", 
        kana: "わざとらしい", 
        pos: "イ形容词",
        meaning: "做作的，不自然的，故意的",
        example_jp: "彼の態度はどこかわざとらしい。",
        example_cn: "他的态度总觉得有些做作。"
    },
    { 
        id: 247, 
        word: "ぎくぎく", 
        kanji: "ぎくぎく", 
        kana: "ぎくぎく", 
        pos: "副词 / 自动词・サ变",
        meaning: "动作僵硬，不自然；关系尴尬",
        example_jp: "喧嘩したため、二人の間がぎくぎくしている。",
        example_cn: "因为吵架了，两人之间的关系很尴尬。"
    },
    { 
        id: 248, 
        word: "くじく", 
        kanji: "挫く", 
        kana: "くじく", 
        pos: "他动词・五段",
        meaning: "扭伤；挫折，打击（锐气）",
        example_jp: "階段で足首をくじいてしまった。",
        example_cn: "在楼梯上扭伤了脚踝。"
    },
    { 
        id: 249, 
        word: "さえずる", 
        kanji: "囀る", 
        kana: "さえずる", 
        pos: "自动词・五段",
        meaning: "（鸟）鸣叫，啼啭；叽叽喳喳地说",
        example_jp: "森の中で小鳥がさえずっている。",
        example_cn: "小鸟在森林里欢快地啼叫。"
    },
    { 
        id: 250, 
        word: "いざとなると", 
        kanji: "いざとなれば / いざとなったら / いざとなると", 
        kana: "いざとなると", 
        pos: "连语",
        meaning: "一旦到了关键时刻，真到了紧要关头",
        example_jp: "普段は強気だが、いざとなると逃げ出してしまう。",
        example_cn: "平时很要强，但一到关键时刻就跑路了。"
    },
    { 
        id: 251, 
        word: "まくし立てる", 
        kanji: "捲し立てる", 
        kana: "まくしたてる", 
        pos: "他动词・一段",
        meaning: "喋喋不休，连珠炮似地说",
        example_jp: "彼女は怒りに任せて、相手のミスを激しくまくし立てた。",
        example_cn: "她任凭自己发怒，连珠炮似地激烈指责了对方的失误。"
    },
    { 
        id: 252, 
        word: "かかと", 
        kanji: "踵", 
        kana: "かかと", 
        pos: "名词",
        meaning: "脚后跟，鞋跟",
        example_jp: "長く歩いたので、靴の踵がすり減っている。",
        example_cn: "因为走了很长路，鞋的后跟磨损了。"
    },
    { 
        id: 253, 
        word: "こらえる", 
        kanji: "堪える", 
        kana: "こらえる", 
        pos: "他动词・一段",
        meaning: "忍耐，忍受，控制（感情）",
        example_jp: "激しい痛みを堪えて、最後まで走り抜いた。",
        example_cn: "强忍着剧痛，坚持跑到了最后。"
    },
    { 
        id: 254, 
        word: "とやかく", 
        kanji: "兎や角", 
        kana: "とやかく", 
        pos: "副词",
        meaning: "说三道四，横加指责",
        example_jp: "他人のプライバシーにとやかく言うべきではない。",
        example_cn: "不应该对他人的隐私说三道四。"
    },
    { 
        id: 255, 
        word: "まとめ", 
        kanji: "纏め", 
        kana: "まとめ", 
        pos: "名词",
        meaning: "总结，概括，汇总",
        example_jp: "会議の最後に、今日の議論の纏めを行う。",
        example_cn: "在会议最后，对今天的讨论进行总结。"
    },
    { 
        id: 256, 
        word: "はぐらかす", 
        kanji: "逸らかす", 
        kana: "はぐらかす", 
        pos: "他动词・五段",
        meaning: "岔开话题，搪塞，支吾过去",
        example_jp: "都合が悪くなると、彼はいつも話をはぐらかす。",
        example_cn: "一遇到不利的情况，他总是把话题岔开。"
    },
    { 
        id: 257, 
        word: "おとしめる", 
        kanji: "貶める", 
        kana: "おとしめる", 
        pos: "他动词・一段",
        meaning: "贬低，蔑视，使受屈辱",
        example_jp: "ライバルを貶めるような卑劣なやり方は許せない。",
        example_cn: "无法原谅那种贬低竞争对手的卑劣手段。"
    },
    { 
        id: 258, 
        word: "つぶら", 
        kanji: "円ら", 
        kana: "つぶら", 
        pos: "ナ形容词",
        meaning: "圆圆的（多指眼睛）",
        example_jp: "子犬が円らな瞳でこちらを見つめている。",
        example_cn: "小狗用圆圆的眼睛盯着这边看。"
    },
    { 
        id: 259, 
        word: "みだり", 
        kanji: "妄り", 
        kana: "みだり", 
        pos: "副词 / ナ形容词",
        meaning: "（多以「みだりに」的形式）胡乱，随便，无故",
        example_jp: "関係者以外、妄りに立ち入ることを禁ず。",
        example_cn: "非相关人员严禁擅自入内。"
    },
    { 
        id: 260, 
        word: "ぱくる", 
        kanji: "ぱくる", 
        kana: "ぱくる", 
        pos: "他动词・五段",
        meaning: "（俗语）偷窃；抄袭，剽窃；大口吃",
        example_jp: "他人のアイデアをぱくるのは泥棒と同じだ。",
        example_cn: "抄袭他人的想法和强盗无异。"
    },
    { 
        id: 261, 
        word: "めくる", 
        kanji: "捲る", 
        kana: "めくる", 
        pos: "他动词・五段",
        meaning: "翻（书页、日历等），掀起",
        example_jp: "毎朝起きると、まずカレンダーを捲る。",
        example_cn: "每天早上起床后，首先翻日历。"
    },
    { 
        id: 262, 
        word: "くまなく", 
        kanji: "隈なく", 
        kana: "くまなく", 
        pos: "副词",
        meaning: "到处，毫无保留地，不留死角地",
        example_jp: "失くした指輪を探して、部屋の中を隈なく探した。",
        example_cn: "为了找丢失的戒指，把房间里每个角落都找遍了。"
    },
    { 
        id: 263, 
        word: "そっぽ", 
        kanji: "外方", 
        kana: "そっぽ", 
        pos: "名词",
        meaning: "扭过脸去，不理睬",
        example_jp: "注意された子供は、怒ってそっぽを向いてしまった。",
        example_cn: "被警告的孩子生气地把脸扭向了一边。"
    },
    { 
        id: 264, 
        word: "ばらつき", 
        kanji: "ばらつき", 
        kana: "ばらつき", 
        pos: "名词",
        meaning: "参差不齐，不一致，分散",
        example_jp: "この工場で作られる製品は品質にばらつきがある。",
        example_cn: "这家工厂生产的产品质量参差不齐。"
    },
    { 
        id: 265, 
        word: "むなしい", 
        kanji: "空しい / 虚しい", 
        kana: "むなしい", 
        pos: "イ形容词",
        meaning: "空虚的，徒劳的，毫无意义的",
        example_jp: "必死の努力もむなしく、試合には負けてしまった。",
        example_cn: "拼死的努力也成了徒劳，输掉了比赛。"
    },
    { 
        id: 266, 
        word: "あっけらかん", 
        kanji: "呆気らかん", 
        kana: "あっけらかん", 
        pos: "副词 / 自动词・サ变",
        meaning: "满不在乎，若无其事；发呆",
        example_jp: "先生に激怒されたのに、彼はあっけらかんとしている。",
        example_cn: "明明被老师大骂了一顿，他却一副若无其事的样子。"
    },
    { 
        id: 267, 
        word: "やつれる", 
        kanji: "窶れる", 
        kana: "やつれる", 
        pos: "自动词・一段",
        meaning: "憔悴，消瘦",
        example_jp: "長期間の看病疲れで、彼女はすっかり窶れてしまった。",
        example_cn: "因为长时间看护病人的疲劳，她完全憔悴了。"
    },
    { 
        id: 268, 
        word: "にやにや", 
        kanji: "にやにや", 
        kana: "にやにや", 
        pos: "副词 / 自动词・サ变",
        meaning: "冷笑，嗤笑，不怀好意地笑",
        example_jp: "何を企んでいるのか、彼は一人でにやにや笑っている。",
        example_cn: "不知道在盘算什么，他一个人在不怀好意地偷偷笑。"
    },
    { 
        id: 269, 
        word: "しとやか", 
        kanji: "淑やか", 
        kana: "しとやか", 
        pos: "ナ形容词",
        meaning: "端庄，文雅，淑静",
        example_jp: "彼女の着物姿はとてもしとやかで美しい。",
        example_cn: "她穿和服的样子非常端庄美丽。"
    },
    { 
        id: 270, 
        word: "ぼつぼつ", 
        kanji: "勃々", 
        kana: "ぼつぼつ", 
        pos: "副词",
        meaning: "渐渐地；差不多该...；点点，起疱",
        example_jp: "すっかり暗くなってきたので、ぼつぼつ帰りましょう。",
        example_cn: "天已经全黑了，差不多该回去了吧。"
    },
    { 
        id: 271, 
        word: "ぐさり", 
        kanji: "ぐさり", 
        kana: "ぐさり", 
        pos: "副词",
        meaning: "猛力刺入貌；深深刺痛（内心）",
        example_jp: "彼の厳しい一言が、私の胸にぐさりと刺さった。",
        example_cn: "他严厉的一句话，深深刺痛了我的心。"
    },
    { 
        id: 272, 
        word: "ぽつぽつ", 
        kanji: "点々 / ぽつぽつ", 
        kana: "ぽつぽつ", 
        pos: "副词",
        meaning: "一点一点地（下雨）；渐渐地；稀稀拉拉",
        example_jp: "空が暗くなり、雨がぽつぽつと降り始めた。",
        example_cn: "天变暗了，雨滴答滴答地开始下了。"
    },
    { 
        id: 273, 
        word: "うば", 
        kanji: "姥", 
        kana: "うば", 
        pos: "名词",
        meaning: "老妇人，老奶奶",
        example_jp: "昔話にはよくお爺さんと姥（おばあさん）が登場する。",
        example_cn: "日本民间故事里经常出现老爷爷和老奶奶。"
    },
    { 
        id: 274, 
        word: "どっきり", 
        kanji: "どっきり", 
        kana: "どっきり", 
        pos: "副词 / 自动词・サ变",
        meaning: "吃惊，吓一跳",
        example_jp: "後ろから突然肩を叩かれて、どっきりした。",
        example_cn: "突然被人从后面拍了一下肩膀，吓了一跳。"
    },
    { 
        id: 275, 
        word: "〜ぶる", 
        kanji: "〜振る", 
        kana: "〜ぶる", 
        pos: "后缀 / 自动词・五段",
        meaning: "装作...的样子，摆出...的架子（接在名词或形容词词干后）",
        example_jp: "彼はたいして実力もないのに、いつも偉ぶっている。",
        example_cn: "他明明没什么实力，却总是摆出一副了不起的架子。"
    },
    { 
        id: 276, 
        word: "かなわない", 
        kanji: "叶わない / 敵わない", 
        kana: "かなわない", 
        pos: "イ形容词 / 连语",
        meaning: "敌不过，比不上；受不了，吃不消",
        example_jp: "彼の圧倒的な語学力には到底敵わない。",
        example_cn: "对于他压倒性的语言能力，我是无论如何也比不上的。"
    },
    { 
        id: 277, 
        word: "よろける", 
        kanji: "蹌踉ける", 
        kana: "よろける", 
        pos: "自动词・一段",
        meaning: "踉跄，打趔趄，站立不稳",
        example_jp: "石につまずいて、思わずよろけた。",
        example_cn: "被石头绊了一下，不由得打了个趔趄。"
    },
    { 
        id: 278, 
        word: "ねっとり", 
        kanji: "ねっとり", 
        kana: "ねっとり", 
        pos: "副词 / 自动词・サ变",
        meaning: "黏糊糊的，口感黏糯；态度黏人",
        example_jp: "このアイスはねっとりとした濃厚な食感が特徴だ。",
        example_cn: "这款冰淇淋以黏糯浓郁的口感为特征。"
    },
    { 
        id: 279, 
        word: "つるす", 
        kanji: "吊（る）す", 
        kana: "つるす", 
        pos: "他动词・五段",
        meaning: "悬挂，吊挂",
        example_jp: "夏の風物詩として、窓辺に風鈴を吊るす。",
        example_cn: "作为夏天的风物诗，在窗边挂上风铃。"
    },
    { 
        id: 280, 
        word: "ねじまがる", 
        kanji: "捻じ曲がる", 
        kana: "ねじまがる", 
        pos: "自动词・五段",
        meaning: "弯曲，扭曲；（事实等）被歪曲",
        example_jp: "真実がねじ曲がって報道されるのは恐ろしいことだ。",
        example_cn: "真相被歪曲报道是一件可怕的事情。"
    },
    { 
        id: 281, 
        word: "わいわい", 
        kanji: "わいわい", 
        kana: "わいわい", 
        pos: "副词",
        meaning: "吵吵嚷嚷，闹哄哄地",
        example_jp: "居酒屋で仲間たちとわいわい騒いでストレスを発散する。",
        example_cn: "在居酒屋和朋友们吵吵嚷嚷地发泄压力。"
    },
    { 
        id: 282, 
        word: "すたすた", 
        kanji: "すたすた", 
        kana: "すたすた", 
        pos: "副词",
        meaning: "急匆匆地走，头也不回地快步走",
        example_jp: "彼は怒った顔で、挨拶もせずにすたすたと歩き去った。",
        example_cn: "他一脸怒容，连招呼都不打就急匆匆地走开了。"
    },
    { 
        id: 283, 
        word: "もつれる", 
        kanji: "縺れる", 
        kana: "もつれる", 
        pos: "自动词・一段",
        meaning: "纠缠，缠结；（舌头等）打结，不灵便",
        example_jp: "大勢の前でスピーチをした時、緊張して舌がもつれた。",
        example_cn: "在众人面前演讲时，紧张得舌头都打结了。"
    },
    { 
        id: 284, 
        word: "くだくだしい", 
        kanji: "管々しい", 
        kana: "くだくだしい", 
        pos: "イ形容词",
        meaning: "冗长，啰嗦，絮叨",
        example_jp: "くだくだしい説明は省いて、単刀直入に結論を言ってください。",
        example_cn: "请省去冗长啰嗦的说明，单刀直入地说结论吧。"
    },
    { 
        id: 285, 
        word: "そもそも", 
        kanji: "抑", 
        kana: "そもそも", 
        pos: "副词 / 连词",
        meaning: "究竟，原本，说起来",
        example_jp: "そもそも、この無謀な計画には最初から無理があった。",
        example_cn: "说起来，这个鲁莽的计划从一开始就不切实际。"
    },
    { 
        id: 286, 
        word: "めらめら", 
        kanji: "めらめら", 
        kana: "めらめら", 
        pos: "副词",
        meaning: "熊熊燃烧貌；（情绪）激烈燃起",
        example_jp: "ライバルの成功を見て、彼の心に嫉妬の炎がめらめらと燃え上がった。",
        example_cn: "看到对手的成功，他心中嫉妒的怒火熊熊燃烧起来。"
    },
    { 
        id: 287, 
        word: "えぐみ", 
        kanji: "蘞味", 
        kana: "えぐみ", 
        pos: "名词",
        meaning: "涩味，涩口（尤指刺嗓子的味道）",
        example_jp: "このタケノコはアク抜きが不十分で、少しえぐみがある。",
        example_cn: "这个竹笋去涩不到位，稍微有些涩口。"
    },
    { 
        id: 288, 
        word: "しょんぼり", 
        kanji: "しょんぼり", 
        kana: "しょんぼり", 
        pos: "副词 / 自动词・サ变",
        meaning: "无精打采，垂头丧气",
        example_jp: "試合に負けて、彼はしょんぼりして家に帰ってきた。",
        example_cn: "因为输了比赛，他垂头丧气地回到了家。"
    },
    { 
        id: 289, 
        word: "ぼちぼち", 
        kanji: "ぼちぼち", 
        kana: "ぼちぼち", 
        pos: "副词",
        meaning: "渐渐地；差不多该...（同ぼつぼつ，多用于关西及口语）",
        example_jp: "準備ができたので、ぼちぼち作業を始めようか。",
        example_cn: "准备工作做好了，差不多该开始干活了吧。"
    },
    { 
        id: 290, 
        word: "ときめく", 
        kanji: "時めく / 悸く", 
        kana: "ときめく", 
        pos: "自动词・五段",
        meaning: "心跳，激动，心动；得势",
        example_jp: "憧れの俳優を目の前にして、胸が激しくときめいた。",
        example_cn: "面对憧憬的演员，内心激动得砰砰直跳。"
    },
    { 
        id: 291, 
        word: "こびりつく", 
        kanji: "こびり付く", 
        kana: "こびりつく", 
        pos: "自动词・五段",
        meaning: "牢牢粘附，附着，无法消除",
        example_jp: "カレーの汚れが鍋の底にこびり付いて取れない。",
        example_cn: "咖喱的污渍牢牢粘在锅底洗不掉。"
    },
    { 
        id: 292, 
        word: "もてなし", 
        kanji: "持て成し", 
        kana: "もてなし", 
        pos: "名词",
        meaning: "款待，招待，服务",
        example_jp: "旅館のスタッフの温かいお持て成しに感動した。",
        example_cn: "被旅馆员工温暖的款待所感动。"
    },
    { 
        id: 293, 
        word: "めそめそ", 
        kanji: "めそめそ", 
        kana: "めそめそ", 
        pos: "副词 / 自动词・サ变",
        meaning: "抽泣，暗自落泪，懦弱软弱",
        example_jp: "少し怒られたくらいで、いつまでもめそめそ泣いているんじゃない。",
        example_cn: "不过是被稍微说了两句，不要一直抽抽搭搭地哭个没完。"
    },
    { 
        id: 294, 
        word: "はびこる", 
        kanji: "蔓延る", 
        kana: "はびこる", 
        pos: "自动词・五段",
        meaning: "蔓延，丛生；猖獗，横行",
        example_jp: "手入れをしていない庭に、雑草がすっかり蔓延っている。",
        example_cn: "在缺乏打理的院子里，杂草已经完全蔓延开来。"
    },
    { 
        id: 295, 
        word: "くらくら", 
        kanji: "くらくら", 
        kana: "くらくら", 
        pos: "副词 / 自动词・サ变",
        meaning: "眩晕，头晕眼花；（水）沸腾貌",
        example_jp: "急に立ち上がった瞬間、めまいで頭がくらくらした。",
        example_cn: "猛地站起来的瞬间，一阵目眩觉得头晕眼花。"
    },
    { 
        id: 296, 
        word: "ざっくり", 
        kanji: "ざっくり", 
        kana: "ざっくり", 
        pos: "副词 / 自动词・サ变",
        meaning: "粗略地，大体上；大口劈开",
        example_jp: "詳細なデータはないが、ざっくりと計算したところ予算内に収まりそうだ。",
        example_cn: "虽然没有详细数据，但粗略计算了一下，似乎能控制在预算内。"
    },
    { 
        id: 297, 
        word: "あらかじめ", 
        kanji: "予め", 
        kana: "あらかじめ", 
        pos: "副词",
        meaning: "预先，提前，事先",
        example_jp: "会議を欠席される場合は、予め担当者までご連絡ください。",
        example_cn: "如需缺席会议，请事先联系负责人。"
    },
    { 
        id: 298, 
        word: "すぼむ", 
        kanji: "窄む", 
        kana: "すぼむ", 
        pos: "自动词・五段",
        meaning: "收缩，变窄，聚拢",
        example_jp: "突然の強風で、さしていた傘が窄んでしまった。",
        example_cn: "由于突然的强风，撑着的伞收缩了起来。"
    },
    { 
        id: 299, 
        word: "ちくちく", 
        kanji: "ちくちく", 
        kana: "ちくちく", 
        pos: "副词 / 自动词・サ变",
        meaning: "刺痛，扎人；只言片语地讽刺",
        example_jp: "このセーターは毛が直接肌に触れるとちくちくする。",
        example_cn: "这件毛衣的毛直接接触皮肤的话会有些刺痛。"
    },
{ 
        id: 300, 
        word: "かささぎ", 
        kanji: "鵲", 
        kana: "かささぎ", 
        pos: "名词",
        meaning: "喜鹊",
        example_jp: "七夕の夜、鵲が天の川に橋を架けるという伝説がある。",
        example_cn: "传说在七夕之夜，喜鹊会在银河上架起一座桥。"
    },
    { 
        id: 301, 
        word: "すり身", 
        kanji: "擂り身", 
        kana: "すりみ", 
        pos: "名词",
        meaning: "（鱼、肉等）捣碎的肉泥",
        example_jp: "魚のすり身を揚げて、さつま揚げを作る。",
        example_cn: "把鱼肉泥油炸，做成炸鱼饼。"
    },
    { 
        id: 302, 
        word: "すがる", 
        kanji: "縋る", 
        kana: "すがる", 
        pos: "自动词・五段",
        meaning: "依靠，依赖，搂住，抓住",
        example_jp: "最後の希望に縋る思いで、彼に助けを求めた。",
        example_cn: "抱着抓住最后一丝希望的想法，向他求助。"
    },
    { 
        id: 303, 
        word: "おぼろげ", 
        kanji: "朧げ", 
        kana: "おぼろげ", 
        pos: "ナ形容词",
        meaning: "模糊，朦胧，隐约",
        example_jp: "幼い頃の記憶がおぼろげに蘇ってきた。",
        example_cn: "儿时的记忆隐隐约约地苏醒了。"
    },
    { 
        id: 304, 
        word: "へろへろ", 
        kanji: "へろへろ", 
        kana: "へろへろ", 
        pos: "副词 / ナ形容词",
        meaning: "筋疲力尽，软弱无力",
        example_jp: "猛暑の中を一日中歩き回って、もうへろへろだ。",
        example_cn: "在酷暑中走了一整天，已经筋疲力尽了。"
    },
    { 
        id: 305, 
        word: "やり遂げる", 
        kanji: "遣り遂げる", 
        kana: "やりとげる", 
        pos: "他动词・一段",
        meaning: "完成到底，坚持做完",
        example_jp: "どんな困難があっても、与えられた任務はやり遂げる。",
        example_cn: "无论遇到什么困难，都要把交给的任务完成到底。"
    },
    { 
        id: 306, 
        word: "ぼたぼた", 
        kanji: "ぼたぼた", 
        kana: "ぼたぼた", 
        pos: "副词",
        meaning: "（水滴等）吧嗒吧嗒地直往下滴",
        example_jp: "濡れた髪から水がぼたぼたと落ちている。",
        example_cn: "水从湿漉漉的头发上吧嗒吧嗒地滴下来。"
    },
    { 
        id: 307, 
        word: "おっとり", 
        kanji: "おっとり", 
        kana: "おっとり", 
        pos: "副词 / 自动词・サ变",
        meaning: "稳重，大方，不慌不忙",
        example_jp: "彼女は常におっとりしていて、少しも慌てない。",
        example_cn: "她总是稳重大方，一点也不慌张。"
    },
    { 
        id: 308, 
        word: "うねうね", 
        kanji: "蜿蜿", 
        kana: "うねうね", 
        pos: "副词 / 自动词・サ变",
        meaning: "蜿蜒，弯弯曲曲",
        example_jp: "山の中をうねうねと続く道をドライブする。",
        example_cn: "驾车行驶在山里蜿蜒曲折的道路上。"
    },
    { 
        id: 309, 
        word: "ほっぺた", 
        kanji: "頰っぺた", 
        kana: "ほっぺた", 
        pos: "名词",
        meaning: "脸颊，腮帮子（口语）",
        example_jp: "あまりの美味しさに、ほっぺたが落ちそうだ。",
        example_cn: "好吃得简直要掉下巴（脸颊掉下来）了。"
    },
    { 
        id: 310, 
        word: "ぐっと", 
        kanji: "ぐっと", 
        kana: "ぐっと", 
        pos: "副词",
        meaning: "一口气地；更加；感动地；用力地",
        example_jp: "冷たいビールをぐっと飲み干した。",
        example_cn: "把冰镇啤酒一口气喝光了。"
    },
    { 
        id: 311, 
        word: "すこぶる", 
        kanji: "頗る", 
        kana: "すこぶる", 
        pos: "副词",
        meaning: "非常，极其（多用于积极意义）",
        example_jp: "昨日はよく眠れたので、今日はすこぶる体調が良い。",
        example_cn: "昨天睡得很好，所以今天身体状况极佳。"
    },
    { 
        id: 312, 
        word: "じりじり", 
        kanji: "じりじり", 
        kana: "じりじり", 
        pos: "副词 / 自动词・サ变",
        meaning: "（太阳）毒辣；焦急，不耐烦；步步逼近",
        example_jp: "返事が来なくて、じりじりしながら待っている。",
        example_cn: "没收到回复，正焦急地等待着。"
    },
    { 
        id: 313, 
        word: "よろよろ", 
        kanji: "よろよろ", 
        kana: "よろよろ", 
        pos: "副词 / 自动词・サ变",
        meaning: "步履蹒跚，摇摇晃晃",
        example_jp: "怪我をした彼は、よろよろと立ち上がった。",
        example_cn: "受了伤的他，摇摇晃晃地站了起来。"
    },
    { 
        id: 314, 
        word: "なぜか", 
        kanji: "何故か", 
        kana: "なぜか", 
        pos: "副词",
        meaning: "不知为何，总觉得",
        example_jp: "今日はなぜか胸騒ぎがする。",
        example_cn: "今天不知为何心里有些不安。"
    },
    { 
        id: 315, 
        word: "おろか", 
        kanji: "疎か", 
        kana: "おろか", 
        pos: "ナ形容词",
        meaning: "敷衍，马虎；（接「〜はおろか」）别说...连...",
        example_jp: "彼は怪我で、走ることはおろか歩くことすらできない。",
        example_cn: "他因为受伤，别说跑了，连走路都不行。"
    },
    { 
        id: 316, 
        word: "がんがん", 
        kanji: "がんがん", 
        kana: "がんがん", 
        pos: "副词 / 自动词・サ变",
        meaning: "（头）剧痛；当当响；猛烈地，毫不客气地",
        example_jp: "二日酔いで頭ががんがんする。",
        example_cn: "宿醉惹得头痛欲裂。"
    },
    { 
        id: 317, 
        word: "もぞもぞ", 
        kanji: "もぞもぞ", 
        kana: "もぞもぞ", 
        pos: "副词 / 自动词・サ变",
        meaning: "蠢动，蠕动；（因不安等）坐立不安，乱动",
        example_jp: "布団の中で虫がもぞもぞ動いているような気がした。",
        example_cn: "感觉被子里好像有虫子在蠕动。"
    },
    { 
        id: 318, 
        word: "ゆすぐ", 
        kanji: "濯ぐ", 
        kana: "ゆすぐ", 
        pos: "他动词・五段",
        meaning: "漱（口），涮洗，漂洗",
        example_jp: "歯を磨いた後、水で口をゆすぐ。",
        example_cn: "刷牙后，用水漱口。"
    },
    { 
        id: 319, 
        word: "どんより", 
        kanji: "どんより", 
        kana: "どんより", 
        pos: "副词 / 自动词・サ变",
        meaning: "阴沉，浑浊，阴霾",
        example_jp: "空はどんよりと曇り、今にも雨が降りそうだ。",
        example_cn: "天空阴沉沉的，眼看就要下雨了。"
    },
    { 
        id: 320, 
        word: "うだうだ", 
        kanji: "うだうだ", 
        kana: "うだうだ", 
        pos: "副词 / 自动词・サ变",
        meaning: "啰里啰嗦，闲扯；无所事事",
        example_jp: "休日は家でうだうだして過ごすことが多い。",
        example_cn: "休息日大多在家里无所事事地度过。"
    },
    { 
        id: 321, 
        word: "おおむね", 
        kanji: "概ね", 
        kana: "おおむね", 
        pos: "副词 / 名词",
        meaning: "大致，大体上，大概",
        example_jp: "工事はおおむね予定通りに進行している。",
        example_cn: "工程大体上正按计划进行。"
    },
    { 
        id: 322, 
        word: "ありとあらゆる", 
        kanji: "有りとあらゆる", 
        kana: "ありとあらゆる", 
        pos: "连体词",
        meaning: "所有的一切，各种各样的",
        example_jp: "解決のために、ありとあらゆる手段を尽くした。",
        example_cn: "为了解决问题，穷尽了一切手段。"
    },
    { 
        id: 323, 
        word: "ぼそぼそ", 
        kanji: "ぼそぼそ", 
        kana: "ぼそぼそ", 
        pos: "副词 / 自动词・サ变",
        meaning: "小声嘟哝；（食物）干巴巴，难以下咽",
        example_jp: "彼は自信がないのか、いつもぼそぼそと話す。",
        example_cn: "他不知道是不是没自信，说话总是小声嘟哝。"
    },
    { 
        id: 324, 
        word: "どろどろ", 
        kanji: "どろどろ", 
        kana: "どろどろ", 
        pos: "副词 / ナ形容词",
        meaning: "黏糊糊，融化貌；沾满泥；（关系）复杂，纠葛",
        example_jp: "アイスクリームが溶けてどろどろになった。",
        example_cn: "冰淇淋融化变得黏糊糊的了。"
    },
    { 
        id: 325, 
        word: "やましい", 
        kanji: "疚しい", 
        kana: "やましい", 
        pos: "イ形容词",
        meaning: "内疚，问心有愧，亏心",
        example_jp: "やましいところがないなら、堂々としていればいい。",
        example_cn: "如果没有问心有愧的地方，堂堂正正的就好。"
    },
    { 
        id: 326, 
        word: "ひいき", 
        kanji: "贔屓", 
        kana: "ひいき", 
        pos: "名词 / 他动词・サ变",
        meaning: "偏爱，袒护，特别关照",
        example_jp: "店長は特定のアルバイトだけを贔屓している。",
        example_cn: "店长只偏袒特定的兼职员工。"
    },
    { 
        id: 327, 
        word: "はざま", 
        kanji: "狭間", 
        kana: "はざま", 
        pos: "名词",
        meaning: "缝隙，山谷；夹缝，过渡期",
        example_jp: "生と死の狭間を彷徨った末、奇跡的に回復した。",
        example_cn: "在生与死的夹缝中徘徊之后，奇迹般地康复了。"
    },
    { 
        id: 328, 
        word: "ぼきぼき", 
        kanji: "ぼきぼき", 
        kana: "ぼきぼき", 
        pos: "副词",
        meaning: "（折断粗硬物或关节的）嘎吧嘎吧声",
        example_jp: "背伸びをして、関節をぼきぼきと鳴らした。",
        example_cn: "伸了个懒腰，关节发出嘎吧嘎吧的响声。"
    },
    { 
        id: 329, 
        word: "こぐ", 
        kanji: "漕ぐ", 
        kana: "こぐ", 
        pos: "他动词・五段",
        meaning: "划（船），蹬（自行车），荡（秋千）",
        example_jp: "向かい風の中、必死に自転車のペダルを漕いだ。",
        example_cn: "在迎面风中，拼命地蹬着自行车的踏板。"
    },
    { 
        id: 330, 
        word: "とりあえず", 
        kanji: "取り敢えず", 
        kana: "とりあえず", 
        pos: "副词",
        meaning: "总之，暂且，首先",
        example_jp: "今後のことは後で考えるとして、取り敢えずビールで乾杯しよう。",
        example_cn: "以后的事情以后再想，总之先用啤酒干杯吧。"
    },
    { 
        id: 331, 
        word: "〜まみれ", 
        kanji: "〜塗れ", 
        kana: "〜まみれ", 
        pos: "后缀",
        meaning: "沾满...，浑身是...（多接消极事物，如血、汗、泥、借金）",
        example_jp: "泥まみれになってボールを追いかけた。",
        example_cn: "弄得浑身是泥去追赶球。"
    },
    { 
        id: 332, 
        word: "それなり", 
        kanji: "其れ成り", 
        kana: "それなり", 
        pos: "名词 / 副词",
        meaning: "与之相称，恰如其分，也就那样",
        example_jp: "安いカメラだが、それなりの写真は撮れる。",
        example_cn: "虽然是便宜的相机，但也能拍出过得去的照片。"
    },
    { 
        id: 333, 
        word: "ほとり", 
        kanji: "辺 / 畔", 
        kana: "ほとり", 
        pos: "名词",
        meaning: "边，畔，附近（多指水边）",
        example_jp: "湖のほとりにある静かなホテルに泊まった。",
        example_cn: "住在了湖畔的一家安静的酒店里。"
    },
    { 
        id: 334, 
        word: "きくらげ", 
        kanji: "木耳", 
        kana: "きくらげ", 
        pos: "名词",
        meaning: "黑木耳",
        example_jp: "中華スープにきくらげを入れて食感を良くする。",
        example_cn: "在中华汤里加入黑木耳以改善口感。"
    },
    { 
        id: 335, 
        word: "すがすがしい", 
        kanji: "清々しい", 
        kana: "すがすがしい", 
        pos: "イ形容词",
        meaning: "清爽，神清气爽，爽快",
        example_jp: "早朝の森を散歩するのは、とても清々しい気分だ。",
        example_cn: "清晨在森林里散步，感觉非常神清气爽。"
    },
    { 
        id: 336, 
        word: "しっぽり", 
        kanji: "しっぽり", 
        kana: "しっぽり", 
        pos: "副词 / 自动词・サ变",
        meaning: "静静地（下雨）；柔情蜜意，情意缠绵",
        example_jp: "夫婦水入らずで、温泉旅館でしっぽりと過ごす。",
        example_cn: "只有夫妻二人，在温泉旅馆情意绵绵地度过。"
    },
    { 
        id: 337, 
        word: "いそいそ", 
        kanji: "急々", 
        kana: "いそいそ", 
        pos: "副词 / 自动词・サ变",
        meaning: "兴冲冲地，欢欣雀跃地",
        example_jp: "彼はデートの約束があるらしく、いそいそと出かけていった。",
        example_cn: "他好像有约会，兴冲冲地出门去了。"
    },
    { 
        id: 338, 
        word: "さほど", 
        kanji: "然程", 
        kana: "さほど", 
        pos: "副词",
        meaning: "（后接否定）并不那么，不太...",
        example_jp: "今年の冬は、例年に比べてさほど寒くない。",
        example_cn: "今年的冬天和往年相比没那么冷。"
    },
    { 
        id: 339, 
        word: "いたしかたない", 
        kanji: "致し方無い", 
        kana: "いたしかたない", 
        pos: "イ形容词",
        meaning: "没有办法，无可奈何",
        example_jp: "天候不良によるフライトのキャンセルは致し方ないことだ。",
        example_cn: "由于天气恶劣导致航班取消，这也是无可奈何的事。"
    },
    { 
        id: 340, 
        word: "すりつぶす", 
        kanji: "擂り潰す", 
        kana: "すりつぶす", 
        pos: "他动词・五段",
        meaning: "捣碎，研碎；消耗殆尽",
        example_jp: "ごまをすりつぶして、料理の風味を増す。",
        example_cn: "把芝麻研碎，增加菜肴的风味。"
    },
    { 
        id: 341, 
        word: "てんで", 
        kanji: "転で", 
        kana: "てんで", 
        pos: "副词",
        meaning: "（后接否定）完全不，根本不；非常",
        example_jp: "彼の言い訳はてんで話にならない。",
        example_cn: "他的借口简直完全说不通。"
    },
    { 
        id: 342, 
        word: "ありふれる", 
        kanji: "有り触れる", 
        kana: "ありふれる", 
        pos: "自动词・一段",
        meaning: "常见，不稀奇，司空见惯",
        example_jp: "これはどこにでもある、ごくありふれた花です。",
        example_cn: "这是哪里都有的、极其普通的花。"
    },
    { 
        id: 343, 
        word: "こずえ", 
        kanji: "梢", 
        kana: "こずえ", 
        pos: "名词",
        meaning: "树梢",
        example_jp: "木々の梢が風に揺れている。",
        example_cn: "树梢在风中摇曳。"
    },
    { 
        id: 344, 
        word: "はかない", 
        kanji: "儚い", 
        kana: "はかない", 
        pos: "イ形容词",
        meaning: "短暂的，无常的，虚幻的",
        example_jp: "セミの命は短く、はかないものだ。",
        example_cn: "蝉的生命短暂而无常。"
    },
    { 
        id: 345, 
        word: "ぼける", 
        kanji: "惚ける / 呆ける", 
        kana: "ぼける", 
        pos: "自动词・一段",
        meaning: "迟钝，糊涂；（颜色、记忆等）模糊",
        example_jp: "祖父は最近、少し頭がぼけてきたようだ。",
        example_cn: "祖父最近脑子好像有点糊涂了。"
    },
    { 
        id: 346, 
        word: "すばしこい", 
        kanji: "素早しこい / 捷い", 
        kana: "すばしこい", 
        pos: "イ形容词",
        meaning: "敏捷，灵敏，麻利",
        example_jp: "小鳥はすばしこく枝から枝へと飛び移った。",
        example_cn: "小鸟敏捷地从一个树枝飞到了另一个树枝。"
    },
    { 
        id: 347, 
        word: "じわっと", 
        kanji: "じわっと", 
        kana: "じわっと", 
        pos: "副词",
        meaning: "慢慢地渗出，逐渐地",
        example_jp: "感動的な映画を見て、涙がじわっと溢れてきた。",
        example_cn: "看了感人的电影，眼泪慢慢地涌了出来。"
    },
    { 
        id: 348, 
        word: "やりて", 
        kanji: "遣り手", 
        kana: "やりて", 
        pos: "名词",
        meaning: "能干的人，手腕高明的人",
        example_jp: "彼女は業界でも有名な遣り手のビジネスウーマンだ。",
        example_cn: "她是在业界也很有名的能干的女强人。"
    },
    { 
        id: 349, 
        word: "たもと", 
        kanji: "袂", 
        kana: "たもと", 
        pos: "名词",
        meaning: "和服的袖兜；旁边，边缘",
        example_jp: "別れ際、涙を拭って橋の袂で立ち尽くした。",
        example_cn: "临别时，擦着眼泪在桥头呆呆地站了很久。"
    },
    { 
        id: 350, 
        word: "どかどか", 
        kanji: "どかどか", 
        kana: "どかどか", 
        pos: "副词",
        meaning: "（脚步沉重）咚咚地；许多人吵吵嚷嚷地拥入",
        example_jp: "男たちが土足のまま、部屋にどかどかと上がり込んできた。",
        example_cn: "男人们穿着鞋，吵吵嚷嚷地闯进了房间。"
    },
{ 
        id: 351, 
        word: "にぎわう", 
        kanji: "賑わう", 
        kana: "にぎわう", 
        pos: "自动词・五段",
        meaning: "热闹，拥挤，繁荣",
        example_jp: "週末の商店街は多くの買い物客で賑わっている。",
        example_cn: "周末的商业街因为众多购物客而显得十分热闹。"
    },
    { 
        id: 352, 
        word: "なおさら", 
        kanji: "尚更", 
        kana: "なおさら", 
        pos: "副词",
        meaning: "更加，越发",
        example_jp: "誰でも褒められれば嬉しいが、努力した後なら尚更だ。",
        example_cn: "不管是谁被夸奖都会高兴，努力之后被夸奖就更是如此了。"
    },
    { 
        id: 353, 
        word: "すくすく", 
        kanji: "すくすく", 
        kana: "すくすく", 
        pos: "副词",
        meaning: "茁壮成长貌",
        example_jp: "子供たちは自然に囲まれてすくすくと育っている。",
        example_cn: "孩子们在自然环境的环抱下茁壮成长。"
    },
    { 
        id: 354, 
        word: "たくましい", 
        kanji: "逞しい", 
        kana: "たくましい", 
        pos: "イ形容词",
        meaning: "健壮的，强壮的；意志坚强的，顽强的",
        example_jp: "逆境にも負けない、たくましい精神力を持っている。",
        example_cn: "拥有即使身处逆境也不服输的顽强精神力。"
    },
    { 
        id: 355, 
        word: "すさむ", 
        kanji: "荒む", 
        kana: "すさむ", 
        pos: "自动词・五段",
        meaning: "荒废；（心情、生活、风纪等）变得颓废、粗野",
        example_jp: "仕事のストレスで、最近少し生活が荒んでいる。",
        example_cn: "因为工作的压力，最近生活有些颓废。"
    },
    { 
        id: 356, 
        word: "すり合わせる", 
        kanji: "摺り合わせる", 
        kana: "すりあわせる", 
        pos: "他动词・一段",
        meaning: "相互磨合；核对、沟通并调整（分歧等）",
        example_jp: "両社の意見をすり合わせて、妥協点を見出す。",
        example_cn: "互相沟通调整两家公司的意见，找出妥协点。"
    },
    { 
        id: 357, 
        word: "ちなみに", 
        kanji: "因みに", 
        kana: "ちなみに", 
        pos: "接续词",
        meaning: "顺便提一下，附带说明",
        example_jp: "明日の集合時間は8時です。因みに、朝食は各自で済ませてください。",
        example_cn: "明天集合时间是8点。顺便提一下，请各自解决早餐。"
    },
    { 
        id: 358, 
        word: "きっぱり", 
        kanji: "きっぱり", 
        kana: "きっぱり", 
        pos: "副词 / 自动词・サ变",
        meaning: "断然，干脆，斩钉截铁地",
        example_jp: "彼はその理不尽な要求をきっぱりと断った。",
        example_cn: "他断然拒绝了那个无理的要求。"
    },
    { 
        id: 359, 
        word: "どもる", 
        kanji: "吃る", 
        kana: "どもる", 
        pos: "自动词・五段",
        meaning: "结巴，口吃",
        example_jp: "極度に緊張して、スピーチで少し吃ってしまった。",
        example_cn: "因为极度紧张，演讲时稍微有些结巴了。"
    },
    { 
        id: 360, 
        word: "はしゃぐ", 
        kanji: "燥ぐ", 
        kana: "はしゃぐ", 
        pos: "自动词・五段",
        meaning: "欢闹，喧闹，得意忘形",
        example_jp: "遠足の前日で、子供たちは嬉しくてはしゃいでいる。",
        example_cn: "郊游的前一天，孩子们高兴得欢闹不已。"
    },
    { 
        id: 361, 
        word: "どしどし", 
        kanji: "どしどし", 
        kana: "どしどし", 
        pos: "副词",
        meaning: "接连不断地；毫不客气地，毫无顾忌地",
        example_jp: "質問がある方は、どしどし発言してください。",
        example_cn: "有问题的各位，请毫不客气地发言。"
    },
    { 
        id: 362, 
        word: "かぶれる", 
        kanji: "気触れる", 
        kana: "かぶれる", 
        pos: "自动词・一段",
        meaning: "起斑疹，过敏；深受...影响，着迷（多含贬义）",
        example_jp: "海外の文化にすっかり気触れて帰ってきた。",
        example_cn: "深受海外文化影响（洋气十足地）回来了。"
    },
    { 
        id: 363, 
        word: "しとしと", 
        kanji: "しとしと", 
        kana: "しとしと", 
        pos: "副词",
        meaning: "（静静地）淅淅沥沥地",
        example_jp: "朝から春の雨がしとしとと降っている。",
        example_cn: "从早上开始，春雨就淅淅沥沥地下着。"
    },
    { 
        id: 364, 
        word: "おののく", 
        kanji: "戦く", 
        kana: "おののく", 
        pos: "自动词・五段",
        meaning: "战栗，发抖，打哆嗦",
        example_jp: "あまりの恐怖に体が戦いた。",
        example_cn: "因为过度恐惧，身体不由得发抖。"
    },
    { 
        id: 365, 
        word: "どうかすると", 
        kanji: "どうかすると", 
        kana: "どうかすると", 
        pos: "副词",
        meaning: "弄不好，有时候可能会...",
        example_jp: "どうかすると、今年の冬は例年より寒くなるかもしれない。",
        example_cn: "弄不好今年冬天可能会比往年更冷。"
    },
    { 
        id: 366, 
        word: "やりこなす", 
        kanji: "遣り熟す", 
        kana: "やりこなす", 
        pos: "他动词・五段",
        meaning: "顺利完成，轻松应对，妥善处理",
        example_jp: "これほど難しい業務を一人で遣り熟すとは立派だ。",
        example_cn: "能一个人顺利完成这么繁重的业务，真了不起。"
    },
    { 
        id: 367, 
        word: "へらへら", 
        kanji: "へらへら", 
        kana: "へらへら", 
        pos: "副词 / 自动词・サ变",
        meaning: "傻笑，干笑；轻浮，喋喋不休",
        example_jp: "怒られているのに、彼はへらへらと笑っている。",
        example_cn: "明明在挨骂，他却还在轻浮地傻笑。"
    },
    { 
        id: 368, 
        word: "かきまわす", 
        kanji: "掻き回す", 
        kana: "かきまわす", 
        pos: "他动词・五段",
        meaning: "搅拌；翻弄；扰乱，搅乱",
        example_jp: "勝手な行動でチームの輪を掻き回さないでほしい。",
        example_cn: "希望你不要用任性的行为扰乱团队的和谐。"
    },
    { 
        id: 369, 
        word: "おもんぱかる", 
        kanji: "慮る", 
        kana: "おもんぱかる", 
        pos: "他动词・五段",
        meaning: "仔细考虑，慎重思量，体谅",
        example_jp: "相手の立場を慮って、発言を控える。",
        example_cn: "体谅对方的立场，控制了自己的发言。"
    },
    { 
        id: 370, 
        word: "せかせか", 
        kanji: "せかせか", 
        kana: "せかせか", 
        pos: "副词 / 自动词・サ变",
        meaning: "慌慌张张，急急忙忙",
        example_jp: "彼はいつもせかせかしていて、落ち着きがない。",
        example_cn: "他总是慌慌张张的，静不下心来。"
    },
    { 
        id: 371, 
        word: "ゆとり", 
        kanji: "ゆとり", 
        kana: "ゆとり", 
        pos: "名词",
        meaning: "宽裕，余地，余裕",
        example_jp: "経済的なゆとりがないと、心にもゆとりがなくなる。",
        example_cn: "如果没有经济上的宽裕，心里也会失去从容。"
    },
    { 
        id: 372, 
        word: "ぞんざい", 
        kanji: "ぞんざい", 
        kana: "ぞんざい", 
        pos: "ナ形容词",
        meaning: "草率，马虎，粗鲁",
        example_jp: "客に対して、そんなぞんざいな言葉遣いをしてはいけない。",
        example_cn: "对客人不能用那种粗鲁的语言。"
    },
    { 
        id: 373, 
        word: "こんがり", 
        kanji: "こんがり", 
        kana: "こんがり", 
        pos: "副词",
        meaning: "烤得恰到好处，微焦",
        example_jp: "パンがこんがりと良い色に焼けた。",
        example_cn: "面包烤出了恰到好处的微焦色。"
    },
    { 
        id: 374, 
        word: "あでやか", 
        kanji: "艶やか", 
        kana: "あでやか", 
        pos: "ナ形容词",
        meaning: "艳丽，娇艳，美丽动人",
        example_jp: "彼女は艶やかな着物姿でパーティーに現れた。",
        example_cn: "她身着艳丽的和服出现在派对上。"
    },
    { 
        id: 375, 
        word: "すぱすぱ", 
        kanji: "すぱすぱ", 
        kana: "すぱすぱ", 
        pos: "副词",
        meaning: "（切东西）干净利落；大口吸烟貌",
        example_jp: "彼はヘビースモーカーで、タバコをすぱすぱ吸う。",
        example_cn: "他是个老烟枪，吧嗒吧嗒地大口抽烟。"
    },
    { 
        id: 376, 
        word: "むしる", 
        kanji: "毟る", 
        kana: "むしる", 
        pos: "他动词・五段",
        meaning: "拔，揪，撕去（毛发、草等）",
        example_jp: "庭の雑草を一本一本丁寧に毟る。",
        example_cn: "把院子里的杂草一根一根地仔细拔掉。"
    },
    { 
        id: 377, 
        word: "ゆさゆさ", 
        kanji: "ゆさゆさ", 
        kana: "ゆさゆさ", 
        pos: "副词",
        meaning: "大幅度摇晃貌",
        example_jp: "地震で大きな木がゆさゆさと揺れた。",
        example_cn: "因为地震，大树猛烈地摇晃着。"
    },
    { 
        id: 378, 
        word: "ねだる", 
        kanji: "強請る", 
        kana: "ねだる", 
        pos: "他动词・五段",
        meaning: "死乞白赖地求，央求",
        example_jp: "子供におもちゃを買ってほしいと強請られた。",
        example_cn: "被孩子央求着要买玩具。"
    },
    { 
        id: 379, 
        word: "さめ", 
        kanji: "鮫", 
        kana: "さめ", 
        pos: "名词",
        meaning: "鲨鱼",
        example_jp: "海で鮫に遭遇してパニックになった。",
        example_cn: "在海里遇到鲨鱼，陷入了恐慌。"
    },
    { 
        id: 380, 
        word: "たどりつく", 
        kanji: "辿り着く", 
        kana: "たどりつく", 
        pos: "自动词・五段",
        meaning: "好不容易走到，历尽艰辛到达",
        example_jp: "道に迷いながらも、何とか目的地に辿り着いた。",
        example_cn: "虽然迷了路，但总算好不容易到达了目的地。"
    },
    { 
        id: 381, 
        word: "しんどい", 
        kanji: "辛労い", 
        kana: "しんどい", 
        pos: "イ形容词",
        meaning: "吃力的，费力的，疲惫的（口语）",
        example_jp: "毎日の満員電車での通勤は、本当にしんどい。",
        example_cn: "每天挤满员电车通勤，真的非常辛苦。"
    },
    { 
        id: 382, 
        word: "とろける", 
        kanji: "蕩ける", 
        kana: "とろける", 
        pos: "自动词・一段",
        meaning: "融化，溶化；心神迷乱，被迷住",
        example_jp: "口の中でチーズがとろける。",
        example_cn: "奶酪在嘴里融化。"
    },
    { 
        id: 383, 
        word: "やんわり", 
        kanji: "やんわり", 
        kana: "やんわり", 
        pos: "副词",
        meaning: "委婉地，柔软地，温和地",
        example_jp: "相手を傷つけないように、やんわりと誘いを断った。",
        example_cn: "为了不伤害对方，委婉地拒绝了邀请。"
    },
    { 
        id: 384, 
        word: "おかえし", 
        kanji: "お返し", 
        kana: "おかえし", 
        pos: "名词",
        meaning: "回礼，报答；找头",
        example_jp: "お祝いをいただいたので、心ばかりのお返しを送った。",
        example_cn: "收到了贺礼，所以送了一点薄礼作为回礼。"
    },
    { 
        id: 385, 
        word: "いたわる", 
        kanji: "労る", 
        kana: "いたわる", 
        pos: "他动词・五段",
        meaning: "慰劳，体恤，怜惜",
        example_jp: "長年働き続けた父を労って、旅行に連れて行った。",
        example_cn: "为了慰劳常年辛苦工作的父亲，带他去旅行了。"
    },
    { 
        id: 386, 
        word: "あらかた", 
        kanji: "粗方", 
        kana: "あらかた", 
        pos: "副词",
        meaning: "大部分，基本上，大约",
        example_jp: "引っ越しの荷造りは、あらかた終わった。",
        example_cn: "搬家的打包工作基本上完成了。"
    },
    { 
        id: 387, 
        word: "つやつや", 
        kanji: "艶々", 
        kana: "つやつや", 
        pos: "副词 / 自动词・サ变",
        meaning: "光滑，油亮亮，有光泽",
        example_jp: "彼女の髪は、手入れが行き届いていてつやつやだ。",
        example_cn: "她的头发保养得很周到，非常油亮。"
    },
    { 
        id: 388, 
        word: "ゆらゆら", 
        kanji: "ゆらゆら", 
        kana: "ゆらゆら", 
        pos: "副词 / 自动词・サ变",
        meaning: "轻轻摇晃，摇摇晃晃",
        example_jp: "水面に映った月がゆらゆらと揺れている。",
        example_cn: "水面上倒映的月亮在轻轻地摇晃着。"
    },
    { 
        id: 389, 
        word: "ひとまず", 
        kanji: "一先ず", 
        kana: "ひとまず", 
        pos: "副词",
        meaning: "暂且，姑且，首先",
        example_jp: "雨も止んだし、ひとまず家に戻ろう。",
        example_cn: "雨也停了，姑且先回家吧。"
    },
    { 
        id: 390, 
        word: "いやいや", 
        kanji: "嫌々", 
        kana: "いやいや", 
        pos: "副词",
        meaning: "勉强地，不情愿地",
        example_jp: "彼は上司の命令で、嫌々ながら残業を引き受けた。",
        example_cn: "他在上司的命令下，极不情愿地接下了加班的活。"
    },
    { 
        id: 391, 
        word: "ぐらつく", 
        kanji: "ぐらつく", 
        kana: "ぐらつく", 
        pos: "自动词・五段",
        meaning: "摇晃，不稳定；动摇",
        example_jp: "虫歯になって、歯がぐらつく。",
        example_cn: "蛀牙了，牙齿摇晃。"
    },
    { 
        id: 392, 
        word: "ふやける", 
        kanji: "ふやける", 
        kana: "ふやける", 
        pos: "自动词・一段",
        meaning: "泡软，泡胀",
        example_jp: "お湯に長く浸かりすぎて、指先がふやけてしまった。",
        example_cn: "在热水里泡了太久，手指尖都泡胀了。"
    },
    { 
        id: 393, 
        word: "しんなり", 
        kanji: "しんなり", 
        kana: "しんなり", 
        pos: "副词 / 自动词・サ变",
        meaning: "柔软，软塌塌，蔫",
        example_jp: "玉ねぎがしんなりするまで炒める。",
        example_cn: "把洋葱炒到变软。"
    },
    { 
        id: 394, 
        word: "ばらす", 
        kanji: "ばらす", 
        kana: "ばらす", 
        pos: "他动词・五段",
        meaning: "拆散；泄露（秘密）；变卖",
        example_jp: "絶対に秘密にするから、本当のことをばらしてくれ。",
        example_cn: "我绝对保密，请把真相泄露（告诉）给我吧。"
    },
    { 
        id: 395, 
        word: "ちらっと / ちらりと", 
        kanji: "ちらり", 
        kana: "ちらっと", 
        pos: "副词",
        meaning: "一闪，瞥见；略微听到",
        example_jp: "その噂は、ちらっと聞いたことがある。",
        example_cn: "那个传闻，我略微听到过一点。"
    },
    { 
        id: 396, 
        word: "いとしい", 
        kanji: "愛しい", 
        kana: "いとしい", 
        pos: "イ形容词",
        meaning: "惹人怜爱的，可爱的，令人爱慕的",
        example_jp: "すやすや眠る子供の顔が何ともいとしい。",
        example_cn: "安睡中孩子的脸庞真是惹人怜爱。"
    },
    { 
        id: 397, 
        word: "しかしながら", 
        kanji: "しかしながら", 
        kana: "しかしながら", 
        pos: "接续词",
        meaning: "然而，可是，不过（比しかし更正式）",
        example_jp: "努力は認める。しかしながら、結果が全ての世界だ。",
        example_cn: "我认可你的努力。然而，这是一个结果决定一切的世界。"
    },
    { 
        id: 398, 
        word: "たじたじ", 
        kanji: "たじたじ", 
        kana: "たじたじ", 
        pos: "副词 / 自动词・サ变",
        meaning: "招架不住，退缩，畏缩",
        example_jp: "記者たちの鋭い質問に、政治家もたじたじだった。",
        example_cn: "面对记者们尖锐的提问，政治家也有些招架不住了。"
    },
    { 
        id: 399, 
        word: "おこし", 
        kanji: "お越し", 
        kana: "おこし", 
        pos: "名词",
        meaning: "（尊敬语）光临，到来",
        example_jp: "本日はお忙しい中、お越しいただきありがとうございます。",
        example_cn: "感谢您今天百忙之中光临。"
    },
    { 
        id: 400, 
        word: "おみや", 
        kanji: "お宮", 
        kana: "おみや", 
        pos: "名词",
        meaning: "神社（美化语）",
        example_jp: "お正月には、家族揃って近くのお宮に初詣に出かける。",
        example_cn: "新的一年，全家会一起去附近的神社进行初次参拜。"
    },
{ 
        id: 401, 
        word: "ねじ", 
        kanji: "螺子", 
        kana: "ねじ", 
        pos: "名词",
        meaning: "螺丝",
        example_jp: "ドライバーでねじをしっかり締める。",
        example_cn: "用螺丝刀把螺丝拧紧。"
    },
    { 
        id: 402, 
        word: "きっちり", 
        kanji: "きっちり", 
        kana: "きっちり", 
        pos: "副词 / 自动词・サ变",
        meaning: "严丝合缝地，整整齐齐地，准确地",
        example_jp: "スーツをきっちりと着こなして面接に向かった。",
        example_cn: "把西装穿得整整齐齐去参加面试。"
    },
    { 
        id: 403, 
        word: "おせっかい", 
        kanji: "お節介", 
        kana: "おせっかい", 
        pos: "名词 / ナ形容词",
        meaning: "多管闲事，瞎操心",
        example_jp: "ありがたいが、少しお節介なアドバイスだった。",
        example_cn: "虽然很感谢，但这建议多少有点多管闲事了。"
    },
    { 
        id: 404, 
        word: "よもや", 
        kanji: "よもや", 
        kana: "よもや", 
        pos: "副词",
        meaning: "（后接否定推测）难道，万万没想到",
        example_jp: "よもや彼が我々を裏切るとは思わなかった。",
        example_cn: "万万没想到他竟然会背叛我们。"
    },
    { 
        id: 405, 
        word: "ださい", 
        kanji: "ださい", 
        kana: "ださい", 
        pos: "イ形容词",
        meaning: "土气，俗气，不入流（口语）",
        example_jp: "そのネクタイのデザインは少しださいね。",
        example_cn: "那条领带的设计有点土气啊。"
    },
    { 
        id: 406, 
        word: "すっぱり", 
        kanji: "すっぱり", 
        kana: "すっぱり", 
        pos: "副词",
        meaning: "干脆地，彻底地（切断、戒除等）",
        example_jp: "健康のために、タバコをすっぱりとやめた。",
        example_cn: "为了健康，干脆地把烟戒了。"
    },
    { 
        id: 407, 
        word: "ばりばり", 
        kanji: "ばりばり", 
        kana: "ばりばり", 
        pos: "副词 / ナ形容词",
        meaning: "干劲十足地，拼命地；撕裂声",
        example_jp: "彼は新しいプロジェクトでばりばり働いている。",
        example_cn: "他在新项目中干劲十足地工作着。"
    },
    { 
        id: 408, 
        word: "しどろもどろ", 
        kanji: "しどろもどろ", 
        kana: "しどろもどろ", 
        pos: "名词 / ナ形容词",
        meaning: "语无伦次，结结巴巴",
        example_jp: "痛いところを突かれ、彼の弁解はしどろもどろになった。",
        example_cn: "被戳到痛处，他的辩解变得语无伦次起来。"
    },
    { 
        id: 409, 
        word: "ぎょっと", 
        kanji: "ぎょっと", 
        kana: "ぎょっと", 
        pos: "副词 / 自动词・サ变",
        meaning: "大吃一惊，吓一跳",
        example_jp: "暗闇から突然猫が飛び出してきて、ぎょっとした。",
        example_cn: "猫突然从黑暗中窜出来，把我吓了一跳。"
    },
    { 
        id: 410, 
        word: "しのぐ", 
        kanji: "凌ぐ", 
        kana: "しのぐ", 
        pos: "他动词・五段",
        meaning: "忍受，顶住，熬过；超过，超越",
        example_jp: "前作を凌ぐ素晴らしい映画だった。",
        example_cn: "这是一部超越了前作的精彩电影。"
    },
    { 
        id: 411, 
        word: "たしなむ", 
        kanji: "嗜む", 
        kana: "たしなむ", 
        pos: "他动词・五段",
        meaning: "爱好，喜好；谨慎，节制",
        example_jp: "休日はお茶や生け花を嗜む。",
        example_cn: "休息日喜爱品茶和插花。"
    },
    { 
        id: 412, 
        word: "ちょっこり", 
        kanji: "ちょっこり", 
        kana: "ちょっこり", 
        pos: "副词",
        meaning: "稍微，一小点儿",
        example_jp: "疲れたので、ちょっこり休ませてください。",
        example_cn: "我累了，请让我稍微休息一下。"
    },
    { 
        id: 413, 
        word: "いっそ", 
        kanji: "いっそ", 
        kana: "いっそ", 
        pos: "副词",
        meaning: "索性，干脆",
        example_jp: "修理代が高いなら、いっそ新しいものを買おう。",
        example_cn: "如果修理费很贵，干脆买个新的吧。"
    },
    { 
        id: 414, 
        word: "ぴんと", 
        kanji: "ぴんと", 
        kana: "ぴんと", 
        pos: "副词",
        meaning: "紧紧地（绷着）；猛然领悟（ぴんとくる）",
        example_jp: "彼の説明を聞いても、いまいちぴんとこなかった。",
        example_cn: "听了他的解释，也没有立刻恍然大悟。"
    },
    { 
        id: 415, 
        word: "おさん", 
        kanji: "お産", 
        kana: "おさん", 
        pos: "名词",
        meaning: "分娩，生育",
        example_jp: "彼女は初めてのお産を控えて不安そうだ。",
        example_cn: "她即将面临第一次分娩，显得有些不安。"
    },
    { 
        id: 416, 
        word: "かすか", 
        kanji: "微か", 
        kana: "かすか", 
        pos: "ナ形容词",
        meaning: "微弱，隐隐约约",
        example_jp: "遠くから微かな波の音が聞こえる。",
        example_cn: "从远处传来隐隐约约的海浪声。"
    },
    { 
        id: 417, 
        word: "がぶがぶ", 
        kanji: "がぶがぶ", 
        kana: "がぶがぶ", 
        pos: "副词",
        meaning: "咕咚咕咚地（大口喝水）",
        example_jp: "喉が渇いていたので、水をがぶがぶと飲んだ。",
        example_cn: "因为口渴，咕咚咕咚地喝了很多水。"
    },
    { 
        id: 418, 
        word: "かきたてる", 
        kanji: "掻き立てる", 
        kana: "かきたてる", 
        pos: "他动词・一段",
        meaning: "挑起，煽动，唤起（情感等）",
        example_jp: "そのニュースは人々の不安を掻き立てた。",
        example_cn: "那则新闻唤起了人们的不安。"
    },
    { 
        id: 419, 
        word: "おれい", 
        kanji: "お礼", 
        kana: "おれい", 
        pos: "名词",
        meaning: "感谢，谢礼，报酬",
        example_jp: "手伝ってくれたお礼に、食事をご馳走する。",
        example_cn: "为了感谢你的帮忙，我请你吃饭。"
    },
    { 
        id: 420, 
        word: "むっくり", 
        kanji: "むっくり", 
        kana: "むっくり", 
        pos: "副词 / 自动词・サ变",
        meaning: "猛然起身貌；胖乎乎貌",
        example_jp: "彼はベッドからむっくりと起き上がった。",
        example_cn: "他从床上猛地坐了起来。"
    },
    { 
        id: 421, 
        word: "ろくに", 
        kanji: "碌に", 
        kana: "ろくに", 
        pos: "副词",
        meaning: "（后接否定）没能好好地，未充分地",
        example_jp: "忙しくて、ろくに睡眠もとれていない。",
        example_cn: "忙得都没能好好睡一觉。"
    },
    { 
        id: 422, 
        word: "たるみ", 
        kanji: "弛み", 
        kana: "たるみ", 
        pos: "名词",
        meaning: "松弛，下垂，松懈",
        example_jp: "年齢とともに肌のたるみが気になり始めた。",
        example_cn: "随着年龄增长，开始在意皮肤的松弛了。"
    },
    { 
        id: 423, 
        word: "ものものしい", 
        kanji: "物々しい", 
        kana: "ものものしい", 
        pos: "イ形容词",
        meaning: "戒备森严的，夸张的，威严的",
        example_jp: "事件現場には警察官が集まり、物々しい雰囲気に包まれていた。",
        example_cn: "案发现场聚集了警察，被戒备森严的气氛笼罩着。"
    },
    { 
        id: 424, 
        word: "ちょろちょろ", 
        kanji: "ちょろちょろ", 
        kana: "ちょろちょろ", 
        pos: "副词 / 自动词・サ变",
        meaning: "（水）细流貌，涓涓；四处乱窜",
        example_jp: "岩の隙間から水がちょろちょろと流れ出ている。",
        example_cn: "水从岩石缝隙中涓涓流出。"
    },
    { 
        id: 425, 
        word: "もたもた", 
        kanji: "もたもた", 
        kana: "もたもた", 
        pos: "副词 / 自动词・サ变",
        meaning: "慢吞吞，磨蹭，不麻利",
        example_jp: "もたもたしていると、電車に乗り遅れるよ。",
        example_cn: "再磨磨蹭蹭的，就要赶不上电车了哦。"
    },
    { 
        id: 426, 
        word: "ぞくぞく", 
        kanji: "ぞくぞく", 
        kana: "ぞくぞく", 
        pos: "副词 / 自动词・サ变",
        meaning: "发冷，打寒战；激动，兴奋地发抖",
        example_jp: "風邪の引き始めなのか、寒気で体がぞくぞくする。",
        example_cn: "可能是刚感冒，身体一阵阵发冷打寒战。"
    },
    { 
        id: 427, 
        word: "ちゃんぽん", 
        kanji: "ちゃんぽん", 
        kana: "ちゃんぽん", 
        pos: "名词 / 他动词・サ变",
        meaning: "掺和，混合；长崎杂烩面",
        example_jp: "ビールと日本酒をちゃんぽんにして飲んで、悪酔いした。",
        example_cn: "把啤酒和日本酒掺着喝，结果酩酊大醉。"
    },
    { 
        id: 428, 
        word: "おせじ", 
        kanji: "お世辞", 
        kana: "おせじ", 
        pos: "名词",
        meaning: "奉承话，客套话，恭维",
        example_jp: "彼はお世辞抜きで、本当に優秀なプログラマーだ。",
        example_cn: "抛开客套话不谈，他真的是个非常优秀的程序员。"
    },
    { 
        id: 429, 
        word: "ゆえに", 
        kanji: "故に", 
        kana: "ゆえに", 
        pos: "连词",
        meaning: "因此，所以（多用于书面语或逻辑推导）",
        example_jp: "我思う、故に我在り。",
        example_cn: "我思故我在。"
    },
    { 
        id: 430, 
        word: "たんぱくしつ", 
        kanji: "蛋白質", 
        kana: "たんぱくしつ", 
        pos: "名词",
        meaning: "蛋白质",
        example_jp: "筋肉を作るためには、蛋白質の摂取が欠かせない。",
        example_cn: "为了增加肌肉，摄取蛋白质是必不可少的。"
    },
    { 
        id: 431, 
        word: "しょっちゅう", 
        kanji: "しょっちゅう", 
        kana: "しょっちゅう", 
        pos: "副词",
        meaning: "经常，总是，屡次（口语）",
        example_jp: "あの二人はしょっちゅう喧嘩をしている。",
        example_cn: "那两个人总是吵架。"
    },
    { 
        id: 432, 
        word: "くしゃくしゃ", 
        kanji: "くしゃくしゃ", 
        kana: "くしゃくしゃ", 
        pos: "副词 / ナ形容词",
        meaning: "皱巴巴，起皱",
        example_jp: "ポケットからくしゃくしゃになったレシートが出てきた。",
        example_cn: "从口袋里掏出了皱巴巴的收据。"
    },
    { 
        id: 433, 
        word: "つんのめる", 
        kanji: "つんのめる", 
        kana: "つんのめる", 
        pos: "自动词・一段",
        meaning: "猛烈往前倾倒，栽倒",
        example_jp: "石につまずいて、前に大きくつんのめった。",
        example_cn: "被石头绊了一下，狠狠地朝前栽了过去。"
    },
    { 
        id: 434, 
        word: "そよそよ", 
        kanji: "そよそよ", 
        kana: "そよそよ", 
        pos: "副词",
        meaning: "微风轻轻吹拂貌",
        example_jp: "春の風がそよそよと吹いていて心地よい。",
        example_cn: "春风轻轻吹拂，感觉很舒服。"
    },
    { 
        id: 435, 
        word: "まばゆい", 
        kanji: "目映い / 眩い", 
        kana: "まばゆい", 
        pos: "イ形容词",
        meaning: "耀眼，光彩夺目",
        example_jp: "ステージ上の彼女は、まばゆいばかりの美しさだった。",
        example_cn: "舞台上的她，美丽得光彩夺目。"
    },
    { 
        id: 436, 
        word: "めきめき", 
        kanji: "めきめき", 
        kana: "めきめき", 
        pos: "副词",
        meaning: "显著地，迅速地（进步、成长）",
        example_jp: "毎日練習したおかげで、日本語がめきめきと上達した。",
        example_cn: "多亏了每天练习，日语水平有了显著的提高。"
    },
    { 
        id: 437, 
        word: "それはさておき", 
        kanji: "それはさておき", 
        kana: "それはさておき", 
        pos: "连语 / 连词",
        meaning: "闲话休题，言归正传，暂且不提",
        example_jp: "雑談はさておき、本題に入りましょう。",
        example_cn: "闲聊暂且不提，我们进入正题吧。"
    },
    { 
        id: 438, 
        word: "こねる", 
        kanji: "捏ねる", 
        kana: "こねる", 
        pos: "他动词・一段",
        meaning: "揉合，捏合；强词夺理（理屈をこねる）",
        example_jp: "小麦粉に水を加えてよくこねる。",
        example_cn: "在面粉中加水并充分揉合。"
    },
    { 
        id: 439, 
        word: "しめた", 
        kanji: "しめた", 
        kana: "しめた", 
        pos: "感叹词",
        meaning: "太好了！正中下怀！",
        example_jp: "ライバルがミスをした。しめた、これで勝てる！",
        example_cn: "对手失误了。太好了，这样就能赢了！"
    },
    { 
        id: 440, 
        word: "そぎおとす", 
        kanji: "削ぎ落とす", 
        kana: "そぎおとす", 
        pos: "他动词・五段",
        meaning: "削去，剔除，精简（多余的部分）",
        example_jp: "無駄な装飾を削ぎ落とした、シンプルなデザインが良い。",
        example_cn: "我喜欢那种剔除了多余装饰、简约的设计。"
    },
    { 
        id: 441, 
        word: "ちまちま", 
        kanji: "ちまちま", 
        kana: "ちまちま", 
        pos: "副词 / 自动词・サ变",
        meaning: "小气，格局小；小巧，零碎",
        example_jp: "そんなちまちましたことにこだわっていないで、もっと大局を見ろ。",
        example_cn: "别在那种小肚鸡肠的琐事上纠结，要看大局。"
    },
    { 
        id: 442, 
        word: "しっくり", 
        kanji: "しっくり", 
        kana: "しっくり", 
        pos: "副词 / 自动词・サ变",
        meaning: "合适，融洽，对路（しっくりくる）",
        example_jp: "この靴は自分の足にしっくりこない。",
        example_cn: "这双鞋穿在我的脚上感觉不太合适。"
    },
    { 
        id: 443, 
        word: "きっかり", 
        kanji: "きっかり", 
        kana: "きっかり", 
        pos: "副词",
        meaning: "恰好，正好（指时间、数量的精确）",
        example_jp: "約束のきっかり5分前に到着した。",
        example_cn: "在约定的时间恰好提前5分钟到达了。"
    },
    { 
        id: 444, 
        word: "てっきり", 
        kanji: "てっきり", 
        kana: "てっきり", 
        pos: "副词",
        meaning: "（自以为）一定，无疑是（后多接发现自己弄错的状况）",
        example_jp: "てっきり今日は休みだと思っていたのに、出勤日だった。",
        example_cn: "我本以为今天一定放假，没想到却是工作日。"
    },
    { 
        id: 445, 
        word: "くつろぐ", 
        kanji: "寛ぐ", 
        kana: "くつろぐ", 
        pos: "自动词・五段",
        meaning: "放松，休息，随便（不拘束）",
        example_jp: "休日は家でゆっくりくつろぐのが好きだ。",
        example_cn: "我喜欢休息日在家里悠闲地放松。"
    },
    { 
        id: 446, 
        word: "うつむく", 
        kanji: "俯く", 
        kana: "うつむく", 
        pos: "自动词・五段",
        meaning: "低下头，垂下目光",
        example_jp: "叱られた子供は、黙って下をうつむいた。",
        example_cn: "被训斥的孩子默默地低下了头。"
    },
    { 
        id: 447, 
        word: "かすかす", 
        kanji: "かすかす", 
        kana: "かすかす", 
        pos: "副词 / ナ形容词",
        meaning: "勉勉强强，刚刚够；干巴巴的",
        example_jp: "合格点にはかすかす届いた。",
        example_cn: "勉勉强强达到了及格线。"
    },
    { 
        id: 448, 
        word: "げんなり", 
        kanji: "げんなり", 
        kana: "げんなり", 
        pos: "副词 / 自动词・サ变",
        meaning: "厌烦，腻烦，失望泄气",
        example_jp: "上司の長い自慢話には、すっかりげんなりした。",
        example_cn: "对上司冗长的自吹自擂彻底感到厌烦了。"
    },
    { 
        id: 449, 
        word: "くじびき", 
        kanji: "籤引き", 
        kana: "くじびき", 
        pos: "名词",
        meaning: "抽签，抓阄",
        example_jp: "順番はくじ引きで公平に決めましょう。",
        example_cn: "顺序就用抽签来公平决定吧。"
    },
    { 
        id: 450, 
        word: "ありがち", 
        kanji: "有り勝ち", 
        kana: "ありがち", 
        pos: "ナ形容词",
        meaning: "常有的，常见的（多指消极情况）",
        example_jp: "それは初心者にありがちなミスだ。",
        example_cn: "那是初学者常犯的错误。"
    },
{ 
        id: 451, 
        word: "おふくろ", 
        kanji: "お袋", 
        kana: "おふくろ", 
        pos: "名词",
        meaning: "老妈，母亲（多为男性对别人称呼自己的母亲）",
        example_jp: "久しぶりに実家に帰り、お袋の味を楽しんだ。",
        example_cn: "久违地回了趟老家，品尝了老妈做的饭菜。"
    },
    { 
        id: 452, 
        word: "ずぶずぶ", 
        kanji: "ずぶずぶ", 
        kana: "ずぶずぶ", 
        pos: "副词",
        meaning: "深深陷入（泥沼等）貌；（关系）深陷其中无法自拔",
        example_jp: "雨上がりのぬかるみに足がずぶずぶと沈んだ。",
        example_cn: "脚深深地陷进了雨后的烂泥里。"
    },
    { 
        id: 453, 
        word: "ばてる", 
        kanji: "ばてる", 
        kana: "ばてる", 
        pos: "自动词・一段",
        meaning: "精疲力尽，累得半死",
        example_jp: "連日の猛暑で、すっかりばててしまった。",
        example_cn: "连日的酷暑，让人彻底精疲力尽了。"
    },
    { 
        id: 454, 
        word: "やりなおす", 
        kanji: "遣り直す", 
        kana: "やりなおす", 
        pos: "他动词・五段",
        meaning: "重做，重新来过",
        example_jp: "データが消えてしまったので、最初から遣り直すしかない。",
        example_cn: "数据都丢了，只能从头重做。"
    },
    { 
        id: 455, 
        word: "ごしごし", 
        kanji: "ごしごし", 
        kana: "ごしごし", 
        pos: "副词",
        meaning: "使劲擦洗貌",
        example_jp: "床の汚れをブラシでごしごしとこすり落とす。",
        example_cn: "用刷子使劲把地板上的污垢擦掉。"
    },
    { 
        id: 456, 
        word: "すやすや", 
        kanji: "すやすや", 
        kana: "すやすや", 
        pos: "副词",
        meaning: "安详地熟睡貌",
        example_jp: "赤ちゃんがベビーベッドですしやすやと眠っている。",
        example_cn: "婴儿在婴儿床上安详地睡着。"
    },
    { 
        id: 457, 
        word: "でっちあげる", 
        kanji: "捏ち上げる", 
        kana: "でっちあげる", 
        pos: "他动词・一段",
        meaning: "捏造，伪造，无中生有",
        example_jp: "彼は自分のミスを隠すために、嘘の理由を捏ち上げた。",
        example_cn: "为了掩盖自己的失误，他捏造了虚假的理由。"
    },
    { 
        id: 458, 
        word: "ぶちこわす", 
        kanji: "打ち壊す / ぶち壊す", 
        kana: "ぶちこわす", 
        pos: "他动词・五段",
        meaning: "打坏，砸碎；搞糟，糟蹋（气氛、计划等）",
        example_jp: "彼の無神経な一言が、せっかくの雰囲気をぶち壊した。",
        example_cn: "他那毫不在意的一句话，把好不容易营造的气氛给破坏了。"
    },
    { 
        id: 459, 
        word: "どたばた", 
        kanji: "どたばた", 
        kana: "どたばた", 
        pos: "副词 / 自动词・サ变",
        meaning: "脚步重重地乱跑；慌乱，手忙脚乱",
        example_jp: "引っ越しの準備で、一日中どたばたしていた。",
        example_cn: "因为准备搬家，一整天都在手忙脚乱。"
    },
    { 
        id: 460, 
        word: "ぼこぼこ", 
        kanji: "ぼこぼこ", 
        kana: "ぼこぼこ", 
        pos: "副词 / ナ形容词",
        meaning: "坑坑洼洼；水冒泡声；被揍得很惨",
        example_jp: "台風の後で、道路がぼこぼこになっている。",
        example_cn: "台风过后，道路变得坑坑洼洼的。"
    },
    { 
        id: 461, 
        word: "ちょっきり", 
        kanji: "ちょっきり", 
        kana: "ちょっきり", 
        pos: "副词",
        meaning: "恰好，正合适（时间、金钱等，口语）",
        example_jp: "レジで千円ちょっきり支払った。",
        example_cn: "在收银台付了刚好一千日元。"
    },
    { 
        id: 462, 
        word: "がちがち", 
        kanji: "がちがち", 
        kana: "がちがち", 
        pos: "副词 / ナ形容词",
        meaning: "（冻得）打寒战，牙齿打架；硬邦邦；极度紧张",
        example_jp: "初めてのプレゼンで、がちがちに緊張してしまった。",
        example_cn: "第一次做发表，紧张得浑身僵硬。"
    },
    { 
        id: 463, 
        word: "ぼってり", 
        kanji: "ぼってり", 
        kana: "ぼってり", 
        pos: "副词 / 自动词・サ变",
        meaning: "厚重；胖乎乎",
        example_jp: "絵の具をぼってりと厚く塗る。",
        example_cn: "把颜料厚厚地涂抹上去。"
    },
    { 
        id: 464, 
        word: "やりがい", 
        kanji: "遣り甲斐", 
        kana: "やりがい", 
        pos: "名词",
        meaning: "做的价值，干劲",
        example_jp: "大変な仕事だが、それだけに遣り甲斐がある。",
        example_cn: "虽然是项辛苦的工作，但正因如此才有干的价值。"
    },
    { 
        id: 465, 
        word: "いじる", 
        kanji: "弄る", 
        kana: "いじる", 
        pos: "他动词・五段",
        meaning: "摆弄，拨弄；随意改动；捉弄",
        example_jp: "会議中もスマホばかり弄っているのは失礼だ。",
        example_cn: "开会时还一直摆弄智能手机是很失礼的。"
    },
    { 
        id: 466, 
        word: "まとも", 
        kanji: "正面 / 真面", 
        kana: "まとも", 
        pos: "名词 / ナ形容词",
        meaning: "正经的，像样的，认真的；正面",
        example_jp: "彼が怒るのは当然だ。まともな人間なら誰でも怒る。",
        example_cn: "他生气是理所当然的。只要是个正经人都会生气。"
    },
    { 
        id: 467, 
        word: "くすぐる", 
        kanji: "擽る", 
        kana: "くすぐる", 
        pos: "他动词・五段",
        meaning: "挠痒痒；逗乐；撩拨，引起",
        example_jp: "子供の脇腹をくすぐって笑わせる。",
        example_cn: "挠孩子的咯吱窝逗他笑。"
    },
    { 
        id: 468, 
        word: "ぷりぷり", 
        kanji: "ぷりぷり", 
        kana: "ぷりぷり", 
        pos: "副词 / 自动词・サ变",
        meaning: "气鼓鼓地发怒；（食物等）富有弹性貌",
        example_jp: "新鮮なエビは食感がぷりぷりしていて美味しい。",
        example_cn: "新鲜的虾口感很有弹性，非常好吃。"
    },
    { 
        id: 469, 
        word: "ちびちび", 
        kanji: "ちびちび", 
        kana: "ちびちび", 
        pos: "副词",
        meaning: "一点一点地（喝、吃、花钱）",
        example_jp: "高いお酒なので、毎日ちびちびと飲んでいる。",
        example_cn: "因为是很贵的酒，所以每天只一点一点地喝。"
    },
    { 
        id: 470, 
        word: "こなれる", 
        kanji: "熟れる", 
        kana: "こなれる", 
        pos: "自动词・一段",
        meaning: "（食物）消化；变得熟练，运用自如；（文章等）自然圆滑",
        example_jp: "彼の翻訳は、日本語がよく熟れていて読みやすい。",
        example_cn: "他的翻译，日语表达得非常自然圆润，很容易读。"
    },
    { 
        id: 471, 
        word: "あしからず", 
        kanji: "悪しからず", 
        kana: "あしからず", 
        pos: "副词",
        meaning: "请不要见怪，请多包涵",
        example_jp: "ご希望には添えませんので、悪しからずご了承ください。",
        example_cn: "无法满足您的要求，请多包涵并予以谅解。"
    },
    { 
        id: 472, 
        word: "けたけた", 
        kanji: "けたけた", 
        kana: "けたけた", 
        pos: "副词",
        meaning: "咯咯地傻笑，轻浮地笑",
        example_jp: "あの二人は授業中ずっとけたけた笑っていてうるさい。",
        example_cn: "那两个人上课时一直咯咯地笑，真吵。"
    },
    { 
        id: 473, 
        word: "やりとおす", 
        kanji: "遣り通す", 
        kana: "やりとおす", 
        pos: "他动词・五段",
        meaning: "贯彻到底，坚持做完",
        example_jp: "一度決めた目標は、最後まで遣り通すつもりだ。",
        example_cn: "一旦定下的目标，我打算贯彻到底。"
    },
    { 
        id: 474, 
        word: "かすみ", 
        kanji: "霞 / 翳み", 
        kana: "かすみ", 
        pos: "名词",
        meaning: "云霞，雾气；视力模糊",
        example_jp: "疲労のせいで、目のかすみがひどい。",
        example_cn: "由于疲劳，视力模糊得很严重。"
    },
    { 
        id: 475, 
        word: "むちむち", 
        kanji: "むちむち", 
        kana: "むちむち", 
        pos: "副词 / 自动词・サ变",
        meaning: "丰满，胖乎乎",
        example_jp: "赤ちゃんの腕はむちむちしていて可愛い。",
        example_cn: "婴儿的手臂胖乎乎的很可爱。"
    },
    { 
        id: 476, 
        word: "ひょうたん", 
        kanji: "瓢箪", 
        kana: "ひょうたん", 
        pos: "名词",
        meaning: "葫芦",
        example_jp: "瓢箪から駒が出る（思いがけないことが起こるたとえ）。",
        example_cn: "葫芦里跑出马（比喻发生意想不到的事，弄假成真）。"
    },
    { 
        id: 477, 
        word: "まだしも", 
        kanji: "未だしも", 
        kana: "まだしも", 
        pos: "副词",
        meaning: "（接在“〜なら”后）...的话还可以，...的话倒还算...",
        example_jp: "一回の遅刻ならまだしも、無断欠勤は許されない。",
        example_cn: "迟到一次倒还勉强可以接受，但无故旷工是绝对不被允许的。"
    },
    { 
        id: 478, 
        word: "ごそごそ", 
        kanji: "ごそごそ", 
        kana: "ごそごそ", 
        pos: "副词 / 自动词・サ变",
        meaning: "窸窸窣窣的声音",
        example_jp: "暗闇の中で何かがごそごそと動く音がした。",
        example_cn: "黑暗中传来什么东西窸窸窣窣挪动的声音。"
    },
    { 
        id: 479, 
        word: "はらはら", 
        kanji: "はらはら", 
        kana: "はらはら", 
        pos: "副词 / 自动词・サ变",
        meaning: "担心，捏一把汗；（树叶、眼泪）簌簌地落下",
        example_jp: "綱渡りのパフォーマンスを見て、はらはらした。",
        example_cn: "看着走钢丝的表演，真让人捏一把汗。"
    },
    { 
        id: 480, 
        word: "しゃぶる", 
        kanji: "しゃぶる", 
        kana: "しゃぶる", 
        pos: "他动词・五段",
        meaning: "放进嘴里舔，吮吸",
        example_jp: "赤ちゃんが指をしゃぶっている。",
        example_cn: "婴儿正在吮吸手指。"
    },
    { 
        id: 481, 
        word: "へりくだる", 
        kanji: "謙る", 
        kana: "へりくだる", 
        pos: "自动词・五段",
        meaning: "谦逊，谦卑",
        example_jp: "彼は有能だが、常に謙った態度を崩さない。",
        example_cn: "他虽然很有能力，但始终保持着谦卑的态度。"
    },
    { 
        id: 482, 
        word: "かたくな", 
        kanji: "頑な", 
        kana: "かたくな", 
        pos: "ナ形容词",
        meaning: "顽固，固执",
        example_jp: "何度説得しても、彼は頑なに意見を変えなかった。",
        example_cn: "无论劝说多少次，他都顽固地不肯改变意见。"
    },
    { 
        id: 483, 
        word: "ずるずる", 
        kanji: "ずるずる", 
        kana: "ずるずる", 
        pos: "副词",
        meaning: "拖延，拖拖拉拉；滑动；吸溜声",
        example_jp: "結論が出ないまま、会議がずるずると長引いている。",
        example_cn: "迟迟得不出结论，会议拖拖拉拉地延长着。"
    },
    { 
        id: 484, 
        word: "ダブる", 
        kanji: "ダブる", 
        kana: "だぶる", 
        pos: "自动词・五段",
        meaning: "重复，重叠（源自double）",
        example_jp: "予定がダブってしまい、どちらかを断らなければならない。",
        example_cn: "日程安排重复了，必须推掉其中一个。"
    },
    { 
        id: 485, 
        word: "とぼける", 
        kanji: "惚ける / 恍ける", 
        kana: "とぼける", 
        pos: "自动词・一段",
        meaning: "装傻，佯装不知；滑稽可笑",
        example_jp: "証拠があるのに、彼は「知らない」ととぼけた。",
        example_cn: "明明有证据，他却装傻说“不知道”。"
    },
    { 
        id: 486, 
        word: "まぶた", 
        kanji: "瞼 / 目蓋", 
        kana: "まぶた", 
        pos: "名词",
        meaning: "眼睑，眼皮",
        example_jp: "徹夜明けで、眠くて重い瞼をこすった。",
        example_cn: "熬了通宵，揉了揉困倦沉重的眼皮。"
    },
    { 
        id: 487, 
        word: "そそる", 
        kanji: "そそる", 
        kana: "そそる", 
        pos: "他动词・五段",
        meaning: "引起，勾起，激发（感情、欲望等）",
        example_jp: "カレーのスパイシーな香りが食欲をそそる。",
        example_cn: "咖喱的辛香勾起了食欲。"
    },
    { 
        id: 488, 
        word: "ねぎらう", 
        kanji: "労う / 犒う", 
        kana: "ねぎらう", 
        pos: "他动词・五段",
        meaning: "慰劳，犒劳",
        example_jp: "プロジェクトの終了後、社長が社員の労をねぎらった。",
        example_cn: "项目结束后，社长慰劳了员工们的辛勤付出。"
    },
    { 
        id: 489, 
        word: "ぞろぞろ", 
        kanji: "ぞろぞろ", 
        kana: "ぞろぞろ", 
        pos: "副词",
        meaning: "络绎不绝，一个接一个地",
        example_jp: "映画館から観客がぞろぞろと出てきた。",
        example_cn: "观众从电影院里络绎不绝地走了出来。"
    },
    { 
        id: 490, 
        word: "かばう", 
        kanji: "庇う", 
        kana: "かばう", 
        pos: "他动词・五段",
        meaning: "庇护，袒护，保护",
        example_jp: "彼は自分の責任を認めず、部下をかばいもしなかった。",
        example_cn: "他既不承认自己的责任，也没有袒护部下。"
    },
    { 
        id: 491, 
        word: "まぐれあたり", 
        kanji: "紛れ当たり", 
        kana: "まぐれあたり", 
        pos: "名词",
        meaning: "瞎猫碰上死耗子，侥幸猜中/命中",
        example_jp: "試験で難しい問題が解けたのは、ただの紛れ当たりだ。",
        example_cn: "考试时做出了难题，纯粹只是瞎猫碰上死耗子侥幸猜中的。"
    },
    { 
        id: 492, 
        word: "へま", 
        kanji: "へま", 
        kana: "へま", 
        pos: "名词 / ナ形容词",
        meaning: "失误，搞砸，蠢事",
        example_jp: "大切な取引先の前で、とんだへまをやらかしてしまった。",
        example_cn: "在重要的客户面前，犯下了一个大失误。"
    },
    { 
        id: 493, 
        word: "こなす", 
        kanji: "熟す", 
        kana: "こなす", 
        pos: "他动词・五段",
        meaning: "熟练运用；妥善处理，完成；消化",
        example_jp: "彼は日々大量の業務を効率よくこなしている。",
        example_cn: "他每天都在高效地处理着大量的业务。"
    },
    { 
        id: 494, 
        word: "ぐんなり", 
        kanji: "ぐんなり", 
        kana: "ぐんなり", 
        pos: "副词 / 自动词・サ变",
        meaning: "筋疲力尽；软塌塌",
        example_jp: "あまりの暑さに、植物もぐんなりしている。",
        example_cn: "由于太热了，植物也都软塌塌地蔫了。"
    },
    { 
        id: 495, 
        word: "だくだく", 
        kanji: "だくだく", 
        kana: "だくだく", 
        pos: "副词",
        meaning: "（汗水等）大量涌出貌",
        example_jp: "全力で走ったので、汗がだくだくと流れている。",
        example_cn: "因为拼尽全力奔跑，汗水像流水一样往下淌。"
    },
    { 
        id: 496, 
        word: "まとまり", 
        kanji: "纏まり", 
        kana: "まとまり", 
        pos: "名词",
        meaning: "连贯性，头绪，统一，结论",
        example_jp: "彼のスピーチはまとまりがなく、何を言いたいのか分からなかった。",
        example_cn: "他的演讲毫无逻辑和连贯性，不知道想说什么。"
    },
    { 
        id: 497, 
        word: "うじうじ", 
        kanji: "うじうじ", 
        kana: "うじうじ", 
        pos: "副词 / 自动词・サ变",
        meaning: "迟疑不决，扭扭捏捏",
        example_jp: "いつまでも過去の失敗をうじうじと悩んでも仕方がない。",
        example_cn: "一直对过去的失败扭扭捏捏地懊恼下去也没用。"
    },
    { 
        id: 498, 
        word: "ダフや", 
        kanji: "ダフ屋", 
        kana: "ダフや", 
        pos: "名词",
        meaning: "黄牛党（倒卖入场券的人）",
        example_jp: "コンサート会場の前でダフ屋がチケットを売っていた。",
        example_cn: "在演唱会会场前，黄牛党正在倒卖门票。"
    },
    { 
        id: 499, 
        word: "とっさ", 
        kanji: "咄嗟", 
        kana: "とっさ", 
        pos: "名词",
        meaning: "瞬间，刹那（多接「に/の」）",
        example_jp: "飛んできたボールを咄嗟に避けた。",
        example_cn: "瞬间躲开了飞来的球。"
    },
    { 
        id: 500, 
        word: "はかりごと", 
        kanji: "謀", 
        kana: "はかりごと", 
        pos: "名词",
        meaning: "计谋，阴谋",
        example_jp: "敵を欺くための謀を巡らす。",
        example_cn: "策划欺骗敌人的计谋。"
    },
{ 
        id: 501, 
        word: "おめおめ", 
        kanji: "おめおめ", 
        kana: "おめおめ", 
        pos: "副词",
        meaning: "恬不知耻地，厚颜无耻地",
        example_jp: "よくもおめおめと私の前に顔を出せたものだ。",
        example_cn: "亏你还能恬不知耻地出现在我面前。"
    },
    { 
        id: 502, 
        word: "じきに", 
        kanji: "直に", 
        kana: "じきに", 
        pos: "副词",
        meaning: "马上，不久，立刻",
        example_jp: "にわか雨だから、じきに止むだろう。",
        example_cn: "因为是阵雨，应该不久就会停吧。"
    },
    { 
        id: 503, 
        word: "ほどく", 
        kanji: "解く", 
        kana: "ほどく", 
        pos: "他动词・五段",
        meaning: "解开，拆开（绳子、缝线等）",
        example_jp: "プレゼントの包みのリボンをほどく。",
        example_cn: "解开礼物包装上的丝带。"
    },
    { 
        id: 504, 
        word: "さえずり", 
        kanji: "囀り", 
        kana: "さえずり", 
        pos: "名词",
        meaning: "鸟鸣，叽叽喳喳的叫声；喋喋不休",
        example_jp: "早朝、小鳥のさえずりで目が覚めた。",
        example_cn: "清晨，被小鸟的鸣叫声唤醒。"
    },
    { 
        id: 505, 
        word: "しょげる", 
        kanji: "悄気る", 
        kana: "しょげる", 
        pos: "自动词・一段",
        meaning: "沮丧，颓丧，气馁",
        example_jp: "試合に負けて、すっかりしょげている。",
        example_cn: "比赛输了，变得十分沮丧。"
    },
    { 
        id: 506, 
        word: "けらけら", 
        kanji: "けらけら", 
        kana: "けらけら", 
        pos: "副词",
        meaning: "咯咯地笑（多指轻浮或毫无顾忌地笑）",
        example_jp: "彼女はテレビを見てけらけら笑っている。",
        example_cn: "她看着电视，咯咯地笑个不停。"
    },
    { 
        id: 507, 
        word: "まごつく", 
        kanji: "まごつく", 
        kana: "まごつく", 
        pos: "自动词・五段",
        meaning: "张皇失措，不知所措，徘徊",
        example_jp: "初めての場所で道に迷い、まごついてしまった。",
        example_cn: "在第一次去的地方迷了路，张皇失措。"
    },
    { 
        id: 508, 
        word: "やっつける", 
        kanji: "遣っ付ける", 
        kana: "やっつける", 
        pos: "他动词・一段",
        meaning: "打败，干掉；赶完（工作），收拾",
        example_jp: "今日中にこの書類の山をやっつけてしまおう。",
        example_cn: "今天之内要把这堆文件赶完（收拾掉）。"
    },
    { 
        id: 509, 
        word: "はんなり", 
        kanji: "はんなり", 
        kana: "はんなり", 
        pos: "副词 / 自动词・サ变",
        meaning: "（京都方言）华丽而有品位，明亮而高雅",
        example_jp: "彼女は着物をはんなりと着こなしている。",
        example_cn: "她把和服穿得高雅而极具韵味。"
    },
    { 
        id: 510, 
        word: "かしこまる", 
        kanji: "畏まる", 
        kana: "かしこまる", 
        pos: "自动词・五段",
        meaning: "恭敬，拘谨；谨遵吩咐",
        example_jp: "「かしこまりました」とウェイターは深く一礼した。",
        example_cn: "服务员深深地鞠了一躬说道：“遵命（我知道了）”。"
    },
    { 
        id: 511, 
        word: "きっしり", 
        kanji: "きっしり", 
        kana: "きっしり", 
        pos: "副词",
        meaning: "紧紧地，满满当当（同ぎっしり）",
        example_jp: "箱の中に本がきっしりと詰まっている。",
        example_cn: "箱子里满满当当地塞满了书。"
    },
    { 
        id: 512, 
        word: "ぱくぱく", 
        kanji: "ぱくぱく", 
        kana: "ぱくぱく", 
        pos: "副词 / 自动词・サ变",
        meaning: "大口大口吃；（嘴巴）一张一合",
        example_jp: "金魚が水面で口をぱくぱくさせている。",
        example_cn: "金鱼在水面上一张一合地吧嗒着嘴。"
    },
    { 
        id: 513, 
        word: "びら", 
        kanji: "片 / ビラ", 
        kana: "びら", 
        pos: "名词",
        meaning: "传单，海报；（花等）瓣，片",
        example_jp: "駅前でアルバイト募集のビラ（片）を配っている。",
        example_cn: "在车站前发招募兼职的传单。"
    },
    { 
        id: 514, 
        word: "すかすか", 
        kanji: "すかすか", 
        kana: "すかすか", 
        pos: "副词 / ナ形容词",
        meaning: "空隙多，稀稀拉拉；空洞，干瘪",
        example_jp: "この大根は水分が抜けて、中がすかすかだ。",
        example_cn: "这根萝卜水分流失，里面空心干瘪了。"
    },
    { 
        id: 515, 
        word: "わなわな", 
        kanji: "わなわな", 
        kana: "わなわな", 
        pos: "副词",
        meaning: "（因恐惧、愤怒或寒冷而）哆嗦，颤抖",
        example_jp: "激しい怒りで、唇がわなわなと震えた。",
        example_cn: "因为极度的愤怒，嘴唇不停地颤抖。"
    },
    { 
        id: 516, 
        word: "うざい", 
        kanji: "うざい", 
        kana: "うざい", 
        pos: "イ形容词",
        meaning: "烦人，碍眼（うざったい的略语，年轻人用语）",
        example_jp: "あの先生は説教が多くて少しうざい。",
        example_cn: "那个老师总是说教，有点烦人。"
    },
    { 
        id: 517, 
        word: "でかでか", 
        kanji: "でかでか", 
        kana: "でかでか", 
        pos: "副词",
        meaning: "极大，硕大无比，格外显眼",
        example_jp: "新聞の１面にでかでかと彼の写真が載った。",
        example_cn: "报纸的头版头条硕大无比地刊登了他的照片。"
    },
    { 
        id: 518, 
        word: "よぎる", 
        kanji: "過る", 
        kana: "よぎる", 
        pos: "自动词・五段",
        meaning: "（在脑海、眼前）闪过，掠过",
        example_jp: "一瞬、最悪の事態が頭を過った。",
        example_cn: "最坏的情况在脑海中一闪而过。"
    },
    { 
        id: 519, 
        word: "えくぼ", 
        kanji: "笑窪 / 靨", 
        kana: "えくぼ", 
        pos: "名词",
        meaning: "酒窝",
        example_jp: "彼女は笑うと可愛いえくぼができる。",
        example_cn: "她笑起来会有可爱的酒窝。"
    },
    { 
        id: 520, 
        word: "ねじまわし", 
        kanji: "螺子回し", 
        kana: "ねじまわし", 
        pos: "名词",
        meaning: "螺丝刀",
        example_jp: "ドライバー（螺子回し）を使って家具を組み立てる。",
        example_cn: "使用螺丝刀组装家具。"
    },
    { 
        id: 521, 
        word: "どかん", 
        kanji: "どかん", 
        kana: "どかん", 
        pos: "副词",
        meaning: "轰隆（爆炸声）；猛然，突然大声",
        example_jp: "遠くで花火がどかんと音を立てて打ち上がった。",
        example_cn: "远处轰隆一声，升起了烟花。"
    },
    { 
        id: 522, 
        word: "ぱくり", 
        kanji: "ぱくり", 
        kana: "ぱくり", 
        pos: "副词 / 名词",
        meaning: "大口吃貌；剽窃，抄袭（名词用法）",
        example_jp: "そのデザインは、有名なブランドのぱくりだ。",
        example_cn: "那个设计是抄袭知名品牌的。"
    },
    { 
        id: 523, 
        word: "ぼっと", 
        kanji: "ぼっと", 
        kana: "ぼっと", 
        pos: "副词 / 自动词・サ变",
        meaning: "发呆（同ぼうっと）；猛然燃烧；脸红",
        example_jp: "恥ずかしさで顔がぼっと赤くなった。",
        example_cn: "因为害羞，脸腾地一下红了。"
    },
    { 
        id: 524, 
        word: "かこつける", 
        kanji: "託ける", 
        kana: "かこつける", 
        pos: "他动词・一段",
        meaning: "借口，托辞",
        example_jp: "彼は病気に託けて、面倒な仕事を断った。",
        example_cn: "他借口生病，推掉了麻烦的工作。"
    },
    { 
        id: 525, 
        word: "ひきにげ", 
        kanji: "轢き逃げ", 
        kana: "ひきにげ", 
        pos: "名词",
        meaning: "交通肇事逃逸",
        example_jp: "轢き逃げ事件の目撃者を探している。",
        example_cn: "正在寻找肇事逃逸事件的目击者。"
    },
    { 
        id: 526, 
        word: "やりぬく", 
        kanji: "遣り抜く", 
        kana: "やりぬく", 
        pos: "他动词・五段",
        meaning: "坚持到底，干到底",
        example_jp: "どんなに困難な任務でも、最後まで遣り抜く覚悟だ。",
        example_cn: "无论多么困难的任务，都准备坚持到底。"
    },
    { 
        id: 527, 
        word: "くぐる", 
        kanji: "潜る", 
        kana: "くぐる", 
        pos: "自动词・五段",
        meaning: "钻过，穿过；潜入（水中）；钻空子",
        example_jp: "法網を潜って不正な取引を行う。",
        example_cn: "钻法律的空子进行不正当交易。"
    },
    { 
        id: 528, 
        word: "いかなる", 
        kanji: "如何なる", 
        kana: "いかなる", 
        pos: "连体词",
        meaning: "任何的，无论怎样的",
        example_jp: "如何なる理由があろうとも、暴力は許されない。",
        example_cn: "无论有何种理由，暴力都是不被允许的。"
    },
    { 
        id: 529, 
        word: "なんか", 
        kanji: "なんか", 
        kana: "なんか", 
        pos: "副助词 / 副词",
        meaning: "（など的口语）之类的；（なぜか的口语）总觉得",
        example_jp: "今日はなんか嫌な予感がする。",
        example_cn: "今天总觉得有种不祥的预感。"
    },
    { 
        id: 530, 
        word: "つねる", 
        kanji: "抓る", 
        kana: "つねる", 
        pos: "他动词・五段",
        meaning: "掐，拧",
        example_jp: "これが夢ではないかと、自分の頬を抓ってみた。",
        example_cn: "为了确认这不是梦，掐了一下自己的脸颊。"
    },
    { 
        id: 531, 
        word: "みなぎる", 
        kanji: "漲る", 
        kana: "みなぎる", 
        pos: "自动词・五段",
        meaning: "充满，洋溢（水、力量、斗志等）",
        example_jp: "選手の目には、勝利への闘志が漲っていた。",
        example_cn: "选手的眼中洋溢着求胜的斗志。"
    },
    { 
        id: 532, 
        word: "ひょっこり", 
        kanji: "ひょっこり", 
        kana: "ひょっこり", 
        pos: "副词",
        meaning: "突然，出乎意料地出现",
        example_jp: "街角で、昔の友人とひょっこり出会った。",
        example_cn: "在街角突然偶遇了老朋友。"
    },
    { 
        id: 533, 
        word: "とんだ", 
        kanji: "とんだ", 
        kana: "とんだ", 
        pos: "连体词",
        meaning: "意想不到的，出乎意料的（多指灾难、糟糕的事情）",
        example_jp: "旅行中に財布を盗まれるとは、とんだ災難だった。",
        example_cn: "旅行途中钱包被偷，真是飞来横祸。"
    },
    { 
        id: 534, 
        word: "あかぎれ", 
        kanji: "皹 / 皸", 
        kana: "あかぎれ", 
        pos: "名词",
        meaning: "（皮肤干裂出血的）皲裂",
        example_jp: "冬の厳しい寒さで、手にひどいあかぎれができた。",
        example_cn: "因为冬天严寒，手上严重皲裂了。"
    },
    { 
        id: 535, 
        word: "とっておき", 
        kanji: "取って置き", 
        kana: "とっておき", 
        pos: "名词",
        meaning: "珍藏，压箱底的宝贝，留作备用",
        example_jp: "大事なお客様のために、取って置きのワインを開けた。",
        example_cn: "为了重要的客人，打开了珍藏的葡萄酒。"
    },
    { 
        id: 536, 
        word: "きらめく", 
        kanji: "煌めく", 
        kana: "きらめく", 
        pos: "自动词・五段",
        meaning: "闪耀，辉煌",
        example_jp: "夜空に無数の星が煌めいている。",
        example_cn: "夜空中有无数星星在闪耀。"
    },
    { 
        id: 537, 
        word: "あやかる", 
        kanji: "肖る", 
        kana: "あやかる", 
        pos: "自动词・五段",
        meaning: "效仿，沾光，借光",
        example_jp: "彼の成功にあやかって、私も事業を始めたい。",
        example_cn: "我想沾沾他成功的运气，自己也开始创业。"
    },
    { 
        id: 538, 
        word: "ぐずつく", 
        kanji: "愚図つく", 
        kana: "ぐずつく", 
        pos: "自动词・五段",
        meaning: "磨蹭，拖拉；（天气）阴晴不定",
        example_jp: "週末は雨が降ったり止んだりと、ぐずついた天気になるそうだ。",
        example_cn: "听说周末会是时雨时停的阴沉天气。"
    },
    { 
        id: 539, 
        word: "がっくり", 
        kanji: "がっくり", 
        kana: "がっくり", 
        pos: "副词 / 自动词・サ变",
        meaning: "颓丧，灰心丧气；突然无力（垂下头）",
        example_jp: "不合格の通知を受け取って、がっくりと肩を落とした。",
        example_cn: "收到不合格的通知书，颓丧地耷拉下了肩膀。"
    },
    { 
        id: 540, 
        word: "ちりとり", 
        kanji: "塵取り", 
        kana: "ちりとり", 
        pos: "名词",
        meaning: "簸箕",
        example_jp: "ほうきでゴミを集めて、ちり取りで受ける。",
        example_cn: "用扫帚扫起垃圾，用簸箕接住。"
    },
    { 
        id: 541, 
        word: "しこしこ", 
        kanji: "しこしこ", 
        kana: "しこしこ", 
        pos: "副词 / 自动词・サ变",
        meaning: "筋道，有嚼劲",
        example_jp: "このうどんは麺がしこしこしていて美味しい。",
        example_cn: "这乌冬面的面条很有嚼劲，非常好吃。"
    },
    { 
        id: 542, 
        word: "がっしり", 
        kanji: "がっしり", 
        kana: "がっしり", 
        pos: "副词 / 自动词・サ变",
        meaning: "健壮，牢固，结实",
        example_jp: "彼はスポーツマンらしく、がっしりとした体格をしている。",
        example_cn: "他有着运动员般健壮的体格。"
    },
    { 
        id: 543, 
        word: "ぺろり", 
        kanji: "ぺろり", 
        kana: "ぺろり", 
        pos: "副词",
        meaning: "一口吃光；（轻薄地）吐舌头",
        example_jp: "お腹が空いていたので、大盛りのラーメンをぺろりと平らげた。",
        example_cn: "因为肚子饿了，一大碗拉面一口气就吃光了。"
    },
    { 
        id: 544, 
        word: "くじ", 
        kanji: "籤", 
        kana: "くじ", 
        pos: "名词",
        meaning: "签，彩票",
        example_jp: "商店街の福引きで、一等の籤を引いた。",
        example_cn: "在商业街的抽奖中，抽中了一等奖的签。"
    },
    { 
        id: 545, 
        word: "たどる", 
        kanji: "辿る", 
        kana: "たどる", 
        pos: "他动词・五段",
        meaning: "沿着走，追寻；走向（某种局势，多为消极）",
        example_jp: "会社の経営状態は、悪化の一途を辿っている。",
        example_cn: "公司的经营状况正不断走向恶化。"
    },
    { 
        id: 546, 
        word: "ひっきりなしに", 
        kanji: "引っ切り無しに", 
        kana: "ひっきりなしに", 
        pos: "副词",
        meaning: "接连不断地，连绵不绝地",
        example_jp: "事務所の電話がひっきりなしに鳴っている。",
        example_cn: "事务所的电话接连不断地响着。"
    },
    { 
        id: 547, 
        word: "おだてる", 
        kanji: "煽てる", 
        kana: "おだてる", 
        pos: "他动词・一段",
        meaning: "煽动，怂恿，奉承，捧",
        example_jp: "彼は少し煽てられると、すぐに木に登るタイプだ。",
        example_cn: "他是那种稍微被奉承两句就会得意忘形的人（戴高帽）。"
    },
    { 
        id: 548, 
        word: "すりばち", 
        kanji: "擂り鉢", 
        kana: "すりばち", 
        pos: "名词",
        meaning: "研钵，擂钵",
        example_jp: "擂り鉢でごまを細かくすりつぶす。",
        example_cn: "在研钵里把芝麻细细地研碎。"
    },
    { 
        id: 549, 
        word: "もめる", 
        kanji: "揉める", 
        kana: "もめる", 
        pos: "自动词・一段",
        meaning: "起纠纷，发生争执",
        example_jp: "遺産の分配を巡って、親族間で激しく揉めている。",
        example_cn: "围绕遗产分配，亲属之间发生了激烈的争执。"
    },
    { 
        id: 550, 
        word: "おまけに", 
        kanji: "お負けに", 
        kana: "おまけに", 
        pos: "接续词",
        meaning: "而且，再加上（同その上）",
        example_jp: "道に迷い、おまけに雨まで降ってきた。",
        example_cn: "迷了路，而且还下起雨来了。"
    },
{ 
        id: 551, 
        word: "ごまかす", 
        kanji: "誤魔化す", 
        kana: "ごまかす", 
        pos: "他动词・五段",
        meaning: "蒙混，欺骗，敷衍，掩饰",
        example_jp: "彼は都合が悪くなると、いつも笑って誤魔化す。",
        example_cn: "他一遇到不利的情况，总是用笑来敷衍掩饰。"
    },
    { 
        id: 552, 
        word: "とんとん拍子", 
        kanji: "とんとん拍子", 
        kana: "とんとんびょうし", 
        pos: "名词",
        meaning: "顺顺利利，势如破竹",
        example_jp: "両社の交渉はとんとん拍子に進み、契約が成立した。",
        example_cn: "两家公司的谈判进展得十分顺利，最终达成了合约。"
    },
    { 
        id: 553, 
        word: "きしむ", 
        kanji: "軋む", 
        kana: "きしむ", 
        pos: "自动词・五段",
        meaning: "吱嘎作响；（关系等）产生摩擦，不和",
        example_jp: "些細な誤解から、二人の関係が軋み始めた。",
        example_cn: "因为微小的误解，两人之间的关系开始产生摩擦。"
    },
    { 
        id: 554, 
        word: "ぐさぐさ", 
        kanji: "ぐさぐさ", 
        kana: "ぐさぐさ", 
        pos: "副词",
        meaning: "猛烈刺入貌；深深刺痛（内心）",
        example_jp: "彼女の厳しい批判が、心にぐさぐさと刺さった。",
        example_cn: "她严厉的批评深深地刺痛了我的心。"
    },
    { 
        id: 555, 
        word: "あぜ", 
        kanji: "畦 / 畔", 
        kana: "あぜ", 
        pos: "名词",
        meaning: "田埂",
        example_jp: "夕暮れ時、田んぼの畦道をのんびりと歩く。",
        example_cn: "黄昏时分，悠闲地走在水田的田埂上。"
    },
    { 
        id: 556, 
        word: "けちくさい", 
        kanji: "けち臭い", 
        kana: "けちくさい", 
        pos: "イ形容词",
        meaning: "小气，吝啬，俗气",
        example_jp: "数百円のことで文句を言うなんて、けち臭い男だ。",
        example_cn: "就因为几百日元抱怨不停，真是个小气的男人。"
    },
    { 
        id: 557, 
        word: "すすぐ", 
        kanji: "雪ぐ / 濯ぐ / 漱ぐ", 
        kana: "すすぐ", 
        pos: "他动词・五段",
        meaning: "洗雪（耻辱）；洗刷，漂洗；漱口",
        example_jp: "今度の大会で優勝して、前回の汚名を雪ぎたい。",
        example_cn: "想在这次大会上夺冠，洗雪上次的污名。"
    },
    { 
        id: 558, 
        word: "けたたましい", 
        kanji: "けたたましい", 
        kana: "けたたましい", 
        pos: "イ形容词",
        meaning: "尖锐刺耳，嘈杂的，惊人的",
        example_jp: "深夜にけたたましいサイレンの音が鳴り響いた。",
        example_cn: "深夜里响起了尖锐刺耳的警笛声。"
    },
    { 
        id: 559, 
        word: "もじもじ", 
        kanji: "もじもじ", 
        kana: "もじもじ", 
        pos: "副词 / 自动词・サ变",
        meaning: "扭扭捏捏，忸怩，迟疑不决",
        example_jp: "彼女は恥ずかしそうに、もじもじしながらうつむいていた。",
        example_cn: "她似乎很害羞，扭扭捏捏地低着头。"
    },
    { 
        id: 560, 
        word: "ちかちか", 
        kanji: "ちかちか", 
        kana: "ちかちか", 
        pos: "副词 / 自动词・サ变",
        meaning: "光闪烁貌；刺眼，晃眼",
        example_jp: "細かい文字をずっと見ていたので、目がちかちかする。",
        example_cn: "一直盯着小字看，眼睛直冒金星（刺痛晃眼）。"
    },
    { 
        id: 561, 
        word: "なぞる", 
        kanji: "なぞる", 
        kana: "なぞる", 
        pos: "他动词・五段",
        meaning: "描摹，照着写；遵循（先例等）",
        example_jp: "ただ先例をなぞるだけでは、新しいものは生み出せない。",
        example_cn: "仅仅照搬先例，是创造不出新事物的。"
    },
    { 
        id: 562, 
        word: "しくしく", 
        kanji: "しくしく", 
        kana: "しくしく", 
        pos: "副词",
        meaning: "（女性、儿童）低声抽泣；（胃齿等）隐隐作痛",
        example_jp: "ストレスのせいか、朝から胃がしくしく痛む。",
        example_cn: "不知是不是压力的缘故，从早上起胃就隐隐作痛。"
    },
    { 
        id: 563, 
        word: "とげ", 
        kanji: "刺", 
        kana: "とげ", 
        pos: "名词",
        meaning: "刺；（言语中带的）刺",
        example_jp: "彼女の言い方には、いつもどこか刺がある。",
        example_cn: "她说话的方式总觉得哪里带有锋芒（带刺）。"
    },
    { 
        id: 564, 
        word: "すしづめ", 
        kanji: "鮨詰め", 
        kana: "すしづめ", 
        pos: "名词",
        meaning: "像沙丁鱼罐头般拥挤不堪",
        example_jp: "朝の通勤電車は鮨詰めで、身動きがとれない。",
        example_cn: "早上的通勤电车拥挤不堪，连动都动不了。"
    },
    { 
        id: 565, 
        word: "ごりごり", 
        kanji: "ごりごり", 
        kana: "ごりごり", 
        pos: "副词 / ナ形容词",
        meaning: "刮擦声，硬邦邦的声音；态度强硬，顽固",
        example_jp: "彼はごりごりの保守派で、改革には絶対に反対する。",
        example_cn: "他是个十足的顽固保守派，绝对反对改革。"
    },
    { 
        id: 566, 
        word: "いつとなく", 
        kanji: "いつとなく", 
        kana: "いつとなく", 
        pos: "副词",
        meaning: "不知不觉间",
        example_jp: "語り合っているうちに、いつとなく夜が明けていた。",
        example_cn: "在互相交谈之中，不知不觉天已经亮了。"
    },
    { 
        id: 567, 
        word: "もたらす", 
        kanji: "齎す", 
        kana: "もたらす", 
        pos: "他动词・五段",
        meaning: "带来，造成（好坏结果皆可）",
        example_jp: "この技術革新は、業界に大きな変化をもたらすだろう。",
        example_cn: "这项技术革新想必会给业界带来巨大的变化。"
    },
    { 
        id: 568, 
        word: "おむつ", 
        kanji: "おむつ", 
        kana: "おむつ", 
        pos: "名词",
        meaning: "尿布，纸尿裤",
        example_jp: "赤ちゃんのおむつを替えてから出かける。",
        example_cn: "给婴儿换好尿布后再出门。"
    },
    { 
        id: 569, 
        word: "ありきたり", 
        kanji: "在り来たり", 
        kana: "ありきたり", 
        pos: "名词 / ナ形容词",
        meaning: "常见的，普通的，老一套的",
        example_jp: "ありきたりの言葉では、この感謝の気持ちは伝えられない。",
        example_cn: "用那些老套普通的语言，无法传达这份感谢之情。"
    },
    { 
        id: 570, 
        word: "がさつ", 
        kanji: "がさつ", 
        kana: "がさつ", 
        pos: "ナ形容词",
        meaning: "粗野，粗鲁，毛躁，不细心",
        example_jp: "彼はがさつな性格で、よく物を壊してしまう。",
        example_cn: "他性格毛躁，经常把东西弄坏。"
    },
    { 
        id: 571, 
        word: "ピンからキリまで", 
        kanji: "ピンからキリまで", 
        kana: "ピンからキリまで", 
        pos: "连语",
        meaning: "从头到尾，形形色色，好坏参差不齐",
        example_jp: "同じようなバッグでも、値段はピンからキリまである。",
        example_cn: "就算是差不多的包，价格也是千差万别。"
    },
    { 
        id: 572, 
        word: "おたち", 
        kanji: "お立ち", 
        kana: "おたち", 
        pos: "名词",
        meaning: "（尊他语）出发，动身",
        example_jp: "明日は何時のお立ちになりますか。",
        example_cn: "您明天几点动身出发？"
    },
    { 
        id: 573, 
        word: "ふてぶてしい", 
        kanji: "ふてぶてしい", 
        kana: "ふてぶてしい", 
        pos: "イ形容词",
        meaning: "厚颜无耻的，满不在乎的",
        example_jp: "何度注意されても反省しない、ふてぶてしい態度だ。",
        example_cn: "不管被警告多少次都不反省，真是厚颜无耻的态度。"
    },
    { 
        id: 574, 
        word: "かたかた", 
        kanji: "かたかた", 
        kana: "かたかた", 
        pos: "副词",
        meaning: "咔哒咔哒响（坚硬物体碰撞声）",
        example_jp: "強風で窓ガラスがかたかたと音を立てている。",
        example_cn: "因为强风，窗玻璃发出咔哒咔哒的声响。"
    },
    { 
        id: 575, 
        word: "すんなり", 
        kanji: "すんなり", 
        kana: "すんなり", 
        pos: "副词 / 自动词・サ变",
        meaning: "顺利地，轻易地；苗条，修长",
        example_jp: "反対されるかと思ったが、案外すんなりと賛成してもらえた。",
        example_cn: "本以为会被反对，没想到出乎意料地顺利得到了赞成。"
    },
    { 
        id: 576, 
        word: "こせこせ", 
        kanji: "こせこせ", 
        kana: "こせこせ", 
        pos: "副词 / 自动词・サ变",
        meaning: "心胸狭窄，小气，局促",
        example_jp: "細かいことばかり気にして、こせこせ生きるのは嫌だ。",
        example_cn: "只在意鸡毛蒜皮的小事，我讨厌这种局促小气的生活方式。"
    },
    { 
        id: 577, 
        word: "つっけんどん", 
        kanji: "突っ慳貪", 
        kana: "つっけんどん", 
        pos: "ナ形容词",
        meaning: "态度冷酷，生硬，不客气",
        example_jp: "店員につっけんどんな態度を取られ、不愉快だった。",
        example_cn: "店员态度生硬冷酷，让人觉得很不愉快。"
    },
    { 
        id: 578, 
        word: "くぼむ", 
        kanji: "凹む / 窪む", 
        kana: "くぼむ", 
        pos: "自动词・五段",
        meaning: "凹陷，塌陷",
        example_jp: "疲れが溜まっているのか、目がくぼんでいる。",
        example_cn: "可能是因为疲劳累积，眼睛都凹陷了。"
    },
    { 
        id: 579, 
        word: "ぴっちり", 
        kanji: "ぴっちり", 
        kana: "ぴっちり", 
        pos: "副词",
        meaning: "严丝合缝，紧绷",
        example_jp: "乾燥を防ぐために、容器の蓋をぴっちりと閉める。",
        example_cn: "为了防止干燥，把容器的盖子严丝合缝地盖紧。"
    },
    { 
        id: 580, 
        word: "あやめる", 
        kanji: "危める / 殺める", 
        kana: "あやめる", 
        pos: "他动词・一段",
        meaning: "（委婉语）杀害",
        example_jp: "いかなる理由があろうとも、人の命を危めることは許されない。",
        example_cn: "无论有何种理由，杀害他人性命都是不可饶恕的。"
    },
    { 
        id: 581, 
        word: "じわじわ", 
        kanji: "じわじわ", 
        kana: "じわじわ", 
        pos: "副词",
        meaning: "缓缓地，一步步地，逐渐地",
        example_jp: "新しい宣伝の効果がじわじわと表れてきた。",
        example_cn: "新宣传的效果逐渐地显现出来了。"
    },
    { 
        id: 582, 
        word: "こだわる", 
        kanji: "拘る", 
        kana: "こだわる", 
        pos: "自动词・五段",
        meaning: "拘泥，执着，讲究",
        example_jp: "彼は素材にひどく拘って料理を作る。",
        example_cn: "他做菜对食材极其讲究。"
    },
    { 
        id: 583, 
        word: "ひときわ", 
        kanji: "一際", 
        kana: "ひときわ", 
        pos: "副词",
        meaning: "格外，尤其，分外",
        example_jp: "夜空の中で、あの星が一際明るく輝いている。",
        example_cn: "在夜空中，那颗星闪烁得格外明亮。"
    },
    { 
        id: 584, 
        word: "しかるに", 
        kanji: "然るに", 
        kana: "しかるに", 
        pos: "接续词",
        meaning: "（正式书面语）尽管如此，然而，可是",
        example_jp: "法は全ての人に平等であるべきだ。然るに、現実はどうだろうか。",
        example_cn: "法律理应对所有人平等。然而，现实又是如何呢？"
    },
    { 
        id: 585, 
        word: "もしかすると", 
        kanji: "若しかすると", 
        kana: "もしかすると", 
        pos: "副词",
        meaning: "（后多接かもしれない等）也许，说不定",
        example_jp: "もしかすると、今日の会議は中止になるかもしれない。",
        example_cn: "说不定今天的会议可能会被取消。"
    },
    { 
        id: 586, 
        word: "どうにか", 
        kanji: "どうにか", 
        kana: "どうにか", 
        pos: "副词",
        meaning: "总算，好歹；设法（解决）",
        example_jp: "苦労したが、どうにか締め切りに間に合った。",
        example_cn: "虽然很辛苦，但总算赶上了截止日期。"
    },
    { 
        id: 587, 
        word: "どっぷり", 
        kanji: "どっぷり", 
        kana: "どっぷり", 
        pos: "副词",
        meaning: "完全浸没；深深沉浸，无法自拔",
        example_jp: "休日には、好きなゲームの世界にどっぷりと浸かる。",
        example_cn: "在休息日，完全沉浸在喜欢的游戏世界里。"
    },
    { 
        id: 588, 
        word: "なじる", 
        kanji: "詰る", 
        kana: "なじる", 
        pos: "他动词・五段",
        meaning: "责备，诘问，责难",
        example_jp: "約束を破った相手を激しく詰った。",
        example_cn: "激烈地责备了违背约定的对方。"
    },
    { 
        id: 589, 
        word: "いささか", 
        kanji: "聊か / 些か", 
        kana: "いささか", 
        pos: "副词",
        meaning: "（正式）略微，稍微，多少有些",
        example_jp: "彼の今回の発言には、いささか問題があるように思える。",
        example_cn: "我觉得他这次的发言多少有些问题。"
    },
    { 
        id: 590, 
        word: "ぶれる", 
        kanji: "ぶれる", 
        kana: "ぶれる", 
        pos: "自动词・一段",
        meaning: "（照片等）模糊，晃动；（方针、立场）动摇",
        example_jp: "彼の政治的な信念は、状況が変わっても決してぶれない。",
        example_cn: "即使情况改变，他的政治信念也绝对不会动摇。"
    },
    { 
        id: 591, 
        word: "しなびる", 
        kanji: "萎びる", 
        kana: "しなびる", 
        pos: "自动词・一段",
        meaning: "枯萎，干瘪",
        example_jp: "冷蔵庫の奥で野菜がしなびていた。",
        example_cn: "蔬菜在冰箱深处都干瘪枯萎了。"
    },
    { 
        id: 592, 
        word: "うめく", 
        kanji: "呻く", 
        kana: "うめく", 
        pos: "自动词・五段",
        meaning: "呻吟，低声叹息",
        example_jp: "怪我人はあまりの痛さに低く呻いた。",
        example_cn: "伤者因为太痛而低声呻吟。"
    },
    { 
        id: 593, 
        word: "げっそり", 
        kanji: "げっそり", 
        kana: "げっそり", 
        pos: "副词 / 自动词・サ变",
        meaning: "（急剧）消瘦；颓丧，大失所望",
        example_jp: "楽しみにしていたイベントが中止になり、すっかりげっそりした。",
        example_cn: "期待已久的活动被取消，感到彻底大失所望。"
    },
    { 
        id: 594, 
        word: "くすぶる", 
        kanji: "燻る", 
        kana: "くすぶる", 
        pos: "自动词・五段",
        meaning: "冒烟；（不满等）未平息；郁郁不得志",
        example_jp: "市民の間に政府への不満が燻っている。",
        example_cn: "市民之间对政府的不满情绪仍在积聚（未平息）。"
    },
    { 
        id: 595, 
        word: "ぼやく", 
        kanji: "ぼやく", 
        kana: "ぼやく", 
        pos: "自动词・五段",
        meaning: "嘟哝，发牢骚，抱怨",
        example_jp: "彼は酒を飲むと、いつも仕事の愚痴をぼやく。",
        example_cn: "他一喝酒，就总是抱怨工作上的牢骚。"
    },
    { 
        id: 596, 
        word: "まばたき", 
        kanji: "瞬き", 
        kana: "まばたき", 
        pos: "名词 / 自动词・サ变",
        meaning: "眨眼",
        example_jp: "驚きのあまり、瞬きをするのも忘れて見入っていた。",
        example_cn: "由于太过惊讶，连眨眼都忘了，死死盯着看。"
    },
    { 
        id: 597, 
        word: "うっとり", 
        kanji: "うっとり", 
        kana: "うっとり", 
        pos: "副词 / 自动词・サ变",
        meaning: "入迷，陶醉，出神",
        example_jp: "彼女の美しいピアノの演奏に、観客はうっとりと聞き入った。",
        example_cn: "观众陶醉地倾听着她优美的钢琴演奏。"
    },
    { 
        id: 598, 
        word: "さらけだす", 
        kanji: "曝け出す", 
        kana: "さらけだす", 
        pos: "他动词・五段",
        meaning: "彻底暴露，和盘托出",
        example_jp: "自分の弱さを他人に曝け出すのは勇気がいる。",
        example_cn: "将自己的软弱彻底暴露给他人是需要勇气的。"
    },
    { 
        id: 599, 
        word: "あつらえる", 
        kanji: "誂える", 
        kana: "あつらえる", 
        pos: "他动词・一段",
        meaning: "定制，定做",
        example_jp: "就職祝いに、自分の体型に合ったスーツを誂えた。",
        example_cn: "作为就职的庆祝，定做了一套合身的西服。"
    },
    { 
        id: 600, 
        word: "まぐれ", 
        kanji: "紛れ", 
        kana: "まぐれ", 
        pos: "名词",
        meaning: "碰巧，侥幸，偶然",
        example_jp: "あんな強い相手に勝てたのは、実力ではなく全くの紛れだ。",
        example_cn: "能战胜那么强的对手，不是靠实力，完全是出于侥幸。"
    },
{ 
        id: 601, 
        word: "じれったい", 
        kanji: "焦れったい", 
        kana: "じれったい", 
        pos: "イ形容词",
        meaning: "焦躁的，令人心急的，惹人烦的",
        example_jp: "彼ののろのろした仕事ぶりには、本当に焦れったくなる。",
        example_cn: "他那慢吞吞的工作态度，真让人急躁。"
    },
    { 
        id: 602, 
        word: "のこのこ", 
        kanji: "のこのこ", 
        kana: "のこのこ", 
        pos: "副词",
        meaning: "漫不经心地，毫不介意地（出现），恬不知耻地",
        example_jp: "散々迷惑をかけておいて、よくものこのこ顔を出せたものだ。",
        example_cn: "添了那么多麻烦，亏你还能恬不知耻地露面。"
    },
    { 
        id: 603, 
        word: "ドタキャン", 
        kanji: "土壇場でキャンセル", 
        kana: "どたきゃん", 
        pos: "名词 / 他动词・サ变",
        meaning: "事到临头取消，临时爽约（口语缩略）",
        example_jp: "楽しみにしていたデートをドタキャンされてしまった。",
        example_cn: "期待已久的约会竟然被临时取消了。"
    },
    { 
        id: 604, 
        word: "にやり", 
        kanji: "にやり", 
        kana: "にやり", 
        pos: "副词",
        meaning: "窃笑，冷笑，得意地笑",
        example_jp: "計画がうまくいったのを確認して、彼はにやりと笑った。",
        example_cn: "确认计划顺利进行后，他得意地暗自窃笑。"
    },
    { 
        id: 605, 
        word: "ずらずら", 
        kanji: "ずらずら", 
        kana: "ずらずら", 
        pos: "副词",
        meaning: "一连串地，长篇大论地",
        example_jp: "言い訳ばかりをずらずらと並べ立てる。",
        example_cn: "一连串地罗列出一大堆借口。"
    },
    { 
        id: 606, 
        word: "するする", 
        kanji: "するする", 
        kana: "するする", 
        pos: "副词",
        meaning: "顺畅地，平滑地，动作敏捷地",
        example_jp: "猿が木をするすると登っていく。",
        example_cn: "猴子敏捷顺畅地爬上了树。"
    },
    { 
        id: 607, 
        word: "おとも", 
        kanji: "お供", 
        kana: "おとも", 
        pos: "名词 / 自动词・サ变",
        meaning: "陪伴，随从，伴随物",
        example_jp: "社長の海外出張にお供する。",
        example_cn: "陪同社长去海外出差。"
    },
    { 
        id: 608, 
        word: "ぎすぎす", 
        kanji: "ぎすぎす", 
        kana: "ぎすぎす", 
        pos: "副词 / 自动词・サ变",
        meaning: "（人际关系）冷漠，生硬，不融洽；干瘦",
        example_jp: "あの職場は人間関係がぎすぎすしていて、居心地が悪い。",
        example_cn: "那个职场的人际关系非常冷漠生硬，让人待得不舒服。"
    },
    { 
        id: 609, 
        word: "のどか", 
        kanji: "長閑", 
        kana: "のどか", 
        pos: "ナ形容词",
        meaning: "悠闲，宁静，风和日丽",
        example_jp: "晴れた休日に、公園でのどかな時間を過ごす。",
        example_cn: "在晴朗的休息日，在公园里度过了悠闲宁静的时光。"
    },
    { 
        id: 610, 
        word: "きらびやか", 
        kanji: "煌びやか", 
        kana: "きらびやか", 
        pos: "ナ形容词",
        meaning: "华丽，灿烂夺目，辉煌",
        example_jp: "彼女はきらびやかなドレスを着てパーティーに参加した。",
        example_cn: "她穿着华丽夺目的礼服参加了派对。"
    },
    { 
        id: 611, 
        word: "おぼつかない", 
        kanji: "覚束ない", 
        kana: "おぼつかない", 
        pos: "イ形容词",
        meaning: "靠不住，没希望；含糊不清，不稳（脚步等）",
        example_jp: "病み上がりで、まだ足取りがおぼつかない。",
        example_cn: "大病初愈，脚步还不太稳健。"
    },
    { 
        id: 612, 
        word: "しくじる", 
        kanji: "しくじる", 
        kana: "しくじる", 
        pos: "自动词・五段",
        meaning: "失败，搞砸；因过失被解雇",
        example_jp: "入試でしくじって、浪人することになった。",
        example_cn: "入学考试搞砸了，只能复读。"
    },
    { 
        id: 613, 
        word: "さらさら", 
        kanji: "さらさら", 
        kana: "さらさら", 
        pos: "副词 / ナ形容词",
        meaning: "潺潺（水声）；沙沙响；极其顺畅；（后接否定）丝毫，一点也不",
        example_jp: "彼の髪は手入れがされていて、さらさらだ。",
        example_cn: "他的头发保养得很好，非常柔顺。"
    },
    { 
        id: 614, 
        word: "しっとり", 
        kanji: "しっとり", 
        kana: "しっとり", 
        pos: "副词 / 自动词・サ变",
        meaning: "湿润；平静，柔和，沉着",
        example_jp: "この化粧水をつけると、肌がしっとりする。",
        example_cn: "涂上这款化妆水后，肌肤会变得湿润。"
    },
    { 
        id: 615, 
        word: "ちぐはぐ", 
        kanji: "ちぐはぐ", 
        kana: "ちぐはぐ", 
        pos: "名词 / ナ形容词",
        meaning: "不一致，不协调，不对头",
        example_jp: "二人の意見はちぐはぐで、なかなか結論が出ない。",
        example_cn: "两人的意见不一致，迟迟得不出结论。"
    },
    { 
        id: 616, 
        word: "うつろ", 
        kanji: "空ろ / 虚ろ", 
        kana: "うつろ", 
        pos: "名词 / ナ形容词",
        meaning: "空洞，空虚，发呆，神志不清",
        example_jp: "ショックのあまり、彼女はうつろな目で宙を見つめていた。",
        example_cn: "因为过于震惊，她用空洞的眼神注视着半空。"
    },
    { 
        id: 617, 
        word: "よそもの", 
        kanji: "余所者", 
        kana: "よそもの", 
        pos: "名词",
        meaning: "外乡人，外人，局外人",
        example_jp: "この村では、余所者はなかなか受け入れてもらえない。",
        example_cn: "在这个村子里，外乡人很难被接纳。"
    },
    { 
        id: 618, 
        word: "いざ", 
        kanji: "いざ", 
        kana: "いざ", 
        pos: "感叹词 / 副词",
        meaning: "（决心做某事时）那么，一旦",
        example_jp: "いざという時のために、貯金をしておく。",
        example_cn: "为了以防万一（一旦到了关键时刻），要存点钱。"
    },
    { 
        id: 619, 
        word: "みっちり", 
        kanji: "みっちり", 
        kana: "みっちり", 
        pos: "副词",
        meaning: "充分地，严格地，满满地",
        example_jp: "試験前に、先生からみっちりと指導を受けた。",
        example_cn: "考试前，受到了老师严格充分的指导。"
    },
    { 
        id: 620, 
        word: "ぱさつく", 
        kanji: "ぱさつく", 
        kana: "ぱさつく", 
        pos: "自动词・五段",
        meaning: "干巴巴，干燥无光泽",
        example_jp: "このパンは古くて、少しぱさついている。",
        example_cn: "这个面包放久了，稍微有些干巴巴的。"
    },
    { 
        id: 621, 
        word: "ほくほく", 
        kanji: "ほくほく", 
        kana: "ほくほく", 
        pos: "副词 / 自动词・サ变",
        meaning: "（刚出锅）热气腾腾，松软；暗自欢喜",
        example_jp: "焼きたてのほくほくしたサツマイモを食べる。",
        example_cn: "吃刚烤好的热腾腾松软的红薯。"
    },
    { 
        id: 622, 
        word: "おてあげ", 
        kanji: "お手上げ", 
        kana: "おてあげ", 
        pos: "名词",
        meaning: "束手无策，毫无办法，投降",
        example_jp: "パソコンが完全に壊れてしまい、もうお手上げだ。",
        example_cn: "电脑彻底坏了，实在束手无策了。"
    },
    { 
        id: 623, 
        word: "もはや", 
        kanji: "最早", 
        kana: "もはや", 
        pos: "副词",
        meaning: "已经，事到如今（同もう、すでに）",
        example_jp: "被害は拡大しており、もはや一刻の猶予も許されない。",
        example_cn: "损失正在扩大，事到如今已刻不容缓。"
    },
    { 
        id: 624, 
        word: "ぴんぴん", 
        kanji: "ぴんぴん", 
        kana: "ぴんぴん", 
        pos: "副词 / 自动词・サ变",
        meaning: "活蹦乱跳，健壮",
        example_jp: "祖父は９０歳になったが、まだぴんぴんしている。",
        example_cn: "祖父虽然90岁了，但依然十分健朗。"
    },
    { 
        id: 625, 
        word: "さめざめ", 
        kanji: "さめざめ", 
        kana: "さめざめ", 
        pos: "副词",
        meaning: "潸然泪下，默默流泪",
        example_jp: "悲報を聞いて、彼女はさめざめと泣いた。",
        example_cn: "听到噩耗，她潸然泪下。"
    },
    { 
        id: 626, 
        word: "もりもり", 
        kanji: "もりもり", 
        kana: "もりもり", 
        pos: "副词",
        meaning: "兴致勃勃；食欲旺盛；精力充沛地鼓起",
        example_jp: "育ち盛りの子供がご飯をもりもり食べる。",
        example_cn: "正在长身体的孩子旺盛地大口吃饭。"
    },
    { 
        id: 627, 
        word: "ねちねち", 
        kanji: "ねちねち", 
        kana: "ねちねち", 
        pos: "副词 / 自动词・サ变",
        meaning: "黏糊糊；喋喋不休，纠缠不休",
        example_jp: "済んだことをいつまでもねちねちと文句を言うな。",
        example_cn: "已经过去的事，不要总是喋喋不休地抱怨。"
    },
    { 
        id: 628, 
        word: "ゆがめる", 
        kanji: "歪める", 
        kana: "ゆがめる", 
        pos: "他动词・一段",
        meaning: "弄歪；歪曲（事实等）",
        example_jp: "事実を歪めて報道するのは、メディアとして許されない。",
        example_cn: "歪曲事实进行报道，作为媒体是不被允许的。"
    },
    { 
        id: 629, 
        word: "かんかん", 
        kanji: "かんかん", 
        kana: "かんかん", 
        pos: "副词 / ナ形容词",
        meaning: "大发雷霆，勃然大怒；当当响；烈日当空",
        example_jp: "約束を破ってしまい、父はかんかんに怒っている。",
        example_cn: "因为我违背了约定，父亲勃然大怒。"
    },
    { 
        id: 630, 
        word: "さくさく", 
        kanji: "さくさく", 
        kana: "さくさく", 
        pos: "副词 / 自动词・サ变",
        meaning: "脆生生（口感）；麻利地，顺利地（工作等）",
        example_jp: "新しいパソコンは、動作がさくさくしていて快適だ。",
        example_cn: "新电脑运行非常顺畅麻利，用起来很舒服。"
    },
    { 
        id: 631, 
        word: "グリーンしゃ", 
        kanji: "グリーン車", 
        kana: "グリーンしゃ", 
        pos: "名词",
        meaning: "绿色车厢（JR列车的头等座/软座厢）",
        example_jp: "長旅なので、少し奮発してグリーン車に乗った。",
        example_cn: "因为是长途旅行，所以稍微多花点钱坐了头等车厢。"
    },
    { 
        id: 632, 
        word: "こくこく", 
        kanji: "こくこく", 
        kana: "こくこく", 
        pos: "副词",
        meaning: "咕咚咕咚（喝水）；频频点头",
        example_jp: "先生の話を聞きながら、生徒たちはこくこくと頷いた。",
        example_cn: "听着老师的话，学生们频频点头。"
    },
    { 
        id: 633, 
        word: "ちゃらちゃら", 
        kanji: "ちゃらちゃら", 
        kana: "ちゃらちゃら", 
        pos: "副词 / 自动词・サ变",
        meaning: "叮当响（金属碰撞）；轻浮，花哨",
        example_jp: "彼はちゃらちゃらした服装で面接にやってきた。",
        example_cn: "他穿着花里胡哨（轻浮）的衣服来参加面试了。"
    },
    { 
        id: 634, 
        word: "なぎさ", 
        kanji: "渚", 
        kana: "なぎさ", 
        pos: "名词",
        meaning: "水滨，海滩，岸边",
        example_jp: "夕暮れ時、波の音を聞きながら渚を歩いた。",
        example_cn: "黄昏时分，听着海浪声漫步在海滩上。"
    },
    { 
        id: 635, 
        word: "ざらざら", 
        kanji: "ざらざら", 
        kana: "ざらざら", 
        pos: "副词 / ナ形容词",
        meaning: "粗糙，不光滑",
        example_jp: "冬場は乾燥して、肌がざらざらになりやすい。",
        example_cn: "冬天空气干燥，皮肤容易变得粗糙。"
    },
    { 
        id: 636, 
        word: "ひがむ", 
        kanji: "僻む", 
        kana: "ひがむ", 
        pos: "自动词・五段",
        meaning: "乖僻，偏执，感到委屈，抱有偏见",
        example_jp: "他人の成功をいちいち僻んでいても仕方がない。",
        example_cn: "对别人的成功一一感到委屈嫉妒也是没用的。"
    },
    { 
        id: 637, 
        word: "すっくり", 
        kanji: "すっくり", 
        kana: "すっくり", 
        pos: "副词",
        meaning: "笔直地站立，挺拔",
        example_jp: "彼女はバレリーナのように、背筋をすっくりと伸ばして立っていた。",
        example_cn: "她像芭蕾舞演员一样，背脊笔挺地站着。"
    },
    { 
        id: 638, 
        word: "おばけ", 
        kanji: "お化け", 
        kana: "おばけ", 
        pos: "名词",
        meaning: "妖怪，幽灵；异常巨大（的事物）",
        example_jp: "畑で驚くほど大きなお化けカボチャがとれた。",
        example_cn: "地里收获了一个大得惊人的巨型南瓜。"
    },
    { 
        id: 639, 
        word: "あべこべ", 
        kanji: "あべこべ", 
        kana: "あべこべ", 
        pos: "名词 / ナ形容词",
        meaning: "颠倒，相反",
        example_jp: "慌てていたので、靴下をあべこべに履いてしまった。",
        example_cn: "因为慌张，把袜子穿反了。"
    },
    { 
        id: 640, 
        word: "ぎゅっと", 
        kanji: "ぎゅっと", 
        kana: "ぎゅっと", 
        pos: "副词",
        meaning: "紧紧地，用力地",
        example_jp: "迷子にならないように、子供の手をぎゅっと握った。",
        example_cn: "为了不走散，紧紧地握住了孩子的手。"
    },
    { 
        id: 641, 
        word: "ばれる", 
        kanji: "ばれる", 
        kana: "ばれる", 
        pos: "自动词・一段",
        meaning: "暴露，泄露，被识破",
        example_jp: "隠していたへそくりが、妻にばれてしまった。",
        example_cn: "藏着的私房钱被妻子发现了（暴露了）。"
    },
    { 
        id: 642, 
        word: "しわしわ", 
        kanji: "皺々", 
        kana: "しわしわ", 
        pos: "副词 / ナ形容词",
        meaning: "满是皱纹，起皱",
        example_jp: "洗濯物をそのままにしておいたら、しわしわになってしまった。",
        example_cn: "洗好的衣服就那么放着，结果变得全是皱褶了。"
    },
    { 
        id: 643, 
        word: "こじれる", 
        kanji: "拗れる", 
        kana: "こじれる", 
        pos: "自动词・一段",
        meaning: "（病情）恶化；（事情、关系等）别扭，复杂化",
        example_jp: "風邪がこじれて、肺炎になってしまった。",
        example_cn: "感冒恶化，结果引发了肺炎。"
    },
    { 
        id: 644, 
        word: "もって", 
        kanji: "以て", 
        kana: "もって", 
        pos: "格助词",
        meaning: "（文言）用，以；因为；以此，到此",
        example_jp: "本日の営業は午後五時を以て終了させていただきます。",
        example_cn: "今天的营业到下午五点为止（结束）。"
    },
    { 
        id: 645, 
        word: "むさい", 
        kanji: "むさい", 
        kana: "むさい", 
        pos: "イ形容词",
        meaning: "肮脏的，邋遢的，令人不快的",
        example_jp: "何日も風呂に入っていない、むさい格好で出歩く。",
        example_cn: "好几天没洗澡，打扮得邋邋遢遢地在外面走。"
    },
    { 
        id: 646, 
        word: "かきみだす", 
        kanji: "掻き乱す", 
        kana: "かきみだす", 
        pos: "他动词・五段",
        meaning: "扰乱，打乱，使混乱",
        example_jp: "彼の突然の発言が、会議の進行を掻き乱した。",
        example_cn: "他突然的发言扰乱了会议的进行。"
    },
    { 
        id: 647, 
        word: "じとじと", 
        kanji: "じとじと", 
        kana: "じとじと", 
        pos: "副词 / 自动词・サ变",
        meaning: "湿漉漉，潮湿",
        example_jp: "梅雨の季節は、毎日じとじとしていて不快だ。",
        example_cn: "梅雨季节每天都潮湿阴冷，感觉很不舒服。"
    },
    { 
        id: 648, 
        word: "ちょくちょく", 
        kanji: "ちょくちょく", 
        kana: "ちょくちょく", 
        pos: "副词",
        meaning: "时常，往往，常常",
        example_jp: "彼は出張で、ちょくちょく海外へ行っている。",
        example_cn: "他因为出差，常常去海外。"
    },
    { 
        id: 649, 
        word: "はまる", 
        kanji: "嵌まる", 
        kana: "はまる", 
        pos: "自动词・五段",
        meaning: "嵌入，吻合；掉进，陷入；热衷，入迷",
        example_jp: "最近、新しいスマートフォンゲームにすっかり嵌まっている。",
        example_cn: "最近完全迷上了新的智能手机游戏。"
    },
    { 
        id: 650, 
        word: "たゆみなく", 
        kanji: "弛みなく", 
        kana: "たゆみなく", 
        pos: "副词",
        meaning: "毫不松懈地，不屈不挠地",
        example_jp: "目標達成に向けて、弛みなく努力を続ける。",
        example_cn: "为了达成目标，毫不松懈地继续努力。"
    },
{ 
        id: 651, 
        word: "あんぐり", 
        kanji: "あんぐり", 
        kana: "あんぐり", 
        pos: "副词",
        meaning: "（因惊讶等）张大嘴巴发呆貌",
        example_jp: "予想外の結末に、観客は口をあんぐりと開けていた。",
        example_cn: "面对出乎意料的结局，观众们惊讶得张大了嘴巴。"
    },
    { 
        id: 652, 
        word: "とっさに", 
        kanji: "咄嗟に", 
        kana: "とっさに", 
        pos: "副词",
        meaning: "瞬间，下意识地，立刻",
        example_jp: "子供が飛び出してきたので、とっさにブレーキを踏んだ。",
        example_cn: "因为有小孩子冲了出来，我下意识地踩了刹车。"
    },
    { 
        id: 653, 
        word: "まして", 
        kanji: "況して / 増して", 
        kana: "まして", 
        pos: "副词",
        meaning: "何况，况且，更不用说（多搭配否定）",
        example_jp: "大人でも解けない問題だ。まして子供には無理だろう。",
        example_cn: "这是连大人都解不开的问题。何况是小孩，肯定做不到吧。"
    },
    { 
        id: 654, 
        word: "むずむず", 
        kanji: "むずむず", 
        kana: "むずむず", 
        pos: "副词 / 自动词・サ变",
        meaning: "发痒；心里发痒（想做某事按捺不住）",
        example_jp: "早く新しいパソコンを使いたくて、手がむずむずする。",
        example_cn: "想早点用上新电脑，手痒得按捺不住。"
    },
    { 
        id: 655, 
        word: "ざくざく", 
        kanji: "ざくざく", 
        kana: "ざくざく", 
        pos: "副词 / 自动词・サ变",
        meaning: "踩砂石声；粗略切碎（蔬菜）；金币碰撞声（财源滚滚）",
        example_jp: "キャベツを包丁でざくざくと切る。",
        example_cn: "用菜刀把卷心菜咔嚓咔嚓地粗略切碎。"
    },
    { 
        id: 656, 
        word: "さまよう", 
        kanji: "さ迷う / 彷徨う", 
        kana: "さまよう", 
        pos: "自动词・五段",
        meaning: "徘徊，流浪；（生死线上）挣扎",
        example_jp: "事故に遭い、生死の境を彷徨った。",
        example_cn: "遭遇事故，在生死线上徘徊挣扎。"
    },
    { 
        id: 657, 
        word: "みぞれ", 
        kanji: "霙", 
        kana: "みぞれ", 
        pos: "名词",
        meaning: "雨夹雪",
        example_jp: "冷たい雨が、やがて霙に変わった。",
        example_cn: "冰冷的雨不久后变成了雨夹雪。"
    },
    { 
        id: 658, 
        word: "くすぐったい", 
        kanji: "擽ったい", 
        kana: "くすぐったい", 
        pos: "イ形容词",
        meaning: "痒痒的；（受人夸奖时）难为情，不好意思",
        example_jp: "皆の前で褒められて、少しくすぐったい気分だ。",
        example_cn: "在大家面前受到表扬，感觉有点不好意思。"
    },
    { 
        id: 659, 
        word: "ばらまく", 
        kanji: "ばら撒く / ばら蒔く", 
        kana: "ばらまく", 
        pos: "他动词・五段",
        meaning: "撒，到处散布（钱财、传闻等）",
        example_jp: "彼は根拠のない噂を社内にばら撒いている。",
        example_cn: "他在公司内部到处散布毫无根据的谣言。"
    },
    { 
        id: 660, 
        word: "せっかち", 
        kanji: "せっかち", 
        kana: "せっかち", 
        pos: "名词 / ナ形容词",
        meaning: "性急，急躁",
        example_jp: "彼はせっかちな性格で、人の話が終わる前に話し始める。",
        example_cn: "他性格急躁，别人话还没说完他就开始说了。"
    },
    { 
        id: 661, 
        word: "もやもや", 
        kanji: "もやもや", 
        kana: "もやもや", 
        pos: "副词 / 自动词・サ变",
        meaning: "烟雾弥漫貌；（心情、记忆等）朦胧，郁闷，无法释怀",
        example_jp: "言いたいことを我慢したので、心にもやもやが残った。",
        example_cn: "因为把想说的话憋了回去，心里一直郁结难解。"
    },
    { 
        id: 662, 
        word: "こだわり", 
        kanji: "拘り", 
        kana: "こだわり", 
        pos: "名词",
        meaning: "拘泥，讲究，执着",
        example_jp: "この店のコーヒーは、豆の焙煎に強いこだわりがある。",
        example_cn: "这家店的咖啡，在咖啡豆的烘焙上有着极高的讲究。"
    },
    { 
        id: 663, 
        word: "ひょっとしたら", 
        kanji: "ひょっとしたら", 
        kana: "ひょっとしたら", 
        pos: "副词",
        meaning: "（后接「かもしれない」等）说不定，也许",
        example_jp: "ひょっとしたら、今日のテストは満点かもしれない。",
        example_cn: "说不定，今天的考试也许能拿满分。"
    },
    { 
        id: 664, 
        word: "おたおた", 
        kanji: "おたおた", 
        kana: "おたおた", 
        pos: "副词 / 自动词・サ变",
        meaning: "惊慌失措，手忙脚乱",
        example_jp: "突然のトラブルに、ただおたおたするばかりだった。",
        example_cn: "面对突发的麻烦，只能手忙脚乱不知所措。"
    },
    { 
        id: 665, 
        word: "そっちのけ", 
        kanji: "其方退け", 
        kana: "そっちのけ", 
        pos: "名词",
        meaning: "抛开不管，置之不理（多以「〜をそっちのけで」形式出现）",
        example_jp: "子供は宿題をそっちのけでゲームに夢中になっている。",
        example_cn: "孩子把作业抛到九霄云外，沉迷于游戏。"
    },
    { 
        id: 666, 
        word: "はげわし", 
        kanji: "禿鷲", 
        kana: "はげわし", 
        pos: "名词",
        meaning: "秃鹫",
        example_jp: "サバンナで禿鷲が獲物を狙っている。",
        example_cn: "在非洲大草原上，秃鹫正在盯着猎物。"
    },
    { 
        id: 667, 
        word: "あやふや", 
        kanji: "あやふや", 
        kana: "あやふや", 
        pos: "ナ形容词",
        meaning: "含糊其辞，模棱两可，不明确",
        example_jp: "質問に対して、あやふやな返事しかできなかった。",
        example_cn: "面对提问，只能做出模棱两可的回答。"
    },
    { 
        id: 668, 
        word: "ぎざぎざ", 
        kanji: "ぎざぎざ", 
        kana: "ぎざぎざ", 
        pos: "名词 / ナ形容词",
        meaning: "锯齿状，犬牙交错",
        example_jp: "葉の縁がぎざぎざになっている植物。",
        example_cn: "叶子边缘呈锯齿状的植物。"
    },
    { 
        id: 669, 
        word: "こたつ", 
        kanji: "炬燵 / 火燵", 
        kana: "こたつ", 
        pos: "名词",
        meaning: "被炉",
        example_jp: "冬はこたつでみかんを食べるのが最高だ。",
        example_cn: "冬天在被炉里吃橘子是最棒的。"
    },
    { 
        id: 670, 
        word: "ひりひり", 
        kanji: "ひりひり", 
        kana: "ひりひり", 
        pos: "副词 / 自动词・サ变",
        meaning: "（皮肤擦伤、烧伤或吃辣等引起的）刺痛，火辣辣地痛",
        example_jp: "日焼けで背中がひりひりと痛む。",
        example_cn: "因为晒伤，背部火辣辣地痛。"
    },
    { 
        id: 671, 
        word: "たんまり", 
        kanji: "たんまり", 
        kana: "たんまり", 
        pos: "副词",
        meaning: "很多，颇多（多指金钱）",
        example_jp: "宝くじが当たって、たんまりと儲けた。",
        example_cn: "中了彩票，赚了一大笔钱。"
    },
    { 
        id: 672, 
        word: "くみとる", 
        kanji: "汲み取る", 
        kana: "くみとる", 
        pos: "他动词・五段",
        meaning: "打水，舀出；推测，体察，理解（他人的心情）",
        example_jp: "部下の不満を汲み取って、職場環境を改善する。",
        example_cn: "体察部下的不满，并改善职场环境。"
    },
    { 
        id: 673, 
        word: "よって", 
        kanji: "依って / 因って", 
        kana: "よって", 
        pos: "接续词",
        meaning: "因此，所以（正式书面语）",
        example_jp: "本日は大雪である。よって、会議は延期とする。",
        example_cn: "今日下大雪。因此，会议延期。"
    },
    { 
        id: 674, 
        word: "しがみつく", 
        kanji: "しがみ付く", 
        kana: "しがみつく", 
        pos: "自动词・五段",
        meaning: "紧紧抱住，死死抓住不放",
        example_jp: "子供が母親の足にしがみついて泣いている。",
        example_cn: "孩子紧紧抱住母亲的腿在哭泣。"
    },
    { 
        id: 675, 
        word: "むくむく", 
        kanji: "むくむく", 
        kana: "むくむく", 
        pos: "副词",
        meaning: "（云烟）滚滚升起；（想法、欲望）涌起；胖乎乎",
        example_jp: "彼への疑念がむくむくと湧き上がってきた。",
        example_cn: "对他的疑虑源源不断地涌上心头。"
    },
    { 
        id: 676, 
        word: "はばかる", 
        kanji: "憚る", 
        kana: "はばかる", 
        pos: "他动词・五段",
        meaning: "顾忌，怕人知道；有所畏惧",
        example_jp: "人目も憚らず、大声で泣き出した。",
        example_cn: "毫不在意旁人的目光，毫无顾忌地大声哭了起来。"
    },
    { 
        id: 677, 
        word: "かかりつけ", 
        kanji: "掛かり付け", 
        kana: "かかりつけ", 
        pos: "名词",
        meaning: "经常就诊的（医生等），常去的",
        example_jp: "体調が悪いので、かかりつけの医者に診てもらう。",
        example_cn: "因为身体不舒服，去看了经常就诊的家庭医生。"
    },
    { 
        id: 678, 
        word: "かねて", 
        kanji: "予て / 兼ねて", 
        kana: "かねて", 
        pos: "副词",
        meaning: "事先，早先，以前（多以「かねてから」的形式出现）",
        example_jp: "その噂は、かねてから聞いておりました。",
        example_cn: "那个传闻，我早先就有所耳闻。"
    },
    { 
        id: 679, 
        word: "ばか〜", 
        kanji: "馬鹿〜", 
        kana: "ばか〜", 
        pos: "接头词",
        meaning: "出奇地，超乎寻常地（极度强调）",
        example_jp: "この店のカレーはばかでかい（馬鹿でかい）ことで有名だ。",
        example_cn: "这家店的咖喱以出奇的大份而闻名。"
    },
    { 
        id: 680, 
        word: "ねぎらい", 
        kanji: "労い / 犒い", 
        kana: "ねぎらい", 
        pos: "名词",
        meaning: "慰劳，犒赏，感谢",
        example_jp: "社長から、社員に向けてねぎらいの言葉があった。",
        example_cn: "社长对员工们说了几句慰劳的话。"
    },
    { 
        id: 681, 
        word: "やられる", 
        kanji: "やられる", 
        kana: "やられる", 
        pos: "动词（受身形）",
        meaning: "被打败；被干掉；遭受（灾害、诈骗）；受不了",
        example_jp: "巧妙な手口の詐欺にすっかりやられてしまった。",
        example_cn: "被手法巧妙的诈骗给彻底骗了。"
    },
    { 
        id: 682, 
        word: "すらり", 
        kanji: "すらり", 
        kana: "すらり", 
        pos: "副词",
        meaning: "身材修长貌；顺利地，毫无阻碍地",
        example_jp: "彼女はすらりとした足がとても美しい。",
        example_cn: "她那修长的双腿非常漂亮。"
    },
    { 
        id: 683, 
        word: "うつぶせ", 
        kanji: "俯せ", 
        kana: "うつぶせ", 
        pos: "名词",
        meaning: "趴着，俯卧，脸朝下",
        example_jp: "マッサージを受けるため、ベッドにうつ伏せになる。",
        example_cn: "为了接受按摩，在床上趴了下来。"
    },
    { 
        id: 684, 
        word: "どうにも", 
        kanji: "どうにも", 
        kana: "どうにも", 
        pos: "副词",
        meaning: "（后接否定）怎么也（无计可施）；无论如何也",
        example_jp: "渋滞に巻き込まれ、今の時間からはどうにも間に合わない。",
        example_cn: "被卷入堵车，从现在的时间来看怎么也赶不上了。"
    },
    { 
        id: 685, 
        word: "もくろむ", 
        kanji: "目論む", 
        kana: "もくろむ", 
        pos: "他动词・五段",
        meaning: "企图，策划，图谋，盘算",
        example_jp: "彼は社長の座を奪おうと目論んでいる。",
        example_cn: "他正企图夺取社长的宝座。"
    },
    { 
        id: 686, 
        word: "もとより", 
        kanji: "元より", 
        kana: "もとより", 
        pos: "副词",
        meaning: "本来就；（接「〜はもとより」）不用说...连...",
        example_jp: "外見は元より、性格も素晴らしい人だ。",
        example_cn: "外貌自不必说，性格也是极好的人。"
    },
    { 
        id: 687, 
        word: "べらべら", 
        kanji: "べらべら", 
        kana: "べらべら", 
        pos: "副词",
        meaning: "口若悬河地，滔滔不绝地；轻率地泄密",
        example_jp: "他人の秘密をべらべらと喋るべきではない。",
        example_cn: "不应该把别人的秘密滔滔不绝地到处乱说。"
    },
    { 
        id: 688, 
        word: "もてはやす", 
        kanji: "持て囃す", 
        kana: "もてはやす", 
        pos: "他动词・五段",
        meaning: "极力称赞，捧场，追捧",
        example_jp: "その作家は若者たちの間でもてはやされている。",
        example_cn: "那位作家在年轻人中备受追捧。"
    },
    { 
        id: 689, 
        word: "かれこれ", 
        kanji: "彼此", 
        kana: "かれこれ", 
        pos: "副词",
        meaning: "这个那个；不知不觉，差不多（时间、数量等）",
        example_jp: "彼と知り合って、かれこれ十年になる。",
        example_cn: "和他认识差不多有十年了。"
    },
    { 
        id: 690, 
        word: "しなやか", 
        kanji: "しなやか", 
        kana: "しなやか", 
        pos: "ナ形容词",
        meaning: "柔韧，柔软，优美，婀娜",
        example_jp: "体操選手のしなやかな身のこなしに魅了された。",
        example_cn: "被体操运动员柔韧优美的身段迷住了。"
    },
    { 
        id: 691, 
        word: "すぼめる", 
        kanji: "窄める", 
        kana: "すぼめる", 
        pos: "他动词・一段",
        meaning: "收缩，弄窄；合拢；耸肩（肩をすぼめる）",
        example_jp: "雨が止んだので、傘をすぼめた。",
        example_cn: "雨停了，所以收起了伞。"
    },
    { 
        id: 692, 
        word: "くだくだ", 
        kanji: "くだくだ", 
        kana: "くだくだ", 
        pos: "副词",
        meaning: "啰里啰嗦，冗长乏味",
        example_jp: "終わったことをいつまでもくだくだ言うな。",
        example_cn: "过去的事情不要一直啰里啰嗦地说个没完。"
    },
    { 
        id: 693, 
        word: "なんと", 
        kanji: "なんと", 
        kana: "なんと", 
        pos: "副词",
        meaning: "多么，何等（表示惊叹）；竟然",
        example_jp: "なんと美しい景色なのだろう。",
        example_cn: "多么美丽的景色啊。"
    },
    { 
        id: 694, 
        word: "ありのまま", 
        kanji: "有りの儘", 
        kana: "ありのまま", 
        pos: "名词 / 副词",
        meaning: "如实，按原样，不加掩饰",
        example_jp: "事件の状況をありのままに警察に話した。",
        example_cn: "把案件的情况如实地向警察讲述了。"
    },
    { 
        id: 695, 
        word: "ことによると", 
        kanji: "ことによると", 
        kana: "ことによると", 
        pos: "副词",
        meaning: "（后接推测词「かもしれない」等）可能，或许",
        example_jp: "ことによると、来月は海外出張になるかもしれない。",
        example_cn: "可能下个月要去海外出差。"
    },
    { 
        id: 696, 
        word: "すぼまる", 
        kanji: "窄まる", 
        kana: "すぼまる / つぼまる", 
        pos: "自动词・五段",
        meaning: "变窄，收缩，聚拢",
        example_jp: "このズボンは、足首に向かって裾がすぼまっている。",
        example_cn: "这条裤子的裤腿向脚踝处收窄。"
    },
    { 
        id: 697, 
        word: "のけぞる", 
        kanji: "仰け反る", 
        kana: "のけぞる", 
        pos: "自动词・五段",
        meaning: "向后仰；（因惊讶、大笑等）后仰",
        example_jp: "突然の大きな音に驚いて、のけぞってしまった。",
        example_cn: "被突然的巨响吓了一跳，身子向后仰了过去。"
    },
    { 
        id: 698, 
        word: "〜ぐるみ", 
        kanji: "〜ぐるみ", 
        kana: "〜ぐるみ", 
        pos: "后缀",
        meaning: "全...，举...（连同整体在内）",
        example_jp: "この地域では、町ぐるみで防犯対策に取り組んでいる。",
        example_cn: "在这个地区，全镇都在共同致力于防范对策。"
    },
    { 
        id: 699, 
        word: "にわかあめ", 
        kanji: "俄雨", 
        kana: "にわかあめ", 
        pos: "名词",
        meaning: "阵雨，骤雨",
        example_jp: "出かけようとしたら、にわか雨が降ってきた。",
        example_cn: "正要出门时，突然下起了阵雨。"
    },
    { 
        id: 700, 
        word: "いぶかしい", 
        kanji: "訝しい", 
        kana: "いぶかしい", 
        pos: "イ形容词",
        meaning: "可疑的，令人怀疑的，奇怪的",
        example_jp: "彼の行動には、どうも訝しい点がある。",
        example_cn: "他的行动总是让人觉得有些可疑之处。"
    },
{ 
        id: 701, 
        word: "さわさわ", 
        kanji: "さわさわ", 
        kana: "さわさわ", 
        pos: "副词",
        meaning: "（风吹树叶等的）沙沙声；心情爽朗",
        example_jp: "風が吹いて、木々の葉がさわさわと音を立てた。",
        example_cn: "风吹过，树叶发出沙沙的声响。"
    },
    { 
        id: 702, 
        word: "どさどさ", 
        kanji: "どさどさ", 
        kana: "どさどさ", 
        pos: "副词",
        meaning: "（沉重物品大量落下的）扑通扑通，哗啦哗啦",
        example_jp: "トラックから荷物をどさどさと下ろす。",
        example_cn: "把货物从卡车上哗啦哗啦地大量卸下来。"
    },
    { 
        id: 703, 
        word: "ぞろり", 
        kanji: "ぞろり", 
        kana: "ぞろり", 
        pos: "副词",
        meaning: "（衣服等）拖长貌；华丽，光彩照人",
        example_jp: "彼女はぞろりとしたドレスを着て現れた。",
        example_cn: "她穿着一袭华丽拖地的长裙出现了。"
    },
    { 
        id: 704, 
        word: "それゆえ", 
        kanji: "其れ故", 
        kana: "それゆえ", 
        pos: "接续词",
        meaning: "因此，所以（多用于书面语）",
        example_jp: "彼は誠実である。其れ故、誰からも信頼されている。",
        example_cn: "他很诚实。因此，受到了所有人的信赖。"
    },
    { 
        id: 705, 
        word: "もしかして", 
        kanji: "若しかして", 
        kana: "もしかして", 
        pos: "副词",
        meaning: "莫非，难道（后常接疑问或推测）",
        example_jp: "もしかして、私に嘘をついているのではないですか。",
        example_cn: "难道说，你是不是在对我撒谎？"
    },
    { 
        id: 706, 
        word: "またがる", 
        kanji: "跨がる", 
        kana: "またがる", 
        pos: "自动词・五段",
        meaning: "跨越，横跨；骑（马等）；拖延，跨及（时间、领域）",
        example_jp: "このプロジェクトは数年に跨がる大規模なものだ。",
        example_cn: "这个项目是横跨数年的大规模项目。"
    },
    { 
        id: 707, 
        word: "もさもさ", 
        kanji: "もさもさ", 
        kana: "もさもさ", 
        pos: "副词 / 自动词・サ变",
        meaning: "毛发浓密杂乱；动作迟钝，慢吞吞",
        example_jp: "髪を切っていないので、頭がもさもさしている。",
        example_cn: "因为没剪头发，脑袋上杂乱蓬松的。"
    },
    { 
        id: 708, 
        word: "こぎつける", 
        kanji: "漕ぎ着ける", 
        kana: "こぎつける", 
        pos: "自动词・一段",
        meaning: "好不容易达到（某种目标或阶段）",
        example_jp: "苦労の末、ついに契約に漕ぎ着けた。",
        example_cn: "历经辛苦，终于成功签订了合约。"
    },
    { 
        id: 709, 
        word: "ゆがむ", 
        kanji: "歪む", 
        kana: "ゆがむ", 
        pos: "自动词・五段",
        meaning: "歪斜，扭曲；（心理、思想）不端正",
        example_jp: "強い圧力がかかって、鉄の枠が歪んでしまった。",
        example_cn: "受到强压，铁框扭曲变形了。"
    },
    { 
        id: 710, 
        word: "だぶだぶ", 
        kanji: "だぶだぶ", 
        kana: "だぶだぶ", 
        pos: "副词 / ナ形容词",
        meaning: "肥大，宽松（衣服）；液体满溢晃动",
        example_jp: "兄のお下がりなので、このズボンはだぶだぶだ。",
        example_cn: "因为是哥哥穿旧传下来的，所以这条裤子很肥大。"
    },
    { 
        id: 711, 
        word: "うんざり", 
        kanji: "うんざり", 
        kana: "うんざり", 
        pos: "副词 / 自动词・サ变",
        meaning: "厌烦，腻烦，倒胃口",
        example_jp: "毎日のように同じ料理を出されて、すっかりうんざりした。",
        example_cn: "每天都端出一样的菜，彻底倒胃口了。"
    },
    { 
        id: 712, 
        word: "ねた", 
        kanji: "ねた / ネタ", 
        kana: "ねた", 
        pos: "名词",
        meaning: "（新闻、小说的）素材，话题；证据；（寿司的）配料",
        example_jp: "明日のスピーチのネタ（話題）が思いつかない。",
        example_cn: "想不出明天演讲的素材（话题）。"
    },
    { 
        id: 713, 
        word: "たかが", 
        kanji: "高が", 
        kana: "たかが", 
        pos: "副词",
        meaning: "充其量，顶多，只不过（含有轻视意味）",
        example_jp: "高が一度の失敗で、そんなに落ち込むことはない。",
        example_cn: "只不过是一次失败，没必要那么失落。"
    },
    { 
        id: 714, 
        word: "さばさば", 
        kanji: "さばさば", 
        kana: "さばさば", 
        pos: "副词 / 自动词・サ变",
        meaning: "性格爽朗，直率；心情舒畅",
        example_jp: "彼女はさばさばした性格で、誰とでもすぐに打ち解ける。",
        example_cn: "她性格爽朗直率，跟谁都能马上熟络起来。"
    },
    { 
        id: 715, 
        word: "さぞ", 
        kanji: "嘸", 
        kana: "さぞ", 
        pos: "副词",
        meaning: "（后接推测词）想必，一定",
        example_jp: "こんなに立派な家を建てるなんて、さぞ苦労されたことでしょう。",
        example_cn: "能建起这么气派的房子，想必吃了不少苦吧。"
    },
    { 
        id: 716, 
        word: "ちやほや", 
        kanji: "ちやほや", 
        kana: "ちやほや", 
        pos: "副词 / 他动词・サ变",
        meaning: "溺爱，奉承，捧场",
        example_jp: "彼女は周りの男性からちやほやされて育った。",
        example_cn: "她在周围男性的奉承和捧场中长大。"
    },
    { 
        id: 717, 
        word: "さもないと", 
        kanji: "然もないと", 
        kana: "さもないと", 
        pos: "接续词",
        meaning: "不然的话，否则（同そうしないと）",
        example_jp: "早く出発しよう。さもないと終電に乗り遅れるぞ。",
        example_cn: "快点出发吧。否则赶不上末班车了。"
    },
    { 
        id: 718, 
        word: "ひいては", 
        kanji: "延いては", 
        kana: "ひいては", 
        pos: "副词",
        meaning: "进而，不仅...甚至...，推而广之",
        example_jp: "個人の努力が、ひいては社会全体の発展に繋がる。",
        example_cn: "个人的努力，进而会联系到整个社会的发展。"
    },
    { 
        id: 719, 
        word: "いかに", 
        kanji: "如何に", 
        kana: "いかに", 
        pos: "副词",
        meaning: "如何，怎样；（接「ても」等）无论多么",
        example_jp: "いかに困難な状況であっても、決して諦めない。",
        example_cn: "无论处于多么困难的状况，也绝不放弃。"
    },
    { 
        id: 720, 
        word: "ちゃらける", 
        kanji: "ちゃらける", 
        kana: "ちゃらける", 
        pos: "自动词・一段",
        meaning: "开玩笑，戏弄，轻浮",
        example_jp: "真面目な話をしているのだから、ちゃらけるのはやめなさい。",
        example_cn: "在说正经事呢，别开玩笑（态度轻浮）了。"
    },
    { 
        id: 721, 
        word: "ぱさぱさ", 
        kanji: "ぱさぱさ", 
        kana: "ぱさぱさ", 
        pos: "副词 / ナ形容词",
        meaning: "干巴巴，松散，无光泽",
        example_jp: "このパンは水分が飛んで、ぱさぱさしている。",
        example_cn: "这块面包水分流失，干巴巴的。"
    },
    { 
        id: 722, 
        word: "しゃれる", 
        kanji: "洒落る", 
        kana: "しゃれる", 
        pos: "自动词・一段",
        meaning: "别致，时髦，俏皮；开玩笑",
        example_jp: "彼はいつも洒落た服を着ている。",
        example_cn: "他总是穿着时髦别致的衣服。"
    },
    { 
        id: 723, 
        word: "くにゃくにゃ / ぐにゃぐにゃ", 
        kanji: "くにゃくにゃ / ぐにゃぐにゃ", 
        kana: "くにゃくにゃ", 
        pos: "副词 / ナ形容词",
        meaning: "软绵绵，弯弯曲曲，扭曲貌",
        example_jp: "熱でプラスチックの定規がぐにゃぐにゃに曲がった。",
        example_cn: "因为高温，塑料尺子被烤得软绵绵地弯曲了。"
    },
    { 
        id: 724, 
        word: "くすくす", 
        kanji: "くすくす", 
        kana: "くすくす", 
        pos: "副词",
        meaning: "窃笑，偷笑",
        example_jp: "私の失敗を見て、女子社員たちがくすくす笑っている。",
        example_cn: "看到我的失误，女员工们在偷偷地笑。"
    },
    { 
        id: 725, 
        word: "せせらぎ", 
        kanji: "せせらぎ", 
        kana: "せせらぎ", 
        pos: "名词",
        meaning: "浅滩；潺潺流水声",
        example_jp: "川のせせらぎを聞きながら、静かに目を閉じる。",
        example_cn: "一边听着河水的潺潺声，一边静静地闭上眼睛。"
    },
    { 
        id: 726, 
        word: "でれでれ", 
        kanji: "でれでれ", 
        kana: "でれでれ", 
        pos: "副词 / 自动词・サ变",
        meaning: "色迷迷，讨好貌；松懈，懒散",
        example_jp: "綺麗な女性を前にして、でれでれしている。",
        example_cn: "在美女面前，色迷迷地献殷勤。"
    },
    { 
        id: 727, 
        word: "ぱらぱら", 
        kanji: "ぱらぱら", 
        kana: "ぱらぱら", 
        pos: "副词 / 自动词・サ变",
        meaning: "淅淅沥沥；哗啦哗啦（翻书）；稀稀拉拉",
        example_jp: "本屋で雑誌をぱらぱらと立ち読みする。",
        example_cn: "在书店里哗啦哗啦地翻着杂志站着看。"
    },
    { 
        id: 728, 
        word: "ひょいと", 
        kanji: "ひょいと", 
        kana: "ひょいと", 
        pos: "副词",
        meaning: "轻松地，轻易地；突然",
        example_jp: "彼は重い荷物をひょいと持ち上げた。",
        example_cn: "他轻而易举地举起了沉重的行李。"
    },
    { 
        id: 729, 
        word: "ねじまげる", 
        kanji: "捻じ曲げる", 
        kana: "ねじまげる", 
        pos: "他动词・一段",
        meaning: "弄弯，扭曲；歪曲（事实等）",
        example_jp: "自己都合で事実を捻じ曲げて解釈してはいけない。",
        example_cn: "不能为了自身的方便而歪曲事实进行解释。"
    },
    { 
        id: 730, 
        word: "もろに", 
        kanji: "もろに", 
        kana: "もろに", 
        pos: "副词",
        meaning: "直接地，迎面，彻底地",
        example_jp: "台風の影響をもろに受けて、家屋が倒壊した。",
        example_cn: "直接受到了台风的冲击，房屋倒塌了。"
    },
    { 
        id: 731, 
        word: "ほっそり", 
        kanji: "ほっそり", 
        kana: "ほっそり", 
        pos: "副词 / 自动词・サ变",
        meaning: "纤细，瘦削",
        example_jp: "彼女はほっそりとした体つきをしている。",
        example_cn: "她体态纤细苗条。"
    },
    { 
        id: 732, 
        word: "おかみさん", 
        kanji: "お上さん", 
        kana: "おかみさん", 
        pos: "名词",
        meaning: "老板娘，房东太太，老板的妻子",
        example_jp: "旅館のお上さんが笑顔で出迎えてくれた。",
        example_cn: "旅馆的老板娘满面笑容地出来迎接。"
    },
    { 
        id: 733, 
        word: "あくどい", 
        kanji: "あくどい", 
        kana: "あくどい", 
        pos: "イ形容词",
        meaning: "恶毒的，奸诈的；（颜色、味道）过于浓艳，刺眼",
        example_jp: "消費者を騙すようなあくどい商法は許せない。",
        example_cn: "无法原谅那种欺骗消费者的奸诈商业手段。"
    },
    { 
        id: 734, 
        word: "ないがしろ", 
        kanji: "蔑ろ", 
        kana: "ないがしろ", 
        pos: "名词",
        meaning: "无视，轻视，怠慢（多接「にする」）",
        example_jp: "目上の人を蔑ろにするような態度は良くない。",
        example_cn: "怠慢（轻视）长辈的态度是不好的。"
    },
    { 
        id: 735, 
        word: "どんぞこ", 
        kanji: "どん底", 
        kana: "どんぞこ", 
        pos: "名词",
        meaning: "最底层，极度深渊（多指极差的境遇）",
        example_jp: "人生のどん底を味わったが、そこから這い上がった。",
        example_cn: "体会过人生的最谷底，但又从那里爬了上来。"
    },
    { 
        id: 736, 
        word: "とがる", 
        kanji: "尖る", 
        kana: "とがる", 
        pos: "自动词・五段",
        meaning: "尖锐；（神经等）敏锐；过敏，神经质；声音尖锐",
        example_jp: "鉛筆の先が鋭く尖っている。",
        example_cn: "铅笔的笔尖削得非常尖锐。"
    },
    { 
        id: 737, 
        word: "おろそか", 
        kanji: "疎か", 
        kana: "おろそか", 
        pos: "ナ形容词",
        meaning: "疏忽，草率，马虎（多接「にする」）",
        example_jp: "アルバイトに夢中で、学業を疎かにしてしまった。",
        example_cn: "沉迷于打工，结果疏忽了学业。"
    },
    { 
        id: 738, 
        word: "いじいじ", 
        kanji: "いじいじ", 
        kana: "いじいじ", 
        pos: "副词 / 自动词・サ变",
        meaning: "畏缩，踌躇，不爽快",
        example_jp: "いつまでもいじいじ悩んでいないで、はっきり言え。",
        example_cn: "别一直扭扭捏捏地烦恼，有话直说。"
    },
    { 
        id: 739, 
        word: "ちらちら", 
        kanji: "ちらちら", 
        kana: "ちらちら", 
        pos: "副词 / 自动词・サ变",
        meaning: "雪花飘飘；火光闪烁；时不时地瞥（看）",
        example_jp: "彼はこちらの様子をちらちらと窺っている。",
        example_cn: "他正在时不时地瞥眼观察我们这边的情况。"
    },
    { 
        id: 740, 
        word: "どきっと", 
        kanji: "どきっと", 
        kana: "どきっと", 
        pos: "副词 / 自动词・サ变",
        meaning: "（因突然惊吓、喜悦等）心头一惊",
        example_jp: "図星を指されて、思わずどきっとした。",
        example_cn: "被说中心事，不由得心头一惊。"
    },
    { 
        id: 741, 
        word: "はばたく", 
        kanji: "羽撃く / 翔く", 
        kana: "はばたく", 
        pos: "自动词・五段",
        meaning: "振翅高飞；大展宏图",
        example_jp: "若者たちには、世界へ向けて大きく翔いてほしい。",
        example_cn: "希望年轻人们能向着世界展翅高飞（大展宏图）。"
    },
    { 
        id: 742, 
        word: "くどくど", 
        kanji: "くどくど", 
        kana: "くどくど", 
        pos: "副词",
        meaning: "啰啰嗦嗦，絮絮叨叨",
        example_jp: "終わったミスをくどくどと責め立てる。",
        example_cn: "对已经发生的失误啰啰嗦嗦地责备个没完。"
    },
    { 
        id: 743, 
        word: "かつて", 
        kanji: "曽て", 
        kana: "かつて", 
        pos: "副词",
        meaning: "曾经，以前；（后接否定）从未",
        example_jp: "ここは曽て、多くの人で賑わう繁華街だった。",
        example_cn: "这里曾经是一条熙熙攘攘的繁华街道。"
    },
    { 
        id: 744, 
        word: "おっちょこちょい", 
        kanji: "おっちょこちょい", 
        kana: "おっちょこちょい", 
        pos: "名词 / ナ形容词",
        meaning: "冒失鬼，粗心大意，轻浮",
        example_jp: "彼は本当におっちょこちょいで、よく忘れ物をする。",
        example_cn: "他真是个冒失鬼，经常忘东西。"
    },
    { 
        id: 745, 
        word: "もったいらしい", 
        kanji: "勿体らしい", 
        kana: "もったいらしい", 
        pos: "イ形容词",
        meaning: "煞有介事，故弄玄虚，装模作样",
        example_jp: "勿体らしい態度で、なかなか結論を言わない。",
        example_cn: "摆出一副故弄玄虚的架势，迟迟不说结论。"
    },
    { 
        id: 746, 
        word: "すねる", 
        kanji: "拗ねる", 
        kana: "すねる", 
        pos: "自动词・一段",
        meaning: "闹别扭，乖僻",
        example_jp: "おもちゃを買ってもらえず、子供が拗ねている。",
        example_cn: "因为没给买玩具，孩子正在闹别扭。"
    },
    { 
        id: 747, 
        word: "たたずむ", 
        kanji: "佇む", 
        kana: "たたずむ", 
        pos: "自动词・五段",
        meaning: "伫立，长时间站立",
        example_jp: "海辺に一人佇み、夕日を眺める。",
        example_cn: "独自伫立在海边，眺望夕阳。"
    },
    { 
        id: 748, 
        word: "がっちり", 
        kanji: "がっちり", 
        kana: "がっちり", 
        pos: "副词 / 自动词・サ变",
        meaning: "结实，牢固；精明，不吃亏",
        example_jp: "彼はがっちりした体格で、スポーツマンらしい。",
        example_cn: "他体格结实，很有运动员的风范。"
    },
    { 
        id: 749, 
        word: "とぼとぼ", 
        kanji: "とぼとぼ", 
        kana: "とぼとぼ", 
        pos: "副词",
        meaning: "蹒跚，步履艰难，没精打采地走",
        example_jp: "試合に負けて、とぼとぼと家路についた。",
        example_cn: "比赛输了，没精打采地走在回家的路上。"
    },
    { 
        id: 750, 
        word: "やるせない", 
        kanji: "遣る瀬無い", 
        kana: "やるせない", 
        pos: "イ形容词",
        meaning: "排遣不开，郁闷，凄凉，无奈",
        example_jp: "彼の悲しい生い立ちを聞いて、遣る瀬無い気持ちになった。",
        example_cn: "听到他悲惨的身世，我感到一阵凄凉与无奈。"
    },
{ 
        id: 751, 
        word: "おつかい", 
        kanji: "お使い", 
        kana: "おつかい", 
        pos: "名词",
        meaning: "跑腿，去买东西（多指派小孩或下属去）",
        example_jp: "母に頼まれて、近くのスーパーまでお使いに行った。",
        example_cn: "受母亲嘱托，去附近的超市跑了趟腿。"
    },
    { 
        id: 752, 
        word: "ひょっとして", 
        kanji: "ひょっとして", 
        kana: "ひょっとして", 
        pos: "副词",
        meaning: "（后接推测）难道说，莫非，万一",
        example_jp: "ひょっとして、私の言ったことで怒っているの？",
        example_cn: "难道说，你因为我说的话生气了吗？"
    },
    { 
        id: 753, 
        word: "がくがく", 
        kanji: "がくがく", 
        kana: "がくがく", 
        pos: "副词 / 自动词・サ变",
        meaning: "（因恐惧、疲劳引起关节）发抖，打哆嗦；（连接处）松动",
        example_jp: "高いところに立つと、恐怖で膝ががくがくした。",
        example_cn: "站在高处，吓得膝盖直打哆嗦（腿发软）。"
    },
    { 
        id: 754, 
        word: "なよなよ", 
        kanji: "なよなよ", 
        kana: "なよなよ", 
        pos: "副词 / 自动词・サ变",
        meaning: "软弱无力，纤弱，（态度）缺乏阳刚之气",
        example_jp: "彼はなよなよしていて、頼りない印象を受ける。",
        example_cn: "他总是软弱无力的样子，给人一种靠不住的印象。"
    },
    { 
        id: 755, 
        word: "つけつけ", 
        kanji: "つけつけ", 
        kana: "つけつけ", 
        pos: "副词",
        meaning: "（说话态度）带刺地，毫不客气地，生硬顶撞",
        example_jp: "親の心配に対して、反抗期の息子はつけつけと言い返した。",
        example_cn: "面对父母的担心，处于叛逆期的儿子毫不客气地顶撞了回去。"
    },
    { 
        id: 756, 
        word: "ちりちり", 
        kanji: "ちりちり", 
        kana: "ちりちり", 
        pos: "副词 / 自动词・サ变",
        meaning: "卷曲状（毛发）；烧焦蜷缩；铃声细碎",
        example_jp: "火に近づきすぎて、髪の毛がちりちりに焦げてしまった。",
        example_cn: "靠火太近，头发都烧焦卷曲了。"
    },
    { 
        id: 757, 
        word: "さざなみ", 
        kanji: "細波 / 小波 / 漣", 
        kana: "さざなみ", 
        pos: "名词",
        meaning: "微波，涟漪；（人心的）微小动摇，小风波",
        example_jp: "静かな湖面に、風がさざ波を立てている。",
        example_cn: "微风在平静的湖面上吹起阵阵涟漪。"
    },
    { 
        id: 758, 
        word: "なるたけ", 
        kanji: "成る丈", 
        kana: "なるたけ", 
        pos: "副词",
        meaning: "（同なるべく的口语）尽量，尽可能",
        example_jp: "健康のために、なるたけ野菜を食べるようにしている。",
        example_cn: "为了健康，我尽量多吃蔬菜。"
    },
    { 
        id: 759, 
        word: "あっさり", 
        kanji: "あっさり", 
        kana: "あっさり", 
        pos: "副词 / 自动词・サ变",
        meaning: "清淡的；轻易地，干脆地",
        example_jp: "長年の悩みが、彼のひとことであっさりと解決した。",
        example_cn: "多年的烦恼，被他的一句话轻易地解决了。"
    },
    { 
        id: 760, 
        word: "ずけずけ", 
        kanji: "ずけずけ", 
        kana: "ずけずけ", 
        pos: "副词",
        meaning: "毫不顾忌地（触碰痛处、直言不讳），唐突",
        example_jp: "他人のプライバシーにずけずけと踏み込むのは失礼だ。",
        example_cn: "毫不顾忌地干涉他人的隐私是很失礼的。"
    },
    { 
        id: 761, 
        word: "うっすら", 
        kanji: "うっすら", 
        kana: "うっすら", 
        pos: "副词",
        meaning: "隐隐约约，微微，薄薄地",
        example_jp: "朝起きると、庭にうっすらと雪が積もっていた。",
        example_cn: "早晨起床时，院子里积了薄薄的一层雪。"
    },
    { 
        id: 762, 
        word: "すりかえる", 
        kanji: "掏り替える / すり替える", 
        kana: "すりかえる", 
        pos: "他动词・一段",
        meaning: "偷偷调换，掉包；偷换（概念），转移（话题）",
        example_jp: "都合が悪くなると、彼はすぐに論点をすり替える。",
        example_cn: "一遇到不利的情况，他马上就会偷换论点（转移话题）。"
    },
    { 
        id: 763, 
        word: "ひそか", 
        kanji: "密か", 
        kana: "ひそか", 
        pos: "ナ形容词",
        meaning: "秘密地，暗中（多作「密かに」）",
        example_jp: "ライバルの失敗を密かに喜んでしまった。",
        example_cn: "暗中为竞争对手的失败感到高兴。"
    },
    { 
        id: 764, 
        word: "どうのこうの", 
        kanji: "どうのこうの", 
        kana: "どうのこうの", 
        pos: "连语",
        meaning: "说这说那，指手画脚（多含不满情绪）",
        example_jp: "他人のやり方にどうのこうの口出しするべきではない。",
        example_cn: "不应该对他人的做法说三道四（指手画脚）。"
    },
    { 
        id: 765, 
        word: "みすぼらしい", 
        kanji: "見窄らしい", 
        kana: "みすぼらしい", 
        pos: "イ形容词",
        meaning: "破旧的，寒酸的，衣衫褴褛的",
        example_jp: "彼は一流企業の社長なのに、なぜかみすぼらしい格好をしている。",
        example_cn: "他明明是一流企业的社长，却不知为何打扮得很寒酸。"
    },
    { 
        id: 766, 
        word: "あたかも", 
        kanji: "恰も / 宛も", 
        kana: "あたかも", 
        pos: "副词",
        meaning: "宛如，简直好像（常与「～かのように」呼应）",
        example_jp: "彼はその事件を、あたかも自分が体験したかのように語った。",
        example_cn: "他讲述那个事件时，简直就像自己亲身体验过一样。"
    },
    { 
        id: 767, 
        word: "つかつか", 
        kanji: "つかつか", 
        kana: "つかつか", 
        pos: "副词",
        meaning: "（不顾气氛、毫不迟疑地）径直走向前",
        example_jp: "怒った客が、店長のところへつかつかと歩み寄った。",
        example_cn: "愤怒的客人毫不迟疑地径直走向了店长。"
    },
    { 
        id: 768, 
        word: "つぶやく", 
        kanji: "呟く", 
        kana: "つぶやく", 
        pos: "自动词・五段",
        meaning: "嘟哝，喃喃自语，小声嘀咕",
        example_jp: "「どうしてこうなるんだ」と、彼は小さく呟いた。",
        example_cn: "他小声嘟哝着：“为什么会变成这样”。"
    },
    { 
        id: 769, 
        word: "ほどよい", 
        kanji: "程好い", 
        kana: "ほどよい", 
        pos: "イ形容词",
        meaning: "恰到好处，适度",
        example_jp: "健康を維持するためには、程好い運動が必要だ。",
        example_cn: "为了维持健康，适度的运动是必要的。"
    },
    { 
        id: 770, 
        word: "おしめり", 
        kanji: "お湿り", 
        kana: "おしめり", 
        pos: "名词",
        meaning: "（久旱后的）及时雨",
        example_jp: "農作物にとって、今日の雨は恵みのお湿りとなった。",
        example_cn: "对农作物来说，今天的雨成了一场恩赐的及时雨。"
    },
    { 
        id: 771, 
        word: "むさくるしい", 
        kanji: "むさ苦しい", 
        kana: "むさくるしい", 
        pos: "イ形容词",
        meaning: "肮脏的，杂乱无章的（使人看了不舒服）",
        example_jp: "男ばかりのむさ苦しい部屋に、彼女を呼ぶわけにはいかない。",
        example_cn: "我怎么能把她叫到这种全是男人、杂乱肮脏的房间里来呢。"
    },
    { 
        id: 772, 
        word: "すさまじい", 
        kanji: "凄まじい", 
        kana: "すさまじい", 
        pos: "イ形容词",
        meaning: "可怕的，惊人的，猛烈的",
        example_jp: "凄まじい勢いで炎が燃え広がり、家を飲み込んだ。",
        example_cn: "火焰以惊人的势头蔓延开来，吞噬了房屋。"
    },
    { 
        id: 773, 
        word: "くぐりぬける", 
        kanji: "潜り抜ける", 
        kana: "くぐりぬける", 
        pos: "他动词・一段",
        meaning: "钻过去，穿过去；挣脱（困境），闯过",
        example_jp: "会社の倒産という危機を、社員一丸となって潜り抜けた。",
        example_cn: "员工们团结一致，闯过了公司破产的危机。"
    },
    { 
        id: 774, 
        word: "いかほど", 
        kanji: "如何ほど", 
        kana: "いかほど", 
        pos: "副词 / 名词",
        meaning: "（书面/客套语）多少（同どのくらい）",
        example_jp: "ご心痛は如何ほどかと、お察しいたします。",
        example_cn: "我能体谅您内心有多么的悲痛（心痛有多少）。"
    },
    {
        id: 775,
        word: "さぞかし",
        kanji: "嘸かし",
        kana: "さぞかし",
        pos: "副词",
        meaning: "想必，定然（同：さぞ）",
        example_jp: "これだけの準備をしたのだから、さぞかし素晴らしい大会になるだろう。",
        example_cn: "做了这么充分的准备，想必这一定会是一场精彩的大会吧。"
    },
    {
        id: 776,
        word: "すさまじい",
        kanji: "凄まじい",
        kana: "すさまじい",
        pos: "形容词（い形容词）",
        meaning: "惊人的，极其可怕的，猛烈的",
        example_jp: "人工知能は凄まじいスピードで進化し続けている。",
        example_cn: "人工智能正以惊人的速度持续进化着。"
    },
    {
        id: 777,
        word: "やがれ",
        kanji: "やがれ",
        kana: "やがれ",
        pos: "补助动词（命令形）",
        meaning: "（接在动词连用形等后，表轻蔑、骂詈）给老子...，...去吧",
        example_jp: "俺の目の前からとっとと消えやがれ！",
        example_cn: "赶紧从老子眼前消失！"
    },
    {
        id: 778,
        word: "ぽかぽか",
        kanji: "ぽかぽか",
        kana: "ぽかぽか",
        pos: "副词 / 自动词・サ变",
        meaning: "暖洋洋地；（打人）砰砰地",
        example_jp: "春の陽気で体がぽかぽか（と）してきた。",
        example_cn: "春日和煦，身体变得暖洋洋的。"
    },
    {
        id: 779,
        word: "そっけない",
        kanji: "素っ気ない",
        kana: "そっけない",
        pos: "形容词（い形容词）",
        meaning: "冷淡的，不客气的，无情的",
        example_jp: "彼女に話しかけたが、素っ気ない返事しか返ってこなかった。",
        example_cn: "我和她搭话，她却只给了一个冷冰冰的回答。"
    },
    {
        id: 780,
        word: "ほとばしる",
        kanji: "迸る",
        kana: "ほとばしる",
        pos: "自动词・五段",
        meaning: "迸发，喷涌，飞溅出",
        example_jp: "若者の熱い思いが言葉となって迸った。",
        example_cn: "年轻人的满腔热血化作语言喷涌而出。"
    },
    {
        id: 781,
        word: "からかう",
        kanji: "揶揄う",
        kana: "からかう",
        pos: "他动词・五段",
        meaning: "嘲弄，戏弄，开玩笑",
        example_jp: "彼はよくクラスメートを揶揄って楽しんでいる。",
        example_cn: "他经常靠戏弄同学来取乐。"
    },
    {
        id: 782,
        word: "まっしぐら",
        kanji: "驀直（極稀）",
        kana: "まっしぐら",
        pos: "副词 / 形容动词（な形容词）",
        meaning: "径直，猛冲，勇往直前（汉字写法极少见）",
        example_jp: "目標の達成に向かって驀直に進む。",
        example_cn: "朝着达成目标勇往直前地迈进。"
    },
    {
        id: 783,
        word: "はまる",
        kanji: "嵌まる",
        kana: "はまる",
        pos: "自动词・五段",
        meaning: "契合，陷入（困境），热衷于，沉迷",
        example_jp: "最近、休日にキャンプへ行くことにすっかり嵌まっている。",
        example_cn: "最近我完全迷上了休息日去露营。"
    },
    {
        id: 784,
        word: "まばゆい",
        kanji: "眩い",
        kana: "まばゆい",
        pos: "形容词（い形容词）",
        meaning: "光彩夺目的，耀眼的",
        example_jp: "彼女は眩いばかりの美しさを放っていた。",
        example_cn: "她散发着光彩夺目的美丽。"
    },
    {
        id: 785,
        word: "ささやき",
        kanji: "囁き",
        kana: "ささやき",
        pos: "名词",
        meaning: "低语，私语，传闻",
        example_jp: "静かな森の中で、風の囁きだけが聞こえる。",
        example_cn: "在安静的森林里，只能听到微风的低语。"
    },
    {
        id: 786,
        word: "かましたろや",
        kanji: "噛ましたろや",
        kana: "かましたろや",
        pos: "词组（关西方言/俗语）",
        meaning: "给点颜色看看吧，干他一仗吧（「かましてやろうか」的方言变形）",
        example_jp: "あいつ生意気だから、一発噛ましたろや。",
        example_cn: "那家伙太嚣张了，咱们去给他点颜色看看吧。"
    },
    {
        id: 787,
        word: "くよくよ",
        kanji: "無し",
        kana: "くよくよ",
        pos: "副词 / 自动词・サ变",
        meaning: "烦恼，想不开，愁眉不展（注：汉字「無し」疑为生词本提取误差，通常写作平假名）",
        example_jp: "過ぎたことをいつまでもくよくよ（と）気にするな。",
        example_cn: "不要对过去的事情总是耿耿于怀。"
    },
    {
        id: 788,
        word: "かざして",
        kanji: "翳して",
        kana: "かざして",
        pos: "他动词・五段（て形）",
        meaning: "举起，遮挡，靠近（原形：翳す）",
        example_jp: "手を翳して眩しい太陽の光を遮った。",
        example_cn: "举起手遮挡住了耀眼的阳光。"
    },
    {
        id: 789,
        word: "くよくよ",
        kanji: "无",
        kana: "くよくよ",
        pos: "副词 / 自动词・サ变",
        meaning: "烦恼，想不开（注：同787，汉字「无」疑为误差或特定借字）",
        example_jp: "一度失敗したくらいで、くよくよするんじゃない。",
        example_cn: "别因为一次失败就愁眉苦脸的。"
    },
    {
        id: 790,
        word: "がむしゃら",
        kanji: "我武者羅",
        kana: "がむしゃら",
        pos: "名词 / 形容动词（な形容词）",
        meaning: "不顾一切，鲁莽，拼命",
        example_jp: "夢を叶えるために、我武者羅に頑張るしかない。",
        example_cn: "为了实现梦想，只能不顾一切地努力拼搏。"
    },
    {
        id: 791,
        word: "あらゆる",
        kanji: "有らゆる",
        kana: "あらゆる",
        pos: "连体词",
        meaning: "所有的，一切的",
        example_jp: "あらゆる手段を尽くして問題の解決に当たる。",
        example_cn: "想尽一切办法来着手解决问题。"
    },
    {
        id: 792,
        word: "あくまで",
        kanji: "飽くまで",
        kana: "あくまで",
        pos: "副词",
        meaning: "到底，彻底，始终",
        example_jp: "これは飽くまで私個人の推測に過ぎません。",
        example_cn: "这终究只是我个人的推测而已。"
    },
    {
        id: 793,
        word: "もったいない",
        kanji: "勿体無い",
        kana: "もったいない",
        pos: "形容词（い形容词）",
        meaning: "可惜的，浪费的；不敢当的",
        example_jp: "まだ使えるパソコンを捨てるなんて、勿体無い。",
        example_cn: "还能用的电脑居然要扔掉，真是太可惜了。"
    },
    {
        id: 794,
        word: "あるがままに",
        kanji: "在るが儘に",
        kana: "あるがままに",
        pos: "词组 / 副词",
        meaning: "如实地，顺其自然地，保持原样地",
        example_jp: "自分を無理に飾らず、在るが儘に生きることが大切だ。",
        example_cn: "不要勉强伪装自己，顺其自然地生活是很重要的。"
    },
];
const kundokuBank = [
    { 
        id: 1, 
        word: "かつ", 
        kanji: "且つ", 
        kana: "かつ", 
        pos: "接续词 / 副词",
        meaning: "并且，而且；同时",
        example_jp: "彼は優秀な研究者であり、且つ良き指導者でもある。",
        example_cn: "他是一名优秀的研究者，同时也是一位好导师。"
    },
    { 
        id: 2, 
        word: "なのる", 
        kanji: "名乗る", 
        kana: "なのる", 
        pos: "自动词・五段",
        meaning: "自报姓名，自称",
        example_jp: "電話に出る時は、まず自分の名前を名乗るべきだ。",
        example_cn: "接电话时，应该先报上自己的名字。"
    },
    { 
        id: 3, 
        word: "うちわ", 
        kanji: "団扇", 
        kana: "うちわ", 
        pos: "名词",
        meaning: "团扇，圆扇",
        example_jp: "暑いので、団扇でパタパタとあおぐ。",
        example_cn: "因为很热，用团扇啪嗒啪嗒地扇风。"
    },
    { 
        id: 4, 
        word: "おそれいる", 
        kanji: "恐れ入る", 
        kana: "おそれいる", 
        pos: "自动词・五段",
        meaning: "实在抱歉，不敢当；佩服，折服",
        example_jp: "わざわざ遠方からお越しいただき、恐れ入ります。",
        example_cn: "劳驾您特意从远方赶来，实在是不敢当（抱歉）。"
    },
    { 
        id: 5, 
        word: "ぬけだす", 
        kanji: "抜け出す", 
        kana: "ぬけだす", 
        pos: "自动词・五段",
        meaning: "偷偷溜走；摆脱（困境）；脱颖而出",
        example_jp: "つまらない会議からこっそり抜け出した。",
        example_cn: "从无聊的会议中偷偷溜走了。"
    },
    { 
        id: 6, 
        word: "おやごころ", 
        kanji: "親心", 
        kana: "おやごころ", 
        pos: "名词",
        meaning: "父母心，天下父母心",
        example_jp: "いくつになっても子供の将来を心配するのは親心というものだ。",
        example_cn: "无论孩子多大都会担心他们的未来，这就是天下父母心。"
    },
    { 
        id: 7, 
        word: "そうじて", 
        kanji: "総じて", 
        kana: "そうじて", 
        pos: "副词",
        meaning: "总的来说，一般来说",
        example_jp: "今年の試験問題は、総じて去年よりも易しかった。",
        example_cn: "今年的考试题总的来说比去年容易。"
    },
    { 
        id: 8, 
        word: "らくがき", 
        kanji: "落書き", 
        kana: "らくがき", 
        pos: "名词 / 自动词・サ变",
        meaning: "涂鸦，乱写乱画",
        example_jp: "公共の壁に落書きをしてはいけない。",
        example_cn: "不能在公共墙壁上乱涂乱画。"
    },
    { 
        id: 9, 
        word: "まどう", 
        kanji: "惑う", 
        kana: "まどう", 
        pos: "自动词・五段",
        meaning: "迷惑，困惑，不知所措",
        example_jp: "どちらの道に進むべきか、心が激しく惑う。",
        example_cn: "不知该走哪条路，内心十分困惑。"
    },
    { 
        id: 10, 
        word: "かり", 
        kanji: "仮", 
        kana: "かり", 
        pos: "名词",
        meaning: "临时，暂时，假设",
        example_jp: "これはまだ仮の契約なので、後日正式な手続きが必要です。",
        example_cn: "这还只是临时合同，日后需要办理正式手续。"
    },
    { 
        id: 11, 
        word: "いきごみ", 
        kanji: "意気込み", 
        kana: "いきごみ", 
        pos: "名词",
        meaning: "干劲，热情，决心",
        example_jp: "新プロジェクトに対する彼の意気込みは素晴らしい。",
        example_cn: "他对新项目的干劲（热情）非常棒。"
    },
    { 
        id: 12, 
        word: "だしおしみ", 
        kanji: "出し惜しみ", 
        kana: "だしおしみ", 
        pos: "名词 / 自动词・サ变",
        meaning: "吝啬，舍不得拿出（金钱、力量、信息等）",
        example_jp: "情報を出し惜しみせず、チーム全体で共有すべきだ。",
        example_cn: "不应该把信息藏着掖着，应该在整个团队中共享。"
    },
    { 
        id: 13, 
        word: "にえきらない", 
        kanji: "煮え切らない", 
        kana: "にえきらない", 
        pos: "イ形容词",
        meaning: "含糊其辞，犹豫不决，不干脆",
        example_jp: "結婚について何度聞いても、彼は煮え切らない態度をとる。",
        example_cn: "关于结婚的事无论问多少次，他都采取含糊其辞（不干脆）的态度。"
    },
    { 
        id: 14, 
        word: "けんとう", 
        kanji: "見当", 
        kana: "けんとう", 
        pos: "名词",
        meaning: "估计，推测；方向，大概",
        example_jp: "犯人がどこへ逃げたのか、全く見当がつかない。",
        example_cn: "犯人逃到哪里去了，完全毫无头绪（猜不透）。"
    },
    { 
        id: 15, 
        word: "あわせて", 
        kanji: "併せて", 
        kana: "あわせて", 
        pos: "副词 / 接续词",
        meaning: "同时，并且，一并",
        example_jp: "退職の挨拶と併せて、今後の連絡先をお知らせいたします。",
        example_cn: "在致以辞职问候的同时，一并告知您今后的联系方式。"
    },
    { 
        id: 16, 
        word: "みなもと", 
        kanji: "源", 
        kana: "みなもと", 
        pos: "名词",
        meaning: "源头，根源，本源",
        example_jp: "太陽は地球上のすべての生命の源である。",
        example_cn: "太阳是地球上所有生命的本源。"
    },
    { 
        id: 17, 
        word: "うわまわる", 
        kanji: "上回る", 
        kana: "うわまわる", 
        pos: "自动词・五段",
        meaning: "超过，超出，越过",
        example_jp: "今年の売上は、事前の予想を大きく上回った。",
        example_cn: "今年的销售额大幅超出了事前的预期。"
    },
    { 
        id: 18, 
        word: "ひらてうち", 
        kanji: "平手打ち", 
        kana: "ひらてうち", 
        pos: "名词",
        meaning: "打耳光，扇巴掌",
        example_jp: "あまりの失礼な態度に、思わず平手打ちを食らわせた。",
        example_cn: "面对他极其无礼的态度，不由得给了他一记响亮的耳光。"
    },
    { 
        id: 19, 
        word: "いただき", 
        kanji: "頂", 
        kana: "いただき", 
        pos: "名词",
        meaning: "山顶，顶点",
        example_jp: "苦労の末、ついに山の頂に到達した。",
        example_cn: "历经千辛万苦，终于登上了山顶。"
    },
    { 
        id: 20, 
        word: "よわまる", 
        kanji: "弱まる", 
        kana: "よわまる", 
        pos: "自动词・五段",
        meaning: "变弱，减弱，衰退",
        example_jp: "夜になって、台風の勢いがようやく弱まってきた。",
        example_cn: "到了夜里，台风的势头终于开始减弱了。"
    },
    { 
        id: 21, 
        word: "あんじる", 
        kanji: "案じる", 
        kana: "あんじる", 
        pos: "他动词・上一段",
        meaning: "担心，挂念，思虑",
        example_jp: "遠く離れて暮らす親の健康を案じる。",
        example_cn: "挂念在远方生活的父母的健康。"
    },
    { 
        id: 22, 
        word: "にくしみ", 
        kanji: "憎しみ", 
        kana: "にくしみ", 
        pos: "名词",
        meaning: "憎恨，仇恨",
        example_jp: "彼の心には、裏切った友に対する憎しみが渦巻いていた。",
        example_cn: "他的心中翻滚着对背叛自己的朋友的仇恨。"
    },
    { 
        id: 23, 
        word: "さきざき", 
        kanji: "先々", 
        kana: "さきざき", 
        pos: "名词 / 副词",
        meaning: "将来，未来；所到之处",
        example_jp: "今の楽しさだけでなく、先々のことまで考えて行動しなさい。",
        example_cn: "不要只顾眼前的享乐，要考虑将来的事情再行动。"
    },
    { 
        id: 24, 
        word: "はばむ", 
        kanji: "阻む", 
        kana: "はばむ", 
        pos: "他动词・五段",
        meaning: "阻挡，阻止，妨碍",
        example_jp: "険しい山々が、我々の行く手を阻んでいる。",
        example_cn: "险峻的群山阻挡了我们的去路。"
    },
    { 
        id: 25, 
        word: "また", 
        kanji: "股", 
        kana: "また", 
        pos: "名词",
        meaning: "胯下，大腿内侧；分叉处",
        example_jp: "世界を股にかけて活躍するビジネスマンになりたい。",
        example_cn: "我想成为一名活跃在世界舞台（跨越世界各地）的商人。"
    },
    { 
        id: 26, 
        word: "みさかい", 
        kanji: "見境", 
        kana: "みさかい", 
        pos: "名词",
        meaning: "辨别，区分，理智（多搭配「なく」）",
        example_jp: "彼は怒ると、見境なく人に暴言を吐く。",
        example_cn: "他一生气就不分青红皂白（丧失理智）地对人破口大骂。"
    },
    { 
        id: 27, 
        word: "きみわるい", 
        kanji: "気味悪い", 
        kana: "きみわるい", 
        pos: "イ形容词",
        meaning: "令人毛骨悚然的，恶心的",
        example_jp: "夜中に誰もいない部屋から足音が聞こえて、気味悪かった。",
        example_cn: "半夜从没人的房间里听到脚步声，令人毛骨悚然。"
    },
    { 
        id: 28, 
        word: "つけ", 
        kanji: "付け", 
        kana: "つけ", 
        pos: "名词",
        meaning: "赊账，账单；（过去不良行为的）代价，报应",
        example_jp: "若い頃に無理をした付けが、今になって健康被害として表れた。",
        example_cn: "年轻时乱来的代价，现在作为健康问题显现出来了。"
    },
    { 
        id: 29, 
        word: "はからう", 
        kanji: "計らう", 
        kana: "はからう", 
        pos: "他动词・五段",
        meaning: "斟酌处理，妥善安排，商议",
        example_jp: "皆様が快適に過ごせるよう、ホテル側に適当に計らってもらった。",
        example_cn: "为了让大家住得舒适，让酒店方面进行了妥善的安排。"
    },
    { 
        id: 30, 
        word: "くちがるい", 
        kanji: "口軽い", 
        kana: "くちがるい", 
        pos: "イ形容词",
        meaning: "嘴快，不严实，容易泄密",
        example_jp: "彼は口軽いから、重要な秘密は打ち明けない方がいい。",
        example_cn: "他嘴不严实，最好不要向他透露重要的秘密。"
    },
    { 
        id: 31, 
        word: "じか〜", 
        kanji: "直〜", 
        kana: "じか〜", 
        pos: "接头词",
        meaning: "直接",
        example_jp: "間に人を挟まず、社長と直談判（じかだんぱん）することにした。",
        example_cn: "决定不通过中间人，直接跟社长进行谈判。"
    },
    { 
        id: 32, 
        word: "さしつかえ", 
        kanji: "差し支え", 
        kana: "さしつかえ", 
        pos: "名词",
        meaning: "妨碍，不方便，阻碍",
        example_jp: "お差し支えなければ、ご意見をお聞かせいただけますか。",
        example_cn: "如果不介意（没有不方便）的话，能听听您的意见吗？"
    },
    { 
        id: 33, 
        word: "ちぢめる", 
        kanji: "縮める", 
        kana: "ちぢめる", 
        pos: "他动词・一段",
        meaning: "缩短，缩小，畏缩",
        example_jp: "トップとのタイムの差をあと少しで縮めることができる。",
        example_cn: "只差一点就能缩短与第一名在时间上的差距了。"
    },
    { 
        id: 34, 
        word: "のしあがる", 
        kanji: "伸し上がる", 
        kana: "のしあがる", 
        pos: "自动词・五段",
        meaning: "爬上去，发迹，崭露头角",
        example_jp: "彼は平社員から実力だけで社長に伸し上がった。",
        example_cn: "他仅凭实力从普通员工一路爬到了社长的位置。"
    },
    { 
        id: 35, 
        word: "おけ", 
        kanji: "桶", 
        kana: "おけ", 
        pos: "名词",
        meaning: "桶，木桶",
        example_jp: "お風呂場で木製の桶を使って体を流す。",
        example_cn: "在澡堂用木制的桶冲洗身体。"
    },
    { 
        id: 36, 
        word: "いちじるしい", 
        kanji: "著しい", 
        kana: "いちじるしい", 
        pos: "イ形容词",
        meaning: "显著的，明显的",
        example_jp: "最近のAI技術の進歩には、著しいものがある。",
        example_cn: "最近AI技术的进步十分显著。"
    },
    { 
        id: 37, 
        word: "おさえこむ", 
        kanji: "押さえ込む", 
        kana: "おさえこむ", 
        pos: "他动词・五段",
        meaning: "压住，控制住，压制",
        example_jp: "相手の反撃を完全に押さえ込んで、試合に勝利した。",
        example_cn: "完全压制住了对手的反击，赢得了比赛。"
    },
    { 
        id: 38, 
        word: "たましい", 
        kanji: "魂", 
        kana: "たましい", 
        pos: "名词",
        meaning: "灵魂，精神，心血",
        example_jp: "この作品には、職人の魂が込められている。",
        example_cn: "这部作品里倾注了工匠的心血（灵魂）。"
    },
    { 
        id: 39, 
        word: "はて", 
        kanji: "果て", 
        kana: "はて", 
        pos: "名词",
        meaning: "尽头，边际；末路，结局",
        example_jp: "何日も悩んだ果てに、ようやく一つの結論を出した。",
        example_cn: "苦恼了好多天之后，终于得出了一个结论。"
    },
    { 
        id: 40, 
        word: "つとめさき", 
        kanji: "勤め先", 
        kana: "つとめさき", 
        pos: "名词",
        meaning: "工作单位，就职地",
        example_jp: "履歴書に現在の勤め先を記入する。",
        example_cn: "在简历上填写现在的工作单位。"
    },
    { 
        id: 41, 
        word: "さまがわり", 
        kanji: "様変わり", 
        kana: "さまがわり", 
        pos: "名词 / 自动词・サ变",
        meaning: "面目全非，彻底改变",
        example_jp: "数年ぶりに帰郷すると、駅前の風景がすっかり様変わりしていた。",
        example_cn: "时隔数年回乡，车站前的风景已经彻底变了样。"
    },
    { 
        id: 42, 
        word: "あれはてる", 
        kanji: "荒れ果てる", 
        kana: "あれはてる", 
        pos: "自动词・一段",
        meaning: "荒废，破败不堪",
        example_jp: "誰も住まなくなった家は、あっという間に荒れ果ててしまった。",
        example_cn: "无人居住的房屋转眼间就破败不堪了。"
    },
    { 
        id: 43, 
        word: "しかえし", 
        kanji: "仕返し", 
        kana: "しかえし", 
        pos: "名词 / 他动词・サ变",
        meaning: "报复，还击",
        example_jp: "やられたら必ず仕返しをするというのは、良い考えではない。",
        example_cn: "所谓“以牙还牙（被欺负就一定会报复）”，并不是一个好想法。"
    },
    { 
        id: 44, 
        word: "ました", 
        kanji: "真下", 
        kana: "ました", 
        pos: "名词",
        meaning: "正下方",
        example_jp: "雷が鳴り、ちょうど真下にある木に落ちた。",
        example_cn: "打雷了，刚好劈在了正下方的树上。"
    },
    { 
        id: 45, 
        word: "ほる", 
        kanji: "彫る", 
        kana: "ほる", 
        pos: "他动词・五段",
        meaning: "雕刻",
        example_jp: "木を彫って、美しい仏像を作り上げた。",
        example_cn: "雕刻木头，制作出了美丽的佛像。"
    },
    { 
        id: 46, 
        word: "もくろみ", 
        kanji: "目論見", 
        kana: "もくろみ", 
        pos: "名词",
        meaning: "计划，企图，盘算",
        example_jp: "彼の新事業の目論見は、資金不足で失敗に終わった。",
        example_cn: "他的新事业计划由于资金不足而以失败告终。"
    },
    { 
        id: 47, 
        word: "うれい", 
        kanji: "憂い", 
        kana: "うれい", 
        pos: "名词",
        meaning: "忧虑，悲伤，哀愁",
        example_jp: "彼女の目には、どこか憂いを帯びた表情があった。",
        example_cn: "她的眼神中，带着几分悲伤（哀愁）的表情。"
    },
    { 
        id: 48, 
        word: "ひろまる", 
        kanji: "広まる", 
        kana: "ひろまる", 
        pos: "自动词・五段",
        meaning: "传播，流传，普及",
        example_jp: "ネットを通じて、そのニュースはあっという間に世界中に広まった。",
        example_cn: "通过网络，那条新闻转眼间就传遍了世界。"
    },
    { 
        id: 49, 
        word: "こころまち", 
        kanji: "心待ち", 
        kana: "こころまち", 
        pos: "名词",
        meaning: "期待，盼望，殷切希望",
        example_jp: "皆様にお会いできる日を心待ちにしております。",
        example_cn: "殷切盼望着能与各位相见的那一天。"
    },
    { 
        id: 50, 
        word: "なきぬれる", 
        kanji: "泣きぬれる", 
        kana: "なきぬれる", 
        pos: "自动词・一段",
        meaning: "泪流满面，哭湿（衣襟等）",
        example_jp: "悲報を聞いて、一晩中涙に泣きぬれた。",
        example_cn: "听到噩耗，整夜泪流满面。"
    },
    { 
        id: 51, 
        word: "かたより", 
        kanji: "偏り", 
        kana: "かたより", 
        pos: "名词",
        meaning: "偏颇，不平衡，偏差",
        example_jp: "ファストフードばかり食べていると、栄養に偏りが出る。",
        example_cn: "如果总吃快餐，营养就会出现不平衡。"
    },
    { 
        id: 52, 
        word: "いさましい", 
        kanji: "勇ましい", 
        kana: "いさましい", 
        pos: "イ形容词",
        meaning: "勇敢的，勇猛的，雄壮的",
        example_jp: "困難に立ち向かう彼の勇ましい姿に感動した。",
        example_cn: "他迎难而上的勇敢姿态令我感动。"
    },
    { 
        id: 53, 
        word: "あらがう", 
        kanji: "抗う", 
        kana: "あらがう", 
        pos: "自动词・五段",
        meaning: "抵抗，违抗，抗争",
        example_jp: "過酷な運命に抗って、最後まで生き抜く。",
        example_cn: "抗争残酷的命运，坚强地活到最后。"
    },
    { 
        id: 54, 
        word: "よどみ", 
        kanji: "淀み", 
        kana: "よどみ", 
        pos: "名词",
        meaning: "停滞，淤积；（说话）结巴，迟疑（多接「なく」）",
        example_jp: "彼女は外国語を淀みなくスラスラと話す。",
        example_cn: "她外语说得非常流畅，毫不结巴。"
    },
    { 
        id: 55, 
        word: "きはく", 
        kanji: "気迫", 
        kana: "きはく", 
        pos: "名词",
        meaning: "气魄，气势，精神",
        example_jp: "絶対に勝つという凄まじい気迫が伝わってくる。",
        example_cn: "能感受到他一定要赢的惊人气魄。"
    },
    { 
        id: 56, 
        word: "さけび", 
        kanji: "叫び", 
        kana: "さけび", 
        pos: "名词",
        meaning: "叫喊，呼声，呐喊",
        example_jp: "平和を求める市民の叫びが広場に響き渡った。",
        example_cn: "市民们寻求和平的呐喊声在广场上回荡。"
    },
    { 
        id: 57, 
        word: "ないし", 
        kanji: "乃至", 
        kana: "ないし", 
        pos: "接续词 / 副词",
        meaning: "（书面语）或者；从...到...",
        example_jp: "応募資格は、大卒乃至はそれに準ずる学力を有する者とする。",
        example_cn: "应聘资格为大学毕业，或者具有同等学力者。"
    },
    { 
        id: 58, 
        word: "つりせん", 
        kanji: "釣銭", 
        kana: "つりせん", 
        pos: "名词",
        meaning: "找回的零钱",
        example_jp: "自動販売機で飲み物を買い、釣銭を取り忘れた。",
        example_cn: "在自动售货机买饮料，忘了拿找回的零钱。"
    },
    { 
        id: 59, 
        word: "おもいきる", 
        kanji: "思い切る", 
        kana: "おもいきる", 
        pos: "他动词 / 自动词・五段",
        meaning: "下定决心；死心，放弃",
        example_jp: "失敗を恐れず、思い切って挑戦してみることが大切だ。",
        example_cn: "不怕失败，下定决心去挑战是很重要的。"
    },
    { 
        id: 60, 
        word: "いってんばり", 
        kanji: "一点張り", 
        kana: "いってんばり", 
        pos: "名词",
        meaning: "一味，专做某事，固执己见",
        example_jp: "彼は自分の非を認めず、強気の一点張りだ。",
        example_cn: "他不承认自己的错误，一味地逞强（固执己见）。"
    },
    { 
        id: 61, 
        word: "ありったけ", 
        kanji: "有りっ丈", 
        kana: "ありったけ", 
        pos: "名词 / 副词",
        meaning: "全部，所有，毫无保留",
        example_jp: "マラソンの最後は、ありったけの力を振り絞って走った。",
        example_cn: "马拉松的最后，绞尽了所有的力气奔跑。"
    },
    { 
        id: 62, 
        word: "ひきしめる", 
        kanji: "引き締める", 
        kana: "ひきしめる", 
        pos: "他动词・一段",
        meaning: "勒紧；使紧张，绷紧神经",
        example_jp: "大事な試合の前なので、気を引き締めて練習に臨む。",
        example_cn: "因为是在重要比赛前，所以绷紧神经投入练习。"
    },
    { 
        id: 63, 
        word: "ひやあせ", 
        kanji: "冷や汗", 
        kana: "ひやあせ", 
        pos: "名词",
        meaning: "冷汗",
        example_jp: "大勢の前でミスをして、思わず冷や汗をかいた。",
        example_cn: "在众人面前出了错，不由得冒出了一身冷汗。"
    },
    { 
        id: 64, 
        word: "のどごし", 
        kanji: "喉越し", 
        kana: "のどごし", 
        pos: "名词",
        meaning: "（食物、饮料）滑过喉咙时的感觉",
        example_jp: "夏は、冷たくて喉越しの良いビールが最高だ。",
        example_cn: "夏天，冰凉且顺滑爽喉的啤酒是最棒的。"
    },
    { 
        id: 65, 
        word: "こわき", 
        kanji: "小脇", 
        kana: "こわき", 
        pos: "名词",
        meaning: "腋下，胳肢窝下",
        example_jp: "書類の束を小脇に抱えて、足早に会議室へ向かった。",
        example_cn: "将一叠文件夹在腋下，快步走向会议室。"
    },
    { 
        id: 66, 
        word: "ださく", 
        kanji: "駄作", 
        kana: "ださく", 
        pos: "名词",
        meaning: "拙劣的作品，烂片/烂书",
        example_jp: "期待して見に行った映画だったが、全くの駄作だった。",
        example_cn: "满怀期待去看的电影，结果是部彻头彻尾的烂片。"
    },
    { 
        id: 67, 
        word: "あられ", 
        kanji: "霰", 
        kana: "あられ", 
        pos: "名词",
        meaning: "冰雹，雪珠",
        example_jp: "急に空が暗くなり、パラパラと霰が降ってきた。",
        example_cn: "天空突然变暗，啪啦啪啦地下起了冰雹。"
    },
    { 
        id: 68, 
        word: "つぶる", 
        kanji: "瞑る", 
        kana: "つぶる", 
        pos: "他动词・五段",
        meaning: "闭眼；睁一只眼闭一只眼，装作没看见",
        example_jp: "今回だけは、彼の過ちに目をつぶることにした。",
        example_cn: "只有这一次，我决定对他的过失睁一只眼闭一只眼（宽恕）。"
    },
    { 
        id: 69, 
        word: "かしげる", 
        kanji: "傾げる", 
        kana: "かしげる", 
        pos: "他动词・一段",
        meaning: "倾斜，弄歪；（首を～）感到疑惑，不解",
        example_jp: "彼の不可解な説明を聞いて、思わず首を傾げた。",
        example_cn: "听了他令人费解的解释，不由得歪着头感到疑惑。"
    },
    { 
        id: 70, 
        word: "もうしいれる", 
        kanji: "申し入れる", 
        kana: "もうしいれる", 
        pos: "他动词・一段",
        meaning: "提出，提议，申报",
        example_jp: "会社側に対し、労働環境の改善を申し入れた。",
        example_cn: "向公司方面提出了改善劳动环境的请求。"
    },
    { 
        id: 71, 
        word: "じょうじる", 
        kanji: "乗じる", 
        kana: "じょうじる", 
        pos: "自动词・上一段",
        meaning: "乘机，趁机，钻空子",
        example_jp: "相手の気の緩みに乗じて、一気に反撃に出た。",
        example_cn: "趁着对手松懈，一口气发起了反击。"
    },
    { 
        id: 72, 
        word: "まき", 
        kanji: "薪", 
        kana: "まき", 
        pos: "名词",
        meaning: "劈柴，木柴",
        example_jp: "冬に備えて、ストーブにくべる薪を割る。",
        example_cn: "为了防备过冬，劈好用于放进火炉的木柴。"
    },
    { 
        id: 73, 
        word: "よわよわしい", 
        kanji: "弱々しい", 
        kana: "よわよわしい", 
        pos: "イ形容词",
        meaning: "软弱的，虚弱的，无力的",
        example_jp: "病床の彼は、弱々しい声で私に語りかけた。",
        example_cn: "病床上的他，用微弱无力的声音对我说话。"
    },
    { 
        id: 74, 
        word: "とりくむ", 
        kanji: "取り組む", 
        kana: "とりくむ", 
        pos: "自动词・五段",
        meaning: "致力于，埋头于，对付",
        example_jp: "地球温暖化という難しい課題に真剣に取り組む。",
        example_cn: "认真致力于应对全球变暖这一难题。"
    },
    { 
        id: 75, 
        word: "おちば", 
        kanji: "落ち葉", 
        kana: "おちば", 
        pos: "名词",
        meaning: "落叶",
        example_jp: "秋風に吹かれて、庭に落ち葉が舞い散る。",
        example_cn: "秋风吹过，院子里飘落着片片落叶。"
    },
    { 
        id: 76, 
        word: "いろどり", 
        kanji: "彩り", 
        kana: "いろどり", 
        pos: "名词",
        meaning: "着色，配色；点缀，情趣",
        example_jp: "料理にパセリを添えて、彩りを良くする。",
        example_cn: "在菜肴上点缀些欧芹，使配色更好看。"
    },
    { 
        id: 77, 
        word: "うちたてる", 
        kanji: "打ち立てる", 
        kana: "うちたてる", 
        pos: "他动词・一段",
        meaning: "建立，创立，树立（记录、方针等）",
        example_jp: "彼はスポーツ界で前人未到の金字塔を打ち立てた。",
        example_cn: "他在体育界树立了前无古人的丰碑。"
    },
    { 
        id: 78, 
        word: "いいはなつ", 
        kanji: "言い放つ", 
        kana: "いいはなつ", 
        pos: "他动词・五段",
        meaning: "断言，放话，毫不客气地说",
        example_jp: "「もう二度と会わない」と、彼女は冷たく言い放った。",
        example_cn: "“我们再也不会见面了。”她冷冷地丢下这句话。"
    },
    { 
        id: 79, 
        word: "むだづかい", 
        kanji: "無駄遣い", 
        kana: "むだづかい", 
        pos: "名词 / 他动词・サ变",
        meaning: "浪费，挥霍",
        example_jp: "給料が入っても、無駄遣いをせず貯金に回す。",
        example_cn: "即使发了工资，也不挥霍浪费，存起来。"
    },
    { 
        id: 80, 
        word: "する", 
        kanji: "刷る", 
        kana: "する", 
        pos: "他动词・五段",
        meaning: "印刷，印制",
        example_jp: "明日のイベントのために、チラシを100枚刷る。",
        example_cn: "为了明天的活动，印制100张传单。"
    },
    { 
        id: 81, 
        word: "はぐくむ", 
        kanji: "育む", 
        kana: "はぐくむ", 
        pos: "他动词・五段",
        meaning: "孵化；培育，培养，孕育",
        example_jp: "豊かな自然が、多様な動植物の命を育んでいる。",
        example_cn: "丰富的自然环境孕育了多种动植物的生命。"
    },
    { 
        id: 82, 
        word: "おもんじる", 
        kanji: "重んじる", 
        kana: "おもんじる", 
        pos: "他动词・上一段",
        meaning: "重视，尊重，看重",
        example_jp: "我が社は、社員の自主性を重んじる社風だ。",
        example_cn: "我们公司的风气是尊重员工的自主性。"
    },
    { 
        id: 83, 
        word: "まぎわ", 
        kanji: "間際", 
        kana: "まぎわ", 
        pos: "名词",
        meaning: "临近，眼看就要...的时候，之际",
        example_jp: "電車が出発する間際に、ギリギリで飛び乗った。",
        example_cn: "在电车发车之际，勉勉强强地跳了上去。"
    },
    { 
        id: 84, 
        word: "うかい", 
        kanji: "迂回", 
        kana: "うかい", 
        pos: "名词 / 自动词・サ变",
        meaning: "绕道，迂回",
        example_jp: "道路工事のため、この先は迂回してください。",
        example_cn: "由于道路施工，前方请绕道行驶。"
    },
    { 
        id: 85, 
        word: "ののしる", 
        kanji: "罵る", 
        kana: "ののしる", 
        pos: "他动词・五段",
        meaning: "谩骂，大骂",
        example_jp: "運転手同士が窓を開けて、激しい言葉で互いを罵り合った。",
        example_cn: "两个司机摇下车窗，用激烈的语言互相大骂。"
    },
    { 
        id: 86, 
        word: "ひだりきき", 
        kanji: "左利き", 
        kana: "ひだりきき", 
        pos: "名词",
        meaning: "左撇子；爱喝酒的人",
        example_jp: "彼は左利きなので、専用のハサミを使っている。",
        example_cn: "他是左撇子，所以用的是专用的剪刀。"
    },
    { 
        id: 87, 
        word: "あか", 
        kanji: "垢", 
        kana: "あか", 
        pos: "名词",
        meaning: "污垢，泥垢；陈规陋习",
        example_jp: "お風呂に入って、体の垢をきれいに落とす。",
        example_cn: "洗个澡，把身上的污垢洗干净。"
    },
    { 
        id: 88, 
        word: "ゆうやみ", 
        kanji: "夕闇", 
        kana: "ゆうやみ", 
        pos: "名词",
        meaning: "暮色，暮霭，傍晚的昏暗",
        example_jp: "夕闇が迫る中、家路を急ぐ人々が増えてきた。",
        example_cn: "暮色渐浓，急着赶回家的人多起来了。"
    },
    { 
        id: 89, 
        word: "おもいなやむ", 
        kanji: "思い悩む", 
        kana: "おもいなやむ", 
        pos: "自动词・五段",
        meaning: "烦恼，苦恼，忧虑",
        example_jp: "将来の進路について、一人で思い悩んでいる。",
        example_cn: "正为了将来的出路而独自苦恼。"
    },
    { 
        id: 90, 
        word: "さらす", 
        kanji: "晒す", 
        kana: "さらす", 
        pos: "他动词・五段",
        meaning: "曝露，使暴露（于阳光、危险、众目睽睽之下）",
        example_jp: "自らを危険に晒してまで、彼は子供を助けた。",
        example_cn: "他甚至不惜将自己暴露在危险之中，救下了那个孩子。"
    },
    { 
        id: 91, 
        word: "さずかる", 
        kanji: "授かる", 
        kana: "さずかる", 
        pos: "他动词・五段",
        meaning: "领受，获赐，被授予（上天赐予的生命、荣誉等）",
        example_jp: "結婚して5年目にして、ようやく子宝を授かった。",
        example_cn: "结婚第五年，终于获赐了孩子（怀上了宝宝）。"
    },
    { 
        id: 92, 
        word: "みぶり", 
        kanji: "身振り", 
        kana: "みぶり", 
        pos: "名词",
        meaning: "姿态，手势，动作",
        example_jp: "言葉が通じないので、身振り手振りで道を教えた。",
        example_cn: "因为语言不通，所以用肢体动作（手势）指了路。"
    },
    { 
        id: 93, 
        word: "おさめる", 
        kanji: "納める", 
        kana: "おさめる", 
        pos: "他动词・一段",
        meaning: "缴纳（税等）；交货；收纳",
        example_jp: "国民には、決められた税金を納める義務がある。",
        example_cn: "国民有义务缴纳规定的税金。"
    },
    { 
        id: 94, 
        word: "やわらげる", 
        kanji: "和らげる", 
        kana: "やわらげる", 
        pos: "他动词・一段",
        meaning: "使缓和，减轻，使柔和",
        example_jp: "薬を飲んで、胃の痛みを少し和らげた。",
        example_cn: "吃了药，稍微减轻了胃痛。"
    },
    { 
        id: 95, 
        word: "かわす", 
        kanji: "交わす", 
        kana: "かわす", 
        pos: "他动词・五段",
        meaning: "交换，互换（意见、话语、酒杯等）",
        example_jp: "近所の人とすれ違う時、軽い挨拶を交わす。",
        example_cn: "与邻居擦肩而过时，互相简单地打了个招呼。"
    },
    { 
        id: 96, 
        word: "つかさどる", 
        kanji: "司る", 
        kana: "つかさどる", 
        pos: "他动词・五段",
        meaning: "掌管，负责，管理",
        example_jp: "脳は、人間の思考や感情を司る重要な器官だ。",
        example_cn: "大脑是掌管人类思考和情感的重要器官。"
    },
    { 
        id: 97, 
        word: "あらて", 
        kanji: "新手", 
        kana: "あらて", 
        pos: "名词",
        meaning: "新花样，新手段，新生力量",
        example_jp: "お年寄りを狙った新手の詐欺が横行している。",
        example_cn: "针对老年人的新型诈骗手段正在横行。"
    },
    { 
        id: 98, 
        word: "とまどい", 
        kanji: "戸惑い", 
        kana: "とまどい", 
        pos: "名词",
        meaning: "不知所措，困惑，彷徨",
        example_jp: "急なルール変更に、参加者たちの間に戸惑いが広がった。",
        example_cn: "面对突然的规则变更，参与者中弥漫着困惑的情绪。"
    },
    { 
        id: 99, 
        word: "さはい", 
        kanji: "差配", 
        kana: "さはい", 
        pos: "名词 / 他动词・サ变",
        meaning: "管理，指派，安排",
        example_jp: "現場のリーダーとして、部下への業務の差配を任された。",
        example_cn: "作为现场负责人，被委任了向部下分配（安排）业务的工作。"
    },
    { 
        id: 100, 
        word: "さしひき", 
        kanji: "差し引き", 
        kana: "さしひき", 
        pos: "名词",
        meaning: "扣除，减去，盈亏，相抵",
        example_jp: "給料から税金などを差し引きした額が振り込まれる。",
        example_cn: "从工资中扣除税金等之后的金额会被汇入账户。"
    },
    { 
        id: 101, 
        word: "こげちゃ", 
        kanji: "焦げ茶", 
        kana: "こげちゃ", 
        pos: "名词",
        meaning: "深棕色，浓茶色",
        example_jp: "彼は焦げ茶色の革靴を好んで履いている。",
        example_cn: "他喜欢穿深棕色的皮鞋。"
    },
    { 
        id: 102, 
        word: "みすごす", 
        kanji: "見過ごす", 
        kana: "みすごす", 
        pos: "他动词・五段",
        meaning: "看漏，没看出来；放过，宽恕",
        example_jp: "重大なミスを見過ごしてしまい、大きな問題になった。",
        example_cn: "看漏了重大的失误，结果引发了严重的问题。"
    },
    { 
        id: 103, 
        word: "はなはだ", 
        kanji: "甚だ", 
        kana: "はなはだ", 
        pos: "副词",
        meaning: "极其，非常（多用于负面、消极评价）",
        example_jp: "せっかくお越しいただいたのに不在で、甚だ遺憾です。",
        example_cn: "您特意赶来我却不在，实在极其遗憾。"
    },
    { 
        id: 104, 
        word: "かなえる", 
        kanji: "適える / 叶える", 
        kana: "かなえる", 
        pos: "他动词・一段",
        meaning: "使符合，使适合；实现（愿望等）",
        example_jp: "長年の夢を叶えるために、海外留学を決意した。",
        example_cn: "为了实现多年的梦想，决定去海外留学。"
    },
    { 
        id: 105, 
        word: "しきい", 
        kanji: "敷居", 
        kana: "しきい", 
        pos: "名词",
        meaning: "门槛；（敷居が高い）门槛高，不好意思去",
        example_jp: "高級なレストランは、学生にとっては敷居が高い。",
        example_cn: "高级餐厅对学生来说门槛太高了（难以轻易涉足）。"
    },
    { 
        id: 106, 
        word: "おさまる", 
        kanji: "納まる", 
        kana: "おさまる", 
        pos: "自动词・五段",
        meaning: "收纳，装入；解决，平息；心满意足",
        example_jp: "話し合いの結果、ようやくトラブルが丸く納まった。",
        example_cn: "经过协商，纠纷终于圆满平息了。"
    },
    { 
        id: 107, 
        word: "きむずかしい", 
        kanji: "気難しい", 
        kana: "きむずかしい", 
        pos: "イ形容词",
        meaning: "难伺候的，脾气古怪的",
        example_jp: "あの客は気難しくて、少しでも気に食わないと怒り出す。",
        example_cn: "那位客人很难伺候，稍有不顺心就会发脾气。"
    },
    { 
        id: 108, 
        word: "おもいまどう", 
        kanji: "思い惑う", 
        kana: "おもいまどう", 
        pos: "自动词・五段",
        meaning: "不知所措，烦恼，迷茫",
        example_jp: "今後のキャリアについて思い惑う日々が続いている。",
        example_cn: "关于今后的职业发展，持续着迷茫烦恼的日子。"
    },
    { 
        id: 109, 
        word: "やぼったい", 
        kanji: "野暮ったい", 
        kana: "やぼったい", 
        pos: "イ形容词",
        meaning: "土气的，俗气的，不解风情的",
        example_jp: "少し野暮ったい服装だが、彼はとても優しい人だ。",
        example_cn: "虽然服装有点土气，但他是个非常温柔的人。"
    },
    { 
        id: 110, 
        word: "やすめる", 
        kanji: "休める", 
        kana: "やすめる", 
        pos: "他动词・一段",
        meaning: "使休息，放松",
        example_jp: "週末は温泉に行って、日頃の疲れを休めるつもりだ。",
        example_cn: "周末打算去泡温泉，放松一下平日的疲惫。"
    },
    { 
        id: 111, 
        word: "ひかえめ", 
        kanji: "控えめ", 
        kana: "ひかえめ", 
        pos: "ナ形容词",
        meaning: "节制，保守，客气",
        example_jp: "健康のため、塩分を控えめにした食事を心がけている。",
        example_cn: "为了健康，尽量食用节制盐分（清淡）的饮食。"
    },
    { 
        id: 112, 
        word: "みさき", 
        kanji: "岬", 
        kana: "みさき", 
        pos: "名词",
        meaning: "海角，岬",
        example_jp: "岬の先端に立つ白い灯台が美しい。",
        example_cn: "矗立在海角前端的白色灯塔非常美丽。"
    },
    { 
        id: 113, 
        word: "そうざい", 
        kanji: "惣菜", 
        kana: "そうざい", 
        pos: "名词",
        meaning: "家常小菜，（超市卖的）熟食",
        example_jp: "忙しい日は、スーパーで惣菜を買って帰る。",
        example_cn: "忙碌的日子里，会在超市买熟食回家。"
    },
    { 
        id: 114, 
        word: "きつけ", 
        kanji: "着付け", 
        kana: "きつけ", 
        pos: "名词",
        meaning: "穿衣打扮；（特指）帮人穿和服的技术",
        example_jp: "成人式のために、美容院で着付けをお願いした。",
        example_cn: "为了参加成人仪式，拜托了美容院帮忙穿和服。"
    },
    { 
        id: 115, 
        word: "かみあう", 
        kanji: "嚙み合う", 
        kana: "かみあう", 
        pos: "自动词・五段",
        meaning: "咬合；（齿轮等）契合；（意见等）合拍，一致",
        example_jp: "二人の意見が全く噛み合わず、議論が平行線をたどった。",
        example_cn: "两人的意见完全不合拍，讨论毫无交集。"
    },
    { 
        id: 116, 
        word: "ようは", 
        kanji: "要は", 
        kana: "ようは", 
        pos: "副词",
        meaning: "总之，要而言之，关键是",
        example_jp: "色々と理由を並べたが、要はやりたくないということだろう。",
        example_cn: "罗列了各种理由，总之就是不想做吧。"
    },
    { 
        id: 117, 
        word: "はやり", 
        kanji: "流行り", 
        kana: "はやり", 
        pos: "名词",
        meaning: "流行，时髦",
        example_jp: "若者の間では、レトロなデザインの服が流行りだ。",
        example_cn: "在年轻人中，复古设计的服装正流行。"
    },
    { 
        id: 118, 
        word: "たらす", 
        kanji: "垂らす", 
        kana: "たらす", 
        pos: "他动词・五段",
        meaning: "悬垂，垂下；滴下",
        example_jp: "釣糸を垂らして、魚がかかるのをじっと待つ。",
        example_cn: "垂下钓鱼线，静静等待鱼儿上钩。"
    },
    { 
        id: 119, 
        word: "くみあげる", 
        kanji: "組み上げる", 
        kana: "くみあげる", 
        pos: "他动词・一段",
        meaning: "组装起来，装配完",
        example_jp: "部品を一つずつ丁寧に合わせて、機械を組み上げた。",
        example_cn: "把零件一个个仔细地对好，组装起了机器。"
    },
    { 
        id: 120, 
        word: "おおぐち", 
        kanji: "大口", 
        kana: "おおぐち", 
        pos: "名词",
        meaning: "大宗（交易）；夸口，说大话",
        example_jp: "あんな大口を叩いたのに、失敗して恥ずかしい。",
        example_cn: "夸下那么大的海口，结果却失败了，真丢人。"
    },
    { 
        id: 121, 
        word: "こころならずも", 
        kanji: "心ならずも", 
        kana: "こころならずも", 
        pos: "副词",
        meaning: "违心地，迫不得已地，并非本意地",
        example_jp: "心ならずも、友人の申し出を断らざるを得なかった。",
        example_cn: "迫不得已，只能拒绝了朋友的请求。"
    },
    { 
        id: 122, 
        word: "つつしむ", 
        kanji: "謹む", 
        kana: "つつしむ", 
        pos: "他动词・五段",
        meaning: "恭敬，谨慎（多用「謹んで」表示郑重）",
        example_jp: "謹んで新春のお慶びを申し上げます。",
        example_cn: "谨祝新春快乐（常用于贺年卡）。"
    },
{ 
        id: 123, 
        word: "つじつま", 
        kanji: "辻褄", 
        kana: "つじつま", 
        pos: "名词",
        meaning: "条理，逻辑（常搭配：辻褄が合う）",
        example_jp: "彼の証言は、アリバイと辻褄が合わない。",
        example_cn: "他的证词和不在场证明不合逻辑（对不上）。"
    },
    { 
        id: 124, 
        word: "たくす", 
        kanji: "託す", 
        kana: "たくす", 
        pos: "他动词・五段",
        meaning: "托付，寄托",
        example_jp: "次世代の子供たちに、地球の未来を託す。",
        example_cn: "将地球的未来托付给下一代的孩子们。"
    },
    { 
        id: 125, 
        word: "ひきおとす", 
        kanji: "引き落とす", 
        kana: "ひきおとす", 
        pos: "他动词・五段",
        meaning: "拉倒，拽下；（从银行账户）自动扣款",
        example_jp: "毎月25日に、銀行口座から家賃が引き落とされる。",
        example_cn: "每个月25号，房租会从银行账户中自动扣除。"
    },
    { 
        id: 126, 
        word: "ひのまる", 
        kanji: "日の丸", 
        kana: "ひのまる", 
        pos: "名词",
        meaning: "太阳旗（日本国旗）",
        example_jp: "オリンピックで、日の丸の旗が掲げられた。",
        example_cn: "在奥运会上，升起了太阳旗。"
    },
    { 
        id: 127, 
        word: "せとぎわ", 
        kanji: "瀬戸際", 
        kana: "せとぎわ", 
        pos: "名词",
        meaning: "生死关头，紧要关头，分界线",
        example_jp: "我が社は今、倒産するかどうかの瀬戸際にある。",
        example_cn: "我们公司现在正处于是否会破产的紧要关头。"
    },
    { 
        id: 128, 
        word: "まんげつ", 
        kanji: "満月", 
        kana: "まんげつ", 
        pos: "名词",
        meaning: "满月",
        example_jp: "夜空に浮かぶ満月が、地上を明るく照らしている。",
        example_cn: "夜空中悬挂的满月，将大地照得十分明亮。"
    },
    { 
        id: 129, 
        word: "いいがかり", 
        kanji: "言い掛かり", 
        kana: "いいがかり", 
        pos: "名词",
        meaning: "找茬，无理取闹，诬陷",
        example_jp: "全く身に覚えのないことで、言い掛かりをつけられた。",
        example_cn: "因为完全没有印象的事情，被人无理取闹找了茬。"
    },
    { 
        id: 130, 
        word: "かたみ", 
        kanji: "形見", 
        kana: "かたみ", 
        pos: "名词",
        meaning: "遗物，留念的物品",
        example_jp: "祖母の形見の着物を、今でも大切に保管している。",
        example_cn: "祖母留下的作为遗物的和服，至今仍妥善保管着。"
    },
    { 
        id: 131, 
        word: "ねばる", 
        kanji: "粘る", 
        kana: "ねばる", 
        pos: "自动词・五段",
        meaning: "发黏；坚持不懈，韧性十足",
        example_jp: "最後まで諦めずに粘ったおかげで、逆転勝利できた。",
        example_cn: "多亏了坚持到最后没有放弃，才取得了逆转胜利。"
    },
    { 
        id: 132, 
        word: "かおぶれ", 
        kanji: "顔ぶれ", 
        kana: "かおぶれ", 
        pos: "名词",
        meaning: "阵容，出席的人员",
        example_jp: "今日の会議は、いつもと違う顔ぶれが揃っている。",
        example_cn: "今天的会议凑齐了和往常不一样的阵容（人员）。"
    },
    { 
        id: 133, 
        word: "ねむたい", 
        kanji: "眠たい", 
        kana: "ねむたい", 
        pos: "イ形容词",
        meaning: "困倦的，想睡觉的",
        example_jp: "昨夜は徹夜だったので、今はとても眠たい。",
        example_cn: "昨晚熬了通宵，现在非常困倦。"
    },
    { 
        id: 134, 
        word: "そえる", 
        kanji: "添える", 
        kana: "そえる", 
        pos: "他动词・一段",
        meaning: "附加，添加；伴随",
        example_jp: "プレゼントに、感謝の気持ちを綴った手紙を添える。",
        example_cn: "在礼物上，附上一封写满感谢之情的信。"
    },
    { 
        id: 135, 
        word: "けがらわしい", 
        kanji: "汚らわしい", 
        kana: "けがらわしい", 
        pos: "イ形容词",
        meaning: "肮脏的，令人恶心的，卑鄙的",
        example_jp: "賄賂を受け取るような汚らわしい真似は絶対にしたくない。",
        example_cn: "绝对不想做收受贿赂那种令人作呕的卑鄙勾当。"
    },
    { 
        id: 136, 
        word: "あとまわし", 
        kanji: "後回し", 
        kana: "あとまわし", 
        pos: "名词",
        meaning: "推迟，往后推，缓办",
        example_jp: "面倒な仕事を後回しにすると、後で自分が苦労する。",
        example_cn: "把麻烦的工作往后推，之后吃苦的还是自己。"
    },
    { 
        id: 137, 
        word: "まかなう", 
        kanji: "賄う", 
        kana: "まかなう", 
        pos: "他动词・五段",
        meaning: "提供，供应（饭菜）；支付，维持，筹措（费用）",
        example_jp: "アルバイトの給料だけで、毎月の生活費を賄っている。",
        example_cn: "仅靠打工的工资来维持每个月的生活费。"
    },
    { 
        id: 138, 
        word: "しょうめんきって", 
        kanji: "正面切って", 
        kana: "しょうめんきって", 
        pos: "副词",
        meaning: "公开地，堂堂正正地，正面地",
        example_jp: "社長に対して、正面切って反対意見を述べるのは勇気がいる。",
        example_cn: "当面向社长堂堂正正地提出反对意见是需要勇气的。"
    },
    { 
        id: 139, 
        word: "てがける", 
        kanji: "手がける", 
        kana: "てがける", 
        pos: "他动词・一段",
        meaning: "亲自动手做，经手，经管",
        example_jp: "彼はこれまで数多くの大ヒット商品を自ら手がけてきた。",
        example_cn: "他至今为止亲手打造了众多大热的商品。"
    },
    { 
        id: 140, 
        word: "はやいこと", 
        kanji: "早いこと", 
        kana: "はやいこと", 
        pos: "副词",
        meaning: "（口语强调）尽早，赶紧",
        example_jp: "雨が降る前に、早いこと家に帰ろう。",
        example_cn: "趁着还没下雨，赶紧回家吧。"
    },
    { 
        id: 141, 
        word: "うすれる", 
        kanji: "薄れる", 
        kana: "うすれる", 
        pos: "自动词・一段",
        meaning: "变淡，减退，淡忘",
        example_jp: "年月が経つにつれて、悲しい記憶も次第に薄れていく。",
        example_cn: "随着岁月的流逝，悲伤的记忆也逐渐淡忘了。"
    },
    { 
        id: 142, 
        word: "でっぱる", 
        kanji: "出っ張る", 
        kana: "でっぱる", 
        pos: "自动词・五段",
        meaning: "突出，凸出",
        example_jp: "壁の出っ張っている部分に頭をぶつけてしまった。",
        example_cn: "头撞到了墙壁凸出来的部分。"
    },
    { 
        id: 143, 
        word: "にたりよったり", 
        kanji: "似たり寄ったり", 
        kana: "にたりよったり", 
        pos: "名词 / ナ形容词",
        meaning: "半斤八两，大同小异，差不多",
        example_jp: "どの案も似たり寄ったりで、これといった決め手がない。",
        example_cn: "哪个方案都大同小异，缺乏决定性的亮点。"
    },
    { 
        id: 144, 
        word: "つねづね", 
        kanji: "常々", 
        kana: "つねづね", 
        pos: "副词",
        meaning: "常常，总是，平时",
        example_jp: "常々申し上げている通り、安全第一で作業してください。",
        example_cn: "正如我平时常说的那样，请把安全放在第一位进行作业。"
    },
    { 
        id: 145, 
        word: "のりつぐ", 
        kanji: "乗り継ぐ", 
        kana: "のりつぐ", 
        pos: "他动词・五段",
        meaning: "换乘（交通工具）",
        example_jp: "飛行機を３回も乗り継いで、ようやく目的地に到着した。",
        example_cn: "换乘了3次飞机，终于到达了目的地。"
    },
    { 
        id: 146, 
        word: "みそこなう", 
        kanji: "見損なう", 
        kana: "みそこなう", 
        pos: "他动词・五段",
        meaning: "看错（人），对...失望；错过看",
        example_jp: "君がそんな卑怯なことをするとは、完全に見損なっていたよ。",
        example_cn: "你竟然做出如此卑鄙的事情，我真是完全看错你了。"
    },
    { 
        id: 147, 
        word: "あつかい", 
        kanji: "扱い", 
        kana: "あつかい", 
        pos: "名词",
        meaning: "对待，待遇，处理，操作",
        example_jp: "この機械は扱いが難しく、専門の知識が必要だ。",
        example_cn: "这台机器操作（处理）起来很难，需要专门的知识。"
    },
    { 
        id: 148, 
        word: "しわざ", 
        kanji: "仕業", 
        kana: "しわざ", 
        pos: "名词",
        meaning: "（含贬义）勾当，捣鬼，所作所为",
        example_jp: "窓ガラスが割られている。きっと近所の悪ガキの仕業だろう。",
        example_cn: "窗玻璃被打破了，肯定又是附近熊孩子干的好事。"
    },
    { 
        id: 149, 
        word: "うつろう", 
        kanji: "移ろう", 
        kana: "うつろう", 
        pos: "自动词・五段",
        meaning: "变迁，流逝，推移",
        example_jp: "季節が移ろうように、人の心も少しずつ変わっていく。",
        example_cn: "正如季节在不断变迁，人心也会一点点地改变。"
    },
    { 
        id: 150, 
        word: "ぬま", 
        kanji: "沼", 
        kana: "ぬま", 
        pos: "名词",
        meaning: "泥沼，沼泽；（深陷其中无法自拔的）泥潭",
        example_jp: "最近、K-POPアイドルの沼にすっかりハマってしまった。",
        example_cn: "最近彻底掉进了 K-POP 偶像的泥潭里无法自拔（饭圈黑话）。"
    },
    {
        "id": 151,
        "word": "ひっこせる",
        "kanji": "引っ越せる",
        "kana": "ひっこせる",
        "pos": "自动词・一段（可能动词）",
        "meaning": "能搬家，可以搬家",
        "example_jp": "来月には新しいマンションに引っ越せる。",
        "example_cn": "下个月就能搬进新公寓了。"
    },
    {
        "id": 152,
        "word": "みすえる",
        "kanji": "見据える",
        "kana": "みすえる",
        "pos": "他动词・一段",
        "meaning": "定睛注视，看清；着眼于",
        "example_jp": "将来を見据えて、今から準備を始める。",
        "example_cn": "着眼于未来，从现在开始准备。"
    },
    {
        "id": 153,
        "word": "くりかえす",
        "kanji": "繰り返す",
        "kana": "くりかえす",
        "pos": "他动词・五段",
        "meaning": "反复，重复",
        "example_jp": "同じ間違いを繰り返さないように注意する。",
        "example_cn": "注意不要犯同样的错误。"
    },
    {
        "id": 154,
        "word": "ふりかえる",
        "kanji": "振り返る",
        "kana": "ふりかえる",
        "pos": "自他・五段",
        "meaning": "回头看；回顾，回想",
        "example_jp": "学生時代を振り返ると、懐かしい思い出ばかりだ。",
        "example_cn": "回首学生时代，尽是令人怀念的回忆。"
    },
    {
        "id": 155,
        "word": "ちんもく",
        "kanji": "沈黙",
        "kana": "ちんもく",
        "pos": "名词 / 自动词・サ变",
        "meaning": "沉默，不说话",
        "example_jp": "会議室に重苦しい沈黙が流れた。",
        "example_cn": "会议室里弥漫着沉闷的沉默。"
    },
    {
        "id": 156,
        "word": "みくびるはつげん",
        "kanji": "見くびる発言",
        "kana": "みくびるはつげん",
        "pos": "词组 / 名词",
        "meaning": "小看人的发言，轻视他人的言论",
        "example_jp": "相手を見くびる発言は慎むべきだ。",
        "example_cn": "应该谨慎，不要发表轻视对手的言论。"
    },
    {
        "id": 157,
        "word": "てらしあわせる",
        "kanji": "照らし合わせる",
        "kana": "てらしあわせる",
        "pos": "他动词・一段",
        "meaning": "对照，核对",
        "example_jp": "原本とコピーを照らし合わせて確認する。",
        "example_cn": "将原件与复印件核对确认。"
    },
    {
        "id": 158,
        "word": "ふるまう",
        "kanji": "振る舞う",
        "kana": "ふるまう",
        "pos": "自动词・五段",
        "meaning": "举止，行动；请客，款待",
        "example_jp": "ホームパーティーで手料理を振る舞う。",
        "example_cn": "在家庭聚会上用拿手好菜款待大家。"
    },
    {
        "id": 159,
        "word": "とぎすます",
        "kanji": "研ぎ澄ます",
        "kana": "とぎすます",
        "pos": "他动词・五段",
        "meaning": "磨快，磨亮；使（神经等）敏锐",
        "example_jp": "神経を研ぎ澄まして試合に臨む。",
        "example_cn": "高度集中精神迎接比赛。"
    },
    {
        "id": 160,
        "word": "はなばしら",
        "kanji": "鼻柱",
        "kana": "はなばしら",
        "pos": "名词",
        "meaning": "鼻梁；傲气，锐气",
        "example_jp": "試合に勝って、彼の強気な鼻柱を折ってやった。",
        "example_cn": "赢下比赛，挫了挫他逞强的锐气。"
    },
    {
        "id": 161,
        "word": "とりこ",
        "kanji": "虜",
        "kana": "とりこ",
        "pos": "名词",
        "meaning": "俘虏，被...迷住的人",
        "example_jp": "彼女の美しい歌声の虜になった。",
        "example_cn": "我被她优美的歌声彻底迷住了。"
    },
    {
        "id": 162,
        "word": "なまみ",
        "kanji": "生身",
        "kana": "なまみ",
        "pos": "名词",
        "meaning": "肉体，活人；生肉",
        "example_jp": "生身の人間である以上、失敗は避けられない。",
        "example_cn": "既然是肉体凡胎，失败就在所难免。"
    },
    {
        "id": 163,
        "word": "たわむれる",
        "kanji": "戯れる",
        "kana": "たわむれる",
        "pos": "自动词・一段",
        "meaning": "嬉戏，玩耍；开玩笑",
        "example_jp": "子犬が庭で楽しそうに戯れている。",
        "example_cn": "小狗在院子里开心地嬉戏。"
    },
    {
        "id": 164,
        "word": "つめよられる",
        "kanji": "詰め寄られる",
        "kana": "つめよられる",
        "pos": "动词（受身形）",
        "meaning": "被逼近，被逼问",
        "example_jp": "記者たちに詰め寄られて、彼は口を閉ざした。",
        "example_cn": "被记者们连连逼问，他闭口不言。"
    },
    {
        "id": 165,
        "word": "あかるいきざし",
        "kanji": "明るい兆し",
        "kana": "あかるいきざし",
        "pos": "词组 / 名词",
        "meaning": "好转的迹象，光明的预兆",
        "example_jp": "長い不況の後に、ようやく景気回復の明るい兆しが見えてきた。",
        "example_cn": "在长期的经济萧条之后，终于看到了经济复苏的光明迹象。"
    },
    {
        "id": 166,
        "word": "うらはらなきもち",
        "kanji": "裏腹な気持ち",
        "kana": "うらはらなきもち",
        "pos": "词组 / 名词",
        "meaning": "矛盾的心情，截然相反的心境",
        "example_jp": "嬉しい反面、少し寂しいという裏腹な気持ちを抱えている。",
        "example_cn": "心里怀着一方面高兴，另一方面又有些寂寞的矛盾心情。"
    },
    {
        "id": 167,
        "word": "まなざし",
        "kanji": "眼差し",
        "kana": "まなざし",
        "pos": "名词",
        "meaning": "目光，眼神",
        "example_jp": "母親は優しい眼差しで子供を見つめていた。",
        "example_cn": "母亲用温柔的目光注视着孩子。"
    },
    {
        "id": 168,
        "word": "つきとめる",
        "kanji": "突き止める",
        "kana": "つきとめる",
        "pos": "他动词・一段",
        "meaning": "查明，弄清，追究到底",
        "example_jp": "警察はついに事件の原因を突き止めた。",
        "example_cn": "警察终于查明了案件的原因。"
    },
    {
        "id": 169,
        "word": "おそう",
        "kanji": "襲う",
        "kana": "おそう",
        "pos": "他动词・五段",
        "meaning": "袭击，侵袭",
        "example_jp": "真夜中に突然、激しい地震が町を襲った。",
        "example_cn": "午夜时分，强烈的地震突然袭击了小镇。"
    },
    {
        "id": 170,
        "word": "さいわい",
        "kanji": "幸い",
        "kana": "さいわい",
        "pos": "名词 / 形容动词 / 副词",
        "meaning": "幸运，多亏；幸而",
        "example_jp": "事故に遭ったが、幸いにも怪我はなかった。",
        "example_cn": "虽然遭遇了事故，但幸运的是没有受伤。"
    },
    {
        "id": 171,
        "word": "よこたわる",
        "kanji": "横たわる",
        "kana": "よこたわる",
        "pos": "自动词・五段",
        "meaning": "躺卧；横跨，横亘",
        "example_jp": "目の前には巨大な山脈が横たわっている。",
        "example_cn": "眼前横亘着巨大的山脉。"
    },
    {
        "id": 172,
        "word": "こと",
        "kanji": "琴",
        "kana": "こと",
        "pos": "名词",
        "meaning": "琴（日本传统乐器，古筝等）",
        "example_jp": "彼女が弾く琴の音色が部屋中に響いた。",
        "example_cn": "她弹奏的琴声在房间里回荡。"
    },
    {
        "id": 173,
        "word": "ひびき",
        "kanji": "響き",
        "kana": "ひびき",
        "pos": "名词",
        "meaning": "响声，回音；反响，余韵",
        "example_jp": "その言葉の響きには、どこか悲しげなものがあった。",
        "example_cn": "那句话的语感（声音）中，带着一丝悲凉。"
    },
    {
        "id": 174,
        "word": "ここちよい",
        "kanji": "心地よい",
        "kana": "ここちよい",
        "pos": "形容词",
        "meaning": "舒服的，感觉舒畅的",
        "example_jp": "秋の風がとても心地よい。",
        "example_cn": "秋风吹拂，感觉非常舒服。"
    },
    {
        "id": 175,
        "word": "おおげさ",
        "kanji": "大げさ",
        "kana": "おおげさ",
        "pos": "形容动词",
        "meaning": "夸张，小题大做",
        "example_jp": "彼はいつも大げさに話す癖がある。",
        "example_cn": "他总是有说话夸张的习惯。"
    },
    {
        "id": 176,
        "word": "とりしらべる",
        "kanji": "取り調べる",
        "kana": "とりしらべる",
        "pos": "他动词・一段",
        "meaning": "调查，审问",
        "example_jp": "警察は容疑者を厳しく取り調べている。",
        "example_cn": "警察正在严格审问嫌疑人。"
    },
    {
        "id": 177,
        "word": "こがら",
        "kanji": "小柄",
        "kana": "こがら",
        "pos": "名词 / 形容动词",
        "meaning": "身材矮小，娇小",
        "example_jp": "彼女は小柄だが、とても体力がある。",
        "example_cn": "她身材虽然娇小，但体力却很好。"
    },
    {
        "id": 178,
        "word": "すくう",
        "kanji": "掬う",
        "kana": "すくう",
        "pos": "他动词・五段",
        "meaning": "捧起，捞起",
        "example_jp": "両手で綺麗な水を掬って飲んだ。",
        "example_cn": "用双手捧起干净的水喝了。"
    },
    {
        "id": 179,
        "word": "おびやかす",
        "kanji": "脅かす",
        "kana": "おびやかす",
        "pos": "他动词・五段",
        "meaning": "威胁，危及（地位、安全等）",
        "example_jp": "環境破壊が私たちの生活を激しく脅かしている。",
        "example_cn": "环境破坏正在严重危及我们的生活。"
    },
    {
        "id": 180,
        "word": "おもかげ",
        "kanji": "面影",
        "kana": "おもかげ",
        "pos": "名词",
        "meaning": "面容，相貌；回忆中的形象，遗风",
        "example_jp": "彼の顔には、若い頃の父親の面影がある。",
        "example_cn": "他的脸上有着他父亲年轻时的影子。"
    },
    {
        "id": 181,
        "word": "くくる",
        "kanji": "括る",
        "kana": "くくる",
        "pos": "他动词・五段",
        "meaning": "捆，扎；总结，概括",
        "example_jp": "散らばった荷物を一つに括る。",
        "example_cn": "把散乱的行李捆在一起。"
    },
    {
        "id": 182,
        "word": "まちかねる",
        "kanji": "待ちかねる",
        "kana": "まちかねる",
        "pos": "他动词・一段",
        "meaning": "等得不耐烦，迫不及待",
        "example_jp": "ファンたちは彼の新作を待ちかねている。",
        "example_cn": "粉丝们迫不及待地期待着他的新作。"
    },
    {
        "id": 183,
        "word": "ひきのばす",
        "kanji": "引き伸ばす",
        "kana": "ひきのばす",
        "pos": "他动词・五段",
        "meaning": "拉长，放大；拖延（时间等）",
        "example_jp": "会議の時間をこれ以上引き伸ばすことはできない。",
        "example_cn": "会议时间不能再拖延下去了。"
    },
    {
        "id": 184,
        "word": "どわすれ",
        "kanji": "度忘れ",
        "kana": "どわすれ",
        "pos": "名词 / 自动词・サ变",
        "meaning": "一时想不起来，突然忘记",
        "example_jp": "よく知っているはずなのに、彼の名前を度忘れしてしまった。",
        "example_cn": "明明应该很熟悉，却一时想不起他的名字了。"
    },
    {
        "id": 185,
        "word": "うたがいぶかい",
        "kanji": "疑い深い",
        "kana": "うたがいぶかい",
        "pos": "形容词",
        "meaning": "多疑的，爱猜疑的",
        "example_jp": "彼は疑い深い性格で、なかなか人を信用しない。",
        "example_cn": "他生性多疑，很难相信别人。"
    },
    {
        "id": 186,
        "word": "あだめく",
        "kanji": "婀娜めく",
        "kana": "あだめく",
        "pos": "自动词・五段",
        "meaning": "妖艳，娇媚，带有艳丽的风姿",
        "example_jp": "彼女の仕草はどことなく婀娜めいている。",
        "example_cn": "她的举止总带着一丝娇媚妖艳。"
    },
    {
        "id": 187,
        "word": "おして",
        "kanji": "押して",
        "kana": "おして",
        "pos": "副词（由动词て形转化）",
        "meaning": "强行，硬着头皮；不顾（困难等）",
        "example_jp": "病気を押して重要な会議に出席した。",
        "example_cn": "抱病强行出席了重要的会议。"
    },
    {
        "id": 188,
        "word": "ちぢまる",
        "kanji": "縮まる",
        "kana": "ちぢまる",
        "pos": "自动词・五段",
        "meaning": "缩短，缩小",
        "example_jp": "あわや交通事故かと、寿命が縮まる思いをした。",
        "example_cn": "差点出交通事故，感觉寿命都要缩短了（吓死我了）。"
    },
    {
        "id": 189,
        "word": "もう〜",
        "kanji": "猛〜",
        "kana": "もう〜",
        "pos": "接头词",
        "meaning": "猛烈的，剧烈的",
        "example_jp": "新しい提案に対して住民から猛反対を受けた。",
        "example_cn": "新提案遭到了居民们的强烈反对。"
    },
    {
        "id": 190,
        "word": "きんじる",
        "kanji": "禁じる",
        "kana": "きんじる",
        "pos": "他动词・上一段",
        "meaning": "禁止，不许；禁不住（感情等）",
        "example_jp": "美術館内での写真撮影を禁じる。",
        "example_cn": "禁止在美术馆内拍照。"
    },
    {
        "id": 191,
        "word": "さしかかる",
        "kanji": "差し掛かる",
        "kana": "さしかかる",
        "pos": "自动词・五段",
        "meaning": "靠近，逼近（某个地点或时间阶段）",
        "example_jp": "人生の大きな転換期に差し掛かっている。",
        "example_cn": "正逼近人生的一个重大转折期。"
    },
    {
        "id": 192,
        "word": "ずぬける",
        "kanji": "図抜ける",
        "kana": "ずぬける",
        "pos": "自动词・一段",
        "meaning": "出众，超群，格外拔尖",
        "example_jp": "彼はクラスの中で図抜けて背が高い。",
        "example_cn": "他在班里个子特别出众。"
    },
    {
        "id": 193,
        "word": "うしろむき",
        "kanji": "後ろ向き",
        "kana": "うしろむき",
        "pos": "名词 / 形容动词",
        "meaning": "背向，背过身；消极，退缩",
        "example_jp": "失敗を恐れて後ろ向きな考え方になってはいけない。",
        "example_cn": "不能因为害怕失败就产生消极的想法。"
    },
    {
        "id": 194,
        "word": "はやめる",
        "kanji": "早める",
        "kana": "はやめる",
        "pos": "他动词・一段",
        "meaning": "提前，使...提早；加快",
        "example_jp": "出発の時間を予定より1時間早める。",
        "example_cn": "把出发时间比原计划提前1小时。"
    },
    {
        "id": 195,
        "word": "としのせ",
        "kanji": "年の瀬",
        "kana": "としのせ",
        "pos": "名词",
        "meaning": "岁末，年底",
        "example_jp": "年の瀬で街は買い物客で賑わっている。",
        "example_cn": "时值年底，街上满是购物的顾客，非常热闹。"
    },
    {
        "id": 196,
        "word": "しかけ",
        "kanji": "仕掛け",
        "kana": "しかけ",
        "pos": "名词",
        "meaning": "装置，机关；计谋，把戏",
        "example_jp": "この手品には何か巧妙な仕掛けがあるはずだ。",
        "example_cn": "这个魔术肯定有什么巧妙的机关。"
    },
    {
        "id": 197,
        "word": "きり",
        "kanji": "錐",
        "kana": "きり",
        "pos": "名词",
        "meaning": "锥子",
        "example_jp": "板に錐で小さな穴を開ける。",
        "example_cn": "用锥子在木板上打个小孔。"
    },
    {
        "id": 198,
        "word": "みのまわり",
        "kanji": "身の回り",
        "kana": "みのまわり",
        "pos": "名词",
        "meaning": "身边，衣着，日常起居",
        "example_jp": "祖母は高齢だが、身の回りのことは全部自分でできる。",
        "example_cn": "祖母虽然年事已高，但日常起居全都能自己料理。"
    },
    {
        "id": 199,
        "word": "さげすむ",
        "kanji": "蔑む",
        "kana": "さげすむ",
        "pos": "他动词・五段",
        "meaning": "蔑视，轻视，看不起",
        "example_jp": "他人を蔑むような態度をとるべきではない。",
        "example_cn": "不应该采取轻视他人的态度。"
    },
    {
        "id": 200,
        "word": "すみわたる",
        "kanji": "澄み渡る",
        "kana": "すみわたる",
        "pos": "自动词・五段",
        "meaning": "晴空万里，十分清澈",
        "example_jp": "秋の澄み渡った青空を見上げる。",
        "example_cn": "仰望秋日澄澈湛蓝的天空。"
    },
  {
    "id": 201,
    "word": "ひだりまき",
    "kanji": "左巻き",
    "kana": "ひだりまき",
    "pos": "名词/形容动词",
    "meaning": "脑袋不灵光、脑子有病。原指藤蔓向左缠绕，引申为指人行为反常、容易轻信他人的贬义状态。",
    "example_jp": "あんな儲け話に騙されるなんて、あいつの頭は左巻きだ。",
    "example_cn": "居然会被那种稳赚不赔的鬼话骗了，那家伙的脑子真是进水了。"
  },
  {
    "id": 202,
    "word": "いじきたない",
    "kanji": "意地汚い",
    "kana": "いじきたない",
    "pos": "い形容词",
    "meaning": "贪吃、吃相难看。看到食物或利益就双眼放光挪不动步，毫无节制和修养的贪婪模样。",
    "example_jp": "人の分までケーキを平らげるなんて、本当に意地汚いやつだ。",
    "example_cn": "连别人的那份蛋糕都一个人狼吞虎咽地吞了，真是个吃相难看的家伙。"
  },
  {
    "id": 203,
    "word": "かたわら",
    "kanji": "傍ら",
    "kana": "かたわら",
    "pos": "名词",
    "meaning": "在旁边、一边…一边…。主要从事某项活动的同时，利用空闲时间兼顾做着另一件事的状态。",
    "example_jp": "彼は会社員として働く傍ら、夜は小説を書き続けている。",
    "example_cn": "他白天是个苦逼社畜，晚上则伏案熬夜坚持写小说。"
  },
  {
    "id": 204,
    "word": "おちつき",
    "kanji": "落ち着き",
    "kana": "おちつき",
    "pos": "名词",
    "meaning": "沉稳、镇静。遇到突发状况也不慌乱，身体和情绪都保持平稳不毛躁的状态。",
    "example_jp": "面接中も貧乏ゆすりが止まらず、全く落ち着きがない。",
    "example_cn": "面试时也一直紧张地不停抖腿，完全没有半点稳重的样子。"
  },
  {
    "id": 205,
    "word": "なさけ",
    "kanji": "情け",
    "kana": "なさけ",
    "pos": "名词",
    "meaning": "同情心、怜悯。对遭遇不幸或陷入绝境的弱者产生的心疼，并想要给予宽容或施舍的情感。",
    "example_jp": "泣きついても無駄だ。お前にかける情けなど一切ない。",
    "example_cn": "你现在哭着求我也没用。我对你已经没有任何怜悯之心了。"
  },
  {
    "id": 206,
    "word": "うらて",
    "kanji": "裏手",
    "kana": "うらて",
    "pos": "名词",
    "meaning": "建筑物的背面、后门。位于房屋等建筑物后方，通常是正门视线死角或比较隐蔽的区域。",
    "example_jp": "警察から逃れるため、工場の裏手にあるフェンスをよじ登った。",
    "example_cn": "为了躲避警察的追捕，他手脚并用拼命爬过了工厂背面的铁丝网。"
  },
  {
    "id": 207,
    "word": "みあわせる",
    "kanji": "見合わせる",
    "kana": "みあわせる",
    "pos": "动词",
    "meaning": "互相对视 / 暂缓。察觉到气氛不对而停下动作互相交换眼神，或因为情况不佳而决定把计划暂时搁置。",
    "example_jp": "あまりの惨状に、彼らは言葉を失い、ただ顔を見合わせた。",
    "example_cn": "看到这满地狼藉的惨状，他们惊得半天说不出话，只能愣愣地面面相觑。"
  },
  {
    "id": 208,
    "word": "えんえん",
    "kanji": "延々",
    "kana": "えんえん",
    "pos": "副词",
    "meaning": "没完没了、无休止。某件事物像一条长长的线一样拖沓持续，让人感到极其漫长且厌烦的状态。",
    "example_jp": "上司の自慢話を、飲み会で延々と聞かされてうんざりした。",
    "example_cn": "在酒会上被强迫听上司没完没了地吹牛逼，听得我直翻白眼想吐。"
  },
  {
    "id": 209,
    "word": "なまぬるい",
    "kanji": "生温い",
    "kana": "なまぬるい",
    "pos": "い形容词",
    "meaning": "微温的、不痛不痒的。温度介于冷热之间让人觉得不舒服，或指处理事情不够果断、态度轻飘飘的。",
    "example_jp": "彼の生温い態度に腹が立ち、思わず机を叩いて怒鳴った。",
    "example_cn": "他那种不痛不痒的推脱态度彻底惹火了我，我气得一巴掌拍在桌子上吼了起来。"
  },
  {
    "id": 210,
    "word": "まえおき",
    "kanji": "前置き",
    "kana": "まえおき",
    "pos": "名词",
    "meaning": "开场白、铺垫。在说出核心话题之前，为了缓和气氛或引出正题而说的一大堆客套话。",
    "example_jp": "長い前置きはいいから、早く結論だけを教えてくれ。",
    "example_cn": "别再扯那些又臭又长的开场白了，麻烦你赶紧把结论给我扔出来。"
  },
  {
    "id": 211,
    "word": "くみあがる",
    "kanji": "組み上がる",
    "kana": "くみあがる",
    "pos": "动词",
    "meaning": "组装完成、搭建完毕。把散落的各个零件或部件一件件拼接在一起，最终构成一个完整立体的成品。",
    "example_jp": "徹夜で作業して、ようやく巨大なプラモデルが組み上がった。",
    "example_cn": "熬了个通宵疯狂拼装，终于把这个巨大的机甲模型给彻底搞定了。"
  },
  {
    "id": 212,
    "word": "ひする",
    "kanji": "比する",
    "kana": "ひする",
    "pos": "动词",
    "meaning": "比较、匹敌。将两个事物放在同一个天平上衡量高低，或指实力强到足以和另一方并驾齐驱。",
    "example_jp": "今回の赤字は、過去のどの失敗にも比することができないほど深刻だ。",
    "example_cn": "这次公司的账面亏损，严重到了过去任何一次失败都无法比拟的致命地步。"
  },
  {
    "id": 213,
    "word": "いきかた",
    "kanji": "生き方",
    "kana": "いきかた",
    "pos": "名词",
    "meaning": "生活方式、人生态度。一个人在面对选择和困难时，所展现出的信念以及他决定如何度过一生的姿态。",
    "example_jp": "失敗を恐れて挑戦しないなんて、俺の生き方じゃない。",
    "example_cn": "因为害怕失败就缩手缩脚不敢去拼，这可不是老子的人生信条。"
  },
  {
    "id": 214,
    "word": "はやす",
    "kanji": "生やす",
    "kana": "はやす",
    "pos": "动词",
    "meaning": "使生长、留（胡须）。刻意不去修剪，任由胡须、头发或植物从皮肤表面或土里冒出并长长的过程。",
    "example_jp": "失恋のショックからか、彼は無精髭を生やしたまま引きこもっている。",
    "example_cn": "也许是受了失恋的暴击，他留着一脸邋遢的胡茬，天天把自己反锁在屋里。"
  },
  {
    "id": 215,
    "word": "さばく",
    "kanji": "裁く",
    "kana": "さばく",
    "pos": "动词",
    "meaning": "审判、裁决。像法官一样高高在上，根据规则或法律对人的善恶是非冷酷地做出判定和处分。",
    "example_jp": "冷酷な裁判官は、少しの感情も交えずに被告を裁いた。",
    "example_cn": "冷酷的法官脸上没有泛起一丝波澜，毫无感情地对被告下达了最终判决。"
  },
  {
    "id": 216,
    "word": "いいのがれる",
    "kanji": "言い逃れる",
    "kana": "いいのがれる",
    "pos": "动词",
    "meaning": "狡辩、推脱。为了逃避责任或责罚，满头大汗地寻找各种牵强的借口为自己开脱的窘迫样子。",
    "example_jp": "決定的な証拠を突きつけられ、もう言い逃れることはできなかった。",
    "example_cn": "被死死地甩出决定性的录音证据后，他满头大汗，再也没法狡辩推脱了。"
  },
  {
    "id": 217,
    "word": "すえる",
    "kanji": "据える",
    "kana": "すえる",
    "pos": "动词",
    "meaning": "安置、沉下心。把沉重的东西稳稳地固定在一个地方，或指把目光、怒火等死死锁定在某处不动。",
    "example_jp": "腹に据えかねる暴言を吐かれ、思わず相手の胸ぐらをつかんだ。",
    "example_cn": "听到那种让人压不住火的辱骂，我气得直接一把揪住了对方的衣领。"
  },
  {
    "id": 218,
    "word": "こうばしい",
    "kanji": "香ばしい",
    "kana": "こうばしい",
    "pos": "い形容词",
    "meaning": "芳香的、烤焦的香味。食物在烘烤或油炸时散发出的微微带点焦香的味道，闻了让人直咽口水。",
    "example_jp": "パン屋の前を通ると、焼きたての香ばしい匂いが漂ってきた。",
    "example_cn": "路过街角的面包店时，一股刚出炉的面团焦香味扑鼻而来，勾得人直咽口水。"
  },
  {
    "id": 219,
    "word": "きめつける",
    "kanji": "決め付ける",
    "kana": "きめつける",
    "pos": "动词",
    "meaning": "主观断定、一口咬定。完全不听对方解释，仅凭自己的刻板印象或直觉就粗暴地给别人下结论。",
    "example_jp": "話も聞かずに「お前が悪い」と決め付けられ、悔しくて涙が出た。",
    "example_cn": "连我的解释都不听就被一口咬定“全都是你的错”，我委屈得眼泪吧嗒吧嗒往下掉。"
  },
  {
    "id": 220,
    "word": "まのあたり",
    "kanji": "目の当たり",
    "kana": "まのあたり",
    "pos": "名词",
    "meaning": "亲眼目睹。令人震惊或震撼的景象，没有隔着屏幕，而是活生生地在自己极近的距离内发生。",
    "example_jp": "悲惨な事故現場を目の当たりにして、足の震えが止まらなかった。",
    "example_cn": "活生生地亲眼目睹了那血肉模糊的事故现场，我吓得双腿止不住地打颤。"
  },
  {
    "id": 221,
    "word": "とりつくろう",
    "kanji": "取り繕う",
    "kana": "とりつくろう",
    "pos": "动词",
    "meaning": "掩饰、敷衍。内心慌乱却要在表面上强装镇定，为了掩盖自己的失误而拼命挤出笑容打圆场。",
    "example_jp": "嘘がばれそうになり、必死に笑顔を作ってその場を取り繕った。",
    "example_cn": "眼看谎言就要被当场戳穿，他拼命挤出僵硬的笑容，企图把这尴尬的场面糊弄过去。"
  },
  {
    "id": 222,
    "word": "ちんあげ",
    "kanji": "賃上げ",
    "kana": "ちんあげ",
    "pos": "名词",
    "meaning": "加薪、涨工资。打工人在面对飞涨的物价时，最渴望公司做出的提高基础薪资的举动。",
    "example_jp": "物価は上がる一方なのに、会社は一向に賃上げに応じようとしない。",
    "example_cn": "超市里的菜价一天天飞涨，公司却像铁公鸡一样，死活不愿意松口给员工加薪。"
  },
  {
    "id": 223,
    "word": "てなおし",
    "kanji": "手直し",
    "kana": "てなおし",
    "pos": "名词/动词",
    "meaning": "修改、返工。对已经做好的半成品或被退回的方案，苦逼地在原有的基础上进行修补和调整。",
    "example_jp": "提出した企画書がボツになり、徹夜で大幅な手直しをさせられた。",
    "example_cn": "满怀信心交上去的企划书被无情打回，只能苦着脸熬了个通宵进行大改。"
  },
  {
    "id": 224,
    "word": "こやし",
    "kanji": "肥やし",
    "kana": "こやし",
    "pos": "名词",
    "meaning": "肥料、养分。撒在土里让植物吸收生长的粪肥，引申为将痛苦的经历转化为让自己变得更强大的人生养分。",
    "example_jp": "辛い失恋の経験も、いつかは自分を成長させる肥やしになるはずだ。",
    "example_cn": "这场哭得撕心裂肺的失恋，总有一天会化作让我变得更加坚韧成熟的养分。"
  },
  {
    "id": 225,
    "word": "こさめ",
    "kanji": "小雨",
    "kana": "こさめ",
    "pos": "名词",
    "meaning": "毛毛雨。雨滴细小轻微，淅淅沥沥地飘落，打在脸上几乎没什么感觉，连伞都不太需要撑的程度。",
    "example_jp": "傘をさすほどでもない小雨の中を、俯きながら一人で歩き続けた。",
    "example_cn": "在连伞都懒得撑的毛毛细雨中，我缩着脖子低着头，一个人默默地走着。"
  },
  {
    "id": 226,
    "word": "さがしあてる",
    "kanji": "探し当てる",
    "kana": "さがしあてる",
    "pos": "动词",
    "meaning": "历经波折找到。在一大堆杂物或茫茫人海中四处翻找摸索，最后终于把想要的东西刨出来的瞬间。",
    "example_jp": "埃まみれの倉庫の奥から、ずっと探していたアルバムを探し当てた。",
    "example_cn": "在呛人的积灰仓库最深处一顿翻找，终于刨出了那本我惦记了很久的旧相册。"
  },
  {
    "id": 227,
    "word": "たからか",
    "kanji": "高らか",
    "kana": "たからか",
    "pos": "形容动词",
    "meaning": "响亮地、高昂地。声音非常洪亮且穿透力强，通常伴随着极度的自信、骄傲或胜利的狂喜。",
    "example_jp": "優勝が決まった瞬間、キャプテンは高らかに勝利の雄叫びを上げた。",
    "example_cn": "裁判吹响夺冠哨音的那一瞬间，队长激动地仰起头，发出了响亮又撕裂的胜利咆哮。"
  },
  {
    "id": 228,
    "word": "ことに",
    "kanji": "殊に",
    "kana": "ことに",
    "pos": "副词",
    "meaning": "特别、尤其。在同类的事物中，某一个显得格外扎眼或程度远远超过其他事物。",
    "example_jp": "今年の夏は暑いが、今日は殊に日差しが強くてクラクラする。",
    "example_cn": "今年的夏天本来就热得像蒸笼，但今天这毒辣的太阳更是晒得人一阵阵发晕。"
  },
  {
    "id": 229,
    "word": "ちゃのま",
    "kanji": "茶の間",
    "kana": "ちゃのま",
    "pos": "名词",
    "meaning": "客厅、起居室。一家人吃完饭后聚在一起，随意瘫坐着看电视、聊天，充满烟火气的生活空间。",
    "example_jp": "夕食後、茶の間に寝転がってテレビを見るのが至福の時間だ。",
    "example_cn": "吃饱喝足后，像滩烂泥一样瘫在客厅的榻榻米上看搞笑节目，简直爽翻了。"
  },
  {
    "id": 230,
    "word": "おき",
    "kanji": "沖",
    "kana": "おき",
    "pos": "名词",
    "meaning": "离岸较远的海面。远离沙滩、水深且风浪较大的宽阔海域，视线望去与天空相接的地方。",
    "example_jp": "嵐が近づいているのか、沖のほうでは波が激しくうねっている。",
    "example_cn": "黑压压的乌云卷过来了，远处的深海面上正翻涌着令人不安的白色巨浪。"
  },
  {
    "id": 231,
    "word": "ばからしい",
    "kanji": "馬鹿らしい",
    "kana": "ばからしい",
    "pos": "い形容词",
    "meaning": "荒谬的、不值一提。觉得某件事蠢到家了，付出的努力和回报完全不成正比，连生气的力气都不想出。",
    "example_jp": "あんな安い給料で休日まで働くなんて、本当に馬鹿らしい。",
    "example_cn": "就拿那么点塞牙缝的破工资，周末还要在电脑前给公司卖命，真是蠢透了。"
  },
  {
    "id": 232,
    "word": "ねんのため",
    "kanji": "念のため",
    "kana": "ねんのため",
    "pos": "词组/副词",
    "meaning": "为了慎重起见。虽然觉得大概率不会出事，但为了以防万一，还是强迫症般地多做一步确认动作。",
    "example_jp": "戸締まりは確認したが、念のためもう一度玄関に戻って鍵をチェックした。",
    "example_cn": "明明记得锁门了，但为了保险起见，我还是强迫症发作折回玄关又死命拽了两下门把手。"
  },
  {
    "id": 233,
    "word": "おきざり",
    "kanji": "置き去り",
    "kana": "おきざり",
    "pos": "名词",
    "meaning": "抛弃、丢下不管。狠心转身离开，把人或动物孤零零地留在原地，完全不管对方接下来的死活。",
    "example_jp": "借金を残したまま、夫は私と子供を置き去りにして姿を消した。",
    "example_cn": "留下了一屁股烂账，那个死鬼丈夫就这么狠心把我和孩子抛下，溜得无影无踪。"
  },
  {
    "id": 234,
    "word": "ほどとおい",
    "kanji": "程遠い",
    "kana": "ほどとおい",
    "pos": "い形容词",
    "meaning": "相去甚远。就像隔着十万八千里一样，距离理想中的目标或及格线还有一大截让人绝望的差距。",
    "example_jp": "理想のプログラマーには程遠く、今日もエラーと格闘している。",
    "example_cn": "离成为那种敲键盘如飞的大佬还差得远，今天我也在痛苦地对着满屏飘红的报错抓头发。"
  },
  {
    "id": 235,
    "word": "しでかす",
    "kanji": "仕出かす",
    "kana": "しでかす",
    "pos": "动词",
    "meaning": "闯下大祸。在无意中或头脑发热时，干出了让人目瞪口呆且难以挽回的蠢事或严重的失误。",
    "example_jp": "会社の重要なデータを消去してしまうという、取り返しのつかないミスを仕出かした。",
    "example_cn": "手一滑竟然把公司的核心数据库给清空了，我这次真是捅了一个天大的篓子。"
  },
  {
    "id": 236,
    "word": "のける",
    "kanji": "除ける",
    "kana": "のける",
    "pos": "动词",
    "meaning": "挪开、移走。因为觉得碍事，粗暴或随意地把挡在面前的东西推到一旁，腾出空间。",
    "example_jp": "邪魔なダンボールを脇に除けて、やっと歩けるスペースを作った。",
    "example_cn": "把挡在过道上的破纸箱粗暴地踢到墙角，总算勉强清出了一条能下脚的路。"
  },
  {
    "id": 237,
    "word": "わりあてる",
    "kanji": "割り当てる",
    "kana": "わりあてる",
    "pos": "动词",
    "meaning": "分配、分派。把有限的任务、时间或金钱，像切蛋糕一样按照某种标准分发给底下的人或部门。",
    "example_jp": "予算が足りないため、各部署に割り当てられる経費が大幅に削られた。",
    "example_cn": "因为上面卡着经费，分派到我们部门的可怜预算又被硬生生砍掉了一大半。"
  },
  {
    "id": 238,
    "word": "ころも",
    "kanji": "衣",
    "kana": "ころも",
    "pos": "名词",
    "meaning": "面糊、法衣。包裹在炸鸡或炸虾外层的酥脆面皮，或者是僧侣身上穿的那种宽大飘逸的布料。",
    "example_jp": "サクサクの衣に包まれたエビフライを、熱いうちに頬張った。",
    "example_cn": "夹起一只裹着金黄酥脆面糊的炸大虾，趁着烫嘴一口痛快地咬了下去。"
  },
  {
    "id": 239,
    "word": "いろあい",
    "kanji": "色合い",
    "kana": "いろあい",
    "pos": "名词",
    "meaning": "色调、色彩氛围。颜色的深浅搭配，不仅是视觉上的色彩，更带有一种能烘托出特殊氛围的感觉。",
    "example_jp": "何度も洗濯しているうちに、シャツの色合いがすっかりあせてしまった。",
    "example_cn": "丢在洗衣机里粗暴地洗了太多次，这件衬衫原本好看的复古色调已经褪得发白了。"
  },
  {
    "id": 240,
    "word": "みちづれ",
    "kanji": "道連れ",
    "kana": "みちづれ",
    "pos": "名词",
    "meaning": "旅伴、拉人垫背。在旅途中结伴同行的人，或在自己走投无路面临死亡和失败时，死死拽着另一个人一起下水。",
    "example_jp": "どうせ地獄に落ちるなら、お前も道連れにしてやる！",
    "example_cn": "反正老子今天横竖都是个死，干脆拖着你一起下地狱垫背！"
  },
  {
    "id": 241,
    "word": "くちごもる",
    "kanji": "口籠もる",
    "kana": "くちごもる",
    "pos": "动词",
    "meaning": "支支吾吾。被戳中痛处或心虚时，舌头打结，声音卡在喉咙里嘟嘟囔囔，半天憋不出一句完整的话。",
    "example_jp": "核心を突く質問をされて、彼はしどろもどろになり口籠もった。",
    "example_cn": "被当众问到那个要命的核心问题时，他顿时慌了神，满头大汗地支支吾吾挤不出半个字。"
  },
  {
    "id": 242,
    "word": "みなり",
    "kanji": "身なり",
    "kana": "みなり",
    "pos": "名词",
    "meaning": "打扮、装束。一个人全身上下的衣服鞋帽搭配，通常能直接反映出他兜里有没有钱或者近期的精神面貌。",
    "example_jp": "彼はボロボロの身なりをしているが、実は大企業の会長らしい。",
    "example_cn": "别看他穿着一身破破烂烂、洗发白的衣服，听说背地里竟然是个不差钱的大老板。"
  },
  {
    "id": 243,
    "word": "きりぬける",
    "kanji": "切り抜ける",
    "kana": "きりぬける",
    "pos": "动词",
    "meaning": "冲破难关、死里逃生。在四周楚歌、极度危险或困难的绝境中，咬紧牙关拼尽全力杀出一条血路成功脱险。",
    "example_jp": "会社倒産の危機を、社員全員の必死の努力でなんとか切り抜けた。",
    "example_cn": "全公司上下连熬了好几个通宵拼了老命，总算是有惊无险地熬过了破产倒闭的绝境。"
  },
  {
    "id": 244,
    "word": "おさまる",
    "kanji": "収まる",
    "kana": "おさまる",
    "pos": "动词",
    "meaning": "容纳、平息。狂暴的情绪或风浪慢慢平静下来，或者指某样东西大小刚刚好，能妥帖地塞进一个盒子里。",
    "example_jp": "激しい頭痛がようやく収まり、ベッドに倒れ込んで眠りについた。",
    "example_cn": "那种脑子里像是有电钻在响的剧痛终于平息了一点，我虚脱般地一头栽倒在床上昏睡过去。"
  },
  {
    "id": 245,
    "word": "てんてん",
    "kanji": "転々",
    "kana": "てんてん",
    "pos": "名词/副词",
    "meaning": "辗转流浪。像滚动的球一样居无定所，不停地更换工作或睡觉的地方，过着无法安定的漂泊生活。",
    "example_jp": "借金取りから逃れるため、日本中の安宿を転々とする生活を送った。",
    "example_cn": "为了躲避那些凶神恶煞的高利贷，他像条丧家犬一样，每天在日本各地的廉价小旅馆里辗转流浪。"
  },
  {
    "id": 246,
    "word": "あんぜんベルト",
    "kanji": "安全ベルト",
    "kana": "あんぜんベルト",
    "pos": "名词",
    "meaning": "安全带。坐在飞驰的汽车或颠簸的飞机上时，那条紧紧勒住身体、能在关键时刻保命的带子。",
    "example_jp": "飛行機が激しく揺れ始め、慌てて安全ベルトをきつく締め直した。",
    "example_cn": "机舱突然像过山车一样剧烈颠簸起来，吓得我手忙脚乱地把安全带又死死地勒紧了一圈。"
  },
  {
    "id": 247,
    "word": "のき",
    "kanji": "軒",
    "kana": "のき",
    "pos": "名词",
    "meaning": "屋檐。房子边缘延伸出来遮风挡雨的那一圈构造，常被路人在突然遭遇大雨时借来狼狈避雨。",
    "example_jp": "突然の土砂降りに遭い、見知らぬ民家の軒下で雨宿りをした。",
    "example_cn": "走在半路被突如其来的暴雨浇了个透心凉，只能狼狈地缩在陌生人家的屋檐底下躲雨。"
  },
  {
    "id": 248,
    "word": "なついん",
    "kanji": "捺印",
    "kana": "なついん",
    "pos": "名词/动词",
    "meaning": "盖章。在重要的文件或卖身契上，重重地按下一个红色的印章，代表着一种无法反悔的承诺或放弃。",
    "example_jp": "契約書の最後に震える手で捺印し、ついに会社を売却した。",
    "example_cn": "用发抖的手在收购合同的最后一页重重地盖上了印章，终究还是把自己的心血公司给卖了。"
  },
  {
    "id": 249,
    "word": "そり",
    "kanji": "反り",
    "kana": "そり",
    "pos": "名词",
    "meaning": "弯曲翘起、性格不合。木板受潮后翘起变形的样子，常用来形容两个人气场互斥、凑在一起就浑身难受。",
    "example_jp": "新しい上司とはどうにも反りが合わず、毎日顔を合わせるのが苦痛だ。",
    "example_cn": "跟那个空降的新上司气场实在是不对付，现在每天在办公室看到他那张脸都觉得是在上刑。"
  },
  {
    "id": 250,
    "word": "しける",
    "kanji": "時化る",
    "kana": "しける",
    "pos": "动词",
    "meaning": "遇上风暴、郁闷垂头丧气。海上狂风大作渔船没法出海，引申为生意惨淡得门可罗雀，或人遇到倒霉事拉长着脸的衰样。",
    "example_jp": "財布を落としたせいで、彼は朝からずっと時化た顔をしている。",
    "example_cn": "因为把装满现金的钱包给弄丢了，他从大清早开始就一直拉长着脸，一副倒霉透顶的衰样。"
  },
  {
    "id": 251,
    "word": "おおて",
    "kanji": "大手",
    "kana": "おおて",
    "pos": "名词",
    "meaning": "大型企业、大公司。指在某个行业里占据霸主地位、资金雄厚且名字响当当的头部企业。",
    "example_jp": "憧れの大手企業から不採用通知が届き、ベッドで泣き崩れた。",
    "example_cn": "收到那家梦寐以求的头部大厂发来的拒信，我崩溃地倒在床上大哭起来。"
  },
  {
    "id": 252,
    "word": "かべ",
    "kanji": "壁",
    "kana": "かべ",
    "pos": "名词",
    "meaning": "墙壁、障碍。阻挡在面前的厚实砖墙，或指让人感到绝望、难以跨越的巨大瓶颈和现实阻碍。",
    "example_jp": "理想と現実の壁にぶつかり、彼は頭を抱えて座り込んだ。",
    "example_cn": "狠狠撞上了理想与现实之间那堵冰冷的高墙，他绝望地抱住头瘫坐在地。"
  },
  {
    "id": 253,
    "word": "ゆきどまり",
    "kanji": "行き止まり",
    "kana": "ゆきどまり",
    "pos": "名词",
    "meaning": "死胡同、走投无路。前面的路被彻底封死无法通行，引申为事情陷入绝境、完全找不到出路的窒息感。",
    "example_jp": "迷い込んだ路地は行き止まりで、背後から足音が近づいてきた。",
    "example_cn": "慌不择路跑进的小巷居然是个死胡同，而身后的脚步声却还在步步逼近。"
  },
  {
    "id": 254,
    "word": "きまぐれ",
    "kanji": "気まぐれ",
    "kana": "きまぐれ",
    "pos": "名词/形容动词",
    "meaning": "心血来潮、忽冷忽热。像猫一样全凭一时兴起做事，情绪或态度变幻无常，让人完全摸不着头脑。",
    "example_jp": "彼女の気まぐれな態度に振り回され、もう疲れ果てた。",
    "example_cn": "被她那种忽冷忽热、全凭心情的态度折腾得团团转，我真的是身心俱疲了。"
  },
  {
    "id": 255,
    "word": "かる",
    "kanji": "駆る",
    "kana": "かる",
    "pos": "动词",
    "meaning": "驱使、迫使。被某种强烈的负面情绪（如不安、冲动）在背后猛推一把，控制不住地去做某事。",
    "example_jp": "抑えきれない衝動に駆られ、真夜中に元カノに電話をかけてしまった。",
    "example_cn": "被一阵压不住的冲动冲昏了头脑，我竟然在半夜手贱给前女友拨了电话。"
  },
  {
    "id": 256,
    "word": "はぎれ",
    "kanji": "歯切れ",
    "kana": "はぎれ",
    "pos": "名词",
    "meaning": "咬字吐词、干脆利落。说话时发音清晰脆生，引申为态度明确不拖泥带水（常接否定表示支支吾吾）。",
    "example_jp": "借金の返済を迫ると、彼の歯切れが急に悪くなった。",
    "example_cn": "一逼问他什么时候还钱，他原本利索的舌头瞬间就打结了，半天憋不出一句痛快话。"
  },
  {
    "id": 257,
    "word": "はちうえ",
    "kanji": "鉢植え",
    "kana": "はちうえ",
    "pos": "名词",
    "meaning": "盆栽。种在陶瓷或塑料盆里的小植物，平时需要细心浇水打理的脆弱生命。",
    "example_jp": "水をやり忘れたせいで、窓際の鉢植えが完全に枯れ果てていた。",
    "example_cn": "因为连着几天忘了浇水，窗台上那盆原本绿油油的盆栽已经彻底枯死透了。"
  },
  {
    "id": 258,
    "word": "とりなおす",
    "kanji": "取り直す",
    "kana": "とりなおす",
    "pos": "动词",
    "meaning": "重新拿、重振（精神）。手滑没拿稳重新抓紧，或指在遭遇打击后，用力拍拍脸颊强行让自己振作起来。",
    "example_jp": "面接に落ちて落ち込んだが、気を取り直して次の会社に応募した。",
    "example_cn": "虽然面试被刷难受得要命，但我还是强打起精神，咬牙给下一家公司投了简历。"
  },
  {
    "id": 259,
    "word": "とりもどす",
    "kanji": "取り戻す",
    "kana": "とりもどす",
    "pos": "动词",
    "meaning": "夺回、恢复。把被别人抢走或自己失去的东西（如钱包、理智、青春）硬生生地拽回到自己手里。",
    "example_jp": "詐欺師から全額を取り戻すため、彼は血眼になって証拠を集めた。",
    "example_cn": "为了把被骗子坑走的钱一分不少地夺回来，他红着眼眶发疯似地四处搜集证据。"
  },
  {
    "id": 260,
    "word": "しょうする",
    "kanji": "称する",
    "kana": "しょうする",
    "pos": "动词",
    "meaning": "自称、假冒。给自己贴上一个光鲜亮丽的标签，或者打着某个正当的幌子在背地里干些见不得人的勾当。",
    "example_jp": "専門家と称する怪しい男が、高額な情報商材を売りつけてきた。",
    "example_cn": "一个自称是投资专家的可疑油腻男，正唾沫横飞地向我推销天价的诈骗课程。"
  },
  {
    "id": 261,
    "word": "さかえる",
    "kanji": "栄える",
    "kana": "さかえる",
    "pos": "动词",
    "meaning": "繁荣、兴旺。原本冷清的地方变得人声鼎沸、车水马龙，或者指生意红火得赚得盆满钵满。",
    "example_jp": "かつて栄えたこの商店街も、今ではシャッター通りと化している。",
    "example_cn": "这条曾经人挤人、热闹非凡的商业街，如今却沦为了一条商铺大门紧闭的荒凉死街。"
  },
  {
    "id": 262,
    "word": "よりどころ",
    "kanji": "拠り所",
    "kana": "よりどころ",
    "pos": "名词",
    "meaning": "依靠、精神支柱。在快要崩溃倒下时，能让自己死死抱住、提供心灵慰藉和支撑的最后依靠。",
    "example_jp": "唯一の心の拠り所だった推しの引退発表に、目の前が真っ暗になった。",
    "example_cn": "看到作为我唯一精神支柱的偶像宣布退役，我只觉得眼前一黑，整个世界都塌了。"
  },
  {
    "id": 263,
    "word": "よしあし",
    "kanji": "良し悪し",
    "kana": "よしあし",
    "pos": "名词",
    "meaning": "好坏、善恶。事物本身附带的正反两面性，或者是对一件事的质量和道德标准进行评判的标尺。",
    "example_jp": "物事の良し悪しも分からず、ただ周りに流されて生きてきた。",
    "example_cn": "连最基本的是非好坏都分不清，我这些年就这么浑浑噩噩地随波逐流混了过来。"
  },
  {
    "id": 264,
    "word": "つつしんで",
    "kanji": "謹んで",
    "kana": "つつしんで",
    "pos": "副词",
    "meaning": "恭敬地、谨此。低着头、满脸肃穆地表达自己的敬意或歉意，多用于非常正式的道歉或祝贺场合。",
    "example_jp": "今回の不祥事につきまして、謹んでお詫び申し上げます。",
    "example_cn": "针对此次曝出的严重丑闻，我们在此低头致以最深刻、最诚挚的歉意。"
  },
  {
    "id": 265,
    "word": "とりのぞく",
    "kanji": "取り除く",
    "kana": "とりのぞく",
    "pos": "动词",
    "meaning": "拆除、剔除。像拔掉肉里的刺一样，把碍眼、有害或不需要的东西连根拔起，彻底清理干净。",
    "example_jp": "手術でガン細胞を完全に取り除き、ようやく命の危機を脱した。",
    "example_cn": "通过手术把体内的癌细胞扒得干干净净，总算是在鬼门关前捡回了一条命。"
  },
  {
    "id": 266,
    "word": "ひとくろう",
    "kanji": "一苦労",
    "kana": "ひとくろう",
    "pos": "名词",
    "meaning": "费一番功夫。做某件事不仅费时费力，还惹得一身狼狈，累得满头大汗才勉强搞定的小折磨。",
    "example_jp": "泥酔した上司をタクシーに押し込むだけで、もう一苦労だった。",
    "example_cn": "光是把那个醉得像滩烂泥的秃头老总硬塞进出租车里，就差点要了我的半条老命。"
  },
  {
    "id": 267,
    "word": "おかす",
    "kanji": "侵す",
    "kana": "おかす",
    "pos": "动词",
    "meaning": "侵犯、侵入。像强盗一样粗暴地跨过边界，践踏别人的领地、权利，或者指病魔肆无忌惮地吞噬健康的身体。",
    "example_jp": "プライバシーを無神経に侵され、彼女は怒りでワナワナと震えた。",
    "example_cn": "私生活被媒体毫无底线地肆意扒光，她气得浑身发抖，牙齿咬得咯咯响。"
  },
  {
    "id": 268,
    "word": "いたましい",
    "kanji": "痛ましい",
    "kana": "いたましい",
    "pos": "い形容词",
    "meaning": "惨不忍睹、令人心痛。看到那种血肉模糊或极度悲惨的画面，心脏像被揪住一样难受得不敢直视。",
    "example_jp": "ニュースで流れる痛ましい事故現場の映像に、思わず目を背けた。",
    "example_cn": "电视上正在播放那惨不忍睹的连环车祸现场，吓得我倒抽一口凉气，赶紧捂住了眼睛。"
  },
  {
    "id": 269,
    "word": "かんがえだす",
    "kanji": "考え出す",
    "kana": "かんがえだす",
    "pos": "动词",
    "meaning": "想出、开始思考。绞尽脑汁后脑海里突然蹦出一个点子，或者是一旦钻进某个死胡同就开始胡思乱想停不下来。",
    "example_jp": "将来の不安を一度考え出すと、夜も眠れなくなってしまう。",
    "example_cn": "一旦开始瞎琢磨未来那些让人焦虑的破事，我就在床上翻来覆去，整宿整宿地失眠。"
  },
  {
    "id": 270,
    "word": "たえる",
    "kanji": "絶える",
    "kana": "たえる",
    "pos": "动词",
    "meaning": "断绝、停止。原本连续不断的东西（如呼吸、声音、血脉）像被剪断的线一样，突然消失得无影无踪。",
    "example_jp": "遭難から一週間が経ち、ついに彼からの通信がプツリと絶えた。",
    "example_cn": "在雪山遇险整整一个星期后，无线电里传来的他的求救声终于死寂一般彻底断绝了。"
  },
  {
    "id": 271,
    "word": "おちど",
    "kanji": "落ち度",
    "kana": "おちど",
    "pos": "名词",
    "meaning": "过失、破绽。因为自己的粗心大意或能力不足，在工作中留下的那种被人揪住不放的致命把柄。",
    "example_jp": "私に一切の落ち度はないのに、なぜか責任を全て押し付けられた。",
    "example_cn": "明明这破事我半点毛病都没挑出来，却硬生生被那个甩锅上司扣上了全部的黑锅。"
  },
  {
    "id": 272,
    "word": "ちょう",
    "kanji": "超〜",
    "kana": "ちょう",
    "pos": "接头词",
    "meaning": "超级、极度。年轻人常用的夸张词缀，表示某种状态或情绪直接拉满，简直要突破天际的程度。",
    "example_jp": "徹夜明けのプレゼンは、超しんどくて吐き気がするレベルだった。",
    "example_cn": "熬了个大通宵还要硬撑着上去做发表，那感觉简直超级要命，恶心得我想当场吐出来。"
  },
  {
    "id": 273,
    "word": "えり",
    "kanji": "襟",
    "kana": "えり",
    "pos": "名词",
    "meaning": "衣领。衣服脖子周围那一圈布料，经常被用来揪住（发怒）或者正一正（表示态度端正）。",
    "example_jp": "激怒した客にワイシャツの襟首を掴まれ、生きた心地がしなかった。",
    "example_cn": "被那个暴怒的壮汉顾客一把死死揪住衬衫衣领提起，我吓得魂飞魄散，以为今天交代在这了。"
  },
  {
    "id": 274,
    "word": "あれる",
    "kanji": "荒れる",
    "kana": "あれる",
    "pos": "动词",
    "meaning": "荒芜、粗糙、心情暴躁。天气恶劣狂风大作，或者人因为压力太大而像头发疯的野兽一样乱砸东西发脾气。",
    "example_jp": "面接に落ち続けて心が荒れ、部屋の物を手当たり次第に投げつけた。",
    "example_cn": "因为连续被十几家公司拒之门外，我烦躁得要发疯，抓起房间里的东西就到处乱砸。"
  },
  {
    "id": 275,
    "word": "よりかかる",
    "kanji": "寄り掛かる",
    "kana": "よりかかる",
    "pos": "动词",
    "meaning": "倚靠、依赖。身体软绵绵地把重量压在墙上或别人身上，引申为遇到困难时像个巨婴一样只会指望别人帮忙。",
    "example_jp": "疲れ果てて電車のドアに寄り掛かっていたら、急に開いて転げ落ちそうになった。",
    "example_cn": "累得像滩烂泥一样死死靠在电车车门上，结果门突然一开，我差点四脚朝天摔成狗吃屎。"
  },
  {
    "id": 276,
    "word": "そなわる",
    "kanji": "備わる",
    "kana": "そなわる",
    "pos": "动词",
    "meaning": "具备、自带。某种高级功能或不可思议的才华，像是出厂设置一样完美地嵌在某个物体或人身上。",
    "example_jp": "彼には人の心を惹きつける、生まれながらのカリスマ性が備わっている。",
    "example_cn": "他身上就是自带那种气场，一种仿佛娘胎里带出来的、能把所有人的目光都死死吸住的领袖魅力。"
  },
  {
    "id": 277,
    "word": "おもわく",
    "kanji": "思惑",
    "kana": "おもわく",
    "pos": "名词",
    "meaning": "盘算、意图。躲在暗处滴溜溜转的眼珠子，心里偷偷打着算盘，企图算计别人或谋取私利的腹黑想法。",
    "example_jp": "ライバル会社の汚い思惑に気付かず、まんまと罠にはまってしまった。",
    "example_cn": "竟然连死对头公司那点龌龊的阴谋算计都没看透，我就这么像个傻子一样一脚踩进了陷阱。"
  },
  {
    "id": 278,
    "word": "くみかわす",
    "kanji": "酌み交わす",
    "kana": "くみかわす",
    "pos": "动词",
    "meaning": "互相斟酒、推杯换盏。两个人面对面坐着，互相给对方的酒杯里倒满酒，一边喝一边敞开心扉互诉衷肠。",
    "example_jp": "久しぶりに再会した親友と、朝まで酒を酌み交わして語り明かした。",
    "example_cn": "和多年不见的死党在居酒屋里你一杯我一杯地互相倒酒，硬是扯着嗓子吹牛逼熬到了天亮。"
  },
  {
    "id": 279,
    "word": "くわずぎらい",
    "kanji": "食わず嫌い",
    "kana": "くわずぎらい",
    "pos": "名词",
    "meaning": "没吃就讨厌、抱有偏见。连碰都没碰过、尝都没尝过，就凭着刻板印象皱着眉头连连摆手说“我不行”的抗拒心理。",
    "example_jp": "ずっと食わず嫌いだった納豆を一口食べてみたら、意外と美味しくて驚いた。",
    "example_cn": "抱着必死的决心尝了一口以前死活不肯碰的臭纳豆，结果那拉丝的口感竟然意外地上头。"
  },
  {
    "id": 280,
    "word": "くちる",
    "kanji": "朽ちる",
    "kana": "くちる",
    "pos": "动词",
    "meaning": "腐朽、腐烂。木头或金属在风吹日晒下变得破破烂烂、一碰就碎，或指人默默无闻地孤独老死在角落里。",
    "example_jp": "誰も住まなくなった廃屋は、雨風に晒されてボロボロに朽ち果てていた。",
    "example_cn": "那栋荒废已久的破房子，在无情的风吹雨打下，已经被摧残得烂成了一堆摇摇欲坠的破木头。"
  },
  {
    "id": 281,
    "word": "みぎより",
    "kanji": "右寄り",
    "kana": "みぎより",
    "pos": "名词",
    "meaning": "偏右、右倾。物理位置上靠着右边，或者在政治思想上偏向保守、传统的做派。",
    "example_jp": "彼は最近、ネットの極端な意見に影響されて、思想がかなり右寄りになっている。",
    "example_cn": "他最近不知道中了网上什么邪，受那些极端言论洗脑，脑子里的思想变得越来越保守偏激了。"
  },
  {
    "id": 282,
    "word": "まちあぐむ",
    "kanji": "待ちあぐむ",
    "kana": "まちあぐむ",
    "pos": "动词",
    "meaning": "等得不耐烦、望眼欲穿。像块望夫石一样等了半天，眼看时间一分一秒流逝，内心的烦躁和绝望感越来越重。",
    "example_jp": "連絡のない彼を冷たい雨の中で待ちあぐみ、ついに涙が溢れてきた。",
    "example_cn": "在冰冷的雨夜里像个傻子一样死等着那个失联的混蛋，等得我彻底崩溃，眼泪决堤而出。"
  },
  {
    "id": 283,
    "word": "はどめ",
    "kanji": "歯止め",
    "kana": "はどめ",
    "pos": "名词",
    "meaning": "制动器、遏制。像刹车片一样卡住车轮，阻止某件坏事（如物价上涨、欲望膨胀）像滚雪球一样越滚越大的限制手段。",
    "example_jp": "パチンコへの依存に歯止めがかからず、ついに消費者金融に手を出した。",
    "example_cn": "脑子里像没有刹车一样疯狂沉迷打柏青哥，最后输得倾家荡产，连高利贷都敢去碰了。"
  },
  {
    "id": 284,
    "word": "からむ",
    "kanji": "絡む",
    "kana": "からむ",
    "pos": "动词",
    "meaning": "缠绕、纠缠、无理取闹。像藤蔓一样死死缠在一起解不开，或者喝醉酒后红着眼睛死拽着路人的衣服耍酒疯。",
    "example_jp": "酔っ払いに駅前でしつこく絡まれ、終電を逃してしまった最悪の夜だ。",
    "example_cn": "在车站前被一个满身酒气的醉汉死皮赖脸地揪住衣服发酒疯，害我错过了末班车，真是倒霉透顶的破夜。"
  },
  {
    "id": 285,
    "word": "ざしき",
    "kanji": "座敷",
    "kana": "ざしき",
    "pos": "名词",
    "meaning": "铺着榻榻米的房间、宴会席。日式传统的和室，通常用来接待重要客人或者大家脱了鞋盘腿围坐着大吃大喝的地方。",
    "example_jp": "高級料亭の広い座敷に通され、緊張で足がガクガク震えた。",
    "example_cn": "被毕恭毕敬地请进了高级料亭那宽敞的榻榻米包间，我紧张得连脱鞋的脚都在不争气地狂抖。"
  },
  {
    "id": 286,
    "word": "はえぎわ",
    "kanji": "生え際",
    "kana": "はえぎわ",
    "pos": "名词",
    "meaning": "发际线。额头上方头发开始生长的那条边界线，常成为中年打工人对脱发感到绝望的重点关注区域。",
    "example_jp": "鏡を見るたびに後退していく生え際から、目を逸らしたくなった。",
    "example_cn": "每次照镜子看着自己那像退潮一样疯狂后退的发际线，我都绝望得恨不得把镜子砸了。"
  },
  {
    "id": 287,
    "word": "はりあう",
    "kanji": "張り合う",
    "kana": "はりあう",
    "pos": "动词",
    "meaning": "竞争、争强好胜。像两只斗鸡一样瞪红了眼，谁也不服谁，拼了老命要在成绩、地位或面子上压过对方一头。",
    "example_jp": "同期のあいつと売上で意地になって張り合い、過労で倒れそうになった。",
    "example_cn": "为了销售额死要面子跟同期那个卷王杠上了，没日没夜地死磕，累得我差点一口气没喘上来猝死在工位上。"
  },
  {
    "id": 288,
    "word": "つかいがって",
    "kanji": "使い勝手",
    "kana": "つかいがって",
    "pos": "名词",
    "meaning": "使用便利度、顺手程度。一个工具或软件拿在手里用起来的直观感受，是丝滑得让人直呼内行，还是反人类得想砸键盘。",
    "example_jp": "この新しいアプリ、UIがごちゃごちゃしていて非常に使い勝手が悪い。",
    "example_cn": "这个新破软件的界面按键堆得密密麻麻乱七八糟，用起来极其反人类，简直让人想砸手机。"
  },
  {
    "id": 289,
    "word": "はれま",
    "kanji": "晴れ間",
    "kana": "はれま",
    "pos": "名词",
    "meaning": "云隙间的晴空、放晴的间隙。在连续阴雨连绵、让人发霉的日子里，乌云突然裂开一道缝，漏下来的一抹珍贵阳光。",
    "example_jp": "長雨の続く中、ほんの一瞬見えた晴れ間に急いで洗濯物を干した。",
    "example_cn": "趁着这连下了一个礼拜暴雨的鬼天气里好不容易透出的一丝阳光，我像打仗一样飞扑出去抢着晾衣服。"
  },
  {
    "id": 290,
    "word": "わび",
    "kanji": "侘び",
    "kana": "わび",
    "pos": "名词",
    "meaning": "闲寂、歉意。一种在粗糙、不完美的破败中寻找宁静的日本传统审美，或者低下头向别人承认错误的抱歉态度。",
    "example_jp": "取引先で大失態を演じ、土下座せんばかりの勢いで侘びを入れた。",
    "example_cn": "在大客户面前捅了个无法挽回的超级大篓子，我吓得魂都没了，恨不得当场滑跪磕头赔罪。"
  },
  {
    "id": 291,
    "word": "なまがわき",
    "kanji": "生乾き",
    "kana": "なまがわき",
    "pos": "名词",
    "meaning": "半干不干。衣服洗完没有彻底晒干，摸起来还有点湿哒哒的，并且通常会散发出一股让人作呕的馊味。",
    "example_jp": "梅雨時に部屋干ししたせいで、タオルから生乾きの嫌な臭いがする。",
    "example_cn": "因为梅雨天只能把衣服阴干在屋子里，擦脸的毛巾上散发着一股令人作呕的馊臭味。"
  },
  {
    "id": 292,
    "word": "うけいれる",
    "kanji": "受け入れる",
    "kana": "うけいれる",
    "pos": "动词",
    "meaning": "接受、接纳。把外来的人、建议或者令人痛苦的现实残酷事实，强忍着不适吞进肚子里并承认它的存在。",
    "example_jp": "自分がリストラされたという残酷な現実を、どうしても受け入れることができない。",
    "example_cn": "面对自己被公司像踢皮球一样无情裁掉的残酷现实，我死死咬着嘴唇，怎么也无法接受。"
  },
  {
    "id": 293,
    "word": "いいふくめる",
    "kanji": "言い含める",
    "kana": "いいふくめる",
    "pos": "动词",
    "meaning": "叮嘱、说服。像老妈子一样凑到耳边，掰开揉碎地把情况和规矩讲清楚，让对方彻底明白并老实照做。",
    "example_jp": "警察が来る前に、口裏を合わせるよう部下たちにきつく言い含めた。",
    "example_cn": "趁着警车还没开到门口，我压低声音，恶狠狠地把底下的马仔全抓过来对了一遍假口供。"
  },
  {
    "id": 294,
    "word": "じゅんじる",
    "kanji": "準じる",
    "kana": "じゅんじる",
    "pos": "动词",
    "meaning": "以…为准、参照。没有直接的标准时，找一个级别或情况差不多的例子，照葫芦画瓢地按照那个规矩来办。",
    "example_jp": "契約社員のボーナスは、正社員の規定に準じて計算されることになった。",
    "example_cn": "公司终于松口，宣布合同工的年终奖也将照葫芦画瓢，比照着正式员工的那些规矩来折算。"
  },
  {
    "id": 295,
    "word": "ねこむ",
    "kanji": "寝込む",
    "kana": "ねこむ",
    "pos": "动词",
    "meaning": "卧病不起、熟睡。病来如山倒，烧得浑身没力气只能像烂泥一样瘫在床上；或者累极了沾枕头就睡得像头死猪一样。",
    "example_jp": "過労とストレスが重なり、彼は高熱を出して三日間も寝込んでしまった。",
    "example_cn": "长期熬夜加班加上神经衰弱的折磨，他突然发起了高烧，像滩烂泥一样在床上瘫了整整三天。"
  },
  {
    "id": 296,
    "word": "しのびこむ",
    "kanji": "忍び込む",
    "kana": "しのびこむ",
    "pos": "动词",
    "meaning": "潜入、偷偷溜进。像做贼一样弓着腰、踮着脚尖，连大气都不敢喘，趁着夜色或别人不注意溜进别人的地盘。",
    "example_jp": "真夜中、誰もいない学校のプールにこっそりと忍び込んだ。",
    "example_cn": "趁着伸手不见五指的深夜，我们连大气都不敢喘，蹑手蹑脚地翻墙溜进了黑灯瞎火的学校泳池。"
  },
  {
    "id": 297,
    "word": "ばんて",
    "kanji": "番手",
    "kana": "ばんて",
    "pos": "名词",
    "meaning": "顺位、排位。在比赛出场、值班或者实力排名中，排在第几个的序号，常指备胎或替补的位置。",
    "example_jp": "彼は実力はあるのに、いつも二番手でエースの座には届かない。",
    "example_cn": "明明论技术他绝对不输任何人，却偏偏每次都只能当个千年老二，死活摸不到王牌的宝座。"
  },
  {
    "id": 298,
    "word": "めいめい",
    "kanji": "冥々",
    "kana": "めいめい",
    "pos": "副词",
    "meaning": "冥冥之中、暗中。在看不见摸不着的深处，仿佛有一双无形的大手在暗中操控着命运的走向。",
    "example_jp": "どんな悪事も、冥々の中にある神様はしっかりと見ているはずだ。",
    "example_cn": "你以为干的那些缺德事没人知道，但这冥冥之中的老天爷，在天上可是睁大眼睛看得一清二楚的。"
  },
  {
    "id": 299,
    "word": "ととのえる",
    "kanji": "整える",
    "kana": "ととのえる",
    "pos": "动词",
    "meaning": "整理、备齐。把乱七八糟的衣服、发型或是呼吸弄得整整齐齐，或者把需要的东西像阅兵一样全部准备到位。",
    "example_jp": "面接室のドアを叩く前に、深呼吸をして乱れたネクタイを整えた。",
    "example_cn": "在敲开那扇决定命运的面试室大门前，我深吸了一大口气，发抖的手赶忙把歪掉的领带狠狠往上扯正。"
  },
  {
    "id": 300,
    "word": "しゅじゅ",
    "kanji": "種々",
    "kana": "しゅじゅ",
    "pos": "名词/形容动词",
    "meaning": "各种各样。种类多得让人眼花缭乱，五花八门的理由、借口或者情况交织在一起的复杂状态。",
    "example_jp": "種々の事情が複雑に絡み合い、このプロジェクトは頓挫してしまった。",
    "example_cn": "背后那些五花八门的狗血破事死死地缠在一起扯不清楚，导致这个大项目彻底黄摊子了。"
  },
  {
    "id": 301,
    "word": "ばちがい",
    "kanji": "場違い",
    "kana": "ばちがい",
    "pos": "名词/形容动词",
    "meaning": "不合时宜、格格不入。穿戴或言行与周围环境气氛完全不搭，像误闯了高端局的菜鸟，让人感到极度尴尬和如坐针毡。",
    "example_jp": "高級フレンチにジャージで来てしまい、場違いすぎて逃げ出したかった。",
    "example_cn": "竟然穿着一身破旧运动服就跑来了高级法餐厅，这格格不入的氛围尴尬得我简直想当场挖个洞逃跑。"
  },
  {
    "id": 302,
    "word": "ふたまた",
    "kanji": "二股",
    "kana": "ふたまた",
    "pos": "名词",
    "meaning": "脚踏两只船、劈腿。背着正牌恋人，偷偷摸摸地同时和另一个人搞暧昧甚至交往的背叛行径。",
    "example_jp": "スマホの通知で二股がバレて、彼女に思い切り平手打ちされた。",
    "example_cn": "手机屏幕上弹出的消息直接把劈腿的事给锤死了，前女友反手就狠狠扇了我一个大耳光。"
  },
  {
    "id": 303,
    "word": "ふきだす",
    "kanji": "吹き出す",
    "kana": "ふきだす",
    "pos": "动词",
    "meaning": "扑哧一声笑出来、喷出。拼命想憋笑却没憋住，口水或饮料伴随着笑声突然从嘴里不受控制地喷出来的狼狈样。",
    "example_jp": "会議中に部長のカツラがずれたのを見て、堪えきれずお茶を吹き出した。",
    "example_cn": "开会时看到部长头上的假发不自然地歪到了一边，我实在没憋住，一口茶直接狂喷了出来。"
  },
  {
    "id": 304,
    "word": "いたばさみ",
    "kanji": "板挟み",
    "kana": "いたばさみ",
    "pos": "名词",
    "meaning": "左右为难、两头受气。被夹在立场对立的双方（如婆媳、上司和下属）中间，帮谁都不对，被两头的怒火烤得焦头烂额。",
    "example_jp": "妻と母親の激しい口論の板挟みになり、胃に穴が開きそうだった。",
    "example_cn": "被夹在老婆和老妈那剑拔弩張的争吵中间两头受气，我愁得感觉胃都要因压力穿孔了。"
  },
  {
    "id": 305,
    "word": "あからむ",
    "kanji": "赤らむ",
    "kana": "あからむ",
    "pos": "动词",
    "meaning": "发红、泛红。因为害羞、紧张或者喝了酒，脸颊像熟透的苹果一样不受控制地渐渐染上一层红晕。",
    "example_jp": "憧れの先輩に突然手を握られ、彼女は顔を真っ赤に赤らめて俯いた。",
    "example_cn": "突然被暗恋已久的前辈一把抓住了手，她羞得脸颊瞬间像熟透的苹果一样红到了耳根，死死低着头不敢看人。"
  },
  {
    "id": 306,
    "word": "まるみ",
    "kanji": "丸み",
    "kana": "まるみ",
    "pos": "名词",
    "meaning": "圆润、柔和。没有锋利的棱角，呈现出光滑圆滚滚的状态，或者指人的性格变得不再像刺猬一样扎人。",
    "example_jp": "昔は尖っていた彼も、結婚してすっかり性格に丸みが出た。",
    "example_cn": "以前那个像刺猬一样见谁怼谁的家伙，结了婚之后身上的戾气全被磨平，性格变得圆滑柔和多了。"
  },
  {
    "id": 307,
    "word": "つのる",
    "kanji": "募る",
    "kana": "つのる",
    "pos": "动词",
    "meaning": "越来越强烈、招募。某种强烈的情绪（如思念、不安、焦躁）像气球一样在心里越胀越大，快要压抑不住。",
    "example_jp": "返信のないスマホを見つめるたび、彼への疑念と不安が募っていく。",
    "example_cn": "每次死死盯着毫无动静的手机屏幕，心里那种被背叛的猜忌和恐慌感就像滚雪球一样越来越大。"
  },
  {
    "id": 308,
    "word": "といただす",
    "kanji": "問いただす",
    "kana": "といただす",
    "pos": "动词",
    "meaning": "盘问、追问。目光如炬地盯着对方的眼睛，逼迫其把遮遮掩掩的事实真相或者可疑的行踪一五一十地交代清楚。",
    "example_jp": "浮気の証拠をテーブルに叩きつけ、夫を厳しく問いただした。",
    "example_cn": "把那些铁证如山的开房记录狠狠摔在桌子上，我红着眼睛指着老公的鼻子厉声盘问。"
  },
  {
    "id": 309,
    "word": "えとく",
    "kanji": "会得",
    "kana": "えとく",
    "pos": "名词/动词",
    "meaning": "领会、掌握。经过无数次的失败和痛苦摸索，终于像突然打通任督二脉一样，彻底把某种复杂的技能融会贯通。",
    "example_jp": "何度も転んでアザだらけになりながら、ついに自転車の乗り方を会得した。",
    "example_cn": "摔得鼻青脸肿、身上全是淤青之后，终于在某个瞬间找到了平衡感，彻底掌握了骑自行车的诀窍。"
  },
  {
    "id": 310,
    "word": "ばっする",
    "kanji": "罰する",
    "kana": "ばっする",
    "pos": "动词",
    "meaning": "惩罚、处分。高高在上地对犯下过错或触犯法律的人降下铁锤，让他们付出惨痛的代价以长记性。",
    "example_jp": "規則を破った生徒たちは、放課後のトイレ掃除という形で罰せられた。",
    "example_cn": "那些肆无忌惮违反校规的刺头学生，被强制勒令留堂去打扫发臭的厕所作为惩罚。"
  },
  {
    "id": 311,
    "word": "もみあげ",
    "kanji": "揉み上げ",
    "kana": "もみあげ",
    "pos": "名词",
    "meaning": "鬓角。耳朵前面沿着脸颊长出来的那一溜毛发，有些大叔会故意留得很长来耍帅或者修饰脸型。",
    "example_jp": "彼は長すぎる揉み上げを指でいじりながら、ニヤニヤと笑っていた。",
    "example_cn": "他一边用手指漫不经心地卷着那两撇长得有些油腻的鬓角，一边露出了猥琐的坏笑。"
  },
  {
    "id": 312,
    "word": "てとりあしとり",
    "kanji": "手取り足取り",
    "kana": "てとりあしとり",
    "pos": "副词",
    "meaning": "手把手地。像带刚学步的婴儿一样，毫无保留且极其耐心地把每一个细枝末节的动作都亲自示范教给对方。",
    "example_jp": "パソコンが苦手な祖父に、マウスの握り方から手取り足取り教えた。",
    "example_cn": "面对连开机都不会的爷爷，我只能叹了口气，从怎么握鼠标开始一步一步手把手地耐心教他。"
  },
  {
    "id": 313,
    "word": "つみき",
    "kanji": "積み木",
    "kana": "つみき",
    "pos": "名词",
    "meaning": "积木。小孩子玩的那些木头方块，需要小心翼翼地一块块往上叠，引申为辛苦一点点积累起来的心血。",
    "example_jp": "弟に積み木のお城を蹴り崩され、子供は大声で泣き叫んだ。",
    "example_cn": "看到自己小心翼翼搭了半天的积木城堡被弟弟一脚踹塌，那孩子气得一屁股坐在地上放声大哭。"
  },
  {
    "id": 314,
    "word": "つみたてる",
    "kanji": "積み立てる",
    "kana": "つみたてる",
    "pos": "动词",
    "meaning": "积攒、存（钱）。每个月从微薄的工资里硬抠出一小笔钱，像松鼠囤松果一样死死存进银行里以备不时之需。",
    "example_jp": "憧れの海外旅行のため、毎月の給料から少しずつお金を積み立てている。",
    "example_cn": "为了能去梦寐以求的欧洲度假，我每个月都咬着牙从干瘪的工资卡里硬抠出一笔钱雷打不动地存进死期。"
  },
  {
    "id": 315,
    "word": "ゆうぐれ",
    "kanji": "夕暮れ",
    "kana": "ゆうぐれ",
    "pos": "名词",
    "meaning": "黄昏、傍晚。太阳快要下山，天色逐渐变得昏暗发红的那个时刻，空气中总弥漫着一种让人鼻酸的孤寂感。",
    "example_jp": "誰もいない夕暮れの公園で、ブランコに座って一人ため息をついた。",
    "example_cn": "在空无一人的黄昏公园里，我像个无家可归的流浪汉一样瘫坐在秋千上，长长地叹了一口闷气。"
  },
  {
    "id": 316,
    "word": "てさき",
    "kanji": "手先",
    "kana": "てさき",
    "pos": "名词",
    "meaning": "手指尖、爪牙。手的最前端部分，引申为替背后黑手干尽各种肮脏勾当的跑腿小弟或底层的傀儡。",
    "example_jp": "悪の組織の手先として、彼は裏で数々の汚い仕事をさせられていた。",
    "example_cn": "作为那个黑道组织底层替人顶罪的肮脏爪牙，他在背地里被迫干尽了各种见不得光的龌龊勾当。"
  },
  {
    "id": 317,
    "word": "まるっきり",
    "kanji": "丸っきり",
    "kana": "まるっきり",
    "pos": "副词",
    "meaning": "完全、简直（后接否定）。就像是一张白纸一样，对某件事连一丝一毫的概念都没有，透彻到底的“零”。",
    "example_jp": "英語のニュース番組を見たが、何を言っているのか丸っきり分からなかった。",
    "example_cn": "死盯着电视上的英语新闻台看了半天，结果里面叽里呱啦的话我简直是一个字都没听懂。"
  },
  {
    "id": 318,
    "word": "ゆくて",
    "kanji": "行く手",
    "kana": "ゆくて",
    "pos": "名词",
    "meaning": "前路、去路。正准备往前走的方向，常用来指代被突如其来的灾难或敌人死死挡住的绝望前途。",
    "example_jp": "倒れた巨大な倒木が、我々の行く手を完全に塞いでしまった。",
    "example_cn": "一棵被狂风拦腰折断的巨大朽木轰然倒塌，死死地堵住了我们唯一能逃生往前走的路。"
  },
  {
    "id": 319,
    "word": "ひかえしつ",
    "kanji": "控え室",
    "kana": "ひかえしつ",
    "pos": "名词",
    "meaning": "休息室、等候室。在上台表演、面试或者出庭前，让人紧张得狂抖腿、不停深呼吸来平复心情的封闭小房间。",
    "example_jp": "面接前の控え室は、緊張感で息が詰まりそうなほど静まり返っていた。",
    "example_cn": "面试前那个狭小的等候室里，死寂得只能听到大家紧张急促的呼吸声，压抑得让人差点窒息。"
  },
  {
    "id": 320,
    "word": "かたづけ",
    "kanji": "片付け",
    "kana": "かたづけ",
    "pos": "名词",
    "meaning": "收拾、整理。把扔得满地都是的脏衣服、空酒瓶等垃圾扫走，让像猪窝一样的房间恢复能住人的样子。",
    "example_jp": "散らかり放題のゴミ屋敷の片付けを命じられ、絶望で目の前が真っ暗になった。",
    "example_cn": "被老板逼着去清理那间堆满生蛆外卖盒的垃圾屋，闻着那股恶臭我绝望得简直眼前一黑。"
  },
  {
    "id": 321,
    "word": "めでる",
    "kanji": "愛でる",
    "kana": "めでる",
    "pos": "动词",
    "meaning": "赏玩、怜爱。用充满柔情和喜爱的目光，静静地欣赏盛开的花朵或抚摸可爱的小动物，眼神都能拉出丝来。",
    "example_jp": "縁側に座って、庭に咲いた小さな梅の花を静かに愛でた。",
    "example_cn": "悠闲地瘫坐在外廊的木地板上，捧着热茶静静赏玩着院子里那株刚刚傲娇绽放的小梅花。"
  },
  {
    "id": 322,
    "word": "なげつける",
    "kanji": "投げ付ける",
    "kana": "なげつける",
    "pos": "动词",
    "meaning": "狠狠摔过去、砸向。因为气急败坏到了极点，抓起手边的杯子或手机，用尽全力带着毁灭的冲动砸向某人或墙壁。",
    "example_jp": "口論の末に激昂し、彼は持っていたスマホを壁に力一杯投げ付けた。",
    "example_cn": "吵到最后他双眼通红彻底丧失理智，抓起手里的刚买的手机就用尽全力死死砸向了对面的白墙。"
  },
  {
    "id": 323,
    "word": "〜もう",
    "kanji": "〜網",
    "kana": "〜もう",
    "pos": "后缀",
    "meaning": "…网。像蜘蛛网一样密密麻麻覆盖开来、让人插翅难逃的网络，比如警察抓捕犯人的包围圈或通讯基站覆盖面。",
    "example_jp": "警察の厳重な包囲網を突破できず、犯人はついに観念して膝をついた。",
    "example_cn": "像无头苍蝇一样怎么也冲不破警方布下的天罗地网，走投无路的逃犯绝望地双膝一软跪倒在地。"
  },
  {
    "id": 324,
    "word": "かえりみる",
    "kanji": "省みる",
    "kana": "かえりみる",
    "pos": "动词",
    "meaning": "反省、内省。在一个人的深夜里，把过去干的蠢事或伤害过别人的恶毒话语翻出来，内心感到一阵阵刺痛和懊悔。",
    "example_jp": "自分の自己中心的な過去の言動を深く省みて、彼女はひそかに涙を流した。",
    "example_cn": "一个人在深夜里揪着头发死命反省自己以前那些自私得令人发指的混账话，她忍不住偷偷抹起了眼泪。"
  },
  {
    "id": 325,
    "word": "おおあり",
    "kanji": "大有り",
    "kana": "おおあり",
    "pos": "名词/形容动词",
    "meaning": "大有、非常有可能。不仅有，而且可能性大得惊人，或者是存在着让人无法忽视的巨大问题或动机。",
    "example_jp": "「彼が犯人である可能性は？」「大有りだね。動機は十分すぎる。」",
    "example_cn": "“你觉得那小子是凶手有没有可能？” “太有可能了，他那杀人的动机简直呼之欲出。”"
  },
  {
    "id": 326,
    "word": "しもねた",
    "kanji": "下ネタ",
    "kana": "しもねた",
    "pos": "名词",
    "meaning": "荤段子、黄段子。在酒桌上为了活跃气氛或者满足恶趣味，故意说出来的那些带颜色、让人尴尬或发笑的低俗玩笑。",
    "example_jp": "飲み会で上司がしつこく下ネタを連発し、女子社員たちはドン引きしていた。",
    "example_cn": "那个秃顶上司借着酒劲在聚餐上没完没了地狂飙油腻的荤段子，在场的女员工们全都恶心满脸黑线。"
  },
  {
    "id": 327,
    "word": "ひきたてる",
    "kanji": "引き立てる",
    "kana": "ひきたてる",
    "pos": "动词",
    "meaning": "衬托、强行带走。作为绿叶把红花衬托得更加夺目，或者指警察像押送犯人一样粗暴地把人强行拽走。",
    "example_jp": "抵抗する容疑者は、二人の警察官に両脇を抱えられて警察署へ引き立てられた。",
    "example_cn": "那个拼命蹬腿挣扎的嫌疑犯，被两个高大威猛的警察死死架住双臂，像拖死狗一样强行拖进了局子。"
  },
  {
    "id": 328,
    "word": "まんきつ",
    "kanji": "満喫",
    "kana": "まんきつ",
    "pos": "名词/动词",
    "meaning": "充分享受、饱尝。把美食、温泉或假期的快乐压榨到最后一滴，身心每一个细胞都爽到飞起的极致体验。",
    "example_jp": "高級旅館の露天風呂に肩まで浸かり、至福の休日をこれでもかと満喫した。",
    "example_cn": "把整个身子深深泡进高级旅馆那冒着热气的露天温泉里，恨不得把这神仙般的假期一秒掰成两秒来尽情享受。"
  },
  {
    "id": 329,
    "word": "うばぐるま",
    "kanji": "乳母車",
    "kana": "うばぐるま",
    "pos": "名词",
    "meaning": "婴儿车。推着还不怎么会走路的小婴儿出门透气用的带轮子的小车，老一辈更喜欢用这个带有年代感的词。",
    "example_jp": "公園で、若い母親が泣き叫ぶ赤ん坊を乗せた乳母車を必死に揺らしていた。",
    "example_cn": "那个年轻的单亲妈妈在公园里满头大汗，拼了命地摇晃着婴儿车，试图哄住里面那个哭得撕心裂肺的小祖宗。"
  },
  {
    "id": 330,
    "word": "なつく",
    "kanji": "懐く",
    "kana": "なつく",
    "pos": "动词",
    "meaning": "亲近、黏人。本来充满戒备心的小动物或小孩，突然卸下防备，像跟屁虫一样摇着尾巴死死黏在你脚边蹭来蹭去。",
    "example_jp": "保護した野良猫が、三日目にしてようやく喉を鳴らして私の膝に懐いてきた。",
    "example_cn": "刚捡回来时还呲牙咧嘴的流浪猫，熬到第三天终于放下戒备，打着呼噜软绵绵地赖在了我大腿上求蹭蹭。"
  },
  {
    "id": 331,
    "word": "かま",
    "kanji": "鎌",
    "kana": "かま",
    "pos": "名词",
    "meaning": "镰刀、套话（鎌をかける）。割草用的弯曲锋利农具，或者指像钓鱼一样故意抛出假话来套出对方心里藏着的秘密。",
    "example_jp": "「昨日の夜、女といたでしょ？」とカマをかけたら、彼はあっさりボロを出した。",
    "example_cn": "故意阴阳怪气地炸他一句“昨晚你是跟哪个狐狸精鬼混去了吧？”，结果这蠢货吓得一哆嗦当场就说漏了嘴。"
  },
  {
    "id": 332,
    "word": "つちかう",
    "kanji": "培う",
    "kana": "つちかう",
    "pos": "动词",
    "meaning": "培养、培育。像种树一样，倾注了大量的时间和血汗，一点一滴地把原本微弱的能力、信任或根基养育得坚固。",
    "example_jp": "十年間の下積み時代で培った忍耐力が、今の私を支えている。",
    "example_cn": "在那长达十年暗无天日的打杂岁月中硬生生熬出来的像蟑螂一样的抗压能力，成了我现在咬牙死撑的唯一支柱。"
  },
  {
    "id": 333,
    "word": "はれわたる",
    "kanji": "晴れ渡る",
    "kana": "はれわたる",
    "pos": "动词",
    "meaning": "晴空万里。阴霾或暴雨被狂风一扫而空，天空蓝得就像刚洗过一样，连一丝多余的云彩都找不到，极其通透。",
    "example_jp": "台風が過ぎ去った後の空は、嘘のように青々と晴れ渡っていた。",
    "example_cn": "狂暴的台风天终于滚蛋了，抬头一看，头顶的天空竟然蓝得像一块刚被水洗过一样通透刺眼的玻璃。"
  },
  {
    "id": 334,
    "word": "さらう",
    "kanji": "攫う",
    "kana": "さらう",
    "pos": "动词",
    "meaning": "抢走、拐骗。以迅雷不及掩耳之势，趁人不备像老鹰抓小鸡一样把小孩掳走，或者把所有的关注度和风头全部吸走。",
    "example_jp": "ちょっと目を離した隙に、見知らぬ男に子供を攫われそうになった。",
    "example_cn": "仅仅是低头看了一眼手机的几秒钟空档，就差点眼睁睁看着孩子被一个戴鸭舌帽的陌生男人一把抱起拐走。"
  },
  {
    "id": 335,
    "word": "とじこもる",
    "kanji": "閉じこもる",
    "kana": "とじこもる",
    "pos": "动词",
    "meaning": "闭门不出、闷在家里。受了极大的刺激或社交恐惧发作，把房门死死反锁，像只鸵鸟一样把自己和外界完全隔绝开来。",
    "example_jp": "就職活動に失敗して以来、彼はカーテンを閉め切った部屋に引きこもっている。",
    "example_cn": "自从找工作被连番毒打之后，他就死死拉上厚重的窗帘，像个不见天日的幽灵一样把自己反锁在狗窝里。"
  },
  {
    "id": 336,
    "word": "むすびつく",
    "kanji": "結び付く",
    "kana": "むすびつく",
    "pos": "动词",
    "meaning": "联系在一起、导致。两个看似八竿子打不着的情报突然在脑海里“叮”的一声连成一线，或者努力终于开花结成了果实。",
    "example_jp": "現場に残された足跡が、ついにあの未解決事件の容疑者と結び付いた。",
    "example_cn": "遗留在烂泥地里的那半枚模糊脚印，终于像拼图一样死死地和那起尘封多年的悬案嫌疑人咬合在了一起。"
  },
  {
    "id": 337,
    "word": "つみ",
    "kanji": "罪",
    "kana": "つみ",
    "pos": "名词",
    "meaning": "罪过、罪孽。触犯法律的犯罪行为，或者是良心上让人夜不能寐、觉得自己十恶不赦的那种深深的负罪感。",
    "example_jp": "友人を裏切ってしまったという深い罪の意識に、毎晩うなされている。",
    "example_cn": "因为为了自保而狠心出卖了最好的兄弟，那种被内疚啃噬骨头的深深负罪感让我每晚都在梦魇中惊醒。"
  },
  {
    "id": 338,
    "word": "みいる",
    "kanji": "見入る",
    "kana": "みいる",
    "pos": "动词",
    "meaning": "看入迷、注视。魂被眼前的画面彻底勾走，连眼睛都不眨一下，甚至连旁边有人大声喊你都完全听不见的痴迷状态。",
    "example_jp": "彼女はショーウィンドウに飾られた高価なドレスを、ただじっと見入っていた。",
    "example_cn": "她就像被下了蛊一样，把脸快贴到了冰冷的玻璃橱窗上，眼睛死死地盯着里面那件买不起的天价晚礼服。"
  },
  {
    "id": 339,
    "word": "ひそむ",
    "kanji": "潜む",
    "kana": "ひそむ",
    "pos": "动词",
    "meaning": "潜伏、隐藏。像毒蛇一样躲在暗处不发出半点声响，屏住呼吸等待猎物靠近，或者指危险暗戳戳地藏在表面之下。",
    "example_jp": "暗闇の路地裏に何者かが潜んでいる気配を感じて、背筋が凍りついた。",
    "example_cn": "察觉到死寂的黑巷子深处好像有什么东西正屏住呼吸潜伏着，我吓得倒抽一口凉气，后背的冷汗瞬间就冒了出来。"
  },
  {
    "id": 340,
    "word": "おおまか",
    "kanji": "大まか",
    "kana": "おおまか",
    "pos": "形容动词",
    "meaning": "粗略、大大咧咧。不纠结那些鸡毛蒜皮的细节，只抓个大概的框架，或者指人做事马马虎虎、不拘小节的豪放作风。",
    "example_jp": "まだ詳細は決まっていませんが、大まかなスケジュールだけ先にお伝えします。",
    "example_cn": "具体的那些零碎细节都还没敲定，我先挑重点给你简单粗暴地画个大概的行程大饼吧。"
  },
  {
    "id": 341,
    "word": "ほうりこむ",
    "kanji": "放り込む",
    "kana": "ほうりこむ",
    "pos": "动词",
    "meaning": "扔进去、投入。像丢垃圾一样随意且粗暴地把东西一把塞进箱子或嘴里，或者指犯人被无情地丢进铁窗里。",
    "example_jp": "疲れ切って帰宅するなり、脱いだ服を洗濯機に乱暴に放り込んだ。",
    "example_cn": "拖着半条命加完班回到狗窝，把脱下来的脏衣服像扔臭抹布一样粗暴地一把全砸进了洗衣机。"
  },
  {
    "id": 342,
    "word": "なりわい",
    "kanji": "生業",
    "kana": "なりわい",
    "pos": "名词",
    "meaning": "职业、谋生手段。为了填饱肚子、养活一家老小而不得不日复一日去干的那个糊口的行当，带有一种无奈或自嘲的宿命感。",
    "example_jp": "先祖代々、この荒れた土地で農業を生業としてしぶとく生きてきた。",
    "example_cn": "祖祖辈辈都像是被钉死在这片贫瘠的黄土地上一样，靠着面朝黄土背朝天的种地行当苦苦熬着日子糊口。"
  },
  {
    "id": 343,
    "word": "いんせき",
    "kanji": "隕石",
    "kana": "いんせき",
    "pos": "名词",
    "meaning": "陨石。在宇宙里飘荡最后拖着火尾巴砸到地球上的那块天外飞石，常用来比喻天降横祸或者极其震撼的突发事件。",
    "example_jp": "夜空を切り裂くように、巨大な隕石が炎を上げて落下していくのを見た。",
    "example_cn": "亲眼目睹了一颗拖着耀眼火光的巨大陨石，像要撕裂黑夜一样带着绝望的压迫感狠狠砸向地平线。"
  },
  {
    "id": 344,
    "word": "そこぬけ",
    "kanji": "底抜け",
    "kana": "そこぬけ",
    "pos": "名词",
    "meaning": "没底线、毫无节制。像个破了底的木桶一样怎么也装不满，形容人性格极其开朗不藏着掖着，或指蠢得没有下限。",
    "example_jp": "彼女の底抜けに明るい笑顔に救われ、張り詰めていた心がフッと軽くなった。",
    "example_cn": "被她那种完全不掺杂任何心机、像向日葵一样毫无保留的灿烂笑容给彻底治愈了，心里绷紧的那根弦瞬间松了下来。"
  },
  {
    "id": 345,
    "word": "つっぱる",
    "kanji": "突っ張る",
    "kana": "つっぱる",
    "pos": "动词",
    "meaning": "紧绷、硬撑着（面子）。皮肤因为缺水或受伤而产生拉扯的紧绷感，或指死鸭子嘴硬、为了自尊心像刺猬一样虚张声势。",
    "example_jp": "本当は泣きたいくらい不安なのに、彼は強がって虚勢を張り、突っ張っていた。",
    "example_cn": "明明心里早就害怕得想躲起来大哭一场，他却偏要死鸭子嘴硬，像只炸毛的刺猬一样红着脖子硬撑着不肯低头。"
  },
  {
    "id": 346,
    "word": "みき",
    "kanji": "幹",
    "kana": "みき",
    "pos": "名词",
    "meaning": "树干、骨干。大树最粗壮的那个主躯干，引申为一个组织或一个计划里最不能动摇的核心支柱和中坚力量。",
    "example_jp": "プロジェクトの幹となる重要なメンバーが引き抜かれ、計画は白紙に戻った。",
    "example_cn": "作为整个项目顶梁柱的最核心骨干竟然被竞争对手狠心挖走，这下整个企划直接崩盘沦为了一堆废纸。"
  },
  {
    "id": 347,
    "word": "わき",
    "kanji": "脇",
    "kana": "わき",
    "pos": "名词",
    "meaning": "腋下、身旁、岔开（话题）。胳肢窝的位置，或者紧挨着主角的旁边位置，也指把注意力从正事上挪开、防守不严密的破绽。",
    "example_jp": "プレゼン中、脇汗がびっしょり染み出しているのに気付いてパニックになった。",
    "example_cn": "站在台上做发表时，突然察觉到自己的腋下已经紧张得湿透洇出了一大片汗渍，吓得我大脑瞬间当机。"
  },
  {
    "id": 348,
    "word": "ふせる",
    "kanji": "伏せる",
    "kana": "ふせる",
    "pos": "动词",
    "meaning": "隐瞒、趴下。把身体死死贴在地上躲避子弹或目光，或者把不想让人知道的丑闻、名字像盖住牌一样死死捂住不透风。",
    "example_jp": "不祥事をもみ消すため、会社は役員の名前を徹底的に伏せたまま会見を開いた。",
    "example_cn": "为了把那桩臭气熏天的丑闻强行压下去，公司在记者会上死死捂住了涉事高管的真实姓名，企图蒙混过关。"
  },
  {
    "id": 349,
    "word": "ておくれ",
    "kanji": "手遅れ",
    "kana": "ておくれ",
    "pos": "名词",
    "meaning": "为时已晚、无可救药。错过了最佳的抢救或补救时机，毒素已经攻心或者事情烂到根里，哪怕是大罗神仙下凡也无力回天。",
    "example_jp": "病院に運ばれた時にはすでに手遅れで、彼は息を引き取っていた。",
    "example_cn": "被救护车拉到急诊室的时候一切都晚了，错过了最后的抢救黄金期，他已经浑身冰凉彻底断了气。"
  },
  {
    "id": 350,
    "word": "なふだ",
    "kanji": "名札",
    "kana": "なふだ",
    "pos": "名词",
    "meaning": "姓名牌。别在胸前或挂在脖子上印着自己名字的小牌子，服务行业最怕顾客凑近死盯着这个牌子看准备投诉。",
    "example_jp": "クレーム客が私の胸元の名札をじろじろと睨みつけ、名前をメモし始めた。",
    "example_cn": "那个满脸横肉的奇葩顾客恶狠狠地死盯着我胸前的名牌，甚至还掏出手机把我名字给记了下来准备去投诉。"
  },
  {
    "id": 351,
    "word": "きりさく",
    "kanji": "切り裂く",
    "kana": "きりさく",
    "pos": "动词",
    "meaning": "撕裂、划破。像用利刃残忍地划开布料一样，或者凄厉的惨叫声划破了原本死寂的黑夜，带来极强的视觉或听觉冲击。",
    "example_jp": "静まり返った夜の森に、突然悲鳴が空気を切り裂いた。",
    "example_cn": "在死寂般漆黑的森林里，一声凄厉的惨叫突然划破了夜空，吓得我直冒冷汗。"
  },
  {
    "id": 352,
    "word": "あらわれる",
    "kanji": "表れる",
    "kana": "あらわれる",
    "pos": "动词",
    "meaning": "显露、表现出来。内心压抑不住的情感、焦虑或者极度的疲惫，不由自主地在脸上、表情或态度上暴露无遗的瞬间。",
    "example_jp": "連日の徹夜の疲労が、彼の落ち窪んだ目元にハッキリと表れていた。",
    "example_cn": "连日熬夜死撑的极限疲惫，已经明晃晃地挂在他那深深凹陷发黑的眼窝上了。"
  },
  {
    "id": 353,
    "word": "すみ",
    "kanji": "炭",
    "kana": "すみ",
    "pos": "名词",
    "meaning": "木炭。烧烤或取暖时被烧得通红、散发着呛人烟火味和炽热温度的黑色木头，常伴随令人狼狈的浓烟。",
    "example_jp": "バーベキューの炭に火がつかず、煙ばかり吸い込んでむせた。",
    "example_cn": "烧烤架上的木炭怎么也点不着，倒是一股脑儿吸了满肚子呛人的浓烟，咳得我眼泪直流。"
  },
  {
    "id": 354,
    "word": "しいて",
    "kanji": "強いて",
    "kana": "しいて",
    "pos": "副词",
    "meaning": "勉强、硬要。明明知道很牵强、没有必要或者根本挑不出毛病，但非得硬着头皮去挑刺或做选择的别扭状态。",
    "example_jp": "彼の企画に強いて欠点を挙げるなら、予算が少し高すぎることだ。",
    "example_cn": "要是被逼着非得在他那份完美的企划书里挑刺的话，大概也就是预算稍微超标了那么一点。"
  },
  {
    "id": 355,
    "word": "かんがえぶかい",
    "kanji": "考え深い",
    "kana": "かんがえぶかい",
    "pos": "い形容词",
    "meaning": "谨慎、深思熟虑。做决定前眉头紧锁、把所有糟糕的后果都在脑子里盘算过无数遍的沉稳样子，极少冲动。",
    "example_jp": "いつもは考え深い彼女が、今回は珍しく衝動的な決断を下した。",
    "example_cn": "一向做事瞻前顾后、眉头紧锁盘算大半天的她，这次居然破天荒地脑子一热就拍了板。"
  },
  {
    "id": 356,
    "word": "ないない",
    "kanji": "内々",
    "kana": "ないない",
    "pos": "名词/副词",
    "meaning": "私下里、秘密地。不想让外界或竞争对手察觉，关起门来压低声音偷偷摸摸进行地下交易或商量的状态。",
    "example_jp": "会社が倒産するという噂が、社員の間で内々に広まりパニックになった。",
    "example_cn": "公司马上就要卷铺盖破产的噩耗，在员工私底下的群里偷偷传开了，搞得全员绝望恐慌。"
  },
  {
    "id": 357,
    "word": "おしみない",
    "kanji": "惜しみない",
    "kana": "おしみない",
    "pos": "い形容词",
    "meaning": "毫不吝惜、倾注全力。为了某个目标或某个人，把自己的钱包掏空或者榨干所有精力也在所不惜的狂热态度。",
    "example_jp": "彼女は愛猫のためなら、いくらでも惜しみなくお金を注ぎ込む。",
    "example_cn": "只要是为了她家那只主子猫，就算把信用卡刷爆，她掏钱的时候连眼睛都不带眨一下的。"
  },
  {
    "id": 358,
    "word": "てがる",
    "kanji": "手軽",
    "kana": "てがる",
    "pos": "形容动词",
    "meaning": "简便、轻松。不需要做繁琐的准备，随手就能搞定，特别适合累得像狗一样或者时间紧迫时的敷衍操作。",
    "example_jp": "疲れ果てていたので、コンビニの弁当で手軽に夕食を済ませた。",
    "example_cn": "累得连抬手指的力气都没了，索性在便利店随便扒拉了个微波炉便当，草草对付了顿晚饭。"
  },
  {
    "id": 359,
    "word": "おしつぶす",
    "kanji": "押し潰す",
    "kana": "おしつぶす",
    "pos": "动词",
    "meaning": "压碎、压垮。沉重的东西把下面的人狠狠碾碎，或者巨大的精神压力让人喘不过气来，导致情绪濒临崩溃的窒息感。",
    "example_jp": "莫大な借金と将来の不安に、心が完全に押し潰されそうだった。",
    "example_cn": "被那一屁股还不清的烂账和对未来的绝望感死死压着，我的精神防线已经快要被彻底压垮了。"
  },
  {
    "id": 360,
    "word": "いちやづけ",
    "kanji": "一夜漬け",
    "kana": "いちやづけ",
    "pos": "名词",
    "meaning": "临时抱佛脚、熬夜突击。平时不烧香，死线或考试前一晚狂灌咖啡、红着眼睛死记硬背的狼狈挣扎。",
    "example_jp": "一夜漬けで詰め込んだ知識は、テストが終わると綺麗に消え去った。",
    "example_cn": "考前熬了个通宵红着眼死记硬背塞进脑子里的东西，一交卷就跟清除了缓存一样忘得干干净净。"
  },
  {
    "id": 361,
    "word": "おり",
    "kanji": "檻",
    "kana": "おり",
    "pos": "名词",
    "meaning": "牢笼、笼子。用粗壮的铁栏杆焊死、把野兽或犯人死死锁在里面剥夺自由，让人感到极度压抑的封闭空间。",
    "example_jp": "動物園の狭い檻の中で、トラがストレスで狂ったように歩き回っている。",
    "example_cn": "在动物园那狭窄逼仄的铁笼子里，那只老虎被关得精神崩溃，像疯了一样焦躁地来回暴走。"
  },
  {
    "id": 362,
    "word": "ひといき",
    "kanji": "一息",
    "kana": "ひといき",
    "pos": "名词",
    "meaning": "喘口气、一鼓作气。累得要死时瘫在椅子上长长地呼出一口气，或者咬紧牙关把剩下的一点残局一口气收拾完。",
    "example_jp": "締め切り前の修羅場を乗り越え、コーヒーを飲んでやっと一息ついた。",
    "example_cn": "熬过了死线前那段暗无天日的修罗场，现在瘫在椅子上灌了口咖啡，总算能长长地喘一口活气了。"
  },
  {
    "id": 363,
    "word": "しいる",
    "kanji": "強いる",
    "kana": "しいる",
    "pos": "动词",
    "meaning": "强迫、逼迫。仗着权势或地位，硬按着别人的头，逼迫对方去干极其反感、痛苦或吃力不讨好的破事。",
    "example_jp": "上司から理不尽な残業を強いられ、彼は悔しさで唇を噛みしめた。",
    "example_cn": "被那个黑心上司硬塞了一堆毫无道理的加班活，他气得浑身发抖，死死咬住下嘴唇不敢发作。"
  },
  {
    "id": 364,
    "word": "まるごと",
    "kanji": "丸ごと",
    "kana": "まるごと",
    "pos": "副词",
    "meaning": "整个、原封不动。连皮带骨头一点不剩地全部吞下去，或者把一整栋烂摊子原封不动地全部硬接盘过来。",
    "example_jp": "怒りのあまり、買ってきたホールケーキを丸ごと一人でヤケ食いした。",
    "example_cn": "气得理智全无，把刚买回来的那一整块巨大的生日蛋糕，一个人狼吞虎咽地全塞进了肚子里泄愤。"
  },
  {
    "id": 365,
    "word": "へび",
    "kanji": "蛇",
    "kana": "へび",
    "pos": "名词",
    "meaning": "蛇。在阴暗潮湿的草丛里扭动着冰冷滑腻的身躯，吐着信子随时准备咬人的冷血爬行动物，常引发人的生理不适。",
    "example_jp": "草むらから突然ぬるりと蛇が現れ、恐怖で思わず尻餅をついた。",
    "example_cn": "阴暗的草丛里突然滑溜溜地钻出一条吐着信子的毒蛇，吓得我腿一软，直接一屁股瘫坐在了地上。"
  },
  {
    "id": 366,
    "word": "とりい",
    "kanji": "鳥居",
    "kana": "とりい",
    "pos": "名词",
    "meaning": "鸟居。矗立在神社入口、通常被漆成大红色，象征着划分神明与人类世俗世界的木制结界之门，带有神秘色彩。",
    "example_jp": "色あせた赤い鳥居をくぐると、急に空気が冷たくなった気がした。",
    "example_cn": "刚一弓着腰钻过那座掉漆斑驳的红色鸟居，就感觉后背猛地窜起一股凉意，周围的空气瞬间冷了下来。"
  },
  {
    "id": 367,
    "word": "おもうぞんぶん",
    "kanji": "思う存分",
    "kana": "おもうぞんぶん",
    "pos": "副词",
    "meaning": "尽情地、痛痛快快地。把平时憋在心里的所有顾虑全抛到脑后，肆无忌惮地发泄压抑的情绪或满足欲望的放纵状态。",
    "example_jp": "会社を辞めた日、居酒屋で泥酔するまで思う存分上司の愚痴を叫んだ。",
    "example_cn": "办完离职手续的那天，我在居酒屋里喝得烂醉如泥，拍着桌子痛痛快快地把那个极品上司骂了个狗血淋头。"
  },
  {
    "id": 368,
    "word": "うらづけ",
    "kanji": "裏付け",
    "kana": "うらづけ",
    "pos": "名词",
    "meaning": "证据、确证。为了不被别人当成满嘴跑火车的骗子，甩在桌面上那种无可辩驳的铁证或冰冷的数据支撑。",
    "example_jp": "なんの裏付けもない怪しい儲け話に騙され、全財産を失ってしまった。",
    "example_cn": "竟然被那种毫无实锤证据、满嘴跑火车的杀猪盘给骗了，这下底裤都赔穿了，落得个倾家荡产。"
  },
  {
    "id": 369,
    "word": "まわりくどい",
    "kanji": "回りくどい",
    "kana": "まわりくどい",
    "pos": "い形容词",
    "meaning": "拐弯抹角、绕圈子。明明一句话就能说清楚的事，非要扯东扯西兜一大个圈子，听得人白眼翻到天上、极其烦躁。",
    "example_jp": "彼の回りくどい言い訳にイライラして、「要するに失敗したんだろ」と遮った。",
    "example_cn": "听他扯了一大堆拐弯抹角的废话借口，我烦躁得直接打断：“废话少说，总之就是你搞砸了对吧！”"
  },
  {
    "id": 370,
    "word": "やしなう",
    "kanji": "養う",
    "kana": "やしなう",
    "pos": "动词",
    "meaning": "养育、培养。为了填饱一家老小的肚子拼命赚钱糊口，或者花大量时间心血去磨炼某种敏锐的眼光和专业技能。",
    "example_jp": "働かない夫と三人の子供を養うため、彼女は昼夜問わず身を粉にして働いた。",
    "example_cn": "为了养活那个整天游手好闲的废物老公和三个嗷嗷待哺的娃，她没日没夜地打着好几份工，命都快拼没了。"
  },
  {
    "id": 371,
    "word": "たなおろし",
    "kanji": "棚卸し",
    "kana": "たなおろし",
    "pos": "名词",
    "meaning": "盘点、清点库存。月底或年底时关起店门，灰头土脸地把仓库里积压的落灰货物一件件数清楚的折磨人体力活。",
    "example_jp": "閉店後、埃まみれの倉庫で徹夜で棚卸し作業をさせられ、腰が砕けそうだ。",
    "example_cn": "店门一关，就被老板赶进那个呛人的积灰仓库里熬了个通宵清点破烂库存，累得我老腰都快断了。"
  },
  {
    "id": 372,
    "word": "ひきさげる",
    "kanji": "引き下げる",
    "kana": "ひきさげる",
    "pos": "动词",
    "meaning": "降低、撤回。迫于外界的怒火或巨大的压力，灰溜溜地把原本定高的价格降下来，或者把提出的无理要求收回去。",
    "example_jp": "顧客の猛烈なクレームに屈し、会社はついに値上げの提案を引き下げた。",
    "example_cn": "顶不住顾客们那几乎要掀翻屋顶的怒火和投诉，公司最后只能灰溜溜地把涨价的破方案给撤了回来。"
  },
  {
    "id": 373,
    "word": "ひきさく",
    "kanji": "引き裂く",
    "kana": "ひきさく",
    "pos": "动词",
    "meaning": "撕裂、硬生生拆散。像撕废纸一样暴力扯碎，或者指相爱的人被残酷的现实、无情的背叛硬生生地残忍分开。",
    "example_jp": "彼女から渡された別れの手紙を、泣き叫びながらビリビリに引き裂いた。",
    "example_cn": "我崩溃地大哭大叫着，把她绝情塞给我的那封分手信，像发疯一样撕了个粉碎。"
  },
  {
    "id": 374,
    "word": "ぶん",
    "kanji": "分",
    "kana": "ぶん",
    "pos": "名词",
    "meaning": "份儿、身分。属于自己应得的那一小块蛋糕，或者是自己在这个社会上应该掂量清楚的有几斤几两的地位。",
    "example_jp": "自分の分まで食べられてしまい、怒りでフォークをテーブルに突き立てた。",
    "example_cn": "看到连属于自己的那份口粮都被那个饿死鬼给吞了，我气得一叉子狠狠插在了餐桌上。"
  },
  {
    "id": 375,
    "word": "いちばんのり",
    "kanji": "一番乗り",
    "kana": "いちばんのり",
    "pos": "名词",
    "meaning": "第一个到达、抢先。在一群人里像打了鸡血一样冲在最前面，为了抢到限量商品或者霸占有利位置的疯狂举动。",
    "example_jp": "徹夜で店の前に並び、限定のゲーム機を一番乗りで手に入れた。",
    "example_cn": "裹着大衣在店门口苦苦熬了一个通宵冻成狗，总算像疯狗一样第一个抢到了那台限量版游戏机。"
  },
  {
    "id": 376,
    "word": "もってこい",
    "kanji": "持って来い",
    "kana": "もってこい",
    "pos": "形容动词/连体词",
    "meaning": "恰好、最合适。就像是量身定制的一样，在某种特定或者极端的场合下，简直没有比这个破烂或工具更完美的选择了。",
    "example_jp": "このボロボロの古着は、ペンキ塗りの汚れる作業には持って来いだ。",
    "example_cn": "这件早就洗得发白破洞的旧衣服，用来干那种会沾一身漆的脏活简直是再合适不过了。"
  },
  {
    "id": 377,
    "word": "ひとすじなわ",
    "kanji": "一筋縄",
    "kana": "ひとすじなわ",
    "pos": "名词",
    "meaning": "(不)简单、普通的办法(常接否定)。遇到那种老奸巨猾的对手或者极其棘手的烂摊子，想靠普通套路轻松搞定简直是做梦。",
    "example_jp": "あの頑固な老社長を説得するのは、一筋縄ではいかないだろう。",
    "example_cn": "想去把那个固执得像块茅坑石头一样的老总裁给说服，绝对不是靠耍两句嘴皮子就能轻松糊弄过去的。"
  },
  {
    "id": 378,
    "word": "ほん〜",
    "kanji": "本〜",
    "kana": "ほん〜",
    "pos": "接头词",
    "meaning": "本、这。官方用来冷冰冰地强调当前提到的这个物件、这起事件，带有强烈的正式感和不容置疑的严肃语气。",
    "example_jp": "本大会での不正行為が発覚した場合、直ちに失格とし、会場から追放する。",
    "example_cn": "要是在本次比赛中被逮到敢玩什么阴招作弊，直接当场取消资格，像踢狗一样把你赶出会场。"
  },
  {
    "id": 379,
    "word": "だつ〜",
    "kanji": "脱〜",
    "kana": "だつ〜",
    "pos": "接头词",
    "meaning": "脱离、摆脱。咬紧牙关拼了老命想要挣脱某种让人绝望的困境、撕下丢人的标签，或者是硬抗着戒掉某种有害的瘾。",
    "example_jp": "万年フリーターからの脱却を目指し、彼は三十歳で必死に就活を始めた。",
    "example_cn": "为了撕掉身上那张像狗皮膏药一样的“万年打零工废物”的标签，他三十岁高龄红着眼拼了老命开始海投简历找工作。"
  },
  {
    "id": 380,
    "word": "とかす",
    "kanji": "解かす",
    "kana": "とかす",
    "pos": "动词",
    "meaning": "解开、梳理。烦躁地把死死缠在一起的死结、乱糟糟的头发耐心地一点点生拉硬拽地拨开，或者把心里的疙瘩解开。",
    "example_jp": "強風でぐちゃぐちゃに絡まった髪を、鏡の前で苛立ちながら解かした。",
    "example_cn": "站在镜子前，我满脸烦躁地死命拉扯着那头被妖风吹得像鸟窝一样死死打结的乱发。"
  },
  {
    "id": 381,
    "word": "るいする",
    "kanji": "類する",
    "kana": "るいする",
    "pos": "动词",
    "meaning": "类似、同类。两个事物就像一个模子里刻出来的，或者让人极其厌烦地属于同一个散发着同样恶臭的类别。",
    "example_jp": "これに類するクレームは過去にも山ほどあり、マニュアル通りに処理した。",
    "example_cn": "像这种没事找茬的同类投诉以前简直多得堆成山，我连脑子都不用动，直接冷着脸照着话术敷衍过去了。"
  },
  {
    "id": 382,
    "word": "いえじ",
    "kanji": "家路",
    "kana": "いえじ",
    "pos": "名词",
    "meaning": "回家的路。在外面被社会毒打了一天，拖着被榨干的身体，在夜色中步履蹒跚地走向那个只能勉强遮风挡雨的狗窝的归途。",
    "example_jp": "終電を逃し、冷たい雨に打たれながらトボトボと家路についた。",
    "example_cn": "绝望地错过了末班车，只能像条丧家犬一样淋着冰冷的夜雨，一步一拖地朝着出租屋的方向挨回去。"
  },
  {
    "id": 383,
    "word": "おしめ",
    "kanji": "襁褓",
    "kana": "おしめ",
    "pos": "名词",
    "meaning": "尿布。裹在婴儿屁股上用来兜屎兜尿的布料，新手父母每天都要捏着鼻子崩溃地洗上好几遍的噩梦来源。",
    "example_jp": "夜泣きする赤ん坊の臭いおしめを替えながら、寝不足で意識が遠のいた。",
    "example_cn": "强撑着快睁不开的眼皮，捏着鼻子给半夜狂哭的小祖宗换那块散发着恶臭的尿布，困得我大脑发黑差点晕过去。"
  },
  {
    "id": 384,
    "word": "おやきょうだい",
    "kanji": "親兄弟",
    "kana": "おやきょうだい",
    "pos": "名词",
    "meaning": "父母兄弟、血亲。身上流着一样的血、打断骨头连着筋的至亲，但在涉及巨大债务或利益时也可能变成反目成仇的死敌。",
    "example_jp": "借金取りに追われ、ついに親兄弟からも見放されて絶縁された。",
    "example_cn": "被一帮凶神恶煞的高利贷逼到了绝路，最后连我的亲爹娘和亲兄弟都狠心和我断绝了关系，把我扫地出门。"
  },
  {
    "id": 385,
    "word": "おぼえ",
    "kanji": "覚え",
    "kana": "おぼえ",
    "pos": "名词",
    "meaning": "记忆、印象。脑海里残留的那一点点模糊的印记，尤其是喝断片或者受了刺激后，怎么抓破头皮也想不起来的空白。",
    "example_jp": "酔い潰れて記憶がなく、どうやって家に帰ったのか全く覚えがない。",
    "example_cn": "昨晚喝得烂醉如泥直接断了片，我现在抓破头皮也拼凑不出一丁点我是怎么滚回这间狗窝的记忆。"
  },
  {
    "id": 386,
    "word": "ねぼける",
    "kanji": "寝ぼける",
    "kana": "ねぼける",
    "pos": "动词",
    "meaning": "睡迷糊。刚被吵醒或者半梦半醒时，脑子像一团浆糊，眼睛睁不开，嘴里嘟囔着胡话甚至做出愚蠢动作的痴呆状态。",
    "example_jp": "寝ぼけたまま熱いコーヒーを飲もうとして、膝に盛大にこぼして火傷した。",
    "example_cn": "顶着鸡窝头还没睡醒，迷迷糊糊地端起滚烫的咖啡就往嘴里送，结果全泼在了大腿上，烫得我杀猪般惨叫。"
  },
  {
    "id": 387,
    "word": "ふりはらう",
    "kanji": "振り払う",
    "kana": "ふりはらう",
    "pos": "动词",
    "meaning": "甩开、摆脱。极其厌恶地用力甩开别人死死拽住自己的手，或者强行把脑子里那些烦人的杂念和恐惧赶出去的决绝动作。",
    "example_jp": "すがりつく元彼の腕を冷酷に振り払い、彼女は一度も振り返らずに去った。",
    "example_cn": "面对那个跪在地上死死抱住自己大腿痛哭的前男友，她满脸嫌恶地用力一把甩开，头也不回地绝情离开。"
  },
  {
    "id": 388,
    "word": "うきしずみ",
    "kanji": "浮き沈み",
    "kana": "うきしずみ",
    "pos": "名词",
    "meaning": "起伏、沉浮。人生或运气就像坐过山车一样，时而被捧上天，时而摔进烂泥潭，充满戏剧性和让人崩溃的折磨。",
    "example_jp": "芸能界の激しい浮き沈みに耐えられず、彼はひっそりと引退した。",
    "example_cn": "实在是承受不住这个圈子里那种今天红透半边天、明天就被踩进烂泥的极端落差，他最后只能灰溜溜地宣布退圈。"
  },
  {
    "id": 389,
    "word": "はしわたし",
    "kanji": "橋渡し",
    "kana": "はしわたし",
    "pos": "名词",
    "meaning": "桥梁、牵线搭桥。在两个原本互相看不顺眼或者极度固执的阵营中间当传话筒，帮他们拉拢关系、两头受气的苦逼中间人。",
    "example_jp": "頑固な両社の社長の間で橋渡し役を任され、ストレスで胃が痛い。",
    "example_cn": "被迫夹在那两个脾气臭得像石头的公司老总中间当拉皮条的传话筒，两头受气搞得我胃病都犯了。"
  },
  {
    "id": 390,
    "word": "したたる",
    "kanji": "滴る",
    "kana": "したたる",
    "pos": "动词",
    "meaning": "滴落。水滴或鲜血因为吸满了重力，顺着衣服下摆或伤口一点点、吧嗒吧嗒地往下掉的可怕或狼狈的画面。",
    "example_jp": "傘を忘れ、ずぶ濡れになったスーツから冷たい雨水がポタポタと滴っている。",
    "example_cn": "倒霉催的没带伞，被浇成了一只落汤鸡，冰冷的雨水顺着死贴在身上的西装下摆吧嗒吧嗒地直往地板上滴。"
  },
  {
    "id": 391,
    "word": "さだめ",
    "kanji": "定め",
    "kana": "さだめ",
    "pos": "名词",
    "meaning": "命运、规定。那种仿佛在出生前就已经被老天爷写死在剧本里、无论你怎么绝望挣扎反抗都逃不掉的残酷宿命。",
    "example_jp": "どれだけ努力しても報われない、これが底辺の定めなのかと絶望した。",
    "example_cn": "无论我怎么像条狗一样拼命挣扎都爬不上去，难道这就是身为社会底层永远无法翻身的绝望宿命吗？"
  },
  {
    "id": 392,
    "word": "にごる",
    "kanji": "濁る",
    "kana": "にごる",
    "pos": "动词",
    "meaning": "浑浊、不清澈。原本清透的水里混进了烂泥变得脏兮兮看不透，或者被社会毒打后，人的眼神失去了高光，声音变得嘶哑。",
    "example_jp": "淀んで濁った川の水面には、大量のゴミと魚の死骸が浮いていた。",
    "example_cn": "那条散发着恶臭、混浊不堪的黑水河面上，密密麻麻地漂浮着成堆的塑料垃圾和翻白肚的死鱼。"
  },
  {
    "id": 393,
    "word": "おくゆかしい",
    "kanji": "奥床しい",
    "kana": "おくゆかしい",
    "pos": "い形容词",
    "meaning": "优雅、内敛。不张扬、不抢风头，举手投足间散发着一种深藏不露的良好修养和底蕴，让人感到极度舒适并想靠近。",
    "example_jp": "彼女の控えめで奥床しい態度に、同席した誰もが好感を抱いた。",
    "example_cn": "她那种不争不抢、安静地坐在角落却散发着优雅修养的内敛气质，让在座的所有人都忍不住对她心生好感。"
  },
  {
    "id": 394,
    "word": "まちうける",
    "kanji": "待ち受ける",
    "kana": "まちうける",
    "pos": "动词",
    "meaning": "等待、面临。不管是期待已久的大饼，还是前方早就设好的要命陷阱和残酷现实，都在张开大网等着你一脚踩进去。",
    "example_jp": "厳しいリストラ宣告が待ち受けているとも知らず、彼は呑気に出社した。",
    "example_cn": "丝毫不知道公司大门后正有一份残酷的裁员通知书在张开血盆大口等着他，他还像个没事人一样哼着小曲去上班。"
  },
  {
    "id": 395,
    "word": "こんぽう",
    "kanji": "梱包",
    "kana": "こんぽう",
    "pos": "名词",
    "meaning": "打包、包装。搬家或发货时，把易碎品用厚厚的气泡纸死死裹住，再塞进纸箱里拿胶带狂缠好几圈的烦人体力活。",
    "example_jp": "引越しの前夜、大量のゴミのような荷物を段ボールに詰めて梱包した。",
    "example_cn": "搬家前一晚熬红了眼，对着那一地像垃圾一样的破烂破口大骂，一边死命往纸箱里塞一边拿胶带狂封。"
  },
  {
    "id": 396,
    "word": "ききいれる",
    "kanji": "聞き入れる",
    "kana": "ききいれる",
    "pos": "动词",
    "meaning": "听从、采纳。本来固执己见，最后被别人死缠烂打或者苦苦哀求磨软了耳朵，勉为其难地点头答应把意见塞进脑子里。",
    "example_jp": "何度土下座して頼んでも、冷酷な社長は私の提案を一切聞き入れなかった。",
    "example_cn": "无论我怎么卑微地滑跪磕头死死哀求，那个冷血的秃头总裁也是铁着脸，半个字都不肯听进去。"
  },
  {
    "id": 397,
    "word": "なしとげる",
    "kanji": "成し遂げる",
    "kana": "なしとげる",
    "pos": "动词",
    "meaning": "完成、达成。经历了九九八十一难，掉光了头发呕心沥血，终于把那个原本看起来比登天还难的宏伟目标给彻底拿下。",
    "example_jp": "十年間の血のにじむような努力の末、ついに金メダル獲得という偉業を成し遂げた。",
    "example_cn": "熬过了整整十年那种练到吐血、暗无天日的魔鬼日子，最后竟然真的把那块沉甸甸的奥运金牌给死死咬进了嘴里。"
  },
  {
    "id": 398,
    "word": "わりこむ",
    "kanji": "割り込む",
    "kana": "わりこむ",
    "pos": "动词",
    "meaning": "插队、强行介入。极其没有素质地硬挤进别人辛辛苦苦排好的长队里，或者在别人正聊得火热时厚颜无耻地强行插嘴。",
    "example_jp": "トイレの長い列に厚かましいおばさんが割り込んできて、舌打ちをした。",
    "example_cn": "看着那个满脸横肉的大妈厚颜无耻地硬生生挤进了排了半天的厕所队伍里，我气得当场翻了个巨大的白眼狠狠啧了一声。"
  },
  {
    "id": 399,
    "word": "こなごな",
    "kanji": "粉々",
    "kana": "こなごな",
    "pos": "形容动词",
    "meaning": "粉碎。原本完整的东西被巨大的破坏力摔在地上，碎成了无数连拼都拼不起来的细小渣子，常用来指玻璃或脆弱的自尊心。",
    "example_jp": "彼女の冷酷な一言で、私のちっぽけなプライドは粉々に打ち砕かれた。",
    "example_cn": "被她那句不带脏字却极其恶毒的嘲讽狠狠扇在脸上，我那仅剩的最后一点可怜自尊心瞬间被踩得稀碎。"
  },
  {
    "id": 400,
    "word": "さえる",
    "kanji": "冴える",
    "kana": "さえる",
    "pos": "动词",
    "meaning": "清澈、清醒、灵敏。冷空气冻得人打激灵却大脑极其清醒，或者深夜喝了浓茶后脑子里思维转得飞起、眼睛瞪得像铜铃。",
    "example_jp": "深夜の冷たい風に吹かれ、酔いも覚めて頭が恐ろしいほど冴え渡っていた。",
    "example_cn": "被深夜冷飕飕的妖风狠狠一吹，原本昏沉的酒意瞬间被浇灭，脑子清醒得简直像台高速运转的机器，一丝睡意都没了。"
  },
  {
    "id": 401,
    "word": "みね",
    "kanji": "峰",
    "kana": "みね",
    "pos": "名词",
    "meaning": "山峰/刀背。从底向上隆起的最高处。引申为事物的顶点，或刀剑不锋利的那一侧。高耸入云的尖端，或是厚实冰冷的金属钝边。",
    "example_jp": "彼は刀の峰で、襲いかかる賊の肩を重く打ち据えた。",
    "example_cn": "他用刀背重重地砸在扑上来的贼人肩膀上。"
  },
  {
    "id": 402,
    "word": "あいだがら",
    "kanji": "間柄",
    "kana": "あいだがら",
    "pos": "名词",
    "meaning": "关系/交情。特指人与人之间基于血缘、婚姻或长期交往形成的纽带。不是冷冰冰的社会契约，而是带着温度和默契的人际羁绊。",
    "example_jp": "お金の話をしても角が立たない、昔からの間柄だ。",
    "example_cn": "我们是多年的老交情了，即使谈钱也不伤和气，可以坦诚相见。"
  },
  {
    "id": 403,
    "word": "てれくさい",
    "kanji": "照れくさい",
    "kana": "てれくさい",
    "pos": "い形容词",
    "meaning": "害羞的/难为情的。因为受到表扬、或是要在人前表达爱意时，感到无所适从、脸上发烧的轻微尴尬情绪。常伴随挠头或移开视线的动作。",
    "example_jp": "娘から「お父さんありがとう」と手紙を渡され、ひどく照れくさかった。",
    "example_cn": "女儿递给我一封写着“谢谢爸爸”的信，让我羞赧得不知手往哪儿放。"
  },
  {
    "id": 404,
    "word": "こい",
    "kanji": "鯉",
    "kana": "こい",
    "pos": "名词",
    "meaning": "鲤鱼。在日本文化中象征着生命力与成功。在池塘中游动时带有厚重感和鲜艳色彩的鱼类。",
    "example_jp": "橋の上からパンの耳を投げると、大きな錦鯉が水面を叩くように群がってきた。",
    "example_cn": "从桥上扔下吐司边，巨大的锦鲤拍打着水面，蜂拥着抢食。"
  },
  {
    "id": 405,
    "word": "いいかねる",
    "kanji": "言いかねる",
    "kana": "いいかねる",
    "pos": "动词",
    "meaning": "难以启齿/不便直说。并非不知道怎么说，而是出于顾虑对方感受或情境敏感，把话咽在喉咙里、欲言又止的纠结状态。",
    "example_jp": "奥さんの浮気現場を見たなんて、彼にはどうしても言いかねる。",
    "example_cn": "撞见了他妻子出轨的现场这种事，对着他我无论如何也难以启齿。"
  },
  {
    "id": 406,
    "word": "なじみ",
    "kanji": "馴染み",
    "kana": "なじみ",
    "pos": "名词",
    "meaning": "熟人/老顾客/熟悉。由“融合、习惯”演变而来。指经过长时间的接触，不再感到生疏，如同旧衣物贴合身体般、令人安心的熟稔关系。",
    "example_jp": "馴染みの居酒屋の大将が、黙っていつもの熱燗を出してくれた。",
    "example_cn": "常去的居酒屋老板一言不发，默默端上了我常点的那壶热清酒。"
  },
  {
    "id": 407,
    "word": "ふりまわす",
    "kanji": "振り回す",
    "kana": "ふりまわす",
    "pos": "他动词",
    "meaning": "挥舞/折腾/滥用。字面是四处挥动棒子。引申为无视他人的感受，任性地使唤别人，或肆意滥用权力。让人感到疲于奔命、被甩来甩去的无力感。",
    "example_jp": "彼女の気まぐれな思い付きに、週末は一日中振り回されたよ。",
    "example_cn": "被她心血来潮的念头折腾着，整个周末我都像个陀螺一样被甩来甩去。"
  },
  {
    "id": 408,
    "word": "みとれる",
    "kanji": "見とれる",
    "kana": "みとれる",
    "pos": "自动词",
    "meaning": "看入迷/看得出神。视线被眼前美丽或惊人的事物完全夺走，忘记了时间的流逝和周遭的动静。嘴唇微张、目光定格的痴迷状态。",
    "example_jp": "夕日に染まる見事な紅葉に、歩みを止めてすっかり見とれていた。",
    "example_cn": "停下脚步，我彻底沉醉在被夕阳染红的绝美枫叶中，挪不开眼。"
  },
  {
    "id": 409,
    "word": "もっぱら",
    "kanji": "専ら",
    "kana": "もっぱら",
    "pos": "副词",
    "meaning": "专门/净是/主要。将全部的精力、时间或话题都集中在某一个方向上，排斥其他事物。一种心无旁骛、或是无可奈何只能做某事的专注状态。",
    "example_jp": "休日はどこへも出かけず、専らベッドで猫と寝転がっている。",
    "example_cn": "休息日哪儿也不去，成天净是和猫一起瘫在床上。"
  },
  {
    "id": 410,
    "word": "みじん",
    "kanji": "微塵",
    "kana": "みじん",
    "pos": "名词/副词",
    "meaning": "微尘/碎屑/（下接否定）一点儿也不。常用于否定句型，强调连像灰尘那样微小的程度都没有。极其决绝、毫无保留的态度。",
    "example_jp": "自分が間違っているとは、彼は微塵も思っていない様子だ。",
    "example_cn": "看他那副样子，压根儿没觉得自己的做法有哪怕一丁点儿错。"
  },
  {
    "id": 411,
    "word": "つめきる",
    "kanji": "詰め切る",
    "kana": "つめきる",
    "pos": "自动词",
    "meaning": "一直待在/坚守。为了照顾病人或处理紧急事态，寸步不离地守在一个地方。熬红双眼、身心俱疲却不敢松懈的坚守状态。",
    "example_jp": "母親が倒れてから、彼女は三日間ずっと病室に詰め切っている。",
    "example_cn": "母亲倒下后，她连着三天寸步不离地死守在病房里。"
  },
  {
    "id": 412,
    "word": "はじらう",
    "kanji": "恥じらう",
    "kana": "はじらう",
    "pos": "自动词",
    "meaning": "羞涩/腼腆。特指遇到心上人或被夸奖时，脸颊绯红、低头不敢直视的娇羞姿态。带着一种惹人怜爱的内向情绪。",
    "example_jp": "「綺麗だよ」と褒められ、彼女は頬を赤らめて恥じらった。",
    "example_cn": "被夸奖“你真漂亮”后，她脸颊绯红，娇羞地低下了头。"
  },
  {
    "id": 413,
    "word": "おす",
    "kanji": "雄",
    "kana": "おす",
    "pos": "名词",
    "meaning": "雄性。动植物的雄性。体格强壮、为了争夺配偶或领地而展现出攻击性与力量感的生物学特征。",
    "example_jp": "その大きな角を持った鹿の雄は、群れを守るように威嚇してきた。",
    "example_cn": "那只顶着巨大犄角的雄鹿，为了保护鹿群，摆出了威吓的姿态。"
  },
  {
    "id": 414,
    "word": "あいつぐ",
    "kanji": "相次ぐ",
    "kana": "あいつぐ",
    "pos": "自动词",
    "meaning": "接连发生/不断出现。灾难、事故或特定事件像链条一样，一个接一个地爆发。让人应接不暇、产生压迫感或焦虑感的状态。",
    "example_jp": "猛吹雪の影響で、空港では欠航の知らせが相次いでいる。",
    "example_cn": "受暴风雪影响，机场大厅里航班取消的广播接二连三地响起。"
  },
  {
    "id": 415,
    "word": "とりつく",
    "kanji": "取り付く",
    "kana": "とりつく",
    "pos": "自动词",
    "meaning": "紧紧抓住/附体。物理上死死抱住某物不放，或引申为恶灵、强烈的念头占据大脑。一种失去理智、拼命挣扎或极度执着的状态。",
    "example_jp": "溺れかけた彼は、投げ込まれた浮き輪に必死で取り付いた。",
    "example_cn": "濒临溺水的他，拼死扒住了扔进水里的救生圈。"
  },
  {
    "id": 416,
    "word": "ひんする",
    "kanji": "瀕する",
    "kana": "ひんする",
    "pos": "自动词",
    "meaning": "濒临/面临。靠近极其危险、即将灭亡的边缘。站在悬崖边上、摇摇欲坠的绝望与紧迫感。",
    "example_jp": "資金繰りが悪化し、我が社は倒産の危機に瀕している。",
    "example_cn": "资金周转恶化，我们公司已经站在了破产倒闭的悬崖边上。"
  },
  {
    "id": 417,
    "word": "ばいきん",
    "kanji": "黴菌",
    "kana": "ばいきん",
    "pos": "名词",
    "meaning": "霉菌/细菌。引起疾病或腐坏的微生物。在日常语境中，常带有一种让人感到厌恶、想要赶快洗手消毒的肮脏感。",
    "example_jp": "「泥だらけの手でパンを掴むな、ばいきんが入るぞ！」と母が怒鳴った。",
    "example_cn": "“别用沾满泥巴的手抓面包，会吃进细菌的！”母亲大声训斥道。"
  },
  {
    "id": 418,
    "word": "もよおす",
    "kanji": "催す",
    "kana": "もよおす",
    "pos": "他动词",
    "meaning": "举办/感到(生理反应)。身体内部突然涌起某种无法控制的生理需求（如睡意、吐意）。神经被刺激、身体机能开始躁动的状态。",
    "example_jp": "退屈な校長先生の長い話を聞いているうちに、強い眠気を催した。",
    "example_cn": "听着校长无聊的冗长讲话，一阵强烈的睡意控制不住地袭来。"
  },
  {
    "id": 419,
    "word": "まじえる",
    "kanji": "交える",
    "kana": "まじえる",
    "pos": "他动词",
    "meaning": "掺杂/交加。把不同的东西混合在一起，或者双方跨越界限产生交集（如交谈、交锋）。打破单一状态，让多种元素在同一空间碰撞。",
    "example_jp": "時折冗談を交えながら、彼は自分の辛い過去を語ってくれた。",
    "example_cn": "他时不时夹杂着几句玩笑话，向我讲述了他那段痛苦的过往。"
  },
  {
    "id": 420,
    "word": "ようじ",
    "kanji": "楊枝",
    "kana": "ようじ",
    "pos": "名词",
    "meaning": "牙签。用于剔牙或插取小块食物的一头尖锐的细木棍。饭后在嘴角剔动、或是切好的水果旁放置的微小却实用的日用品。",
    "example_jp": "食後、おじさんはシーシーと音を立てながら楊枝で歯に挟まった肉を取った。",
    "example_cn": "饭后，大叔发出“嘶嘶”的声音，用牙签剔着塞在牙缝里的肉丝。"
  },
  {
    "id": 421,
    "word": "ひとりむすめ",
    "kanji": "一人娘",
    "kana": "ひとりむすめ",
    "pos": "名词",
    "meaning": "独生女。父母膝下唯一的女儿。常暗示着被父母捧在手心里、集万千宠爱与期望于一身的家族羁绊。",
    "example_jp": "大切に育てた一人娘を嫁に出す日、頑固な父が声を上げて泣いた。",
    "example_cn": "在把悉心养大的独生女嫁出去的那天，固执的父亲竟放声痛哭起来。"
  },
  {
    "id": 422,
    "word": "てごたえ",
    "kanji": "手応え",
    "kana": "てごたえ",
    "pos": "名词",
    "meaning": "反应/效果/手感。原本指击打物体时传回手上的震动感。引申为做事后取得的切实成果，或是掌心传来的“这事能成”的沉甸甸的反馈感。",
    "example_jp": "何度も試作を繰り返し、ようやく客に受ける味の手応えを掴んだ。",
    "example_cn": "反复试作了无数次，终于真切地摸索到了能受客人欢迎的味道。"
  },
  {
    "id": 423,
    "word": "くぎ",
    "kanji": "釘",
    "kana": "くぎ",
    "pos": "名词",
    "meaning": "钉子/叮嘱。除了物理连接，常用于「釘を刺す」，引申为为了防止对方反悔或犯错，提前严厉地警告、把话敲死的强硬态度。",
    "example_jp": "「絶対に誰にも言うなよ」と、別れ際にきつく釘を刺された。",
    "example_cn": "临别时他死死叮嘱我：“这事绝对不许跟任何人说啊。”"
  },
  {
    "id": 424,
    "word": "おおだい",
    "kanji": "大台",
    "kana": "おおだい",
    "pos": "名词",
    "meaning": "大关/整数关口。股票、年龄、体重等数字突破的一个心理或物理的重要整数界限。跨越这个数字时伴随的惊叹、绝望或冲击感。",
    "example_jp": "体重計に乗ったら、ついに恐れていた80キロの大台に乗ってしまった。",
    "example_cn": "站上体重秤一看，终于还是突破了让我恐惧的80公斤大关。"
  },
  {
    "id": 425,
    "word": "あばく",
    "kanji": "暴く",
    "kana": "あばく",
    "pos": "他动词",
    "meaning": "揭露/揭穿/挖出。用强力把原本被掩盖在黑暗中的丑恶事物（秘密、罪行）强行扒开、暴露在阳光下。带有攻击性和破坏掩饰的动作感。",
    "example_jp": "週刊誌の記者は、その政治家の隠された裏金疑惑を容赦なく暴いた。",
    "example_cn": "八卦杂志的记者毫不留情地揭穿了那位政客隐藏的政治黑金丑闻。"
  },
  {
    "id": 426,
    "word": "くさかり",
    "kanji": "草刈り",
    "kana": "くさかり",
    "pos": "名词",
    "meaning": "割草/除草。用镰刀或机器割除杂草的劳动。伴随着青草被切断的汁液气味、烈日下的汗水以及机械轰鸣声的农活场景。",
    "example_jp": "炎天下での草刈り作業は、腰が砕けるほど辛かった。",
    "example_cn": "顶着烈日除草，累得我腰都快断了。"
  },
  {
    "id": 427,
    "word": "きよわい",
    "kanji": "気弱い",
    "kana": "きよわい",
    "pos": "い形容词",
    "meaning": "懦弱/胆小。心理素质差，遇到强硬的对手或困难时，立刻就想退缩、妥协。低声下气、眼神躲闪的心理状态。",
    "example_jp": "彼は気弱な性格で、理不尽なクレームにもひたすら頭を下げるだけだ。",
    "example_cn": "他性格懦弱，面对无理的投诉也只是一味地低头道歉。"
  },
  {
    "id": 428,
    "word": "そう",
    "kanji": "添う",
    "kana": "そう",
    "pos": "自动词",
    "meaning": "伴随/符合/结为夫妻。像影子一样紧贴在某物旁边，或者行为与对方的期待完全契合。一种不抢风头、默默贴近、顺应走势的柔和感。",
    "example_jp": "お客様のご希望に添えるよう、全力でプランを修正いたします。",
    "example_cn": "为了能完全契合您的期望，我们会全力修改方案。"
  },
  {
    "id": 429,
    "word": "なれそめ",
    "kanji": "馴れ初め",
    "kana": "なれそめ",
    "pos": "名词",
    "meaning": "恋爱的开端/相识的经过。专指情侣或夫妻从陌生到开始产生情愫的那段浪漫或机缘巧合的最初故事。",
    "example_jp": "披露宴で、二人の馴れ初めをまとめた恥ずかしいビデオが流された。",
    "example_cn": "婚宴上，播放了记录两人相识相恋过程的令人害羞的短片。"
  },
  {
    "id": 430,
    "word": "いいぶん",
    "kanji": "言い分",
    "kana": "いいぶん",
    "pos": "名词",
    "meaning": "说法/主张/不满。每个人站在自己的立场上想要表达的道理或抱怨。遇到矛盾时，急于为自己辩护、倾吐不满的言辞。",
    "example_jp": "どっちの言い分も分かるが、今はとにかく冷静になってくれ。",
    "example_cn": "你们俩的说法我都能理解，但现在请先冷静下来。"
  },
  {
    "id": 431,
    "word": "めまぐるしい",
    "kanji": "目まぐるしい",
    "kana": "めまぐるしい",
    "pos": "い形容词",
    "meaning": "眼花缭乱/瞬息万变。事物变化或移动的速度极快，让眼睛来不及捕捉，甚至导致大脑产生眩晕感。信息爆炸或高速运转下的晕眩状态。",
    "example_jp": "目まぐるしく変わる流行を追いかけるのに、すっかり疲れてしまった。",
    "example_cn": "追赶着瞬息万变的流行趋势，我已经彻底疲惫不堪了。"
  },
  {
    "id": 432,
    "word": "かたこと",
    "kanji": "片言",
    "kana": "かたこと",
    "pos": "名词",
    "meaning": "结结巴巴/只言片语/外语不熟练。幼儿刚学说话或外国人说外语时，词汇破碎、发音生硬、只能零星蹦出几个词的状态。",
    "example_jp": "迷子の外国人が、片言の日本語で必死に道を尋ねてきた。",
    "example_cn": "迷路的外国人操着蹩脚的日语，拼命地向我问路。"
  },
  {
    "id": 433,
    "word": "のりつぎ",
    "kanji": "乗り継ぎ",
    "kana": "のりつぎ",
    "pos": "名词",
    "meaning": "换乘/中转。在长途旅行中，从一辆交通工具下来等待另一辆的过程。伴随着时刻表的焦虑、拖着行李奔波的疲惫感。",
    "example_jp": "ドバイでの乗り継ぎ時間が5時間もあり、空港のベンチで仮眠をとった。",
    "example_cn": "在迪拜中转的时间长达5个小时，我只好在机场的长椅上打了个盹。"
  },
  {
    "id": 434,
    "word": "おろか",
    "kanji": "愚か",
    "kana": "おろか",
    "pos": "な形容词",
    "meaning": "愚蠢/糊涂。指缺乏判断力，做出了事后让人后悔、显得极其可笑或短视的行为。带着自我嘲讽或怜悯的批判情绪。",
    "example_jp": "詐欺師の甘い言葉を信じて全財産を渡すなんて、本当に愚かだった。",
    "example_cn": "居然相信骗子的花言巧语交出了全部财产，我真是蠢到家了。"
  },
  {
    "id": 435,
    "word": "みせびらかす",
    "kanji": "見せびらかす",
    "kana": "みせびらかす",
    "pos": "他动词",
    "meaning": "炫耀/卖弄。故意把贵重物品或好运展示在别人眼前，渴望看到别人羡慕或嫉妒的表情。一种略带挑衅和强烈虚荣心的张扬姿态。",
    "example_jp": "彼は新しい高級時計を、わざと袖をまくって同僚に見せびらかした。",
    "example_cn": "他特意卷起袖子，向同事显摆他那块新买的名贵手表。"
  },
  {
    "id": 436,
    "word": "どんくさい",
    "kanji": "鈍臭い",
    "kana": "どんくさい",
    "pos": "い形容词",
    "meaning": "笨拙/迟钝。动作慢半拍、反应不灵敏，做事不得要领总是出洋相。带着一点嫌弃但也常用于自嘲的泥土气形容词。",
    "example_jp": "何もない平らな道で転ぶなんて、自分の鈍臭さが嫌になる。",
    "example_cn": "走在什么都没有的平坦路上居然能摔倒，我真讨厌自己这副笨手笨脚的样子。"
  },
  {
    "id": 437,
    "word": "たけ",
    "kanji": "岳",
    "kana": "たけ",
    "pos": "名词",
    "meaning": "高山/山峰。通常指陡峭、险峻、需要仰望的宏大山体。给人一种巍峨、难以征服的压迫感与崇高感。",
    "example_jp": "険しい岩肌を登り切り、ついにその岳の頂に立った。",
    "example_cn": "攀过陡峭的岩壁，我终于站在了那座险峰的顶端。"
  },
  {
    "id": 438,
    "word": "ながなが",
    "kanji": "長々",
    "kana": "ながなが",
    "pos": "副词",
    "meaning": "冗长/长久。时间拖得太长，导致听众失去耐心、感到厌烦。常用来修饰无聊的致辞或是没完没了的闲聊。",
    "example_jp": "玄関先で近所の奥さんに捕まり、長々と世間話を聞かされた。",
    "example_cn": "在玄关被邻居太太拉住，被迫听她扯了半天没完没了的家常。"
  },
  {
    "id": 439,
    "word": "はださむい",
    "kanji": "肌寒い",
    "kana": "はださむい",
    "pos": "い形容词",
    "meaning": "微寒/感觉冷。不是凛冽的严寒，而是凉意渗入单薄的衣服，让人忍不住抱紧双臂、微微打寒颤的肤觉体验。",
    "example_jp": "雨上がりの夜風が少し肌寒く、彼女はカーディガンを羽織った。",
    "example_cn": "雨后的晚风透着一丝凉意，她赶紧披上了一件开衫。"
  },
  {
    "id": 440,
    "word": "しずく",
    "kanji": "滴",
    "kana": "しずく",
    "pos": "名词",
    "meaning": "水滴。液体聚集在边缘，重力战胜表面张力而掉落的极小单位。坠落时带有静谧感或湿冷感的水珠。",
    "example_jp": "濡れた傘の先から、冷たい雨の滴がポツリポツリと落ちている。",
    "example_cn": "冰冷的雨滴从湿漉漉的伞尖上，吧嗒吧嗒地往下掉。"
  },
  {
    "id": 441,
    "word": "きめ",
    "kanji": "木目",
    "kana": "きめ",
    "pos": "名词",
    "meaning": "纹理/木纹/肌肤细腻度。木材表面的纹路，或肌肤的质感。用作形容皮肤时，指纹理排布紧密，摸上去光滑细腻、如丝绸般的触感。",
    "example_jp": "彼女の肌は木目が細かく、まるで陶器のように滑らかだ。",
    "example_cn": "她的肌肤纹理细腻，摸上去就像陶瓷一样光滑。"
  },
  {
    "id": 442,
    "word": "さがしだす",
    "kanji": "探し出す",
    "kana": "さがしだす",
    "pos": "他动词",
    "meaning": "找出来/寻获。从杂乱的环境或隐藏的深处，经过一番努力翻找，终于将某物揪出来。伴随着拨开障碍、如释重负的动作感。",
    "example_jp": "埃まみれの段ボールの中から、昔のアルバムをやっと探し出した。",
    "example_cn": "在积满灰尘的纸箱里翻找半天，终于翻出了以前的老相册。"
  },
  {
    "id": 443,
    "word": "あおむく",
    "kanji": "仰向く",
    "kana": "あおむく",
    "pos": "自动词",
    "meaning": "仰面/朝天/仰视。脸部朝上、背部朝下的姿势。有时是为了强忍眼泪，视线从平行转向辽阔天空的动作转移。",
    "example_jp": "涙がこぼれないように、彼はぐっと仰向いて夜空を見た。",
    "example_cn": "为了不让眼泪掉下来，他用力仰起头，死死盯着夜空。"
  },
  {
    "id": 444,
    "word": "いいつけ",
    "kanji": "言い付け",
    "kana": "いいつけ",
    "pos": "名词",
    "meaning": "吩咐/命令/告密。上级对下级的指示，或向长辈告发同伴的错误。带有一种必须服从的权力压制感，或是小孩子打小报告的偷偷摸摸感。",
    "example_jp": "親の言い付けを破ってゲームセンターに行ったのがバレて、ひどく怒られた。",
    "example_cn": "违背了父母的吩咐偷偷去游戏厅的事暴露了，挨了一顿狠狠的臭骂。"
  },
  {
    "id": 445,
    "word": "うしろめたい",
    "kanji": "後ろめたい",
    "kana": "うしろめたい",
    "pos": "い形容词",
    "meaning": "内疚/亏心。做了对不起别人的事，感觉背后有无数双眼睛在指责自己。不敢直视对方眼睛，心里揣着兔子般忐忑不安的负罪感。",
    "example_jp": "嘘をついて会社を休み、遊園地に来たので少し後ろめたい。",
    "example_cn": "撒谎请了病假跑来游乐园玩，心里总觉得有些内疚不安。"
  },
  {
    "id": 446,
    "word": "かんろく",
    "kanji": "貫禄",
    "kana": "かんろく",
    "pos": "名词",
    "meaning": "威严/气派/风度。经历了岁月的沉淀或积累了实绩后，自然散发出的沉稳与不可动摇的气场。让人不敢轻视的厚重存在感。",
    "example_jp": "彼はまだ30代だが、ベテラン俳優のような堂々とした貫禄がある。",
    "example_cn": "他虽然才三十多岁，却已经散发着老戏骨般堂堂正正的威严气场。"
  },
  {
    "id": 447,
    "word": "めあて",
    "kanji": "目当て",
    "kana": "めあて",
    "pos": "名词",
    "meaning": "目的/目标/企图。为了达成某个私利而盯着的标的物。常带有功利色彩，眼神如同盯着猎物般锁定在一个具体事物上的算计感。",
    "example_jp": "彼女は彼の財産が目当てで結婚したと、もっぱらの噂だ。",
    "example_cn": "大家都在私下议论，说她纯粹是冲着男方的财产才结的婚。"
  },
  {
    "id": 448,
    "word": "ふるう",
    "kanji": "振るう",
    "kana": "ふるう",
    "pos": "他动词/自动词",
    "meaning": "挥舞/施展/振奋。用力挥动武器，或是毫无保留地施展才能、暴力或权力。能量从体内向外爆发、产生实质性影响的动态过程。",
    "example_jp": "酔っ払って店員に暴力を振るうなんて、絶対に許されない。",
    "example_cn": "喝醉酒后冲着店员挥舞拳头施暴，这种行为绝对不可原谅。"
  },
  {
    "id": 449,
    "word": "あざわらう",
    "kanji": "嘲笑う",
    "kana": "あざわらう",
    "pos": "他动词",
    "meaning": "嘲笑/讥笑。用冷酷、轻蔑的眼神看着别人的失败，发出带有恶意的笑声。一种居高临下、将他人的尊严踩在脚底的情感打击。",
    "example_jp": "私の失敗を嘲笑うかのように、彼は鼻でフッと息を漏らした。",
    "example_cn": "仿佛在讥笑我的失败一般，他从鼻子里哼出了一声冷笑。"
  },
  {
    "id": 450,
    "word": "さきばしる",
    "kanji": "先走る",
    "kana": "さきばしる",
    "pos": "自动词",
    "meaning": "抢先/操之过急。在时机成熟之前，大脑就自行推演了结果并提前采取了行动。结果往往是白费力气或弄巧成拙的急躁与尴尬。",
    "example_jp": "相手の返事も待たずにホテルを予約するなんて、気が先走りすぎだよ。",
    "example_cn": "连对方的回应都没等就先把酒店订了，你也太操之过急了吧。"
  },
  {
    "id": 451,
    "word": "あせる",
    "kanji": "褪せる",
    "kana": "あせる",
    "pos": "自动词",
    "meaning": "褪色/衰退。布料经受日晒洗涤后失去原有的鲜艳，或记忆、热情逐渐变得暗淡模糊。带着一种岁月流逝、无可挽回的苍凉与陈旧感。",
    "example_jp": "窓際に飾っていた写真の彼の色は、すっかり褪せてしまった。",
    "example_cn": "摆在窗边照片上他的色彩，已经被阳光晒得彻底褪去发白。"
  },
  {
    "id": 452,
    "word": "さずける",
    "kanji": "授ける",
    "kana": "さずける",
    "pos": "他动词",
    "meaning": "授予/传授。神明、君主或师傅等上位者，将珍贵的物品、智慧或秘传技艺郑重地交托给下位者。伴随着双手奉上、充满仪式感的庄重氛围。",
    "example_jp": "師匠は息を引き取る直前、私に一子相伝の奥義を授けてくれた。",
    "example_cn": "师傅在咽下最后一口气前，将单传的独门奥义传授给了我。"
  },
  {
    "id": 453,
    "word": "はやくちことば",
    "kanji": "早口言葉",
    "kana": "はやくちことば",
    "pos": "名词",
    "meaning": "绕口令。故意把发音相似的词凑在一起，让人快速念出却极易咬到舌头的语言游戏。常伴随说到一半卡壳、引得周围人哄堂大笑的滑稽场面。",
    "example_jp": "アナウンサーは本番前、鏡に向かって必死に早口言葉を練習していた。",
    "example_cn": "播音员在正式开播前，正对着镜子拼命地练习绕口令。"
  },
  {
    "id": 454,
    "word": "はっする",
    "kanji": "発する",
    "kana": "はっする",
    "pos": "动词",
    "meaning": "发出/散发。从内部将声音、光线、气味或命令用力向外释放。一种原本被包裹或压抑的能量突破界限、瞬间喷涌而出的动作感。",
    "example_jp": "彼は怒りで顔を真っ赤にし、獣のようなうなり声を発した。",
    "example_cn": "他气得满脸通红，喉咙里发出了一阵犹如野兽般的低吼。"
  },
  {
    "id": 455,
    "word": "ひとくくり",
    "kanji": "一括り",
    "kana": "ひとくくり",
    "pos": "名词/动词",
    "meaning": "一概而论/打包处理。字面是把散落的东西用绳子捆成一扎。引申为无视个体差异，粗暴地把各种情况或人归为同类。带着一种被随意打发、不被理解的委屈与反感。",
    "example_jp": "「最近の若者は」と一括りにされて、腹の底から反発を覚えた。",
    "example_cn": "被一句“现在的年轻人啊”给一竿子打翻一船人，我打心底里感到极度反感。"
  },
  {
    "id": 456,
    "word": "きりたおす",
    "kanji": "切り倒す",
    "kana": "きりたおす",
    "pos": "他动词",
    "meaning": "砍倒。用斧头或电锯将粗壮的树木从根部切断，使其轰然倒塌。伴随着木屑飞溅、树木沉重砸向地面的破坏力与巨响。",
    "example_jp": "村のシンボルだった大樹が、チェーンソーで無残に切り倒された。",
    "example_cn": "那棵作为村子象征的大树，被电锯无情地拦腰砍倒，轰然倒地。"
  },
  {
    "id": 457,
    "word": "ききのがす",
    "kanji": "聞き逃す",
    "kana": "ききのがす",
    "pos": "他动词",
    "meaning": "漏听/没听清。因为走神或周围太吵，让重要的声音信息从耳边溜走。猛然回过神来想要追问，却已错失时机的懊恼与慌乱。",
    "example_jp": "ボーッとしていて、駅のホームで流れた電車の遅延アナウンスを聞き逃した。",
    "example_cn": "刚才正发呆，把站台上播放的电车晚点广播给漏听了。"
  },
  {
    "id": 458,
    "word": "やける",
    "kanji": "妬ける",
    "kana": "やける",
    "pos": "自动词",
    "meaning": "嫉妒/吃醋。看到别人拥有自己渴望的东西（如恋人的关注、成就），心里像被火灼烧一样酸楚不甘。撇着嘴、眼神里透着酸味的别扭情绪。",
    "example_jp": "彼女が他の男と楽しそうに笑っているのを見て、ひどく妬けた。",
    "example_cn": "看着她和其他男人有说有笑的样子，我心里直冒酸水，嫉妒得要命。"
  },
  {
    "id": 459,
    "word": "そこねる",
    "kanji": "損ねる",
    "kana": "そこねる",
    "pos": "他动词",
    "meaning": "损坏/伤感情。本来好好的状态被破坏，或是因为一点小摩擦导致双方产生隔阂。常指无心之失带来的不可挽回的破坏感。",
    "example_jp": "ちょっとした言い間違いで、取引先の社長の機嫌を損ねてしまった。",
    "example_cn": "就因为一句无心的口误，彻底惹恼了客户公司的老板。"
  },
  {
    "id": 460,
    "word": "おおむかし",
    "kanji": "大昔",
    "kana": "おおむかし",
    "pos": "名词",
    "meaning": "很久以前/太古时代。时间跨度远超个人记忆，甚至追溯到神话或历史黎明期。遥远到让人感觉恍如隔世、蒙上一层神秘或陈旧的面纱。",
    "example_jp": "まだ人間が火の使い方を知らなかった大昔の話だ。",
    "example_cn": "那还是在人类连怎么用火都不知道的遥远太古时代发生的故事了。"
  },
  {
    "id": 461,
    "word": "ふみいれる",
    "kanji": "踏み入れる",
    "kana": "ふみいれる",
    "pos": "他动词",
    "meaning": "踏入/涉足。小心翼翼或下定决心将脚迈进一个未知的领域、危险的区域或别人的私密空间。伴随着屏住呼吸、试探性的侵入感。",
    "example_jp": "立ち入り禁止の廃墟に一歩足を踏み入れると、ひんやりとした空気が肌を刺した。",
    "example_cn": "刚把脚迈进禁止入内的废墟，一股阴冷的空气便刺痛了皮肤。"
  },
  {
    "id": 462,
    "word": "むくいる",
    "kanji": "報いる",
    "kana": "むくいる",
    "pos": "自动词",
    "meaning": "报答/报复。对别人施与的恩惠给予回报，或对造成的伤害予以回击。带着一种“有恩必报、有仇必报”的强烈执念与能量回流。",
    "example_jp": "親の期待に報いるため、彼は血を吐くような努力で受験勉強に耐えた。",
    "example_cn": "为了报答父母的期望，他拼了命地熬过了如泣血般痛苦的备考时光。"
  },
  {
    "id": 463,
    "word": "かんばしい",
    "kanji": "芳しい",
    "kana": "かんばしい",
    "pos": "い形容词",
    "meaning": "芳香的/（常接否定）良好的。原本指迷人香气，现代多用于否定形式，委婉表达成绩、业绩或病情不尽如人意，带有叹气摇头的无奈感。",
    "example_jp": "発売から一ヶ月経ったが、新商品の売り上げは全く芳しくない。",
    "example_cn": "虽然已经发售一个月了，但这新产品的销量实在是不怎么好看。"
  },
  {
    "id": 464,
    "word": "いなむ",
    "kanji": "否む",
    "kana": "いなむ",
    "pos": "他动词",
    "meaning": "否认/拒绝。面对指控或事实时用力摇头说“不”。常以「～を否めない」出现，表现出即使心里不愿，但在铁证面前也只能低头的无力感。",
    "example_jp": "監視カメラの映像を見せられ、彼は自分が犯人であることを否めなかった。",
    "example_cn": "被逼着看完监控录像后，他再也无法否认自己就是犯人的事实。"
  },
  {
    "id": 465,
    "word": "おとめ",
    "kanji": "乙女",
    "kana": "おとめ",
    "pos": "名词",
    "meaning": "少女。未婚、年轻的女性。带有一种未经世事打磨的纯真、容易害羞且充满浪漫幻想的柔美滤镜。",
    "example_jp": "恋バナになると、普段は男勝りな彼女も乙女のような顔つきになる。",
    "example_cn": "一聊起恋爱话题，平时像个假小子一样的她也会露出少女般的娇羞神态。"
  },
  {
    "id": 466,
    "word": "なげく",
    "kanji": "嘆く",
    "kana": "なげく",
    "pos": "他动词",
    "meaning": "叹息/哀叹。面对无法改变的悲惨现状或失去的珍贵事物，发自内心地感到悲伤或愤慨。眉头紧锁、垂下肩膀，发出一声沉重叹息的颓废姿态。",
    "example_jp": "彼は才能のなさを嘆き、薄暗い部屋でギターを床に投げつけた。",
    "example_cn": "他哀叹着自己的毫无才华，在昏暗的房间里把吉他狠狠砸向了地板。"
  },
  {
    "id": 467,
    "word": "いく〜",
    "kanji": "幾〜",
    "kana": "いく〜",
    "pos": "接头词",
    "meaning": "几～/多少～。接在数量词前表示数量之多。不是精确的数字统计，而是一种主观上感到漫长、重叠、数不胜数的厚重累积感。",
    "example_jp": "幾重にも重なった分厚い雲の隙間から、一筋の光が差し込んだ。",
    "example_cn": "从重重叠叠的厚重云层缝隙中，漏下了一线光芒。"
  },
  {
    "id": 468,
    "word": "ふりまく",
    "kanji": "振りまく",
    "kana": "ふりまく",
    "pos": "他动词",
    "meaning": "散布/播撒。像撒豆子一样，把笑容、魅力或流言蜚语毫无节制地抛洒给周围所有人。有时带有一种逢场作戏、八面玲珑的虚伪感。",
    "example_jp": "彼女は誰に対しても愛想笑いを振りまき、計算高く生きている。",
    "example_cn": "她对谁都到处播撒着逢场作戏的讨好笑容，满心算计地活在这个世上。"
  },
  {
    "id": 469,
    "word": "ひきつぐ",
    "kanji": "引き継ぐ",
    "kana": "ひきつぐ",
    "pos": "他动词",
    "meaning": "交接/继承。像跑接力赛递交接力棒一样，将未完成的工作、沉重的责任或传统技艺，原封不动地交托到继任者手中，伴随着责任转移的厚重感。",
    "example_jp": "退職する先輩から、分厚いファイルの束と厄介な顧客を引き継いだ。",
    "example_cn": "从离职的前辈那里，接手了厚厚一沓文件和极为难缠的客户。"
  },
  {
    "id": 470,
    "word": "さなか",
    "kanji": "最中",
    "kana": "さなか",
    "pos": "名词",
    "meaning": "正当中/最高潮时。事情进行得最激烈、最让人无法抽身的那个顶峰瞬间。周围环境喧嚣，身处漩涡中心的紧张与压迫感。",
    "example_jp": "猛暑のさなか、クーラーが突然壊れて地獄のような一日を過ごした。",
    "example_cn": "正值酷暑的节骨眼上空调却突然坏了，让我熬过了地狱般的一天。"
  },
  {
    "id": 471,
    "word": "すくい",
    "kanji": "救い",
    "kana": "すくい",
    "pos": "名词",
    "meaning": "救赎/慰藉。在无尽的黑暗、痛苦或绝望的泥潭中，突然垂下的一根蜘蛛丝。让人在窒息中获得喘息之机，紧紧抓住不放的最后希望。",
    "example_jp": "悲惨な映画だったが、最後に犬が生き残ったことだけが唯一の救いだった。",
    "example_cn": "虽然是部极其悲惨的电影，但最后狗狗活了下来，成了我心中唯一的救赎。"
  },
  {
    "id": 472,
    "word": "みならう",
    "kanji": "見習う",
    "kana": "みならう",
    "pos": "他动词",
    "meaning": "效仿/见习。视线紧紧追随技艺高超的人，在一旁默默观察、模仿对方的一举一动。带着崇敬与渴望成长的谦卑姿态。",
    "example_jp": "職人の手元を食い入るように見つめ、その無駄のない動きを見習おうとした。",
    "example_cn": "我死死盯着工匠的手部动作，试图效仿他那没有一丝多余的利落操作。"
  },
  {
    "id": 473,
    "word": "とらわれる",
    "kanji": "捕らわれる",
    "kana": "とらわれる",
    "pos": "自动词",
    "meaning": "被抓住/被束缚。物理上被戴上手铐，或心理上被某种陈旧观念、恐惧、偏见死死锁住。像被困在无形牢笼里，挣脱不开的窒息感。",
    "example_jp": "過去の失敗に深く捕らわれ、彼は新しい一歩を踏み出せずにいる。",
    "example_cn": "他的心被过去的失败死死锁住，怎么也迈不出新的一步。"
  },
  {
    "id": 474,
    "word": "つぐない",
    "kanji": "償い",
    "kana": "つぐない",
    "pos": "名词",
    "meaning": "赎罪/补偿。为了填补犯下过错造成的巨大伤害，用金钱、时间去进行赔偿。背负着沉重的十字架，低头忏悔、试图赎清罪孽的沉痛行为。",
    "example_jp": "彼は交通事故で奪った命への償いとして、毎月遺族に仕送りを続けている。",
    "example_cn": "为了偿还交通事故中夺走人命的罪孽，他坚持每个月给死者家属寄钱。"
  },
  {
    "id": 475,
    "word": "ゆるむ",
    "kanji": "緩む",
    "kana": "ゆるむ",
    "pos": "自动词",
    "meaning": "松动/松懈。原本紧绷的绳索变松，或高度紧张的神经突然缓和下来。伴随着吐出一口长气、肌肉松弛、甚至露出破绽的懈怠感。",
    "example_jp": "試験が終わった途端に気が緩み、ひどい風邪をひいて寝込んでしまった。",
    "example_cn": "考试一结束神经立刻就松懈了下来，结果得了重感冒直接卧床不起了。"
  },
  {
    "id": 476,
    "word": "ひきあげる",
    "kanji": "引き上げる",
    "kana": "ひきあげる",
    "pos": "他动词",
    "meaning": "捞起/撤退。用力把沉在水底的东西拉上来，或在战术上认清形势后果断从前线撤兵。带有向上的物理动作或抽身离开的决断。",
    "example_jp": "海底から錆びついた沈没船の一部が、クレーンでゆっくりと引き上げられた。",
    "example_cn": "起重机将生锈的沉船残骸，缓缓从海底打捞了上来。"
  },
  {
    "id": 477,
    "word": "そっけない",
    "kanji": "素っ気ない",
    "kana": "そっけない",
    "pos": "い形容词",
    "meaning": "冷淡的/不留情面的。面对别人的热情搭话，只用极短的词语打发。连伪装的热情都懒得奉送，犹如一盆冷水泼在脸上的冰冷态度。",
    "example_jp": "勇気を出してデートに誘ったが、「忙しい」と素っ気ない返事が返ってきた。",
    "example_cn": "鼓起勇气邀请她约会，却只被一句“没空”给冷冷地打发了。"
  },
  {
    "id": 478,
    "word": "たなあげ",
    "kanji": "棚上げ",
    "kana": "たなあげ",
    "pos": "名词",
    "meaning": "搁置/暂不处理。把棘手的文件塞进书架顶层，引申为遇到无法解决的矛盾时刻意回避，丢到一边假装看不见。逃避现实的拖延战术。",
    "example_jp": "夫婦間の根本的な問題は棚上げにしたまま、表面上は仲良く暮らしている。",
    "example_cn": "夫妻间的根本矛盾被一直搁置一边不谈，表面上却装出和睦度日的样子。"
  },
  {
    "id": 479,
    "word": "まちどおしい",
    "kanji": "待ち遠しい",
    "kana": "まちどおしい",
    "pos": "い形容词",
    "meaning": "盼望/急切期待。等待的时间感觉被无限拉长，迫不及待地想要那一天早点到来。经常数着日历、满心欢喜又焦躁不安的期盼情绪。",
    "example_jp": "注文した最新のゲーム機が届くのが待ち遠しくて、何度も玄関を見に行った。",
    "example_cn": "迫不及待地盼着订购的最新款游戏机送来，我跑去玄关看了好几次。"
  },
  {
    "id": 480,
    "word": "うりだし",
    "kanji": "売り出し",
    "kana": "うりだし",
    "pos": "名词",
    "meaning": "发售/大减价。商品首次推向市场，或为了吸引顾客在店门前大声吆喝的促销活动。伴随着抢购的喧闹声和充满活力的商业气息。",
    "example_jp": "年末の売り出しで、スーパーのレジにはカートを押した客の長蛇の列ができた。",
    "example_cn": "赶上年末大促销，超市收银台前推着购物车的顾客排起了长龙。"
  },
  {
    "id": 481,
    "word": "あおっぽい",
    "kanji": "青っぽい",
    "kana": "あおっぽい",
    "pos": "い形容词",
    "meaning": "发青的/不成熟的。颜色带着淡淡的青蓝，或形容人思想幼稚像没熟透的果实，带着一股涉世未深的单纯与不切实际。",
    "example_jp": "彼はまだ学生気分が抜けず、青っぽい理想論ばかりを会議で語る。",
    "example_cn": "他身上那股学生气还没褪去，在会议上净发表些幼稚不切实际的理想论。"
  },
  {
    "id": 482,
    "word": "いあわせる",
    "kanji": "居合わせる",
    "kana": "いあわせる",
    "pos": "自动词",
    "meaning": "碰巧在场。完全没有预谋，只是由于命运的巧合在突发事件发生瞬间刚好站在同一空间。常带有一种被卷入麻烦的愕然感。",
    "example_jp": "銀行強盗の現場に偶然居合わせ、私は震えながら床に伏せた。",
    "example_cn": "碰巧撞见了银行抢劫的现场，我浑身发抖地趴在了地板上。"
  },
  {
    "id": 483,
    "word": "けたちがい",
    "kanji": "桁違い",
    "kana": "けたちがい",
    "pos": "名词",
    "meaning": "天壤之别/不在一个级别。字面是位数的不同。指双方在实力或财富上的差距极其悬殊，大到让人连嫉妒都生不出来，只能绝望仰望。",
    "example_jp": "彼の家は桁違いの大金持ちで、庭にはプライベートのヘリポートがある。",
    "example_cn": "他家是那种根本不在一个级别的超级富豪，院子里甚至有私人停机坪。"
  },
  {
    "id": 484,
    "word": "なすりつける",
    "kanji": "擦り付ける",
    "kana": "なすりつける",
    "pos": "他动词",
    "meaning": "摩擦/推诿。把脏东西用力蹭在墙上，引申为把自己的过错或责任强行甩锅给无辜的人。带着卑鄙、肮脏且让人极度厌恶的甩锅动作。",
    "example_jp": "上司は自分のミスを部下になすりつけ、涼しい顔をしている。",
    "example_cn": "上司把自己的失误死死推给下属背锅，自己倒装出一副若无其事的样子。"
  },
  {
    "id": 485,
    "word": "ひとすじ",
    "kanji": "一筋",
    "kana": "ひとすじ",
    "pos": "名词/副词",
    "meaning": "一条/一心一意。不仅指滑过的一道光、淌下的一行泪，更指人将全部热情投入到唯一的道路上，不撞南墙不回头的执拗与专注。",
    "example_jp": "おでこに汗のしずくが一筋流れ落ちても、彼女は絵筆を止めなかった。",
    "example_cn": "哪怕一滴汗水从额头上滑落，她也没有停下手里的画笔。"
  },
  {
    "id": 486,
    "word": "あがり",
    "kanji": "上がり",
    "kana": "あがり",
    "pos": "名词",
    "meaning": "结束/收益/紧张。到达终点；营业额；或是站在舞台上心跳加速、大脑空白的怯场状态。含义多变，重点在于一个过程的终点或爆发点。",
    "example_jp": "大勢の観客を前にして、彼女はすっかりあがってしまい、台詞を忘れた。",
    "example_cn": "面对台下黑压压的观众，她怯场紧张到了极点，把台词忘得一干二净。"
  },
  {
    "id": 487,
    "word": "まり",
    "kanji": "毬",
    "kana": "まり",
    "pos": "名词",
    "meaning": "球/毛线球。传统工艺制作的花纹球或小孩玩的橡胶球。拍打时发出沉闷声响，带着一种童谣般怀旧、柔软的质感。",
    "example_jp": "子猫は飼い主が転がした毛糸の毬に飛びつき、夢中でじゃれついている。",
    "example_cn": "小猫猛地扑向主人滚过来的毛线球，兴奋地在地上打着滚扑腾。"
  },
  {
    "id": 488,
    "word": "とりわけ",
    "kanji": "取り分け",
    "kana": "とりわけ",
    "pos": "副词",
    "meaning": "尤其/特别。从众多同类事物中，特意挑出一个最突出的。就像从大盘菜中单独分出最肥美的一块。表达鹤立鸡群的强调感。",
    "example_jp": "彼女はどんなスポーツも得意だが、取りわけ水泳に関してはプロ級だ。",
    "example_cn": "她什么运动都很拿手，但要说游泳，那尤其是达到了专业级别的水平。"
  },
  {
    "id": 489,
    "word": "になう",
    "kanji": "担う",
    "kana": "になう",
    "pos": "他动词",
    "meaning": "挑/承担。物理上将重物扛在肩膀上，引申为接下重大的责任或时代使命。压在肩头的重量让人步履沉重，但也彰显了被委以重任的觉悟。",
    "example_jp": "若い彼が、倒産寸前の会社を再建するという重責を担うことになった。",
    "example_cn": "年轻的他，一肩扛起了重建这家濒临破产的公司的沉重责任。"
  },
  {
    "id": 490,
    "word": "よりそう",
    "kanji": "寄り添う",
    "kana": "よりそう",
    "pos": "自动词",
    "meaning": "紧挨着/贴近。两个人肩膀挨着肩膀靠在一起。不仅是物理靠近，更是在对方悲伤痛苦时默默给予温暖和支持的温柔陪伴姿态。",
    "example_jp": "老夫婦は公園のベンチで、お互いの肩を寄せ合いながら静かに寄り添っていた。",
    "example_cn": "老两口坐在公园的长椅上，肩膀挨着肩膀，静静地依偎在一起。"
  },
  {
    "id": 491,
    "word": "かみきる",
    "kanji": "嚙み切る",
    "kana": "かみきる",
    "pos": "他动词",
    "meaning": "咬断。用牙齿紧紧咬住肉类或坚韧的绳索，用力拉扯直到其断裂。伴随着咀嚼肌发力、撕裂纤维的野蛮动作感。",
    "example_jp": "彼は怒りに震えながら、縛られていたロープを必死で噛み切った。",
    "example_cn": "他气得浑身发抖，用牙齿拼命咬断了绑住自己的绳索。"
  },
  {
    "id": 492,
    "word": "そる",
    "kanji": "反る",
    "kana": "そる",
    "pos": "自动词",
    "meaning": "弯曲/向后仰。木材受潮失去平直翘起；或是人挺起胸膛、身体拼命向后倾倒的姿势。打破了原本笔直状态的物理形变。",
    "example_jp": "腹を抱えて大笑いし、彼は椅子から落ちそうなくらい背中を反らせた。",
    "example_cn": "他捧着肚子哈哈大笑，身子直往后仰，差点从椅子上翻过去。"
  },
  {
    "id": 493,
    "word": "いやらしい",
    "kanji": "嫌らしい",
    "kana": "いやらしい",
    "pos": "い形容词",
    "meaning": "讨厌的/下流的/猥琐的。眼神带着黏糊糊的情色意味，或是为利益百般讨好的做作姿态。让人起鸡皮疙瘩、想要敬而远之的生理性反感。",
    "example_jp": "満員電車の中で、おじさんが女子高生を嫌らしい目でじろじろと見ていた。",
    "example_cn": "在挤满人的电车里，那个大叔用极其猥琐下流的眼神死死盯着女高中生看。"
  },
  {
    "id": 494,
    "word": "やすらぐ",
    "kanji": "安らぐ",
    "kana": "やすらぐ",
    "pos": "自动词",
    "meaning": "感到安稳/平静。摆脱外界的喧嚣，紧绷的神经像泡在温水里一样彻底放松。呼吸变得平缓，嘴角微微上扬的安心状态。",
    "example_jp": "焚き火の揺れる炎を見ていると、一日の疲れが消えて心が安らぐ。",
    "example_cn": "望着篝火里摇曳的火苗，一天的疲惫都烟消云散，内心感到了彻底的平静安稳。"
  },
  {
    "id": 495,
    "word": "なんど",
    "kanji": "納戸",
    "kana": "なんど",
    "pos": "名词",
    "meaning": "储藏室/壁橱。日式房屋里堆放不常用物品的昏暗小房间。充满了灰尘的气味、闭塞感和年代久远的杂乱感。",
    "example_jp": "祖母の家の薄暗い納戸には、埃を被った古い雛人形がしまわれている。",
    "example_cn": "奶奶家昏暗的储藏室里，收着一套落满灰尘的旧雏人偶。"
  },
  {
    "id": 496,
    "word": "のろい",
    "kanji": "呪い",
    "kana": "のろい",
    "pos": "名词",
    "meaning": "诅咒。带着极度的怨恨，祈求对方遭遇不幸的阴暗念头或施展的法术。像毒液一样侵蚀身心，充满怨气与令人毛骨悚然的宿命感。",
    "example_jp": "彼女は裏切った恋人を思いながら、藁人形に深く釘を打ち込んで呪いをかけた。",
    "example_cn": "她脑海里想着那个背叛自己的恋人，将钉子狠狠砸进稻草人里下了诅咒。"
  },
  {
    "id": 497,
    "word": "さしこむ",
    "kanji": "射し込む",
    "kana": "さしこむ",
    "pos": "动词",
    "meaning": "照射进来/剧痛。强烈的光线从缝隙刺入；或者胃腹部突然像是被刀绞一般爆发性地剧烈疼痛。带有“突入”与“锐利”的物理或生理冲击。",
    "example_jp": "会議の途中で突然、胃に鋭い痛みが射し込み、彼はその場にうずくまった。",
    "example_cn": "开会开到一半，胃里突然传来一阵绞碎般的剧痛，他疼得直接蹲在了地上。"
  },
  {
    "id": 498,
    "word": "ねびき",
    "kanji": "値引き",
    "kana": "ねびき",
    "pos": "名词/动词",
    "meaning": "打折/降价。商家为促成交易在原价上削减金额。伴随着顾客讨价还价的口舌交锋，或是看到红字降价标签时捡到便宜的快感。",
    "example_jp": "「もう一声！」と粘って、家電量販店でテレビを大幅に値引きしてもらった。",
    "example_cn": "靠着死缠烂打求店家“再便宜点！”，终于在家电大卖场拿到了电视机的大幅折扣。"
  },
  {
    "id": 499,
    "word": "こしぬけ",
    "kanji": "腰抜け",
    "kana": "こしぬけ",
    "pos": "名词",
    "meaning": "胆小鬼/懦夫。遇险时因极度恐惧导致腰部力量全失，瘫软在地。充满鄙夷，形容人不仅心里害怕，连身体都窝囊地失去机能。",
    "example_jp": "チンピラに絡まれた途端、彼は彼女を置いて逃げ出すという腰抜けぶりだった。",
    "example_cn": "刚被小混混缠上，他居然把女朋友丢下自己跑了，真是个窝囊透顶的胆小鬼。"
  },
  {
    "id": 500,
    "word": "つきまとう",
    "kanji": "付きまとう",
    "kana": "つきまとう",
    "pos": "自动词",
    "meaning": "纠缠/跟踪。像影子一样死死跟在身后怎么甩都甩不掉。无论是死缠烂打的跟踪狂还是挥之不去的厄运，都带有一种令人窒息的压迫感。",
    "example_jp": "別れた後も元彼が執拗に付きまとうので、ついに警察に相談した。",
    "example_cn": "分手后前男友还是像块狗皮膏药一样死死纠缠，我最终只能去报警求助。"
  },
  {
    "id": 501,
    "word": "でっち",
    "kanji": "丁稚",
    "kana": "でっち",
    "pos": "名词",
    "meaning": "学徒/小伙计。旧时在商店或手工作坊里打杂的未成年学徒。常带有被老板严厉使唤、穿着破旧围裙扫地或跑腿的底层卑微感。",
    "example_jp": "丁稚の少年は、主人の怒鳴り声に肩をすくめて床を磨き続けた。",
    "example_cn": "听到老板的怒吼，当学徒的少年缩了缩肩膀，继续用力擦着地板。"
  },
  {
    "id": 502,
    "word": "かる",
    "kanji": "狩る",
    "kana": "かる",
    "pos": "他动词",
    "meaning": "狩猎/搜寻。带着武器追捕野生动物，或引申为到处搜刮特定的人或物。一种带着攻击性、目标明确的追击与捕获动作。",
    "example_jp": "彼は目を血走らせて、セール品のワゴンから獲物を狩るように服を漁った。",
    "example_cn": "他红着眼睛，像是在狩猎猎物一般，在特价花车里疯狂翻找衣服。"
  },
  {
    "id": 503,
    "word": "おいたてる",
    "kanji": "追い立てる",
    "kana": "おいたてる",
    "pos": "他动词",
    "meaning": "驱赶/催促。从后面施加压力，逼迫人或动物赶紧离开或加快动作。让人感到背后发凉、连气都喘不过来的紧迫感。",
    "example_jp": "締め切りに追い立てられ、彼は三日間一睡もせずにキーボードを叩いた。",
    "example_cn": "被死线在背后拼命催赶着，他连着三天没合眼，疯狂敲击着键盘。"
  },
  {
    "id": 504,
    "word": "かび",
    "kanji": "黴",
    "kana": "かび",
    "pos": "名词",
    "meaning": "霉菌。在阴暗潮湿处滋生的真菌。伴随着令人作呕的腐败气味，以及黏糊糊、让人浑身起鸡皮疙瘩的生理性厌恶。",
    "example_jp": "久しぶりに開けた別荘の押し入れは、ひどい黴の臭いが鼻を突いた。",
    "example_cn": "许久未去的别墅，一拉开壁橱，一股刺鼻的严重霉味直冲脑门。"
  },
  {
    "id": 505,
    "word": "もうしご",
    "kanji": "申し子",
    "kana": "もうしご",
    "pos": "名词",
    "meaning": "骄子/天赐之子。向神佛祈求后诞生的孩子。引申为在某个领域拥有如天赐般绝对天赋的人才。带着极度的赞美与不可企及的光环。",
    "example_jp": "彼女はまさにターフの申し子だ、その圧倒的な末脚で他を置き去りにした。",
    "example_cn": "她简直就是草地赛道的骄子，用那压倒性的冲刺速度把其他人远远甩在身后。"
  },
  {
    "id": 506,
    "word": "うわむく",
    "kanji": "上向く",
    "kana": "うわむく",
    "pos": "自动词",
    "meaning": "向上/好转。物理上抬起头，或事态、经济从谷底反弹，朝着好的方向发展。一种止住颓势、终于看到一丝曙光的抬升感。",
    "example_jp": "涙を堪えるようにぐっと顔が上向いた瞬間、彼女の強さを感じた。",
    "example_cn": "在她为了强忍泪水而用力仰起头的那一瞬间，我感受到了她的坚强。"
  },
  {
    "id": 507,
    "word": "りくつっぽい",
    "kanji": "理屈っぽい",
    "kana": "りくつっぽい",
    "pos": "い形容词",
    "meaning": "爱认死理的/好辩的。不管什么事都要扯出一堆大道理，总爱跟人争个高下。让人感到啰嗦、固执且极度心累的沟通状态。",
    "example_jp": "酔うと理屈っぽくなる彼に絡まれ、すっかり愛想が尽きてしまった。",
    "example_cn": "被喝醉后就爱满嘴大道理的他死缠烂打，我的耐心彻底被耗尽了。"
  },
  {
    "id": 508,
    "word": "つとめて",
    "kanji": "努めて",
    "kana": "つとめて",
    "pos": "副词",
    "meaning": "尽量/刻意地。明明内心有其他情绪，却在表面上强行压抑，努力装出另一种样子。带着一种勉强自己、极不自然的紧绷感。",
    "example_jp": "動揺を悟られないよう、彼は努めて冷静な声で電話に応答した。",
    "example_cn": "为了不让人察觉到自己的动摇，他刻意压低声音，装作极其冷静地接了电话。"
  },
  {
    "id": 509,
    "word": "きがね",
    "kanji": "気兼ね",
    "kana": "きがね",
    "pos": "名词/自动词",
    "meaning": "顾虑/拘束。担心给别人添麻烦或惹人不快，而在行动上畏手畏脚。放不开手脚、如坐针毡的拘谨心理状态。",
    "example_jp": "義理の実家では何をするにも気兼ねして、肩が凝って仕方がない。",
    "example_cn": "在婆家做什么都觉得拘束，连肩膀都僵硬得不行。"
  },
  {
    "id": 510,
    "word": "みちばた",
    "kanji": "道端",
    "kana": "みちばた",
    "pos": "名词",
    "meaning": "路边/道旁。道路的两侧边缘。常与被人遗弃的物品、不起眼的野花或流浪动物联系在一起的边缘角落。",
    "example_jp": "道端に捨てられた段ボールの中で、子猫が寒そうに丸まっていた。",
    "example_cn": "在丢弃在路边的纸箱里，小猫冷得缩成了一团。"
  },
  {
    "id": 511,
    "word": "たれる",
    "kanji": "垂れる",
    "kana": "たれる",
    "pos": "自动词/他动词",
    "meaning": "滴下/低垂。液体顺着重力往下流，或者失去力气般低垂着头或四肢。带有一种无力、沉重或无可奈何的下坠感。",
    "example_jp": "額から滴り落ちた汗が、計算式をびっしり書いたノートにポタポタと垂れた。",
    "example_cn": "从额头滴落的汗水，吧嗒吧嗒地滴在写满计算公式的笔记本上。"
  },
  {
    "id": 512,
    "word": "きめこむ",
    "kanji": "決め込む",
    "kana": "きめこむ",
    "pos": "他动词",
    "meaning": "认定/假装。在没有确凿证据的情况下，主观上死死咬定某事；或是为了逃避而强行装出某种状态（如装睡）。带着一种顽固和自欺欺人。",
    "example_jp": "彼は自分には全く責任がないと決め込み、ふんぞり返って座っている。",
    "example_cn": "他一口咬定这事跟自己半点关系没有，大摇大摆地往后瘫坐在椅子上。"
  },
  {
    "id": 513,
    "word": "まと",
    "kanji": "的",
    "kana": "まと",
    "pos": "名词",
    "meaning": "靶子/目标。原本是射箭的靶心。引申为众矢之的，所有人的攻击、非议或视线都集中在一点。无处可逃的压迫感。",
    "example_jp": "不用意な発言のせいで、彼はマスコミからの非難の的になってしまった。",
    "example_cn": "因为一句不经意的发言，他彻底沦为了媒体群起攻之的靶子。"
  },
  {
    "id": 514,
    "word": "みおとり",
    "kanji": "見劣り",
    "kana": "みおとり",
    "pos": "名词/自动词",
    "meaning": "逊色/相形见绌。单独看还可以，但和更优秀的东西放在一起比，瞬间就显得寒酸或不足。伴随着自卑和脸面上挂不住的尴尬。",
    "example_jp": "最新型のハイスペックPCと並べられると、私の古いノートPCは明らかに見劣りする。",
    "example_cn": "和最新款的高配电脑摆在一起，我那台破笔记本瞬间显得寒酸无比。"
  },
  {
    "id": 515,
    "word": "ひきつける",
    "kanji": "引き付ける",
    "kana": "ひきつける",
    "pos": "他动词",
    "meaning": "吸引/引起痉挛。用魅力把人的心神和视线死死拽过来；或指身体不受控制地抽搐。带着一股难以抗拒的强拉扯力。",
    "example_jp": "彼女の情熱的なスピーチは、会場にいる全ての人を強く引き付けた。",
    "example_cn": "她那充满激情的演讲，将全场所有人的心都牢牢地吸引住了。"
  },
  {
    "id": 516,
    "word": "さだめる",
    "kanji": "定める",
    "kana": "さだめる",
    "pos": "他动词",
    "meaning": "规定/瞄准。把枪口死死对准猎物，或是制定不可动摇的严厉规则。排除了不确定性，带有权威感和不可转移的锁定动作。",
    "example_jp": "スナイパーはスコープ越しに標的を定め、ゆっくりと引き金に指をかけた。",
    "example_cn": "狙击手透过瞄准镜死死锁定目标，手指缓缓搭上了扳机。"
  },
  {
    "id": 517,
    "word": "かまえる",
    "kanji": "構える",
    "kana": "かまえる",
    "pos": "自动词/他动词",
    "meaning": "摆出姿势/安家。摆出迎击的架势准备战斗，或是在某地稳稳地建起宅邸。一种蓄势待发、准备迎接冲击的肌肉紧绷状态。",
    "example_jp": "突然襲いかかってきた野犬に対し、彼は持っていた傘で身を構えた。",
    "example_cn": "面对突然扑上来的野狗，他举起手里的雨伞摆出了防御的架势。"
  },
  {
    "id": 518,
    "word": "かけよる",
    "kanji": "駆け寄る",
    "kana": "かけよる",
    "pos": "自动词",
    "meaning": "跑上前去。因为担心、急切或极度喜悦，小步快跑着靠近对方。带着强烈的感情冲动和急促的脚步声。",
    "example_jp": "転んで泣き出した子供の元へ、母親が血相を変えて駆け寄った。",
    "example_cn": "母亲神色慌张地冲上前去，一把抱住摔倒大哭的孩子。"
  },
  {
    "id": 519,
    "word": "ささげる",
    "kanji": "捧げる",
    "kana": "ささげる",
    "pos": "他动词",
    "meaning": "奉献/献出。将双手高高举起献上物品。引申为将自己最宝贵的时间、生命或纯洁毫无保留地献给信仰或事业的崇高姿态。",
    "example_jp": "彼は半生を半導体の研究に捧げ、ついに歴史的なブレイクスルーを果たした。",
    "example_cn": "他将大半生都奉献给了半导体研究，终于取得了历史性的突破。"
  },
  {
    "id": 520,
    "word": "でくわす",
    "kanji": "出くわす",
    "kana": "でくわす",
    "pos": "自动词",
    "meaning": "偶然遇见。完全没有心理准备的情况下，在某个转角突然撞见不想见的人或麻烦事。心跳漏拍、倒吸一口凉气的惊愕感。",
    "example_jp": "街角で元カノと新しい彼氏にバッタリ出くわし、気まずさに顔が引きつった。",
    "example_cn": "在街角猛地撞见前女友和她的新欢，尴尬得我脸部的肌肉都僵硬了。"
  },
  {
    "id": 521,
    "word": "てきびしい",
    "kanji": "手厳しい",
    "kana": "てきびしい",
    "pos": "い形容词",
    "meaning": "严厉/毫不留情。不留一点情面，直戳痛处的批评或打击。像被当面狠狠扇了一巴掌般，让人无地自容的刺痛感。",
    "example_jp": "教授からの手厳しい指摘に、彼はぐうの音も出ずうつむいた。",
    "example_cn": "面对教授毫不留情的严厉指责，他被怼得哑口无言，只能深深低下了头。"
  },
  {
    "id": 522,
    "word": "かかす",
    "kanji": "欠かす",
    "kana": "かかす",
    "pos": "他动词",
    "meaning": "缺少/漏掉（常接否定）。日常习惯中绝不会漏掉的一环。常用于「～を欠かさない」，体现出一种雷打不动、极其自律的坚持。",
    "example_jp": "彼は毎朝、単語帳アプリでの学習を一日たりとも欠かしたことがない。",
    "example_cn": "他每天早晨雷打不动地用单词APP背词，哪怕一天都没有落下过。"
  },
  {
    "id": 523,
    "word": "ほりだしもの",
    "kanji": "掘り出し物",
    "kana": "ほりだしもの",
    "pos": "名词",
    "meaning": "捡漏/便宜货。从一堆不起眼的破烂里，意外翻找出来的珍贵物品或超值好货。带着捡到大便宜的窃喜与兴奋感。",
    "example_jp": "骨董市で埃まみれの壺を買ったら、実は数百万円の掘り出し物だった。",
    "example_cn": "在古董市场买了只落满灰尘的破罐子，结果竟然是价值数百万的超级大漏。"
  },
  {
    "id": 524,
    "word": "あさいち",
    "kanji": "朝市",
    "kana": "あさいち",
    "pos": "名词",
    "meaning": "早市。清晨在广场或路边摆开的集市。伴随着大声的吆喝、新鲜带露水的蔬菜和海腥味，充满底层生活气息和活力的场景。",
    "example_jp": "活気あふれる港の朝市で、威勢のいいおばちゃんから新鮮な蟹を買った。",
    "example_cn": "在充满活力的港口早市上，从一位中气十足的大妈那里买到了新鲜的螃蟹。"
  },
  {
    "id": 525,
    "word": "ずさん",
    "kanji": "杜撰",
    "kana": "ずさん",
    "pos": "な形容词/名词",
    "meaning": "粗制滥造/马虎。做事漏洞百出、敷衍了事。连最基础的确认都没做，留下一堆烂摊子让人去擦屁股的恶劣工作态度。",
    "example_jp": "こんな杜撰なデータ管理システムでは、情報漏洩が起きるのも当然だ。",
    "example_cn": "用这种漏洞百出的粗劣数据管理系统，发生信息泄露简直是必然的。"
  },
  {
    "id": 526,
    "word": "たがやす",
    "kanji": "耕す",
    "kana": "たがやす",
    "pos": "他动词",
    "meaning": "翻耕/耕作。用锄头或拖拉机将坚硬的土地翻松。伴随着金属切入泥土的沉闷声响、汗水和泥土腥味的重体力劳动。",
    "example_jp": "炎天下、彼は麦わら帽子を被り、黙々とひび割れた畑を耕し続けた。",
    "example_cn": "烈日下，他戴着草帽，一声不吭地翻耕着干裂的田地。"
  },
  {
    "id": 527,
    "word": "つぼ",
    "kanji": "坪",
    "kana": "つぼ",
    "pos": "名词",
    "meaning": "坪(面积单位)。日本的传统面积单位（约3.3平米）。常用来衡量土地或房屋的大小，带有一种精打细算、寸土寸金的现实重量感。",
    "example_jp": "たった十坪の狭いラーメン屋だが、連日行列が絶えない繁盛店だ。",
    "example_cn": "虽然只是间区区十坪大（三十多平米）的逼仄拉面店，却天天大排长龙生意兴隆。"
  },
  {
    "id": 528,
    "word": "にのうで",
    "kanji": "二の腕",
    "kana": "にのうで",
    "pos": "名词",
    "meaning": "大臂/上臂。肩膀到手肘之间的部位。夏天穿短袖时容易露出的柔软部位，也常是肌肉酸痛或皮下脂肪堆积的地方。",
    "example_jp": "冷房の効きすぎたオフィスで、彼女は冷えた二の腕をさすって震えていた。",
    "example_cn": "在冷气开得太足的办公室里，她冻得瑟瑟发抖，不停搓揉着冰凉的大臂。"
  },
  {
    "id": 529,
    "word": "てもと",
    "kanji": "手元",
    "kana": "てもと",
    "pos": "名词",
    "meaning": "手边/手头。伸手就能触及的极小范围。常用来指代眼前正在操作的东西，或是手头的存款，带有极强的即时性和掌控感。",
    "example_jp": "極度の緊張で手元が狂い、コーヒーを書類の上にぶちまけてしまった。",
    "example_cn": "因为极度紧张导致手一抖，把咖啡全泼在了手边的文件上。"
  },
  {
    "id": 530,
    "word": "あやまる",
    "kanji": "誤る",
    "kana": "あやまる",
    "pos": "自动词/他动词",
    "meaning": "弄错/失误。不仅是简单的做错题，更指判断失误导致了严重的后果，或踏上了无法挽回的歧途。带着悔恨和无可挽回的沉重感。",
    "example_jp": "ハンドルの操作を誤り、車はガードレールを突き破って崖から転落した。",
    "example_cn": "因为打错方向盘的操作失误，车子撞破护栏直接滚下了悬崖。"
  },
  {
    "id": 531,
    "word": "ひとすじに",
    "kanji": "一筋に",
    "kana": "ひとすじに",
    "pos": "副词",
    "meaning": "一心一意地/径直地。斩断所有杂念，像一条拉直的线一样朝着唯一的终点猛冲。带着不顾一切、甚至有些偏执的狂热。",
    "example_jp": "泥だらけになりながらも、彼はゴール一筋にただひたすら走り続けた。",
    "example_cn": "即使摔得满身泥泞，他依然眼里只有终点，不顾一切地疯狂狂奔。"
  },
  {
    "id": 532,
    "word": "ころもがえ",
    "kanji": "衣替え",
    "kana": "ころもがえ",
    "pos": "名词/自动词",
    "meaning": "换季换装。随着季节交替，把衣柜里的衣服全盘替换的家庭大工程。伴随着樟脑丸的气味和对季节流转的实感。",
    "example_jp": "週末は家族総出で衣替えをし、防虫剤の匂いがする冬服をクローゼットに押し込んだ。",
    "example_cn": "周末全家总动员大换季，把透着防虫剂气味的冬装一股脑塞进了衣柜里。"
  },
  {
    "id": 533,
    "word": "みがまえる",
    "kanji": "身構える",
    "kana": "みがまえる",
    "pos": "自动词",
    "meaning": "摆好架势/严阵以待。察觉到危险或敌意时，身体本能地绷紧，进入防备状态。心跳加速，犹如竖起刺的刺猬般的紧张感。",
    "example_jp": "ドアを激しく叩く音に、彼女は息を殺して身構え、バットを握り直した。",
    "example_cn": "听到剧烈的砸门声，她屏住呼吸浑身紧绷，重新握紧了手里的棒球棍。"
  },
  {
    "id": 534,
    "word": "てぢか",
    "kanji": "手近",
    "kana": "てぢか",
    "pos": "な形容词/名词",
    "meaning": "手边/身边。就在自己伸手可及的极近距离。往往在紧急状况下，不去挑选，而是顺手抓起最近的物品。",
    "example_jp": "怒りに任せて、手近にあったガラスの灰皿を壁に思い切り投げつけた。",
    "example_cn": "被怒火冲昏了头脑，抓起手边的玻璃烟灰缸狠狠砸向了墙壁。"
  },
  {
    "id": 535,
    "word": "うめあわせる",
    "kanji": "埋め合わせる",
    "kana": "うめあわせる",
    "pos": "他动词",
    "meaning": "补偿/弥补。用某种行动去填补因为迟到、失约或过失造成的亏欠。带着讨好和企图平息对方怒火的卑微感。",
    "example_jp": "デートをすっぽかした埋め合わせに、彼女が欲しがっていた高級バッグを買わされた。",
    "example_cn": "为了弥补放了她鸽子的过错，我被迫大出血给她买了她一直想要的名牌包。"
  },
  {
    "id": 536,
    "word": "あずまや",
    "kanji": "東屋",
    "kana": "あずまや",
    "pos": "名词",
    "meaning": "凉亭/茅草亭。公园或庭院里供人避雨或休息的简易敞开式建筑。带有一种暂时躲避喧嚣、感受风声雨声的静谧氛围。",
    "example_jp": "突然の夕立に見舞われ、私たちは公園の東屋に駆け込んで雨宿りをした。",
    "example_cn": "突然下起了雷阵雨，我们赶紧冲进公园的凉亭里躲雨。"
  },
  {
    "id": 537,
    "word": "うきぼり",
    "kanji": "浮き彫り",
    "kana": "うきぼり",
    "pos": "名词",
    "meaning": "浮雕/凸显。原本是雕刻技法，引申为隐藏在水面下的矛盾或问题，经过某个事件后，清晰且刺眼地暴露在所有人面前。",
    "example_jp": "今回の大規模なシステム障害で、会社の危機管理の甘さが浮き彫りになった。",
    "example_cn": "这次大规模的系统瘫痪，彻底暴露了公司在危机公关管理上的极其草率。"
  },
  {
    "id": 538,
    "word": "なみたいてい",
    "kanji": "並大抵",
    "kana": "なみたいてい",
    "pos": "名词",
    "meaning": "普通/寻常（常接否定）。极度强调要完成某件事，绝非仅靠一般的努力就能达到。背后是咬碎牙齿的坚持与超出常人的付出。",
    "example_jp": "働きながら難関大学院に合格するのは、並大抵の努力では到底不可能だ。",
    "example_cn": "边工作边考上顶尖学府的研究生，仅凭常人程度的努力是根本不可能做到的。"
  },
  {
    "id": 539,
    "word": "いろなおし",
    "kanji": "色直し",
    "kana": "いろなおし",
    "pos": "名词/自动词",
    "meaning": "换装(特指婚宴)。新娘在婚宴中途退场换上另一套华丽礼服重新登场。伴随着宾客的惊叹和全场焦点的闪耀感。",
    "example_jp": "色直しで真っ赤なドレスに着替えて登場した新婦に、会場から大きな歓声が上がった。",
    "example_cn": "新娘换上一袭鲜红的礼服重新回到婚宴现场，全场爆发出巨大的欢呼声。"
  },
  {
    "id": 540,
    "word": "おこない",
    "kanji": "行い",
    "kana": "おこない",
    "pos": "名词",
    "meaning": "行为/品行。人的一举一动，带有强烈的道德评判色彩。做好事或坏事后，面对天谴或赞誉时的因果宿命感。",
    "example_jp": "「日頃の行いが悪いから、こんな目に遭うんだ」と彼は自分を責めた。",
    "example_cn": "“都怪我平时作恶多端，才会落得这般田地。”他痛苦地自责着。"
  },
  {
    "id": 541,
    "word": "めんする",
    "kanji": "面する",
    "kana": "めんする",
    "pos": "自动词",
    "meaning": "面向/临着。建筑物的正面或窗户朝着某个特定的开阔方向（如大海、大马路）。决定了房间的光线、视野和噪音程度。",
    "example_jp": "窓が大通りに面しているため、夜中までトラックの騒音がうるさくて眠れない。",
    "example_cn": "因为窗户直面着主干道，直到半夜大卡车的噪音都吵得人根本睡不着。"
  },
  {
    "id": 542,
    "word": "ほろぼす",
    "kanji": "滅ぼす",
    "kana": "ほろぼす",
    "pos": "他动词",
    "meaning": "毁灭/使灭亡。用绝对的力量将一个国家、家族或个人的前途彻底摧毁，连根拔起。充满了悲剧色彩和不可逆转的破坏力。",
    "example_jp": "彼はギャンブルに狂い、ついには自分の家族すらも破滅へと滅ぼしてしまった。",
    "example_cn": "他疯狂沉迷赌博，最终亲手将自己的整个家庭推向了家破人亡的深渊。"
  },
  {
    "id": 543,
    "word": "つるぎ",
    "kanji": "剣",
    "kana": "つるぎ",
    "pos": "名词",
    "meaning": "剑。冷兵器，双刃。不仅是杀戮的工具，也象征着斩断迷惘的决意或不可侵犯的威严。带有金属的冰冷和杀气。",
    "example_jp": "追い詰められた騎士は、血に濡れた剣を高く掲げて最後の突撃を試みた。",
    "example_cn": "被逼入绝境的骑士，高高举起沾满鲜血的利剑，发起了最后的决死冲锋。"
  },
  {
    "id": 544,
    "word": "ひでり",
    "kanji": "日照り",
    "kana": "ひでり",
    "pos": "名词",
    "meaning": "干旱/久旱不雨。连续多日烈日暴晒没有一滴雨。土地干裂、农作物枯死，空气中弥漫着绝望和焦灼的窒息感。",
    "example_jp": "何ヶ月も続く過酷な日照りで、川は干上がり、作物は全て枯れ果てた。",
    "example_cn": "极其残酷的旱灾持续了数月，河床干涸，庄稼更是全部枯死。"
  },
  {
    "id": 545,
    "word": "かくれが",
    "kanji": "隠れ家",
    "kana": "かくれが",
    "pos": "名词",
    "meaning": "隐蔽处/秘密基地。为了躲避世俗喧嚣或追捕，悄悄藏身的不为人知的地方。带有一种隔绝外界、令人安心的隐秘感。",
    "example_jp": "裏路地にあるその薄暗いバーは、彼にとって誰にも邪魔されない隠れ家だった。",
    "example_cn": "藏在小巷深处的那家昏暗酒吧，对他来说是没有任何人能打扰的秘密基地。"
  },
  {
    "id": 546,
    "word": "なにごと",
    "kanji": "何事",
    "kana": "なにごと",
    "pos": "名词",
    "meaning": "什么事/怎么回事。遇到极其反常、令人震惊的突发状况时，带着惊骇或愤怒脱口而出的质问。大脑瞬间空白后的强烈反应。",
    "example_jp": "真夜中にガラスの割れる激しい音が響き、「何事だ！」と彼はベッドから跳ね起きた。",
    "example_cn": "半夜突然传来剧烈的玻璃碎裂声，他大喊一声“怎么回事！”猛地从床上弹了起来。"
  },
  {
    "id": 547,
    "word": "おに",
    "kanji": "鬼",
    "kana": "おに",
    "pos": "名词",
    "meaning": "鬼/魔鬼/极其严厉的人。没有人类的情感，为了达成目标冷酷无情地折磨他人。让被支配者感到恐惧、腿软的暴君形象。",
    "example_jp": "ミスを絶対に許さないその部長は、社内で「血も涙もない鬼」と恐れられている。",
    "example_cn": "那位绝不允许犯一丁点错的部长，被全公司的人恐惧地私下称为“冷血无情的恶鬼”。"
  },
  {
    "id": 548,
    "word": "むき",
    "kanji": "向き",
    "kana": "むき",
    "pos": "名词",
    "meaning": "适合/朝向。物体放置的方向，或者指某个人的性格和能力刚好与这份工作完美契合，如齿轮般精准咬合的状态。",
    "example_jp": "彼は口下手で人見知りだから、営業よりも裏方で黙々と作業する向きだ。",
    "example_cn": "他不善言辞又极其认生，比起跑业务，他显然更适合在幕后一声不吭地搞开发。"
  },
  {
    "id": 549,
    "word": "ねたましい",
    "kanji": "妬ましい",
    "kana": "ねたましい",
    "pos": "い形容词",
    "meaning": "嫉妒的/眼红的。看到别人毫不费力就得到了自己梦寐以求的东西，内心像被毒蛇啃咬一样扭曲、酸楚，充满恶意的羡慕。",
    "example_jp": "何の苦労もなく親のコネで出世していく同期が、腹立たしいほど妬ましい。",
    "example_cn": "看着那个没吃半点苦全靠拼爹就步步高升的同期，我气得牙根痒痒，嫉妒得发狂。"
  },
  {
    "id": 550,
    "word": "よみあげる",
    "kanji": "読み上げる",
    "kana": "よみあげる",
    "pos": "他动词",
    "meaning": "朗读/宣读。在正式场合，当着众人的面，用清晰且没有感情的声音大声念出文件或名单。宣判命运般不容反驳的肃穆感。",
    "example_jp": "裁判官は冷酷な声で、被告人に下された重い判決文を淡々と読み上げた。",
    "example_cn": "法官用冷酷的声音，面无表情地向被告当庭宣读了极其沉重的判决书。"
  },
  {
    "id": 551,
    "word": "あんど",
    "kanji": "安堵",
    "kana": "あんど",
    "pos": "名词/自动词",
    "meaning": "放心/如释重负。一直悬着的心终于落地，从极度的焦虑或恐慌中解脱出来。伴随着长舒一口气、肩膀垮下来、浑身脱力的松弛感。",
    "example_jp": "無事に手術が終わったと聞き、家族は胸をなでおろして安堵した。",
    "example_cn": "听到手术顺利结束的消息，家属们长舒了一口气，彻底如释重负地瘫坐在椅子上。"
  },
  {
    "id": 552,
    "word": "なきおとし",
    "kanji": "泣き落し",
    "kana": "なきおとし",
    "pos": "名词",
    "meaning": "眼泪攻势/哭求。用眼泪作为武器，博取对方的同情或软化对方的态度，从而达到自己的目的。带着强烈的目的性或走投无路的死缠烂打。",
    "example_jp": "彼女は嘘泣きによる泣き落しで、高価なバッグを無理やり買わせようとした。",
    "example_cn": "她企图挤出几滴眼泪来软磨硬泡，逼着我给她买那个昂贵的包。"
  },
  {
    "id": 553,
    "word": "ひきずる",
    "kanji": "引きずる",
    "kana": "ひきずる",
    "pos": "他动词",
    "meaning": "拖拽/对…恋恋不舍。物理上在地上拖着沉重的东西走；心理上指被过去的失败或失恋死死绊住，无法走向未来。脚步沉重、目光向下的颓丧状态。",
    "example_jp": "失恋の痛みを未だに引きずり、彼は俯いたまま重い足取りで歩いている。",
    "example_cn": "依然深陷失恋的痛苦中无法自拔，他深深地低着头，拖着沉重的步子往前挪。"
  },
  {
    "id": 554,
    "word": "ひけめ",
    "kanji": "引け目",
    "kana": "ひけめ",
    "pos": "名词",
    "meaning": "自卑感/理亏。觉得自己比别人差、或者因为犯错而在对方面前抬不起头。一种畏手畏脚、不敢直视对方眼睛的心理畏缩状态。",
    "example_jp": "優秀な兄と常に比較され、彼は強い引け目を感じてうつむいていた。",
    "example_cn": "总是被拿来和极其优秀的哥哥做比较，他心里感到极度的自卑，深深地低下了头。"
  },
  {
    "id": 555,
    "word": "こめる",
    "kanji": "込める",
    "kana": "こめる",
    "pos": "他动词",
    "meaning": "装入/倾注。把子弹压进枪膛；或是把强烈的感情、祈祷或力量全部灌注到一个具体的动作或物品中。带着一种毫无保留、孤注一掷的沉重动作感。",
    "example_jp": "亡き友への祈りを込め、彼女は震える手で白い花を祭壇に置いた。",
    "example_cn": "将对亡友的祈祷尽数倾注其中，她用颤抖的双手将白花摆放在了祭坛上。"
  },
  {
    "id": 556,
    "word": "たすけ",
    "kanji": "助け",
    "kana": "たすけ",
    "pos": "名词",
    "meaning": "帮助/救助。在溺水、困境或绝望的泥潭中，别人伸出的一只手或扔下的一根绳子。带着一种紧紧抓住、如同救命稻草般的迫切感。",
    "example_jp": "借金で首が回らない彼は、プライドを捨てて友人に助けを求めた。",
    "example_cn": "被债务压得根本喘不过气来的他，彻底抛弃了自尊，低声下气地向朋友求助。"
  },
  {
    "id": 557,
    "word": "やつあたり",
    "kanji": "八つ当たり",
    "kana": "やつあたり",
    "pos": "名词/自动词",
    "meaning": "迁怒/拿别人撒气。自己在别处受了气，却把无名火撒在完全无关的无辜者或物品上。失去理智、像疯狗一样乱咬的暴躁状态。",
    "example_jp": "上司に怒られた腹いせに、部下に理不尽な八つ当たりをしてしまった。",
    "example_cn": "因为挨了上司的臭骂心里憋火，就把满腔怒火极其无理地发泄在了下属身上。"
  },
  {
    "id": 558,
    "word": "ひとりみ",
    "kanji": "独り身",
    "kana": "ひとりみ",
    "pos": "名词",
    "meaning": "单身/独身。没有伴侣，独自生活的人。当生病或夜深人静时，一个人面对空荡荡的房间，常会涌起一股无法言说的刺骨孤独感。",
    "example_jp": "風邪で寝込んだ夜、独り身の孤独感がヒンヤリと胸に染み込んできた。",
    "example_cn": "发高烧卧床不起的夜晚，单身一人的孤独感冰冷地浸透了我的胸腔。"
  },
  {
    "id": 559,
    "word": "ひきおこす",
    "kanji": "引き起こす",
    "kana": "ひきおこす",
    "pos": "他动词",
    "meaning": "拉起/引发。物理上把倒下的人拉起来；或指某个细小的动作如导火索般，瞬间引爆了一场巨大的灾难或事件。带有强烈的因果链条破坏力。",
    "example_jp": "彼の不注意な一言が、チーム内に修復不可能な亀裂を引き起こした。",
    "example_cn": "他那极其不走心的一句话，在团队内部引发了彻底无法修复的严重裂痕。"
  },
  {
    "id": 560,
    "word": "いたって",
    "kanji": "至って",
    "kana": "いたって",
    "pos": "副词",
    "meaning": "极其/非常。虽然程度超过了寻常，但在语气上反而带着一种平静、客观甚至理所当然的陈述感。静水流深般的极致状态。",
    "example_jp": "手術室に向かうというのに、彼の表情は至って冷静で少しも動じていない。",
    "example_cn": "明明马上都要被推进手术室了，他的表情却极其冷静，没有一丝一毫的动摇。"
  },
  {
    "id": 561,
    "word": "つぎめ",
    "kanji": "継ぎ目",
    "kana": "つぎめ",
    "pos": "名词",
    "meaning": "接缝/接口。两块材料拼接在一起的缝隙。不仅是视觉上的断层，也常常是物理上的薄弱环节，触摸时能感受到明显的咯噔感。",
    "example_jp": "電車がレールの継ぎ目を越える度、ガタンという重い振動が体に伝わる。",
    "example_cn": "每当电车轧过铁轨的接缝处，都会有一阵沉闷的“哐当”震动感传遍全身。"
  },
  {
    "id": 562,
    "word": "たてじま",
    "kanji": "縦じま",
    "kana": "たてじま",
    "pos": "名词",
    "meaning": "竖条纹。垂直向下排列的纹理图案。在视觉上能产生拉长身型的效果，常与正装、棒球服或囚服的刻板印象联系在一起。",
    "example_jp": "彼は少しでもスリムに見せようと、縦じまのスーツを無理して着込んでいる。",
    "example_cn": "为了让自己看起来哪怕瘦一点点，他深吸一口气，硬把自己塞进了一套竖条纹西装里。"
  },
  {
    "id": 563,
    "word": "つけくわえる",
    "kanji": "付け加える",
    "kana": "つけくわえる",
    "pos": "他动词",
    "meaning": "补充/附加。正事说完后，又急急忙忙在后面添上一句。常带有一种事后找补、急于辩解或生怕对方误会的迫切感。",
    "example_jp": "「悪気はなかった」と、彼は気まずそうに言い訳を付け加えた。",
    "example_cn": "他满脸尴尬地赶紧在后面补充了一句辩解：“我真不是故意的。”"
  },
  {
    "id": 564,
    "word": "おもいつめる",
    "kanji": "思い詰める",
    "kana": "おもいつめる",
    "pos": "自动词",
    "meaning": "钻牛角尖/苦思冥想。大脑死死卡在一个问题上出不来，越想越绝望。眉头紧锁、脸色苍白、仿佛随时会被心理压力压垮的窒息状态。",
    "example_jp": "借金の返済に悩み、彼は青白い顔でベッドの端に座り、深く思い詰めていた。",
    "example_cn": "为偿还债务愁得焦头烂额，他脸色苍白地坐在床沿，陷入了死胡同般的绝望苦思。"
  },
  {
    "id": 565,
    "word": "なさけない",
    "kanji": "情けない",
    "kana": "なさけない",
    "pos": "い形容词",
    "meaning": "可悲的/窝囊的。对没出息的自己或他人感到极度失望，甚至到了心灰意冷的地步。肩膀耷拉下来、长声叹气、深感丢脸的情绪低谷。",
    "example_jp": "簡単な漢字すら書けず、自分の無学さに呆れて情けない気持ちになった。",
    "example_cn": "连这么简单的汉字都不会写，我对自己的不学无术感到震惊，觉得自己真是窝囊透顶。"
  },
  {
    "id": 566,
    "word": "ねかせる",
    "kanji": "寝かせる",
    "kana": "ねかせる",
    "pos": "他动词",
    "meaning": "哄睡/闲置。把哭闹的孩子放平哄睡；或把资金、商品压在手里暂时不用以等待升值。一种需要耐心的平息、静置动作。",
    "example_jp": "ぐずる赤ん坊をようやく布団に寝かせ、彼女は大きく息を吐き出した。",
    "example_cn": "终于把哭闹不止的婴儿哄睡在被窝里，她仿佛脱力般长舒了一口大气。"
  },
  {
    "id": 567,
    "word": "そだち",
    "kanji": "育ち",
    "kana": "そだち",
    "pos": "名词",
    "meaning": "教养/成长环境。人从小生长的环境，深深刻在骨子里，通过吃饭、说话等无意识的举手投足散发出来的气质或习惯。",
    "example_jp": "食事中の美しい所作の端々に、彼女の育ちの良さが滲み出ている。",
    "example_cn": "在她用餐时每一个优雅的举手投足间，都自然地渗透出她从小极好的教养。"
  },
  {
    "id": 568,
    "word": "かなう",
    "kanji": "叶う",
    "kana": "かなう",
    "pos": "自动词",
    "meaning": "实现/如愿以偿。深藏在心底、长久以来的强烈愿望终于变成了现实。伴随着眼泪、狂喜以及长年重担终于卸下的感情爆发。",
    "example_jp": "十年来の夢が叶い、彼は合格通知を握りしめてその場に泣き崩れた。",
    "example_cn": "十年的梦想终于成真，他死死攥着录取通知书，当场激动得大哭着瘫倒在地。"
  },
  {
    "id": 569,
    "word": "やく",
    "kanji": "妬く",
    "kana": "やく",
    "pos": "他动词",
    "meaning": "嫉妒/吃醋。看到喜欢的人对别人好，心里像打翻了醋坛子一样泛起强烈的酸意和占有欲。咬着嘴唇、投去不甘且带刺的目光。",
    "example_jp": "彼女が他の男に微笑みかけるだけで、胸の奥がチクチクと妬いてしまう。",
    "example_cn": "光是看她对别的男人展露笑容，我的心底就像被针扎一样疯狂吃醋嫉妒。"
  },
  {
    "id": 570,
    "word": "きょうじる",
    "kanji": "興じる",
    "kana": "きょうじる",
    "pos": "自动词",
    "meaning": "兴致勃勃/沉浸其中。完全抛开烦恼或责任，一门心思扎进娱乐活动里。眼睛发亮、忘乎所以，连时间的流逝都注意不到的狂欢状态。",
    "example_jp": "試験前夜だというのに、彼らは朝までトランプゲームに興じていた。",
    "example_cn": "明明是考试前一天晚上，他们却浑然忘我地打扑克一直玩到了天亮。"
  },
  {
    "id": 571,
    "word": "かする",
    "kanji": "掠る",
    "kana": "かする",
    "pos": "自动词/他动词",
    "meaning": "擦过/掠过。高速运动的物体极度危险地贴着表面飞过，只留下一道极浅的擦痕。惊出一身冷汗、心脏漏跳一拍的惊险瞬间。",
    "example_jp": "飛んできたボールが顔の横をかすり、冷や汗がどっと吹き出した。",
    "example_cn": "飞过来的棒球擦着我的脸颊呼啸而过，惊得我瞬间冒出了一身冷汗。"
  },
  {
    "id": 572,
    "word": "いまわしい",
    "kanji": "忌まわしい",
    "kana": "いまわしい",
    "pos": "い形容词",
    "meaning": "可恶的/令人毛骨悚然的。勾起极其糟糕的记忆或带着不祥的气息。让人一想起来就生理不适、浑身起鸡皮疙瘩，恨不得立刻从脑海中抹去的厌恶感。",
    "example_jp": "その古びた洋館は、過去の忌まわしい殺人事件の記憶を今も留めている。",
    "example_cn": "那栋破旧的洋房，至今仍残留着过去那起极其骇人听闻的杀人案的记忆。"
  },
  {
    "id": 573,
    "word": "くいとめる",
    "kanji": "食い止める",
    "kana": "くいとめる",
    "pos": "他动词",
    "meaning": "阻止/遏制。面对洪水、疾病或敌军这种势头凶猛的负面力量，咬紧牙关、筑起防线死死挡住。一种在千钧一发之际扛住巨大压力的对抗动作。",
    "example_jp": "土嚢を必死に積み上げ、濁流が家へ流れ込むのをギリギリで食い止めた。",
    "example_cn": "拼死堆起沙袋，在千钧一发之际死死挡住了冲向家里的浑浊泥石流。"
  },
  {
    "id": 574,
    "word": "はなればなれ",
    "kanji": "離れ離れ",
    "kana": "はなればなれ",
    "pos": "名词",
    "meaning": "分散/骨肉分离。原本亲密无间的人，因为不可抗力被迫散落到不同的地方。伴随着频频回首、视线被拉长的残酷割裂感与绵长的思念。",
    "example_jp": "戦争で家族と離れ離れになり、彼は一人で異国の地を彷徨った。",
    "example_cn": "因为战争和家人被迫骨肉分离，他只能独自一人在异国他乡流浪。"
  },
  {
    "id": 575,
    "word": "しば",
    "kanji": "芝",
    "kana": "しば",
    "pos": "名词",
    "meaning": "草坪/草地。人工铺设的短草地。踩上去有柔软的弹力，空气中混合着割草机的机油味和青草被碾压后特有的植物汁液气味。",
    "example_jp": "雨上がりの競馬場で、馬たちが泥を跳ね上げながら青々とした芝を駆け抜けた。",
    "example_cn": "雨后的赛马场上，马匹们扬起阵阵泥水，在绿油油的草坪上飞驰而过。"
  },
  {
    "id": 576,
    "word": "まんべんなく",
    "kanji": "満遍なく",
    "kana": "まんべんなく",
    "pos": "副词",
    "meaning": "均匀地/毫无遗漏地。像抹黄油一样，角角落落都不放过地将某种动作覆盖全局。一丝不苟、没有偏颇的机械式扩散感。",
    "example_jp": "肉に下味が染み込むよう、塩と胡椒を両面に満遍なく擦り込んだ。",
    "example_cn": "为了让肉彻底入味，我将盐和胡椒极其均匀且毫无遗漏地揉搓进肉的两面。"
  },
  {
    "id": 577,
    "word": "しずめる",
    "kanji": "鎮める",
    "kana": "しずめる",
    "pos": "他动词",
    "meaning": "镇压/平息。用强大的力量或意志，把翻江倒海的怒火、剧痛或暴动强行按压下去。呼吸粗重，肌肉紧绷的自我克制或外部压制。",
    "example_jp": "彼は震える手を強く握りしめ、胸の奥から湧き上がる怒りを必死に鎮めた。",
    "example_cn": "他死死攥紧发抖的双手，拼命压抑住从心底不断上涌的狂躁怒火。"
  },
  {
    "id": 578,
    "word": "のぞましい",
    "kanji": "望ましい",
    "kana": "のぞましい",
    "pos": "い形容词",
    "meaning": "理想的/最好是。虽然不是必须强制的死规定，但说出这话时往往带有上位者的期望和软性的压力。理智且带着客套面具的期待状态。",
    "example_jp": "明日の会議には、全員がスーツ姿で出席することが望ましい。",
    "example_cn": "明天的会议，最好所有人都能规规矩矩地穿着正装出席。"
  },
  {
    "id": 579,
    "word": "かさ",
    "kanji": "嵩",
    "kana": "かさ",
    "pos": "名词",
    "meaning": "体积/分量。东西占据的空间。尤其用来形容那些明明不重，却极其蓬松庞大、塞也塞不进去、让人感到心烦意乱的物理膨胀感。",
    "example_jp": "冬服は嵩張るので、小さなスーツケースに押し込むのに酷く苦労した。",
    "example_cn": "冬天的衣服体积实在太大了，为了把它们硬塞进小行李箱里，把我累得够呛。"
  },
  {
    "id": 580,
    "word": "はりがみ",
    "kanji": "貼り紙",
    "kana": "はりがみ",
    "pos": "名词",
    "meaning": "传单/告示贴。用胶水或胶带糊在墙上的一张纸。边缘往往有些卷曲，在风中微微拍打着墙面，透着一种廉价而急切的信息传递感。",
    "example_jp": "電柱には「猫を探しています」と書かれた、雨で滲んだ貼り紙があった。",
    "example_cn": "电线杆上贴着一张写着“寻猫启事”的告示纸，字迹已经被雨水完全晕染模糊了。"
  },
  {
    "id": 581,
    "word": "くわだてる",
    "kanji": "企てる",
    "kana": "くわだてる",
    "pos": "他动词",
    "meaning": "企图/密谋。在暗地里绞尽脑汁地策划一个危险的、或是庞大不轨的行动。压低声音、眼神闪烁，散发着阴谋与算计的气息。",
    "example_jp": "彼らは警備の目を盗み、深夜の美術館から名画を盗み出すことを企てた。",
    "example_cn": "他们试图避开安保的视线，密谋在深夜从美术馆里偷走那幅名画。"
  },
  {
    "id": 582,
    "word": "おしよせる",
    "kanji": "押し寄せる",
    "kana": "おしよせる",
    "pos": "自动词",
    "meaning": "涌来/蜂拥而至。像海啸一样，人群、巨浪或情绪以压倒性的气势黑压压地逼近。让人感到窒息、无处可逃的恐怖压迫感。",
    "example_jp": "セールが始まると同時に、怒涛のような客の波が店内へ押し寄せた。",
    "example_cn": "促销刚一宣告开始，顾客便犹如汹涌的波涛般疯狂涌入了店内。"
  },
  {
    "id": 583,
    "word": "さっする",
    "kanji": "察する",
    "kana": "さっする",
    "pos": "他动词",
    "meaning": "觉察/体谅。不用对方开口，光凭一个眼神或空气中的僵硬感，就瞬间读懂了背后的真相或苦衷。不动声色、心领神会的敏锐动作。",
    "example_jp": "彼女の沈んだ顔色から事態の深刻さを察し、私は何も聞かずに席を外した。",
    "example_cn": "从她阴郁的脸色中瞬间觉察到了事态的严重性，我什么也没问，识趣地默默退了出去。"
  },
  {
    "id": 584,
    "word": "おのずと",
    "kanji": "自ずと",
    "kana": "おのずと",
    "pos": "副词",
    "meaning": "自然而然地。不需要人为强行干预，随着时间推移或条件成熟，结果如同水往低处流一般 inevitablly 显现。带有一种豁然开朗的规律感。",
    "example_jp": "毎日地道に練習を重ねていけば、結果は自ずとついてくるものだ。",
    "example_cn": "只要每天一步一个脚印地坚持练习，好的结果自然而然就会水到渠成。"
  },
  {
    "id": 585,
    "word": "おいこむ",
    "kanji": "老い込む",
    "kana": "おいこむ",
    "pos": "自动词",
    "meaning": "迅速衰老/老态龙钟。因为遭受巨大的精神打击或大病一场，原本的精气神被瞬间抽干。背部佝偻、眼神浑浊，生命力急剧流失的枯萎状态。",
    "example_jp": "伴侶を亡くしてからの彼は、たった一年ですっかり老い込んでしまった。",
    "example_cn": "自从失去了老伴，短短一年时间，他就以肉眼可见的速度彻底苍老颓废了。"
  },
  {
    "id": 586,
    "word": "ふくみ",
    "kanji": "含み",
    "kana": "ふくみ",
    "pos": "名词",
    "meaning": "言外之意/话里有话。表面上一团和气，字里行间却藏着锋芒、威胁或暗示。像嘴里含着刀片一样的诡异笑容和意味深长的停顿。",
    "example_jp": "彼の言葉には、こちらの弱みを握っているかのような嫌な含みがあった。",
    "example_cn": "他的话里带着一种极其让人不舒服的暗示，仿佛死死捏住了我们的把柄似的。"
  },
  {
    "id": 587,
    "word": "おおかた",
    "kanji": "大方",
    "kana": "おおかた",
    "pos": "名词/副词",
    "meaning": "大概/大部分。撇开微小的变数，用一种看透全局、胜券在握的旁观者语气做出推断。一切尽在掌握的预判感。",
    "example_jp": "大方の予想通り、汚職疑惑のあったその政治家はあっさりと辞任した。",
    "example_cn": "果然不出大众所料，那个深陷贪腐丑闻的政客极其干脆地辞职走人了。"
  },
  {
    "id": 588,
    "word": "なきべそ",
    "kanji": "泣きべそ",
    "kana": "なきべそ",
    "pos": "名词",
    "meaning": "要哭出来的样子/瘪嘴。眼泪还在眼眶里打转，鼻子一抽一抽、嘴角往下撇的委屈模样。小孩子特有的、防线即将崩溃的前奏。",
    "example_jp": "お気に入りのおもちゃを壊され、小さな弟は今にも泣きべそをかきそうな顔をした。",
    "example_cn": "心爱的玩具被弄坏了，小弟弟瘪着嘴，露出一副随时都要放声大哭的委屈表情。"
  },
  {
    "id": 589,
    "word": "めど",
    "kanji": "目処",
    "kana": "めど",
    "pos": "名词",
    "meaning": "头绪/目标/前景。在漫长黑暗的摸索中，终于看到了终点的那一丝微光。从焦头烂额的混沌中终于理清思路，有了干劲的转折点。",
    "example_jp": "徹夜の作業が続き、ようやく明日の朝にはシステム復旧の目処が立った。",
    "example_cn": "熬了个通宵连续作业，终于看到了明早能把系统恢复的明确希望。"
  },
  {
    "id": 590,
    "word": "かい",
    "kanji": "甲斐",
    "kana": "かい",
    "pos": "名词",
    "meaning": "价值/回报。付出了巨大的汗水、时间或金钱后，得到了与之匹配的成果。擦去额头的汗水，内心涌起的极大满足感与自我肯定。",
    "example_jp": "毎日看病した甲斐もなく、飼い犬は私の腕の中で静かに息を引き取った。",
    "example_cn": "每天没日没夜照顾的努力全白费了，爱犬依然在我的臂弯里悄无声息地咽了气。"
  },
  {
    "id": 591,
    "word": "うず",
    "kanji": "渦",
    "kana": "うず",
    "pos": "名词",
    "meaning": "漩涡。水流急速旋转形成的坑洞；或指将人卷入其中、无法自拔的狂热、混乱或丑闻的中心。天旋地转、失去重心的绝望失控感。",
    "example_jp": "彼は自らの軽率な発言のせいで、激しい非難の渦に巻き込まれていった。",
    "example_cn": "由于自己极其草率的发言，他被死死卷入了舆论激烈声讨的漩涡之中。"
  },
  {
    "id": 592,
    "word": "みれんがましい",
    "kanji": "未練がましい",
    "kana": "みれんがましい",
    "pos": "い形容词",
    "meaning": "恋恋不舍的/死缠烂打的。明明已经彻底失去，却像一滩烂泥一样粘在过去不肯放手。极其窝囊、让人觉得可悲又讨厌的黏糊糊的情感纠缠。",
    "example_jp": "振られたのに、いつまでも元カノのSNSをチェックするなんて未練がましい。",
    "example_cn": "都被甩了，还成天像个怨妇一样去翻看前女友的社交动态，真是窝囊又死缠烂打。"
  },
  {
    "id": 593,
    "word": "つりかわ",
    "kanji": "吊り革",
    "kana": "つりかわ",
    "pos": "名词",
    "meaning": "车厢吊环/拉手。电车或公交车上悬挂的把手。被无数人抓过，伴随着车厢的摇晃、人群的汗味和上班族精疲力竭的粗重呼吸。",
    "example_jp": "満員電車の中で、疲れたサラリーマンが吊り革にすがりつくように立っている。",
    "example_cn": "在挤得水泄不通的电车里，疲惫不堪的上班族仿佛抓住救命稻草般死死拽着车厢吊环站立着。"
  },
  {
    "id": 594,
    "word": "たかだか",
    "kanji": "高々",
    "kana": "たかだか",
    "pos": "副词",
    "meaning": "充其量/顶多。带着极其轻蔑、嗤之以鼻的口吻，把对方拼命吹嘘的数字或成绩贬低到不值一提的地步。高高在上的嘲弄感。",
    "example_jp": "偉そうに語っているが、彼の経験なんて高々三年程度のものだ。",
    "example_cn": "别看他现在说得头头是道，他的那点工作经验充其量顶多也就三年罢了。"
  },
  {
    "id": 595,
    "word": "ほころびる",
    "kanji": "綻びる",
    "kana": "ほころびる",
    "pos": "自动词",
    "meaning": "绽线/绽放/露出笑脸。缝好的线头崩开；花骨朵微微裂开；或是原本紧绷严肃的脸突然像冰雪消融般露出了笑容。从内部打破紧张状态的柔软变化。",
    "example_jp": "孫の無邪気な笑顔を見て、厳格な祖父の顔がふっと綻びた。",
    "example_cn": "看到孙子天真无邪的笑容，一向极其严厉的爷爷，脸上也不禁泛起了柔和的笑意。"
  },
  {
    "id": 596,
    "word": "たちはだかる",
    "kanji": "立ちはだかる",
    "kana": "たちはだかる",
    "pos": "自动词",
    "meaning": "挡住去路/横亘。巨大的身躯或难以逾越的障碍像一堵铁墙一样死死挡在正前方。抬头仰望时，感受到令人绝望的压迫力与威压感。",
    "example_jp": "優勝を目前にして、絶対王者という巨大な壁が彼の前に立ちはだかった。",
    "example_cn": "眼看就要夺冠，那位被称为绝对王者的巨大屏障，却犹如高墙般死死挡在了他的面前。"
  },
  {
    "id": 597,
    "word": "こりる",
    "kanji": "懲りる",
    "kana": "こりる",
    "pos": "自动词",
    "meaning": "吃到苦头/长记性。因为摔得太惨、亏得太狠，导致心理留下阴影，连碰都不想再碰。像被火烫过的狗一样夹着尾巴的畏缩心理。",
    "example_jp": "株で大損してすっかり懲りたのか、彼は二度と投資の話をしなくなった。",
    "example_cn": "大概是在股市里赔了个底朝天彻底吃到了教训，他再也不敢提半句投资的事了。"
  },
  {
    "id": 598,
    "word": "なまみ",
    "kanji": "生身",
    "kana": "なまみ",
    "pos": "名词",
    "meaning": "活生生的肉体/血肉之躯。强调人类身体的脆弱，会流血、会感到剧痛。在冰冷的机械或致命的武器面前暴露无遗的极其危险的存在状态。",
    "example_jp": "彼は防弾チョッキも着ず、生身の体で銃撃戦の最前線へ飛び出していった。",
    "example_cn": "他连防弹衣都没穿，硬是以这血肉之躯，直直冲向了枪战的最前线。"
  },
  {
    "id": 599,
    "word": "あまくち",
    "kanji": "甘口",
    "kana": "あまくち",
    "pos": "名词",
    "meaning": "甜味/甜言蜜语。食物不辣偏甜；或者满嘴涂了蜜一样，为了讨好别人而说出的廉价奉承话。带着黏腻、虚伪和缺乏骨气的讨好姿态。",
    "example_jp": "彼はお世辞ばかりの甘口な言葉で、上司に取り入ろうと必死だった。",
    "example_cn": "他满嘴都是阿谀奉承的甜言蜜语，为了讨好上司简直拼了老命。"
  },
  {
    "id": 600,
    "word": "おいはらう",
    "kanji": "追い払う",
    "kana": "おいはらう",
    "pos": "他动词",
    "meaning": "赶走/驱逐。像赶走讨厌的苍蝇一样，用力挥舞双手或大声怒吼，强行将让人心烦的麻烦或东西轰走。充满嫌恶和极度不耐烦的暴力动作。",
    "example_jp": "店主はほうきを振り回し、ゴミ箱をあさる野良犬を怒鳴って追い払った。",
    "example_cn": "店老板挥舞着扫帚大声怒吼，将翻找垃圾桶的野狗粗暴地赶了出去。"
  },
  {
    "id": 601,
    "word": "もまれる",
    "kanji": "揉まれる",
    "kana": "もまれる",
    "pos": "動詞",
    "meaning": "受锻炼、受折磨。被周围的人或环境反复挤压、摩擦，引申为在艰难的环境中历练成长。在推搡的人群中东倒西歪，或在职场中被上司严厉训斥。",
    "example_jp": "満員電車で散々揉まれて、会社に着く頃にはもうヘトヘトだった。",
    "example_cn": "在满员电车里被挤得东倒西歪，到了公司的时候已经精疲力尽了。"
  },
  {
    "id": 602,
    "word": "いける",
    "kanji": "生ける",
    "kana": "いける",
    "pos": "動詞",
    "meaning": "插（花）、使活下去。将剪下的花草巧妙地插入花瓶使其保留生机。修剪枝叶，小心翼翼地将鲜花插入装满水的长颈瓷瓶中。",
    "example_jp": "祖母は庭で摘んだばかりの椿を、玄関の古い花瓶にすっと生けた。",
    "example_cn": "奶奶把刚在院子里摘下的山茶花，利落地插进了玄关的旧花瓶里。"
  },
  {
    "id": 603,
    "word": "ふり",
    "kanji": "振り",
    "kana": "ふり",
    "pos": "名詞",
    "meaning": "假装、装作。内心不是那样，却故意做出那样的动作或神态。为了掩饰尴尬或避免麻烦，强作镇定或故意扭头不看。",
    "example_jp": "彼は私と目が合うと、慌ててスマホをいじって気づかない振りを図った。",
    "example_cn": "他一和我视线对上，就慌忙滑动手机屏幕，装作没注意到的样子。"
  },
  {
    "id": 604,
    "word": "ふるわせる",
    "kanji": "震わせる",
    "kana": "ふるわせる",
    "pos": "動詞",
    "meaning": "使…颤动、发抖。因极度的寒冷、恐惧、愤怒或感动，导致身体某部位不受控制地细微抖动。紧紧咬着下唇，肩膀微抖。",
    "example_jp": "彼女は悔しさのあまり、唇を小刻みに震わせてうつむいた。",
    "example_cn": "她懊悔到了极点，嘴唇微微颤抖着，深深低下了头。"
  },
  {
    "id": 605,
    "word": "まえもって",
    "kanji": "前もって",
    "kana": "まえもって",
    "pos": "副詞",
    "meaning": "事先、预先。在事情真正发生或期限到来之前，提前做好准备或打好招呼。拿着记事本提前确认日程，或拨打电话告知对方。",
    "example_jp": "前もって連絡してくれれば、こんなに慌てて部屋を片付けずに済んだのに！",
    "example_cn": "要是你事先联系我，我就不用这么慌慌张张地收拾房间了啊！"
  },
  {
    "id": 606,
    "word": "かける",
    "kanji": "賭ける",
    "kana": "かける",
    "pos": "動詞",
    "meaning": "赌上、拼上。为了获得某个结果，不惜押上金钱或人生中最重要的东西。眼神坚毅，孤注一掷地把筹码全推出去拼死一搏。",
    "example_jp": "彼は自分の全財産をこの怪しげな投資話に賭けて、見事に散った。",
    "example_cn": "他把自己的全部财产都押在这个可疑的投资项目上，结果输得倾家荡产。"
  },
  {
    "id": 607,
    "word": "はなびら",
    "kanji": "花びら",
    "kana": "はなびら",
    "pos": "名詞",
    "meaning": "花瓣。构成花朵的一片片柔软、单薄的部分。轻柔脆弱，随风飘落或静静散落在水面上。",
    "example_jp": "桜の花びらが、ハラハラと肩に落ちてきて思わず立ち止まった。",
    "example_cn": "樱花花瓣打着旋儿轻轻飘落在肩膀上，让我不由得停下了脚步。"
  },
  {
    "id": 608,
    "word": "せんだって",
    "kanji": "先だって",
    "kana": "せんだって",
    "pos": "副詞",
    "meaning": "前几天、上次。离现在不算太远的一段时间前。在街角偶遇熟人，微笑着回忆起前几天刚发生过的事。",
    "example_jp": "先だってはお忙しい中、わざわざお見舞いに来ていただき恐縮です。",
    "example_cn": "前几天在您百忙之中，还劳烦您特意来探望，真是过意不去。"
  },
  {
    "id": 609,
    "word": "すくなからず",
    "kanji": "少なからず",
    "kana": "すくなからず",
    "pos": "副詞",
    "meaning": "颇、有不少。表示程度相当深或数量可观。虽然嘴上不说，但内心受到了相当大的冲击或影响，眉头微皱。",
    "example_jp": "彼の突然の辞表に、部署のメンバーは少なからず動揺を隠せなかった。",
    "example_cn": "面对他突然递交的辞呈，部门里的同事们都难掩心中相当大的动摇。"
  },
  {
    "id": 610,
    "word": "ひきいる",
    "kanji": "率いる",
    "kana": "ひきいる",
    "pos": "動詞",
    "meaning": "率领、带领。走在众人前面，作为首领指挥并统率一个群体。穿着笔挺西装，站在队伍最前方发号施令，背后跟着一群部下。",
    "example_jp": "新しいプロジェクトチームを率いることになり、胃が痛い毎日だ。",
    "example_cn": "被任命率领新的项目团队，每天都紧张得胃疼。"
  },
  {
    "id": 611,
    "word": "うちあける",
    "kanji": "打ち明ける",
    "kana": "うちあける",
    "pos": "動詞",
    "meaning": "坦白、说出真心话。把一直封锁在内心深处的秘密，像打开盖子一样全盘托出。低着头犹豫良久，终于深吸一口气对信任的人倾诉。",
    "example_jp": "ずっと隠していた借金のことを妻に打ち明けたら、平手打ちされた。",
    "example_cn": "把一直隐瞒的债务问题向妻子全盘托出后，被她狠狠扇了一巴掌。"
  },
  {
    "id": 612,
    "word": "あにき",
    "kanji": "兄貴",
    "kana": "あにき",
    "pos": "名詞",
    "meaning": "哥哥、老大哥。亲昵或敬意地称呼亲哥哥，或社会上值得依靠的前辈。一个身材魁梧，拍着你肩膀说“包在我身上”的男人。",
    "example_jp": "うちの兄貴、昔は不良だったのに今じゃすっかり子煩悩なパパだよ。",
    "example_cn": "我那个老哥，以前是个不良少年，现在却完全变成个爱围着孩子转的傻爸爸了。"
  },
  {
    "id": 613,
    "word": "つりがね",
    "kanji": "釣鐘",
    "kana": "つりがね",
    "pos": "名詞",
    "meaning": "吊钟（尤指寺庙的大钟）。用粗木柱撞击会发出低沉深远声响的金属大钟。青铜表面布满岁月痕迹，伴随着余音微微晃动。",
    "example_jp": "大晦日の夜、遠くから重々しい釣鐘の音が響いてきて年が明けた。",
    "example_cn": "除夕之夜，远处传来沉甸甸的寺庙敲钟声，宣告了新的一年的到来。"
  },
  {
    "id": 614,
    "word": "あいくるしい",
    "kanji": "愛くるしい",
    "kana": "あいくるしい",
    "pos": "形容詞",
    "meaning": "极其可爱、招人疼爱。可爱到了让人忍不住想去抱一抱的程度。圆溜溜的大眼睛闪烁着光芒，跌跌撞撞向你跑来的小生物。",
    "example_jp": "子犬が尻尾をちぎれんばかりに振る姿が愛くるしくて、思わず抱きしめた。",
    "example_cn": "小狗拼命摇着尾巴的样子实在太招人疼了，让我忍不住一把将它抱在怀里。"
  },
  {
    "id": 615,
    "word": "ひたる",
    "kanji": "浸る",
    "kana": "ひたる",
    "pos": "動詞",
    "meaning": "沉浸于、浸泡。身体泡在液体中，引申为精神完全沉溺于某种情绪或境界中无法自拔。闭上眼睛放松全身，嘴角上扬陷入回忆。",
    "example_jp": "優勝の余韻に浸っていたら、次の試合の準備をすっかり忘れていた。",
    "example_cn": "沉浸在夺冠的余韵中无法自拔，把下场比赛的准备工作忘得一干二净。"
  },
  {
    "id": 616,
    "word": "うとうとしい",
    "kanji": "疎々しい",
    "kana": "うとうとしい",
    "pos": "形容詞",
    "meaning": "冷淡的、疏远的。原本亲密的关系产生了距离感，或面对陌生人时客气而冷漠的态度。两人并排坐着不发一言，空气中弥漫着尴尬。",
    "example_jp": "喧嘩した後の夫婦の食卓は、ただ食器の音だけが響いて疎々しかった。",
    "example_cn": "吵架后的夫妻俩坐在餐桌前，只有餐具碰撞的声音回荡着，气氛疏远而冷淡。"
  },
  {
    "id": 617,
    "word": "なえぎ",
    "kanji": "苗木",
    "kana": "なえぎ",
    "pos": "名詞",
    "meaning": "树苗。刚长出来不久，还需要小心呵护的幼苗。带着几片嫩绿的叶子，插在松软的泥土里，在风中轻轻摇曳。",
    "example_jp": "庭の隅に植えた桜の苗木が、強い風に吹かれて今にも折れそうだ。",
    "example_cn": "种在院子角落里的樱花树苗，被强风吹得摇摇晃晃，眼看就要折断了。"
  },
  {
    "id": 618,
    "word": "なげだす",
    "kanji": "投げ出す",
    "kana": "なげだす",
    "pos": "動詞",
    "meaning": "抛弃、半途而废、伸出（双腿）。把手里的东西扔出去，引申为遇到困难就放弃。把笔一摔，或疲惫地瘫坐在椅子上把双腿直直伸前。",
    "example_jp": "徹夜の作業に限界を感じて、彼はパソコンの前に突っ伏してすべてを投げ出した。",
    "example_cn": "熬夜加班到了极限，他一头栽倒在电脑前，把一切都抛在脑后不管了。"
  },
  {
    "id": 619,
    "word": "わく",
    "kanji": "枠",
    "kana": "わく",
    "pos": "名詞",
    "meaning": "框架、界限、名额。物理上的边框，引申为限制人的常识或名额。被四四方方的线条框死在里面挣脱不得，或申请表格上的仅剩空位。",
    "example_jp": "彼女は常識の枠にとらわれない、奇想天外なアイデアを次々と出した。",
    "example_cn": "她丝毫不受常识框架的束缚，接连提出了各种异想天开的点子。"
  },
  {
    "id": 620,
    "word": "〜がたい",
    "kanji": "〜難い",
    "kana": "〜がたい",
    "pos": "補助形容詞",
    "meaning": "难以…、很难…。表示在心理或感情上很难做到某事。因为太震惊而张大嘴巴无法相信，或者眉头紧锁实在无法原谅。",
    "example_jp": "十年来の親友に裏切られたなんて、今でも俄かには信じ難い。",
    "example_cn": "被相交十年的挚友背叛这种事，直到现在我依然很难相信。"
  },
  {
    "id": 621,
    "word": "ひばな",
    "kanji": "火花",
    "kana": "ひばな",
    "pos": "名詞",
    "meaning": "火花。金属碰撞时迸发的细小火星，引申为激烈的冲突。黑暗中飞溅出刺眼的碎光，两人怒目而视，目光交汇处仿佛有电光闪烁。",
    "example_jp": "会議室で、社長と専務が意見の食い違いからバチバチと火花を散らした。",
    "example_cn": "在会议室里，总经理和专务因为意见分歧，激烈交锋擦出了火药味十足的火花。"
  },
  {
    "id": 622,
    "word": "なごり",
    "kanji": "名残",
    "kana": "なごり",
    "pos": "名詞",
    "meaning": "遗迹、余韵、惜别。事物消逝后残留下的痕迹或气氛。聚会散场后空荡荡的房间里留着的微热，或雪停后屋檐上还没融化的冰柱。",
    "example_jp": "誰もいない教室の黒板に書かれた落書きに、文化祭の熱い名残を感じた。",
    "example_cn": "看着空无一人的教室黑板上的涂鸦，感受到了文化祭热潮退去后的余韵。"
  },
  {
    "id": 623,
    "word": "とりたてて",
    "kanji": "取り立てて",
    "kana": "とりたてて",
    "pos": "副詞",
    "meaning": "特意、特别（后接否定）。把某事物单独拎出来强调，连用否定表示“没特别值得一提的”。耸耸肩，双手一摊，找不出什么亮点。",
    "example_jp": "彼の履歴書を見たが、取り立てて目立つような資格や経験はなかった。",
    "example_cn": "看了他的简历，并没有什么特别值得一提的亮眼资格证书或经历。"
  },
  {
    "id": 624,
    "word": "あととり",
    "kanji": "跡取り",
    "kana": "あととり",
    "pos": "名詞",
    "meaning": "继承人。继承家业、财产或地位的人。从小被寄予厚望，背负着家族招牌，穿着笔挺西装跟在长辈身后鞠躬的年轻人。",
    "example_jp": "老舗旅館の跡取り息子は、重圧に耐えかねて都会へ逃げ出してしまった。",
    "example_cn": "老字号旅馆的继承人儿子，承受不住重压，连夜逃到城里去了。"
  },
  {
    "id": 625,
    "word": "わざわい",
    "kanji": "災い",
    "kana": "わざわい",
    "pos": "名詞",
    "meaning": "灾祸、不幸。突如其来的、破坏现有平静生活的可怕事件。乌云盖顶，房屋倒塌，或者因为一句失言惹来无穷无尽的麻烦。",
    "example_jp": "彼の何気ない一言が災いして、チーム全体がとんでもないトラブルに巻き込まれた。",
    "example_cn": "他无心的一句话惹来灾祸，导致整个团队都被卷入了不得了的大麻烦中。"
  },
  {
    "id": 626,
    "word": "ふりつづく",
    "kanji": "降り続く",
    "kana": "ふりつづく",
    "pos": "動詞",
    "meaning": "连绵不断地下（雨/雪）。雨或雪长时间不停地落下。灰暗的天空下，雨水在窗玻璃上蜿蜒流下，让人看着心情也跟着阴郁。",
    "example_jp": "三日三晩降り続く雨のせいで、川の水位が不気味なほど上がっている。",
    "example_cn": "因为三天三夜连绵不断的大雨，河水水位涨得让人心里发毛。"
  },
  {
    "id": 627,
    "word": "まえがき",
    "kanji": "前書き",
    "kana": "まえがき",
    "pos": "名詞",
    "meaning": "前言、序言。写在正文之前，用来介绍背景或引出正题的文字。翻开书本的第一页，最上面孤零零地印着的几段交代写作初衷的话。",
    "example_jp": "この小説は前書きがあまりにも長すぎて、本題に入る前に読む気をなくした。",
    "example_cn": "这本小说的前言长得离谱，还没读到正文就让人失去了阅读的兴致。"
  },
  {
    "id": 628,
    "word": "てわざ",
    "kanji": "手業",
    "kana": "てわざ",
    "pos": "名詞",
    "meaning": "手工、手艺。不用机器，纯靠人的双手完成的技术活。一双布满老茧的手，熟练地编织着竹筐或雕刻着木头，动作精准。",
    "example_jp": "職人の見事な手業によって、ただの木の塊が美しい仏像へと変わっていった。",
    "example_cn": "凭借工匠那精湛的手艺，一块普通的木疙瘩渐渐变成了一尊美丽的佛像。"
  },
  {
    "id": 629,
    "word": "なみ",
    "kanji": "並",
    "kana": "なみ",
    "pos": "名詞",
    "meaning": "普通、一般、同等程度。没有突出之处，随处可见的水平。一长排完全一样的房子，或者一家餐厅里最便宜的基础款盖饭。",
    "example_jp": "彼はプロ野球選手だが、足の速さはごく並で盗塁は期待できない。",
    "example_cn": "他虽然是个职业棒球选手，但跑步速度非常普通，指望不上他去盗垒。"
  },
  {
    "id": 630,
    "word": "なにとぞ",
    "kanji": "何卒",
    "kana": "なにとぞ",
    "pos": "副詞",
    "meaning": "务必、无论如何（恳求）。极度郑重地请求别人时使用，祈求对方一定要答应。深深地弯下腰鞠躬，双手贴在裤缝，额头几乎碰到膝盖。",
    "example_jp": "弊社の厳しい状況をご理解いただき、何卒ご支援を賜りますようお願い申し上げます。",
    "example_cn": "恳请贵方体谅敝司的严峻处境，务必赐予我们援助。"
  },
  {
    "id": 631,
    "word": "あさがた",
    "kanji": "朝方",
    "kana": "あさがた",
    "pos": "名詞",
    "meaning": "清晨、黎明时分。夜幕即将退去，太阳刚升起，天边泛起鱼肚白的时间。空气微凉，四周安静得能听到远处的鸟鸣。",
    "example_jp": "昨夜は一睡もできず、窓の外が白々と明けていく朝方をぼんやり見ていた。",
    "example_cn": "昨晚彻夜未眠，就这么呆呆地看着窗外渐渐泛起白光的清晨。"
  },
  {
    "id": 632,
    "word": "かんがみる",
    "kanji": "鑑みる",
    "kana": "かんがみる",
    "pos": "動詞",
    "meaning": "鉴于、考虑到。将过去的前车之鉴或现在的客观情况放在镜子前对照权衡。手里拿着报告书，皱着眉头深思熟虑后做出慎重决定。",
    "example_jp": "現在の不安定な経済状況に鑑み、新規店舗の出店は一旦白紙に戻された。",
    "example_cn": "鉴于目前不稳定的经济状况，新店开业的计划被暂时取消，一切从头再议。"
  },
  {
    "id": 633,
    "word": "めざましい",
    "kanji": "目覚ましい",
    "kana": "めざましい",
    "pos": "形容詞",
    "meaning": "惊人的、令人刮目相看的。进步程度大到让人仿佛猛然惊醒般感到震撼。数据图表上的折线直线飙升，曾经笨拙的新人突然以一敌百。",
    "example_jp": "彼女の目覚ましい成長ぶりに、最初はバカにしていた先輩たちも言葉を失った。",
    "example_cn": "看着她那令人刮目相看的惊人成长，一开始还瞧不起她的前辈们也哑口无言了。"
  },
  {
    "id": 634,
    "word": "かさねがさね",
    "kanji": "重ね重ね",
    "kana": "かさねがさね",
    "pos": "副詞",
    "meaning": "屡次、再三（道谢或道歉）。对于同一件事，觉得一次表达不够，再次反复叠加地表达。连续地低头鞠躬，语气中充满诚惶诚恐。",
    "example_jp": "私の不注意で多大なご迷惑をおかけし、重ね重ねお詫び申し上げます。",
    "example_cn": "因为我的疏忽大意给您添了这么大的麻烦，再三向您致以最深的歉意。"
  },
  {
    "id": 635,
    "word": "まごころ",
    "kanji": "真心",
    "kana": "まごころ",
    "pos": "名詞",
    "meaning": "真心、诚意。不掺杂任何虚伪，纯粹为了对方着想的一片赤诚之心。亲手熬制一锅热汤端到病人床前，眼神里满是关切。",
    "example_jp": "高価なプレゼントよりも、彼が震える手で書いてくれた手紙に真心を感じて涙が出た。",
    "example_cn": "相比昂贵的礼物，他用颤抖的手写下的那封信更让我感受到一片真心，忍不住落下了眼泪。"
  },
  {
    "id": 636,
    "word": "おろしうり",
    "kanji": "卸売り",
    "kana": "おろしうり",
    "pos": "名詞",
    "meaning": "批发。生产商以大批量、低价格卖给零售商。仓库里堆满了一箱箱还没拆封的货物，叉车在过道间来回穿梭。",
    "example_jp": "彼は市場で魚の卸売りの仕事をしていて、毎日夜明け前から長靴を履いて走り回っている。",
    "example_cn": "他在海鲜市场做海产批发的生意，每天天没亮就穿着长筒雨靴到处奔忙。"
  },
  {
    "id": 637,
    "word": "にづくり",
    "kanji": "荷造り",
    "kana": "にづくり",
    "pos": "名詞",
    "meaning": "打包、捆扎行李。为了搬家或长途旅行，把物品分类塞进纸箱或行李箱中并封好。满地都是散乱的衣服，蹲在地上吃力地压上行李箱拉链。",
    "example_jp": "明日の引っ越しだというのに、荷造りが全く終わらず段ボールの山に囲まれて絶望している。",
    "example_cn": "明明明天就要搬家了，行李却完全没打包好，我被包围在纸箱山里感到绝望。"
  },
  {
    "id": 638,
    "word": "しのぎ",
    "kanji": "鎬",
    "kana": "しのぎ",
    "pos": "名詞",
    "meaning": "刀镐、激烈交锋。原指日本刀侧面突起。比喻像双刀激烈拼杀时削掉刀镐一样，进行毫不退让的激烈竞争。火星四溅，咬紧牙关绝不让步。",
    "example_jp": "ライバル会社とは数パーセントのシェアを巡って、日々血みどろの鎬を削っている。",
    "example_cn": "为了争夺仅仅百分之几的市场份额，我们每天都在和竞争对手进行血雨腥风的激烈交锋。"
  },
  {
    "id": 639,
    "word": "おしつけがましい",
    "kanji": "押し付けがましい",
    "kana": "おしつけがましい",
    "pos": "形容詞",
    "meaning": "强加于人的。明明别人不需要，却硬要把自己的好意塞给对方，一副“我为你好”的态度。用手指指点点，强行把东西塞到你手里。",
    "example_jp": "「あなたのためを思って」という姑の押し付けがましい態度に、いい加減うんざりだ。",
    "example_cn": "婆婆那句“我这都是为了你好”的强加于人的态度，真的让我烦透了。"
  },
  {
    "id": 640,
    "word": "どうせい",
    "kanji": "同棲",
    "kana": "どうせい",
    "pos": "名詞",
    "meaning": "同居。没有结婚的恋人搬到同一个屋檐下共同生活。狭小的公寓里摆着两把情侣牙刷，有人在厨房做饭，有人在客厅看电视。",
    "example_jp": "勢いで同棲を始めたものの、生活習慣の違いから毎日些細なことで口喧嘩ばかりしている。",
    "example_cn": "凭着一股冲动开始同居，结果却因为生活习惯的不同，每天都在为鸡毛蒜皮的小事拌嘴。"
  },
  {
    "id": 641,
    "word": "にごす",
    "kanji": "濁す",
    "kana": "にごす",
    "pos": "動詞",
    "meaning": "弄浑浊、含糊其辞。把清澈的水搅浑，引申为说话吞吞吐吐，故意不把事情说清楚。眼神游移不定，抓着后脑勺干笑搪塞。",
    "example_jp": "彼女は結婚の話題が出ると、いつも曖昧な笑みを浮かべて言葉を濁してしまう。",
    "example_cn": "一提到结婚的话题，她总是浮现出暧昧的笑容，含糊其辞地把话岔开。"
  },
  {
    "id": 642,
    "word": "いもたれ",
    "kanji": "胃もたれ",
    "kana": "いもたれ",
    "pos": "名詞",
    "meaning": "胃部积食、消化不良。吃得太油腻后，食物迟迟无法消化的沉重感。捂着肚子皱着眉头，发出一声长长的叹息，什么都不想吃。",
    "example_jp": "深夜にこってりした豚骨ラーメンを食べたせいで、朝から酷い胃もたれに苦しんでいる。",
    "example_cn": "都怪深夜吃了一碗油腻的豚骨拉面，一大早就在遭受严重的胃积食的折磨。"
  },
  {
    "id": 643,
    "word": "はげ",
    "kanji": "禿",
    "kana": "はげ",
    "pos": "名詞",
    "meaning": "秃头。头上的头发脱落，露出大片头皮的状态。在镜子前拼命把仅剩的几根头发梳到头顶试图掩盖，或者阳光下反光的额头。",
    "example_jp": "彼は同窓会で久しぶりに会ったかつてのイケメンが、見事な禿になっていて言葉を失った。",
    "example_cn": "在同学聚会上，看到昔日的大帅哥如今竟然秃得锃光瓦亮，他顿时震惊得说不出话来。"
  },
  {
    "id": 644,
    "word": "かかりきり",
    "kanji": "掛かり切り",
    "kana": "かかりきり",
    "pos": "名詞",
    "meaning": "全力倾注、一心扑在…上。把所有精力死死地拴在一件事上，顾不上其他。桌子上堆满资料，眼睛死盯着屏幕连饭都顾不上吃。",
    "example_jp": "先月から大きなトラブルの対応に掛かり切りで、自分の趣味の時間は全く取れていない。",
    "example_cn": "从上个月开始就一心扑在处理重大故障上，根本抽不出一丁点时间来顾及自己的爱好。"
  },
  {
    "id": 645,
    "word": "かつら",
    "kanji": "鬘",
    "kana": "かつら",
    "pos": "名詞",
    "meaning": "假发。为了掩饰脱发或改变造型而戴在头上的假头发。大风吹过时慌忙用手按住头顶，生怕头发被整个掀飞的尴尬状态。",
    "example_jp": "部長が怒鳴った瞬間、ズレた鬘を直そうとする不自然な動きに、部下たちは必死で笑いを堪えた。",
    "example_cn": "部长发飙大吼的瞬间，为了把歪掉的假发扶正而做出了极其不自然的动作，下属们拼命憋着笑。"
  },
  {
    "id": 646,
    "word": "おしかける",
    "kanji": "押し掛ける",
    "kana": "おしかける",
    "pos": "動詞",
    "meaning": "蜂拥而至、不请自来。没有受到邀请，仗着人多或不顾对方感受强行涌入对方住处。一群记者扛着长枪短炮堵在名人家门口狂按门铃。",
    "example_jp": "休日の朝っぱらから、アパートに酔っ払った友人たちがドヤ顔で押し掛けてきて絶望した。",
    "example_cn": "大周末的清早，一群喝得醉醺醺的朋友就得意洋洋地强行闯进我的公寓，让我感到一阵绝望。"
  },
  {
    "id": 647,
    "word": "くし",
    "kanji": "串",
    "kana": "くし",
    "pos": "名詞",
    "meaning": "签子。用来把肉块或蔬菜穿成一串放在火上烤的细长竹签或铁签。手里拿着一根滴着油脂的烤鸡肉竹签，末端有些被火熏黑。",
    "example_jp": "彼は美味しそうに焼き鳥を頬張り、空になった串を勢いよくテーブルの筒に放り込んだ。",
    "example_cn": "他津津有味地大口吃着烤鸡肉串，然后把空签子一把用力扔进桌上的竹筒里。"
  },
  {
    "id": 648,
    "word": "はかどる",
    "kanji": "捗る",
    "kana": "はかどる",
    "pos": "動詞",
    "meaning": "进展顺利。工作或学习等事情如同顺水推舟一般，效率极高。手指在键盘上飞舞，文件一页页被迅速处理完，心里充满成就感。",
    "example_jp": "お気に入りの音楽を聴きながら作業したら、嘘みたいに仕事が捗って定時で帰れた。",
    "example_cn": "一边听着喜欢的音乐一边干活，工作进展得简直像开了挂一样顺利，居然准时下班了。"
  },
  {
    "id": 649,
    "word": "とりつぐ",
    "kanji": "取り次ぐ",
    "kana": "とりつぐ",
    "pos": "動詞",
    "meaning": "转达、通报。作为中间人把来访者或来电者的信息传递给真正要找的人。一手捂着话筒，转头压低声音对着上司通报名字。",
    "example_jp": "クレームの電話を受けた新人が、泣きそうな顔で慌てて店長に取り次いできた。",
    "example_cn": "接到投诉电话的新人，顶着一张快哭出来的脸，慌慌张张地把电话转接给了店长。"
  },
  {
    "id": 650,
    "word": "ししゅう",
    "kanji": "刺繡",
    "kana": "ししゅう",
    "pos": "名詞",
    "meaning": "刺绣。用彩色的线在布料上穿梭，缝制出花纹或图案。捏着细细的银针，在绷紧的布面上小心翼翼地穿针引线，绣出一朵栩栩如生的牡丹。",
    "example_jp": "祖母がウェディングドレスの裾に、一針一針祈りを込めて美しいバラの刺繡を施してくれた。",
    "example_cn": "奶奶在我的婚纱裙摆上，一针一线倾注着祈祷，为我绣上了美丽的玫瑰花刺绣。"
  },
  {
    "id": 651,
    "word": "きわまりない",
    "kanji": "極まりない",
    "kana": "きわまりない",
    "pos": "形容詞",
    "meaning": "极其…、…之极。达到了极限，没有比这更甚的了。指某种负面或极端的状态到了极点。眉头紧锁，对某种荒唐的言行感到极度无语或愤怒。",
    "example_jp": "彼の初対面での無礼極まりない態度に、思わずお茶を顔に浴びせそうになった。",
    "example_cn": "面对他初次见面时极其无礼的态度，我气得差点把茶水泼到他脸上。"
  },
  {
    "id": 652,
    "word": "しあげ",
    "kanji": "仕上げ",
    "kana": "しあげ",
    "pos": "名詞",
    "meaning": "最后加工、润色、收尾。工作或作品完成前的最后一道工序。拿着细砂纸小心翼翼地打磨木雕的边缘，或是给刚出炉的蛋糕小心地撒上糖粉。",
    "example_jp": "徹夜で作った企画書の最後の仕上げとして、表紙のフォントを微調整した。",
    "example_cn": "作为熬夜写出的企划书的最后收尾，我仔细微调了封面的字体。"
  },
  {
    "id": 653,
    "word": "いましめる",
    "kanji": "戒める",
    "kana": "いましめる",
    "pos": "動詞",
    "meaning": "训诫、告诫、警戒。为了防止犯错而严厉地提醒或自我反省。板着脸严厉地教训做错事的孩子，或者握紧拳头暗自提醒自己不要重蹈覆辙。",
    "example_jp": "調子に乗って失敗した自分を戒めるため、あえて厳しい環境に身を置いた。",
    "example_cn": "为了告诫那个得意忘形而惨遭失败的自己，我故意把自己置于严酷的环境中。"
  },
  {
    "id": 654,
    "word": "ひきかえる",
    "kanji": "引き換える",
    "kana": "ひきかえる",
    "pos": "動詞",
    "meaning": "交换、兑换。用手里的东西换取另一件同等价值的东西。递过一张皱巴巴的奖券，满怀期待地从工作人员手里接过实物。",
    "example_jp": "貯まったポイントを商品券に引き換えようとしたら、期限切れで絶望した。",
    "example_cn": "正打算把攒下的积分兑换成商品券，却发现已经过期了，顿时感到一阵绝望。"
  },
  {
    "id": 655,
    "word": "あいいれない",
    "kanji": "相いれない",
    "kana": "あいいれない",
    "pos": "形容詞",
    "meaning": "互不相容、格格不入。双方的性质或主张完全对立，无法妥协共存。两人抱着胳膊背对着背，谁也不愿意回头看对方一眼，空气中充满排斥感。",
    "example_jp": "利益至上主義の彼と、品質を重視する職人の私とは、到底相いれない。",
    "example_cn": "利益至上的他和重视品质的作为工匠的我，根本就是水火不容。"
  },
  {
    "id": 656,
    "word": "とどこおる",
    "kanji": "滞る",
    "kana": "とどこおる",
    "pos": "動詞",
    "meaning": "拖延、停滞、堵塞。原本应该顺畅进行的事情被卡住了，或者款项未能按时支付。看着堆积如山的文件叹气，或者看着催款单眉头紧锁焦虑地搓手。",
    "example_jp": "担当者の突然の入院で、プロジェクトの進行が完全に滞ってしまった。",
    "example_cn": "因为负责人的突然住院，项目的进展完全停滞了，让人一筹莫展。"
  },
  {
    "id": 657,
    "word": "みかける",
    "kanji": "見掛ける",
    "kana": "みかける",
    "pos": "動詞",
    "meaning": "偶然看到、碰见。并不是特意去寻找，而是在视线里偶然捕捉到了某个身影。走在繁华的街道上，突然停下脚步，惊讶地盯着马路对面那个熟悉的身影。",
    "example_jp": "駅前で元カレが別の女性と親しげに歩いているのを見掛け、慌てて背を向けた。",
    "example_cn": "在车站前偶然看到前男友和另一个女人亲密地走在一起，我慌忙转过身去。"
  },
  {
    "id": 658,
    "word": "あいまって",
    "kanji": "相まって",
    "kana": "あいまって",
    "pos": "連語",
    "meaning": "相互结合、相辅相成。两个以上的要素融合在一起，产生了更好的效果或更强烈的氛围。深秋的红叶与古老的寺庙相互映衬，微风吹过，让人不由得驻足赞叹。",
    "example_jp": "厳しい寒さと長時間の残業が相まって、ついに職場で倒れてしまった。",
    "example_cn": "严酷的寒冷和长时间的加班双管齐下，我最终还是在工作岗位上累倒了。"
  },
  {
    "id": 659,
    "word": "おもむく",
    "kanji": "赴く",
    "kana": "おもむく",
    "pos": "動詞",
    "meaning": "奔赴、前往。朝着某个特定的地方（通常有距离或带有某种使命）前去。提着沉重的行李箱，怀着不安与期待踏上前往陌生城市的列车。",
    "example_jp": "彼は大雨による土砂崩れの現場に、カメラ片手に急いで赴いた。",
    "example_cn": "他单手拿着相机，急急忙忙地奔赴了因大雨导致山体滑坡的现场。"
  },
  {
    "id": 660,
    "word": "ぬすみ〜",
    "kanji": "盗み〜",
    "kana": "ぬすみ〜",
    "pos": "接頭辞",
    "meaning": "偷偷地…。偷偷摸摸地做某事，怕被别人发现。躲在柱子后面，探出半个脑袋，眼神闪烁地暗中观察着别人的举动。",
    "example_jp": "授業中、先生の目を盗み食いしたパンが喉に詰まって死ぬかと思った。",
    "example_cn": "上课时，趁老师不注意偷偷咽下的面包噎在喉咙里，差点没把我憋死。"
  },
  {
    "id": 661,
    "word": "つげる",
    "kanji": "告げる",
    "kana": "つげる",
    "pos": "動詞",
    "meaning": "告知、宣告。将某事正式或明确地告诉对方，有时带有单方面通知的意味。面无表情地递上一张解雇通知书，或者钟声敲响宣告时间的到来。",
    "example_jp": "医者から余命半年と告げられた彼は、ただ黙って窓の外を見つめていた。",
    "example_cn": "被医生宣告只剩半年寿命的他，只是沉默着死死盯着窗外。"
  },
  {
    "id": 662,
    "word": "おもいつき",
    "kanji": "思いつき",
    "kana": "おもいつき",
    "pos": "名詞",
    "meaning": "突发奇想、一时兴起。突然闪现在脑海里的念头或主意，通常没有经过深思熟虑。脑海里突然“叮”地亮起一个小灯泡，兴奋地拍着大腿跳起来。",
    "example_jp": "彼女の単なる思いつきで始まったこの企画が、まさか大ヒットするとは。",
    "example_cn": "仅仅因为她的一时兴起而开始的这个企划，竟然意外地大获成功。"
  },
  {
    "id": 663,
    "word": "おどす",
    "kanji": "脅す",
    "kana": "おどす",
    "pos": "動詞",
    "meaning": "威胁、恐吓。用言语或暴力手段使对方感到恐惧，从而逼迫对方服从。揪住对方的衣领，凶神恶煞地挥舞着拳头，逼近对方的脸低声怒吼。",
    "example_jp": "借金取りは「家族がどうなってもいいのか」と、震える彼を低く冷たい声で脅した。",
    "example_cn": "讨债人压低冰冷的声音，威胁吓得发抖的他说：“你连家人的死活都不管了吗？”"
  },
  {
    "id": 664,
    "word": "ひょうする",
    "kanji": "表する",
    "kana": "ひょうする",
    "pos": "動詞",
    "meaning": "表达、表示。通过言语、态度或仪式将内心的情感（如感谢、哀悼、敬意）展现出来。脱下帽子，深深地低下头，闭上眼睛默默祈祷以示哀悼。",
    "example_jp": "彼の長年の功績に対し、会社は深い敬意と感謝の意を表して表彰状を贈った。",
    "example_cn": "对于他多年的功绩，公司为了表达深深的敬意和感谢，向他颁发了表彰状。"
  },
  {
    "id": 665,
    "word": "かるはずみ",
    "kanji": "軽はずみ",
    "kana": "かるはずみ",
    "pos": "名詞",
    "meaning": "轻率、冒失。说话做事不经过大脑，没有考虑后果。一时冲动脱口而出伤人的话，事后捂着嘴巴懊悔不已。",
    "example_jp": "ネット上の軽はずみな発言があっという間に炎上し、彼は会社をクビになった。",
    "example_cn": "网上轻率的发言瞬间引发了网暴，他连工作都丢了。"
  },
  {
    "id": 666,
    "word": "ふみば",
    "kanji": "踏み場",
    "kana": "ふみば",
    "pos": "名詞",
    "meaning": "落脚处、立足地。脚可以踩下去的地方。满地都是散落的衣服、垃圾和书本，踮着脚尖小心翼翼地找空隙踩下去。",
    "example_jp": "彼女の部屋は足の踏み場もないほど散らかっていて、玄関で立ち尽くしてしまった。",
    "example_cn": "她的房间乱得连个下脚的地方都没有，我无奈地呆立在玄关处。"
  },
  {
    "id": 667,
    "word": "ふきこむ",
    "kanji": "吹き込む",
    "kana": "ふきこむ",
    "pos": "動詞",
    "meaning": "吹入、灌输、录音。风从外面吹进来，或引申为把思想、流言灌输给别人，或对着麦克风说话录音。凑到别人耳边，用手挡着嘴，神神秘秘地悄声嘀咕。",
    "example_jp": "姑が近所の人に私の悪口をさんざん吹き込んでいると知り、怒りで震えた。",
    "example_cn": "得知婆婆到处给街坊邻居灌输我的坏话，我气得浑身发抖。"
  },
  {
    "id": 668,
    "word": "のりきる",
    "kanji": "乗り切る",
    "kana": "のりきる",
    "pos": "動詞",
    "meaning": "渡过难关、顶住。咬紧牙关，克服了眼前的巨大困难或危机。在狂风暴雨中死死握住方向盘，满头大汗终于把船驶入平静的海域。",
    "example_jp": "何度も心が折れそうになったが、仲間の励ましのおかげでこの修羅場を乗り切った。",
    "example_cn": "好几次都险些崩溃放弃，多亏了同伴的鼓励才咬牙熬过了这个像地狱一样的修罗场。"
  },
  {
    "id": 669,
    "word": "たちすくむ",
    "kanji": "立ちすくむ",
    "kana": "たちすくむ",
    "pos": "動詞",
    "meaning": "呆立、吓呆。因极度的恐惧、震惊或感动而双腿发软，僵在原地无法动弹。瞪大双眼，嘴巴微张，浑身的血液仿佛凝固了一样定在原地。",
    "example_jp": "暗闇の中で突然現れた熊と目が合い、恐怖のあまり足が震えて立ちすくんだ。",
    "example_cn": "在黑暗中和突然出现的熊对上了视线，因为极度的恐惧双腿发抖，僵立在原地动弹不得。"
  },
  {
    "id": 670,
    "word": "さむけ",
    "kanji": "寒気",
    "kana": "さむけ",
    "pos": "名詞",
    "meaning": "恶寒、发冷。因生病发烧前或感到极度恐惧、厌恶时，身体不由自主发抖的寒意。紧紧抱住双臂来回搓动，牙齿打颤，或是听到恶心的事后起了一身鸡皮疙瘩。",
    "example_jp": "彼の狂気を孕んだ薄気味悪い笑顔を見て、背筋にゾクッと寒気が走った。",
    "example_cn": "看到他那饱含疯狂、令人毛骨悚然的笑容，我的脊背感到一阵恶寒。"
  },
  {
    "id": 671,
    "word": "つかえる",
    "kanji": "仕える",
    "kana": "つかえる",
    "pos": "動詞",
    "meaning": "侍奉、服侍。以臣子、仆人或下属的身份，恭敬地听从主人的差遣。双手交叠在身前，微微弯腰，恭敬地低着头等待吩咐。",
    "example_jp": "長年この一族に忠実に仕えてきた老執事は、主人の死を静かに受け入れた。",
    "example_cn": "多年忠诚服侍这个家族的老管家，平静地接受了主人的死讯。"
  },
  {
    "id": 672,
    "word": "わきあがる",
    "kanji": "沸き上がる",
    "kana": "わきあがる",
    "pos": "動詞",
    "meaning": "沸腾、涌起（欢呼声/情绪）。水剧烈沸腾翻滚，或人群爆发出震耳欲聋的欢呼声，或内心涌出强烈的感情。成千上万的人同时站起来挥舞手臂，声浪一阵阵冲击着耳膜。",
    "example_jp": "逆転ホームランがスタンドに飛び込んだ瞬間、球場全体が地鳴りのような歓声に沸き上がった。",
    "example_cn": "逆转本垒打飞入看台的瞬间，整个球场爆发出如同地鸣一般沸腾的欢呼声。"
  },
  {
    "id": 673,
    "word": "ふくれあがる",
    "kanji": "膨れ上がる",
    "kana": "ふくれあがる",
    "pos": "動詞",
    "meaning": "膨胀、肿胀、激增。物体像吹了气的气球一样胀大，或数量、预算等超出预期地成倍增加。看着账单上不断增加的零，惊恐地瞪大眼睛，直冒冷汗。",
    "example_jp": "最初は軽い気持ちで借りたお金が、利子で雪だるま式に膨れ上がり破産した。",
    "example_cn": "一开始只是抱着轻松心态借的钱，却因为利息像滚雪球一样激增膨胀，最终导致了破产。"
  },
  {
    "id": 674,
    "word": "いたむ",
    "kanji": "痛む",
    "kana": "いたむ",
    "pos": "動詞",
    "meaning": "疼痛、心痛、损坏。肉体上感到痛楚，或者看到悲惨的事物时内心感到难受。皱着眉头捂住受伤的膝盖，或者看着可怜的流浪猫捂住胸口。",
    "example_jp": "ニュースで被災地の惨状を見るたびに、胸が締め付けられるように痛む。",
    "example_cn": "每次在新闻里看到灾区的惨状，心就像被揪紧了一样难受作痛。"
  },
  {
    "id": 675,
    "word": "あがりこむ",
    "kanji": "上がり込む",
    "kana": "あがりこむ",
    "pos": "動詞",
    "meaning": "进入（别人家）、登堂入室。脱掉鞋子走上别人家的榻榻米或地板，有时带有毫不客气、未经许可闯入的语感。毫无顾忌地踢掉鞋子，大摇大摆地走进别人客厅一屁股坐下。",
    "example_jp": "泥酔した上司が深夜に我が家へ上がり込み、冷蔵庫のビールを勝手に飲み始めた。",
    "example_cn": "烂醉如泥的上司半夜跑到我家登堂入室，甚至自作主张地喝起了冰箱里的啤酒。"
  },
  {
    "id": 676,
    "word": "さだか",
    "kanji": "定か",
    "kana": "さだか",
    "pos": "形容動詞",
    "meaning": "确切、清楚。事物明确、没有疑问的状态（常接否定表示记忆或情况模糊）。皱着眉头拼命回忆，却只能想起一些模糊的片段，无奈地摇摇头。",
    "example_jp": "昨夜どうやって家に帰ってきたのか、記憶が全く定かではなくて恐ろしい。",
    "example_cn": "昨晚到底是怎么回家的，记忆完全模糊不清了，想想真是后怕。"
  },
  {
    "id": 677,
    "word": "いいそびれる",
    "kanji": "言いそびれる",
    "kana": "いいそびれる",
    "pos": "動詞",
    "meaning": "没说出口、错过说的机会。想说的话因为犹豫或被打断，最终错过了开口的时机。嘴巴张了张又闭上，欲言又止地低头看着脚尖，错过了对方转身的时机。",
    "example_jp": "ずっと好きだったのに、彼の転勤が決まったショックで結局告白を言いそびれてしまった。",
    "example_cn": "明明一直喜欢他，却因为他被调走的打击，最终错过了开口告白的机会。"
  },
  {
    "id": 678,
    "word": "どうどうめぐり",
    "kanji": "堂堂巡り",
    "kana": "どうどうめぐり",
    "pos": "名詞",
    "meaning": "兜圈子、原地踏步。原本指在寺庙里绕着佛堂转圈祈愿，引申为思考或讨论绕来绕去回不到正题，无法得出结论。大家在会议室里烦躁地抓着头发，盯着白板上画出的死循环线。",
    "example_jp": "何時間話し合ってもお互い譲らず、議論は完全に堂堂巡りに陥ってしまった。",
    "example_cn": "无论讨论几个小时都互不让步，争论完全陷入了原地踏步的死循环。"
  },
  {
    "id": 679,
    "word": "とりつける",
    "kanji": "取り付ける",
    "kana": "とりつける",
    "pos": "動詞",
    "meaning": "安装、取得（同意/契约）。把某个部件固定安装到某处；引申为费了一番功夫后，终于获得了对方的承诺或同意。擦着汗拧紧最后一颗螺丝，或者在合同上终于看到对方盖下印章后长舒一口气。",
    "example_jp": "何度も頭を下げて、ようやく社長からプロジェクトの実行の承認を取り付けた。",
    "example_cn": "鞠躬求了无数次，终于从总经理那里争取到了项目执行的批准。"
  },
  {
    "id": 680,
    "word": "ほどちかい",
    "kanji": "程近い",
    "kana": "ほどちかい",
    "pos": "形容詞",
    "meaning": "就在附近、离得不远。距离某个地点非常近。伸手指着几步之外就能看到的地方，表示走几步就到了。",
    "example_jp": "駅に程近いこのマンションは便利だが、夜中まで電車の音がうるさくて眠れない。",
    "example_cn": "这栋离车站很近的公寓虽然方便，但电车的声音吵到半夜，让人根本睡不着。"
  },
  {
    "id": 681,
    "word": "かなう",
    "kanji": "敵う",
    "kana": "かなう",
    "pos": "動詞",
    "meaning": "匹敌、比得上（多用于否定）。在力量、能力或条件上与对方处于同一水平。面对压倒性强大的对手，绝望地垂下肩膀，承认自己技不如人。",
    "example_jp": "天才的なセンスを持つ彼女には、どれだけ努力しても到底敵わないと悟った。",
    "example_cn": "我意识到，面对拥有天才般直觉的她，自己无论怎么努力也是绝对比不上的。"
  },
  {
    "id": 682,
    "word": "うちとける",
    "kanji": "打ち解ける",
    "kana": "うちとける",
    "pos": "動詞",
    "meaning": "融洽、消除隔阂。像冰雪融化一样，彼此卸下心防，变得亲密无间。原本拘谨的两人相视一笑，开始互相开玩笑，气氛变得轻松温暖。",
    "example_jp": "一緒に酒を飲んで本音で語り合ったら、頑固な彼ともすっかり打ち解けることができた。",
    "example_cn": "一起喝了酒并坦诚相待后，我和那个固执的他终于彻底消除了隔阂。"
  },
  {
    "id": 683,
    "word": "めりはり",
    "kanji": "減り張り",
    "kana": "めりはり",
    "pos": "名詞",
    "meaning": "抑扬顿挫、张弛有度。声音的高低起伏，或行动时放松与紧张的节奏感。工作时专注得不苟言笑，休息时痛快地放声大笑，节奏分明。",
    "example_jp": "毎日ダラダラ残業するのではなく、めりはりをつけて働く方がずっと効率がいい。",
    "example_cn": "与其每天拖拖拉拉地加班，不如张弛有度地工作，效率要高得多。"
  },
  {
    "id": 684,
    "word": "がけ",
    "kanji": "崖",
    "kana": "がけ",
    "pos": "名詞",
    "meaning": "悬崖、绝壁。非常陡峭、近乎垂直的危险地形。站在风大的断崖边缘，脚下的碎石滚落深渊，让人看着一阵腿软。",
    "example_jp": "犯人は追い詰められ、波が荒れ狂う崖の上で観念したように膝から崩れ落ちた。",
    "example_cn": "犯人被逼入绝境，在波涛汹涌的悬崖上仿佛认命般地双膝一软跪倒在地。"
  },
  {
    "id": 685,
    "word": "かもしだす",
    "kanji": "醸し出す",
    "kana": "かもしだす",
    "pos": "動詞",
    "meaning": "营造出、散发出（气氛）。像酿酒一样，不知不觉地在周围自然散发出某种独特的情绪或氛围。空气中弥漫着不可言喻的诡异气息，或者灯光和音乐共同营造出的浪漫。",
    "example_jp": "彼女が黙って座っているだけで、部屋全体になんとも言えない気まずい雰囲気が醸し出された。",
    "example_cn": "她只是默不作声地坐在那里，整个房间就弥漫出一种难以名状的尴尬气氛。"
  },
  {
    "id": 686,
    "word": "へきえき",
    "kanji": "辟易",
    "kana": "へきえき",
    "pos": "名詞",
    "meaning": "退缩、感到厌烦。被对方的气势压倒而退缩，或者因为某事过于频繁或麻烦而感到十分厌烦、无可奈何。痛苦地皱起眉头，摆摆手表示实在受够了。",
    "example_jp": "上司の終わりの見えない長い自慢話には、部下全員が心の底から辟易していた。",
    "example_cn": "面对上司那没完没了的自夸，所有下属都在心底里感到烦透了。"
  },
  {
    "id": 687,
    "word": "ふしめ",
    "kanji": "節目",
    "kana": "ふしめ",
    "pos": "名詞",
    "meaning": "节点、转折点。竹子的节眼，引申为人生的某个重要阶段或事情告一段落的转折时期。站在十字路口深吸一口气，准备迎接人生新篇章的郑重感。",
    "example_jp": "三十歳という人生の節目を迎えて、今の会社を辞めて独立する決心をした。",
    "example_cn": "迎来了三十岁这个人生重要的节点，我下定决心辞掉现在的工作出去单干。"
  },
  {
    "id": 688,
    "word": "みばえ",
    "kanji": "見栄え",
    "kana": "みばえ",
    "pos": "名詞",
    "meaning": "外观、卖相、体面。从外表看上去给人的印象是否好看、气派。把食物摆盘得精致漂亮，或者穿上一身剪裁得体的西装让人眼前一亮。",
    "example_jp": "料理の味は最高なのに、盛り付けが雑すぎて見栄えが悪いのは本当にもったいない。",
    "example_cn": "明明料理的味道棒极了，可是摆盘太粗糙导致卖相很差，实在太可惜了。"
  },
  {
    "id": 689,
    "word": "おおごしょ",
    "kanji": "大御所",
    "kana": "おおごしょ",
    "pos": "名詞",
    "meaning": "泰斗、老行家、掌门人。引退的幕府将军，引申为在某个领域拥有绝对权威和影响力的老前辈。拄着拐杖坐在正中，不怒自威，周围人都毕恭毕敬地低头听训。",
    "example_jp": "お笑い界の大御所がスタジオに入ってきた瞬間、空気がピリッと張り詰めた。",
    "example_cn": "搞笑界的泰斗级前辈走进演播室的瞬间，空气立刻变得紧绷起来。"
  },
  {
    "id": 690,
    "word": "ねづよい",
    "kanji": "根強い",
    "kana": "ねづよい",
    "pos": "形容詞",
    "meaning": "根深蒂固的。植物的根扎得很深，引申为某种思想、习惯或人气坚不可摧，难以轻易改变。无论经过多少年，风吹雨打都无法撼动的执念或偏见。",
    "example_jp": "古い業界にはまだ「男尊女卑」という根強い偏見が残っていて、うんざりする。",
    "example_cn": "传统行业里依然残留着“男尊女卑”这种根深蒂固的偏见，真让人作呕。"
  },
  {
    "id": 691,
    "word": "〜そう",
    "kanji": "〜層",
    "kana": "〜そう",
    "pos": "接尾辞",
    "meaning": "…阶层、群体。将社会或事物按年龄、收入、特性等划分出的特定群体。用饼状图划分出的一块特定区域，代表着有着共同特征的一群人。",
    "example_jp": "この高級ブランドは、若者層には手が届かない価格設定になっている。",
    "example_cn": "这个奢侈品牌的定价，让年轻消费群体根本高攀不起。"
  },
  {
    "id": 692,
    "word": "もよおし",
    "kanji": "催し",
    "kana": "もよおし",
    "pos": "名詞",
    "meaning": "活动、集会。计划并举办的各种集会、展览或庆祝活动。场馆门口挂着彩幅，人们热闹地排队入场参加盛会。",
    "example_jp": "週末に公園で開かれたグルメの催しには、雨にもかかわらず多くの人が押し寄せた。",
    "example_cn": "周末在公园举办的美食活动，尽管下着雨，还是涌来了大批人群。"
  },
  {
    "id": 693,
    "word": "あらあらしい",
    "kanji": "荒々しい",
    "kana": "あらあらしい",
    "pos": "形容詞",
    "meaning": "粗暴的、狂暴的。动作、性格或自然界的状态极其狂暴、没有教养。红着眼睛猛砸桌子，或者狂风卷起巨浪狠狠拍在礁石上。",
    "example_jp": "彼は怒りに任せて、ドアを枠が外れるほど荒々しく乱暴に閉めて出て行った。",
    "example_cn": "他任由怒火中烧，粗暴地把门摔得框子都快掉下来，甩手离去。"
  },
  {
    "id": 694,
    "word": "とみ",
    "kanji": "富",
    "kana": "とみ",
    "pos": "名詞",
    "meaning": "财富、巨资。大量的金钱或贵重财产。金库里堆积如山的金条，或者是拥有无数处房产和产业的富可敌国状态。",
    "example_jp": "彼は一代で莫大な富を築き上げたが、最後は誰にも看取られず孤独に亡くなった。",
    "example_cn": "他靠自己这一代积累了惊人的财富，最终却在无人陪伴的孤独中离世。"
  },
  {
    "id": 695,
    "word": "ゆえ",
    "kanji": "故",
    "kana": "ゆえ",
    "pos": "名詞",
    "meaning": "缘故、原因。导致某种结果的原因或理由（多用于书面语或较文雅的表达）。因为背负着某种身份或过去的沉重包袱，无奈地叹了一口气。",
    "example_jp": "完璧主義の彼故に、小さなミスがどうしても許せず部下を怒鳴り散らしてしまう。",
    "example_cn": "正因为他是个完美主义者，所以无论如何都无法容忍小小的失误，把下属骂得狗血淋头。"
  },
  {
    "id": 696,
    "word": "ほ",
    "kanji": "穂",
    "kana": "ほ",
    "pos": "名詞",
    "meaning": "穗、尖端。禾本植物结出种子的顶端部分，也指长条物体的尖端。秋风吹过金黄色的稻田，沉甸甸的稻穗随风摇摆，发出沙沙的声音。",
    "example_jp": "秋風に揺れるススキの穂を見て、急に故郷の寂しい風景が恋しくなった。",
    "example_cn": "看着秋风中摇曳的芒草穗，突然无比怀念起故乡寂寥的风景。"
  },
  {
    "id": 697,
    "word": "ふりこみ",
    "kanji": "振り込み",
    "kana": "ふりこみ",
    "pos": "名詞",
    "meaning": "银行转账、汇款。通过金融机构将资金转入他人账户。站在ATM机前，手指快速按下密码和金额，然后按下了确认键。",
    "example_jp": "ネット通販で買った商品の振り込みをうっかり忘れていて、注文がキャンセルされた。",
    "example_cn": "不小心忘了给在网上买的商品转账汇款，结果订单被取消了。"
  },
  {
    "id": 698,
    "word": "なじむ",
    "kanji": "馴染む",
    "kana": "なじむ",
    "pos": "動詞",
    "meaning": "适应、习惯、融合。原本有距离感的人或事物，经过一段时间后变得自然融合，不再有违和感。新买的皮鞋穿久了渐渐贴合脚型，或者转校生终于和同学们打成一片。",
    "example_jp": "転校してきたばかりの頃は浮いていたが、半年も経つとすっかりクラスに馴染んでいた。",
    "example_cn": "刚转学来的时候显得格格不入，但过了半年就已经完全融入了班级。"
  },
  {
    "id": 699,
    "word": "とりしまる",
    "kanji": "取り締まる",
    "kana": "とりしまる",
    "pos": "動詞",
    "meaning": "取缔、管束、查处。为了维持秩序，对违反规则的行为进行严格的监督和惩处。警察板着脸，拿着记录本开出罚单，严厉打击违规停车。",
    "example_jp": "警察が飲酒運転を厳しく取り締まっているにも関わらず、悲惨な事故は後を絶たない。",
    "example_cn": "尽管警察在严厉查处酒后驾车，但悲惨的交通事故依然层出不穷。"
  },
  {
    "id": 700,
    "word": "かたりかける",
    "kanji": "語り掛ける",
    "kana": "かたりかける",
    "pos": "動詞",
    "meaning": "搭话、诉说。主动向对方开口说话，通常带有温柔、亲切或充满感情的语调。目光柔和地看着对方的眼睛，微微前倾身体，用温柔的声音诉说。",
    "example_jp": "彼は棺の中で眠る妻の顔を見つめ、静かな声で「ありがとう」と語り掛けた。",
    "example_cn": "他凝视着在棺材里安睡的妻子的脸庞，用平静的声音对她诉说着：“谢谢你。”"
  },
  {
    "id": 701,
    "word": "みかねる",
    "kanji": "見かねる",
    "kana": "みかねる",
    "pos": "動詞",
    "meaning": "看不下去，无法旁观。因强烈的同情或担忧，无法在一旁默默看着不管。原意为“看的过程感到困难”，引申为心理上的不忍。皱着眉头，忍不住要伸出援手的局促状态。",
    "example_jp": "重い荷物を引きずる老婦人を見かねて、つい手を貸した。",
    "example_cn": "看着老奶奶拖着沉重行李蹒跚前行，我实在看不下去，不由得上前伸出了手。"
  },
  {
    "id": 702,
    "word": "こや",
    "kanji": "小屋",
    "kana": "こや",
    "pos": "名詞",
    "meaning": "小屋，棚子。空间狭小、构造简陋的建筑物。通常用于存放杂物或临时避难。带着木头霉味、四处透风的局促空间，人只能蜷缩在角落。",
    "example_jp": "土砂降りの中、ずぶ濡れで山奥の古びた小屋に逃げ込んだ。",
    "example_cn": "倾盆大雨中，我们浑身湿透，狼狈地逃进了深山里一间四处漏风的破旧小屋。"
  },
  {
    "id": 703,
    "word": "しめつける",
    "kanji": "締め付ける",
    "kana": "しめつける",
    "pos": "動詞",
    "meaning": "勒紧，紧紧绑住；（引申）感到极度压抑、心痛。从物理上的死死勒紧，引申为精神上遭受强烈压迫。眉头紧锁，捂着胸口，仿佛心脏被一只无形的手用力揪住般难以呼吸。",
    "example_jp": "彼の冷たい一言が、私の胸をぎゅっと締め付けた。",
    "example_cn": "他那句冷冰冰的话语，像是一只手死死揪住了我的心，让我痛得喘不过气来。"
  },
  {
    "id": 704,
    "word": "はずれ",
    "kanji": "外れ",
    "kana": "はずれ",
    "pos": "名詞",
    "meaning": "落空，没中；边缘，尽头。偏离了原本期待的中心或目标。引申为期待落空或地理位置偏远。刮开彩票最后一位数字时肩膀瞬间垮下来的失落感，或站在荒凉村落边缘的孤寂。",
    "example_jp": "くじが外れと分かり、彼はがっくりと肩を落とした。",
    "example_cn": "发现自己抽中了未中奖的空签，他瞬间像泄了气的皮球一样垂下了肩膀。"
  },
  {
    "id": 705,
    "word": "かたみ",
    "kanji": "肩身",
    "kana": "かたみ",
    "pos": "名詞",
    "meaning": "面子，社会地位，体面。字面意思是“肩膀和身体”，引申为人在社会或群体中感受到的体面与尊严。常与“狭い”连用，表现出低着头、缩着肩膀，觉得没脸见人的局促模样。",
    "example_jp": "一人だけ試験に落ちて、家族の中で肩身が狭い思いをした。",
    "example_cn": "只有我一个人考试落榜，在家人面前我只能缩着脖子，觉得实在没脸抬头。"
  },
  {
    "id": 706,
    "word": "きごころ",
    "kanji": "気心",
    "kana": "きごころ",
    "pos": "名詞",
    "meaning": "性情，脾气，真实的内心想法。指不加掩饰的性格底色。面对面放松地盘腿坐着，连最丢脸的玩笑也能随便开，完全不用防备的默契状态。",
    "example_jp": "気心の知れた友人と、深夜まで馬鹿話で盛り上がった。",
    "example_cn": "和摸透了彼此脾气的挚友在一起，我们毫无顾忌地扯着闲篇，一直大笑到深夜。"
  },
  {
    "id": 707,
    "word": "なばかり",
    "kanji": "名ばかり",
    "kana": "なばかり",
    "pos": "名詞",
    "meaning": "名不副实，徒有虚名。只有外表或头衔听起来好听，实质内容却完全跟不上。胸前挂着“经理”的高级名牌，却低着头在满是积水的厕所里拖地的无奈模样。",
    "example_jp": "彼は名ばかりの店長で、毎日レジ打ちと掃除に追われている。",
    "example_cn": "他是个徒有虚名的店长，每天只能低着头在收银台前忙碌，还要弓着腰打扫卫生。"
  },
  {
    "id": 708,
    "word": "むすびつける",
    "kanji": "結び付ける",
    "kana": "むすびつける",
    "pos": "動詞",
    "meaning": "系上，拴在一起；（引申）使产生联系。将分开的两个事物物理上绑紧，或逻辑上关联起来。脑海中灵光一闪，把两条看似无关的线索拼凑在一起的恍然大悟。",
    "example_jp": "落ちていたボタンと昨夜の事件を、彼は瞬時に結び付けた。",
    "example_cn": "他猛地睁大眼睛，瞬间将掉落的扣子和昨晚的案件联系在了一起。"
  },
  {
    "id": 709,
    "word": "かき",
    "kanji": "垣",
    "kana": "かき",
    "pos": "名詞",
    "meaning": "篱笆，围墙；（引申）隔阂。阻挡视线和物理接触的屏障，常引申为人际交往中防备他人的心理高墙。两人面对面站着，中间却仿佛立着一道冰冷、带刺的隐形铁丝网。",
    "example_jp": "彼の冷たい態度に、どうしても越えられない心の垣を感じた。",
    "example_cn": "面对他那冷冰冰的态度，我感到两人之间似乎竖起了一道无法逾越的心之高墙。"
  },
  {
    "id": 710,
    "word": "たちおうじょう",
    "kanji": "立ち往生",
    "kana": "たちおうじょう",
    "pos": "名詞",
    "meaning": "进退两难，停滞不前。原指像英雄一样站着死去，现多指交通工具受阻或事情彻底陷入僵局。大雪封路，汽车排成长龙一动不动，司机焦急地趴在方向盘上叹气。",
    "example_jp": "大雪のせいで高速道路で立ち往生し、車内で凍えそうになった。",
    "example_cn": "大雪导致高速公路彻底瘫痪，被困在车里的我急得直拍方向盘，冻得瑟瑟发抖。"
  },
  {
    "id": 711,
    "word": "たけ",
    "kanji": "丈",
    "kana": "たけ",
    "pos": "名詞",
    "meaning": "长度，身高；（引申）全部，所有感情。从物理上衣服的尺寸或人的高矮，引申为内心积压的全部情感的深度。紧紧攥着拳头，红着眼眶把憋在心里的委屈一股脑全吼出来的状态。",
    "example_jp": "彼女は涙ながらに、胸に秘めた思いの丈を彼にぶつけた。",
    "example_cn": "她眼泪夺眶而出，拽着他的衣角，把藏在心底的所有情感毫无保留地哭喊了出来。"
  },
  {
    "id": 712,
    "word": "あかつき",
    "kanji": "暁",
    "kana": "あかつき",
    "pos": "名詞",
    "meaning": "破晓，黎明；（引申）某事成功实现之时。漫长黑暗的夜晚过去后，天边透出第一缕曙光的时刻。引申为历经艰辛、咬牙坚持后，终于迎来胜利果实的那一刻的激动。",
    "example_jp": "この大事業を成し遂げた暁には、皆でうまい酒を飲もう。",
    "example_cn": "等这项艰巨的事业终于大功告成的那一天，我们一定要痛痛快快地喝个底朝天！"
  },
  {
    "id": 713,
    "word": "ものがたる",
    "kanji": "物語る",
    "kana": "ものがたる",
    "pos": "動詞",
    "meaning": "讲述；（引申）事物本身证明、如实说明。从人用嘴说故事，引申为没有生命的物体作为铁证，默默传达着真实的过去。伤痕累累的旧皮靴，静静地诉说着主人漫长跋涉的艰辛。",
    "example_jp": "真っ黒に汚れた作業着が、昨夜の激闘を無言で物語っていた。",
    "example_cn": "那件沾满机油、乌黑不堪的工作服，正默默无言地诉说着昨晚激战的残酷。"
  },
  {
    "id": 714,
    "word": "おもいすごす",
    "kanji": "思い過ごす",
    "kana": "おもいすごす",
    "pos": "動詞",
    "meaning": "想太多，杞人忧天。思想越过了现实的边界，陷入不必要的过度担忧。咬着大拇指指甲，在房间里来回踱步，脑补出无数种对方讨厌自己的虚假画面的焦虑。",
    "example_jp": "ただの既読無視なのに、嫌われたと思い過ごして一晩中泣いた。",
    "example_cn": "其实人家只是已读没回，我却一个人抱着手机想太多，以为自己被讨厌了，抹着眼泪哭了一整晚。"
  },
  {
    "id": 715,
    "word": "みかた",
    "kanji": "見方",
    "kana": "みかた",
    "pos": "名詞",
    "meaning": "看法，见解，看待事物的角度。观察和理解事物的方法。歪着头端详同一件物品，换个角度看后突然眉头舒展、恍然大悟的姿态。",
    "example_jp": "少し見方を変えるだけで、最悪の失敗も良い経験に思えてくる。",
    "example_cn": "稍微换个角度看待问题，原本低着头痛悔的巨大失败，也能笑着当成一次宝贵的经验。"
  },
  {
    "id": 716,
    "word": "ことさら",
    "kanji": "殊更",
    "kana": "ことさら",
    "pos": "副詞",
    "meaning": "故意，特意；格外。明明不自然却非要那么做，或是程度异常突出。为了掩饰内心的慌乱，故意扯着嗓子大笑，动作浮夸地假装毫不在乎的别扭模样。",
    "example_jp": "彼は自分のミスを隠そうと、殊更大声で笑ってごまかした。",
    "example_cn": "为了掩盖自己的失误，他动作浮夸地四处张望，故意扯着嗓子大笑试图蒙混过关。"
  },
  {
    "id": 717,
    "word": "かけひき",
    "kanji": "駆け引き",
    "kana": "かけひき",
    "pos": "名詞",
    "meaning": "博弈，策略，讨价还价。原指战场上进军与撤退的战术，引申为人际、商业中为谋求自身利益而相互试探。两人脸上挂着虚假的微笑，桌下却死死握紧拳头、暗中较劲的紧张感。",
    "example_jp": "商談の席で、互いの利益を巡るギリギリの駆け引きが続いた。",
    "example_cn": "在谈判桌上，两人为了各自的利益，针锋相对、寸步不让地进行着令人窒息的博弈试探。"
  },
  {
    "id": 718,
    "word": "うけつぐ",
    "kanji": "受け継ぐ",
    "kana": "うけつぐ",
    "pos": "動詞",
    "meaning": "继承，接替。接过前人留下的东西或精神并继续发扬。神情肃穆地从满是老茧的手中双手接过那把布满划痕的老旧工具，眼神中闪烁着沉甸甸的责任感。",
    "example_jp": "祖父から受け継いだ古い時計を、今も大切に腕に巻いている。",
    "example_cn": "我小心翼翼地把从爷爷那里继承来的那块旧手表，视若珍宝地戴在手腕上。"
  },
  {
    "id": 719,
    "word": "ちゅうぼう",
    "kanji": "厨房",
    "kana": "ちゅうぼう",
    "pos": "名詞",
    "meaning": "厨房，后厨。餐厅等地专门用于大规模制作食物的场所。热气蒸腾、刀板声与铁锅碰撞声交织，厨师们满头大汗、踩着湿滑地板急促走动的忙碌战区。",
    "example_jp": "忙しい昼時、厨房では怒号が飛び交い、鉄鍋の音が響いていた。",
    "example_cn": "在忙碌的午餐高峰，后厨里回荡着厨师长的大吼声，铁锅被颠得当当直响，热火朝天。"
  },
  {
    "id": 720,
    "word": "あわい",
    "kanji": "淡い",
    "kana": "あわい",
    "pos": "形容詞",
    "meaning": "颜色浅的；（引申）微弱的，淡淡的（期待/感情等）。由于不浓烈而显得容易消散。像春风中即将飘落的樱花花瓣，或是垂下眼帘时那抹不敢让人察觉的微弱倾慕。",
    "example_jp": "俯きがちに、先輩への淡い恋心をそっと手紙に綴った。",
    "example_cn": "她低垂着眼帘，红着脸颊，将对学长那份微弱而朦胧的爱慕之情悄悄写进了信里。"
  },
  {
    "id": 721,
    "word": "さだまる",
    "kanji": "定まる",
    "kana": "さだまる",
    "pos": "動詞",
    "meaning": "固定，决定，稳定。从摇摆不定的状态最终停留在某个点。剧烈摇晃的罗盘指针渐渐减速，最终稳稳地停留在正北方，眼神也随之变得坚定不再游移的状态。",
    "example_jp": "方針が定まらず、会議室のメンバーは苛立ちを隠せなかった。",
    "example_cn": "方针迟迟定不下来，会议室里的众人都烦躁地敲着桌子，掩饰不住脸上的焦虑。"
  },
  {
    "id": 722,
    "word": "みだれ",
    "kanji": "乱れ",
    "kana": "みだれ",
    "pos": "名詞",
    "meaning": "紊乱，混乱，失去原有秩序。原本整齐规律的状态被打破。被狂风吹得像一团乱麻般的头发，或奔跑后双手撑着膝盖、剧烈而不规律的粗重呼吸声。",
    "example_jp": "激しく走り終えた彼の呼吸には、隠しきれない乱れがあった。",
    "example_cn": "剧烈奔跑停下后，他双手撑着膝盖大口喘息，呼吸彻底乱了节奏，怎么也掩饰不住。"
  },
  {
    "id": 723,
    "word": "くき",
    "kanji": "茎",
    "kana": "くき",
    "pos": "名詞",
    "meaning": "茎，梗。植物支撑叶片和花朵的骨干部位。用手指用力掐断笔挺的绿色枝干时，断口处发出清脆的响声并渗出鲜嫩汁液的触感。",
    "example_jp": "太いひまわりの茎を両手で力いっぱい折り、土に投げ捨てた。",
    "example_cn": "他用双手死死攥住粗壮的向日葵花梗，用力将其折断后狠狠地扔在了泥土上。"
  },
  {
    "id": 724,
    "word": "あて",
    "kanji": "当て",
    "kana": "あて",
    "pos": "名詞",
    "meaning": "目标，指望，期待。心中瞄准的方向或依赖的对象。在黑夜的大雪中冻得发抖，瞪大眼睛四处搜寻哪怕一丝微弱灯光作为避难落脚点的那种渴望与指望。",
    "example_jp": "泊まる当てさえなく、彼は冷たい夜の街を一人で彷徨っていた。",
    "example_cn": "连个能指望投宿的地方都没有，他只能缩着脖子，在寒冷的深夜街头漫无目的地徘徊。"
  },
  {
    "id": 725,
    "word": "ひばち",
    "kanji": "火鉢",
    "kana": "ひばち",
    "pos": "名詞",
    "meaning": "火盆。冬天用来烧炭取暖的传统器具。窗外飘着雪，老爷爷弓着背坐在垫子上，把冻僵的双手拢在微微发红的炭火上方取暖的温馨静谧。",
    "example_jp": "冷え込む夜、祖父は火鉢の前に丸くなり、じっと手を炙っていた。",
    "example_cn": "寒气逼人的深夜，爷爷弓着背缩在火盆前，一动不动地把手伸在炭火上烤着取暖。"
  },
  {
    "id": 726,
    "word": "こしかけ",
    "kanji": "腰掛け",
    "kana": "こしかけ",
    "pos": "名詞",
    "meaning": "凳子，坐处；（引申）暂时的栖身之处（工作等）。只是稍微坐一下的地方，引申为把某份工作当跳板。半个屁股坐在椅子的最外沿，脚尖点地随时准备起身离开的不安定状态。",
    "example_jp": "この仕事はただの腰掛けだと言って、彼は真面目に働かなかった。",
    "example_cn": "他总撇着嘴说这份工作不过是个临时的跳板，每天敷衍了事，从来不肯认真干活。"
  },
  {
    "id": 727,
    "word": "にくたらしい",
    "kanji": "憎たらしい",
    "kana": "にくたらしい",
    "pos": "形容詞",
    "meaning": "令人憎恶的，极其可恨的。让人看着就来气的主观厌恶。看着对方双手抱胸、嚣张跋扈地冷嘲热讽，气得自己咬牙切齿、拳头在口袋里捏得咯咯作响。",
    "example_jp": "あの憎たらしいニヤニヤ笑いを見るたび、無性に腹が立つ。",
    "example_cn": "每次看到他嘴角挂着那抹极其欠揍的冷笑，我都气得捏紧拳头，恨不得一拳挥过去。"
  },
  {
    "id": 728,
    "word": "てがら",
    "kanji": "手柄",
    "kana": "てがら",
    "pos": "名詞",
    "meaning": "功劳，业绩。做出了值得夸耀的成绩或立下的战功。高高挺起胸膛，下巴微扬，满面红光地接受众人起立鼓掌欢呼的光荣高光时刻。",
    "example_jp": "部下の手柄を横取りした上司に、皆が冷たい視線を送っていた。",
    "example_cn": "看着那个厚颜无耻地把部下的功劳据为己有的上司，所有人都在背地里向他投去冰冷的目光。"
  },
  {
    "id": 729,
    "word": "かりに",
    "kanji": "仮に",
    "kana": "かりに",
    "pos": "副詞",
    "meaning": "假设，暂且。虽然明知不是现实，但暂时将它作为前提。单手托腮，眼睛无意识地盯着天花板，在脑海中正兴致勃勃地构建立一个根本不存在的虚幻世界。",
    "example_jp": "仮に宝くじで一億円当たったら、明日すぐに辞表を叩きつける。",
    "example_cn": "我常常手托着腮帮子幻想，假设明天中了一亿大奖，我绝对会立刻把辞职信狠狠拍在老板桌上。"
  },
  {
    "id": 730,
    "word": "すう〜",
    "kanji": "数〜",
    "kana": "すう〜",
    "pos": "接頭辞",
    "meaning": "几...，数个...。接在量词前，表示不确定的、少量的大约数字。无奈地摊开双手，皱着眉头向对方比划着“只有这么寥寥几个”或“还得熬好几天”的含糊状态。",
    "example_jp": "遭難から数日後、疲れ果てた彼らはついに救助隊に発見された。",
    "example_cn": "遇险几天后，衣衫褴褛、疲惫不堪的他们终于被搜救队找到，脱力地瘫倒在地。"
  },
  {
    "id": 731,
    "word": "ものわかれ",
    "kanji": "物別れ",
    "kana": "ものわかれ",
    "pos": "名詞",
    "meaning": "谈判破裂，不欢而散。双方都不肯让步，未能达成一致就终止。会议室里两人同时猛地站起身，狠狠推开身后的椅子，铁青着脸朝相反方向大步离开的僵硬画面。",
    "example_jp": "両者の主張は平行線をたどり、交渉は完全に物別れに終わった。",
    "example_cn": "双方固执己见互不让步，他们铁青着脸各自推开椅子离席，谈判彻底以破裂告终。"
  },
  {
    "id": 732,
    "word": "あまあし",
    "kanji": "雨脚",
    "kana": "あまあし",
    "pos": "名詞",
    "meaning": "雨势，雨丝的轨迹。雨水密集落下时，视线中能清晰看到的连成白线的移动轨迹。站在屋檐下，看着狂风裹挟着白茫茫的密集雨丝像鞭子一样斜打在地面溅起水花。",
    "example_jp": "次第に雨脚が強まり、視界が真っ白になるほど激しく降り出した。",
    "example_cn": "雨势眼看着越来越猛，密集的雨丝连成一片白幕，下得连眼前的路都彻底看不清了。"
  },
  {
    "id": 733,
    "word": "きまりもんく",
    "kanji": "決まり文句",
    "kana": "きまりもんく",
    "pos": "名詞",
    "meaning": "客套话，陈词滥调。遇到固定情况就会拿出来的毫无新意的说辞。翻着白眼在心里暗叹，听着对方像背说明书一样毫无感情地念着同一套敷衍的套话的无聊感。",
    "example_jp": "「前向きに検討します」は、断る時の政治家の決まり文句だ。",
    "example_cn": "“我们会积极探讨的”，这不过是那些政客微笑着用来敷衍和拒绝别人的陈词滥调罢了。"
  },
  {
    "id": 734,
    "word": "とびいり",
    "kanji": "飛び入り",
    "kana": "とびいり",
    "pos": "名詞",
    "meaning": "临时参加，中途加入。事先没有报名或在计划内，突然加入正在进行的活动中。在喧闹的人群外围突然兴奋地举起手高喊，强行挤进舞台要求一起参与的热闹突兀感。",
    "example_jp": "彼は見物客の群れから飛び入りで参加し、祭りを盛り上げた。",
    "example_cn": "他兴奋地从围观的人群中临时挤进队伍，跟着大家一起大声吆喝，把祭典的气氛推向了高潮。"
  },
  {
    "id": 735,
    "word": "おつ",
    "kanji": "乙",
    "kana": "おつ",
    "pos": "名詞/形容動詞",
    "meaning": "别致，有独特的风味；第二位（甲乙）。不是主流的奢华，而是一种非同寻常的韵味。雨天一个人坐在陈旧的书店屋檐下喝着略苦的粗茶，微微眯起眼睛静静享受的姿态。",
    "example_jp": "雨音を聞きながら、古びた縁側で飲む熱いお茶もなかなか乙だ。",
    "example_cn": "坐在老旧的木制走廊上，一边听着淅沥沥的雨声，一边捧着热茶抿上一口，这也真是别有一番风味。"
  },
  {
    "id": 736,
    "word": "めぐむ",
    "kanji": "恵む",
    "kana": "めぐむ",
    "pos": "動詞",
    "meaning": "施舍，赐予。居高临下地出于同情给予弱者财物。站在街边以怜悯的眼神打量着衣衫褴褛的乞丐，随手从口袋里摸出几枚硬币当啷一声丢进破碗里的动作。",
    "example_jp": "路上に座り込む男に、小銭を恵んで足早に立ち去った。",
    "example_cn": "我掏出几枚硬币随手丢给那个瘫坐在路边的男人当做施舍，然后低着头快步离开了。"
  },
  {
    "id": 737,
    "word": "もちさる",
    "kanji": "持ち去る",
    "kana": "もちさる",
    "pos": "動詞",
    "meaning": "拿走，带走（常带有未经允许的语感）。把原本放置在那里的东西物理上转移。趁着众人不备，做贼心虚地把桌上的钱包一把抓进大衣口袋，然后头也不回地快步开溜的动作。",
    "example_jp": "少し目を離した隙に、鞄ごと誰かに持ち去られてしまった。",
    "example_cn": "就我转头没盯紧的那么一小会儿功夫，包居然就被人连锅端着悄悄顺走拿跑了。"
  },
  {
    "id": 738,
    "word": "けむる",
    "kanji": "煙る",
    "kana": "けむる",
    "pos": "動詞",
    "meaning": "冒烟；被烟雾/细雨笼罩变得模糊。物理视线因水汽或烟雾阻挡而看不清。站在山坡上往下望，远处的村落被清晨浓重的白雾厚厚地包裹着，只剩下若隐若现的朦胧轮廓。",
    "example_jp": "春の細雨に煙る山並みを、窓辺からじっと眺めていた。",
    "example_cn": "我托着腮趴在窗边，静静凝望着远方那片被春日绵绵细雨笼罩得朦朦胧胧的连绵群山。"
  },
  {
    "id": 739,
    "word": "てあつい",
    "kanji": "手厚い",
    "kana": "てあつい",
    "pos": "形容詞",
    "meaning": "殷勤的，优厚的，照顾周到的。毫不吝啬时间与成本地给予热情对待。一排人九十度深深鞠躬，双手递上热毛巾和茶水，脸上堆满真诚得让人有些受宠若惊的极致服务姿态。",
    "example_jp": "見知らぬ村で倒れた彼は、村人たちから手厚い看病を受けた。",
    "example_cn": "倒在这个陌生村子里的他，竟被村民们无微不至地悉心照料着，拉回了这条命。"
  },
  {
    "id": 740,
    "word": "やせがまん",
    "kanji": "痩せ我慢",
    "kana": "やせがまん",
    "pos": "名詞",
    "meaning": "死撑，打肿脸充胖子。明明很痛苦或难以承受，为了虚荣心或固执硬挺着。在寒风中冻得牙齿都在打颤，却依然挺直腰板、昂着头死咬着牙说“我一点都不冷”的逞强模样。",
    "example_jp": "寒空の下、コートも着ずに痩せ我慢して震えている。",
    "example_cn": "大冷天的寒风里连件大衣都不穿，他冻得浑身发抖，却还在那打肿脸充胖子死撑着说不冷。"
  },
  {
    "id": 741,
    "word": "こま",
    "kanji": "駒",
    "kana": "こま",
    "pos": "名詞",
    "meaning": "棋子；（引申）被利用的人，工具。原指将棋的棋子，引申为毫无自主权、任人摆布的底层人员。被人冷酷地用指尖捏住，随意丢弃在巨大利益棋盘上的无奈感与悲哀。",
    "example_jp": "彼は組織の捨て駒として、最も危険な任務に送り込まれた。",
    "example_cn": "作为组织里一枚用完即弃的过河卒，他面无表情地被推向了最危险的致命任务。"
  },
  {
    "id": 742,
    "word": "あきなう",
    "kanji": "商う",
    "kana": "あきなう",
    "pos": "動詞",
    "meaning": "经商，买卖，经营。从事买进卖出的商业活动。站在堆满杂货的拥挤柜台后，一边用粗糙的手指熟练地拨动着木算盘，一边扯着嗓子大笑着和街坊邻居讨价还价的充满烟火气的画面。",
    "example_jp": "祖父の代から、この小さな店で海産物を商ってきた。",
    "example_cn": "从爷爷那辈开始，我们一家人就在这家窄小的破店里，靠着吆喝买卖海鲜维持生计。"
  },
  {
    "id": 743,
    "word": "すれすれ",
    "kanji": "擦れ擦れ",
    "kana": "すれすれ",
    "pos": "名詞/形容動詞",
    "meaning": "擦边，险些，几乎挨上。差一点点就要碰到或越过物理界限、及格线。飞驰的汽车后视镜几乎贴着行人的衣服下摆擦过去的惊险瞬间，吓得人猛地缩紧脖子、倒吸一口凉气。",
    "example_jp": "猛スピードの車が、私の鼻先すれすれを通り抜けていった。",
    "example_cn": "一辆狂飙的汽车几乎贴着我的鼻尖惊险地擦了过去，吓得我猛地屏住呼吸，出了一身冷汗。"
  },
  {
    "id": 744,
    "word": "たえる",
    "kanji": "耐える",
    "kana": "たえる",
    "pos": "動詞",
    "meaning": "忍受，经受得住。承受着外界巨大的物理压力或内心的痛苦。紧闭双眼，双手死死攥住床单，哪怕额头冒出豆大的冷汗、咬破嘴唇也绝不发出一声呻吟的隐忍状态。",
    "example_jp": "傷の激しい痛みに耐えながら、彼は無言で唇を噛み締めていた。",
    "example_cn": "强忍着伤口撕裂般的剧痛，他双手死死攥着拳头，一言不发地将嘴唇都咬出了血。"
  },
  {
    "id": 745,
    "word": "せいぞろい",
    "kanji": "勢ぞろい",
    "kana": "せいぞろい",
    "pos": "名詞",
    "meaning": "齐聚一堂，全员集合。相关的人物或事物气势浩荡地一个不落地全数登场。重要人物们穿着笔挺的黑色西装，表情肃穆地一字排开站在大厅中央，气场全开的震撼画面。",
    "example_jp": "記者会見には、事件に関わる大物たちが勢ぞろいして座っていた。",
    "example_cn": "新闻发布会上，与案件相关的大人物们竟破天荒地全员齐聚，面色凝重地并排坐在了一起。"
  },
  {
    "id": 746,
    "word": "いまだに",
    "kanji": "未だに",
    "kana": "いまだに",
    "pos": "副詞",
    "meaning": "至今仍然（多伴随不耐烦、遗憾或不可思议的消极情绪）。时间已经过去很久，但某种停滞的状态依旧死死地没有改变。看着十年前用过的旧物，一边叹气摇头，一边感叹“居然还是老样子”的无奈。",
    "example_jp": "十年も前に別れた彼女の顔を、未だに忘れられず酒を飲む。",
    "example_cn": "都分手整整十年了，我至今还是忘不掉她的脸，只能一杯接一杯地猛灌着闷酒。"
  },
  {
    "id": 747,
    "word": "との",
    "kanji": "殿",
    "kana": "との",
    "pos": "名詞",
    "meaning": "主公，老爷。古代对拥有高地位权力者的绝对尊称。武士单膝重重跪地，深深埋下头颅，对坐在屏风前高位上的人表达绝对臣服与敬畏的威严场景。",
    "example_jp": "家臣たちは畳に平伏し、「殿、ご決断を」と声を震わせた。",
    "example_cn": "家臣们齐刷刷地深深跪伏在榻榻米上，声音发颤地恳求道：“主公，请您尽早决断啊！”"
  },
  {
    "id": 748,
    "word": "いいそこなう",
    "kanji": "言い損なう",
    "kana": "いいそこなう",
    "pos": "動詞",
    "meaning": "说错，漏说；没能开口。本该说的话因为紧张或时机不对咽回了肚子里，或者一出口就表达错了意思。看着对方离去的背影，懊恼地用力拍着大腿，后悔刚才错失表白良机的沮丧模样。",
    "example_jp": "肝心な一言を言い損なって、彼女は電車に乗ってしまった。",
    "example_cn": "最关键的那句挽留偏偏卡在喉咙没说出口，我只能呆站在原地，眼睁睁看着她上了电车。"
  },
  {
    "id": 749,
    "word": "あてる",
    "kanji": "充てる",
    "kana": "あてる",
    "pos": "動詞",
    "meaning": "充当，拨给，分配。把手头有限的资源（时间、金钱）特意分配给某个重要的用途。低着头，小心翼翼地把桌上仅有的几张皱巴巴的钞票仔细叠好，塞进写着“房租”的信封里的精打细算。",
    "example_jp": "彼は乏しい給料の半分を、妹の学費に充てて仕送りしている。",
    "example_cn": "他把少得可怜的工资硬生生劈出一半，全用来充当妹妹的学费，按月寄回了老家。"
  },
  {
    "id": 750,
    "word": "いえで",
    "kanji": "家出",
    "kana": "いえで",
    "pos": "名詞/動詞",
    "meaning": "离家出走。因为激烈的冲突或深层的不满，决绝地逃离家庭的束缚。深夜里背着鼓鼓囊囊的双肩包，轻手轻脚地扭开大门，红着眼睛头也不回地跑进黑暗街道的倔强背影。",
    "example_jp": "父親と激しく口論した夜、彼はカバン一つで家出をした。",
    "example_cn": "和父亲爆发了剧烈的争吵后，那天深夜，他红着眼眶只随便抓起一个包就摔门离家出走了。"
  },
  {
    "id": 751,
    "word": "なりたつ",
    "kanji": "成り立つ",
    "kana": "なりたつ",
    "pos": "动词",
    "meaning": "成立、构成（由多个要素组合而成）；达成（交涉等得出结果）；维持（经济或业务得以运转）。核心语感：某事物凭借一定的要素或条件，得以成型、存在并发挥机能。",
    "example_jp": "会費だけでこの組織を維持するのは、もはや成り立たない。",
    "example_cn": "仅靠会费来维持这个组织，已经无法成立了。"
  },
  {
    "id": 752,
    "word": "よふけ",
    "kanji": "夜更け",
    "kana": "よふけ",
    "pos": "名词",
    "meaning": "深夜、夜深。指夜已经很深的时间段。与客观中性的「深夜（しんや）」相比，该词更带有日常的体感温度与文学情感色彩，侧重于时间流逝带来的“夜深沉”的静态感。",
    "example_jp": "夜更けに突然電話が鳴り、胸が嫌な音を立てた。",
    "example_cn": "深夜里突然响起了电话声，心脏发出了讨厌的声音（感到不安）。"
  },
  {
    "id": 753,
    "word": "うれえる",
    "kanji": "憂える",
    "kana": "うれえる",
    "pos": "动词",
    "meaning": "忧虑、担忧。对未来的不良事态、社会现状等感到不安和焦心。带有较强的书面语及严肃色彩，表达的是宏观或深切的叹息与担忧。",
    "example_jp": "彼は国の将来を深く憂えて、政治家になる決意をした。",
    "example_cn": "他深深忧虑国家的未来，决心成为一名政治家。"
  },
  {
    "id": 754,
    "word": "こころがける",
    "kanji": "心がける",
    "kana": "こころがける",
    "pos": "动词",
    "meaning": "留心、用心、注意。将某项原则或事情放在心上，并在日常行动中持续努力去实践。核心在于“主观上积极且持续的意识倾向”。",
    "example_jp": "普段から、十分な睡眠と栄養をとるよう心がけています。",
    "example_cn": "我平时就留心要摄取充足的睡眠和营养。"
  },
  {
    "id": 755,
    "word": "のりこむ",
    "kanji": "乗り込む",
    "kana": "のりこむ",
    "pos": "动词",
    "meaning": "乘上、坐进（交通工具）； 带着气势或目的进入（特定场所或敌阵）。核心语感：从外部突破进入内部，且往往带有积极的动作性或明确的意图。",
    "example_jp": "刑事たちは令状を手に、容疑者の自宅へと乗り込んだ。",
    "example_cn": "刑警们手里拿着搜查令，进入了嫌疑人的家。"
  },
  {
    "id": 756,
    "word": "くみこむ",
    "kanji": "組み込む",
    "kana": "くみこむ",
    "pos": "动词",
    "meaning": "编入、纳入、嵌入。将某个要素、计划或系统放入整体之中，使其成为整体运行架构的一部分。核心语感：部分与整体系统的无缝结合。",
    "example_jp": "その新しい機能は、次回のアップデートに組み込まれる予定だ。",
    "example_cn": "那个新功能，预计将被纳入下次的更新中。"
  },
  {
    "id": 757,
    "word": "ひょうへん",
    "kanji": "豹変",
    "kana": "ひょうへん",
    "pos": "名词/动词",
    "meaning": "突然改变态度或性质（多指往坏的方向）。语源出自《易经》“君子豹变”（原指除旧布新的善变），但在现代日语中引申并固定为“态度、言行突然发生急剧且剧烈的转变”。",
    "example_jp": "彼は酒を飲むと態度が豹変し、暴言を吐くようになる。",
    "example_cn": "他一喝酒态度就会突然改变，变得口出狂言。"
  },
  {
    "id": 758,
    "word": "ひのけ",
    "kanji": "火の気",
    "kana": "ひのけ",
    "pos": "名词",
    "meaning": "烟火气、火源、取暖的火气。指能感觉到火的存在及其带来的温暖的状态。常用于否定形式「火の気がない」，极力渲染没有取暖设备、极其寒冷凄清的环境。",
    "example_jp": "火の気のない部屋は、外よりも冷え込んでいるように感じられた。",
    "example_cn": "没有生火的房间，感觉比外面还要寒冷。"
  },
  {
    "id": 759,
    "word": "しきたり",
    "kanji": "仕来たり",
    "kana": "しきたり",
    "pos": "名词",
    "meaning": "规矩、成规、惯例。自古以来传下来并在日常或特定共同体中被默认遵守的习惯。相比明文的「規則」，更强调历史的沉淀和不可违抗的约定俗成感。",
    "example_jp": "その村には、よそ者には理解しがたい古い仕来たりが残っていた。",
    "example_cn": "那个村子里，保留着外人难以理解的古老规矩。"
  },
  {
    "id": 760,
    "word": "みもと",
    "kanji": "身元",
    "kana": "みもと",
    "pos": "名词",
    "meaning": "身份、来历、身世。指个人的出生、经历、社会关系等基本背景信息。常用于客观确认或调查一个人的社会实体属性（如：身元確認）。",
    "example_jp": "警察は、現場で発見された遺体の身元確認を急いでいる。",
    "example_cn": "警察正急于确认在现场发现的遗体的身份。"
  },
  {
    "id": 761,
    "word": "とりにく",
    "kanji": "鳥肉",
    "kana": "とりにく",
    "pos": "名词",
    "meaning": "鸡肉、禽肉。通常特指作为食材的鸡肉（与「鶏肉」同义）。核心仅仅表示供食用的家禽的肉。",
    "example_jp": "彼女は豚肉よりも、脂肪の少ない鳥肉を好んで食べる。",
    "example_cn": "相比猪肉，她更喜欢吃脂肪较少的鸡肉。"
  },
  {
    "id": 762,
    "word": "いたむ",
    "kanji": "悼む",
    "kana": "いたむ",
    "pos": "动词",
    "meaning": "哀悼、悼念。对人的逝去感到悲伤，并在内心或仪式上表达哀惋之情。专用于对死者的追思，带有高度庄重、沉痛和虔诚的情感色彩。",
    "example_jp": "事故の犠牲者を悼み、参列者全員で黙祷を捧げた。",
    "example_cn": "为了哀悼事故的牺牲者，全体参加者献上了默哀。"
  },
  {
    "id": 763,
    "word": "おしえご",
    "kanji": "教え子",
    "kana": "おしえご",
    "pos": "名词",
    "meaning": "学生、弟子。特指自己曾经教导过的学生。相比客观的「生徒」，该词带有强烈的亲切感、归属感和师生情谊，强调“接受过我（某人）教导的人”。",
    "example_jp": "退職して十年経つが、今でも教え子たちから年賀状が届く。",
    "example_cn": "虽然退休已经过去十年了，现在依然会收到学生们寄来的贺年卡。"
  },
  {
    "id": 764,
    "word": "ふいうち",
    "kanji": "不意打ち",
    "kana": "ふいうち",
    "pos": "名词",
    "meaning": "突然袭击、出其不意。在对方没有防备、未曾预料的时候发动物理攻击或采取心理行动。核心在于“单方面打破对方的预期防线”。",
    "example_jp": "後ろからの不意打ちを食らって、彼はその場に倒れ込んだ。",
    "example_cn": "挨了来自背后的突然袭击，他倒在了当场。"
  },
  {
    "id": 765,
    "word": "みぐるしい",
    "kanji": "見苦しい",
    "kana": "みぐるしい",
    "pos": "形容词",
    "meaning": "难看的、丢脸的、不体面的。指外表、态度或行为令人看着不舒服、有失体统。常用于严厉批评逃避责任、挣扎求饶等道德上不光彩的言行。",
    "example_jp": "自分の失敗を部下のせいにするとは、見苦しい言い訳だ。",
    "example_cn": "把自己的失败怪罪给部下，真是难看的借口。"
  },
  {
    "id": 766,
    "word": "はやまる",
    "kanji": "早まる",
    "kana": "はやまる",
    "pos": "动词",
    "meaning": "提前（时间、日期比预定的早）；轻举妄动、慌张做错事。引申机制：由“动作在时间上过早”，引申出“在未深思熟虑前就慌忙采取行动，从而导致无法挽回的糟糕结果”。",
    "example_jp": "どうか早まって、命を絶つようなことだけはしないでください。",
    "example_cn": "请千万不要轻举妄动，做出绝命（自尽）之类的事。"
  },
  {
    "id": 767,
    "word": "かさばる",
    "kanji": "嵩張る",
    "kana": "かさばる",
    "pos": "动词",
    "meaning": "体积大、占地方。重量不一定重，但因物理体积庞大导致难以收纳或携带。核心语感是空间被不必要地占据而产生的“累赘感”。",
    "example_jp": "冬服はスーツケースの中でどうしても嵩張ってしまう。",
    "example_cn": "冬装在行李箱里无论如何都会很占地方。"
  },
  {
    "id": 768,
    "word": "かんぐる",
    "kanji": "勘ぐる",
    "kana": "かんぐる",
    "pos": "动词",
    "meaning": "猜疑、瞎猜。基于直觉或偏见，过度往坏的方向去推测别人的意图或事情的内幕。带有主观多疑且不信任对方的负面色彩。",
    "example_jp": "彼の親切な態度には何か裏があるのではないかと勘ぐってしまった。",
    "example_cn": "我不禁猜疑他亲切的态度里是不是有什么内情。"
  },
  {
    "id": 769,
    "word": "しるす",
    "kanji": "記す",
    "kana": "しるす",
    "pos": "动词",
    "meaning": "写下、记录；铭记。将文字留在纸上或将事物铭刻在心。属于书面语，比一般的「書く」更显郑重，带有“为了长久留存而郑重记录”的意图。",
    "example_jp": "この手帳には、彼が旅先で出会った人々の名前が記されている。",
    "example_cn": "这本手册上，记录着他在旅途中遇到的人们的名字。"
  },
  {
    "id": 770,
    "word": "したっぱ",
    "kanji": "下っ端",
    "kana": "したっぱ",
    "pos": "名词",
    "meaning": "底层人员、下级、喽啰。在金字塔型的组织或团体中处于最低地位的人。常带有自谦或轻视的感情色彩，暗示缺乏权力和话语权。",
    "example_jp": "組織の下っ端である彼に、重要な決定権など与えられていない。",
    "example_cn": "作为组织的底层人员的他，并没有被赋予重要的决定权等。"
  },
  {
    "id": 771,
    "word": "ちんさげ",
    "kanji": "賃下げ",
    "kana": "ちんさげ",
    "pos": "名词",
    "meaning": "降薪、减薪。降低基本工资或报酬的标准。是一个纯粹的经济及劳资关系用语。",
    "example_jp": "業績悪化を理由に、会社は全社員の賃下げを決定した。",
    "example_cn": "以业绩恶化为由，公司决定对全体员工降薪。"
  },
  {
    "id": 772,
    "word": "かんにんぶくろ",
    "kanji": "堪忍袋",
    "kana": "かんにんぶくろ",
    "pos": "名词",
    "meaning": "忍耐的限度。原指用来装载“忍耐”的假想袋子。最常搭配「緒が切れる（带子断了）」，生动比喻愤怒积累到极点，撑破了忍耐的极限而最终爆发。",
    "example_jp": "度重なる彼の遅刻に、ついに私の堪忍袋の緒が切れた。",
    "example_cn": "对于他屡次的迟到，我终于到了忍耐的极限（忍耐的袋子断了线）。"
  },
  {
    "id": 773,
    "word": "わがはい",
    "kanji": "我が輩",
    "kana": "わがはい",
    "pos": "代词",
    "meaning": "我、吾辈（第一人称代词）。旧时男性的自称，多对外展露出尊大、傲慢的态度。在现代日语中已非日常用语，多用于带文学典故（如夏目漱石作品）的戏谑或复古表达。",
    "example_jp": "吾輩は猫である。名前はまだ無い。",
    "example_cn": "吾辈是猫。名字还没有。"
  },
  {
    "id": 774,
    "word": "かけら",
    "kanji": "欠片",
    "kana": "かけら",
    "pos": "名词",
    "meaning": "碎片；（比喻）微量、一丝。原本完整的物体破损后掉落的残骸。用于抽象事物时（如「反省の欠片」），极力强调某物“连最微小的一丁点痕迹都没有”。",
    "example_jp": "彼の言い訳には、反省の欠片すら見当たらなかった。",
    "example_cn": "在他的借口中，连一丝反省的碎片（痕迹）都找不到。"
  },
  {
    "id": 775,
    "word": "かたてま",
    "kanji": "片手間",
    "kana": "かたてま",
    "pos": "名词",
    "meaning": "业余时间、空闲时。在从事主业的间隙，顺便做另一件事的状态。语感上明确暗示了“并非倾注全力，只利用剩余精力兼顾”。",
    "example_jp": "彼女は家事の片手間に、翻訳の仕事をしている。",
    "example_cn": "她在做家务的空闲时间里，做着翻译的工作。"
  },
  {
    "id": 776,
    "word": "したてる",
    "kanji": "仕立てる",
    "kana": "したてる",
    "pos": "动词",
    "meaning": "缝制（衣服）；培养、训练成；假装成、捏造成。核心语感：通过人为的加工、包装或刻意安排，将原材料（或人）制作成符合特定目的的成品（或角色）。",
    "example_jp": "彼は無実の友人を、事件の犯人に仕立て上げた。",
    "example_cn": "他把无辜的朋友，捏造成了案件的犯人。"
  },
  {
    "id": 777,
    "word": "めんじる",
    "kanji": "免じる",
    "kana": "めんじる",
    "pos": "动词",
    "meaning": "免除（职务或责任）。看在……的面子上原谅。核心机制：因为考虑到某项功劳、面子或特殊因素，从而破例豁免其原本应受的惩处或义务。",
    "example_jp": "彼がこれまで会社に尽くしてきた功績に免じて、今回のミスは不問に付す。",
    "example_cn": "看在他至今为止为公司尽力的功绩的份上，这次的失误就不予追究了。"
  },
  {
    "id": 778,
    "word": "ちゃのゆ",
    "kanji": "茶の湯",
    "kana": "ちゃのゆ",
    "pos": "名词",
    "meaning": "茶道。按照特定礼仪烧水、点茶、品茶的日本传统艺术。与「茶道」意义相近，但「茶の湯」在语感上更侧重于点茶的实际行为仪式及其蕴含的古典风雅趣味。",
    "example_jp": "祖母は若い頃から茶の湯を嗜んでおり、その所作は非常に美しい。",
    "example_cn": "祖母从年轻时就爱好茶道，她的举止非常优美。"
  },
  {
    "id": 779,
    "word": "げん〜",
    "kanji": "現〜",
    "kana": "げん〜",
    "pos": "接头词",
    "meaning": "现任的、现在的。作为前缀接在名词（通常是职位或系统名称）前，客观表示某人或某物目前正处于该职位或状态。",
    "example_jp": "現社長の経営方針に対して、一部の役員から不満の声が上がっている。",
    "example_cn": "对于现任社长的经营方针，部分董事发出了不满的声音。"
  },
  {
    "id": 780,
    "word": "ちゃかす",
    "kanji": "茶化す",
    "kana": "ちゃかす",
    "pos": "动词",
    "meaning": "嘲弄、开玩笑、把……当儿戏。用戏谑、轻浮的态度去对待本应严肃处理的话题。核心在于“通过玩笑消解或回避事物的严肃性”。",
    "example_jp": "真面目に話しているのだから、冗談で茶化さないでほしい。",
    "example_cn": "我正在认真说话，希望你不要用玩笑来敷衍嘲弄。"
  },
  {
    "id": 781,
    "word": "なりゆき",
    "kanji": "成り行き",
    "kana": "なりゆき",
    "pos": "名词",
    "meaning": "事情发展的经过、结局、趋势。事物随着内在逻辑和时间推移而自然演变成的状况。常暗示人为无法完全控制，包含“顺其自然”的语感。",
    "example_jp": "こればかりは、今後の成り行きを見守るしかないだろう。",
    "example_cn": "唯独这件事，恐怕只能观望今后的发展趋势了。"
  },
  {
    "id": 782,
    "word": "みはる",
    "kanji": "見張る",
    "kana": "みはる",
    "pos": "动词",
    "meaning": "监视、看守。睁大眼睛看。核心语感：目光高度集中于一点，不转移视线地进行警戒或表达极度的惊讶（目を見張る）。",
    "example_jp": "警備員は、不審者が侵入しないよう入り口を厳重に見張っている。",
    "example_cn": "保安为了防止可疑人员侵入，在入口处严密看守着。"
  },
  {
    "id": 783,
    "word": "あともどり",
    "kanji": "後戻り",
    "kana": "あともどり",
    "pos": "名词/动词",
    "meaning": "倒退、退回。指已经向前推进的事物、状态或路程，又逆向返回到原来的状态。既可指物理空间的折返，也多指进度或事态的倒退。",
    "example_jp": "ここまでプロジェクトが進んだ以上、もはや後戻りはできない。",
    "example_cn": "既然项目已经进展到这一步，已经无法倒退了。"
  },
  {
    "id": 784,
    "word": "むりじい",
    "kanji": "無理強い",
    "kana": "むりじい",
    "pos": "名词/动词",
    "meaning": "强迫、勉强别人。无视对方自身的意愿，利用权力、人情等压力强行让其做某事。带有剥夺他人选择权的强烈负面属性。",
    "example_jp": "参加したくない人にまで、無理強いするのは良くないと思う。",
    "example_cn": "我认为连不想参加的人也去强迫，是不好的。"
  },
  {
    "id": 785,
    "word": "しくみ",
    "kanji": "仕組み",
    "kana": "しくみ",
    "pos": "名词",
    "meaning": "结构、机制、运作原理。事物内部各个部分为了发挥整体功能而巧妙组合在一起的系统逻辑。侧重于内在的“如何起作用”的动态结构，而非静态外观。",
    "example_jp": "コンピューターがデータを処理する仕組みについて、初心者向けに解説する。",
    "example_cn": "关于计算机处理数据的机制，面向初学者进行解说。"
  },
  {
    "id": 786,
    "word": "おもてむき",
    "kanji": "表向き",
    "kana": "おもてむき",
    "pos": "名词/副词",
    "meaning": "表面上、公开场合。作为建前（场面话）对外宣称或呈现出的名义状态。该词的出现必然暗示着与内部真实情况（内実/裏）存在差异与割裂。",
    "example_jp": "表向きは円満な退社ということになっているが、実際は解雇だ。",
    "example_cn": "表面上算是圆满离职，但实际上是被解雇了。"
  },
  {
    "id": 787,
    "word": "みつもる",
    "kanji": "見積もる",
    "kana": "みつもる",
    "pos": "动词",
    "meaning": "估算、估计。预先在头脑中或书面上计算出所需金额、时间、规模等数值。也引申为对某事态发展或某人能力的综合预估。",
    "example_jp": "修理にかかる費用を大ざっぱに見積もってもらった。",
    "example_cn": "让人粗略地估算了一下修理所需的费用。"
  },
  {
    "id": 788,
    "word": "きずつく",
    "kanji": "傷つく",
    "kana": "きずつく",
    "pos": "动词",
    "meaning": "受伤、受损。本义是身体表面或物品受到物理破坏。在现代语境中，极高频用于内心、自尊、名誉等精神层面遭受打击而产生了感情缺损。",
    "example_jp": "彼の何気ない一言に、私は深く傷ついた。",
    "example_cn": "因为他不经意的一句话，我深深地受伤了。"
  },
  {
    "id": 789,
    "word": "きわまる",
    "kanji": "極まる",
    "kana": "きわまる",
    "pos": "动词",
    "meaning": "达到极限、极其。表示某事物或状态发展到了无以复加的顶点，或者走到了穷途末路的状态。常以后缀「～極まる」形式出现，多接续带有负面或极端属性的词。",
    "example_jp": "何の連絡もなしに約束を破るとは、無責任極まる態度だ。",
    "example_cn": "没有任何联系就违背约定，真是极其不负责任的态度。"
  },
  {
    "id": 790,
    "word": "ふえ",
    "kanji": "笛",
    "kana": "ふえ",
    "pos": "名词",
    "meaning": "笛子、哨子。通过吹气使其产生空气振动从而发声的乐器或发声器具的总称。",
    "example_jp": "審判が試合終了の笛を高く鳴らした。",
    "example_cn": "裁判高高地鸣响了比赛结束的哨声。"
  },
  {
    "id": 791,
    "word": "すべ",
    "kanji": "術",
    "kana": "すべ",
    "pos": "名词",
    "meaning": "方法、手段、应对的办法。指为了解决问题或达成目标而采取的途径。极常用于否定形式「～する術がない」，刻画出完全无能为力、束手无策的绝望感。",
    "example_jp": "猛威を振るう自然災害を前にして、人間はなす術がない。",
    "example_cn": "在肆虐的自然灾害面前，人类毫无应对的办法。"
  },
  {
    "id": 792,
    "word": "やすらぎ",
    "kanji": "安らぎ",
    "kana": "やすらぎ",
    "pos": "名词",
    "meaning": "安宁、平静、心灵的慰藉。脱离了烦恼、压力或紧张感，身心处于被治愈和彻底放松的安稳状态。侧重于情绪价值层面的平和与舒缓。",
    "example_jp": "家族と過ごす休日のひとときが、私にとって最大の安らぎだ。",
    "example_cn": "和家人共度的假日时光，对我来说是最大的安宁。"
  },
  {
    "id": 793,
    "word": "きゅうきょ",
    "kanji": "急遽",
    "kana": "きゅうきょ",
    "pos": "副词",
    "meaning": "仓促、急忙、突然。由于突发事件的介入，不得不临时且慌忙地改变原定计划或立即采取行动。核心语感是“事发毫无预兆”叠加“行动手忙脚乱”。",
    "example_jp": "主演俳優が怪我をしたため、急遽代役を立てることになった。",
    "example_cn": "由于主演演员受伤，临时决定仓促安排替身。"
  },
  {
    "id": 794,
    "word": "まさしく",
    "kanji": "正しく",
    "kana": "まさしく",
    "pos": "副词",
    "meaning": "的确、正是、毫无疑问。说话人基于确凿的证据或直觉，用带有极强确信的语气，断定事物完全符合某个结论。强调排除一切误差的绝对肯定感。",
    "example_jp": "この筆跡は、正しく彼本人のものに違いない。",
    "example_cn": "这个笔迹，的的确确是他本人的没错。"
  },
  {
    "id": 795,
    "word": "はらごしらえ",
    "kanji": "腹ごしらえ",
    "kana": "はらごしらえ",
    "pos": "名词/动词",
    "meaning": "垫肚子、吃点东西充饥。在正式开始艰苦工作或重大行动之前，为了储备体力而提前进食。带有强烈的预先准备色彩与实用主义语感。",
    "example_jp": "登山を始める前に、麓の食堂でしっかりと腹ごしらえをした。",
    "example_cn": "在开始登山之前，在山脚下的食堂好好地垫了肚子。"
  },
  {
    "id": 796,
    "word": "おとろえる",
    "kanji": "衰える",
    "kana": "おとろえる",
    "pos": "动词",
    "meaning": "衰退、衰弱。体力、精力、势头或某项机能失去原有的活力，变得大不如前。核心语感是刻画事物从巅峰状态逐渐向下的单向滑落过程。",
    "example_jp": "年を取るにつれて、次第に足腰の力が衰えてきた。",
    "example_cn": "随着年龄的增长，腿脚的力量渐渐衰退了。"
  },
  {
    "id": 797,
    "word": "とびきり",
    "kanji": "飛び切り",
    "kana": "とびきり",
    "pos": "副词/名词",
    "meaning": "出众、格外、极好。程度远远超出了普通或平均水平。常用来修饰品质最好或程度最高的正面事物，带有积极、称赞乃至惊喜的感情色彩。",
    "example_jp": "彼女の誕生日に、飛び切り美味しいワインを開けた。",
    "example_cn": "在她的生日那天，开了一瓶格外美味的葡萄酒。"
  },
  {
    "id": 798,
    "word": "あまやどり",
    "kanji": "雨宿り",
    "kana": "あまやどり",
    "pos": "名词/动词",
    "meaning": "避雨。在室外遭遇降雨时，为了不被淋湿而临时躲在屋檐下、建筑物内等遮蔽处，静待雨停的临时行为。",
    "example_jp": "突然の土砂降りに見舞われ、近くのカフェで雨宿りをした。",
    "example_cn": "遭逢突如其来的倾盆大雨，在附近的咖啡馆避了雨。"
  },
  {
    "id": 799,
    "word": "すみこむ",
    "kanji": "住み込む",
    "kana": "すみこむ",
    "pos": "动词",
    "meaning": "住进（工作或学习地点）。在受雇或求学的场所长期住宿，边生活边从事工作或修行。强调生活起居场所和劳动、学习阵地的物理重合。",
    "example_jp": "彼は弟子として、長年その師匠の家に住み込んで修行した。",
    "example_cn": "他作为弟子，长年住进那位师傅的家里进行了修行。"
  },
  {
    "id": 800,
    "word": "たちのく",
    "kanji": "立ち退く",
    "kana": "たちのく",
    "pos": "动词",
    "meaning": "撤离、搬出、退避。为了配合建设、让出空间或规避危险，从原本居住、营业或所在的场所离开。含有面对外部压力时不得已而让位的语感。",
    "example_jp": "道路の拡張工事のため、長年住み慣れた家を立ち退かなければならない。",
    "example_cn": "为了道路的扩建工程，不得不搬出长年住惯的家。"
  },
  {
    "id": 801,
    "word": "てびき",
    "kanji": "手引き",
    "kana": "てびき",
    "pos": "名詞",
    "meaning": "指南 / 指导 / 引路。本义是牵手引导，引申为入门书或指导说明。也指在内部做向导（多指做内应等负面行为）。",
    "example_jp": "初心者向けのプログラミングの手引きとして、この本は最適だ。",
    "example_cn": "作为面向初学者的编程指南，这本书最合适。"
  },
  {
    "id": 802,
    "word": "うるわしい",
    "kanji": "麗しい",
    "kana": "うるわしい",
    "pos": "形容詞",
    "meaning": "美丽的 / 端庄的 / 令人愉悦的。不仅指外表的美丽，更包含精神、气质或关系上的美好、端庄与和谐。",
    "example_jp": "彼女は誰に対しても礼儀正しく、麗しい態度で接する。",
    "example_cn": "她对谁都彬彬有礼，以端庄的态度待人。"
  },
  {
    "id": 803,
    "word": "こる",
    "kanji": "凝る",
    "kana": "こる",
    "pos": "自動詞",
    "meaning": "沉迷 / 讲究 / 酸痛。本义为凝固，引申为注意力集中在某事上（热衷、讲究），或肌肉因紧张而发硬（酸痛）。",
    "example_jp": "彼は最近カメラに凝っていて、休日のたびに写真を撮りに行っている。",
    "example_cn": "他最近沉迷于相机，每到休息日就去拍照。"
  },
  {
    "id": 804,
    "word": "たてかえる",
    "kanji": "立て替える",
    "kana": "たてかえる",
    "pos": "他動詞",
    "meaning": "垫付 / 代付。指暂时替别人支付款项，之后需要对方偿还。表示一种临时的资金代付行为。",
    "example_jp": "財布を忘れたので、今日のランチ代は同僚に立て替えてもらった。",
    "example_cn": "因为忘了带钱包，今天的午餐费请同事垫付了。"
  },
  {
    "id": 805,
    "word": "あこがれ",
    "kanji": "憧れ",
    "kana": "あこがれ",
    "pos": "名詞",
    "meaning": "憧憬 / 向往。对理想的人或事物抱有强烈的向往和倾慕之情，渴望能够接近或实现的状态。",
    "example_jp": "パリでの生活は、多くの若者にとっての憧れである。",
    "example_cn": "在巴黎的生活，是许多年轻人向往的事物。"
  },
  {
    "id": 806,
    "word": "ひやかす",
    "kanji": "冷やかす",
    "kana": "ひやかす",
    "pos": "他動詞",
    "meaning": "嘲弄 / 调侃 / 光看不买。本义是使之冷却，引申为用言语扫兴、戏弄别人，或指在商店里只问价不买，让店员白忙活。",
    "example_jp": "新婚の二人を冷やかすような冗談を言って、その場を盛り上げた。",
    "example_cn": "说着调侃新婚两人的玩笑，活跃了现场的气氛。"
  },
  {
    "id": 807,
    "word": "なまぐさい",
    "kanji": "生臭い",
    "kana": "なまぐさい",
    "pos": "形容詞",
    "meaning": "腥臭的 / 血腥的。指鱼、肉或血等未经烹调时散发的特有气味。引申指血腥的事件或不道德的行为。",
    "example_jp": "魚を捌いた後のまな板から、生臭い匂いが漂ってくる。",
    "example_cn": "从切过鱼的案板上，飘来一股腥臭味。"
  },
  {
    "id": 808,
    "word": "からぶり",
    "kanji": "空振り",
    "kana": "からぶり",
    "pos": "名詞・自動詞",
    "meaning": "挥空 / 落空 / 白费力气。棒球等运动中挥棒未击中球，引申为采取了行动却未取得预期效果，白跑一趟。",
    "example_jp": "何度も企画を提案したが、結局すべて空振りに終わった。",
    "example_cn": "多次提出了企划，但结果全部落空了。"
  },
  {
    "id": 809,
    "word": "ききつける",
    "kanji": "聞き付ける",
    "kana": "ききつける",
    "pos": "他動詞",
    "meaning": "听到 / 察觉到。指偶然捕捉到某种声音或消息，或者习惯听到某种声音。",
    "example_jp": "パトカーのサイレンを聞き付けた野次馬が、現場に集まってきた。",
    "example_cn": "听到警车警笛声的看客，聚集到了现场。"
  },
  {
    "id": 810,
    "word": "うまる",
    "kanji": "埋まる",
    "kana": "うまる",
    "pos": "自動詞",
    "meaning": "埋没 / 填满 / 弥补。空间被填满（如座位、坑洞），或赤字、损失、空白等抽象事物被填补。",
    "example_jp": "募集開始からわずか一日で、すべての定員が埋まった。",
    "example_cn": "从开始招募仅一天，所有的名额就填满了。"
  },
  {
    "id": 811,
    "word": "さび",
    "kanji": "錆",
    "kana": "さび",
    "pos": "名詞",
    "meaning": "锈 / 铁锈。金属表面产生的氧化物。引申为由于自身行为招致的不良后果（如惯用语“身から出た錆”）。",
    "example_jp": "長年放置されていた自転車は、チェーンが錆だらけになっていた。",
    "example_cn": "长年放置的自行车，链条长满了锈。"
  },
  {
    "id": 812,
    "word": "たまもの",
    "kanji": "賜物",
    "kana": "たまもの",
    "pos": "名詞",
    "meaning": "恩赐物 / 成果 / 结晶。指长辈或神明赐予的物品，引申指长期努力、良好习惯或某种原因所带来的好结果。",
    "example_jp": "彼の見事な演技は、日々の厳しい練習の賜物である。",
    "example_cn": "他出色的演技，是每天严格练习的结晶。"
  },
  {
    "id": 813,
    "word": "どしゃぶり",
    "kanji": "土砂降り",
    "kana": "どしゃぶり",
    "pos": "名詞",
    "meaning": "倾盆大雨 / 瓢泼大雨。形容雨势极大，如同泥沙倾泻而下的状态。",
    "example_jp": "駅を出た途端、突然の土砂降りに見舞われた。",
    "example_cn": "刚一出站，就遭遇了突如其来的倾盆大雨。"
  },
  {
    "id": 814,
    "word": "わきみ",
    "kanji": "脇見",
    "kana": "わきみ",
    "pos": "名詞・自動詞",
    "meaning": "旁视 / 东张西望。注意力不集中，视线偏离原本应该看的地方，看向旁边或其他方向。",
    "example_jp": "脇見運転は重大な事故につながる恐れがあるため、非常に危険だ。",
    "example_cn": "驾驶时东张西望有引发重大事故的危险，非常危险。"
  },
  {
    "id": 815,
    "word": "ゆううつ",
    "kanji": "憂うつ",
    "kana": "ゆううつ",
    "pos": "名詞・形容動詞",
    "meaning": "抑郁 / 忧郁 / 阴郁。心情沉重、提不起精神的状态。常用于描述心理负担或糟糕的天气带来的情绪。",
    "example_jp": "明日の試験のことを考えると、憂うつな気分になる。",
    "example_cn": "一想到明天的考试，心情就会变得忧郁。"
  },
  {
    "id": 816,
    "word": "なぐさめ",
    "kanji": "慰め",
    "kana": "なぐさめ",
    "pos": "名詞",
    "meaning": "安慰 / 慰藉。使悲伤或痛苦的心情得到平复或缓解的事物、行为或话语。",
    "example_jp": "彼女からの温かい手紙が、悲しみに沈む私への唯一の慰めだった。",
    "example_cn": "来自她的温暖信件，是对陷入悲伤的我唯一的安慰。"
  },
  {
    "id": 817,
    "word": "つられる",
    "kanji": "釣られる",
    "kana": "つられる",
    "pos": "自動詞",
    "meaning": "被引诱 / 随之（做出某种动作）。本义为被钓起，引申为受他人或外部事物影响，不知不觉跟着做出相同的行为。",
    "example_jp": "友人の大きなあくびを見て、私も思わず釣られてしまった。",
    "example_cn": "看到朋友打了个大哈欠，我也情不自禁地跟着打了。"
  },
  {
    "id": 818,
    "word": "ちかづく",
    "kanji": "近づく",
    "kana": "ちかづく",
    "pos": "自動詞",
    "meaning": "靠近 / 临近 / 交往。物理空间距离缩小，时间上的期限临近，或者心理上的关系变得亲密。",
    "example_jp": "締め切りが近づくにつれて、チーム全体の緊張感が高まった。",
    "example_cn": "随着截止日期的临近，整个团队的紧张感增强了。"
  },
  {
    "id": 819,
    "word": "おしすすめる",
    "kanji": "推し進める",
    "kana": "おしすすめる",
    "pos": "他動詞",
    "meaning": "推进 / 推动。克服困难、阻力或无视反对意见，强力推进事物或计划向前发展。",
    "example_jp": "市長は住民の反対を押し切って、都市開発計画を推し進めた。",
    "example_cn": "市长无视居民的反对，推进了城市开发计划。"
  },
  {
    "id": 820,
    "word": "ゆうする",
    "kanji": "有する",
    "kana": "ゆうする",
    "pos": "他動詞",
    "meaning": "拥有 / 享有。偏向书面语，指拥有权利、资格、资产、能力或某种性质等抽象事物。",
    "example_jp": "彼はこの分野において、世界トップクラスの専門知識を有している。",
    "example_cn": "他在这个领域，拥有世界顶级的专业知识。"
  },
  {
    "id": 821,
    "word": "おくりさき",
    "kanji": "送り先",
    "kana": "おくりさき",
    "pos": "名詞",
    "meaning": "收件人 / 目的地。物品、信件或人员被送达的最终地点或接收对象。",
    "example_jp": "荷物の送り先を間違えてしまい、別の会社に配達されてしまった。",
    "example_cn": "弄错了行李的收件地址，结果被送到了别的公司。"
  },
  {
    "id": 822,
    "word": "とう〜",
    "kanji": "当〜",
    "kana": "とう〜",
    "pos": "接頭辞",
    "meaning": "该 / 本 / 此。接在名词前，指代当前所提及的事物，或自己所属的组织机构（如当市、当校、当社）。",
    "example_jp": "当ホテルでは、全室で無料のインターネット接続をご利用いただけます。",
    "example_cn": "在本酒店，所有房间均可使用免费的互联网连接。"
  },
  {
    "id": 823,
    "word": "まさる",
    "kanji": "勝る",
    "kana": "まさる",
    "pos": "自動詞",
    "meaning": "胜过 / 优于 / 超过。在能力、价值或程度上比另一个事物更好或更高。",
    "example_jp": "経験において、彼女に勝る人材はこの社内にはいない。",
    "example_cn": "在经验方面，这家公司内没有胜过她的人才。"
  },
  {
    "id": 824,
    "word": "ちゅうがえり",
    "kanji": "宙返り",
    "kana": "ちゅうがえり",
    "pos": "名詞・自動詞",
    "meaning": "翻筋斗 / 在空中翻滚。身体或物体在空中翻转一圈或多圈，引申指政策或态度的180度大转变。",
    "example_jp": "体操選手が空中で見事な宙返りを決め、観客を沸かせた。",
    "example_cn": "体操运动员在空中做出了漂亮的翻滚，让观众沸腾了。"
  },
  {
    "id": 825,
    "word": "みたない",
    "kanji": "満たない",
    "kana": "みたない",
    "pos": "連語",
    "meaning": "不满 / 不足 / 达不到。数量、期限或程度没有达到基准或规定值。",
    "example_jp": "会社の設立からまだ一年に満たないが、すでに黒字化を達成している。",
    "example_cn": "虽然距离公司成立还不足一年，但已经实现了盈利。"
  },
  {
    "id": 826,
    "word": "えて",
    "kanji": "得手",
    "kana": "えて",
    "pos": "名詞",
    "meaning": "拿手 / 擅长。指自己擅长、得心应手的事物。常与「不得手」（不擅长）对比使用。",
    "example_jp": "彼は計算は得手だが、人前で話すのは苦手なようだ。",
    "example_cn": "他很擅长计算，但似乎不擅长在人前讲话。"
  },
  {
    "id": 827,
    "word": "かるやか",
    "kanji": "軽やか",
    "kana": "かるやか",
    "pos": "形容動詞",
    "meaning": "轻快 / 轻盈。动作、步伐、节奏等没有沉重感，给人以轻松、敏捷或愉快的感觉。",
    "example_jp": "彼女はピアノの鍵盤の上で、軽やかな指の動きを見せた。",
    "example_cn": "她在钢琴键盘上，展现了轻盈的手指动作。"
  },
  {
    "id": 828,
    "word": "こらす",
    "kanji": "凝らす",
    "kana": "こらす",
    "pos": "他動詞",
    "meaning": "集中 / 凝注。集中注意力或视线，或指绞尽脑汁、下功夫（工夫を凝らす）。",
    "example_jp": "暗闇の中で目を凝らすと、遠くに小さな光が見えた。",
    "example_cn": "在黑暗中凝神定睛一看，看到了远处微小的光。"
  },
  {
    "id": 829,
    "word": "まちわびる",
    "kanji": "待ちわびる",
    "kana": "まちわびる",
    "pos": "他動詞",
    "meaning": "焦急地等 / 盼望已久。因为等待的时间过长而感到苦闷、焦躁，强调一种强烈的期盼情绪。",
    "example_jp": "ファンたちは、人気歌手の三年ぶりとなる新曲の発売を待ちわびていた。",
    "example_cn": "粉丝们焦急地等待着人气歌手时隔三年的新曲发售。"
  },
  {
    "id": 830,
    "word": "あてる",
    "kanji": "宛てる",
    "kana": "あてる",
    "pos": "他動詞",
    "meaning": "寄给 / 发给。把信件或物品指定发送给某人作为接收对象。",
    "example_jp": "これは、未来の自分に宛てて書いた手紙です。",
    "example_cn": "这是写给未来自己的一封信。"
  },
  {
    "id": 831,
    "word": "おさめる",
    "kanji": "修める",
    "kana": "おさめる",
    "pos": "他動詞",
    "meaning": "修习 / 掌握 / 修养。学习学问、技艺并使其掌握完美，或者端正品行。",
    "example_jp": "彼は大学で経済学を修めた後、銀行に就職した。",
    "example_cn": "他在大学修习经济学后，在银行就职了。"
  },
  {
    "id": 832,
    "word": "このましい",
    "kanji": "好ましい",
    "kana": "このましい",
    "pos": "形容詞",
    "meaning": "令人满意的 / 讨人喜欢的 / 理想的。符合期望、给人留下好印象，或者符合某种客观上的良好标准。",
    "example_jp": "子供の成長にとって、自然豊かな環境は非常に好ましい。",
    "example_cn": "对于孩子的成长来说，自然丰富的环境是非常理想的。"
  },
  {
    "id": 833,
    "word": "かんむり",
    "kanji": "冠",
    "kana": "かんむり",
    "pos": "名詞",
    "meaning": "冠 / 桂冠 / 第一的位置。头上戴的帽子（特指贵族或典礼用的），引申为最高荣誉或排行榜的首位。",
    "example_jp": "その若きアスリートは、見事に世界大会の冠を手にした。",
    "example_cn": "那位年轻的运动员，漂亮地获得了世界大赛的桂冠。"
  },
  {
    "id": 834,
    "word": "いのり",
    "kanji": "祈り",
    "kana": "いのり",
    "pos": "名詞",
    "meaning": "祈祷 / 祈愿。向神佛求助或发自内心地期望某种美好的结果。",
    "example_jp": "世界の平和を願う人々の祈りが、空へ届くことを信じている。",
    "example_cn": "我相信人们祈愿世界和平的祈祷，能够传达到天空。"
  },
  {
    "id": 835,
    "word": "つかいわける",
    "kanji": "使い分ける",
    "kana": "つかいわける",
    "pos": "他動詞",
    "meaning": "分别使用 / 视情况使用。根据对象、场合或目的的不同，适当地区分使用不同的方法、语言或工具。",
    "example_jp": "彼は相手の年齢に合わせて、敬語とタメ口を巧みに使い分ける。",
    "example_cn": "他根据对方的年龄，巧妙地分别使用敬语和简体。"
  },
  {
    "id": 836,
    "word": "にげみち",
    "kanji": "逃げ道",
    "kana": "にげみち",
    "pos": "名詞",
    "meaning": "退路 / 逃跑的道路 / 借口。物理上逃脱的路线，或为了推脱责任、摆脱困境而准备的辩解和后路。",
    "example_jp": "追い詰められた犯人は、あらかじめ用意していた逃げ道から姿を消した。",
    "example_cn": "被逼入绝境的犯人，从预先准备好的退路消失了身影。"
  },
  {
    "id": 837,
    "word": "いりよう",
    "kanji": "入り用",
    "kana": "いりよう",
    "pos": "名詞・形容動詞",
    "meaning": "需要 / 必要（的开销）。需要用到某物，或指必需的费用和花费。",
    "example_jp": "急な出張が決まり、当座の資金が入り用になった。",
    "example_cn": "突然决定出差，需要用到目前的资金。"
  },
  {
    "id": 838,
    "word": "おそくとも",
    "kanji": "遅くとも",
    "kana": "おそくとも",
    "pos": "副詞",
    "meaning": "最迟 / 最晚。设定一个时间上的最后限度，表示在这个期限之前必须完成某事。",
    "example_jp": "会議の資料は、遅くとも明日の午前中までに提出してください。",
    "example_cn": "会议的资料，请最晚在明天上午之前提交。"
  },
  {
    "id": 839,
    "word": "はた",
    "kanji": "旗",
    "kana": "はた",
    "pos": "名詞",
    "meaning": "旗帜。用布等做成的标志，引申为某种立场、主张或象征。",
    "example_jp": "案内役のガイドが掲げる赤い旗を目印に、観光客の列が続く。",
    "example_cn": "以导游举着的红旗为标志，游客的队伍跟在后面。"
  },
  {
    "id": 840,
    "word": "たのみ",
    "kanji": "頼み",
    "kana": "たのみ",
    "pos": "名詞",
    "meaning": "请求 / 依赖。向别人提出的拜托，或指可以依靠的人或事物（依靠的指望）。",
    "example_jp": "あなたに一つ、どうしても聞いてほしい頼みがあるのです。",
    "example_cn": "我对你有一个，无论如何都希望你能答应的请求。"
  },
  {
    "id": 841,
    "word": "あなうめ",
    "kanji": "穴埋め",
    "kana": "あなうめ",
    "pos": "名詞",
    "meaning": "填补 / 弥补亏空。物理上填满坑洞，或指弥补赤字、填补时间的空闲、补充人员的空缺。",
    "example_jp": "退職した社員の穴埋めとして、急遽新しいスタッフを募集した。",
    "example_cn": "作为离职员工的空缺填补，急忙招募了新员工。"
  },
  {
    "id": 842,
    "word": "まこと",
    "kanji": "誠",
    "kana": "まこと",
    "pos": "名詞",
    "meaning": "诚实 / 真实 / 真心。不虚伪、真实的内心，或者符合实际的事实。",
    "example_jp": "相手の言葉が誠であるかどうか、慎重に見極める必要がある。",
    "example_cn": "有必要慎重看清对方的话语是否是真实的。"
  },
  {
    "id": 843,
    "word": "ひどり",
    "kanji": "日取り",
    "kana": "ひどり",
    "pos": "名詞",
    "meaning": "日期 / 日子。为举行婚礼、会议或某项活动而选定的一天。",
    "example_jp": "両家で話し合った結果、結婚式の日取りが来年の春に決まった。",
    "example_cn": "两家人商量的结果，婚礼的日子定在了明年的春天。"
  },
  {
    "id": 844,
    "word": "あざける",
    "kanji": "嘲る",
    "kana": "あざける",
    "pos": "他動詞",
    "meaning": "嘲笑 / 嘲弄。用言语或态度对别人进行轻视、侮辱和讥笑的行为。",
    "example_jp": "彼は他人の失敗を嘲るような態度をとり、周囲から反感を買った。",
    "example_cn": "他采取了嘲笑他人失败的态度，招致了周围的反感。"
  },
  {
    "id": 845,
    "word": "かれる",
    "kanji": "涸れる",
    "kana": "かれる",
    "pos": "自動詞",
    "meaning": "干涸 / 枯竭。指水或液体干枯没有了，引申指想法、眼泪等消耗殆尽。",
    "example_jp": "雨が何ヶ月も降らず、村の井戸の水がすっかり涸れてしまった。",
    "example_cn": "几个月没下雨，村里水井的水完全干涸了。"
  },
  {
    "id": 846,
    "word": "しずめる",
    "kanji": "沈める",
    "kana": "しずめる",
    "pos": "他動詞",
    "meaning": "使沉没 / 降下 / 压抑。将物体没入水中，将身体陷于某处（如沙发），或隐藏、压抑（声音、感情等）。",
    "example_jp": "彼は深くため息をつき、ふかふかのソファに体を沈めた。",
    "example_cn": "他深深叹了口气，将身体陷进了柔软的沙发里。"
  },
  {
    "id": 847,
    "word": "なにかと",
    "kanji": "何かと",
    "kana": "なにかと",
    "pos": "副詞",
    "meaning": "各方面 / 动不动 / 这样那样。表示在各种场合、事物上（遇到某种情况或做某种动作）。",
    "example_jp": "彼は世話好きで、新入社員に対して何かと気を配ってくれる。",
    "example_cn": "他很热心，对新入职员工在各方面都很照顾。"
  },
  {
    "id": 848,
    "word": "いんきくさい",
    "kanji": "陰気くさい",
    "kana": "いんきくさい",
    "pos": "形容詞",
    "meaning": "阴气沉沉的 / 令人感到郁闷的。形容气氛、外表或性格显得阴暗、沉闷，带有一种令人不快的负面感觉。",
    "example_jp": "その古い洋館は、昼間でも日が当たらず陰気くさい雰囲気が漂っていた。",
    "example_cn": "那座旧洋房，即使在白天也照不到太阳，弥漫着阴气沉沉的气氛。"
  },
  {
    "id": 849,
    "word": "みため",
    "kanji": "見た目",
    "kana": "みため",
    "pos": "名詞",
    "meaning": "外表 / 外观。人或事物外在的看起来的样子，常与内在、实际情况进行对比。",
    "example_jp": "その料理は見た目はあまり良くないが、味は格別だ。",
    "example_cn": "那道菜虽然外表不太好，但味道特别好。"
  },
  {
    "id": 850,
    "word": "くちうるさい",
    "kanji": "口うるさい",
    "kana": "くちうるさい",
    "pos": "形容詞",
    "meaning": "唠叨的 / 多嘴的 / 挑剔的。对微小的事情也说个不停，让人感到厌烦。",
    "example_jp": "母親の口うるさい説教に、少年はうんざりした表情を浮かべた。",
    "example_cn": "对于母亲唠叨的说教，少年露出了厌烦的表情。"
  },
  {
    "id": 851,
    "word": "どう〜",
    "kanji": "同〜",
    "kana": "どう〜",
    "pos": "接頭辞",
    "meaning": "该〜 / 同〜。接在名词前，指代上文已经提到过的同一个事物、机构或人。常用于新闻报道、公文等正式文体中，替代反复说明。",
    "example_jp": "同社は来月から新しいサービスを開始すると発表した。",
    "example_cn": "该公司宣布将从下个月开始提供新服务。"
  },
  {
    "id": 852,
    "word": "たもつ",
    "kanji": "保つ",
    "kana": "たもつ",
    "pos": "他動詞",
    "meaning": "保持 / 维持。使事物原有的状态、性质、状况继续存在，不发生改变或恶化。核心在于抵抗外部影响，守住现状。",
    "example_jp": "部屋の温度を常に二十度前後に保つように設定している。",
    "example_cn": "设定为将房间温度始终保持在二十度左右。"
  },
  {
    "id": 853,
    "word": "みのうえ",
    "kanji": "身の上",
    "kana": "みのうえ",
    "pos": "名詞",
    "meaning": "境遇 / 身世 / 个人情况。指一个人所处的客观境遇、命运，或个人的经历、私事。通常带有一种带有同情、关切或感叹的情感色彩。",
    "example_jp": "彼女は涙ながらに自分の不遇な身の上を語った。",
    "example_cn": "她流着泪讲述了自己不幸的身世。"
  },
  {
    "id": 854,
    "word": "とも",
    "kanji": "共",
    "kana": "とも",
    "pos": "接尾辞 / 名詞",
    "meaning": "都 / 全部 / 共同。接在数量词或名词后，表示包含在内的全部事物处于相同状态，或指多人一起做某事。",
    "example_jp": "夫婦共働きで、なんとか生活費をやりくりしている。",
    "example_cn": "夫妻共同工作，勉强筹措着生活费。"
  },
  {
    "id": 855,
    "word": "くらやみ",
    "kanji": "暗闇",
    "kana": "くらやみ",
    "pos": "名詞",
    "meaning": "黑暗 / 暗处。完全没有光亮的状态或地方。引申指不为人知的状态或社会的阴暗面。",
    "example_jp": "突然停電になり、部屋の中は完全な暗闇に包まれた。",
    "example_cn": "突然停电，房间里被完全的黑暗笼罩了。"
  },
  {
    "id": 856,
    "word": "あきばれ",
    "kanji": "秋晴れ",
    "kana": "あきばれ",
    "pos": "名詞",
    "meaning": "秋高气爽 / 秋日晴空。特指秋天特有的、空气澄澈、天空高远而晴朗的天气。",
    "example_jp": "見事な秋晴れの下、小学校の運動会が開催された。",
    "example_cn": "在绝佳的秋日晴空下，小学举办了运动会。"
  },
  {
    "id": 857,
    "word": "つける",
    "kanji": "就ける",
    "kana": "つける",
    "pos": "他動詞",
    "meaning": "使…就任 / 安置。安排某人担任某种职位、职务，或让其从事某项工作。强调赋予社会角色或位置。",
    "example_jp": "彼は息子を会社の重要な役職に就けるつもりだ。",
    "example_cn": "他打算让儿子担任公司的重要职位。"
  },
  {
    "id": 858,
    "word": "おり",
    "kanji": "折",
    "kana": "おり",
    "pos": "名詞",
    "meaning": "时候 / 机会。指某个特定的时间点或时机。常用于正式场合或客套话中，表示“趁着某个机会”或“在…的时候”。",
    "example_jp": "上京した折には、ぜひ我が家にもお立ち寄りください。",
    "example_cn": "进京的时候，请务必顺道来我家坐坐。"
  },
  {
    "id": 859,
    "word": "おごる",
    "kanji": "驕る",
    "kana": "おごる",
    "pos": "自動詞",
    "meaning": "骄傲 / 傲慢。因自身的才能、地位或成就而自满，看不起他人，态度傲慢。强调心理上的自大状态。",
    "example_jp": "権力に驕ることなく、常に謙虚な姿勢を忘れてはならない。",
    "example_cn": "不要因权力而骄傲，必须始终不忘谦虚的姿态。"
  },
  {
    "id": 860,
    "word": "ねばり",
    "kanji": "粘り",
    "kana": "ねばり",
    "pos": "名詞",
    "meaning": "粘性 / 韧性 / 毅力。本义指物质具有粘性、不易拉断的物理特性。引申为性格或做事态度上不轻易放弃、坚持到底的韧劲。",
    "example_jp": "試合の後半になっても、彼のプレーにはまだ粘りがあった。",
    "example_cn": "即使到了比赛后半段，他的表现依然充满韧性。"
  },
  {
    "id": 861,
    "word": "とのさま",
    "kanji": "殿様",
    "kana": "とのさま",
    "pos": "名詞",
    "meaning": "诸侯 / 老爷 / 封建领主。江户时代对大名或武士阶层主人的尊称。现代常用其比喻义，指不懂世故、挥霍无度或态度傲慢的富贵人家子弟。",
    "example_jp": "競争を避けた殿様商売では、今の時代を生き残れない。",
    "example_cn": "回避竞争的老爷式买卖，是无法在当今时代生存下去的。"
  },
  {
    "id": 862,
    "word": "だいなし",
    "kanji": "台無し",
    "kana": "だいなし",
    "pos": "名詞 / 形容動詞",
    "meaning": "糟蹋 / 毁掉 / 白费。原本美好的事物、计划或努力因某种原因被彻底破坏，失去了原有的价值或意义。",
    "example_jp": "突然の土砂降りで、楽しみにしていたピクニックが台無しになった。",
    "example_cn": "因为突然的倾盆大雨，期待已久的野餐全毁了。"
  },
  {
    "id": 863,
    "word": "かいもとめる",
    "kanji": "買い求める",
    "kana": "かいもとめる",
    "pos": "他動詞",
    "meaning": "购买。与普通的「買う」相比，语气更正式，通常包含有意识地主动去寻找并买下的语感，常用于商业或客气的表达。",
    "example_jp": "観光客の多くが、地元の特産品を土産として買い求めていく。",
    "example_cn": "许多游客购买当地特产作为伴手礼带走。"
  },
  {
    "id": 864,
    "word": "かけ〜",
    "kanji": "掛け〜",
    "kana": "かけ〜",
    "pos": "接尾辞",
    "meaning": "刚开始… / 做到一半。接在动词连用形（ます形去掉ます）后，表示某动作刚刚开始，或者动作进行到一半尚未完成的状态。",
    "example_jp": "机の上には、読み掛けの小説と冷めたコーヒーが置かれていた。",
    "example_cn": "桌子上放着读了一半的小说和变凉的咖啡。"
  },
  {
    "id": 865,
    "word": "かすめる",
    "kanji": "掠める",
    "kana": "かすめる",
    "pos": "他動詞",
    "meaning": "掠过 / 擦过 / 蒙骗 / 偷窃。动作极其快速地擦过物体表面；或指瞬间闪过某种情绪；也指趁人不备偷偷拿走或蒙骗他人。",
    "example_jp": "彼の言葉を聞いた瞬間、一抹の不安が脳裏を掠めた。",
    "example_cn": "听到他的话的瞬间，一丝不安掠过了脑海。"
  },
  {
    "id": 866,
    "word": "しんぼうづよい",
    "kanji": "辛抱強い",
    "kana": "しんぼうづよい",
    "pos": "形容詞",
    "meaning": "坚忍的 / 有耐心的。面对痛苦、困难或不顺心的事情时，能够极力忍耐，不轻易放弃或发脾气。强调精神上的忍耐力。",
    "example_jp": "彼女は辛抱強い性格で、どんな困難な仕事にも文句を言わずに取り組む。",
    "example_cn": "她性格坚忍，面对任何困难的工作都毫无怨言地处理。"
  },
  {
    "id": 867,
    "word": "なんだか",
    "kanji": "何だか",
    "kana": "なんだか",
    "pos": "副詞",
    "meaning": "总觉得 / 不知为什么。表示虽然说不出明确的理由，但心里确实有某种感觉或倾向。用于表达模糊、微妙的心境。",
    "example_jp": "急に空が暗くなり、何だか嫌な予感がしてきた。",
    "example_cn": "天空突然变暗，总觉得有种不好的预感。"
  },
  {
    "id": 868,
    "word": "かんじょうだかい",
    "kanji": "勘定高い",
    "kana": "かんじょうだかい",
    "pos": "形容詞",
    "meaning": "精打细算 / 计较得失 / 抠门。非常善于计算金钱的利害得失，极力避免自己吃亏。带有一定的贬义色彩。",
    "example_jp": "彼は非常に勘定高く、一円の損も許さないような男だ。",
    "example_cn": "他非常精打细算，是个连一元钱的损失都不容许的男人。"
  },
  {
    "id": 869,
    "word": "なみはずれる",
    "kanji": "並外れる",
    "kana": "なみはずれる",
    "pos": "自動詞",
    "meaning": "出众 / 超常 / 不同寻常。远远超出了一般、普通的水平。通常用于客观评价非凡的才能、体力、规模等属性。",
    "example_jp": "彼は並外れた記憶力を持っており、一度見たものは決して忘れない。",
    "example_cn": "他拥有超常的记忆力，见过一次的东西绝不会忘记。"
  },
  {
    "id": 870,
    "word": "たきび",
    "kanji": "焚き火",
    "kana": "たきび",
    "pos": "名詞",
    "meaning": "篝火 / 烧落叶。在户外将树枝、落叶、废木材等堆积起来焚烧，常用于取暖、野营或处理枯叶。",
    "example_jp": "キャンプの夜、私たちは焚き火を囲んで遅くまで語り合った。",
    "example_cn": "露营的夜晚，我们围着篝火交谈到了很晚。"
  },
  {
    "id": 871,
    "word": "もちあわせる",
    "kanji": "持ち合わせる",
    "kana": "もちあわせる",
    "pos": "他動詞",
    "meaning": "碰巧带有 / 具备。恰好随身携带着（物品、金钱等），或表示人本身具有某种素质、情感等内在属性。",
    "example_jp": "あいにく、名刺を持ち合わせておりませんで、申し訳ありません。",
    "example_cn": "不巧没有随身带名片，非常抱歉。"
  },
  {
    "id": 872,
    "word": "ばくがい",
    "kanji": "爆買い",
    "kana": "ばくがい",
    "pos": "名詞 / 他動詞",
    "meaning": "爆买 / 疯狂采购。指一次性大量购买商品的消费行为。带有强烈的视觉冲击力和夸张色彩。",
    "example_jp": "観光客による家電製品や化粧品の爆買いがニュースで報じられた。",
    "example_cn": "新闻报道了游客疯狂采购家电产品和化妆品的现象。"
  },
  {
    "id": 873,
    "word": "ふみにじる",
    "kanji": "踏みにじる",
    "kana": "ふみにじる",
    "pos": "他動詞",
    "meaning": "践踏 / 蹂躏 / 糟蹋。本义为用脚用力踩踏使之破碎。引申为粗暴地破坏他人的尊严、好意、名誉或权利，表示极其无情地对待。",
    "example_jp": "他人の尊厳を踏みにじるような発言は、決して許されるべきではない。",
    "example_cn": "践踏他人尊严的发言，绝不应该被允许。"
  },
  {
    "id": 874,
    "word": "みのる",
    "kanji": "実る",
    "kana": "みのる",
    "pos": "自動詞",
    "meaning": "结出果实 / 取得成果。植物结出果实；引申为长期付出的努力、苦心终于获得了好的回报或结果。",
    "example_jp": "長年の地道な研究がようやく実り、新薬の開発に成功した。",
    "example_cn": "多年脚踏实地的研究终于取得成果，成功开发了新药。"
  },
  {
    "id": 875,
    "word": "うつし",
    "kanji": "写し",
    "kana": "うつし",
    "pos": "名詞",
    "meaning": "副本 / 抄件 / 临摹本。照着原件原原本本复制出来的文件或图画。常用于公文、证明材料的复印件。",
    "example_jp": "契約書に署名捺印の上、その写しを当社までご郵送ください。",
    "example_cn": "请在合同上签字盖章后，将其副本邮寄至本公司。"
  },
  {
    "id": 876,
    "word": "でなおす",
    "kanji": "出直す",
    "kana": "でなおす",
    "pos": "自動詞",
    "meaning": "重新来过 / 再来。出门后中途折返再重新出发；或指拜访时遇到对方不在，决定下次再来；也引申为改变态度从头重新开始某事。",
    "example_jp": "今日はお忙しいようですので、また日を改めて出直して参ります。",
    "example_cn": "今天您似乎很忙，我改天再重新来拜访。"
  },
  {
    "id": 877,
    "word": "ゆうやけ",
    "kanji": "夕焼け",
    "kana": "ゆうやけ",
    "pos": "名詞",
    "meaning": "晚霞 / 火烧云。日落前后，西边天空被染成橙红色或暗红色的自然现象。",
    "example_jp": "窓の外を見ると、西の空が美しい夕焼けに染まっていた。",
    "example_cn": "望向窗外，西边的天空被美丽的晚霞染红了。"
  },
  {
    "id": 878,
    "word": "むける",
    "kanji": "剥ける",
    "kana": "むける",
    "pos": "自動詞",
    "meaning": "剥落 / 脱皮。表皮、外皮等包覆物脱落，露出里面的部分。如水果皮剥开，或皮肤晒伤后掉皮。",
    "example_jp": "日焼けした背中の皮がむけて、服がこすれると少し痛い。",
    "example_cn": "晒伤的背部脱皮了，衣服摩擦到会有稍微痛。"
  },
  {
    "id": 879,
    "word": "おりかえす",
    "kanji": "折り返す",
    "kana": "おりかえす",
    "pos": "他動詞",
    "meaning": "折返 / 回复 / 翻折。将长条形物体的末端折叠回去；到达中途终点后按原路返回；或指收到电话、信件后立即给对方回信回电。",
    "example_jp": "担当者が戻り次第、こちらから折り返しお電話いたします。",
    "example_cn": "负责人一回来，我们这边会立即给您回电。"
  },
  {
    "id": 880,
    "word": "つむぐ",
    "kanji": "紡ぐ",
    "kana": "つむぐ",
    "pos": "他動詞",
    "meaning": "纺线 / 编织（语言）。本义是从茧或棉花中抽出纤维制成纱线。引申指小心翼翼地挑选词语组合成文章、故事或情感，强调语言构建的细致过程。",
    "example_jp": "彼女は一つ一つの言葉を丁寧に紡ぎながら、自らの思いを語った。",
    "example_cn": "她一边仔细地编织着每一个词语，一边讲述着自己的想法。"
  },
  {
    "id": 881,
    "word": "うちわけ",
    "kanji": "内訳",
    "kana": "うちわけ",
    "pos": "名詞",
    "meaning": "明细 / 详细账目。将总额或总量按照具体项目分解后列出的详细内容。常用于账本、发票、经费预算等。",
    "example_jp": "今月の生活費の内訳をグラフにして、無駄な支出を分析した。",
    "example_cn": "将本月生活费的明细制成图表，分析了不必要的支出。"
  },
  {
    "id": 882,
    "word": "そう",
    "kanji": "沿う",
    "kana": "そう",
    "pos": "自動詞",
    "meaning": "顺着 / 沿着 / 遵循。顺着某条线状物（如河流、道路）移动或存在；引申为遵循他人的意向、方针、规则或期待行事。",
    "example_jp": "お客様のご要望に沿うよう、最大限の努力をさせていただきます。",
    "example_cn": "为了遵循客户的要求，我们将尽最大努力。"
  },
  {
    "id": 883,
    "word": "くびかざり",
    "kanji": "首飾り",
    "kana": "くびかざり",
    "pos": "名詞",
    "meaning": "项链 / 颈饰。佩戴在脖子上的装饰品，如宝石、珍珠项链等。",
    "example_jp": "彼女は誕生日プレゼントとして、真珠の美しい首飾りをもらった。",
    "example_cn": "她收到了一条美丽的珍珠项链作为生日礼物。"
  },
  {
    "id": 884,
    "word": "みだす",
    "kanji": "乱す",
    "kana": "みだす",
    "pos": "他動詞",
    "meaning": "弄乱 / 扰乱 / 破坏。破坏原本整齐的形状、秩序或平静的状态。强调施加外力使内部秩序陷入混乱。",
    "example_jp": "チームの和を乱すような身勝手な行動は、慎んでいただきたい。",
    "example_cn": "请不要做出扰乱团队和谐的任性行为。"
  },
  {
    "id": 885,
    "word": "かる",
    "kanji": "刈る",
    "kana": "かる",
    "pos": "他動詞",
    "meaning": "割 / 剪 / 剃。使用镰刀、剪刀或机器，将草、谷物、毛发等生长出来的东西从根部附近切断或修剪。",
    "example_jp": "週末は庭に伸び放題になっていた雑草を綺麗に刈り取った。",
    "example_cn": "周末把庭院里疯长的杂草割得干干净净。"
  },
  {
    "id": 886,
    "word": "てっとりばやい",
    "kanji": "手っ取り早い",
    "kana": "てっとりばやい",
    "pos": "形容詞",
    "meaning": "简捷 / 省事 / 快捷。指做事的方法或途径最直接、最省力气且能快速见效。侧重于方法的不绕弯子。",
    "example_jp": "分からないことがあれば、直接専門家に聞くのが一番手っ取り早い。",
    "example_cn": "如果有不懂的事情，直接问专家是最快捷的。"
  },
  {
    "id": 887,
    "word": "かける",
    "kanji": "駆ける",
    "kana": "かける",
    "pos": "自動詞",
    "meaning": "奔跑 / 奔驰。马匹等动物疾驰，或指人以极快的速度奔跑。带有速度感、跃动感和朝着某个目标猛冲的画面感。",
    "example_jp": "少年は夕暮れの野原を、息を切らしながら無我夢中で駆けていった。",
    "example_cn": "少年在傍晚的原野上喘着粗气忘我地奔跑着。"
  },
  {
    "id": 888,
    "word": "うわつく",
    "kanji": "浮つく",
    "kana": "うわつく",
    "pos": "自動詞",
    "meaning": "轻浮 / 心神不定 / 浮躁。心里不踏实、静不下心来，或者指人的态度轻薄、不沉稳。通常带有贬义。",
    "example_jp": "お祭りの前日ともなると、子供たちはすっかり浮ついて勉強手につかない。",
    "example_cn": "一到祭典的前一天，孩子们就完全心神不定，无法集中精力学习。"
  },
  {
    "id": 889,
    "word": "ゆえん",
    "kanji": "所以",
    "kana": "ゆえん",
    "pos": "名詞",
    "meaning": "原由 / 原因 / 理由。表示某事之所以成为某事的根本理由或原因。属于非常正式、带有文学色彩的书面语。",
    "example_jp": "彼が多くの人々から慕われ、尊敬される所以は、その誠実な人柄にある。",
    "example_cn": "他之所以受到众多人的倾慕和尊敬，其原由在于他那诚实的人品。"
  },
  {
    "id": 890,
    "word": "きも",
    "kanji": "肝",
    "kana": "きも",
    "pos": "名詞",
    "meaning": "肝脏 / 胆量 / 关键。生理上的肝脏器官；心理层面上指面对困难时的胆量和精神支柱；事物层面上指最核心、最重要的关键部位。",
    "example_jp": "このプロジェクトを成功させるための肝は、事前の徹底した市場調査だ。",
    "example_cn": "让这个项目成功的关键，是事前彻底的市场调查。"
  },
  {
    "id": 891,
    "word": "みちる",
    "kanji": "満ちる",
    "kana": "みちる",
    "pos": "自動詞",
    "meaning": "充满 / 满潮。空间内充斥着某种物质或情感；或者指月相变圆、海水涨潮。体现由少变多直至充盈的动态感。",
    "example_jp": "彼の表情は、新しい生活への希望と自信に満ちていた。",
    "example_cn": "他的表情中充满了对新生活的希望与自信。"
  },
  {
    "id": 892,
    "word": "うけみ",
    "kanji": "受け身",
    "kana": "うけみ",
    "pos": "名詞",
    "meaning": "被动 / 招架 / 保护动作。武术中被摔倒时保护身体的技巧；在语言学中指被动态；日常中常引申指不主动出击、被动承受的消极态度。",
    "example_jp": "会議では常に受け身の姿勢ではなく、自ら積極的に意見を出すべきだ。",
    "example_cn": "在会议中不应总是保持被动的姿态，而应该自己积极地提出意见。"
  },
  {
    "id": 893,
    "word": "こころみ",
    "kanji": "試み",
    "kana": "こころみ",
    "pos": "名詞",
    "meaning": "尝试 / 试验。为了确认某个想法是否有效、能否成功而实际去做的行动。带有探索、挑战新事物的意味。",
    "example_jp": "最新の技術を教育現場に導入するという、非常に興味深い試みが行われている。",
    "example_cn": "正在进行一项非常有趣的尝试，即将最新技术引入教育现场。"
  },
  {
    "id": 894,
    "word": "おおすじ",
    "kanji": "大筋",
    "kana": "おおすじ",
    "pos": "名詞",
    "meaning": "梗概 / 大纲 / 大体。事物发展的主要脉络或核心框架，忽略细枝末节的整体大致情况。",
    "example_jp": "両社間の交渉は難航したが、最終的な合意に向けて大筋で一致した。",
    "example_cn": "虽然两家公司间的谈判进展艰难，但为了最终的协议已在大体上达成了一致。"
  },
  {
    "id": 895,
    "word": "ようする",
    "kanji": "要する",
    "kana": "ようする",
    "pos": "他動詞",
    "meaning": "需要 / 耗费。完成某项任务或达到某种状态所必须花费的时间、金钱、劳力或必须具备的条件。常用于正式场合。",
    "example_jp": "この病気の完治には、少なくとも半年以上の長期的な治療を要する。",
    "example_cn": "这种疾病的完全治愈，至少需要半年以上的长期治疗。"
  },
  {
    "id": 896,
    "word": "こする",
    "kanji": "擦る",
    "kana": "こする",
    "pos": "他動詞",
    "meaning": "擦 / 搓 / 摩擦。将一个物体表面紧压在另一个物体表面上进行来回移动的动作。常用于擦洗污垢或摩擦生热。",
    "example_jp": "眠かったのか、彼は小さな手で何度も自分の目をこすっていた。",
    "example_cn": "可能是困了，他用小手好几次揉擦着自己的眼睛。"
  },
  {
    "id": 897,
    "word": "ひいでる",
    "kanji": "秀でる",
    "kana": "ひいでる",
    "pos": "自動詞",
    "meaning": "优秀 / 卓越 / 出众。能力、才华、容貌等方面远超普通水平，出类拔萃。多用来正面评价他人的长处。",
    "example_jp": "彼女は語学において特に秀でた才能を持っており、五か国語を操る。",
    "example_cn": "她在语言学方面拥有特别卓越的才能，精通五国语言。"
  },
  {
    "id": 898,
    "word": "ふるほんや",
    "kanji": "古本屋",
    "kana": "ふるほんや",
    "pos": "名詞",
    "meaning": "二手书店 / 旧书摊。买卖二手书籍、旧杂志或绝版珍贵文献的商店。",
    "example_jp": "学生時代、授業の合間によく神保町の古本屋を巡って専門書を探したものだ。",
    "example_cn": "学生时代，我常在课余时间逛神保町的二手书店寻找专业书籍。"
  },
  {
    "id": 899,
    "word": "つよめる",
    "kanji": "強める",
    "kana": "つよめる",
    "pos": "他動詞",
    "meaning": "加强 / 增强。增加某种事物的力量、程度、势头或语气。指施加影响使原本的状态升级。",
    "example_jp": "台風が接近しているため、警察は住民に対して警戒を強めるよう呼びかけた。",
    "example_cn": "由于台风正在逼近，警察呼吁居民加强警戒。"
  },
  {
    "id": 900,
    "word": "あいま",
    "kanji": "合間",
    "kana": "あいま",
    "pos": "名詞",
    "meaning": "间隙 / 空闲。事物或动作持续进行过程中的短暂中断、休息时间。多指在繁忙中抽出的片刻空当。",
    "example_jp": "彼は家事と育児の合間を縫って、資格試験のための勉強を続けている。",
    "example_cn": "他挤出家务和育儿的间隙，坚持为了资格考试而学习。"
  },
  {
    "id": 901,
    "word": "よこみち",
    "kanji": "横道",
    "kana": "よこみち",
    "pos": "名詞",
    "meaning": "岔路 / 离题。本义为从大路分岔出去的小路；引申为说话或做事偏离了本来的主题或正轨。",
    "example_jp": "議長が話題を振ったが、話がすぐに横道に逸れてしまった。",
    "example_cn": "议长抛出了话题，但谈话马上就偏离了正题。"
  },
  {
    "id": 902,
    "word": "ききなれる",
    "kanji": "聞き慣れる",
    "kana": "ききなれる",
    "pos": "自動詞",
    "meaning": "听惯 / 听熟。表示因为多次听到某个声音或某句话，耳朵已经习惯，不再感到陌生或违和。",
    "example_jp": "電話の向こうから、聞き慣れた懐かしい声が聞こえてきた。",
    "example_cn": "从电话那头，传来了听惯的令人怀念的声音。"
  },
  {
    "id": 903,
    "word": "くやむ",
    "kanji": "悔やむ",
    "kana": "くやむ",
    "pos": "他動詞",
    "meaning": "后悔 / 懊悔 / 吊唁。对过去做过或没做的事情感到遗憾、痛心；也特指对死者的离世表示哀悼。",
    "example_jp": "今更過去の失敗を悔やんでも、事態は何も良くならない。",
    "example_cn": "事到如今再怎么后悔过去的失败，事态也不会有任何好转。"
  },
  {
    "id": 904,
    "word": "あいせき",
    "kanji": "相席",
    "kana": "あいせき",
    "pos": "名詞 / 自動詞",
    "meaning": "拼桌 / 同席。在餐馆或公共场所，与不认识的人同坐在一张桌子旁。",
    "example_jp": "店内が大変混雑しておりますので、相席をお願いできますか。",
    "example_cn": "店内非常拥挤，可以拜托您拼桌吗？"
  },
  {
    "id": 905,
    "word": "ふろしき",
    "kanji": "風呂敷",
    "kana": "ふろしき",
    "pos": "名詞",
    "meaning": "包袱皮 / (引申)说大话。本义为用于包裹、搬运物品的方形布料；常用于惯用语中比喻吹牛或计划超出自身能力的事。",
    "example_jp": "母は手作りのお弁当を綺麗な模様の風呂敷に包んでくれた。",
    "example_cn": "母亲把亲手做的便当用图案漂亮的包袱皮包了起来。"
  },
  {
    "id": 906,
    "word": "もの",
    "kanji": "〜物",
    "kana": "〜もの",
    "pos": "接尾辞",
    "meaning": "……物品 / ……作品。接在动词连用形或名词后，表示与该动作相关的物品，或具有某种属性的东西。",
    "example_jp": "この雑誌は、子供向けの読み物として長年人気を集めている。",
    "example_cn": "这本杂志作为面向儿童的读物，多年来一直很受欢迎。"
  },
  {
    "id": 907,
    "word": "しばりつける",
    "kanji": "縛り付ける",
    "kana": "しばりつける",
    "pos": "他動詞",
    "meaning": "绑住 / 束缚 / 限制。用绳索等将人或物固定在某处使其不能动弹；引申为用规则、职责等限制人的自由。",
    "example_jp": "古い規則で社員を縛り付けるのは、もはや時代遅れである。",
    "example_cn": "用旧规则来束缚员工，已经落后于时代了。"
  },
  {
    "id": 908,
    "word": "みはらし",
    "kanji": "見晴らし",
    "kana": "みはらし",
    "pos": "名詞",
    "meaning": "视野 / 眺望 / 景致。从高处或无遮挡的地方向远处望去的视野宽阔度及风景。",
    "example_jp": "山頂にあるそのホテルは、非常に見晴らしが良いことで有名だ。",
    "example_cn": "位于山顶的那家酒店，因视野非常开阔而闻名。"
  },
  {
    "id": 909,
    "word": "ちょう",
    "kanji": "蝶",
    "kana": "ちょう",
    "pos": "名詞",
    "meaning": "蝴蝶。昆虫纲鳞翅目中白天活动的昆虫总称。",
    "example_jp": "春の暖かな日差しの中、庭の美しい花に蝶が止まっている。",
    "example_cn": "在春天温暖的阳光中，蝴蝶停在庭院美丽的花朵上。"
  },
  {
    "id": 910,
    "word": "あわれ",
    "kanji": "哀れ",
    "kana": "あわれ",
    "pos": "名詞 / 形容動詞",
    "meaning": "可怜 / 悲哀 / 哀情。因看到弱小或不幸的事物而引发的同情心，或指事物呈现出凄凉、悲惨的状态。",
    "example_jp": "親を亡くしたその幼い子供の姿は、あまりにも哀れだった。",
    "example_cn": "那个失去双亲的年幼孩子的身影，实在太可怜了。"
  },
  {
    "id": 911,
    "word": "ほめたたえる",
    "kanji": "褒めたたえる",
    "kana": "ほめたたえる",
    "pos": "他動詞",
    "meaning": "极力赞美 / 颂扬。使用言语高度评价某人的功绩、才能或高尚行为，程度比一般的「褒める」更深。",
    "example_jp": "市長は式典で、人命を救助した若者の勇気ある行動を褒めたたえた。",
    "example_cn": "市长在典礼上，极力赞美了救助人命的年轻人的勇敢行为。"
  },
  {
    "id": 912,
    "word": "まぶち",
    "kanji": "目縁",
    "kana": "まぶち",
    "pos": "名詞",
    "meaning": "眼圈 / 眼睑边缘。指包围眼球的皮肤边缘部分，常用于描写流泪、红肿等生理反应的文学表达中。",
    "example_jp": "彼女は昨晩一人で泣きすぎたせいで、少し目縁が赤く腫れている。",
    "example_cn": "因为她昨晚一个人哭得太多，眼圈有些红肿。"
  },
  {
    "id": 913,
    "word": "きれめ",
    "kanji": "切れ目",
    "kana": "きれめ",
    "pos": "名詞",
    "meaning": "裂缝 / 中断处 / 告一段落的地方。物体断开的地方，或时间、动作连续过程中的间歇与停顿。",
    "example_jp": "雨の切れ目を狙って、急いで近くのコンビニまで買い物に出た。",
    "example_cn": "看准雨停的间隙，急忙出门去附近的便利店买东西。"
  },
  {
    "id": 914,
    "word": "ぐちっぽい",
    "kanji": "愚痴っぽい",
    "kana": "ぐちっぽい",
    "pos": "形容詞",
    "meaning": "爱发牢骚的 / 爱抱怨的。指性格或状态倾向于不断诉说对现状的不满或无可奈何的事情。",
    "example_jp": "彼は仕事のストレスが溜まっているのか、最近少し愚痴っぽい。",
    "example_cn": "他可能是积攒了工作压力，最近有点爱发牢骚。"
  },
  {
    "id": 915,
    "word": "しいれる",
    "kanji": "仕入れる",
    "kana": "しいれる",
    "pos": "他動詞",
    "meaning": "采购 / 进货 / 获取(信息)。为了销售或加工而买入商品、原料；也可引申指收集知识或情报。",
    "example_jp": "毎朝早く市場へ行き、その日一番新鮮な魚を仕入れている。",
    "example_cn": "每天清晨去市场，采购当天最新鲜的鱼。"
  },
  {
    "id": 916,
    "word": "とびちる",
    "kanji": "飛び散る",
    "kana": "とびちる",
    "pos": "自動詞",
    "meaning": "飞溅 / 飘散。细小的物体或液体等向四面八方飞出散落。",
    "example_jp": "グラスが床に落ちて割れ、細かいガラスの破片が部屋中に飛び散った。",
    "example_cn": "玻璃杯掉到地板上碎了，细小的玻璃碎片飞溅到了整个房间。"
  },
  {
    "id": 917,
    "word": "よびとめる",
    "kanji": "呼び止める",
    "kana": "よびとめる",
    "pos": "他動詞",
    "meaning": "叫住。发出声音呼唤正在走或正要离开的人，使其停下脚步。",
    "example_jp": "駅の改札口で、後ろから急に誰かに名前を呼び止められた。",
    "example_cn": "在车站的检票口，突然被谁从后面叫住了名字。"
  },
  {
    "id": 918,
    "word": "かこう",
    "kanji": "囲う",
    "kana": "かこう",
    "pos": "他動詞",
    "meaning": "围起来 / 储藏 / 隐藏。用栅栏、屏障等将某物四周遮挡包围；引申为把人或物秘密藏匿、保护起来不让人发现。",
    "example_jp": "冷たい冬の隙間風を防ぐために、家の周りを板でしっかりと囲った。",
    "example_cn": "为了防止寒冷冬天的穿堂风，用木板把房子周围严实地围了起来。"
  },
  {
    "id": 919,
    "word": "すれる",
    "kanji": "擦れる",
    "kana": "すれる",
    "pos": "自動詞",
    "meaning": "摩擦 / 磨损 / 变得世故。物体表面相互接触滑动而产生损耗；引申指人在社会中摸爬滚打后失去了最初的纯真，变得圆滑老练。",
    "example_jp": "ズボンの裾が何度も地面に擦れて、すっかり布が薄くなっている。",
    "example_cn": "裤脚多次在地面上摩擦，布料已经完全变薄了。"
  },
  {
    "id": 920,
    "word": "よそおう",
    "kanji": "装う",
    "kana": "よそおう",
    "pos": "他動詞",
    "meaning": "打扮 / 假装。穿戴服饰使外表整洁美观；引申为掩饰内心真实想法或状态，表面上做出另一种样子。",
    "example_jp": "彼は内心とても焦っていたが、表面上は平静を装って対応した。",
    "example_cn": "他内心非常焦急，但表面上假装平静进行了应对。"
  },
  {
    "id": 921,
    "word": "かおまけ",
    "kanji": "顔負け",
    "kana": "かおまけ",
    "pos": "名詞 / 自動詞",
    "meaning": "自愧不如 / 羞愧。看到对方高超的能力或厚颜无耻的程度，觉得自己比不上而感到不好意思或退缩。",
    "example_jp": "彼女の豊富な専門知識には、プロの技術者でさえ顔負けする。",
    "example_cn": "她那丰富的专业知识，连专业的工程师都自愧不如。"
  },
  {
    "id": 922,
    "word": "かるがるしい",
    "kanji": "軽々しい",
    "kana": "かるがるしい",
    "pos": "形容詞",
    "meaning": "轻率的 / 冒失的。未经过深思熟虑就轻易做出言行，缺乏稳重和慎重。",
    "example_jp": "まだ十分な証拠がない段階で、軽々しい発言は控えるべきだ。",
    "example_cn": "在还没有充分证据的阶段，应当控制轻率的发言。"
  },
  {
    "id": 923,
    "word": "いいちらす",
    "kanji": "言い散らす",
    "kana": "いいちらす",
    "pos": "他動詞",
    "meaning": "口无遮拦地说 / 到处乱说。不顾场合和对方的感受，随便地说出毫无根据的话或抱怨。",
    "example_jp": "彼は腹を立てると、周囲の人に向かって不満を言い散らす癖がある。",
    "example_cn": "他一生气，就有向周围的人到处乱发不满的坏习惯。"
  },
  {
    "id": 924,
    "word": "きやすい",
    "kanji": "気安い",
    "kana": "きやすい",
    "pos": "形容詞",
    "meaning": "轻松的 / 随便的 / 不拘束的。表示心理上没有顾虑，可以随便搭话或拜托事情的轻松氛围。",
    "example_jp": "彼は誰に対しても気安く話しかけるので、すぐに友達ができる。",
    "example_cn": "他对谁都能轻松不拘束地搭话，所以马上就能交到朋友。"
  },
  {
    "id": 925,
    "word": "ま〜",
    "kanji": "真〜",
    "kana": "ま〜",
    "pos": "接頭辞",
    "meaning": "纯粹的 / 正中心的 / 极度的。接在名词或形容词前，强调程度达到极限，或表示位置、时间的绝对中心和不掺假。",
    "example_jp": "真冬の冷たい風が吹く中を、コートも着ずに歩くのは無謀だ。",
    "example_cn": "在刮着隆冬寒风的天气里，连大衣都不穿就走路是很鲁莽的。"
  },
  {
    "id": 926,
    "word": "さかだち",
    "kanji": "逆立ち",
    "kana": "さかだち",
    "pos": "名詞 / 自動詞",
    "meaning": "倒立 / (惯用语)无论如何也办不到。头朝下脚朝上的姿势；常以「逆立ちしても」的形式，比喻倾尽全力也无法做到某事。",
    "example_jp": "彼の実力には、私が逆立ちしても到底敵わないだろう。",
    "example_cn": "对于他的实力，我倒立（倾尽全力）也绝不可能匹敌吧。"
  },
  {
    "id": 927,
    "word": "はじ",
    "kanji": "恥",
    "kana": "はじ",
    "pos": "名詞",
    "meaning": "耻辱 / 丢脸。因做错了事、不如人或违背道德而感到没有面子、羞愧的心情或事实。",
    "example_jp": "分からないことを人に聞くのは、決して恥ではない。",
    "example_cn": "把不懂的事情去问别人，绝对不是耻辱。"
  },
  {
    "id": 928,
    "word": "とりたてる",
    "kanji": "取り立てる",
    "kana": "とりたてる",
    "pos": "他動詞",
    "meaning": "强行征收 / 提拔 / 特别提及。强制收回债款或税金；将某人提升到特别的职位；在否定句中指“特别值得一提”。",
    "example_jp": "今回の会議では、特にこれといって取り立てるほどの結論は出なかった。",
    "example_cn": "在这次的会议上，没有得出特别值得一提的结论。"
  },
  {
    "id": 929,
    "word": "こよみ",
    "kanji": "暦",
    "kana": "こよみ",
    "pos": "名詞",
    "meaning": "日历 / 历法。记录年、月、日、星期、节气等时间推移的系统或印刷品。",
    "example_jp": "暦の上ではもう春だが、まだまだ厳しい寒さが続いている。",
    "example_cn": "在日历上已经是春天了，但严酷的寒冷依然还在持续。"
  },
  {
    "id": 930,
    "word": "おしえ",
    "kanji": "教え",
    "kana": "おしえ",
    "pos": "名詞",
    "meaning": "教导 / 教诲 / 教义。长辈、老师传授的知识、道理；或者宗教、思想体系中的核心原则与戒律。",
    "example_jp": "祖父から受けた厳しくも温かい教えは、今も私の心に生きている。",
    "example_cn": "从祖父那里得到的严厉而温暖的教诲，至今仍活在我的心中。"
  },
  {
    "id": 931,
    "word": "ふち",
    "kanji": "淵",
    "kana": "ふち",
    "pos": "名詞",
    "meaning": "深渊 / 深潭。水流缓慢且很深的地方；常用来比喻陷入难以脱身的危险或绝望的境地。",
    "example_jp": "事業に失敗し、彼は深い絶望の淵に立たされてしまった。",
    "example_cn": "事业失败，他被迫站在了深深的绝望的深渊之中。"
  },
  {
    "id": 932,
    "word": "かすれる",
    "kanji": "掠れる",
    "kana": "かすれる",
    "pos": "自動詞",
    "meaning": "嘶哑 / 模糊 / 擦过。声音变哑不清晰；写字、印刷的墨迹因变淡而看不清；或物体轻轻擦过表面。",
    "example_jp": "風邪を引いてしまったらしく、喉が痛くて声が掠れている。",
    "example_cn": "似乎是感冒了，喉咙痛，声音也变得嘶哑了。"
  },
  {
    "id": 933,
    "word": "まるまる",
    "kanji": "丸々",
    "kana": "まるまる",
    "pos": "副詞",
    "meaning": "完全 / 整个 / 胖乎乎。表示毫无保留、全部包含在内；或者形容物体、身体圆润饱满的样子。",
    "example_jp": "あの難しい作業を一人で終わらせるには、丸々三日はかかるだろう。",
    "example_cn": "要把那项困难的工作一个人做完，大概需要整整三天吧。"
  },
  {
    "id": 934,
    "word": "さす",
    "kanji": "挿す",
    "kana": "さす",
    "pos": "他動詞",
    "meaning": "插入 / 插花。将细长的东西放进洞孔、缝隙中，如插花、插发簪等，使其固定在里面。",
    "example_jp": "庭で摘んだ綺麗なバラの花を、ガラスの大きな花瓶に挿した。",
    "example_cn": "把在庭院里摘的美丽玫瑰花，插进了玻璃大花瓶里。"
  },
  {
    "id": 935,
    "word": "みつぐ",
    "kanji": "貢ぐ",
    "kana": "みつぐ",
    "pos": "他動詞",
    "meaning": "资助 / 供给金钱。为了某人（常带有单方面牺牲奉献的语感，如给心仪的对象）提供经济上的支援。",
    "example_jp": "彼女は自分が稼いだ給料のほとんどを、恋人に貢いでいた。",
    "example_cn": "她把自赚薪水的大部分，都资助给了恋人。"
  },
  {
    "id": 936,
    "word": "なえ",
    "kanji": "苗",
    "kana": "なえ",
    "pos": "名詞",
    "meaning": "幼苗 / 秧苗。为了移植而培育出来的植物的幼小状态，特指水稻、蔬菜的苗。",
    "example_jp": "春の雨が降る中、農家の人たちは田んぼに稲の苗を植え始めた。",
    "example_cn": "在下着春雨的时候，农户们开始在田里插稻子的秧苗。"
  },
  {
    "id": 937,
    "word": "まぎれる",
    "kanji": "紛れる",
    "kana": "まぎれる",
    "pos": "自動詞",
    "meaning": "混入 / 分心 / 难以辨认。混杂在其他事物中无法区分；或指注意力被其他事物吸引，忘记了本来的痛苦或情绪。",
    "example_jp": "楽しい音楽を聴いていると、一時的にでも悲しみが紛れる。",
    "example_cn": "听着快乐的音乐，哪怕是暂时的，悲伤也能得到排解。"
  },
  {
    "id": 938,
    "word": "もてなす",
    "kanji": "持て成す",
    "kana": "もてなす",
    "pos": "他動詞",
    "meaning": "款待 / 招待。用心准备酒菜或服务，热情地接待客人，表达欢迎之意。",
    "example_jp": "遠方からわざわざ来てくれた友人を、手料理で心を込めて持て成した。",
    "example_cn": "用亲手做的菜，用心款待了特意从远方赶来的朋友。"
  },
  {
    "id": 939,
    "word": "たつ",
    "kanji": "絶つ",
    "kana": "たつ",
    "pos": "他動詞",
    "meaning": "断绝 / 戒除。切断一直以来的联系或延续的状态；强行停止原本习惯的行为，如戒烟、戒酒。",
    "example_jp": "健康診断で異常が見つかったため、彼は思い切って酒を絶つことにした。",
    "example_cn": "因为在体检中发现了异常，他下定决心戒酒。"
  },
  {
    "id": 940,
    "word": "きがる",
    "kanji": "気軽",
    "kana": "きがる",
    "pos": "形容動詞",
    "meaning": "轻松 / 毫无顾虑。心情上没有负担，不拘泥于形式，可以随心所欲地做某事的状态。",
    "example_jp": "何か困ったことや質問があれば、いつでも気軽に相談してください。",
    "example_cn": "如果有什么困难或疑问，请随时毫无顾虑地来商量。"
  },
  {
    "id": 941,
    "word": "わるびれる",
    "kanji": "悪びれる",
    "kana": "わるびれる",
    "pos": "自動詞",
    "meaning": "感到怯懦 / 表现出歉意。做了不好的事后感到难为情或退缩；现代日语中多以否定形式出现，表示“毫不在乎、毫无歉意”。",
    "example_jp": "彼は約束をすっぽかしたのに、全く悪びれる様子もなく現れた。",
    "example_cn": "他明明爽约了，却连丝毫歉意都没有地出现了。"
  },
  {
    "id": 942,
    "word": "のきなみ",
    "kanji": "軒並み",
    "kana": "のきなみ",
    "pos": "名詞 / 副詞",
    "meaning": "挨家挨户 / 全部 / 普遍。本义是房屋的屋檐一字排开；引申为作为副词使用，表示“毫无例外地全都受到同样的巨大影响”。",
    "example_jp": "歴史的な不況の影響で、この商店街の店は軒並み売り上げを落としている。",
    "example_cn": "受历史性经济不景气的影响，这条商业街的店铺普遍销售额都在下降。"
  },
  {
    "id": 943,
    "word": "とりのこす",
    "kanji": "取り残す",
    "kana": "とりのこす",
    "pos": "他動詞",
    "meaning": "留下 / 抛在后面。在自己离开或前进时，把某人或某物留在原来的地方不带走。",
    "example_jp": "急激なデジタル化の波によって、高齢者が社会から取り残される恐れがある。",
    "example_cn": "随着急剧的数字化浪潮，老年人有被社会抛在后面的风险。"
  },
  {
    "id": 944,
    "word": "ひとけ",
    "kanji": "人気",
    "kana": "ひとけ",
    "pos": "名詞",
    "meaning": "人的气息 / 人影。能感觉出有人存在的气息或迹象，通常用于描写寂静无人的环境（带否定）。",
    "example_jp": "真夜中の公園は全く人気がなく、風の音だけが不気味に響いていた。",
    "example_cn": "半夜的公园里完全没有人的气息，只有风声令人毛骨悚然地回荡着。"
  },
  {
    "id": 945,
    "word": "きょうみしんしん",
    "kanji": "興味津々",
    "kana": "きょうみしんしん",
    "pos": "名詞 / 形容動詞",
    "meaning": "兴致勃勃 / 极感兴趣。对某个事物抱有源源不断涌现出来的强烈好奇心和求知欲的状态。",
    "example_jp": "子供たちは、マジシャンが披露する不思議な手品に興味津々だった。",
    "example_cn": "孩子们对魔术师展示的不可思议的魔术极感兴趣。"
  },
  {
    "id": 946,
    "word": "おももち",
    "kanji": "面持ち",
    "kana": "おももち",
    "pos": "名詞",
    "meaning": "面容 / 神色 / 表情。从脸上透露出的内心感情状态，强调呈现出的某种氛围或神态。",
    "example_jp": "合格発表の掲示板の前に立つ彼の面持ちは、非常に緊張していた。",
    "example_cn": "站在合格发表公告板前的他，神色非常紧张。"
  },
  {
    "id": 947,
    "word": "あまんじる",
    "kanji": "甘んじる",
    "kana": "あまんじる",
    "pos": "自動詞",
    "meaning": "甘愿 / 安于 / 忍受。对不够理想的现状、低下的地位或不合理的待遇，不再做反抗而默默接受。",
    "example_jp": "彼は才能があるのに、ずっと現在の低い地位に甘んじている。",
    "example_cn": "他明明有才能，却一直安于目前低下的地位。"
  },
  {
    "id": 948,
    "word": "なんだかんだ",
    "kanji": "何だかんだ",
    "kana": "なんだかんだ",
    "pos": "副詞",
    "meaning": "这啊那啊的 / 这样那样。表示提出各种各样的理由、借口，或事物繁多混杂的状况。",
    "example_jp": "何だかんだと理由をつけて、彼は結局今日の会議にも出席しなかった。",
    "example_cn": "找了这样那样的理由，他结果还是没有出席今天的会议。"
  },
  {
    "id": 949,
    "word": "うちやぶる",
    "kanji": "打ち破る",
    "kana": "うちやぶる",
    "pos": "他動詞",
    "meaning": "打破 / 击败 / 破除。物理上打碎某物；或击败强敌；引申为破坏旧的规矩、打破停滞的僵局或沉默。",
    "example_jp": "チーム一丸となって、ついに長年無敗だった強豪校を打ち破った。",
    "example_cn": "团队团结一致，终于击败了多年不败的强校。"
  },
  {
    "id": 950,
    "word": "のぞむ",
    "kanji": "臨む",
    "kana": "のぞむ",
    "pos": "自動詞",
    "meaning": "面临 / 面对 / 出席。面对某种环境或海/河等自然景观；面临重大局面、仪式；以某种严肃的心态去面对挑战。",
    "example_jp": "選手たちは万全の準備を整え、強い決意を持って明日の決勝戦に臨む。",
    "example_cn": "选手们做好了万全的准备，带着坚定的决心去面对明天的决赛。"
  },
  {
    "id": 951,
    "word": "なごむ",
    "kanji": "和む",
    "kana": "なごむ",
    "pos": "自動詞",
    "meaning": "缓和 / 平静 / 融洽。本义指紧张的状态或气氛变得缓和、轻松。常用于人的心情放松，或原本僵硬、对立的人际关系及气氛变得温和。",
    "example_jp": "彼の冗談のおかげで、会議の張り詰めた空気が和んだ。",
    "example_cn": "多亏了他的玩笑，会议紧张的气氛缓和了。"
  },
  {
    "id": 952,
    "word": "ばける",
    "kanji": "化ける",
    "kana": "ばける",
    "pos": "自動詞",
    "meaning": "变化 / 乔装 / 异变。本义指妖怪等改变形态，引申为改变原本的样貌、性质，伪装成其他事物。也常用于原本微不足道的事物突然变成具有巨大价值或意想不到的结果。",
    "example_jp": "わずか十万円の投資が、数年で一千万円に化けた。",
    "example_cn": "仅仅十万日元的投资，在几年后变成了一千万日元。"
  },
  {
    "id": 953,
    "word": "くちコミ",
    "kanji": "口コミ",
    "kana": "くちコミ",
    "pos": "名詞",
    "meaning": "口碑 / 口头传闻。由「口頭でのコミュニケーション」简略而来。指消费者之间通过口头、网络评价等方式传递关于商品、服务的信息。",
    "example_jp": "このレストランは口コミで評判が広がり、連日満席となっている。",
    "example_cn": "这家餐厅通过口碑传开了名声，连日满座。"
  },
  {
    "id": 954,
    "word": "よこづな",
    "kanji": "横綱",
    "kana": "よこづな",
    "pos": "名詞",
    "meaning": "横纲 / 顶尖者。本义为相扑力士的最高级别。引申指在某个领域中实力最强、地位最高的人或事物。",
    "example_jp": "彼はIT業界における横綱とも言える存在だ。",
    "example_cn": "他可以说是IT业界横纲般的存在。"
  },
  {
    "id": 955,
    "word": "ひきこむ",
    "kanji": "引き込む",
    "kana": "ひきこむ",
    "pos": "他動詞 / 自動詞",
    "meaning": "拉入 / 吸引 / 隐退。核心意义是将外界的人或事物拉入内部。常引申为将人卷入某事，或凭借魅力将他人的注意力强烈地吸引过来（如文章、表演）。",
    "example_jp": "彼女の迫真の演技は、観客を一瞬で物語の世界に引き込んだ。",
    "example_cn": "她逼真的演技，瞬间将观众拉入了故事的世界。"
  },
  {
    "id": 956,
    "word": "やかた",
    "kanji": "館",
    "kana": "やかた",
    "pos": "名詞",
    "meaning": "公馆 / 宅邸。指规模宏大、外观气派的房屋，多用于贵族、富豪的宅邸，或指代某些特定的公共建筑。带有复古或庄重的语感。",
    "example_jp": "森の奥深くには、誰も住んでいない古い館がひっそりと建っていた。",
    "example_cn": "在森林深处，静静地矗立着一座无人居住的古老宅邸。"
  },
  {
    "id": 957,
    "word": "うすっぺら",
    "kanji": "薄っぺら",
    "kana": "うすっぺら",
    "pos": "名詞 / な形容詞",
    "meaning": "极薄 / 浅薄。本义指物理上的厚度非常薄。引申指人的言行、思想缺乏深度，或事物的内容空洞、没有价值，带有贬义色彩。",
    "example_jp": "彼の薄っぺらな同情の言葉は、私の心には全く響かなかった。",
    "example_cn": "他浅薄的同情之词，完全没有打动我的心。"
  },
  {
    "id": 958,
    "word": "とむ",
    "kanji": "富む",
    "kana": "とむ",
    "pos": "自動詞",
    "meaning": "富有 / 丰富。本义指财富众多。广泛引申为某事物内部含有丰富的某种优良性质、经验、资源或变化，强调充足的状态。",
    "example_jp": "彼女は長年の海外生活で培われた、国際感覚に富む人材だ。",
    "example_cn": "她是在长年的海外生活中培养出的、富有国际观念的人才。"
  },
  {
    "id": 959,
    "word": "きかざる",
    "kanji": "着飾る",
    "kana": "きかざる",
    "pos": "他動詞 / 自動詞",
    "meaning": "盛装打扮。指穿上华丽的衣服装饰自己，通常用于参加宴会、仪式等特殊场合，强调外表的华美。",
    "example_jp": "パーティーの会場には、美しく着飾った男女が集まっていた。",
    "example_cn": "派对会场里，聚集了盛装打扮的男女。"
  },
  {
    "id": 960,
    "word": "そまる",
    "kanji": "染まる",
    "kana": "そまる",
    "pos": "自動詞",
    "meaning": "染上 / 沾染。本义指布料等附着上颜色。引申指受到外界思想、习惯、环境的强烈影响，从而改变了原有的性质，既可用于好的影响，也可用于坏的沾染。",
    "example_jp": "彼は大学に入ってから、すっかりギャンブルに染まってしまった。",
    "example_cn": "他进入大学后，完全染上了赌博。"
  },
  {
    "id": 961,
    "word": "ものたりない",
    "kanji": "物足りない",
    "kana": "ものたりない",
    "pos": "い形容詞",
    "meaning": "美中不足 / 不够满足。感觉某事物虽然存在，但在分量、程度或内容上还差一点，无法让人感到完全满足或充分。",
    "example_jp": "料理の味は悪くないが、香辛料が少し物足りない気がする。",
    "example_cn": "料理的味道不错，但感觉香辛料稍微有点不够。"
  },
  {
    "id": 962,
    "word": "そなえる",
    "kanji": "供える",
    "kana": "そなえる",
    "pos": "他動詞",
    "meaning": "供奉 / 献上。指将物品（如鲜花、食物）放置在神佛、死者或贵人面前，表达敬意、哀悼或信仰的动作。",
    "example_jp": "祖父の仏壇に、彼の好きだった季節の果物を供えた。",
    "example_cn": "在祖父的佛龛前，供奉了他生前喜欢的应季水果。"
  },
  {
    "id": 963,
    "word": "かまえ",
    "kanji": "構え",
    "kana": "かまえ",
    "pos": "名詞",
    "meaning": "姿态 / 架势 / 结构。指身体或心理上为应对某种情况而做出的准备姿态；也指建筑物的外观结构或门面。",
    "example_jp": "突然の質問に対しても、彼女は少しも慌てず、余裕の構えを見せた。",
    "example_cn": "面对突然的提问，她也丝毫不慌，展现出了从容的姿态。"
  },
  {
    "id": 964,
    "word": "こける",
    "kanji": "転ける",
    "kana": "こける",
    "pos": "自動詞",
    "meaning": "摔倒 / 失败。本义指人或物体失去平衡而倒下。在口语（尤指关西腔）中常引申为计划失败、事情进展不顺利。",
    "example_jp": "雨で濡れた階段で足を滑らせて、派手に転けてしまった。",
    "example_cn": "在被雨淋湿的楼梯上滑了一跤，狠狠地摔倒了。"
  },
  {
    "id": 965,
    "word": "ねる",
    "kanji": "練る",
    "kana": "ねる",
    "pos": "他動詞",
    "meaning": "揉捏 / 推敲 / 锻炼。本义指将粉末与液体混合并反复揉捣至粘稠。引申指反复修改、完善计划或文章（推敲），以及锻炼技艺、品格使其成熟。",
    "example_jp": "プロジェクトを成功させるため、チーム全員で夜遅くまで対策を練った。",
    "example_cn": "为了让项目成功，团队全体人员推敲对策直到深夜。"
  },
  {
    "id": 966,
    "word": "とぼしい",
    "kanji": "乏しい",
    "kana": "とぼしい",
    "pos": "い形容詞",
    "meaning": "缺乏的 / 贫乏的。指某事物在数量、种类或程度上不足，达不到需要的标准。常用于资金、经验、资源或表情等。",
    "example_jp": "彼は技術はあるが、実務経験が乏しいため、リーダーには向いていない。",
    "example_cn": "他虽然有技术，但因为缺乏实务经验，不适合当领导。"
  },
  {
    "id": 967,
    "word": "おもいたつ",
    "kanji": "思い立つ",
    "kana": "おもいたつ",
    "pos": "他動詞 / 自動詞",
    "meaning": "萌生念头 / 下定决心。指突然在心里产生做某事的想法，并下定决心去实行，强调动机的突然出现和决意。",
    "example_jp": "彼は突然、世界一周の旅に出ようと思い立った。",
    "example_cn": "他突然萌生了去环游世界旅行的念头。"
  },
  {
    "id": 968,
    "word": "こころえ",
    "kanji": "心得",
    "kana": "こころえ",
    "pos": "名詞",
    "meaning": "须知 / 心得 / 规矩。指从事某项工作或处于某个立场时，必须理解、掌握的知识、注意事项或行为准则。",
    "example_jp": "接客業の心得として、常に笑顔を絶やさないことが重要だ。",
    "example_cn": "作为服务业的须知，始终保持笑容是很重要的。"
  },
  {
    "id": 969,
    "word": "すみきる",
    "kanji": "澄み切る",
    "kana": "すみきる",
    "pos": "自動詞",
    "meaning": "清澈见底 / 晴朗无云。指水、空气、天空等完全没有杂质、浑浊，呈现出极其清澈透明的状态；也形容人的声音清脆或心境澄明。",
    "example_jp": "台風が過ぎ去った後、空には澄み切った青空が広がっていた。",
    "example_cn": "台风过去后，天空中展现出了清澈的蓝天。"
  },
  {
    "id": 970,
    "word": "たちまわる",
    "kanji": "立ち回る",
    "kana": "たちまわる",
    "pos": "自動詞",
    "meaning": "行动 / 周旋 / 扮演。指在某种局面下，为了对自己有利而采取的行动或应对方式；在戏剧中指演员在舞台上的动作（武打等）。",
    "example_jp": "彼は社内の権力闘争の中で、常に有利な立場になるよううまく立ち回った。",
    "example_cn": "在公司内的权力斗争中，他总是巧妙地周旋，以处于有利的立场。"
  },
  {
    "id": 971,
    "word": "わたりどり",
    "kanji": "渡り鳥",
    "kana": "わたりどり",
    "pos": "名詞",
    "meaning": "候鸟。本义指随季节变化而迁徙的鸟类。比喻为了寻找工作或更好的居所而频繁改变地方的人（如自由职业者、流动工人）。",
    "example_jp": "越冬のために、遠くシベリアから何千羽もの渡り鳥が飛来した。",
    "example_cn": "为了越冬，数千只候鸟从遥远的西伯利亚飞来了。"
  },
  {
    "id": 972,
    "word": "くび",
    "kanji": "首",
    "kana": "くび",
    "pos": "名詞",
    "meaning": "脖子 / 头部 / 解雇。本义为连接头部与躯干的部位。在日语习惯中常代指头部、生命，或引申为被公司解雇（免职）。",
    "example_jp": "業績悪化のため、彼は突然会社から首を言い渡された。",
    "example_cn": "由于业绩恶化，他突然被公司宣布了解雇。"
  },
  {
    "id": 973,
    "word": "きずく",
    "kanji": "築く",
    "kana": "きずく",
    "pos": "他動詞",
    "meaning": "构筑 / 建立。本义指用土石等堆砌建造城墙或建筑物。引申指通过长期的努力，建立起稳固的基础、地位、财产或人际关系。",
    "example_jp": "長年の絶え間ない努力によって、彼は莫大な財産を築いた。",
    "example_cn": "通过长年不断的努力，他建立起了巨大的财产。"
  },
  {
    "id": 974,
    "word": "かがやかしい",
    "kanji": "輝かしい",
    "kana": "かがやかしい",
    "pos": "い形容詞",
    "meaning": "辉煌的 / 光辉的。指光芒耀眼的状态。常用于比喻成绩、未来、历史等极具光彩、令人引以为豪、充满希望。",
    "example_jp": "彼女はオリンピックで金メダルを獲得するという、輝かしい成績を残した。",
    "example_cn": "她留下了在奥运会上获得金牌这一辉煌的成绩。"
  },
  {
    "id": 975,
    "word": "とりかえ",
    "kanji": "取り替え",
    "kana": "とりかえ",
    "pos": "名詞",
    "meaning": "更换 / 交换。指将旧的、坏的或不需要的物品，替换成新的或别的物品的动作。",
    "example_jp": "蛍光灯が切れたので、新しいものとの取り替えをお願いします。",
    "example_cn": "荧光灯坏了，所以请帮忙更换新的。"
  },
  {
    "id": 976,
    "word": "とだえる",
    "kanji": "途絶える",
    "kana": "とだえる",
    "pos": "自動詞",
    "meaning": "中断 / 断绝。指原本持续进行或存在的事物（如交通、通信、往来、声音）中途停止，不再继续。",
    "example_jp": "山奥の村は豪雪によって交通が遮断され、外部からの連絡が完全に途絶えた。",
    "example_cn": "深山里的村子因暴雪交通被切断，来自外部的联系完全中断了。"
  },
  {
    "id": 977,
    "word": "おちこむ",
    "kanji": "落ち込む",
    "kana": "おちこむ",
    "pos": "自動詞",
    "meaning": "跌落 / 下滑 / 沮丧。指物体掉入低处；引申为业绩、数值等下降，或指人因遭遇不顺而心情低落、气馁。",
    "example_jp": "試験に不合格になり、彼は部屋に引きこもってひどく落ち込んでいる。",
    "example_cn": "考试没及格，他闭门不出，心情非常沮丧。"
  },
  {
    "id": 978,
    "word": "あいらしい",
    "kanji": "愛らしい",
    "kana": "あいらしい",
    "pos": "い形容詞",
    "meaning": "可爱的 / 惹人怜爱的。指小孩、小动物或小巧的事物，其外貌或举止让人感到喜爱，引人产生想要疼爱的感情。",
    "example_jp": "動物園で生まれたばかりのパンダの赤ちゃんは、とても愛らしい動作で客を喜ばせた。",
    "example_cn": "动物园里刚出生的熊猫宝宝，用非常惹人怜爱的动作让游客们感到高兴。"
  },
  {
    "id": 979,
    "word": "できごころ",
    "kanji": "出来心",
    "kana": "できごころ",
    "pos": "名詞",
    "meaning": "一时冲动 / 偶然产生的邪念。指并非事先预谋，而是在某种情境下偶然产生的、通常是不好的或轻率的念头（如偷窃、出轨）。",
    "example_jp": "机の上に置かれていた財布を見て、つい出来心で盗んでしまった。",
    "example_cn": "看到放在桌子上的钱包，不知不觉就凭一时的冲动偷走了。"
  },
  {
    "id": 980,
    "word": "うらめ",
    "kanji": "裏目",
    "kana": "うらめ",
    "pos": "名詞",
    "meaning": "适得其反 / 反效果。本义为骰子掷出与预期相反的面。引申指为了获得好结果而采取的行动，反而导致了更坏的结果。",
    "example_jp": "彼を助けようとして言ったアドバイスが、完全に裏目に出て怒らせてしまった。",
    "example_cn": "为了帮他而给出的建议，完全适得其反，惹他生气了。"
  },
  {
    "id": 981,
    "word": "もうしぶん",
    "kanji": "申し分",
    "kana": "もうしぶん",
    "pos": "名詞",
    "meaning": "缺点 / 可挑剔的地方。常以「申し分ない（无可挑剔）」的形式出现，指没有值得不满或抱怨的地方，表示非常完美。",
    "example_jp": "彼の提案は、予算の面でも実現性の面でも申し分ない。",
    "example_cn": "他的提案，无论在预算方面还是实现性方面都无可挑剔。"
  },
  {
    "id": 982,
    "word": "おも",
    "kanji": "主",
    "kana": "おも",
    "pos": "名詞 / な形容詞",
    "meaning": "主要 / 核心。指在众多的事物或要素中，处于中心地位、占据最大比例或发挥最大作用的部分。",
    "example_jp": "このプロジェクトの主な目的は、若者層へのブランド認知度を高めることだ。",
    "example_cn": "这个项目的主要目的，是提高在年轻人阶层中的品牌认知度。"
  },
  {
    "id": 983,
    "word": "むきあう",
    "kanji": "向き合う",
    "kana": "むきあう",
    "pos": "自動詞",
    "meaning": "面对面 / 正视。本义指双方脸对着脸互相面对。引申为正面应对、认真处理困难、问题或某人的感情，不逃避。",
    "example_jp": "過去の失敗から逃げずに、しっかりと向き合うことで人は成長する。",
    "example_cn": "不逃避过去的失败，通过好好地正视它，人才能成长。"
  },
  {
    "id": 984,
    "word": "なきむし",
    "kanji": "泣き虫",
    "kana": "なきむし",
    "pos": "名詞",
    "meaning": "爱哭鬼。指一点小事就容易流泪、经常哭泣的人。多带有轻微的戏谑或亲昵色彩，常用于形容儿童或性格软弱者。",
    "example_jp": "子供の頃の彼は大変な泣き虫で、転んだだけで大声で泣き出していた。",
    "example_cn": "小时候的他是非常严重的爱哭鬼，只是摔了一跤就会大声哭起来。"
  },
  {
    "id": 985,
    "word": "おりもの",
    "kanji": "織物",
    "kana": "おりもの",
    "pos": "名詞",
    "meaning": "织物 / 纺织品。指用经线和纬线交织而成的布料，涵盖丝绸、棉布、毛纺织品等，侧重于制作工艺及成品。",
    "example_jp": "京都の西陣織は、日本の伝統的な高級織物として世界的に有名だ。",
    "example_cn": "京都的西阵织，作为日本传统的的高级织物在世界闻名。"
  },
  {
    "id": 986,
    "word": "かり",
    "kanji": "借り",
    "kana": "かり",
    "pos": "名詞",
    "meaning": "借款 / 欠的情 / 恩情。本义指借入的金钱或物品。常引申指欠下他人的人情、恩惠，或者应当报复的仇怨。",
    "example_jp": "苦しい時に助けてもらったこの借りは、いつか必ず返します。",
    "example_cn": "困难时期得到您帮助的这份恩情，总有一天我一定会还的。"
  },
  {
    "id": 987,
    "word": "めめしい",
    "kanji": "女々しい",
    "kana": "めめしい",
    "pos": "い形容詞",
    "meaning": "婆婆妈妈的 / 软弱的。指男性的态度或性格缺乏果断、遇事优柔寡断、容易气馁或拘泥于小事，传统上带有贬低色彩。",
    "example_jp": "終わった恋愛をいつまでも引きずるなんて、女々しい男だ。",
    "example_cn": "对已经结束的恋爱一直拖拖拉拉，真是个婆婆妈妈的男人。"
  },
  {
    "id": 988,
    "word": "つとまる",
    "kanji": "勤まる",
    "kana": "つとまる",
    "pos": "自動詞",
    "meaning": "胜任。指某人的能力、体力或性格足以承担某项工作、职务或角色，能够顺利完成任务。",
    "example_jp": "経験のない私に、社長の秘書という重役が勤まるかどうか不安だ。",
    "example_cn": "对于没有经验的我，能否胜任社长秘书这一重任，我感到不安。"
  },
  {
    "id": 989,
    "word": "きざし",
    "kanji": "兆し",
    "kana": "きざし",
    "pos": "名詞",
    "meaning": "预兆 / 苗头。指事物发生变化之前，表面上显露出来的细微迹象或动向。既可用于好的预兆（如春天的气息），也可用于坏的征兆。",
    "example_jp": "長く続いた不況にも、ようやく回復の兆しが見え始めた。",
    "example_cn": "在持续了很久的经济不景气中，终于开始看到了复苏的预兆。"
  },
  {
    "id": 990,
    "word": "すりむける",
    "kanji": "擦りむける",
    "kana": "すりむける",
    "pos": "自動詞",
    "meaning": "擦破 / 擦伤。指皮肤因与硬物摩擦而破损剥落，通常指表皮受轻伤的状态。",
    "example_jp": "自転車で転んで、膝の皮が酷く擦りむけて血が出た。",
    "example_cn": "骑自行车摔倒，膝盖的皮严重擦破流血了。"
  },
  {
    "id": 991,
    "word": "あらかせぎ",
    "kanji": "荒稼ぎ",
    "kana": "あらかせぎ",
    "pos": "名詞 / 自動詞",
    "meaning": "猛赚 / 疯狂敛财。指不顾及手段、利用某种机会在短时间内赚取大量金钱。常带有投机或做法粗暴的语感。",
    "example_jp": "彼は観光客を狙った違法なビジネスで、一時期かなりの荒稼ぎをしていた。",
    "example_cn": "他利用针对游客的非法生意，曾一度疯狂敛财了不少。"
  },
  {
    "id": 992,
    "word": "ふみこえる",
    "kanji": "踏み越える",
    "kana": "ふみこえる",
    "pos": "他動詞",
    "meaning": "跨越 / 逾越。本义指跨过障碍物或边界。引申指克服困难、越过界限，或者违反常理、超越权限做某事。",
    "example_jp": "常識の枠を踏み越えた斬新なアイデアこそが、今の会社には必要だ。",
    "example_cn": "跨越了常识框架的崭新创意，才是现在的公司所需要的。"
  },
  {
    "id": 993,
    "word": "ついやす",
    "kanji": "費やす",
    "kana": "ついやす",
    "pos": "他動詞",
    "meaning": "耗费 / 投入。指为了达到某个目的而消耗金钱、时间、精力等。也指将资源白白浪费掉。",
    "example_jp": "彼女はこの研究に、自分の青春のすべてを費やしたと言っても過言ではない。",
    "example_cn": "说她将自己青春的全部都耗费在了这项研究上也不为过。"
  },
  {
    "id": 994,
    "word": "いいもらす",
    "kanji": "言い漏らす",
    "kana": "いいもらす",
    "pos": "他動詞",
    "meaning": "漏言 / 忘记说 / 泄露。指该说的事情忘记说了，或者不小心把不该说的事情（秘密）说漏了嘴。",
    "example_jp": "警察の尋問に対して、彼は共犯者の名前をつい言い漏らしてしまった。",
    "example_cn": "面对警察的审问，他不小心把共犯的名字说漏了嘴。"
  },
  {
    "id": 995,
    "word": "はねる",
    "kanji": "刎ねる",
    "kana": "はねる",
    "pos": "他動詞",
    "meaning": "斩首 / 砍下（头颅）。指用刀剑等利器猛力砍下脖颈。具有强烈的血腥和古典色彩，多用于历史剧、小说或比喻果断切断。",
    "example_jp": "裏切り者の首を刎ねるよう、将軍は冷酷に命令を下した。",
    "example_cn": "将军冷酷地下达了命令，要求砍下背叛者的首级。"
  },
  {
    "id": 996,
    "word": "わ",
    "kanji": "輪",
    "kana": "わ",
    "pos": "名詞",
    "meaning": "环 / 圈 / 轮流。本义指圆形的东西（环状物、车轮）。引申指人聚在一起形成的圈子（人际关系、团体），或事件的循环。",
    "example_jp": "子供たちは手をつないで大きな輪を作り、楽しそうに歌を歌った。",
    "example_cn": "孩子们手拉手围成了一个大圈，高兴地唱起了歌。"
  },
  {
    "id": 997,
    "word": "くどきおとす",
    "kanji": "口説き落とす",
    "kana": "くどきおとす",
    "pos": "他動詞",
    "meaning": "说服 / 追求到手。指通过反复劝说、恳求，最终让对方同意或屈服。常用于商业谈判中成功说服对方，或恋爱中成功追求到心仪的对象。",
    "example_jp": "何度も彼の自宅に足を運び、ついにこのプロジェクトへの参加を口説き落とした。",
    "example_cn": "多次拜访他的家，终于成功说服他参加了这个项目。"
  },
  {
    "id": 998,
    "word": "しきる",
    "kanji": "仕切る",
    "kana": "しきる",
    "pos": "他動詞",
    "meaning": "隔开 / 掌管 / 主持。本义指用隔板等将空间分割开来。引申指作为负责人统筹安排、控制场面，或主持某项工作。",
    "example_jp": "彼は若手ながら、今日の重要な会議を一人で立派に仕切った。",
    "example_cn": "他虽然年轻，却一个人出色地主持了今天的重要会议。"
  },
  {
    "id": 999,
    "word": "はえ",
    "kanji": "蠅",
    "kana": "はえ",
    "pos": "名詞",
    "meaning": "苍蝇。双翅目蝇科昆虫的统称。因其常绕着污物飞且发出噪音，在语境中常比喻令人烦躁、挥之不去的人或微不足道却惹人厌的事物。",
    "example_jp": "料理に蠅がたからないように、食事の直前までラップをかけておく。",
    "example_cn": "为了不让苍蝇叮在料理上，直到用餐前都盖着保鲜膜。"
  },
  {
    "id": 1000,
    "word": "おしのける",
    "kanji": "押しのける",
    "kana": "おしのける",
    "pos": "他動詞",
    "meaning": "推开 / 排挤。本义指用力推开挡在前面的人或物。引申为排挤竞争对手，强行将他人排除在自己的道路之外，以达到自己的目的。",
    "example_jp": "バーゲンセールでは、客がお互いを押しのけて商品に群がっていた。",
    "example_cn": "在大减价时，客人们互相推开，群聚在商品周围。"
  },
    ];
// 📝 随手记词汇题库 (Notes)
const noteBank = [
    { 
        id: 1, 
        word: "たっぷり", 
        kanji: "", 
        kana: "たっぷり", 
        meaning: "充分，足够，大量",
        example_jp: "彼は自信たっぷりの態度で面接に臨んだ。",
        example_cn: "他满怀自信地迎接了面试。"
    },
    { 
        id: 2, 
        word: "やがて", 
        kanji: "", 
        kana: "やがて", 
        meaning: "不久，马上；最终，总有一天",
        example_jp: "努力を続ければ、やがて報われる日が来るだろう。",
        example_cn: "只要继续努力，总有一天会得到回报的吧。"
    }
];
